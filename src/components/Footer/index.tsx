import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};
