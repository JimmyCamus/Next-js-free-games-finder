import { getServerSideProps } from "../pages/search/index";

describe("Filterbar", () => {
  describe("getServerSideProps", () => {
    it("return data", async () => {
      global.fetch = jest.fn().mockImplementation((url) => {
        return new Promise((resolve) => {
          resolve({
            json: () =>
              Promise.resolve({
                results: "list of games",
              }),
          });
        });
      });

      const { props } = await getServerSideProps();
      expect(props.data.results).toBe("list of games");
    });
  });
});
