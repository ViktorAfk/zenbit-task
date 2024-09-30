import React from 'react';
import { NavLink } from 'react-router-dom';
import './Authorization-links.css';
import cn from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }): string => {
  return cn('link', { 'link--active': isActive });
};

export const AuthorizationLinks: React.FC = () => {
  return (
    <div className="authorization-links-container">
      <NavLink className={getLinkClass} to={'authorization/sign-in'}>
        Log in
      </NavLink>
      <NavLink className={getLinkClass} to={'authorization/sign-up'}>
        Sign Up
      </NavLink>
    </div>
  );
};
