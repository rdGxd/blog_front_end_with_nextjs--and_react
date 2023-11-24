export type PostContent = {
  type: string;
  children: PostChildren[];
};

export type PostChildren = {
  text: string;
  type: string;
};
