# UI Element ID → API Endpoint → Database Field Mapping

This document maps every interactive UI element to its corresponding API endpoint and planned database field.

## Homepage (`/`)

### Navigation Elements
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `nav-logo` | N/A | N/A | Logo link to homepage |
| `nav-home` | N/A | N/A | Navigation to homepage |
| `nav-admin` | N/A | N/A | Navigation to admin dashboard |
| `nav-notifications` | `/api/notifications` (planned) | `notifications.*` | Notification bell with dropdown |
| `nav-profile` | `/api/auth/profile` (planned) | `users.*` | Profile dropdown menu |

### Homepage Actions
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `home-get-started-btn` | N/A | N/A | Shows toast - feature not available |
| `home-learn-more-btn` | N/A | N/A | Shows toast - feature not available |

### Statistics Display
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `stats-users` | `/api/dashboard/stats` | `users.count` | Total active users |
| `stats-projects` | `/api/dashboard/stats` | `projects.count` | Total projects |
| `stats-tasks` | `/api/dashboard/stats` | `tasks.count` | Completed tasks |
| `stats-uptime` | `/api/dashboard/stats` | `system.uptime` | System uptime percentage |

### Feature Cards
| UI Element ID | API Endpoint | Database Field | Notes |
|---------------|--------------|----------------|-------|
| `feature-components` | N/A | N/A | Static feature description |
| `feature-responsive` | N/A | N/A | Static feature description |
| `feature-admin` | N/A | N/A | Static feature description |

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