export type Category = {
  data: CategoryData[];
};

type CategoryData = {
  id: string;
  attributes: {
    displayName: string;
    slug: string;
  };
};
