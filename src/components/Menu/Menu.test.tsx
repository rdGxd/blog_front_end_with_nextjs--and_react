import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";
import mockMenu from "./mock";

describe("<Menu />", () => {
  it("should render", () => {
    renderTheme(<Menu {...mockMenu} />);
  });
});
