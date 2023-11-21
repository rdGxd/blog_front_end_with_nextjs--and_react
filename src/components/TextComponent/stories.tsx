import { Meta, StoryFn } from "@storybook/react";
import { TextComponent, TextComponentProps } from ".";

export default {
  title: "TextComponent",
  componente: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis aliquid doloribus ratione ab dolorem perferendis est.
    Ducimus animi, deleniti quibusdam sequi dignissimos quisquam ipsum temporibus nam odit incidunt voluptate nemo.`,
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta<typeof TextComponent>;

export const Template: StoryFn<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
