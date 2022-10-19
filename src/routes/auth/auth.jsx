import React from "react";
import SignInForm from "../../components/signin-form/signin-form";
import SignupForm from "../../components/signup-form/signup-form";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Auth;
