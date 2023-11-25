import { Meta, StoryFn } from "@storybook/react";
import { PostCard, PostCardProps } from ".";
import mockPostCard from "./mock";

export default {
  title: "PostCard",
  component: PostCard,
  args: mockPostCard,
  argTypes: {
    createdAt: {
      control: {
        type: "date",
      },
    },
    author: { type: null },
    categories: { type: null },
  },
} as Meta<typeof PostCard>;

export const Template: StoryFn<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: "32rem" }}>
      <PostCard {...args} />
    </div>
  );
};
