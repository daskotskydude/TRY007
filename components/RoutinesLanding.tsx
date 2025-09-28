import React from 'react';
import Card from './Card';
import Button from './Button';
import { Settings, Clock, Calendar, CheckSquare, Plus, Layout } from 'lucide-react';

export interface RoutinesLandingProps {
  onCreateRoutine?: () => void;
  onBrowseTemplates?: () => void;
  onViewSchedule?: () => void;
}

export default function RoutinesLanding({
  onCreateRoutine,
  onBrowseTemplates,
  onViewSchedule
}: RoutinesLandingProps) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-hero-icon">
          <Settings size={48} />
        </div>
        <h1>Workflow Routines & Automation</h1>
        <p>
          Streamline your daily operations with intelligent routines and automated 
          workflows designed to boost productivity and consistency.
        </p>
      </div>

      {/* Features Grid */}
      <div className="landing-features">
        <Card
          id="routines-automation"
          title="Smart Automation"
          subtitle="Automate repetitive tasks"
          variant="elevated"
        >
          <p className="text-secondary">
            Set up automated workflows for common tasks like data entry, 
            report generation, and notification management to save time and reduce errors.
          </p>
        </Card>

        <Card
          id="routines-templates"
          title="Routine Templates"
          subtitle="Pre-built workflow patterns"
          variant="elevated"
        >
          <p className="text-secondary">
            Choose from a library of proven routine templates for different 
            departments and use cases, or create custom routines from scratch.
          </p>
        </Card>

        <Card
          id="routines-scheduling"
          title="Flexible Scheduling"
          subtitle="Time-based and event-driven triggers"
          variant="elevated"
        >
          <p className="text-secondary">
            Schedule routines to run at specific times, intervals, or trigger 
            them based on events like form submissions or status changes.
          </p>
        </Card>

        <Card
          id="routines-monitoring"
          title="Performance Monitoring"
          subtitle="Track routine effectiveness"
          variant="elevated"
        >
          <p className="text-secondary">
            Monitor routine execution, success rates, and performance metrics. 
            Get alerts for failed routines and optimization recommendations.
          </p>
        </Card>

        <Card
          id="routines-collaboration"
          title="Team Collaboration"
          subtitle="Shared routines and workflows"
          variant="elevated"
        >
          <p className="text-secondary">
            Share routines with team members, set up approval workflows, 
            and collaborate on routine improvements across departments.
          </p>
        </Card>

        <Card
          id="routines-integration"
          title="System Integration"
          subtitle="Connect with existing tools"
          variant="elevated"
        >
          <p className="text-secondary">
            Integrate routines with popular business tools, databases, and APIs. 
            Create seamless workflows across your entire technology stack.
          </p>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="landing-cta">
        <h2>Optimize Your Workflows Today</h2>
        <p>Start automating repetitive tasks and create efficient routines that save time and improve accuracy.</p>
        <div className="cta-buttons">
          <Button
            id="routines-create-btn"
            variant="primary"
            size="lg"
            onClick={onCreateRoutine}
          >
            Create Routine
          </Button>
          <Button
            id="routines-templates-btn"
            variant="secondary"
            size="lg"
            onClick={onBrowseTemplates}
          >
            Browse Templates
          </Button>
          <Button
            id="routines-schedule-btn"
            variant="ghost"
            size="lg"
            onClick={onViewSchedule}
          >
            View Schedule
          </Button>
        </div>
      </div>
    </div>
  );
}