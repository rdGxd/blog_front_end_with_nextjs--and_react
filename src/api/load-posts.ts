import { cfg } from "@/config";
import { GRAPHQL_QUERY } from "@/graphql/queries";
import { PostData } from "@/types/post";
import { Settings } from "@/types/settings";
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
  setting: Settings;
  posts: PostData;
};

export const loadPosts = async (variables: LoadPostsVariables = {}) => {
  const defaultVariables: LoadPostsVariables = {
    sort: ["AAAA-MM-DD"],
    start: 0,
    limit: 10,
  };
  const data = await request(cfg.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
