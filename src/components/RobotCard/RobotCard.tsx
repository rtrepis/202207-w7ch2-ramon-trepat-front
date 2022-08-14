import Robot from "../../features/robots/models/Robot";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
  actionOnClick: () => void;
}

const RobotCard = ({ robot, actionOnClick }: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled className="card">
      <div className="card-header">
        <img
          src={robot.img}
          className="card-header__img"
          alt={`The robot ${robot.name}`}
          height="70px"
        />
        <h2 className="card-header__title">{robot.name}</h2>
      </div>
      <div className="card-container">
        <span className="card-containter__spect--bold">{`Speed: ${robot.specs.speed}`}</span>
        <span className="card-containter__spect--bold">{`Stamina: ${robot.specs.stamina}`}</span>
        <span className="card-containter__spect--bold">{`Create Data: ${robot.specs.creationDate}`}</span>
      </div>
      <Button text="X" actionClick={actionOnClick} />
    </RobotCardStyled>
  );
};

export default RobotCard;
