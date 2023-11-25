export type Tags = {
  data: TagsInfos[];
};

type TagsInfos = {
  id: string;
  attributes: TagAttributes;
};

type TagAttributes = {
  displayName: string;
  slug: string;
};
