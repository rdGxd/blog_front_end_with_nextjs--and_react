import { PostTagsProps } from ".";
import { data as info } from "../../api/dados.json";

const { data } = info.posts.data[0].attributes.tags;

const mockPostTags = {
  data,
} as PostTagsProps;

export default mockPostTags;
