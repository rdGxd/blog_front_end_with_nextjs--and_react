import { Settings } from "@/types/settings";
import { PostTag } from "@/types/tags";
import { Post, PostProps } from "../../components/Post";
import { PostTags } from "../../components/PostTags";
import { Base } from "../Base";
import * as Styled from "./styles";

type PostTemplateAttributes = PostProps & {
  tags: {
    data: PostTag[];
  };
};

export type PostTemplateProps = {
  settings: Settings;
  post: PostTemplateAttributes;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <Base settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags.data} />
      </Styled.TagsContainer>
    </Base>
  );
};
