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
      filters: {
        slug: $postSlug
        title: $postSearch
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
    ) {
      data {
        attributes {
          ...post
        }
      }
    }
  }
`;
