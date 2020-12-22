import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "./style.scss";

const requiredFieldMessage = "this field can not be empty";
const user = {
  firstName: "Vardenis",
  lastName: "Pavardenis",
  email: "vardenis@pavardenis.lt",
};
const schema = yup.object().shape({
  email: yup.string().required(requiredFieldMessage),
  firstName: yup.string().required(requiredFieldMessage),
  lastName: yup.string().required(requiredFieldMessage),
});

function Profile() {
  const [isShowAlert, setIsShowAlert] = useState();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...user },
  });
  const onSubmit = () => {
    // request to server would be made here
    setIsShowAlert(true);
  };

  return (
    <div className="profile">
      <h1>Profile Information</h1>
      {isShowAlert && (
        <span className="profile-alert">Information Updated</span>
      )}
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="profile-form-input"
          name="firstName"
          placeholder="firstName"
          ref={register}
        />
        {errors?.firstName && (
          <div className="profile-form-error">{errors.firstName.message}</div>
        )}
        <input
          className="profile-form-input"
          name="lastName"
          placeholder="lastName"
          ref={register}
        />
        {errors?.lastName && (
          <div className="profile-form-error">{errors.lastName.message}</div>
        )}
        <input
          className="profile-form-input"
          name="email"
          placeholder="email"
          ref={register}
        />
        {errors?.email && (
          <div className="profile-form-error">{errors.email.message}</div>
        )}

        <input
          className="profile-form-input"
          name="password"
          type="password"
          placeholder="password"
          ref={register}
        />
        {errors?.password && (
          <div className="profile-form-error">{errors.password.message}</div>
        )}
        <input
          className="profile-form-input"
          name="repeatPassword"
          type="repeatPassword"
          placeholder="repeat password"
          ref={register}
        />
        {errors?.repeatPassword && (
          <div className="profile-form-error">
            {errors.repeatPassword.message}
          </div>
        )}
        <button className="profile-form-button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
