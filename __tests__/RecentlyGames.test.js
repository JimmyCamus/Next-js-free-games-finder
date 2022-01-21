import { render } from "@testing-library/react";
import RecentlyGames from "../components/RecentlyGames";

describe("RecentlyGames", () => {
  describe("Component", () => {
    it("is rendered", () => {
      const { getByTestId } = render(
        <RecentlyGames
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
      const containerTitle = getByTestId("containerTitle");
      expect(containerTitle).toBeInTheDocument();

      const card = getByTestId("card");
      expect(card).toBeInTheDocument();

      const image = getByTestId("cardImage");
      expect(image).toBeInTheDocument();

      const cardTitle = getByTestId("cardTitle");
      expect(cardTitle.innerHTML).toBe("gameTitle");

      const cardGenre = getByTestId("cardGenre");
      expect(cardGenre.innerHTML).toBe("shooter");

      const cardPlatform = getByTestId("cardPlatform");
      expect(cardPlatform.innerHTML).toBe("PC (Windows)");
    });
  });
});
