import React from 'react';
import './Header.css';
import { AuthorizationLinks } from '../ui/authorization-links/AuthorizationLinks';
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <AuthorizationLinks />
      </div>
    </header>
  );
};
