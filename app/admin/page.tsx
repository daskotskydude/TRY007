'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';
import NotificationBell from '../../components/NotificationBell';
import ProfileDropdown from '../../components/ProfileDropdown';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Card, { StatsCard } from '../../components/Card';
import { useToast } from '../../components/Toast';
import { CreateAdmin } from '../../components/CreateAdmin';

export default function AdminPage() {
  const { toasts, addToast } = useToast();

  const [currentSection, setCurrentSection] = React.useState('overview');

  const sidebarSections = [
    {
      title: 'Dashboard',
      items: [
        { id: 'overview', label: 'Overview', href: '/admin', active: currentSection === 'overview' },
        { id: 'analytics', label: 'Analytics', href: '/admin/analytics', active: currentSection === 'analytics' },
      ]
    },
    {
      title: 'Content Creation',
      items: [
        { id: 'create', label: 'Create Content', href: '#', active: currentSection === 'create' },
      ]
    },
    {
      title: 'Management',
      items: [
        { id: 'users', label: 'Users', href: '/admin/users', active: currentSection === 'users' },
        { id: 'projects', label: 'Projects', href: '/admin/projects', active: currentSection === 'projects' },
        { id: 'settings', label: 'Settings', href: '/admin/settings', active: currentSection === 'settings' },
      ]
    }
  ];

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === 'create') {
      addToast({
        message: 'Switched to Content Creation Center',
        variant: 'info'
      });
    } else {
      addToast({
        message: `${sectionId} feature is not available yet`,
        variant: 'info'
      });
    }
  };

  // Admin notifications (more system-focused)
  const adminNotifications = [
    {
      id: 'admin-notif-1',
      title: 'New User Registration',
      message: 'john.doe@example.com has joined the platform',
      time: new Date(Date.now() - 2 * 60000).toISOString(),
      isRead: false,
      type: 'info' as const
    },
    {
      id: 'admin-notif-2',
      title: 'System Alert',
      message: 'Server CPU usage exceeded 80% threshold',
      time: new Date(Date.now() - 15 * 60000).toISOString(),
      isRead: false,
      type: 'warning' as const
    },
    {
      id: 'admin-notif-3',
      title: 'Backup Completed',
      message: 'Daily database backup completed successfully',
      time: new Date(Date.now() - 60 * 60000).toISOString(),
      isRead: true,
      type: 'success' as const
    }
  ];

  // Admin user profile
  const adminUser = {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator'
  };

  // Admin profile menu
  const adminMenuItems = [
    {
      id: 'admin-profile',
      label: 'Admin Profile',
      icon: '👤',
      onClick: () => addToast({ message: 'Admin profile feature is not available yet', variant: 'info' })
    },
    {
      id: 'system-settings',
      label: 'System Settings',
      icon: '⚙️',
      onClick: () => addToast({ message: 'System settings feature is not available yet', variant: 'info' })
    },
    {
      id: 'user-management',
      label: 'User Management',
      icon: '👥',
      onClick: () => addToast({ message: 'User management feature is not available yet', variant: 'info' })
    },
    {
      id: 'audit-logs',
      label: 'Audit Logs',
      icon: '📋',
      onClick: () => addToast({ message: 'Audit logs feature is not available yet', variant: 'info' })
    },
    {
      id: 'admin-logout',
      label: 'Sign Out',
      icon: '🚪',
      separator: true,
      variant: 'danger' as const,
      onClick: () => addToast({ message: 'Admin sign out feature is not available yet', variant: 'info' })
    }
  ];

  const handleSidebarClick = (item: any) => {
    if (item.id === 'create') {
      handleSectionChange('create');
    } else {
      handleSectionChange(item.id);
    }
  };

  const handleQuickAction = (action: string) => {
    addToast({
      title: 'Quick Action',
      message: `${action} feature is not available yet`,
      variant: 'info'
    });
  };

  const handleAdminNotificationClick = (notification: any) => {
    addToast({
      title: 'Admin Notification',
      message: `Opened: ${notification.title}`,
      variant: 'info'
    });
  };

  const handleAdminMarkAllRead = () => {
    addToast({
      message: 'All admin notifications marked as read',
      variant: 'success'
    });
  };

  return (
    <div className="layout-main">
      <Navbar
        left={
          <Logo id="nav-admin-logo" href="/admin" />
        }
        center={
          <div className="navbar-tabs">
            <a href="/" className="navbar-tab" id="nav-home">
              Home
            </a>
            <a href="/admin" className="navbar-tab navbar-tab-active" id="nav-admin">
              Admin
            </a>
          </div>
        }
        right={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <NotificationBell
              id="nav-admin-notifications"
              notifications={adminNotifications}
              onNotificationClick={handleAdminNotificationClick}
              onMarkAllRead={handleAdminMarkAllRead}
            />
            <ProfileDropdown
              id="nav-admin-profile"
              user={adminUser}
              menuItems={adminMenuItems}
            />
          </div>
        }
      />

      <div className="layout-admin">
        <Sidebar
          sections={sidebarSections}
          onItemClick={handleSidebarClick}
        />

        <main className="layout-admin-content">
          {currentSection === 'create' ? (
            <CreateAdmin
              onShowToast={(message, type) => addToast({ message, variant: type })}
            />
          ) : (
            <>
              {/* Dashboard Header */}
              <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <h1 className="text-3xl font-bold" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  Dashboard Overview
                </h1>
                <p className="text-secondary">
                  Welcome to your admin dashboard. Monitor key metrics and manage your application.
                </p>
              </div>

          {/* Key Metrics */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-3xl)'
          }}>
            <StatsCard
              id="admin-stats-users"
              value="1,234"
              label="Total Users"
            />
            <StatsCard
              id="admin-stats-active"
              value="892"
              label="Active Today"
            />
            <StatsCard
              id="admin-stats-revenue"
              value="$12,345"
              label="Monthly Revenue"
            />
            <StatsCard
              id="admin-stats-growth"
              value="+15%"
              label="Growth Rate"
            />
          </div>

          {/* Quick Actions */}
          <Card
            id="admin-quick-actions"
            title="Quick Actions"
            subtitle="Common administrative tasks"
            className="admin-actions-card"
            style={{ marginBottom: 'var(--spacing-2xl)' }}
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-md)'
            }}>
              <Button
                id="admin-add-user-btn"
                variant="primary"
                onClick={() => handleQuickAction('Add User')}
              >
                Add New User
              </Button>
              <Button
                id="admin-create-project-btn"
                variant="secondary"
                onClick={() => handleQuickAction('Create Project')}
              >
                Create Project
              </Button>
              <Button
                id="admin-view-reports-btn"
                variant="secondary"
                onClick={() => handleQuickAction('View Reports')}
              >
                View Reports
              </Button>
              <Button
                id="admin-export-data-btn"
                variant="ghost"
                onClick={() => handleQuickAction('Export Data')}
              >
                Export Data
              </Button>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card
            id="admin-recent-activity"
            title="Recent Activity"
            subtitle="Latest system events and user actions"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ 
                padding: 'var(--spacing-sm)', 
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: 'var(--spacing-md)'
              }}>
                <div className="font-medium">New user registration</div>
                <div className="text-sm text-muted">john.doe@example.com • 2 minutes ago</div>
              </div>
              <div style={{ 
                padding: 'var(--spacing-sm)', 
                borderLeft: '3px solid var(--color-gray-300)',
                paddingLeft: 'var(--spacing-md)'
              }}>
                <div className="font-medium">Project created</div>
                <div className="text-sm text-muted">Marketing Campaign Q4 • 15 minutes ago</div>
              </div>
              <div style={{ 
                padding: 'var(--spacing-sm)', 
                borderLeft: '3px solid var(--color-gray-300)',
                paddingLeft: 'var(--spacing-md)'
              }}>
                <div className="font-medium">System backup completed</div>
                <div className="text-sm text-muted">Daily backup • 1 hour ago</div>
              </div>
            </div>
          </Card>
            </>
          )}
        </main>
      </div>

      {/* Toast Container */}
      <div>
        {toasts.map((toast) => (
          <div key={toast.id}>
            {/* Toast component would be rendered here */}
          </div>
        ))}
      </div>
    </div>
  );
}