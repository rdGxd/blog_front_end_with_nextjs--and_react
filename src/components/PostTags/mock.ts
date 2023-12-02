import { PostTagsProps } from ".";
import { data as info } from "../../api/dados.json";

const { tags } = info.posts.data[0].attributes;

const mockPostTags = {
  tags,
} as PostTagsProps;

export default mockPostTags;
