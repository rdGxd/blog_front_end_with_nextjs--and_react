import { StrapiPost } from "@/types/StrapiPost";
import Link from "next/link";
import { formatDate } from "../../utils/format-date";
import * as Styled from "./styles";

export type ArticleMetaProps = StrapiPost["attributes"];

export const ArticleMeta = ({ createdAt, author = undefined, categories }: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author !== "undefined" && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.data.attributes.slug}`}>{author.data.attributes.displayName}</Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories && categories.data.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.data.map((category) => {
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
