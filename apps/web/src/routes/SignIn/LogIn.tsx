import React from 'react';
import './LogIn.css';
import { LogInForm } from '../../components/form/log-in/LogInForm';

export const LogIn: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="sign-in-decoration" />
        <LogInForm />
      </div>
    </section>
  );
};
