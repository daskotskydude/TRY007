# UI Element ID → API Endpoint → Database Field Mapping

This document maps every interactive UI element to its corresponding API endpoint and planned database field.

## Homepage (`/`)

### Navigation Elements
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `nav-logo` | N/A | N/A | Logo link to homepage |
| `nav-admin` | N/A | N/A | Navigation to admin dashboard |
| `nav-notifications` | `/api/notifications` (planned) | `notifications.*` | Notification bell with dropdown |
| `nav-profile` | `/api/auth/profile` (planned) | `users.*` | Profile dropdown menu |

### Tab System
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `main-tabs` | N/A | N/A | Main tab system container |
| `tab-home` | `/api/dashboard/stats` (planned) | `dashboard_stats.*` | **Home tab (default)** with dashboard overview |
| `tab-training` | `/api/training` (planned) | `training_courses.*` | Training tab |
| `tab-routines` | `/api/routines` (planned) | `routines.*` | Routines tab |
| `tab-recognitions` | `/api/recognitions` (planned) | `recognitions.*` | Recognitions tab |
| `tab-resources` | `/api/resources` (planned) | `resources.*` | Resources tab |

### Home Tab Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `btn-home-action-0` | `/api/training/schedule` (POST, planned) | `training_schedules.*` | Schedule new training sessions |
| `btn-home-action-1` | `/api/dashboard/analytics` (planned) | `analytics_data.*` | View performance analytics |
| `btn-home-action-2` | `/api/users/manage` (planned) | `users.*` | User administration panel |
| `btn-home-action-3` | `/api/resources/library` (planned) | `resources.*` | Access training materials |
| `btn-home-action-4` | `/api/system/settings` (planned) | `system_settings.*` | Configure application |
| `btn-home-action-5` | `/api/recognitions/center` (planned) | `recognitions.*` | Award achievements center |

### Training Tab Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `training-get-started-btn` | `/api/training/enroll` (planned) | `training_enrollments.*` | Start training program |
| `training-browse-courses-btn` | `/api/training/courses` (planned) | `training_courses.*` | Browse course catalog |
| `training-view-progress-btn` | `/api/training/progress` (planned) | `training_progress.*` | View learning progress |

### Routines Tab Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `routines-create-btn` | `/api/routines` (POST, planned) | `routines.*` | Create new routine |
| `routines-templates-btn` | `/api/routines/templates` (planned) | `routine_templates.*` | Browse routine templates |
| `routines-schedule-btn` | `/api/routines/schedule` (planned) | `routine_schedules.*` | View routine schedule |

### Recognitions Tab Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `recognition-nominate-btn` | `/api/recognitions` (POST, planned) | `recognitions.*` | Nominate someone |
| `recognition-awards-btn` | `/api/recognitions/awards` (planned) | `awards.*` | View awards |
| `recognition-achievements-btn` | `/api/recognitions/my-achievements` (planned) | `user_achievements.*` | View personal achievements |

### Resources Tab Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `resources-browse-btn` | `/api/resources` (planned) | `resources.*` | Browse resource library |
| `resources-upload-btn` | `/api/resources` (POST, planned) | `resources.*` | Upload new resource |
| `resources-favorites-btn` | `/api/resources/favorites` (planned) | `user_favorites.*` | View favorite resources |

### Feature Cards (Training Tab)
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `training-courses` | `/api/training/courses` (planned) | `training_courses.*` | Course library feature |
| `training-progress` | `/api/training/progress` (planned) | `training_progress.*` | Progress tracking feature |
| `training-certificates` | `/api/training/certificates` (planned) | `certificates.*` | Certification feature |
| `training-personalized` | `/api/training/recommendations` (planned) | `user_preferences.*` | Personalized learning |
| `training-mobile` | N/A | N/A | Mobile learning feature |
| `training-analytics` | `/api/training/analytics` (planned) | `training_analytics.*` | Learning analytics |

### Feature Cards (Routines Tab)
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `routines-automation` | `/api/routines/automation` (planned) | `automation_rules.*` | Smart automation feature |
| `routines-templates` | `/api/routines/templates` (planned) | `routine_templates.*` | Routine templates |
| `routines-scheduling` | `/api/routines/scheduling` (planned) | `routine_schedules.*` | Flexible scheduling |
| `routines-monitoring` | `/api/routines/monitoring` (planned) | `routine_metrics.*` | Performance monitoring |
| `routines-collaboration` | `/api/routines/sharing` (planned) | `routine_sharing.*` | Team collaboration |
| `routines-integration` | `/api/routines/integrations` (planned) | `system_integrations.*` | System integration |

