import { Category } from "@/types/category";
import Link from "next/link";
import { Author } from "../../types/author";
import { formatDate } from "../../utils/format-date";
import * as Styled from "./styles";

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

export const ArticleMeta = ({ createdAt, author = undefined, categories = [] }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author !== "undefined" && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.data.attributes.slug}`}>{author.data.attributes.displayName}</Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-meta-cat-${category.attributes.slug}`}>
                    <Link href={`/category/${category.attributes.slug}`}>{category.attributes.displayName}</Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
