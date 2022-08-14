import { createAction } from "@reduxjs/toolkit";
import Robot from "../../models/Robot";
import { actionTypes } from "../actionTypes/actionTypes";

export const loadRobots = createAction<Robot[]>(actionTypes.loadRobots);
