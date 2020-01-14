//import { toastr } from "react-redux-toastr";
import superagent from "superagent";

const baseUrl = "http://localhost:4000";

export function createDonationSuccess(donation) {
  return {
    type: "ADD_DONATION_SUCCESS",
    payload: donation
  };
}

export function createDonation(donation) {
  return function thunk(dispatch, getState) {
    console.log({ ...donation });
    superagent
      .post(`${baseUrl}/donation`)
      .send(donation)
      .then(response => {
        const action = createDonationSuccess({
          ...donation,
          id: response.body.id
        });
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
