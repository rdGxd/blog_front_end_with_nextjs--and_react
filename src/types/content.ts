export type Content = {
  type: string;
  children: ContentChildren[];
};

export type ContentChildren = {
  text: string;
  type: string;
};
