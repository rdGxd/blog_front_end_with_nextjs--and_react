import { StrapiSetting } from "@/types/StrapiSettings";
import { Heading } from "../Heading";
import { LogoLink } from "../LogoLink";
import * as Styled from "./styles";

export type HeaderProps = {
  data: StrapiSetting;
  showText?: boolean;
};

export const Header = ({ data, showText = true }: HeaderProps) => {
  console.log(data);
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={data.data.attributes.logo.data.attributes.url}
        text={`${data.data.attributes.blogName} - ${data.data.attributes.blogDescription}`}
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {data.data.attributes.blogName}
          </Heading>
          <p>{data.data.attributes.blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
