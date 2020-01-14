import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import campsReducer from "./camps/reducer";
import campReducer from "./camps/reducer";
import itemsReducer from "./items/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    camps: campsReducer,
    camp: campReducer,
    items: itemsReducer,
    toastr: toastrReducer
  });

export default createRootReducer;
