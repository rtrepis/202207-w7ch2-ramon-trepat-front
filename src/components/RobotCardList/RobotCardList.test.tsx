import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RobotCardList from "./RobotCardList";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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

    test("Then should call dispatch hook", async () => {
      render(
        <Provider store={store}>
          <RobotCardList />{" "}
        </Provider>
      );

      await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
    });
  });
});
