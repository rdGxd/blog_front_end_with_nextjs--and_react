import { Settings } from "@/types/settings";
import { PostGrid } from "../../components/PostGrid";
import { Base } from "../Base";
import { PostCardProps } from "@/components/PostCard";

export type PostsTemplateProps = {
  settings: Settings;
  posts?: PostCardProps[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
