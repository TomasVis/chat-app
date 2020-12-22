import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import pathnames from "../../pathnames";
import "./style.scss";

const requiredFieldMessage = "this field can not be empty";
const email = "this field must be a valid email";
const min = "this field must be at least 7 characters";

const schema = yup.object().shape({
  email: yup.string().email(email).required(requiredFieldMessage),
  password: yup.string().min(7, min).required(requiredFieldMessage),
});

function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    // request to server would be made here
    history.push(pathnames.CHAT);
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="login-form-input"
          name="email"
          placeholder="email"
          ref={register}
        />
        {errors?.email && (
          <div className="login-form-error">{errors.email.message}</div>
        )}

        <input
          className="login-form-input"
          name="password"
          type="password"
          placeholder="password"
          ref={register}
        />
        {errors?.password && (
          <div className="login-form-error">{errors.password.message}</div>
        )}
        <button className="login-form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
