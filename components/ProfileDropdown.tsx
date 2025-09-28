import React, { useState, useRef, useEffect } from 'react';
import { User, ChevronDown, Settings, LogOut, Shield, Bell } from 'lucide-react';

export interface ProfileDropdownItem {
  id: string;
  label: string;
  href?: string;
  icon?: string | React.ReactNode;
  onClick?: () => void;
  separator?: boolean;
  variant?: 'default' | 'danger';
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

export interface ProfileDropdownProps {
  user: UserProfile;
  menuItems: ProfileDropdownItem[];
  onProfileClick?: () => void;
  id?: string;
  className?: string;
}

export default function ProfileDropdown({
  user,
  menuItems,
  onProfileClick,
  id,
  className = ''
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleItemClick = (item: ProfileDropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div 
      className={`profile-dropdown ${isOpen ? 'profile-dropdown-open' : ''} ${className}`} 
      ref={dropdownRef}
    >
      <button
        id={id}
        className="profile-button"
        onClick={() => {
          if (onProfileClick) {
            onProfileClick();
          } else {
            setIsOpen(!isOpen);
          }
        }}
        aria-label="User profile menu"
      >
        <div className="profile-avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <User size={20} className="profile-avatar-icon" />
          )}
        </div>
        
        <div className="profile-info">
          <span className="profile-name">{user.name}</span>
          {user.role && <span className="profile-role">{user.role}</span>}
        </div>
        
        <ChevronDown size={16} className="profile-chevron" />
      </button>

      {isOpen && (
        <div className="profile-dropdown-menu">
          <div className="profile-dropdown-header">
            <div className="profile-dropdown-name">{user.name}</div>
            <div className="profile-dropdown-email">{user.email}</div>
          </div>

          <nav className="profile-dropdown-nav">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.separator && <div className="profile-dropdown-separator" />}
                <div className="profile-dropdown-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`profile-dropdown-link ${
                        item.variant === 'danger' ? 'profile-dropdown-logout' : ''
                      }`}
                      onClick={(e) => {
                        if (item.onClick) {
                          e.preventDefault();
                          handleItemClick(item);
                        }
                      }}
                    >
                      {item.icon && <span className="profile-dropdown-icon">{item.icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <button
                      className={`profile-dropdown-link ${
                        item.variant === 'danger' ? 'profile-dropdown-logout' : ''
                      }`}
                      onClick={() => handleItemClick(item)}
                      style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                    >
                      {item.icon && <span className="profile-dropdown-icon">{item.icon}</span>}
                      {item.label}
                    </button>
                  )}
                </div>
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}