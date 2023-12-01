import { Preview } from "@storybook/react";
import React from "react";
import { BlogThemeProvider } from '../src/contexts/BlogThemeContext/index';
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: theme.colors.white,
        },
        {
          name: "dark",
          value: theme.colors.primary,
        },
      ],
    },
  },
};

export const decorators = [
  (Story: any): JSX.Element => (
    <BlogThemeProvider>
      <GlobalStyles />
      <Story />
    </BlogThemeProvider>
  ),
];

export default preview;
