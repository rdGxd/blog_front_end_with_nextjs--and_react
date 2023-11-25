import { Cover } from "@/types/cover";
import Link from "next/link";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type PostCardProps = {
  title: string;
  excerpt: string;
  cover: Cover;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover src={cover.data.attributes.url} alt={title} />
      </Link>

      <Heading size="small" as="h2">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
