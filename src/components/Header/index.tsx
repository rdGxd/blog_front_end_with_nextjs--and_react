import { StrapiSettingAttributes } from "@/shared-types/StrapiSettings";
import { Heading } from "../Heading";
import { LogoLink } from "../LogoLink";
import * as Styled from "./styles";

export type HeaderProps = {
  data: StrapiSettingAttributes;
  showText?: boolean;
};

export const Header = ({ data, showText = true }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={data?.logo.data.attributes.url}
        text={`${data?.blogName} - ${data?.blogDescription}`}
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {data?.blogName}
          </Heading>
          <p>{data?.blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
