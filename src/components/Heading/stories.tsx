import { Meta, StoryFn } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "O texto está escuro",
    colorDark: true,
    as: "h1",
    size: "big",
    uppercase: false,
  },
  argTypes: {
    children: { type: "string" },
    colorDark: { type: "boolean" },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "big", "huge"],
      control: { type: "radio" },
    },
    uppercase: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof Heading>;

export const Light: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  colorDark: false,
};
