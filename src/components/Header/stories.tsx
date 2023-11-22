import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from ".";
import { mockHeader } from "./mock";

export default {
  title: "Header",
  component: Header,
  args: mockHeader,
} as Meta<typeof Header>;

export const Template: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
