import React from 'react';
import SignInForm from '../../components/signin-form/signin-form';
import SignupForm from '../../components/signup-form/signup-form';
import {
  createUserFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = createUserFromAuth(user);
};

const Auth = () => {
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignupForm />
      <SignInForm />
    </div>
  );
};

export default Auth;
