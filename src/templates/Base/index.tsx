import { StrapiSetting } from "@/types/StrapiSettings";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import * as Styled from "./styles";

export type BaseProps = {
  settings: StrapiSetting;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        menuLink={settings.data.attributes.menuLink}
        blogName={settings.data.attributes.blogName}
        logo={settings.data.attributes.logo}
      />

      <Styled.HeaderContainer>
        <Header data={settings.data?.attributes} />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer html={settings.data?.attributes.footer[0].children[0].text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
