import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export function campsSuccess(camps) {
  return {
    type: "FETCH_CAMPS_SUCCESS",
    payload: camps
  };
}

export function fetchCamps() {
  return function thunk(dispatch, getState) {
    console.log("Im called!");
    superagent
      .get(`${baseUrl}/camps`)
      .then(response => {
        console.log("fetch camps data test", response);
        const action = campsSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function selectedCampSuccess(camp) {
  return {
    type: "SELECT_CAMP",
    payload: camp
  };
}

export function fetchCamp(campId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/camp/${campId}`)
      .then(response => {
        console.log("fetch camp data test", response);
        const action = selectedCampSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
