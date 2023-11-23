import { AuthorProps } from "@/shared-types/author";
import { CategoryProps } from "@/shared-types/category";
import { formatDate } from "../../utils/format-date";
import * as Styled from "./styles";

export type ArticleMetaProps = {
  createdAt: string;
  author: AuthorProps;
  categories: {
    data: CategoryProps[];
  };
};

export const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.data[0].attributes.slug}`}>{author.data[0].attributes.displayName}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="categories">
          {categories.data.map((category) => {
            return (
              <span key={`article-meta-cat-${category.id}`}>
                <a href={`/category/${category.attributes.slug}`}>{category.attributes.displayName}</a>
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Wrapper>
  );
};
