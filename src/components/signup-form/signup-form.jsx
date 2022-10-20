import React, { useState } from "react";
import {
  createAuthUserWithCredentials,
  createUserFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import "./signup-form.scss";
const SignupForm = () => {
  const defaultFormFields = {
    displayName: "",
    password: "",
    email: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formFields.password !== formFields.confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await createAuthUserWithCredentials(
        formFields.email,
        formFields.password
      );

      await createUserFromAuth(user, { displayName: formFields.displayName });
      setFormFields(defaultFormFields);
      alert("success registration");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Signup Failed, Email already in use");
      }
      console.log(error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleFieldChange}
          value={formFields.displayName}
        />

        {/* <label>Email</label> */}
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleFieldChange}
          value={formFields.email}
        />

        {/* <label>Password</label> */}
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleFieldChange}
          value={formFields.password}
        />

        {/* <label>Confirm Password</label> */}
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleFieldChange}
          value={formFields.confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
