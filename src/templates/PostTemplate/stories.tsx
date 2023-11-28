import { StoryFn } from "@storybook/react";
import { PostTemplate, PostTemplateProps } from ".";
import mock from "./mock";

export default {
  title: "PostTemplate",
  component: PostTemplate,
  args: mock,
};

export const Template: StoryFn<PostTemplateProps> = (args) => {
  return (
    <div>
      <PostTemplate {...args} />
    </div>
  );
};
