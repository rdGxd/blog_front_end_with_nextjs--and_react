import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="text" />);
    const heading = screen.getByRole("link", { name: "text" });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("href", "#target");
  });

  it("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="text" srcImg="image.jpg" />);
    const img = screen.getByRole("img", { name: "text" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image.jpg");
  });

  it("should render internal link", () => {
    renderTheme(<LogoLink link="/target" text="text" srcImg="image.jpg" />);
    const img = screen.getByRole("img", { name: "text" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image.jpg");
  });

  it("should render render internal link with text only", () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" />);
    expect(screen.getByRole("heading", { name: "Olá mundo" })).toBeInTheDocument();
  });

  it("should render render a link with target _blank", () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" newTab={true} />);
    expect(screen.getByRole("heading", { name: "Olá mundo" })).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<LogoLink link="#target" text="text" srcImg="image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
