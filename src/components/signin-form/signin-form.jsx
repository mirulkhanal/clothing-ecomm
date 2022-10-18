import React, { useState } from 'react';
import {
  createAuthUserWithCredentials,
  createUserFromAuth,
} from '../../utils/firebase/firebase';
import FormInput from '../form-input/FormInput';

const SignInForm = () => {
  const defaultFormFields = {
    displayName: '',
    password: '',
    email: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
    console.log(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formFields.password !== formFields.confirmPassword) {
      alert('Passwords dont match');
      return;
    }

    try {
      const { user } = await createAuthUserWithCredentials(
        formFields.email,
        formFields.password
      );

      await createUserFromAuth(user, { displayName: formFields.displayName });
      setFormFields(defaultFormFields);
      alert('success registration');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Signup Failed, Email already in use');
      }
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Aready have an account?</h1>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          name='email'
          onChange={handleFieldChange}
          value={formFields.email}
        />

        <FormInput
          label='Password'
          required
          type='password'
          name='password'
          onChange={handleFieldChange}
          value={formFields.password}
        />

        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
