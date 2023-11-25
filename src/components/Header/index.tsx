import { HeaderAttributes } from "@/types/header";
import { Heading } from "../Heading";
import { LogoLink } from "../LogoLink";
import * as Styled from "./styles";

export type HeaderProps = {
  data: {
    id: string;
    attributes: HeaderAttributes;
  };
  showText?: boolean;
};

export const Header = ({ data, showText = true }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={data.attributes.logo.data.attributes.url}
        text={`${data.attributes.blogName} - ${data.attributes.blogDescription}`}
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {data.attributes.blogName}
          </Heading>
          <p>{data.attributes.blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
