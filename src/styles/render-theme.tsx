import { BlogThemeProvider } from "../contexts/BlogThemeContext";
import { render, RenderResult } from "@testing-library/react";

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
