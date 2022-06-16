import axios from 'axios';
import { toast } from 'react-toastify';
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

export function updateUserProfileAction(data) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.put(`${BASE_URL}/users/edit`, data, {
        headers: {
          'x-token': token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.data.ok) {
        dispatch(updateUserProfile(response.data.data));
      }
    } catch (error) {
      console.log(error);
      throw new Error('error');
    }
  };
}

const updateUserProfile = (userUpdated) => ({
  type: 'UPDATE_USER_PROFILE',
  payload: userUpdated,
});

export const changePasswordAction = (data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.put(
        `${BASE_URL}/users/change-password`,
        data,
        {
          headers: {
            'x-token': token,
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      dispatch(changePassword(response.data.ok));
    } catch (error) {
      console.log(error.response.data.ok);
      if (error.response.data.ok === false) {
        toast.error('Contraseña incorrecta', {
          position: 'bottom-right',
          theme: 'colored',
        });
      }
    }
  };
};

const changePassword = (ok) => ({
  type: 'CHANGE_PASSWORD',
  payload: ok,
});

export const changePremium = (data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.put(`${BASE_URL}/users/premium`, data, {
        headers: {
          'x-token': token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log(response.data.data);
      dispatch(getUsersId(response.data.data));
      toast.success('Compra completada', {
        position: 'bottom-right',
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Error de compra', {
        position: 'bottom-right',
        theme: 'colored',
      });
    }
  };
};
