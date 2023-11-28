import { PostTemplateProps } from ".";
import { data } from "../../api/dados.json";

export default {
  settings: data.setting.data,
  post: data.posts.data[0].attributes,
} as unknown as PostTemplateProps;
