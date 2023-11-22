import { Meta, StoryFn } from "@storybook/react";
import { HtmlContent, HtmlContentProps } from ".";

import { mockHTML } from "./mock";

export default {
  title: "HtmlContent",
  componente: HtmlContent,
  args: {
    html: mockHTML,
  },
} as Meta<typeof HtmlContent>;

export const Template: StoryFn<HtmlContentProps> = (args) => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <HtmlContent {...args} />
    </div>
  );
};
