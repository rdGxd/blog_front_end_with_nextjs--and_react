import { FooterType } from "./footer";
import { MenuPropsLinks } from "./menu-props-links";

export type StrapiSetting = {
  data: {
    id?: number;
    attributes?: StrapiSettingAttributes;
  };
};

export type StrapiSettingAttributes = {
  blogName?: string;
  blogDescription?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  footer?: FooterType;
  logo?: LogoSetting;
  menuLink?: MenuPropsLinks[];
};

export type LogoSetting = {
  data?: {
    id?: number;
    attributes?: LogoAttributes;
  };
};

type LogoAttributes = {
  name?: string;
  alternativeText?: null;
  caption?: null;
  width?: number;
  height?: number;
  formats?: {
    large?: FormatLarge;
    small?: FormatSmall;
    medium?: FormatMedium;
    thumbnail?: FormatThumb;
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: null;
  provider?: string;
  provider_metadata?: {
    public_id?: string;
    resource_type?: string;
  };
  createdAt?: string;
  updatedAt?: string;
};

type FormatLarge = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  height?: number;
  provider_metadata?: {
    public?: string;
    resource_type?: string;
  };
};

type FormatSmall = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  height?: number;
  provider_metadata?: {
    public?: string;
    resource_type?: string;
  };
};

type FormatMedium = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  height?: number;
  provider_metadata?: {
    public?: string;
    resource_type?: string;
  };
};

type FormatThumb = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  height?: number;
  provider_metadata?: {
    public?: string;
    resource_type?: string;
  };
};
