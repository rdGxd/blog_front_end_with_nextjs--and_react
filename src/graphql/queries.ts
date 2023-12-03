import { gql } from "graphql-request";
import { GRAPHQL_FRAGMENTS } from "./fragments";

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: StringFilterInput
    $postSlug: StringFilterInput
    $postSearch: StringFilterInput
    $authorSlug: StringFilterInput
    $tagSlug: StringFilterInput
    $sort: [String] = ["createdAt:desc"]
    $start: Int = 0
    $limit: Int = 3
  ) {
    setting {
      data {
        id
        attributes {
          ...settings
        }
      }
    }

    posts(
      sort: $sort
      filters: {
        slug: $postSlug
        or: [{ title: $postSearch }, { excerpt: $postSearch }]
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
      pagination: { start: $start, limit: $limit }
    ) {
      data {
        id
        attributes {
          ...post
        }
      }
    }
  }
`;
