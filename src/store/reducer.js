import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import campsReducer from "./camps/reducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    camps: campsReducer
  });

export default createRootReducer;
