import { screen } from "@testing-library/react";
import { PostCard } from ".";
import { renderTheme } from "../../styles/render-theme";
import mockPostCard from "./mock";

describe("<PostCard />", () => {
  it("should render a heading, cover and excerpt", () => {
    renderTheme(<PostCard {...mockPostCard} />);

    expect(screen.getByRole("heading", { name: mockPostCard.attributes.title })).toBeInTheDocument();

    expect(screen.getByRole("img", { name: mockPostCard.attributes.title })).toBeInTheDocument();

    expect(screen.getByText(mockPostCard.attributes.excerpt)).toBeInTheDocument();

    expect(screen.getAllByRole("link", { name: mockPostCard.attributes.title })[0]).toHaveAttribute(
      "href",
      `/post/${mockPostCard.attributes.slug}`,
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<PostCard {...mockPostCard} />);

    expect(container).toMatchSnapshot();
  });
});
