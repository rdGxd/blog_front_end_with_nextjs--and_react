import { Meta, StoryFn } from "@storybook/react";
import { ArticleMeta, ArticleMetaProps } from ".";
import mockArticleMeta from "./mock";

export default {
  title: "ArticleMeta",
  component: ArticleMeta,
  args: mockArticleMeta,
  argTypes: {
    createdAt: {
      control: {
        type: "date",
      },
    },
    author: { type: null },
    categories: { type: null },
  },
} as Meta<typeof ArticleMeta>;

export const Template: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} />
    </div>
  );
};

export const NoCategories: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} />
    </div>
  );
};

export const NoAuthorAndCategories: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} author={undefined} />
    </div>
  );
};
