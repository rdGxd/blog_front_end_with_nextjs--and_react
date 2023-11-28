import { Author } from "./author";
import { CategoryType } from "./category";
import { Content } from "./content";
import { Cover } from "./cover";
import { PostTag } from "./tags";

export type StrapiPost = {
  id?: number;
  attributes?: StrapiPostAttributes;
};

type StrapiPostAttributes = {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: Content[];
  allowComments?: boolean;
  createdAt?: string;
  updateAt?: string;
  cover?: Cover;
  tags?: PostTag[];
  categories?: CategoryType[];
  author?: Author;
};
