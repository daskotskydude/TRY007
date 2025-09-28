import React from 'react';
import Card from './Card';
import Button from './Button';
import { BookOpen, FileText, Video, Download, Heart, Search } from 'lucide-react';

export interface ResourcesLandingProps {
  onBrowseLibrary?: () => void;
  onUploadResource?: () => void;
  onViewFavorites?: () => void;
}

export default function ResourcesLanding({
  onBrowseLibrary,
  onUploadResource,
  onViewFavorites
}: ResourcesLandingProps) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-hero-icon">
          <BookOpen size={48} />
        </div>
        <h1>Knowledge Resources Hub</h1>
        <p>
          Access a comprehensive library of documents, tools, templates, and 
          knowledge resources to support your work and professional growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="landing-features">
        <Card
          id="resources-library"
          title="Digital Library"
          subtitle="Centralized knowledge repository"
          variant="elevated"
        >
          <p className="text-secondary">
            Browse thousands of documents, guides, templates, and resources 
            organized by category, department, and relevance to your role.
          </p>
        </Card>

        <Card
          id="resources-search"
          title="Smart Search"
          subtitle="Find what you need quickly"
          variant="elevated"
        >
          <p className="text-secondary">
            Use advanced search with filters, tags, and AI-powered suggestions 
            to locate specific resources, topics, or document types instantly.
          </p>
        </Card>

        <Card
          id="resources-collaboration"
          title="Collaborative Sharing"
          subtitle="Team knowledge sharing"
          variant="elevated"
        >
          <p className="text-secondary">
            Share resources with teams, add comments and reviews, and collaborate 
            on document improvements with version control and access permissions.
          </p>
        </Card>

        <Card
          id="resources-templates"
          title="Template Library"
          subtitle="Ready-to-use templates"
          variant="elevated"
        >
          <p className="text-secondary">
            Access professionally designed templates for reports, presentations, 
            forms, and workflows to maintain consistency and save time.
          </p>
        </Card>

        <Card
          id="resources-mobile"
          title="Mobile Access"
          subtitle="Resources on-the-go"
          variant="elevated"
        >
          <p className="text-secondary">
            Access resources from any device with offline capability, 
            bookmark favorites, and sync reading progress across platforms.
          </p>
        </Card>

        <Card
          id="resources-analytics"
          title="Usage Analytics"
          subtitle="Track resource effectiveness"
          variant="elevated"
        >
          <p className="text-secondary">
            Monitor which resources are most accessed, track user engagement, 
            and identify knowledge gaps to improve the resource collection.
          </p>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="landing-cta">
        <h2>Unlock Your Team&apos;s Knowledge</h2>
        <p>Discover valuable resources and contribute to your organization&apos;s collective knowledge base.</p>
        <div className="cta-buttons">
          <Button
            id="resources-browse-btn"
            variant="primary"
            size="lg"
            onClick={onBrowseLibrary}
          >
            Browse Library
          </Button>
          <Button
            id="resources-upload-btn"
            variant="secondary"
            size="lg"
            onClick={onUploadResource}
          >
            Upload Resource
          </Button>
          <Button
            id="resources-favorites-btn"
            variant="ghost"
            size="lg"
            onClick={onViewFavorites}
          >
            My Favorites
          </Button>
        </div>
      </div>
    </div>
  );
}