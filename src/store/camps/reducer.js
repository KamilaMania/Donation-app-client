const initialState = {
  allCamps: [],
  selectedCamp: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_CAMPS_SUCCESS":
      return { allCamps: action.payload.data, selected: null };
    case "SELECT_CAMP":
      const id = action.payload.id;
      console.log("actions", action.payload);
      const selectedCamp = state.allCamps.find(camp => camp.id === id);
      return {
        ...state,
        selectedCamp: action.payload
      };
    default:
      return state;
  }
}
