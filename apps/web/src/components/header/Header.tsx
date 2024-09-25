import React from 'react';
import './Header.css';
import { AuthorizationLinks } from '../ui/autorization-links/AuthorizationLinks';
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <AuthorizationLinks />
      </div>
    </header>
  );
};
