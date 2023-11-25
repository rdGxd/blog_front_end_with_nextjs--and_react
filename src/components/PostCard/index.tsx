import Link from "next/link";
import { Heading } from "../Heading";
import { PostProps } from "../Post";
import * as Styled from "./styles";

export type PostCardProps = PostProps & {
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover src={cover.data.attributes.url} />
      </Link>

      <Heading size="small" as="h2">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
