import { PostCardProps } from "@/components/PostCard";
import { Settings } from "@/types/settings";
import { PostGrid } from "../../components/PostGrid";
import { Base } from "../Base";

export type PostsTemplateProps = {
  settings: Settings;
  posts?: {
    data: PostCardProps[];
  };
};

export const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
