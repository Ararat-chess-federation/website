interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface IImageAttributes extends IImageFormat {
  alternativeText: string | null;
  caption: string | null;
  formats: {
    thumbnail: IImageFormat;
    optimized: IImageFormat;
  };
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IImage {
  id: number;
  attributes: IImageAttributes;
}
