import { PostCardProps } from ".";
import { data } from "../../api/dados.json";

const { title, excerpt, cover, slug } = data.posts.data[0].attributes;

const mockPostCard = {
  title,
  excerpt,
  cover,
  slug,
} as PostCardProps;

export default mockPostCard;
