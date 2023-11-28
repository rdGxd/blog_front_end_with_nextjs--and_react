import { ArticleHeaderProps } from ".";
import { data } from "../../api/dados.json";

const { title, excerpt, cover, author, categories, createdAt } = data.posts.data[0].attributes;

const mockArticleHeader = {
  title,
  author,
  categories,
  cover,
  createdAt,
  excerpt,
} as ArticleHeaderProps;

export default mockArticleHeader;
