import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.authReducer);

  console.log(loggedIn);

  return loggedIn ? children : <Navigate to="/auth/*" />;
};
