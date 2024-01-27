export default function getImageSrc(image: any) {
  return `${process.env.BACKEND_URL}${image.data.attributes.formats.optimized.url}`;
}
