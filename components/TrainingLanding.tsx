import React from 'react';
import Card from './Card';
import Button from './Button';
import { GraduationCap, BookOpen, Users, Trophy, Play, BarChart3 } from 'lucide-react';

export interface TrainingLandingProps {
  onGetStarted?: () => void;
  onBrowseCourses?: () => void;
  onViewProgress?: () => void;
}

export default function TrainingLanding({
  onGetStarted,
  onBrowseCourses,
  onViewProgress
}: TrainingLandingProps) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-hero-icon">
          <GraduationCap size={48} />
        </div>
        <h1>Professional Training Programs</h1>
        <p>
          Enhance your skills with our comprehensive training modules designed for 
          continuous learning and professional development.
        </p>
      </div>

      {/* Features Grid */}
      <div className="landing-features">
        <Card
          id="training-courses"
          title="Course Library"
          subtitle="Extensive collection of training materials"
          variant="elevated"
        >
          <p className="text-secondary">
            Access hundreds of courses covering technical skills, leadership development, 
            compliance training, and industry-specific knowledge.
          </p>
        </Card>

        <Card
          id="training-progress"
          title="Progress Tracking"
          subtitle="Monitor your learning journey"
          variant="elevated"
        >
          <p className="text-secondary">
            Track completion rates, quiz scores, and certifications earned. 
            Get insights into your learning patterns and achievements.
          </p>
        </Card>

        <Card
          id="training-certificates"
          title="Certifications"
          subtitle="Earn recognized credentials"
          variant="elevated"
        >
          <p className="text-secondary">
            Obtain industry-recognized certifications upon course completion. 
            Download certificates and add them to your professional profile.
          </p>
        </Card>

        <Card
          id="training-personalized"
          title="Personalized Learning"
          subtitle="Tailored to your role and goals"
          variant="elevated"
        >
          <p className="text-secondary">
            Get course recommendations based on your job role, career goals, 
            and learning preferences for maximum relevance and impact.
          </p>
        </Card>

        <Card
          id="training-mobile"
          title="Mobile Learning"
          subtitle="Learn on-the-go"
          variant="elevated"
        >
          <p className="text-secondary">
            Access training materials from any device. Download content for 
            offline learning and sync progress across all platforms.
          </p>
        </Card>

        <Card
          id="training-analytics"
          title="Learning Analytics"
          subtitle="Data-driven insights"
          variant="elevated"
        >
          <p className="text-secondary">
            Administrators can view detailed analytics on training completion, 
            engagement rates, and skill development across teams.
          </p>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="landing-cta">
        <h2>Ready to Start Learning?</h2>
        <p>Begin your professional development journey today with our expert-designed training programs.</p>
        <div className="cta-buttons">
          <Button
            id="training-get-started-btn"
            variant="primary"
            size="lg"
            onClick={onGetStarted}
          >
            Get Started
          </Button>
          <Button
            id="training-browse-courses-btn"
            variant="secondary"
            size="lg"
            onClick={onBrowseCourses}
          >
            Browse Courses
          </Button>
          <Button
            id="training-view-progress-btn"
            variant="ghost"
            size="lg"
            onClick={onViewProgress}
          >
            View My Progress
          </Button>
        </div>
      </div>
    </div>
  );
}