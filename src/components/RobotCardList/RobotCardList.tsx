import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepsitory from "../../app/repositories/restRepository";
import RobotCard from "../RobotCard/RobotCard";
import * as actionsCreator from "../../features/robots/reducer/actionsCreator/actionsCreator";
import { RootState } from "../../app/store";
import RobotCardListStyled from "./RobotCardListStyled";
import RobotsAPI from "../../types/types";
import Robot from "../../features/robots/models/Robot";

const RobotCardList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useDispatch();

  const repoRobots = useMemo(
    () => new RestRepsitory<Robot, Response>(url),
    [url]
  );

  useEffect(() => {
    repoRobots
      .getAll()
      .then((robotsAPI: RobotsAPI) =>
        dispatch(actionsCreator.loadRobots(robotsAPI.robots))
      );
  }, [dispatch, repoRobots]);

  const handleDelete = (id: string) => {
    repoRobots.delete(id).then((response) => {
      if (response.ok) {
        dispatch(actionsCreator.deleteRobots(id));
      }
    });
  };

  return (
    <RobotCardListStyled>
      {robots.map((robot) => (
        <RobotCard
          key={robot.id}
          robot={robot}
          actionOnClick={() => handleDelete(robot.id)}
        />
      ))}
    </RobotCardListStyled>
  );
};

export default RobotCardList;
