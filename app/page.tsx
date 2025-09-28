'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import NotificationBell from '../components/NotificationBell';
import ProfileDropdown from '../components/ProfileDropdown';
import TabSystem from '../components/TabSystem';
import { HomeLanding } from '../components/HomeLanding';
import TrainingLanding from '../components/TrainingLanding';
import RoutinesLanding from '../components/RoutinesLanding';
import RecognitionsLanding from '../components/RecognitionsLanding';
import ResourcesLanding from '../components/ResourcesLanding';
import Button from '../components/Button';
import Card, { StatsCard } from '../components/Card';
import { useToast } from '../components/Toast';
import { Home, GraduationCap, Settings, Award, BookOpen, User, HelpCircle, LogOut } from 'lucide-react';

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
      icon: <User size={16} />,
      onClick: () => addToast({ message: 'Profile feature is not available yet', variant: 'info' })
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: <Settings size={16} />,
      onClick: () => addToast({ message: 'Preferences feature is not available yet', variant: 'info' })
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle size={16} />,
      onClick: () => addToast({ message: 'Help feature is not available yet', variant: 'info' })
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: <LogOut size={16} />,
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

  // Tab change handler
  const handleTabChange = (tabId: string) => {
    addToast({
      message: `Switched to ${tabId} section`,
      variant: 'info'
    });
  };

  // Landing page action handlers
  const handleFeatureAction = (action: string) => {
    addToast({
      title: 'Feature Coming Soon',
      message: `${action} feature is not available yet`,
      variant: 'info'
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
            <a href="/admin" className="navbar-tab" id="nav-admin">
              Admin Dashboard
            </a>
          </div>
        }
        below={
          <TabSystem
            id="main-tabs"
            defaultTab="home"
            onTabChange={handleTabChange}
            tabs={[
              {
                id: 'home',
                label: 'Home',
                icon: <Home size={16} />,
                content: (
                  <HomeLanding
                    onShowToast={(message, type) => addToast({ message, variant: type })}
                  />
                )
              },
              {
                id: 'training',
                label: 'Training',
                icon: <GraduationCap size={16} />,
                content: (
                  <TrainingLanding
                    onGetStarted={() => handleFeatureAction('Training Get Started')}
                    onBrowseCourses={() => handleFeatureAction('Browse Courses')}
                    onViewProgress={() => handleFeatureAction('View Progress')}
                  />
                )
              },
              {
                id: 'routines',
                label: 'Routines',
                icon: <Settings size={16} />,
                content: (
                  <RoutinesLanding
                    onCreateRoutine={() => handleFeatureAction('Create Routine')}
                    onBrowseTemplates={() => handleFeatureAction('Browse Templates')}
                    onViewSchedule={() => handleFeatureAction('View Schedule')}
                  />
                )
              },
              {
                id: 'recognitions',
                label: 'Recognitions',
                icon: <Award size={16} />,
                content: (
                  <RecognitionsLanding
                    onNominate={() => handleFeatureAction('Nominate Someone')}
                    onViewAwards={() => handleFeatureAction('View Awards')}
                    onMyAchievements={() => handleFeatureAction('My Achievements')}
                  />
                )
              },
              {
                id: 'resources',
                label: 'Resources',
                icon: <BookOpen size={16} />,
                content: (
                  <ResourcesLanding
                    onBrowseLibrary={() => handleFeatureAction('Browse Library')}
                    onUploadResource={() => handleFeatureAction('Upload Resource')}
                    onViewFavorites={() => handleFeatureAction('View Favorites')}
                  />
                )
              }
            ]}
          />
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
        {/* Tab system content is handled in the navbar below slot */}
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