### Feature Cards (Recognitions Tab)
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `recognition-peer` | `/api/recognitions/peer` (planned) | `peer_recognitions.*` | Peer recognition |
| `recognition-achievements` | `/api/recognitions/achievements` (planned) | `achievements.*` | Achievement tracking |
| `recognition-leaderboards` | `/api/recognitions/leaderboards` (planned) | `leaderboards.*` | Recognition leaderboards |
| `recognition-rewards` | `/api/recognitions/rewards` (planned) | `reward_systems.*` | Reward systems |
| `recognition-analytics` | `/api/recognitions/analytics` (planned) | `recognition_analytics.*` | Recognition analytics |
| `recognition-custom` | `/api/recognitions/custom` (planned) | `custom_awards.*` | Custom awards |

### Feature Cards (Resources Tab)
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `resources-library` | `/api/resources/library` (planned) | `resources.*` | Digital library |
| `resources-search` | `/api/resources/search` (planned) | N/A | Smart search feature |
| `resources-collaboration` | `/api/resources/collaboration` (planned) | `resource_comments.*` | Collaborative sharing |
| `resources-templates` | `/api/resources/templates` (planned) | `resource_templates.*` | Template library |
| `resources-mobile` | N/A | N/A | Mobile access feature |
| `resources-analytics` | `/api/resources/analytics` (planned) | `resource_analytics.*` | Usage analytics |

## Admin Dashboard (`/admin`)

### Navigation Elements
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `nav-admin-logo` | N/A | N/A | Admin logo link |
| `nav-admin-notifications` | `/api/notifications` (planned) | `notifications.*` | Admin notification bell |
| `nav-admin-profile` | `/api/auth/profile` (planned) | `users.*` | Admin profile dropdown |

### Sidebar Navigation
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `sidebar-overview` | `/api/dashboard/stats` | Multiple tables | Dashboard overview |
| `sidebar-analytics` | `/api/analytics` (planned) | `analytics.*` | Analytics data |
| `sidebar-users` | `/api/users` | `users.*` | User management |
| `sidebar-projects` | `/api/projects` | `projects.*` | Project management |
| `sidebar-settings` | `/api/settings` (planned) | `settings.*` | System settings |

### Admin Statistics
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `admin-stats-users` | `/api/dashboard/stats` | `users.count` | Total users |
| `admin-stats-active` | `/api/dashboard/stats` | `users.active_count` | Active users today |
| `admin-stats-revenue` | `/api/dashboard/stats` | `billing.monthly_revenue` | Monthly revenue |
| `admin-stats-growth` | `/api/dashboard/stats` | `analytics.growth_rate` | Growth rate |

### Quick Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `admin-add-user-btn` | `/api/users` (POST) | `users.*` | Create new user |
| `admin-create-project-btn` | `/api/projects` (POST) | `projects.*` | Create new project |
| `admin-view-reports-btn` | `/api/reports` (planned) | `reports.*` | Generate reports |
| `admin-export-data-btn` | `/api/export` (planned) | Multiple tables | Data export |

### Activity Cards
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `admin-quick-actions` | N/A | N/A | Container for action buttons |
| `admin-recent-activity` | `/api/activity` (planned) | `activity_logs.*` | Recent system activity |

## API Endpoints

### Implemented
- `GET /api/users` → User list with pagination
- `GET /api/projects` → Project list with pagination  
- `GET /api/dashboard/stats` → Dashboard statistics

### Planned
- `POST /api/auth/login` → User authentication
- `GET /api/auth/profile` → User profile data
- `GET /api/notifications` → User notifications
- `PUT /api/notifications/:id/read` → Mark notification as read
- `PUT /api/notifications/mark-all-read` → Mark all notifications as read
- `POST /api/users` → Create new user
- `PUT /api/users/:id` → Update user
- `DELETE /api/users/:id` → Delete user
- `POST /api/projects` → Create new project
- `PUT /api/projects/:id` → Update project
- `DELETE /api/projects/:id` → Delete project
- `GET /api/analytics` → Analytics data
- `GET /api/settings` → System settings
- `GET /api/reports` → Generate reports
- `GET /api/export` → Export data
- `GET /api/activity` → Recent activity logs

## Database Schema (Planned)

### Users Table
- `id` (Primary Key)
- `email` (Unique)
- `name`
- `role` ('admin' | 'user')
- `password_hash`
- `created_at`
- `updated_at`

### Projects Table
- `id` (Primary Key)
- `name`
- `description`
- `status` ('active' | 'inactive' | 'completed')
- `owner_id` (Foreign Key → users.id)
- `created_at`
- `updated_at`

### Notifications Table (Planned)
- `id` (Primary Key)
- `user_id` (Foreign Key → users.id)
- `title`
- `message`
- `type` ('info' | 'warning' | 'success' | 'error')
- `is_read` (Boolean)
- `created_at`
- `updated_at`

### Activity Logs Table (Planned)
- `id` (Primary Key)
- `user_id` (Foreign Key → users.id)
- `action`
- `resource_type`
- `resource_id`
- `details` (JSON)
- `created_at`