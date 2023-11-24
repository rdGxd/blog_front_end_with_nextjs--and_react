import { fireEvent, screen } from "@testing-library/react";
import { Menu } from ".";
import { renderTheme } from "../../styles/render-theme";
import mockMenu from "./mock";

describe("<Menu />", () => {
  it("should render button link", () => {
    renderTheme(<Menu {...mockMenu} menuLink={undefined} />);

    const buttonLink = screen.getByRole("link", { name: "Open or close menu" });
    const openMenuIcon = screen.getByLabelText("Open menu");

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();
    expect(screen.queryByLabelText("Close menu")).not.toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("should open/close menu on button click", () => {
    renderTheme(<Menu {...mockMenu} />);

    const buttonLink = screen.getByRole("link", { name: "Open or close menu" });
    fireEvent.click(buttonLink);

    expect(screen.queryByLabelText("Close menu")).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).toBeInTheDocument();
    expect(screen.queryByLabelText("Open menu")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Rodrigo Silva" }));
    expect(screen.getByRole("img", { name: "Rodrigo Silva" }));
    expect(screen.getByRole("navigation").querySelectorAll("a:not([href='/'])")).toHaveLength(mockMenu.menuLink.length);

    fireEvent.click(buttonLink);
    expect(screen.queryByLabelText("Close menu")).not.toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Menu {...mockMenu} />);
    expect(container).toMatchSnapshot();
  });
});
