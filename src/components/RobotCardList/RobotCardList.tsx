import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepsitory from "../../app/repositories/restRepository";
import Robot from "../../features/robots/models/Robot";
import RobotCard from "../RobotCard/RobotCard";
import * as actionsCreator from "../../features/robots/reducer/actionsCreator/actionsCreator";
import { RootState } from "../../app/store";
import RobotCardListStyled from "./RobotCardListStyled";

const RobotCardList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useDispatch();

  const repoRobots = useMemo(() => new RestRepsitory<Robot>(url), [url]);

  useEffect(() => {
    repoRobots
      .getAll()
      .then((robots) => dispatch(actionsCreator.loadRobots(robots)));
  }, [dispatch, repoRobots]);

  return (
    <RobotCardListStyled>
      {robots.map((robot) => (
        <RobotCard key={robot.id} robot={robot} actionOnClick={() => {}} />
      ))}
    </RobotCardListStyled>
  );
};

export default RobotCardList;
