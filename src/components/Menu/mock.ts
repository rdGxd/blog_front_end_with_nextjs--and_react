import { MenuProps } from ".";
import { data } from "../../api/dados.json";

const { blogName, logo, menuLink } = data.setting.data.attributes;

const mockMenu = {
  blogName,
  logo,
  menuLink,
} as MenuProps;

export default mockMenu;
