import axios from 'axios';
import { useCallback } from 'react';
const BASE_URL = 'http://localhost:8080';

export function getWorkspaceAction() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/workSpace`);
      dispatch(getWorkspace(response.data.data[0]._id));
      // console.log(response.data.data[0]._id);
    } catch (error) {
      // dispatch(getProductsError())
      console.log(error);
    }
  };
}

const getWorkspace = (res) => ({
  type: 'GET_WORKSPACE_ID',
  payload: res,
});

export function loginUserAction(data) {
  return async (dispatch) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      
      if(response.data.ok) {
        localStorage.setItem("token", response.data.token);
      }

      dispatch(loginUser(response.data));
    } catch (error) {
      console.log(error)
    }
  };
}

const loginUser = (login) => ({
  type: "LOGIN_USER",
  payload: login
});


export function registerUserAction(data) {
  return async (dispatch) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${BASE_URL}/users/register`,
        {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          workSpaceId: '629a2552587275ec49d069cd'
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      
      if(response.data.ok) {
        localStorage.setItem("token", response.data.token);
      }
      console.log(data)

      dispatch(registerUser(response.data));
    } catch (error) {
      console.log(error)
    }
  };
}

const registerUser = (register) => ({
  type: "REGISTER_USER",
  payload: register
});


export function verifyToken() {
  return async(dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token)

    if(!token){
      dispatch(withoutToken())
      // return false
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/users/renew`,
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "x-token": token,
          },
        }
      )
      console.log(response)

    } catch (error) {
      console.log(error)
    }

  }
}


const withoutToken = () => ({
  type: 'WITHOUT_TOKEN'
})
