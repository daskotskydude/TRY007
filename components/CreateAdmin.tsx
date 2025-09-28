"use client";

import React from 'react';
import TabSystem from './TabSystem';
import CreateTraining from './CreateTraining';
import CreateRoutines from './CreateRoutines';
import CreateRecognition from './CreateRecognition';
import CreateResources from './CreateResources';
import { Plus, GraduationCap, Settings, Award, BookOpen } from 'lucide-react';

interface CreateAdminProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export const CreateAdmin: React.FC<CreateAdminProps> = ({ 
  onShowToast = () => {} 
}) => {
  const handleTabChange = (tabId: string) => {
    onShowToast(`Switched to Create ${tabId} section`, 'info');
  };

  return (
    <div className="create-admin">
      {/* Hero Section */}
      <div className="create-admin-hero">
        <div className="create-admin-hero-content">
          <Plus className="create-admin-hero-icon" size={48} />
          <h1 className="create-admin-hero-title">Content Creation Center</h1>
          <p className="create-admin-hero-description">
            Comprehensive admin interface for creating and managing training programs, 
            routines, recognition awards, and learning resources.
          </p>
        </div>
      </div>

      {/* Nested Tab System */}
      <div className="create-admin-tabs">
        <TabSystem
          id="create-tabs"
          defaultTab="training"
          onTabChange={handleTabChange}
          className="create-tab-system"
          tabs={[
            {
              id: 'training',
              label: 'Training',
              icon: <GraduationCap size={16} />,
              content: (
                <CreateTraining
                  onShowToast={onShowToast}
                />
              )
            },
            {
              id: 'routines',
              label: 'Routines',
              icon: <Settings size={16} />,
              content: (
                <CreateRoutines
                  onShowToast={onShowToast}
                />
              )
            },
            {
              id: 'recognition',
              label: 'Recognition',
              icon: <Award size={16} />,
              content: (
                <CreateRecognition
                  onShowToast={onShowToast}
                />
              )
            },
            {
              id: 'resources',
              label: 'Resources',
              icon: <BookOpen size={16} />,
              content: (
                <CreateResources
                  onShowToast={onShowToast}
                />
              )
            }
          ]}
        />
      </div>
    </div>
  );
};