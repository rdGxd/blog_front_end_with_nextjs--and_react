import { StrapiPost } from "@/types/StrapiPost";
import { ArticleMeta } from "../ArticleMeta";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type ArticleHeaderProps = StrapiPost["attributes"];

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>

      <Styled.Cover src={cover?.data.attributes.url} alt={title} />
      <ArticleMeta author={author} categories={categories} createdAt={createdAt} />
    </Styled.Wrapper>
  );
};
