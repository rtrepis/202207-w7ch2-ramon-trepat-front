import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";
import * as actionsCreator from "./actionsCreator/actionsCreator";

const initialListRobots: Robot[] = [
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

export const robotReducer = createReducer(initialListRobots, (builder) => {
  builder.addCase(actionsCreator.loadRobots, (_state, action) => [
    ...action.payload,
  ]);

  builder.addCase(actionsCreator.deleteRobots, (state, action) =>
    state.filter((robot) => robot.id !== action.payload)
  );

  builder.addDefaultCase((robotList: Robot[]) => [...robotList]);
});
