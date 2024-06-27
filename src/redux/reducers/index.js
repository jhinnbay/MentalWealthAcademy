import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./user";

export const rootreducer = combineReducers({
  user,
  // Any Other reducer will go here,
});
