import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index.js";
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
