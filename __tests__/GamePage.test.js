import { render, screen } from "@testing-library/react";
import GamePage from "../components/GamePage";

describe("GamePage", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <GamePage
          data={{
            id: "1",
            title: "game",
            thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
            description: "description",
            game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
            genre: "genre",
            platform: "Windows",
            publisher: "publisher company",
            developer: "dev company",
            release_date: "2022-01-01",
            minimum_system_requirements: {
              os: "Windows",
              processor: "Intel",
              memory: "16GB RAM",
              graphics: "NVIDIA GeForce GTX 1050TI",
              storage: "100GB",
            },
            screenshots: [
              {
                id: "123",
                image:
                  "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg",
              },
            ],
          }}
        />
      );

      const image = getByTestId("image");
      expect(image).toBeInTheDocument();

      const platform = getByTestId("platform");
      expect(platform).toBeInTheDocument();
      expect(platform.innerHTML).toBe("Platform: Windows");

      const buttonText = screen.getByText("PLAY NOW");
      expect(buttonText).toBeInTheDocument();

      const title = getByTestId("title");
      expect(title.innerHTML).toBe("game");

      const description = getByTestId("description");
      expect(description.innerHTML).toBe("description");

      const infoTitle = screen.getByText("Additional information");
      expect(infoTitle).toBeInTheDocument();

      const releaseDate = getByTestId("releaseDate");
      expect(releaseDate.innerHTML).toBe("2022-01-01");

      const dev = getByTestId("dev");
      expect(dev.innerHTML).toBe("dev company");

      const publisher = getByTestId("publisher");
      expect(publisher.innerHTML).toBe("publisher company");

      const genre = getByTestId("genre");
      expect(genre.innerHTML).toBe("genre");

      const reqTitle = screen.getByText("Minimum System Requirements");
      expect(reqTitle).toBeInTheDocument();

      const os = getByTestId("os");
      expect(os.innerHTML).toBe("Windows");

      const graphics = getByTestId("graphics");
      expect(graphics.innerHTML).toBe("NVIDIA GeForce GTX 1050TI");

      const processor = getByTestId("processor");
      expect(processor.innerHTML).toBe("Intel");

      const storage = getByTestId("storage");
      expect(storage.innerHTML).toBe("100GB");

      const carouselImage = getByTestId("carouselImage");
      expect(carouselImage).toBeInTheDocument();
    });
  });
});
