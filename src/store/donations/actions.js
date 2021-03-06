import superagent from "superagent";
import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";

const baseUrl = "https://radiant-stream-83963.herokuapp.com";

export function createDonationSuccess(donation) {
  return {
    type: "ADD_DONATION_SUCCESS",
    payload: donation
  };
}

export function createDonation(donation) {
  return function thunk(dispatch, getState) {
    superagent
      .post(`${baseUrl}/donation`)
      .send(donation)
      .then(response => {
        const action = createDonationSuccess({
          ...donation,
          id: response.body.id
        });
        dispatch(action);
        dispatch(push("/"));
        toastr.success(
          "Transaction is successfully completed",
          "Thank you for supporting us! We wish you a lovely day."
        );
      })
      .catch(err => console.log("err", err));
  };
}

export function createPackage(donation) {
  return function thunk(dispatch, getState) {
    superagent
      .post(`${baseUrl}/donationItem`)
      .send(donation)
      .then(response => {
        const action = createDonationSuccess({
          ...donation,
          id: response.body.id
        });
        dispatch(action);
        dispatch(push("/"));
        toastr.success(
          "Transaction is successfully completed",
          "Thank you for supporting us! We wish you a lovely day."
        );
      })
      .catch(err => console.log("err", err));
  };
}
