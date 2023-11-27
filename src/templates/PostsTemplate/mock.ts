import { PostsTemplateProps } from ".";
import { data } from "../../api/dados.json";

export default {
  settings: data.setting.data,
  posts: data.posts.data,
} as PostsTemplateProps;
