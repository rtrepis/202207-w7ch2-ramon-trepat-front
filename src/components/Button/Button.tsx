import ButtonStyled from "./ButtonStyled";
import "./ButtonStyled.ts";

interface ButtonProps {
  text: string;
  actionClick: () => void;
}

const Button = ({ text, actionClick }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={actionClick} className="button">
      {text}
    </ButtonStyled>
  );
};

export default Button;
