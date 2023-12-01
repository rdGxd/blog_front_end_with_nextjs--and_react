import { Author } from "./author";
import { CategoryData } from "./category";
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
    categories: CategoryData;
    tags: PostTag[];
    author: Author;
  };
};
