import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<TextComponent />", () => {
  it("should render paragraph in the document", () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText("texto")).toBeInTheDocument();
  });

  it("should render correct paragraph sizes", () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const paragraph = screen.getByText(/texto/i);

    expect(paragraph).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
