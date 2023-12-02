import request from "graphql-request";
import { vi } from "vitest";
import { cfg } from "../config";
import { defaultLoadPostsVariables, loadPosts } from "./load-posts";

vi.mock("graphql-request");

vi.mock("../graphql/queries", () => {
  return {
    GRAPHQL_QUERY: "A_QUERY",
  };
});

describe("<loadPosts />", () => {
  it("should call request with correct variables", async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(cfg.graphqlURL, "A_QUERY", defaultLoadPostsVariables);
  });

  it("should call request with custom variables", async () => {
    await loadPosts({
      authorSlug: {
        eq: "AUTHOR",
      },
      categorySlug: {
        eq: "CATEGORY",
      },
      postSearch: {
        contains: "SEARCH",
      },
      postSlug: {
        eq: "SLUG",
      },
      tagSlug: {
        eq: "TAG",
      },
      sort: ["createdAt:asc"],
      start: 50,
      limit: 100,
    });
    expect(request).toHaveBeenCalledWith(cfg.graphqlURL, "A_QUERY", {
      ...defaultLoadPostsVariables,
      authorSlug: {
        eq: "AUTHOR",
      },
      categorySlug: {
        eq: "CATEGORY",
      },
      postSearch: {
        contains: "SEARCH",
      },
      postSlug: {
        eq: "SLUG",
      },
      tagSlug: {
        eq: "TAG",
      },
      sort: ["createdAt:asc"],
      start: 50,
      limit: 100,
    });
  });
});
