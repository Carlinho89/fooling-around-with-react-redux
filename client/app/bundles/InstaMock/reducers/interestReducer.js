const initialState = {
  interests: [],
  interestsFetched: false,
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MOCK_INTERESTS': {
      return {...state, interests: action.payload, interestsFetched: true};
      break;
    }
  }
  return state;
}
