import { PostsTemplateProps } from ".";
import { data } from "../../api/dados.json";

export default {
  settings: data.setting,
  posts: { data: data.posts.data },
} as unknown as PostsTemplateProps;
