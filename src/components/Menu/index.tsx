import { LogoProps } from "@/shared-types/logo";
import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { LogoLink } from "../LogoLink";
import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  blogName: string;
  logo: LogoProps;
  menuLink: MenuPropsLinks[];
};

export const Menu = ({ blogName, logo, menuLink }: MenuProps) => {
  return (
    <>
      <Styled.OpenClose href="#" aria-label="Open or close menu" title="Open or close menu">
        <MenuIcon aria-label="Open Menu" />
      </Styled.OpenClose>

      <Styled.Wrapper>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" srcImg={logo.data.attributes.url} text={blogName} />
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
