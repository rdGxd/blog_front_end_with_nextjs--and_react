import { screen } from "@testing-library/react";
import { HtmlContent } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<HtmlContent />", () => {
  it("should render paragraph in the document", () => {
    renderTheme(<HtmlContent html="texto" />);
    expect(screen.getByText("texto")).toBeInTheDocument();
  });

  it("should render correct paragraph sizes", () => {
    renderTheme(<HtmlContent html="texto" />);
    const paragraph = screen.getByText(/texto/i);

    expect(paragraph).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<HtmlContent html="texto" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
