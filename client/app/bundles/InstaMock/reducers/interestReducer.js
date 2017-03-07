
const initialState = {
  interests: [],
  totalCount: 0,
  interestsFetched: false,
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MOCK_INTERESTS': {
      return {...state, interests: action.payload, interestsFetched: true};
    }
    case 'INTER_INC':{
      const { interestID } = action.payload;
      var { clicks } = state.interests[interestID];
      clicks = clicks + 1;

      const newInterests = state.interests.map((item, index) =>{
        if (index != interestID) {
          return item;
        }
        else {
          return{
            ...item,
            clicks: item.clicks + 1
          }
        }

      });

      const totalCount = newInterests.reduce((total, item) => (total + item.clicks), initialState.totalCount);

      return {
        ...state,
        interests: newInterests,
        totalCount: totalCount
      };
    }
    default: {
      return state;
    }
  }
}
