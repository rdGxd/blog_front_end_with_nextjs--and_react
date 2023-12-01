import { ArticleMetaProps } from ".";
import { data } from "../../api/dados.json";

const { categories, author, createdAt } = data.posts.data[0].attributes;

const mockArticleMeta = {
  createdAt,
  categories,
  author,
} as ArticleMetaProps;

export default mockArticleMeta;
