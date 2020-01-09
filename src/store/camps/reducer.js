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
      const selectedCamp = state.allCamps.find(camp => camp.id === id);
      return {
        ...state,
        selectedCamp: selectedCamp
      };
    default:
      return state;
  }
}
