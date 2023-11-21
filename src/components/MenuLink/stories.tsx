import { Meta, StoryFn } from "@storybook/react";
import { theme } from "styles/theme";
import { MenuLink, MenuLinkProps } from ".";

export default {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "MenuLink",
    link: "https://google.com.br",
    newTab: false,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta<typeof MenuLink>;

export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: "320px",
        background: theme.colors.primary,
        padding: theme.spacings.large,
      }}
    >
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
