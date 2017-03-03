export function getMockUser(){
  return {
    type: 'FETCH_MOCK_USER',
    payload: {
      id:1,
      name: 'Carlo',
      age: 27
    }
  }
}
