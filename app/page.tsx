'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card, { StatsCard } from '../components/Card';
import { useToast } from '../components/Toast';

export default function HomePage() {
  const { toasts, addToast } = useToast();

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

  return (
    <div className="layout-main">
      <Navbar
        left={
          <a href="/" className="navbar-logo" id="nav-logo">
            TRY007
          </a>
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
          <Button
            id="nav-login-btn"
            variant="secondary"
            size="sm"
            onClick={() => addToast({
              message: 'This feature is not available yet',
              variant: 'info'
            })}
          >
            Login
          </Button>
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