import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotReducer } from "../features/robots/reducer/robotReducer";

export const store = configureStore({
  reducer: {
    robots: robotReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
