import React, { PropsWithChildren } from 'react';
import './Form-button.css';

type Props = {
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const FormButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <button className="form-button" onClick={onClick} {...props}>
      {children}
    </button>
  );
};
