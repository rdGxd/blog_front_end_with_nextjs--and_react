import { cfg } from "@/config";
import { GRAPHQL_QUERY } from "@/graphql/queries";
import { StrapiPost } from "@/types/StrapiPost";
import { StrapiSetting } from "@/types/StrapiSettings";
import { request } from "graphql-request";

export type LoadPostsVariables = {
  categorySlug?: {
    eq: string;
  };
  postSlug?: {
    eq: string;
  };
  postSearch?: {
    eq: string;
  };
  authorSlug?: {
    eq: string;
  };
  tagSlug?: {
    eq: string;
  };
  sort?: [string];
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: StrapiSetting;
  posts: {
    data: StrapiPost[];
  };
};

export const loadPosts = async (variables: LoadPostsVariables = {}) => {
  const defaultVariables: LoadPostsVariables = {
    sort: ["AAAA-MM-DD"],
    // pagination: { start: 0, limit: 10 },
    start: 0,
    limit: 10,
  };
  const data = await request(cfg.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
