import { StrapiPost } from "@/types/StrapiPost";
import { PostCard } from "../PostCard";
import * as Styled from "./styles";

export type PostGridProps = {
  posts?: StrapiPost[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {!posts.length && <Styled.NotFound>Nenhum Post</Styled.NotFound>}

      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover}
              excerpt={post.attributes.excerpt}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
