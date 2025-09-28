"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { GraduationCap, Users, Clock, BookOpen, Play, Target, CheckSquare } from 'lucide-react';

interface CreateTrainingProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export default function CreateTraining({ onShowToast = () => {} }: CreateTrainingProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    difficulty: 'beginner',
    category: 'general'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateCourse = () => {
    if (!formData.title.trim()) {
      onShowToast('Course title is required', 'warning');
      return;
    }
    onShowToast('Training course creation feature is not available yet', 'info');
  };

  const handleCreateProgram = () => {
    onShowToast('Training program creation feature is not available yet', 'info');
  };

  const handleImportContent = () => {
    onShowToast('Content import feature is not available yet', 'info');
  };

  return (
    <div className="create-content">
      {/* Quick Actions */}
      <div className="create-quick-actions">
        <Card className="create-action-card">
          <GraduationCap size={32} className="create-action-icon" />
          <h3>Create New Course</h3>
          <p>Build interactive training courses with modules and assessments</p>
          <Button 
            id="btn-create-course"
            variant="primary"
            onClick={handleCreateCourse}
          >
            Create Course
          </Button>
        </Card>

        <Card className="create-action-card">
          <Users size={32} className="create-action-icon" />
          <h3>Training Program</h3>
          <p>Design comprehensive programs with multiple courses and tracks</p>
          <Button 
            id="btn-create-program"
            variant="secondary"
            onClick={handleCreateProgram}
          >
            Create Program
          </Button>
        </Card>

        <Card className="create-action-card">
          <BookOpen size={32} className="create-action-icon" />
          <h3>Import Content</h3>
          <p>Import existing training materials and convert to courses</p>
          <Button 
            id="btn-import-content"
            variant="ghost"
            onClick={handleImportContent}
          >
            Import Content
          </Button>
        </Card>
      </div>

      {/* Course Creation Form */}
      <div className="create-form-section">
        <h2>Course Details</h2>
        <Card className="create-form-card">
          <div className="create-form-group">
            <label htmlFor="course-title">Course Title</label>
            <input
              id="course-title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter course title"
              className="create-form-input"
            />
          </div>

          <div className="create-form-group">
            <label htmlFor="course-description">Description</label>
            <textarea
              id="course-description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the course objectives and content"
              className="create-form-textarea"
              rows={4}
            />
          </div>

          <div className="create-form-row">
            <div className="create-form-group">
              <label htmlFor="course-duration">Duration (hours)</label>
              <input
                id="course-duration"
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="e.g., 8"
                className="create-form-input"
              />
            </div>

            <div className="create-form-group">
              <label htmlFor="course-difficulty">Difficulty Level</label>
              <select
                id="course-difficulty"
                value={formData.difficulty}
                onChange={(e) => handleInputChange('difficulty', e.target.value)}
                className="create-form-select"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="create-form-actions">
            <Button 
              id="btn-save-draft"
              variant="ghost"
              onClick={() => onShowToast('Save draft feature is not available yet', 'info')}
            >
              Save Draft
            </Button>
            <Button 
              id="btn-publish-course"
              variant="primary"
              onClick={handleCreateCourse}
            >
              Publish Course
            </Button>
          </div>
        </Card>
      </div>

      {/* Course Stats Preview */}
      <div className="create-stats-section">
        <h2>Course Analytics Preview</h2>
        <div className="create-stats-grid">
          <Card className="create-stat-card">
            <Target size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Enrolled Students</div>
          </Card>

          <Card className="create-stat-card">
            <Clock size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.duration || '0'}h</div>
            <div className="create-stat-label">Course Duration</div>
          </Card>

          <Card className="create-stat-card">
            <Play size={24} className="create-stat-icon" />
            <div className="create-stat-value">0%</div>
            <div className="create-stat-label">Completion Rate</div>
          </Card>

          <Card className="create-stat-card">
            <CheckSquare size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Assessments</div>
          </Card>
        </div>
      </div>
    </div>
  );
}