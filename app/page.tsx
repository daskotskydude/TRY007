'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import NotificationBell from '../components/NotificationBell';
import ProfileDropdown from '../components/ProfileDropdown';
import Button from '../components/Button';
import Card, { StatsCard } from '../components/Card';
import { useToast } from '../components/Toast';

export default function HomePage() {
  const { toasts, addToast } = useToast();

  // Mock notifications
  const mockNotifications = [
    {
      id: 'notif-1',
      title: 'Welcome to TRY007!',
      message: 'Your account has been successfully created',
      time: new Date(Date.now() - 5 * 60000).toISOString(),
      isRead: false,
      type: 'success' as const
    },
    {
      id: 'notif-2',
      title: 'System Update',
      message: 'New features have been added to the admin dashboard',
      time: new Date(Date.now() - 30 * 60000).toISOString(),
      isRead: false,
      type: 'info' as const
    },
    {
      id: 'notif-3',
      title: 'Maintenance Scheduled',
      message: 'System maintenance will occur tomorrow at 2 AM',
      time: new Date(Date.now() - 2 * 60 * 60000).toISOString(),
      isRead: true,
      type: 'warning' as const
    }
  ];

  // Mock user profile
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User'
  };

  // Profile menu items
  const profileMenuItems = [
    {
      id: 'profile',
      label: 'Profile Settings',
      icon: '👤',
      onClick: () => addToast({ message: 'Profile feature is not available yet', variant: 'info' })
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: '⚙️',
      onClick: () => addToast({ message: 'Preferences feature is not available yet', variant: 'info' })
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: '❓',
      onClick: () => addToast({ message: 'Help feature is not available yet', variant: 'info' })
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: '🚪',
      separator: true,
      variant: 'danger' as const,
      onClick: () => addToast({ message: 'Sign out feature is not available yet', variant: 'info' })
    }
  ];

  const handleGetStarted = () => {
    addToast({
      title: 'Feature Coming Soon',
      message: 'This feature is not available yet',
      variant: 'info'
    });
  };

  const handleLearnMore = () => {
    addToast({
      title: 'Feature Coming Soon', 
      message: 'This feature is not available yet',
      variant: 'info'
    });
  };

  const handleNotificationClick = (notification: any) => {
    addToast({
      title: 'Notification Clicked',
      message: `Opened: ${notification.title}`,
      variant: 'info'
    });
  };

  const handleMarkAllRead = () => {
    addToast({
      message: 'All notifications marked as read',
      variant: 'success'
    });
  };

  return (
    <div className="layout-main">
      <Navbar
        left={
          <Logo id="nav-logo" />
        }
        center={
          <div className="navbar-tabs">
            <a href="/" className="navbar-tab navbar-tab-active" id="nav-home">
              Home
            </a>
            <a href="/admin" className="navbar-tab" id="nav-admin">
              Admin
            </a>
          </div>
        }
        right={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <NotificationBell
              id="nav-notifications"
              notifications={mockNotifications}
              onNotificationClick={handleNotificationClick}
              onMarkAllRead={handleMarkAllRead}
            />
            <ProfileDropdown
              id="nav-profile"
              user={mockUser}
              menuItems={profileMenuItems}
            />
          </div>
        }
      />

      <main className="layout-content">
        {/* Hero Section */}
        <section className="hero-section" style={{ 
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: 'var(--color-surface)'
        }}>
          <h1 className="text-4xl font-bold" style={{ marginBottom: 'var(--spacing-lg)' }}>
            Welcome to TRY007
          </h1>
          <p className="text-lg text-secondary" style={{ 
            marginBottom: 'var(--spacing-2xl)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-2xl) auto'
          }}>
            A modern, component-first application with beautiful UI and powerful admin features.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              id="home-get-started-btn"
              variant="primary"
              size="lg"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button
              id="home-learn-more-btn"
              variant="secondary"
              size="lg"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="text-2xl font-semibold" style={{ 
              textAlign: 'center', 
              marginBottom: 'var(--spacing-3xl)',
              color: 'var(--color-text-primary)'
            }}>
              Platform Statistics
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <StatsCard
                id="stats-users"
                value="1,234"
                label="Active Users"
              />
              <StatsCard
                id="stats-projects"
                value="56"
                label="Projects"
              />
              <StatsCard
                id="stats-tasks"
                value="789"
                label="Tasks Completed"
              />
              <StatsCard
                id="stats-uptime"
                value="99.9%"
                label="Uptime"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="text-2xl font-semibold" style={{ 
              textAlign: 'center', 
              marginBottom: 'var(--spacing-3xl)',
              color: 'var(--color-text-primary)'
            }}>
              Key Features
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <Card
                id="feature-components"
                title="Component-First Architecture"
                subtitle="Reusable, configurable components"
                variant="elevated"
              >
                <p className="text-secondary">
                  Built with a component-first approach where every UI element is reusable and configurable through props.
                </p>
              </Card>
              <Card
                id="feature-responsive"
                title="Mobile-First Design"
                subtitle="Works beautifully on all devices"
                variant="elevated"
              >
                <p className="text-secondary">
                  Responsive design that looks great on desktop, tablet, and mobile devices with consistent styling.
                </p>
              </Card>
              <Card
                id="feature-admin"
                title="Admin Dashboard"
                subtitle="Powerful admin interface"
                variant="elevated"
              >
                <p className="text-secondary">
                  Comprehensive admin dashboard with sidebar navigation and management tools for your application.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

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