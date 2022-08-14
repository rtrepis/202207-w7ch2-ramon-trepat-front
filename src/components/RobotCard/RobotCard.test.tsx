import Robot from "../../features/robots/models/Robot";
import RobotCard from "./RobotCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the RobotCard component", () => {
  const robot: Robot = {
    id: "1",
    name: "Optimus",
    img: "",
    specs: {
      creationDate: "",
      speed: 0,
      stamina: 0,
    },
  };

  describe("When it's instantiated with a robot with name Optimus", () => {
    test("Then should show in heading Optimus", () => {
      render(<RobotCard robot={robot} actionOnClick={() => {}} />);
      const button = screen.getByRole("heading", { name: "Optimus" });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a robot with url image of Optimus with name 'Optimus'", () => {
    test("Then should show an imagen of Optimus with alternative text 'The robot Optimus'", () => {
      const altText = `The robot ${robot.name}`;

      render(<RobotCard robot={robot} actionOnClick={() => {}} />);
      const robotImage = screen.getByRole("img", {
        name: altText,
      });

      expect(robotImage).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a function and user click button", () => {
    test("Then it should call the function", async () => {
      const actionClick = jest.fn();

      render(<RobotCard robot={robot} actionOnClick={actionClick} />);
      const button = screen.getByRole("button", { name: "X" });
      await userEvent.click(button);

      expect(actionClick).toHaveBeenCalled();
    });
  });
});
