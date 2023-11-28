import { StrapiPost } from "@/types/StrapiPost";
import { data as info } from "../../api/dados.json";

const { data } = info.posts.data[0].attributes.tags;

const mockPostTags = {
  tags: data,
} as StrapiPost;

export default mockPostTags;
