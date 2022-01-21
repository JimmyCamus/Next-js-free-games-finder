import { render } from "@testing-library/react";
import PopularGames from "../components/PopularGames";

describe("PopularGames", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <PopularGames
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

      const card = getByTestId("card");
      expect(card).toBeInTheDocument();

      const cardImage = getByTestId("cardImage");
      expect(cardImage).toBeInTheDocument();
      expect(cardImage.getAttribute("alt")).toBe("gameTitle image")
    });
  });
});
