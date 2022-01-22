import { render } from "@testing-library/react";
import GamesListPage from "../components/GamesListPage";

describe("GamesListPage", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <GamesListPage
          data={[
            {
              id: "451",
              title: "gameTitle",
              thumbnail: "https://www.freetogame.com/g/451/thumbnail.jpg",
              genre: "shooter",
              platform: "PC (Windows)",
            },
          ]}
        />
      );

      const container = getByTestId("container");
      expect(container).toBeInTheDocument();
    });
  });
});
