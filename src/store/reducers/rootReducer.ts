import { combineReducers } from "redux";
import userReducer from "./userReducer";
import basketReducer from "./basketReducer";

export const rootReducer = combineReducers({
  userReducer,
  basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
