import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  id,
  className = '',
  onClick 
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}