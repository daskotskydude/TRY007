import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  sections: SidebarSection[];
  isOpen?: boolean;
  onItemClick?: (item: SidebarItem) => void;
  onClose?: () => void;
  className?: string;
}

export default function Sidebar({ 
  sections, 
  isOpen = true, 
  onItemClick, 
  onClose, 
  className = '' 
}: SidebarProps) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''} ${className}`}>
        {sections.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h3 className="sidebar-title">{section.title}</h3>
            <nav className="sidebar-nav">
              {section.items.map((item) => (
                <div key={item.id} className="sidebar-item">
                  <a
                    id={`sidebar-${item.id}`}
                    href={item.href}
                    className={`sidebar-link ${item.active ? 'sidebar-link-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick?.(item);
                    }}
                  >
                    {item.icon && (
                      <span className="sidebar-icon">{item.icon}</span>
                    )}
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        ))}
      </aside>
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}
    </>
  );
}