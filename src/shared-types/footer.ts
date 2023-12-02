export type FooterType = {
  type: string;
  children: FooterChildren[];
};

type FooterChildren = {
  type: string;
  text: string;
};
