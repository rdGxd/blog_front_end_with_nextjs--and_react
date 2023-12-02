import { StrapiPostAttributes } from "@/shared-types/StrapiPost";
import { StrapiSetting } from "@/shared-types/StrapiSettings";
import { Post } from "../../components/Post";
import { PostTags } from "../../components/PostTags";
import { Base } from "../Base";
import * as Styled from "./styles";

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
