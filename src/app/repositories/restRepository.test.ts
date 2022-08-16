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

  describe("When we have a instance delete method with id", () => {
    test("Then not should show this id", async () => {
      const url: string = "";
      const repo = new RestRepsitory(url);
      const deleteId = "1";

      global.fetch = jest.fn().mockResolvedValue({ ok: true });

      const result = await repo.delete(deleteId);

      expect(result).toStrictEqual({ ok: true });
    });
  });
});
