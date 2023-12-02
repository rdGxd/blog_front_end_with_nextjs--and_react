import { Comments } from "@/components/Comments";
import { StrapiPostAttributes } from "@/shared-types/StrapiPost";
import { StrapiSetting } from "@/shared-types/StrapiSettings";
import { Post } from "../../components/Post";
import { PostTags } from "../../components/PostTags";
import { Base } from "../Base";
import * as Styled from "./styles";

export type PostTemplateProps = {
  settings: StrapiSetting;
  post?: {
    id: string;
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

      <Comments
        allowComments={post.attributes.allowComments}
        id={post.id}
        slug={post.attributes.slug}
        title={post.attributes.title}
      />
    </Base>
  );
};
