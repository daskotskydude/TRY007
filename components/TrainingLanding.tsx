import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { GraduationCap, BookOpen, Users, Trophy, Play, BarChart3, Star, Clock, Award, ChevronLeft, CheckCircle, Lock } from 'lucide-react';

export interface TrainingLandingProps {
  onGetStarted?: () => void;
  onBrowseCourses?: () => void;
  onViewProgress?: () => void;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  price: number;
  thumbnail: string;
  lessons: Lesson[];
  enrolled?: boolean;
  progress?: number;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'reading';
  completed: boolean;
  locked: boolean;
}

type ViewMode = 'browse' | 'course-detail' | 'course-player';

// Course Detail Component
const CourseDetail: React.FC<{
  course: Course;
  onEnroll: () => void;
  onStartCourse: () => void;
  onBack: () => void;
}> = ({ course, onEnroll, onStartCourse, onBack }) => (
  <div className="course-detail">
    <div className="course-detail-header">
      <Button variant="ghost" onClick={onBack} className="back-button">
        <ChevronLeft size={20} />
        Back to Courses
      </Button>
    </div>
    
    <div className="course-detail-content">
      <div className="course-info">
        <h1>{course.title}</h1>
        <p className="instructor">by {course.instructor}</p>
        <div className="course-meta">
          <span className="rating">
            <Star size={16} fill="gold" color="gold" />
            {course.rating} ({course.students.toLocaleString()} students)
          </span>
          <span className="duration">
            <Clock size={16} />
            {course.duration}
          </span>
          <span className={`difficulty difficulty-${course.difficulty.toLowerCase()}`}>
            {course.difficulty}
          </span>
        </div>
        <p className="description">{course.description}</p>
        
        {course.enrolled ? (
          <div className="enrolled-section">
            <div className="progress-info">
              <span>Progress: {course.progress}%</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
            <Button variant="primary" onClick={onStartCourse}>
              <Play size={20} />
              Continue Learning
            </Button>
          </div>
        ) : (
          <div className="enrollment-section">
            <div className="price">${course.price}</div>
            <Button variant="primary" onClick={onEnroll}>
              Enroll Now
            </Button>
          </div>
        )}
      </div>
      
      <div className="course-curriculum">
        <h3>Course Content</h3>
        <div className="lessons-list">
          {course.lessons.map((lesson, index) => (
            <div key={lesson.id} className={`lesson-item ${lesson.completed ? 'completed' : ''} ${lesson.locked ? 'locked' : ''}`}>
              <div className="lesson-number">{index + 1}</div>
              <div className="lesson-info">
                <h4>{lesson.title}</h4>
                <span className="lesson-duration">{lesson.duration}</span>
              </div>
              <div className="lesson-status">
                {lesson.completed ? (
                  <CheckCircle size={20} color="green" />
                ) : lesson.locked ? (
                  <Lock size={20} color="gray" />
                ) : (
                  <Play size={20} color="blue" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Course Player Component
const CoursePlayer: React.FC<{
  course: Course;
  currentLesson: string;
  onLessonSelect: (lessonId: string) => void;
  onLessonComplete: (lessonId: string) => void;
  onBackToCourse: () => void;
}> = ({ course, currentLesson, onLessonSelect, onLessonComplete, onBackToCourse }) => {
  const lesson = course.lessons.find(l => l.id === currentLesson);
  
  return (
    <div className="course-player">
      <div className="player-header">
        <Button variant="ghost" onClick={onBackToCourse}>
          <ChevronLeft size={20} />
          {course.title}
        </Button>
        <div className="course-progress">
          Progress: {course.progress}%
        </div>
      </div>
      
      <div className="player-content">
        <div className="video-player">
          <div className="video-placeholder">
            <Play size={64} />
            <h3>{lesson?.title}</h3>
            <p>Video content would play here</p>
            {lesson && !lesson.completed && (
              <Button 
                variant="primary" 
                onClick={() => onLessonComplete(lesson.id)}
              >
                Mark as Complete
              </Button>
            )}
          </div>
        </div>
        
        <div className="playlist-sidebar">
          <h3>Course Content</h3>
          <div className="lessons-playlist">
            {course.lessons.map((lessonItem, index) => (
              <div 
                key={lessonItem.id}
                className={`playlist-item ${lessonItem.id === currentLesson ? 'active' : ''} ${lessonItem.locked ? 'locked' : ''}`}
                onClick={() => onLessonSelect(lessonItem.id)}
              >
                <div className="playlist-number">{index + 1}</div>
                <div className="playlist-info">
                  <h4>{lessonItem.title}</h4>
                  <span>{lessonItem.duration}</span>
                </div>
                <div className="playlist-status">
                  {lessonItem.completed ? (
                    <CheckCircle size={16} color="green" />
                  ) : lessonItem.locked ? (
                    <Lock size={16} color="gray" />
                  ) : (
                    <Play size={16} color="blue" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TrainingLanding({
  onGetStarted,
  onBrowseCourses,
  onViewProgress
}: TrainingLandingProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('browse');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock courses data
  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'React Development Fundamentals',
      instructor: 'Sarah Johnson',
      description: 'Master the fundamentals of React including components, hooks, state management, and modern development practices.',
      duration: '12.5 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 15420,
      price: 89.99,
      thumbnail: '/api/placeholder/300/200',
      enrolled: true,
      progress: 65,
      lessons: [
        { id: 'lesson-1', title: 'Introduction to React', duration: '15 min', type: 'video', completed: true, locked: false },
        { id: 'lesson-2', title: 'Components and JSX', duration: '25 min', type: 'video', completed: true, locked: false },
        { id: 'lesson-3', title: 'State and Props', duration: '30 min', type: 'video', completed: false, locked: false },
        { id: 'lesson-4', title: 'Event Handling', duration: '20 min', type: 'video', completed: false, locked: true },
        { id: 'lesson-5', title: 'React Hooks', duration: '45 min', type: 'video', completed: false, locked: true },
      ]
    },
    {
      id: 'course-2',
      title: 'Advanced TypeScript Patterns',
      instructor: 'Mike Chen',
      description: 'Deep dive into advanced TypeScript concepts, design patterns, and best practices for enterprise applications.',
      duration: '18.5 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 8350,
      price: 129.99,
      thumbnail: '/api/placeholder/300/200',
      enrolled: false,
      lessons: []
    },
    {
      id: 'course-3',
      title: 'UI/UX Design Principles',
      instructor: 'Emily Rodriguez',
      description: 'Learn essential design principles, user experience methodologies, and create stunning user interfaces.',
      duration: '9.5 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 12100,
      price: 69.99,
      thumbnail: '/api/placeholder/300/200',
      enrolled: false,
      lessons: []
    },
    {
      id: 'course-4',
      title: 'Node.js Backend Development',
      instructor: 'David Park',
      description: 'Build scalable backend applications with Node.js, Express, databases, and API development.',
      duration: '16 hours',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 9870,
      price: 99.99,
      thumbnail: '/api/placeholder/300/200',
      enrolled: true,
      progress: 25,
      lessons: []
    }
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || true; // Simplified for demo
    return matchesSearch && matchesCategory;
  });

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setViewMode('course-detail');
  };

  const handleEnrollment = (course: Course) => {
    // In real app, this would make API call
    course.enrolled = true;
    course.progress = 0;
    setViewMode('course-player');
    setCurrentLesson(course.lessons[0]?.id || null);
  };

  const handleStartCourse = (course: Course) => {
    setViewMode('course-player');
    setCurrentLesson(course.lessons[0]?.id || null);
  };

  const handleLessonSelect = (lessonId: string) => {
    if (!selectedCourse) return;
    const lesson = selectedCourse.lessons.find(l => l.id === lessonId);
    if (lesson && !lesson.locked) {
      setCurrentLesson(lessonId);
    }
  };

  const handleLessonComplete = (lessonId: string) => {
    if (!selectedCourse) return;
    const lessonIndex = selectedCourse.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex !== -1) {
      selectedCourse.lessons[lessonIndex].completed = true;
      // Unlock next lesson
      if (lessonIndex + 1 < selectedCourse.lessons.length) {
        selectedCourse.lessons[lessonIndex + 1].locked = false;
      }
      // Update progress
      const completedLessons = selectedCourse.lessons.filter(l => l.completed).length;
      selectedCourse.progress = Math.round((completedLessons / selectedCourse.lessons.length) * 100);
    }
  };

  if (viewMode === 'course-player' && selectedCourse && currentLesson) {
    return <CoursePlayer 
      course={selectedCourse}
      currentLesson={currentLesson}
      onLessonSelect={handleLessonSelect}
      onLessonComplete={handleLessonComplete}
      onBackToCourse={() => setViewMode('course-detail')}
    />;
  }

  if (viewMode === 'course-detail' && selectedCourse) {
    return <CourseDetail 
      course={selectedCourse}
      onEnroll={() => handleEnrollment(selectedCourse)}
      onStartCourse={() => handleStartCourse(selectedCourse)}
      onBack={() => setViewMode('browse')}
    />;
  }

  return (
    <div className="training-platform">
      {/* Header */}
      <div className="platform-header">
        <h1>
          <GraduationCap size={32} />
          Learn & Grow
        </h1>
        <p>Discover courses to advance your career</p>
      </div>

      {/* Search and Filters */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* My Learning Section */}
      <div className="my-learning-section">
        <h2>Continue Learning</h2>
        <div className="enrolled-courses">
          {courses.filter(course => course.enrolled).map(course => (
            <Card key={course.id} className="enrolled-course-card" onClick={() => handleCourseSelect(course)}>
              <div className="course-thumbnail">
                <Play size={32} />
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>by {course.instructor}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="progress-text">{course.progress}% complete</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Courses */}
      <div className="courses-section">
        <h2>All Courses ({filteredCourses.length})</h2>
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <Card 
              key={course.id} 
              className="course-card"
              onClick={() => handleCourseSelect(course)}
            >
              <div className="course-thumbnail">
                <BookOpen size={32} />
                {course.enrolled && (
                  <div className="enrolled-badge">
                    <CheckCircle size={16} />
                    Enrolled
                  </div>
                )}
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="instructor">by {course.instructor}</p>
                <div className="course-meta">
                  <div className="rating">
                    <Star size={14} fill="gold" color="gold" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="students">
                    <Users size={14} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="duration">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <span className={`difficulty ${course.difficulty.toLowerCase()}`}>
                    {course.difficulty}
                  </span>
                  <span className="price">${course.price}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}