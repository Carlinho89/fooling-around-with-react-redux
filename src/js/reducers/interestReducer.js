
const initialState = {
  interestsURLs: [],
  interestsFetched: false,
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case "FETCH_MOCK_INTERESTS": {

      return {...state, interestsURLs: action.payload, interestsFetched: true};
      break;
    }
  }
  return state;
}
