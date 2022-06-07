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

export function getUsersIdAction(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.get(`${BASE_URL}/users/user`, {
        headers: {
          'x-token': token,
        },
      });
      console.log(response.data);
      dispatch(getUsersId(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const getUsersId = (user) => ({
  type: 'GET_USER_ID',
  payload: user,
});
