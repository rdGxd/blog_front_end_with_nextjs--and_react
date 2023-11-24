import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuProps } from ".";
import mockMenu from "./mock";

export default {
  title: "Menu",
  component: Menu,
  args: mockMenu,
} as Meta<typeof Menu>;

export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
