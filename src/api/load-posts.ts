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
  setting?: StrapiSetting;
  posts?: {
    data: StrapiPost[];
  };
  variables?: LoadPostsVariables;
};
export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: ["createdAt:desc"],
  start: 0,
  limit: 3,
};

export const loadPosts = async (variables: LoadPostsVariables = {}) => {
  const data = await request(cfg.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
