"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { GraduationCap, Users, Clock, BookOpen, Play, Target, CheckSquare, Plus, Trash2, ChevronLeft, ChevronRight, Upload, DollarSign } from 'lucide-react';

interface CreateTrainingProps {
  onShowToast?: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'reading' | 'assignment';
  duration: number;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export default function CreateTraining({ onShowToast = () => {} }: CreateTrainingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    title: '',
    subtitle: '',
    description: '',
    category: 'development',
    subcategory: 'web-development',
    language: 'english',
    level: 'beginner',
    
    // Course Structure
    curriculum: [
      {
        id: '1',
        title: 'Introduction',
        lessons: [
          { id: '1-1', title: 'Welcome to the Course', type: 'video' as const, duration: 5 }
        ]
      }
    ] as Section[],
    
    // Pricing & Promotion
    price: 99.99,
    promoPrice: 0,
    
    // Course Image & Video
    thumbnail: '',
    promoVideo: '',
    
    // Requirements & Outcomes
    requirements: [''],
    outcomes: [''],
    targetAudience: ['']
  });

  const totalSteps = 5;

  const categories = [
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'photography', label: 'Photography' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayInputChange = (field: keyof typeof formData, index: number, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = [...currentArray];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: keyof typeof formData) => {
    const currentArray = formData[field] as string[];
    setFormData(prev => ({ ...prev, [field]: [...currentArray, ''] }));
  };

  const removeArrayItem = (field: keyof typeof formData, index: number) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      title: 'New Section',
      lessons: []
    };
    setFormData(prev => ({
      ...prev,
      curriculum: [...prev.curriculum, newSection]
    }));
  };

  const addLesson = (sectionId: string) => {
    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: 'New Lesson',
      type: 'video',
      duration: 5
    };
    
    setFormData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map(section =>
        section.id === sectionId
          ? { ...section, lessons: [...section.lessons, newLesson] }
          : section
      )
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePublish = () => {
    onShowToast('Course publishing feature is not available yet', 'info');
  };

  const getTotalDuration = () => {
    return formData.curriculum.reduce((total, section) => {
      return total + section.lessons.reduce((sectionTotal, lesson) => sectionTotal + lesson.duration, 0);
    }, 0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="course-step">
            <h2>Course Landing Page</h2>
            <div className="step-content">
              <div className="create-form-group">
                <label htmlFor="course-title">Course Title</label>
                <input
                  id="course-title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Insert your course title"
                  className="create-form-input"
                />
              </div>

              <div className="create-form-group">
                <label htmlFor="course-subtitle">Course Subtitle</label>
                <input
                  id="course-subtitle"
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  placeholder="Insert your course subtitle"
                  className="create-form-input"
                />
              </div>

              <div className="create-form-group">
                <label htmlFor="course-description">Course Description</label>
                <textarea
                  id="course-description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Insert your course description"
                  className="create-form-textarea"
                  rows={6}
                />
              </div>

              <div className="create-form-row">
                <div className="create-form-group">
                  <label htmlFor="course-category">Category</label>
                  <select
                    id="course-category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="create-form-select"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div className="create-form-group">
                  <label htmlFor="course-level">Course Level</label>
                  <select
                    id="course-level"
                    value={formData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    className="create-form-select"
                  >
                    <option value="beginner">Beginner Level</option>
                    <option value="intermediate">Intermediate Level</option>
                    <option value="advanced">Advanced Level</option>
                    <option value="all">All Levels</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="course-step">
            <h2>Course Structure & Curriculum</h2>
            <div className="step-content">
              <div className="curriculum-builder">
                {formData.curriculum.map((section, sectionIndex) => (
                  <Card key={section.id} className="curriculum-section">
                    <div className="section-header">
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => {
                          const newCurriculum = [...formData.curriculum];
                          newCurriculum[sectionIndex].title = e.target.value;
                          setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
                        }}
                        className="section-title-input"
                      />
                      <Button
                        variant="ghost"
                        onClick={() => addLesson(section.id)}
                      >
                        <Plus size={16} />
                        Add Lesson
                      </Button>
                    </div>
                    
                    <div className="lessons-list">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lesson.id} className="lesson-item">
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => {
                              const newCurriculum = [...formData.curriculum];
                              newCurriculum[sectionIndex].lessons[lessonIndex].title = e.target.value;
                              setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
                            }}
                            className="lesson-title-input"
                            placeholder="Lesson title"
                          />
                          <select
                            value={lesson.type}
                            onChange={(e) => {
                              const newCurriculum = [...formData.curriculum];
                              newCurriculum[sectionIndex].lessons[lessonIndex].type = e.target.value as any;
                              setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
                            }}
                            className="lesson-type-select"
                          >
                            <option value="video">Video</option>
                            <option value="quiz">Quiz</option>
                            <option value="reading">Reading</option>
                            <option value="assignment">Assignment</option>
                          </select>
                          <input
                            type="number"
                            value={lesson.duration}
                            onChange={(e) => {
                              const newCurriculum = [...formData.curriculum];
                              newCurriculum[sectionIndex].lessons[lessonIndex].duration = parseInt(e.target.value) || 0;
                              setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
                            }}
                            className="lesson-duration-input"
                            placeholder="Duration (min)"
                          />
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
                
                <Button
                  variant="ghost"
                  onClick={addSection}
                  className="add-section-btn"
                >
                  <Plus size={20} />
                  Add Section
                </Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="course-step">
            <h2>Course Requirements & Outcomes</h2>
            <div className="step-content">
              <div className="requirements-section">
                <h3>What are the requirements or prerequisites for taking your course?</h3>
                {formData.requirements.map((req, index) => (
                  <div key={index} className="array-input-item">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleArrayInputChange('requirements', index, e.target.value)}
                      placeholder="Example: No programming experience needed"
                      className="create-form-input"
                    />
                    {formData.requirements.length > 1 && (
                      <Button
                        variant="ghost"
                        onClick={() => removeArrayItem('requirements', index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  onClick={() => addArrayItem('requirements')}
                >
                  <Plus size={16} />
                  Add Requirement
                </Button>
              </div>

              <div className="outcomes-section">
                <h3>What will students learn in your course?</h3>
                {formData.outcomes.map((outcome, index) => (
                  <div key={index} className="array-input-item">
                    <input
                      type="text"
                      value={outcome}
                      onChange={(e) => handleArrayInputChange('outcomes', index, e.target.value)}
                      placeholder="Example: Build responsive websites with HTML, CSS, and JavaScript"
                      className="create-form-input"
                    />
                    {formData.outcomes.length > 1 && (
                      <Button
                        variant="ghost"
                        onClick={() => removeArrayItem('outcomes', index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  onClick={() => addArrayItem('outcomes')}
                >
                  <Plus size={16} />
                  Add Learning Outcome
                </Button>
              </div>

              <div className="audience-section">
                <h3>Who is this course for?</h3>
                {formData.targetAudience.map((audience, index) => (
                  <div key={index} className="array-input-item">
                    <input
                      type="text"
                      value={audience}
                      onChange={(e) => handleArrayInputChange('targetAudience', index, e.target.value)}
                      placeholder="Example: Beginners who want to learn web development"
                      className="create-form-input"
                    />
                    {formData.targetAudience.length > 1 && (
                      <Button
                        variant="ghost"
                        onClick={() => removeArrayItem('targetAudience', index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  onClick={() => addArrayItem('targetAudience')}
                >
                  <Plus size={16} />
                  Add Target Audience
                </Button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="course-step">
            <h2>Pricing & Promotions</h2>
            <div className="step-content">
              <div className="pricing-section">
                <div className="create-form-group">
                  <label htmlFor="course-price">Course Price (USD)</label>
                  <div className="price-input-group">
                    <DollarSign size={20} />
                    <input
                      id="course-price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                      placeholder="99.99"
                      className="create-form-input price-input"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <div className="create-form-group">
                  <label htmlFor="promo-price">Promotional Price (Optional)</label>
                  <div className="price-input-group">
                    <DollarSign size={20} />
                    <input
                      id="promo-price"
                      type="number"
                      value={formData.promoPrice}
                      onChange={(e) => handleInputChange('promoPrice', parseFloat(e.target.value) || 0)}
                      placeholder="49.99"
                      className="create-form-input price-input"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <div className="pricing-preview">
                  <Card className="price-preview-card">
                    <h3>Price Preview</h3>
                    <div className="price-display">
                      {formData.promoPrice > 0 && (
                        <span className="original-price">${formData.price}</span>
                      )}
                      <span className="current-price">
                        ${formData.promoPrice > 0 ? formData.promoPrice : formData.price}
                      </span>
                      {formData.promoPrice > 0 && (
                        <span className="discount">
                          {Math.round(((formData.price - formData.promoPrice) / formData.price) * 100)}% off
                        </span>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="course-step">
            <h2>Course Preview & Publish</h2>
            <div className="step-content">
              <Card className="course-preview">
                <h3>{formData.title}</h3>
                <p className="course-subtitle">{formData.subtitle}</p>
                <p className="course-description">{formData.description}</p>
                
                <div className="course-stats">
                  <div className="stat-item">
                    <Clock size={16} />
                    <span>{Math.floor(getTotalDuration() / 60)}h {getTotalDuration() % 60}m total length</span>
                  </div>
                  <div className="stat-item">
                    <BookOpen size={16} />
                    <span>{formData.curriculum.reduce((total, section) => total + section.lessons.length, 0)} lectures</span>
                  </div>
                  <div className="stat-item">
                    <Target size={16} />
                    <span>{formData.level} level</span>
                  </div>
                </div>

                <div className="publish-actions">
                  <Button
                    variant="ghost"
                    onClick={() => onShowToast('Save as draft feature is not available yet', 'info')}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handlePublish}
                  >
                    Publish Course
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="course-creator">
      {/* Progress Indicator */}
      <div className="course-creator-header">
        <div className="step-indicator">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`step-dot ${currentStep > index ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="step-info">
          <span>Step {currentStep} of {totalSteps}</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="step-container">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="step-navigation">
        <Button
          variant="ghost"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ChevronLeft size={20} />
          Previous
        </Button>
        
        <Button
          variant="primary"
          onClick={nextStep}
          disabled={currentStep === totalSteps}
        >
          Next
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}