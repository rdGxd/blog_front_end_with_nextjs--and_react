import { StrapiPost } from "@/types/StrapiPost";
import { StrapiSetting } from "@/types/StrapiSettings";
import { PostGrid } from "../../components/PostGrid";
import { Base } from "../Base";

export type PostsTemplateProps = {
  settings: StrapiSetting;
  posts?: StrapiPost[];
};

export const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
