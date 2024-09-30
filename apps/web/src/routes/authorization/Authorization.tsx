import React from 'react';
import { Outlet } from 'react-router-dom';
import './Authorization.css';
export const Authorization: React.FC = () => {
  return (
    <section className="authorization">
      <div className="authorization__container">
        <div className="sign-in-decoration" />
        <Outlet />
      </div>
    </section>
  );
};
