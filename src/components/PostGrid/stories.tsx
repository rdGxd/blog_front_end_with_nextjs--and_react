import { Meta, StoryFn } from "@storybook/react";
import { PostGrid, PostGridProps } from ".";
import mockPostGrid from "./mock";

export default {
  title: "Post Grid",
  component: PostGrid,
  args: mockPostGrid,
} as Meta<typeof PostGrid>;

export const Template: StoryFn<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};
