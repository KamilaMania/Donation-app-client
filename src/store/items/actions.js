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
    superagent
      .get(`${baseUrl}/items`)
      .then(response => {
        const action = itemsSuccess(response.body.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
