import React from 'react';

export interface LogoProps {
  href?: string;
  showText?: boolean;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export default function Logo({ 
  href = '/', 
  showText = true, 
  className = '', 
  id,
  onClick 
}: LogoProps) {
  const logoContent = (
    <>
      <div className="logo-icon">T7</div>
      {showText && <span className="logo-text">TRY007</span>}
    </>
  );

  if (onClick) {
    return (
      <button 
        id={id}
        className={`logo ${className}`}
        onClick={onClick}
        style={{ background: 'none', border: 'none' }}
      >
        {logoContent}
      </button>
    );
  }

  return (
    <a 
      id={id}
      href={href} 
      className={`logo ${className}`}
    >
      {logoContent}
    </a>
  );
}