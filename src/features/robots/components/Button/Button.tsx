import "./styled.css";

interface ButtonProps {
  text: string;
  actionClick: () => void;
}

const Button = ({ text, actionClick }: ButtonProps): JSX.Element => {
  return (
    <button onClick={actionClick} className="button">
      {text}
    </button>
  );
};

export default Button;
