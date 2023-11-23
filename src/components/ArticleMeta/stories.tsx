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
