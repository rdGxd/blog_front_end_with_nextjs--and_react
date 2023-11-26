import { PostProps } from ".";
import { data } from "../../api/dados.json";

const { title, createdAt, excerpt, content, cover, categories, author } = data.posts.data[0].attributes;

const mockPost = {
  createdAt,
  cover,
  categories: categories.data,
  author,
  title,
  excerpt,
  content,
} as PostProps;

export default mockPost;
