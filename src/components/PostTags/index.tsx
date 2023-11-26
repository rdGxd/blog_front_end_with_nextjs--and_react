import { PostTag } from "@/types/tags";
import Link from "next/link";
import * as Styled from "./styles";

export type PostTagsProps = PostTag;

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tags:{" "}
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.attributes.slug}`}>{tag.attributes.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
