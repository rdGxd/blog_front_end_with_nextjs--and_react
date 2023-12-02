import { StrapiSetting } from "@/shared-types/StrapiSettings";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ToggleTheme } from "../../components/ToggleTheme";
import * as Styled from "./styles";

export type BaseProps = {
  settings: StrapiSetting;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseProps) => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        menuLink={settings.data.attributes.menuLink}
        blogName={settings.data.attributes.blogName}
        logo={settings.data.attributes.logo}
      />

      <Styled.HeaderContainer>
        <Header data={settings.data?.attributes} />
      </Styled.HeaderContainer>

      <Styled.SearchContainer>
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router?.query?.q || ""}
          />
        </form>
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer html={settings.data?.attributes.footer[0].children[0].text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
