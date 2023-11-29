import { screen } from "@testing-library/react";
import { Base } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";

describe("<Base />", () => {
  it("should render base elements", () => {
    const { debug } = renderTheme(<Base {...mock} />);

    expect(screen.getByRole("img", { name: "Rodrigo Silva - Blog do Rodrigo" })).toBeInTheDocument();
    debug();
    expect(screen.getByLabelText("Open or close menu")).toBeInTheDocument();

    expect(screen.getByText("texto do footer")).toBeInTheDocument();

    expect(screen.getByLabelText("Go to top")).toBeInTheDocument();
  });

  it("should render base elements", () => {
    const { container } = renderTheme(<Base {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
