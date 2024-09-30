import React from 'react';
import './LogIn.css';
import { LogInForm } from '../../components/form/log-in/LogInForm';
import { Title } from '../../components/title/Title';

export const LogIn: React.FC = () => {
  return (
    <div className="login-container">
      <Title className="form-title merriweather-bold">Login</Title>
      <LogInForm />
    </div>
  );
};
