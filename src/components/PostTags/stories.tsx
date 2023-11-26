import { Meta, StoryFn } from "@storybook/react";
import { PostTags, PostTagsProps } from ".";
import mockPostTags from "./mock";

export default {
  title: "PostTags",
  component: PostTags,
  args: mockPostTags,
} as Meta<typeof PostTags>;

export const Template: StoryFn<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};
