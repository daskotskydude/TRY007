import React, { useState, useRef, useEffect } from 'react';
import { Bell, X, Check, CheckCheck } from 'lucide-react';

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type?: 'info' | 'warning' | 'success' | 'error';
}

export interface NotificationBellProps {
  notifications: Notification[];
  onNotificationClick?: (notification: Notification) => void;
  onMarkAllRead?: () => void;
  id?: string;
  className?: string;
}

export default function NotificationBell({
  notifications = [],
  onNotificationClick,
  onMarkAllRead,
  id,
  className = ''
}: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getNotificationIcon = (type?: string) => {
    switch (type) {
      case 'success':
        return <Check size={16} />;
      case 'error':
        return <X size={16} />;
      case 'warning':
        return <Bell size={16} />;
      default:
        return <Bell size={16} />;
    }
  };

  const formatTime = (time: string) => {
    // Simple time formatting - in real app you'd use a proper date library
    const now = new Date();
    const notificationTime = new Date(time);
    const diff = now.getTime() - notificationTime.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
    return `${Math.floor(minutes / 1440)}d ago`;
  };

  return (
    <div className={`notification-bell ${className}`} ref={dropdownRef}>
      <button
        id={id}
        className="notification-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
      >
                <Bell size={20} className="notification-bell-icon" />
        {unreadCount > 0 && (
          <span className="notification-badge">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <span className="notification-title">Notifications</span>
            {unreadCount > 0 && (
              <button
                className="notification-mark-read"
                onClick={() => {
                  onMarkAllRead?.();
                }}
              >
                Mark all read
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <div className="notification-empty">
              No notifications yet
            </div>
          ) : (
            <ul className="notification-list">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`notification-item ${
                    !notification.isRead ? 'notification-item-unread' : ''
                  }`}
                  onClick={() => {
                    onNotificationClick?.(notification);
                    setIsOpen(false);
                  }}
                >
                  <div className="notification-item-content">
                    <span className="notification-item-icon">
                      {getNotificationIcon(notification.type)}
                    </span>
                    <div className="notification-item-text">
                      <div className="notification-item-title">
                        {notification.title}
                      </div>
                      <div className="notification-item-message">
                        {notification.message}
                      </div>
                      <div className="notification-item-time">
                        {formatTime(notification.time)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}