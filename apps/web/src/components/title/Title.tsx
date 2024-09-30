import React, { PropsWithChildren } from 'react';
import './Title.css';

type Props = {
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
};

export const Title: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  tag: Tag = 'h2',
}) => {
  return <Tag className={className}>{children}</Tag>;
};
