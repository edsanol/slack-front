import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export function getUsersAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      dispatch(getUsers(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}
const getUsers = (users) => ({
  type: 'GET_USERS',
  payload: users,
});
