import { Logo } from "./logo";
import { MenuPropsLinks } from "./menu-props-links";

export type HeaderAttributes = {
  blogName: string;
  blogDescription: string;
  logo: Logo;
  menuLink: MenuPropsLinks[];
};
