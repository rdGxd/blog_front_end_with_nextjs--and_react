import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Header } from "./index";
import { mockHeader } from "./mock";

describe("<Header />", () => {
  it("should render an image, a heading and text", () => {
    renderTheme(<Header {...mockHeader} showText={undefined} />);

    expect(screen.getByRole("heading", { name: "Rodrigo Silva" })).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /Rodrigo Silva/i })).toHaveAttribute(
      "src",
      mockHeader.data.data.attributes.logo.data.attributes.url,
    );

    expect(screen.getByText(mockHeader.data.data.attributes.blogDescription)).toBeInTheDocument();
  });

  it("should render image only", () => {
    renderTheme(<Header {...mockHeader} showText={false} />);

    expect(screen.queryByRole("heading", { name: "Rodrigo Silva" })).not.toBeInTheDocument();

    expect(screen.getByRole("img", { name: /Rodrigo Silva/i })).toHaveAttribute(
      "src",
      mockHeader.data.data.attributes.logo.data.attributes.url,
    );

    expect(screen.queryByRole(mockHeader.data.data.attributes.blogDescription)).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Header {...mockHeader} showText={undefined} />);

    expect(container).toMatchSnapshot();
  });
});
