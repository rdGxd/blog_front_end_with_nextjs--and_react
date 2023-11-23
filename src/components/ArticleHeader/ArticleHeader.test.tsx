import { formatDate } from "../../utils/format-date";
import { screen } from "@testing-library/react";
import { ArticleHeader } from ".";
import { renderTheme } from "../../styles/render-theme";
import mockArticleHeader from "./mock";

describe("<ArticleHeader />", () => {
  it("should render heading, excerpt, cover img and meta", () => {
    const { container } = renderTheme(<ArticleHeader {...mockArticleHeader} />);

    expect(screen.getByRole("heading", { name: mockArticleHeader.title })).toBeInTheDocument();

    expect(screen.getByRole("img", { name: mockArticleHeader.title })).toBeInTheDocument();

    expect(screen.getByText(mockArticleHeader.excerpt)).toBeInTheDocument();

    expect(screen.getByText(formatDate(mockArticleHeader.createdAt))).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
