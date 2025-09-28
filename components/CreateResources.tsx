"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { BookOpen, FileText, Video, Upload, Link, Folder } from 'lucide-react';

interface CreateResourcesProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export default function CreateResources({ onShowToast = () => {} }: CreateResourcesProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'document',
    category: 'general',
    tags: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateDocument = () => {
    if (!formData.title.trim()) {
      onShowToast('Resource title is required', 'warning');
      return;
    }
    onShowToast('Document creation feature is not available yet', 'info');
  };

  const handleUploadResource = () => {
    onShowToast('File upload feature is not available yet', 'info');
  };

  const handleCreateLibrary = () => {
    onShowToast('Library creation feature is not available yet', 'info');
  };

  return (
    <div className="create-content">
      {/* Quick Actions */}
      <div className="create-quick-actions">
        <Card className="create-action-card">
          <FileText size={32} className="create-action-icon" />
          <h3>New Document</h3>
          <p>Create text documents, guides, and reference materials</p>
          <Button 
            id="btn-create-document"
            variant="primary"
            onClick={handleCreateDocument}
          >
            Create Document
          </Button>
        </Card>

        <Card className="create-action-card">
          <Upload size={32} className="create-action-icon" />
          <h3>Upload Resource</h3>
          <p>Upload files, videos, presentations, and other materials</p>
          <Button 
            id="btn-upload-resource"
            variant="secondary"
            onClick={handleUploadResource}
          >
            Upload Files
          </Button>
        </Card>

        <Card className="create-action-card">
          <Folder size={32} className="create-action-icon" />
          <h3>Resource Library</h3>
          <p>Organize resources into structured libraries and collections</p>
          <Button 
            id="btn-create-library"
            variant="ghost"
            onClick={handleCreateLibrary}
          >
            Create Library
          </Button>
        </Card>
      </div>

      {/* Resource Creation Form */}
      <div className="create-form-section">
        <h2>Resource Information</h2>
        <Card className="create-form-card">
          <div className="create-form-group">
            <label htmlFor="resource-title">Resource Title</label>
            <input
              id="resource-title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter resource title"
              className="create-form-input"
            />
          </div>

          <div className="create-form-group">
            <label htmlFor="resource-description">Description</label>
            <textarea
              id="resource-description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the resource content and purpose"
              className="create-form-textarea"
              rows={4}
            />
          </div>

          <div className="create-form-row">
            <div className="create-form-group">
              <label htmlFor="resource-type">Resource Type</label>
              <select
                id="resource-type"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="create-form-select"
              >
                <option value="document">Document</option>
                <option value="video">Video</option>
                <option value="presentation">Presentation</option>
                <option value="image">Image</option>
                <option value="audio">Audio</option>
                <option value="link">External Link</option>
              </select>
            </div>

            <div className="create-form-group">
              <label htmlFor="resource-category">Category</label>
              <select
                id="resource-category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="create-form-select"
              >
                <option value="general">General</option>
                <option value="training">Training</option>
                <option value="reference">Reference</option>
                <option value="templates">Templates</option>
                <option value="policies">Policies</option>
              </select>
            </div>
          </div>

          <div className="create-form-group">
            <label htmlFor="resource-tags">Tags</label>
            <input
              id="resource-tags"
              type="text"
              value={formData.tags}
              onChange={(e) => handleInputChange('tags', e.target.value)}
              placeholder="Enter tags separated by commas"
              className="create-form-input"
            />
          </div>

          <div className="create-form-actions">
            <Button 
              id="btn-save-resource-draft"
              variant="ghost"
              onClick={() => onShowToast('Save draft feature is not available yet', 'info')}
            >
              Save Draft
            </Button>
            <Button 
              id="btn-publish-resource"
              variant="primary"
              onClick={handleCreateDocument}
            >
              Publish Resource
            </Button>
          </div>
        </Card>
      </div>

      {/* Resource Stats Preview */}
      <div className="create-stats-section">
        <h2>Resource Usage Preview</h2>
        <div className="create-stats-grid">
          <Card className="create-stat-card">
            <BookOpen size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Views</div>
          </Card>

          <Card className="create-stat-card">
            <Video size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.type}</div>
            <div className="create-stat-label">Type</div>
          </Card>

          <Card className="create-stat-card">
            <Link size={24} className="create-stat-icon" />
            <div className="create-stat-value">0</div>
            <div className="create-stat-label">Downloads</div>
          </Card>

          <Card className="create-stat-card">
            <Folder size={24} className="create-stat-icon" />
            <div className="create-stat-value">{formData.category}</div>
            <div className="create-stat-label">Category</div>
          </Card>
        </div>
      </div>
    </div>
  );
}