import React from 'react';
import { Link } from 'react-router-dom';
import './Authorization-links.css';

export const AuthorizationLinks: React.FC = () => {
  return (
    <div className="authorization-links-container">
      <Link className="link link--sign-in merriweather-bold" to={'sign-in'}>
        Log in
      </Link>
      <Link className="link link--sign-up merriweather-bold" to={'sign-up'}>
        Sign Up
      </Link>
    </div>
  );
};
