import { AuthorProps } from "@/shared-types/author";
import { CategoryProps } from "@/shared-types/category";
import { CoverProps } from "@/shared-types/cover";
import { ArticleMeta } from "../ArticleMeta";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: CoverProps;
  author: AuthorProps;
  categories: {
    data: CategoryProps[];
  };
  createdAt: string;
};

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: ArticleHeaderProps) => {
  console.log(author.data.attributes.displayName);
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>
        <p>{excerpt}</p>
      </Styled.Excerpt>

      <Styled.Cover src={cover.data.attributes.url} alt={title} />
      <ArticleMeta author={author} categories={categories} createdAt={createdAt} />
    </Styled.Wrapper>
  );
};
