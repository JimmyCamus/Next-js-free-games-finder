import { render } from "@testing-library/react";
import Logo from "../components/Logo";

describe("Button", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(<Logo />);
      const title = getByTestId("title");
      expect(title.innerHTML).toBe("Free Games Finder");
    });
  });
});
