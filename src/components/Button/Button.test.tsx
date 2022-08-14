import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  const textButton = "Dale";

  describe("When recibed 'Dale' text", () => {
    test("Then it shows 'Dale' inside the botton", () => {
      render(<Button text={textButton} actionClick={() => {}} />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When recibed a action", () => {
    test("Then click button call this action", () => {
      const actionClick = jest.fn();

      render(<Button text={textButton} actionClick={actionClick} />);

      const button = screen.getByRole("button", { name: textButton });

      userEvent.click(button);

      expect(actionClick.call.length).toEqual(1);
    });
  });
});
