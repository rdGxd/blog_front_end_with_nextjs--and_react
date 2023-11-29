import { Author } from "./author";
import { CategoryType } from "./category";
import { Content } from "./content";
import { Cover } from "./cover";
import { PostTag } from "./tags";

export type StrapiPost = {
  data: {
    id?: number;
    attributes?: StrapiPostAttributes;
  };
  attributes?: StrapiPostAttributes;
};

export type StrapiPostAttributes = {
  blogName?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: Content[];
  allowComments?: boolean;
  createdAt?: string;
  updateAt?: string;
  cover?: Cover;
  tags?: {
    data: PostTag[];
  };
  categories?: CategoryType[];
  author?: Author;
};
