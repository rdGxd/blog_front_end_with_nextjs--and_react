import { useState } from "react";
import { LoadPostsVariables, loadPosts } from "../../api/load-posts";
import { PostGrid } from "../../components/PostGrid";
import { Base } from "../Base";
import * as Styled from "./styles";
import { StrapiPost } from "@/types/StrapiPost";
import { StrapiSetting } from "@/types/StrapiSettings";

export type PostsTemplateProps = {
  settings: StrapiSetting;
  posts?: StrapiPost[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({ settings, posts = [], variables }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts.posts || !morePosts.posts.data || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts.data]);
  };

  return (
    <Base settings={settings}>
      <PostGrid posts={statePosts} />
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? "Sem mais posts" : "Carregar mais"}
        </Styled.Button>
      </Styled.ButtonContainer>
    </Base>
  );
};
