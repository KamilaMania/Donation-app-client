import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import campsReducer from "./camps/reducer";
import campReducer from "./camps/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    camps: campsReducer,
    camp: campReducer
  });

export default createRootReducer;
