import { Heading } from "../Heading/index";
import * as Styled from "./styles";

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({ text, srcImg = "", link, newTab = false }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? "_blank" : "_self";

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Styled.Container href={link} passHref target={target}>
          {!!srcImg && <img src={srcImg} alt={text} />}
          {!srcImg && text}
        </Styled.Container>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
