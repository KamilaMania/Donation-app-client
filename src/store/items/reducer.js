const initialState = {
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_ITEMS_SUCCESS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}
