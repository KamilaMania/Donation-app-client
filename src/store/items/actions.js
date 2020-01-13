import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export function itemsSuccess(items) {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: items
  };
}

export function fetchItems() {
  return function thunk(dispatch, getState) {
    console.log("Im called!");
    superagent
      .get(`${baseUrl}/items/`)
      .then(response => {
        console.log("fetch items data test", response);
        const action = itemsSuccess(response.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
