import { BaseProps } from ".";
import { data } from "../../api/dados.json";

export default {
  settings: data.setting.data,
  children: "Olá mundo",
} as unknown as BaseProps;
