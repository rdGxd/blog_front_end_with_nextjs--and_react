import { PostContent } from "@/shared-types/content";
import { ArticleHeader, ArticleHeaderProps } from "../ArticleHeader";
import { HtmlContent } from "../HtmlContent";
import * as Styled from "./styles";

export type PostProps = ArticleHeaderProps & {
  content: PostContent[];
};

export const Post = ({ title, author, categories, content, cover, createdAt, excerpt }: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        author={author}
        categories={categories}
        cover={cover}
        createdAt={createdAt}
        excerpt={excerpt}
        title={title}
      />
      <HtmlContent html={content[0].children[0].text} />
    </Styled.Wrapper>
  );
};
