import { PostsTemplate } from ".";
import { renderTheme } from "../../styles/render-theme";
import mock from "./mock";

describe("<PostsTemplate />", () => {
  it("should match snapshot", () => {
    const { container } = renderTheme(<PostsTemplate {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot without posts", () => {
    const { container } = renderTheme(<PostsTemplate {...mock} posts={undefined} />);

    expect(container).toMatchSnapshot();
  });
});
