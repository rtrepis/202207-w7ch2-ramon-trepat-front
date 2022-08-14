import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";

const initialListRobots: Robot[] = [
  {
    id: 1,
    name: "",
    url: "",
    specs: {
      speed: 0,
      stamina: 0,
      creationDate: "",
    },
  },
];

export const robotReducer = createReducer(initialListRobots, (builder) => {
  builder.addDefaultCase((robotList: Robot[]) => [...robotList]);
});
