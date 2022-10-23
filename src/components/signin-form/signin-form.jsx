/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import {
  signInAuthUserWithCredentials,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./signin-form.scss";

const SignInForm = () => {
  const defaultFormFields = {
    password: "",
    email: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithCredentials(
        formFields.email,
        formFields.password
      );
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid Password");
          break;

        case "auth/user-not-found":
          alert("Invalid email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="signin-container">
      <h2>Aready have an account?</h2>
      <span>Sign In With Your Email & Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleFieldChange}
          value={formFields.email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleFieldChange}
          value={formFields.password}
        />
        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign in with Google
          </Button>
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
