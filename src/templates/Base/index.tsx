import { GoTop } from "../../components/GoTop";
import { Settings } from "@/types/settings";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import * as Styled from "./styles";

export type BaseProps = {
  settings: Settings;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        menuLink={settings.attributes.menuLink}
        blogName={settings.attributes.blogName}
        logo={settings.attributes.logo}
      />

      <Styled.HeaderContainer>
        <Header data={settings} />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer html={settings.attributes.footer[0].children[0].text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
