import { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    layout: "fullscreen",
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
