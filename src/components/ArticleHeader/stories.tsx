import { Meta, StoryFn } from "@storybook/react";
import { ArticleHeader, ArticleHeaderProps } from ".";

import mockArticleHeader from "./mock";

export default {
  title: "ArticleHeader",
  component: ArticleHeader,
  args: mockArticleHeader,
} as Meta<typeof ArticleHeader>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
