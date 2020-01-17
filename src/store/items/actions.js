import superagent from "superagent";
const baseUrl = "https://radiant-stream-83963.herokuapp.com";

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
      .get(`${baseUrl}/items`)
      .then(response => {
        console.log("fetch items data test", response);
        const action = itemsSuccess(response.body.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
