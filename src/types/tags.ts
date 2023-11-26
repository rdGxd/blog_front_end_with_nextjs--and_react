export type PostTag = {
  id: string;
  attributes: TagAttributes;
};

type TagAttributes = {
  displayName: string;
  slug: string;
};
