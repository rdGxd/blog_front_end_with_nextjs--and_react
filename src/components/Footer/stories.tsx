import { Meta, StoryFn } from "@storybook/react";
import { Footer, FooterProps } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: "<p><a href='https://google.com.br'>Feito por Rodrigo Silva</a></p>",
  },
} as Meta<typeof Footer>;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Footer {...args} />
    </div>
  );
};
