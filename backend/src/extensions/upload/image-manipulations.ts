import fs from "fs";
import { join } from "path";
import sharp from "sharp";
import pluginUpload from "@strapi/plugin-upload/strapi-server";
import { file } from "@strapi/utils";

const { bytesToKbytes } = file;

const mime = require("mime-types");

const imageManipulation = pluginUpload().services["image-manipulation"];

const writeStreamToFile = (stream, path) =>
  new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(path);
    stream.on("error", reject);
    stream.pipe(writeStream);
    writeStream.on("close", resolve);
    writeStream.on("error", reject);
  });

const getMetadata = (file) =>
  new Promise((resolve, reject) => {
    const pipeline = sharp();
    pipeline.metadata().then(resolve).catch(reject);
    file.getStream().pipe(pipeline);
  });

const resizeFileTo = async (
  file,
  options,
  quality,
  progressive,
  autoOrientation,
  { name, hash, ext, format }
) => {
  const filePath = join(file.tmpWorkingDirectory, hash);

  let sharpInstance = autoOrientation ? sharp().rotate() : sharp();

  if (options.convertToFormat) {
    sharpInstance = sharpInstance.toFormat(options.convertToFormat);
  }

  sharpInstance.resize(options);

  switch (format) {
    case "jpg":
      sharpInstance.jpeg({ quality, progressive, force: false });
      break;
    case "png":
      sharpInstance.png({
        compressionLevel: Math.floor((quality / 100) * 9),
        progressive,
        force: false,
      });
      break;
    case "webp":
      sharpInstance.webp({ quality, force: false });
      break;
    case "avif":
      sharpInstance.avif({ quality });
      break;

    default:
      break;
  }

  await writeStreamToFile(file.getStream().pipe(sharpInstance), filePath);
  const newFile = {
    name,
    hash,
    ext,
    mime: options.convertToFormat ? mime.lookup(ext) : file.mime,
    path: file.path || null,
    getStream: () => fs.createReadStream(filePath),
  };

  const { width, height, size } = (await getMetadata(newFile)) as any;

  Object.assign(newFile, { width, height, size: bytesToKbytes(size) });
  return newFile;
};

const generateResponsiveFormats = async (file) => {
  const { responsiveDimensions = false, autoOrientation = false } = await strapi
    .plugin("upload")
    .service("upload")
    .getSettings();

  if (!responsiveDimensions) {
    return [];
  }

  const quality = 87;
  const progressive = true;
  const formats = [
    {
      name: "optimized",
      width: 500,
      height: 300,
      fit: "cover",
      position: "centre",
      withoutEnlargement: true,
      convertToFormat: "webp",
    },
  ];

  const x1Formats = formats.map((format) => {
    return generateBreakpoint(format.name, {
      file,
      format,
      quality,
      progressive,
      autoOrientation,
    });
  });

  return Promise.all([...x1Formats]);
};

const getFileExtension = (file, { convertToFormat }) => {
  if (!convertToFormat) {
    return file.ext;
  }

  return `.${convertToFormat}`;
};

const generateBreakpoint = async (
  key,
  { file, format, quality, progressive, autoOrientation }
) => {
  const newFile = await resizeFileTo(
    file,
    format,
    quality,
    progressive,
    autoOrientation,
    {
      name: `${key}_${file.name}`,
      hash: `${key}_${file.hash}`,
      ext: getFileExtension(file, format),
      format,
    }
  );
  return {
    key,
    file: newFile,
  };
};

export default () => ({
  ...imageManipulation(),
  generateResponsiveFormats,
});
