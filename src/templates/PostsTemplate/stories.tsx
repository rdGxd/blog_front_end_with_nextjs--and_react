import { Meta, StoryFn } from "@storybook/react";
import { PostsTemplateProps } from ".";
import { PostsTemplate } from "./PostsTemplate.1";
import mock from "./mock";

export default {
  title: "PostsTemplate",
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof PostsTemplate>;

export const Template: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
