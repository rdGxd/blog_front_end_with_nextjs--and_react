import { StrapiPost } from "@/types/StrapiPost";
import { data } from "../../api/dados.json";

export default {
  posts: data.posts.data,
} as StrapiPost;
