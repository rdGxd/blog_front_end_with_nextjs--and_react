import { PostsTemplate } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";

describe("<PostsTemplate />", () => {
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostsTemplate {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
