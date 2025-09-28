"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { Award, Medal, Star, Trophy, Crown, Gift } from 'lucide-react';

interface CreateRecognitionProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export default function CreateRecognition({ onShowToast = () => {} }: CreateRecognitionProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'achievement',
    points: '',
    criteria: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateAward = () => {
    if (!formData.title.trim()) {
      onShowToast('Award title is required', 'warning');
      return;
    }
    onShowToast('Award creation feature is not available yet', 'info');
  };

  const handleCreateBadge = () => {
    onShowToast('Badge creation feature is not available yet', 'info');
  };

  const handleCreateCertificate = () => {
    onShowToast('Certificate creation feature is not available yet', 'info');
  };

  return (
    <div className="create-content">
      {/* Quick Actions */}
      <div className="create-quick-actions">
        <Card className="create-action-card">
          <Award size={32} className="create-action-icon" />
          <h3>Create Award</h3>
          <p>Design recognition awards for outstanding achievements</p>
          <Button 
            id="btn-create-award"
            variant="primary"
            onClick={handleCreateAward}
          >
            Create Award
          </Button>
        </Card>

        <Card className="create-action-card">
          <Medal size={32} className="create-action-icon" />
          <h3>Design Badge</h3>
          <p>Create digital badges for skill milestones and accomplishments</p>
          <Button 
            id="btn-create-badge"
            variant="secondary"
            onClick={handleCreateBadge}
          >
            Create Badge
          </Button>
        </Card>

        <Card className="create-action-card">
          <Trophy size={32} className="create-action-icon" />
          <h3>Certificate Template</h3>
          <p>Build certificate templates for course completions</p>
          <Button 
            id="btn-create-certificate"
            variant="ghost"
            onClick={handleCreateCertificate}
          >
            Create Certificate
          </Button>
        </Card>
      </div>

      {/* Award Creation Form */}
      <div className="create-form-section">
        <h2>Recognition Details</h2>
        <Card className="create-form-card">
          <div className="create-form-group">
            <label htmlFor="award-title">Award Title</label>
            <input
              id="award-title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter award title"
              className="create-form-input"
            />
          </div>

          <div className="create-form-group">
            <label htmlFor="award-description">Description</label>
            <textarea
              id="award-description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe what this award recognizes"
              className="create-form-textarea"
              rows={4}
            />
          </div>

          <div className="create-form-row">
            <div className="create-form-group">
              <label htmlFor="award-category">Category</label>
              <select
                id="award-category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="create-form-select"
              >
                <option value="achievement">Achievement</option>
                <option value="performance">Performance</option>
                <option value="leadership">Leadership</option>
                <option value="innovation">Innovation</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>

            <div className="create-form-group">
              <label htmlFor="award-points">Points Value</label>
              <input
                id="award-points"
                type="number"
                value={formData.points}
                onChange={(e) => handleInputChange('points', e.target.value)}
                placeholder="e.g., 100"
                className="create-form-input"
              />
            </div>
          </div>

          <div className="create-form-group">
            <label htmlFor="award-criteria">Award Criteria</label>
            <textarea
              id="award-criteria"
              value={formData.criteria}
              onChange={(e) => handleInputChange('criteria', e.target.value)}
              placeholder="Define the criteria for earning this award"
              className="create-form-textarea"
              rows={3}
            />
          </div>

          <div className="create-form-actions">
            <Button 
              id="btn-save-award-draft"
              variant="ghost"
              onClick={() => onShowToast('Save draft feature is not available yet', 'info')}
            >
              Save Draft
            </Button>
            <Button 
              id="btn-publish-award"
              variant="primary"
              onClick={handleCreateAward}
            >
              Publish Award
            </Button>
          </div>
        </Card>
      </div>

      {/* Recognition Stats Preview */}
      <div className="create-stats-section">
        <h2>Recognition Impact Preview</h2>
        <div className="create-stats-grid">
          <Card className="create-stat-card">
            <Star size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Recipients</div>
          </Card>

          <Card className="create-stat-card">
            <Crown size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.points || '0'}</div>
            <div className="create-stat-label">Points Value</div>
          </Card>

          <Card className="create-stat-card">
            <Gift size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Times Awarded</div>
          </Card>

          <Card className="create-stat-card">
            <Trophy size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.category}</div>
            <div className="create-stat-label">Category</div>
          </Card>
        </div>
      </div>
    </div>
  );
}