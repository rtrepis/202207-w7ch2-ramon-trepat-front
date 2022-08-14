import RestRepsitory from "./restRepository";

describe("Give the class restRepository", () => {
  describe("When we have a instance getAll method", () => {
    test("Then should show return all data", async () => {
      const robotMock = { id: 1 };
      const robotsMock = [robotMock];
      const url: string = "";
      const repo = new RestRepsitory(url);

      global.fetch = jest
        .fn()
        .mockReturnValue({ json: jest.fn().mockResolvedValue(robotsMock) });

      const expectGetAll = await repo.getAll();

      expect(expectGetAll).toStrictEqual(robotsMock);
    });
  });
});
