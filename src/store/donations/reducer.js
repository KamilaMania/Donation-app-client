const initialState = {
  donation: null
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_DONATION_SUCCESS":
      return { donation: action.payload };
    default:
      return state;
  }
}
