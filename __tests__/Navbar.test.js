import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(<Navbar />);

      const gamesLink = getByTestId("gamesLink");
      expect(gamesLink.getAttribute("href")).toBe("/games/popularity");

      const searchLink = getByTestId("searchLink");
      expect(searchLink.getAttribute("href")).toBe("/search");

      const logoText = screen.getByText("Free Games Finder");
      expect(logoText).toBeInTheDocument();
    });
  });
});
