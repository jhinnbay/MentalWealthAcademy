import { configureStore } from "@reduxjs/toolkit";

import { rootreducer } from "./reducers";

const store = configureStore({
  reducer: rootreducer,
});

export default store;
