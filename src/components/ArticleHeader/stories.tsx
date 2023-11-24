import { Meta, StoryFn } from "@storybook/react";
import { ArticleHeader, ArticleHeaderProps } from ".";

import mockArticleHeader from "./mock";

export default {
  title: "ArticleHeader",
  component: ArticleHeader,
  args: mockArticleHeader,
  argTypes: {
    createdAt: {
      control: {
        type: "date",
      },
    },
    author: { type: null },
    categories: { type: null },
  },
} as Meta<typeof ArticleHeader>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
