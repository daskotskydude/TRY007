import React, { useEffect } from 'react';

export interface ToastProps {
  title?: string;
  message: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
  duration?: number; // milliseconds, 0 means no auto-dismiss
  onClose: () => void;
  id?: string;
}

export default function Toast({ 
  title, 
  message, 
  variant = 'info', 
  duration = 5000,
  onClose,
  id 
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  return (
    <div id={id} className={`toast toast-${variant}`}>
      <span className="toast-icon">{getIcon()}</span>
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{message}</div>
      </div>
      <button 
        className="toast-close" 
        onClick={onClose}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>([]);

  const addToast = (toast: Omit<ToastProps, 'onClose' | 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast = {
      ...toast,
      id,
      onClose: () => removeToast(id)
    };
    setToasts(prev => [...prev, newToast]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast
  };
}