"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { Settings, Clock, Calendar, Repeat, Workflow, Zap } from 'lucide-react';

interface CreateRoutinesProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export default function CreateRoutines({ onShowToast = () => {} }: CreateRoutinesProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: 'daily',
    duration: '',
    category: 'workflow'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateRoutine = () => {
    if (!formData.name.trim()) {
      onShowToast('Routine name is required', 'warning');
      return;
    }
    onShowToast('Routine creation feature is not available yet', 'info');
  };

  const handleCreateTemplate = () => {
    onShowToast('Template creation feature is not available yet', 'info');
  };

  const handleCreateWorkflow = () => {
    onShowToast('Workflow automation feature is not available yet', 'info');
  };

  return (
    <div className="create-content">
      {/* Quick Actions */}
      <div className="create-quick-actions">
        <Card className="create-action-card">
          <Settings size={32} className="create-action-icon" />
          <h3>New Routine</h3>
          <p>Create structured daily, weekly, or monthly routines</p>
          <Button 
            id="btn-create-routine"
            variant="primary"
            onClick={handleCreateRoutine}
          >
            Create Routine
          </Button>
        </Card>

        <Card className="create-action-card">
          <Repeat size={32} className="create-action-icon" />
          <h3>Routine Template</h3>
          <p>Build reusable templates for common routine patterns</p>
          <Button 
            id="btn-create-template"
            variant="secondary"
            onClick={handleCreateTemplate}
          >
            Create Template
          </Button>
        </Card>

        <Card className="create-action-card">
          <Workflow size={32} className="create-action-icon" />
          <h3>Automation Workflow</h3>
          <p>Set up automated workflows with triggers and actions</p>
          <Button 
            id="btn-create-workflow"
            variant="ghost"
            onClick={handleCreateWorkflow}
          >
            Create Workflow
          </Button>
        </Card>
      </div>

      {/* Routine Creation Form */}
      <div className="create-form-section">
        <h2>Routine Configuration</h2>
        <Card className="create-form-card">
          <div className="create-form-group">
            <label htmlFor="routine-name">Routine Name</label>
            <input
              id="routine-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter routine name"
              className="create-form-input"
            />
          </div>

          <div className="create-form-group">
            <label htmlFor="routine-description">Description</label>
            <textarea
              id="routine-description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the routine purpose and steps"
              className="create-form-textarea"
              rows={4}
            />
          </div>

          <div className="create-form-row">
            <div className="create-form-group">
              <label htmlFor="routine-frequency">Frequency</label>
              <select
                id="routine-frequency"
                value={formData.frequency}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
                className="create-form-select"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div className="create-form-group">
              <label htmlFor="routine-duration">Duration (minutes)</label>
              <input
                id="routine-duration"
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="e.g., 30"
                className="create-form-input"
              />
            </div>
          </div>

          <div className="create-form-actions">
            <Button 
              id="btn-save-routine-draft"
              variant="ghost"
              onClick={() => onShowToast('Save draft feature is not available yet', 'info')}
            >
              Save Draft
            </Button>
            <Button 
              id="btn-activate-routine"
              variant="primary"
              onClick={handleCreateRoutine}
            >
              Activate Routine
            </Button>
          </div>
        </Card>
      </div>

      {/* Routine Stats Preview */}
      <div className="create-stats-section">
        <h2>Routine Performance Preview</h2>
        <div className="create-stats-grid">
          <Card className="create-stat-card">
            <Calendar size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Scheduled Runs</div>
          </Card>

          <Card className="create-stat-card">
            <Clock size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.duration || '0'}m</div>
            <div className="create-stat-label">Duration</div>
          </Card>

          <Card className="create-stat-card">
            <Zap size={24} className="create-stat-icon" />
            <div className="create-stat-value">0%</div>
            <div className="create-stat-label">Success Rate</div>
          </Card>

          <Card className="create-stat-card">
            <Repeat size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.frequency}</div>
            <div className="create-stat-label">Frequency</div>
          </Card>
        </div>
      </div>
    </div>
  );
}