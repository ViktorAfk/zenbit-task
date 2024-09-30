import React from 'react';
import { SignUpForm } from '../../components/form/sign-up/SignUpForm';
import { Title } from '../../components/title/Title';
import './SignUp.css';
export const SignUp: React.FC = () => {
  return (
    <div className="sign-up-container">
      <Title tag="h2" className="form-title merriweather-bold">
        Sing up
      </Title>
      <SignUpForm />
    </div>
  );
};
