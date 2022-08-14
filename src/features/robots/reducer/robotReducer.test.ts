import { robotReducer } from "./robotReducer";

describe("Given the robotReducer function", () => {
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

  describe("When it's receives an unknown action and previous robot list", () => {
    test("Then should return a new robot list same than previous", () => {
      const unknownAction = { type: "patatasfritas" };

      const newRobotList = robotReducer(previousRobotList, unknownAction);

      expect(newRobotList).toStrictEqual(previousRobotList);
    });
  });

  describe("When it's receives an loadRobot action and previous robot list", () => {
    test("Then should return a new robot list same than loadRobot payload", () => {
      const robotListPayload = [
        {
          id: 1,
          name: "Optimus",
          url: "",
          specs: {
            speed: 2,
            stamina: 3,
            creationDate: "",
          },
        },
      ];
      const loadRobotsAction = {
        type: "loadRobots",
        payload: robotListPayload,
      };

      const newRobotList = robotReducer(previousRobotList, loadRobotsAction);

      expect(newRobotList).toStrictEqual(robotListPayload);
    });
  });
});
