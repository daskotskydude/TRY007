import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'elevated' | 'interactive';
  className?: string;
  id?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({ 
  children, 
  title, 
  subtitle, 
  variant = 'default',
  className = '',
  id,
  onClick,
  style 
}: CardProps) {
  const cardClasses = [
    'card',
    variant === 'elevated' && 'card-elevated',
    variant === 'interactive' && 'card-interactive',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      id={id}
      className={cardClasses}
      onClick={onClick}
      style={style}
    >
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export interface StatsCardProps {
  value: string | number;
  label: string;
  id?: string;
  className?: string;
}

export function StatsCard({ value, label, id, className = '' }: StatsCardProps) {
  return (
    <Card id={id} className={`stats-card ${className}`}>
      <div className="stats-card-value">{value}</div>
      <div className="stats-card-label">{label}</div>
    </Card>
  );
}