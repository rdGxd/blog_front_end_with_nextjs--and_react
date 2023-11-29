import { StrapiPostAttributes } from "@/types/StrapiPost";
import { StrapiSetting } from "@/types/StrapiSettings";
import { Post } from "../../components/Post";
import { Base } from "../Base";
import * as Styled from "./styles";
import { PostTags } from "@/components/PostTags";

export type PostTemplateProps = {
  settings: StrapiSetting;
  post?: {
    attributes?: StrapiPostAttributes;
  };
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <Base settings={settings}>
      <Post {...post.attributes} />
      <Styled.TagsContainer>
        <PostTags tags={post.attributes.tags} />
      </Styled.TagsContainer>
    </Base>
  );
};
