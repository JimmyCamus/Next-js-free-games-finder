import { render } from "@testing-library/react";
import HomePage from "../components/HomePage";

describe("HomePage", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <HomePage
          recentGamesData={[
            {
              id: "451",
              title: "gameTitle",
              thumbnail: "https://www.freetogame.com/g/451/thumbnail.jpg",
              genre: "shooter",
              platform: "PC (Windows)",
            },
          ]}
          popularGamesData={[
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
