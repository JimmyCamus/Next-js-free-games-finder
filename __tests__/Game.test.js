import { getServerSideProps } from "../pages/game/[id]";

describe("Game", () => {
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

      const { props } = await getServerSideProps({ params: 145 });
      expect(props.data.results).toBe("list of games");
    });
  });
});
