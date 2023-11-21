import { HtmlContent } from "../HtmlContent";
import * as Styled from "./styles";

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={html} />
    </Styled.Container>
  );
};
