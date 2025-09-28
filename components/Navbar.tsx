import React from 'react';

export interface NavbarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  below?: React.ReactNode;
  className?: string;
}

export default function Navbar({ left, center, right, below, className = '' }: NavbarProps) {
  return (
    <>
      <nav className={`navbar ${className}`}>
        <div className="navbar-left">
          {left}
        </div>
        <div className="navbar-center">
          {center}
        </div>
        <div className="navbar-right">
          {right}
        </div>
      </nav>
      {below && (
        <div className="navbar-below">
          {below}
        </div>
      )}
    </>
  );
}