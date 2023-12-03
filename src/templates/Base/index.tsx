import { StrapiSetting } from "@/shared-types/StrapiSettings";
import { CheckCircleOutline, Cancel } from "@styled-icons/material-outlined";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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
  const [searchValue, setSearchValue] = useState(router?.query?.q || "");
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: "/search/",
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

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
        <Styled.SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="input disabled" />
        ) : (
          <CheckCircleOutline className="search-ok-icon" aria-label="input enabled" />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer html={settings.data?.attributes.footer[0].children[0].text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
