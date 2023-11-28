export type Cover = {
  data: {
    id: number;
    attributes: CoverAttributes;
  };
};

type CoverAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: {
    small: FormatSmall;
    thumbnail: FormatThumb;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};

type FormatSmall = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type FormatThumb = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};
