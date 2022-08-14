import { createAction } from "@reduxjs/toolkit";
import Robot from "../../models/Robot";
import { actionTypes } from "../actionTypes/actionTypes";

export const loadRobotsActionCreator = createAction<Robot[]>(
  actionTypes.loadRobots
);
