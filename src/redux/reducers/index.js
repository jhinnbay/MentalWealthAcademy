import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./user";
import { UI } from "./uiReducer";

export const rootreducer = combineReducers({
  user,
  UI,
});
