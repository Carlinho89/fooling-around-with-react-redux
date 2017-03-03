const initialState = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetchingUser: false,
  userFetched: false
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MOCK_USER': {
      return {...state, user: action.payload, fetchingUser: true };

    }
    case 'FETCH_USER_SUCCESS':{
      return {...state, user: action.payload, userFetched: true, fetchingUser: false };
    }
    case 'FETCH_USER_REJECTED':{
      return {...state, userFetched: false, fetchingUser: false, error: action.payload };
    }
    default: {
      return state
    }
  }
}
