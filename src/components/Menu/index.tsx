import { MenuPropsLinks } from "@/types/menu-props-links";
import { Close as CloseIcon, Menu as MenuIcon } from "@styled-icons/material-outlined";
import { useState } from "react";
import { LogoLink } from "../LogoLink";
import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";
import { LogoSetting } from "@/types/StrapiSettings";

export type MenuProps = {
  blogName: string;
  logo: LogoSetting;
  menuLink: MenuPropsLinks[];
};

export const Menu = ({ blogName, logo, menuLink = [] }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        $menuVisible={menuVisible}
        onClick={handleOpenCloseMenu}
      >
        {menuVisible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>

      <Styled.Wrapper $menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" srcImg={logo?.data?.attributes.url} text={blogName} />
          </Styled.Logo>

          {menuLink.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
