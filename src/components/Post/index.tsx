import { ArticleHeader } from "../ArticleHeader";
import { HtmlContent } from "../HtmlContent";
import { PostContainer } from "../PostContainer";
import * as Styled from "./styles";
import { StrapiPostAttributes } from "@/types/StrapiPost";

export type PostProps = StrapiPostAttributes;

export const Post = ({ title, author, categories, content, cover, createdAt, excerpt }: PostProps) => {
  console.log(cover);
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          cover={cover}
          createdAt={createdAt}
          excerpt={excerpt}
          title={title}
        />
      </PostContainer>

      <PostContainer size="content">
        <HtmlContent html={content[0].children[0].text} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
