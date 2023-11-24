import { screen } from "@testing-library/react";
import { Post } from ".";
import { renderTheme } from "../../styles/render-theme";
import { formatDate } from "../../utils/format-date";
import mockPost from "./mock";

describe("<Post />", () => {
  it("should render header, excerpt, cover, metadata and post", () => {
    const { container } = renderTheme(<Post {...mockPost} />);

    expect(screen.getByRole("heading", { name: mockPost.title })).toBeInTheDocument();

    expect(screen.getByRole("img", { name: mockPost.title })).toBeInTheDocument();

    // expect(screen.getAllByText(/^Fugit aliquip erroribus eu eam/i)[0]).toHaveStyle({ "font-size": "2.4rem" });

    expect(screen.getByText(formatDate(mockPost.createdAt))).toBeInTheDocument();

    expect(screen.getByText(/^Blockquote: Et sed legere rationibus/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
