import { render } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(<Button href="/">Go to home</Button>);
      const button = getByTestId("button");
      expect(button.innerHTML).toBe("Go to home");
    });
  });
});
