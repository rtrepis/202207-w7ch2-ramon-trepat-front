import { robotReducer } from "./robotReducer";

describe("Given the robotReducer function", () => {
  describe("When it's receives an unknown action and previous robot list", () => {
    test("Then should return a new robot list same than previous", () => {
      const previousRobotList = [
        {
          id: 1,
          name: "Mazinger",
          url: "",
          specs: {
            speed: 0,
            stamina: 0,
            creationDate: "",
          },
        },
      ];
      const unknownAction = { type: "patatasfritas" };

      const newRobotList = robotReducer(previousRobotList, unknownAction);

      expect(newRobotList).toStrictEqual(previousRobotList);
    });
  });
});
