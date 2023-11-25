import { PostCardProps } from ".";
import { data } from "../../api/dados.json";

const { title, createdAt, excerpt, content, cover, categories, author, slug } = data.posts.data[0].attributes;

const mockPostCard = {
  slug,
  createdAt,
  cover,
  categories,
  author,
  title,
  excerpt,
  content,
} as PostCardProps;

export default mockPostCard;
