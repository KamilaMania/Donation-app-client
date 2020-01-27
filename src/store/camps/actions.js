import superagent from "superagent";
const baseUrl = "https://radiant-stream-83963.herokuapp.com";

export function campsSuccess(camps) {
  return {
    type: "FETCH_CAMPS_SUCCESS",
    payload: camps
  };
}

export function fetchCamps() {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/camps/`)
      .then(response => {
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
        const action = selectedCampSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
