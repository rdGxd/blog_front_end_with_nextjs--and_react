export type PostTag = {
  tags: TagsInfos[];
};

export type TagsInfos = {
  id: string;
  attributes: TagAttributes;
};

type TagAttributes = {
  displayName: string;
  slug: string;
};
