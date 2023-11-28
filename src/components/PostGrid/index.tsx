import { PostCard, PostCardProps } from "../PostCard";
import * as Styled from "./styles";

export type PostGridProps = {
  posts?: {
    data: PostCardProps[];
  };
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {!posts.data?.length && <Styled.NotFound>Nenhum Post</Styled.NotFound>}

      <Styled.Grid>
        {posts.data?.length > 0 &&
          posts.data?.map((post) => (
            <>
              <PostCard attributes={post.attributes} key={post.attributes.slug} />
            </>
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
