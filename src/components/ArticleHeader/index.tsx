import { CoverProps } from "@/shared-types/cover";
import { ArticleMeta, ArticleMetaProps } from "../ArticleMeta";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: CoverProps;
} & ArticleMetaProps;

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>
        <p>{excerpt}</p>
      </Styled.Excerpt>

      <Styled.Cover src={cover.data.attributes.url} alt={title} />
      <ArticleMeta author={author} categories={categories} createdAt={createdAt} />
    </Styled.Wrapper>
  );
};
