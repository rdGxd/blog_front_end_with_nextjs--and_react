import { HeaderProps } from ".";
import { data } from "../../api/dados.json";

const { blogDescription, blogName, logo } = data.setting.data.attributes;

export const mockHeader = {
  data: {
    blogDescription,
    blogName,
    logo,
  },
  showText: true,
} as HeaderProps;
