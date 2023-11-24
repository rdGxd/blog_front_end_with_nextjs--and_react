import { Meta, StoryFn } from "@storybook/react";
import { Post, PostProps } from ".";
import mockPost from "./mock";

export default {
  title: "Post",
  component: Post,
  args: mockPost,
  argTypes: {
    createdAt: {
      control: {
        type: "date",
      },
    },
    author: { type: null },
    categories: { type: null },
  },
} as Meta<typeof Post>;

export const Template: StoryFn<PostProps> = (args) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
