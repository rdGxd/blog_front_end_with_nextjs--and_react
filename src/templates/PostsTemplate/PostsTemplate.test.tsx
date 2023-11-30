import { renderTheme } from "../../styles/render-theme";
import { PostsTemplate } from "./PostsTemplate.1";
import mock from "./mock";

describe("<PostsTemplate />", () => {
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostsTemplate {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
