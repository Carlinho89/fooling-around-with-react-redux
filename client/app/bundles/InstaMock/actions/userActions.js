import axios from 'axios';

export function getMockUser(userID){
  return function(dispatch) {
    axios.get("http://localhost:3000/users/" + userID + ".json")
      .then((response) => {
        dispatch({type: "FETCH_USER_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}
