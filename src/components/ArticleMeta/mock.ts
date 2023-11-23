import { ArticleMetaProps } from ".";

const mockArticleMeta = {
  createdAt: "2023-11-20T14:23:14.605Z",
  author: {
    data: [
      {
        id: "1",
        attributes: {
          displayName: "Rodrigo Silva",
          slug: "rodrigo-silva",
        },
      },
    ],
  },
  categories: {
    data: [
      {
        id: "4",
        attributes: {
          displayName: "Python",
          slug: "python",
        },
      },
      {
        id: "4",
        attributes: {
          displayName: "TS",
          slug: "TS",
        },
      },
    ],
  },
} as ArticleMetaProps;

export default mockArticleMeta;
