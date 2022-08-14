import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RobotCardList from "./RobotCardList";

describe("Given a RobotCardList component", () => {
  describe("When it's instantiated", () => {
    test("Then should show a card of robot", () => {
      const initialRobotList = [
        {
          id: "1",
          name: "",
          img: "",
          specs: {
            speed: 0,
            stamina: 0,
            creationDate: "",
          },
        },
      ];

      render(
        <Provider store={store}>
          <RobotCardList />{" "}
        </Provider>
      );

      const listofRobots = screen.getAllByRole("article");

      expect(listofRobots).toHaveLength(initialRobotList.length);
    });
  });
});
