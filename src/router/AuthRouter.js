import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ChangePassword } from "../pages/ChangePassword";
import { RecoverPassword } from "../pages/RecoverPassword";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AuthRouter = () => {
  return (
    <Routes>
      {/* <Route exact path="login" element={<LoginPage />} />
      <Route exact path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="login" />} /> */}
      <Route exact path="register" element={<Register />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="change-password" element={<ChangePassword />} />
      <Route exact path="recover-password" element={<RecoverPassword />} />
      <Route path="*" element={<Navigate to="login" />} />
  </Routes>
  )
}

