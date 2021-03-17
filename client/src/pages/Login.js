import React from "react";
import LoginForm from "../components/LoginForm";
import qs from 'qs';
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <>
      <LoginForm error={queryParams.error} />
    </>
  );
}

export default Login;
