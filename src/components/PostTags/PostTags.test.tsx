import { screen } from "@testing-library/react";
import { PostTags } from ".";
import { renderTheme } from "../../styles/render-theme";

import mockPostTags from "./mock";

describe("<PostTags/>", () => {
  it("should render two tags", () => {
    renderTheme(<PostTags {...mockPostTags} />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<PostTags {...mockPostTags} />);

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot with no tags", () => {
    const { container } = renderTheme(<PostTags {...mockPostTags} tags={undefined} />);

    expect(container).toMatchSnapshot();
  });
});
