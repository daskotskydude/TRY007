"use client";

import React from 'react';
import Card from './Card';
import Button from './Button';
import { Home, BarChart3, Users, TrendingUp, Calendar, Award, BookOpen, Settings } from 'lucide-react';

interface HomeLandingProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({ 
  onShowToast = () => {} 
}) => {
  const handleFeatureClick = (feature: string) => {
    onShowToast(`${feature} feature is not available yet`, 'info');
  };

  const stats = [
    { label: 'Total Users', value: '2,543', icon: Users, trend: '+12%' },
    { label: 'Active Sessions', value: '1,847', icon: TrendingUp, trend: '+5%' },
    { label: 'Completion Rate', value: '89%', icon: BarChart3, trend: '+3%' },
    { label: 'Achievements', value: '156', icon: Award, trend: '+8%' }
  ];

  const quickActions = [
    { title: 'Schedule Training', description: 'Create new training sessions', icon: Calendar },
    { title: 'View Analytics', description: 'Monitor performance metrics', icon: BarChart3 },
    { title: 'Manage Users', description: 'User administration panel', icon: Users },
    { title: 'Resources Library', description: 'Access training materials', icon: BookOpen },
    { title: 'System Settings', description: 'Configure application', icon: Settings },
    { title: 'Recognition Center', description: 'Award achievements', icon: Award }
  ];

  return (
    <div className="home-landing">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="home-hero-content">
          <Home className="home-hero-icon" size={48} />
          <h1 className="home-hero-title">Dashboard Overview</h1>
          <p className="home-hero-description">
            Welcome to your comprehensive training and development platform. 
            Monitor progress, manage resources, and track achievements all in one place.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="home-stats-section">
        <h2 className="home-section-title">Key Metrics</h2>
        <div className="home-stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="home-stat-card">
                <div className="home-stat-header">
                  <IconComponent size={24} className="home-stat-icon" />
                  <span className="home-stat-trend">{stat.trend}</span>
                </div>
                <div className="home-stat-value">{stat.value}</div>
                <div className="home-stat-label">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="home-actions-section">
        <h2 className="home-section-title">Quick Actions</h2>
        <div className="home-actions-grid">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card key={index} className="home-action-card">
                <IconComponent size={32} className="home-action-icon" />
                <h3 className="home-action-title">{action.title}</h3>
                <p className="home-action-description">{action.description}</p>
                <Button 
                  id={`btn-home-action-${index}`}
                  variant="primary"
                  onClick={() => handleFeatureClick(action.title)}
                  className="home-action-button"
                >
                  Open
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};