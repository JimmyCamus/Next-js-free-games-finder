import { render } from "@testing-library/react";
import Input from "../components/Input";

describe("Input", () => {
  describe("Component", () => {
    it("renders", () => {
      const { getByTestId } = render(
        <Input
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

      const input = getByTestId("input");
      expect(input).toBeInTheDocument();
    });
  });
});
