import Link from "next/link";
import { StrapiPostAttributes } from "../../shared-types/StrapiPost";
import * as Styled from "./styles";

export type PostTagsProps = {
  tags?: StrapiPostAttributes["tags"];
};

export const PostTags = ({ tags }: PostTagsProps) => {
  if (tags?.data.length === 0) return null;

  return (
    <Styled.Wrapper>
      tags:{" "}
      {tags?.data.map((tag) => (
        <span key={tag?.id}>
          <Link href={`/tag/${tag?.attributes.slug}`}>{tag?.attributes.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
