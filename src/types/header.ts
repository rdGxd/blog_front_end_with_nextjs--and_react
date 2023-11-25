import { Logo } from "./logo";
import { MenuList } from "./menu-list";

export type HeaderAttributes = {
  blogName: string;
  blogDescription: string;
  logo: Logo;
  menuLink: MenuList[];
};
