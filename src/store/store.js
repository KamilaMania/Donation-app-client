import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "./reducer";
import ReduxThunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;
const enhancer = compose(
  applyMiddleware(ReduxThunk, routerMiddleware(history)),
  devTools
);
const store = createStore(createRootReducer(history), enhancer);
export default store;
