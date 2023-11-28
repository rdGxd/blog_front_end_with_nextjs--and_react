import { PostTemplate } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";

describe("<PostTemplate />", () => {
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostTemplate {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
