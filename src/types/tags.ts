export type PostTag = {
  id: number;
  attributes: TagAttributes;
};

type TagAttributes = {
  displayName: string;
  slug: string;
};
