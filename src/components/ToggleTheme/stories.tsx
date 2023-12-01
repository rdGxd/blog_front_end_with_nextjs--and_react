import { Meta } from "@storybook/react";
import { ToggleTheme } from ".";

export default {
  title: "ToggleTheme",
  component: ToggleTheme,
} as Meta<typeof ToggleTheme>;

export const Template = () => {
  return (
    <div>
      <ToggleTheme />
    </div>
  );
};
