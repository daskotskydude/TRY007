'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Card, { StatsCard } from '../../components/Card';
import { useToast } from '../../components/Toast';

export default function AdminPage() {
  const { toasts, addToast } = useToast();

  const sidebarSections = [
    {
      title: 'Dashboard',
      items: [
        { id: 'overview', label: 'Overview', href: '/admin', active: true },
        { id: 'analytics', label: 'Analytics', href: '/admin/analytics' },
      ]
    },
    {
      title: 'Management',
      items: [
        { id: 'users', label: 'Users', href: '/admin/users' },
        { id: 'projects', label: 'Projects', href: '/admin/projects' },
        { id: 'settings', label: 'Settings', href: '/admin/settings' },
      ]
    }
  ];

  const handleSidebarClick = (item: any) => {
    addToast({
      title: 'Navigation',
      message: `${item.label} feature is not available yet`,
      variant: 'info'
    });
  };

  const handleQuickAction = (action: string) => {
    addToast({
      title: 'Quick Action',
      message: `${action} feature is not available yet`,
      variant: 'info'
    });
  };

  return (
    <div className="layout-main">
      <Navbar
        left={
          <a href="/" className="navbar-logo" id="nav-logo">
            TRY007 Admin
          </a>
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
          <Button
            id="nav-profile-btn"
            variant="secondary"
            size="sm"
            onClick={() => addToast({
              message: 'Profile feature is not available yet',
              variant: 'info'
            })}
          >
            Profile
          </Button>
        }
      />

      <div className="layout-admin">
        <Sidebar
          sections={sidebarSections}
          onItemClick={handleSidebarClick}
        />

        <main className="layout-admin-content">
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