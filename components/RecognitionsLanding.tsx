import React from 'react';
import Card from './Card';
import Button from './Button';
import { Award, Medal, Star, Users, TrendingUp, Crown } from 'lucide-react';

export interface RecognitionsLandingProps {
  onNominate?: () => void;
  onViewAwards?: () => void;
  onMyAchievements?: () => void;
}

export default function RecognitionsLanding({
  onNominate,
  onViewAwards,
  onMyAchievements
}: RecognitionsLandingProps) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-hero-icon">
          <Award size={48} />
        </div>
        <h1>Recognition & Awards Program</h1>
        <p>
          Celebrate achievements, acknowledge exceptional performance, and foster 
          a culture of appreciation with our comprehensive recognition system.
        </p>
      </div>

      {/* Features Grid */}
      <div className="landing-features">
        <Card
          id="recognition-peer"
          title="Peer Recognition"
          subtitle="Acknowledge team contributions"
          variant="elevated"
        >
          <p className="text-secondary">
            Enable team members to recognize each other&apos;s contributions with 
            customizable awards, badges, and appreciation messages.
          </p>
        </Card>

        <Card
          id="recognition-achievements"
          title="Achievement Tracking"
          subtitle="Monitor milestones and goals"
          variant="elevated"
        >
          <p className="text-secondary">
            Track individual and team achievements, milestone completions, 
            and goal attainment with automated recognition triggers.
          </p>
        </Card>

        <Card
          id="recognition-leaderboards"
          title="Recognition Leaderboards"
          subtitle="Gamify performance excellence"
          variant="elevated"
        >
          <p className="text-secondary">
            Display top performers, most helpful team members, and achievement 
            leaders to encourage healthy competition and motivation.
          </p>
        </Card>

        <Card
          id="recognition-rewards"
          title="Reward Systems"
          subtitle="Tangible appreciation programs"
          variant="elevated"
        >
          <p className="text-secondary">
            Implement point-based reward systems, gift cards, extra time off, 
            and other incentives tied to recognition achievements.
          </p>
        </Card>

        <Card
          id="recognition-analytics"
          title="Recognition Analytics"
          subtitle="Measure engagement impact"
          variant="elevated"
        >
          <p className="text-secondary">
            Analyze recognition patterns, engagement levels, and the impact 
            of appreciation programs on team morale and retention.
          </p>
        </Card>

        <Card
          id="recognition-custom"
          title="Custom Awards"
          subtitle="Tailored recognition programs"
          variant="elevated"
        >
          <p className="text-secondary">
            Create custom award categories, nomination processes, and recognition 
            ceremonies that align with your organization&apos;s values and culture.
          </p>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="landing-cta">
        <h2>Celebrate Success Together</h2>
        <p>Build a positive workplace culture where achievements are recognized and excellence is celebrated.</p>
        <div className="cta-buttons">
          <Button
            id="recognition-nominate-btn"
            variant="primary"
            size="lg"
            onClick={onNominate}
          >
            Nominate Someone
          </Button>
          <Button
            id="recognition-awards-btn"
            variant="secondary"
            size="lg"
            onClick={onViewAwards}
          >
            View Awards
          </Button>
          <Button
            id="recognition-achievements-btn"
            variant="ghost"
            size="lg"
            onClick={onMyAchievements}
          >
            My Achievements
          </Button>
        </div>
      </div>
    </div>
  );
}