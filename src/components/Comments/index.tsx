import { DiscussionEmbed } from "disqus-react";
import * as Styled from "./styles";

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  const config = {
    url: `https://blog-front-end-with-nextjs-and-react-7mj0v0ovq-rdgxd.vercel.app/post/${slug}/`,
    identifier: id,
    title: title,
    language: "pt_BR",
  };

  return (
    <Styled.Wrapper>
      <DiscussionEmbed shortname="blog-do-rodrigo-silva" config={config} />
    </Styled.Wrapper>
  );
};
