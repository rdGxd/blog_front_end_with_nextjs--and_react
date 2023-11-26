import { screen } from "@testing-library/react";
import { ArticleMeta } from ".";
import { renderTheme } from "../../styles/render-theme";

import mockArticleMeta from "./mock";

describe("<ArticleMeta />", () => {
  it("should render author and category links", () => {
    renderTheme(<ArticleMeta {...mockArticleMeta} />);
    expect(screen.getByRole("link", { name: "Rodrigo Silva" })).toHaveAttribute("href", "/author/rodrigo-silva");

    expect(screen.getByRole("link", { name: "Python" })).toHaveAttribute("href", "/category/python");
  });

  it("should format date", () => {
    renderTheme(<ArticleMeta {...mockArticleMeta} />);

    expect(screen.getByText("20 de nov. de 2023")).toHaveAttribute("datetime", mockArticleMeta.createdAt);
  });

  it("should match snapshot with no author and categories", () => {
    const { container } = renderTheme(<ArticleMeta {...mockArticleMeta} author={undefined} categories={undefined} />);
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<ArticleMeta {...mockArticleMeta} />);

    expect(container).toMatchSnapshot();
  });
});
