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
