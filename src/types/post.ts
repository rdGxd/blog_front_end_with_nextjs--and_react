import { Author } from "./author";
import { Category } from "./category";
import { Content } from "./content";
import { Cover } from "./cover";
import { PostTag } from "./tags";

export type PostTypes = {
  data: PostData[];
};

export type PostData = {
  attributes: {
    createdAt: string;
    slug: string;
    excerpt: string;
    content: Content[];
    allowComments: boolean;
    cover: Cover;
    categories: Category;
    tags: PostTag[];
    author: Author;
  };
};
