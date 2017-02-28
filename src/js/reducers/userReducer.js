const initialState = {
  user: {
    id: null,
    name: null,
    age: null
  },
  userFetched: false
}
export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MOCK_USER': {

      return {...state, user: action.payload, userFetched: true};
      break;
    }
  }
  return state;
}
