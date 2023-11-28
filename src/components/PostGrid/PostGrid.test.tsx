import { screen } from "@testing-library/react";
import { PostGrid } from ".";
import { renderTheme } from "../../styles/render-theme";

import mockPostGrid from "./mock";

describe("<PostGrid />", () => {
  it("should not render posts", () => {
    renderTheme(<PostGrid {...mockPostGrid} posts={undefined} />);

    expect(screen.getByText(/Nenhum Post/i)).toBeInTheDocument();
  });

  it("should render three posts", () => {
    const { container } = renderTheme(<PostGrid {...mockPostGrid} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();

    expect(screen.getAllByRole("heading")).toHaveLength(11);
    expect(screen.getAllByRole("img")).toHaveLength(11);
    expect(container.querySelectorAll("p")).toHaveLength(11);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<PostGrid {...mockPostGrid} />);
    expect(container).toMatchSnapshot();
  });
});
