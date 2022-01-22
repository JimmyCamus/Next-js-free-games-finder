import { render, screen } from "@testing-library/react";
import Filterbar from "../components/Filterbar";

describe("Filterbar", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <Filterbar
          data={[]}
          setState={() => {}}
          filters={{}}
          setFilters={() => {}}
        />
      );
      const genreArray = [
        "Battle Royale",
        "Fighting",
        "MMO",
        "MMORPG",
        "MOBA",
        "Racing",
        "Social",
        "Shooter",
        "Sports",
        "Strategy",
      ];
      const platformArray = ["Windows", "Web Browser"];

      const genreFilter = getByTestId("genreFilter");
      expect(genreFilter).toBeInTheDocument();

      for (let index = 0; index < genreArray.length; index++) {
        const element = screen.getByText(genreArray[index]);
        expect(element).toBeInTheDocument();
        expect(element.getAttribute("value")).toBe(
          genreArray[index].toLowerCase()
        );
      }

      const platformFilter = getByTestId("platformFilter");
      expect(platformFilter).toBeInTheDocument();

      for (let index = 0; index < platformArray.length; index++) {
        const element = screen.getByText(platformArray[index]);
        expect(element).toBeInTheDocument();
      }
    });
  });
});
