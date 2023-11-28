import { PostGridProps } from ".";
import { data } from "../../api/dados.json";

export default {
  posts: data.posts,
} as unknown as PostGridProps;
