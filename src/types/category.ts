export type Category = {
  data: CategoryType[];
};

export type CategoryType = {
  id: number;
  attributes: CategoryAttributes;
};

type CategoryAttributes = {
  displayName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
