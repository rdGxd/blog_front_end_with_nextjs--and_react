import { PostCard } from ".";
import { renderTheme } from "../../styles/render-theme";
import mockPostCard from "./mock";

describe("<PostCard />", () => {
  it("should render header, excerpt, cover, metadata and post", () => {
    renderTheme(<PostCard {...mockPostCard} />);
  });
});
