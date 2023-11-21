import { Meta, StoryFn } from "@storybook/react";
import { HtmlContent, HtmlContentProps } from ".";

export default {
  title: "HtmlContent",
  componente: HtmlContent,
  args: {
    html: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid doloribus ratione ab dolorem perferendis est. Ducimus animi, deleniti quibusdam sequi dignissimos quisquam ipsum temporibus nam odit incidunt voluptate nemo.`,
  },
} as Meta<typeof HtmlContent>;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
