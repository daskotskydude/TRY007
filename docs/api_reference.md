# API Reference

Base URL: `/api`

All API endpoints return responses in the following format:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

## Authentication

**Note**: Authentication endpoints are planned but not yet implemented.

### POST /auth/login (Planned)
Login user and return authentication token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "jwt-token-here",
    "user": {
      "id": "1",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    }
  }
}
```

## Users

### GET /users
Get paginated list of users.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `sort` (optional): Sort field (default: "name")
- `order` (optional): Sort order "asc" | "desc" (default: "asc")

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "1",
        "email": "admin@example.com",
        "name": "Admin User",
        "role": "admin",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 2,
      "totalPages": 1
    }
  }
}
```

### POST /users (Planned)
Create a new user.

**Request Body:**
```json
{
  "email": "newuser@example.com",
  "name": "New User",
  "role": "user"
}
```

### GET /users/:id (Planned)
Get user by ID.

### PUT /users/:id (Planned)
Update user by ID.

### DELETE /users/:id (Planned)
Delete user by ID.

## Projects

### GET /projects
Get paginated list of projects.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "1",
        "name": "Marketing Campaign Q4",
        "description": "End-of-year marketing initiatives",
        "status": "active",
        "ownerId": "1",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 2,
      "totalPages": 1
    }
  }
}
```

### POST /projects (Planned)
Create a new project.

### GET /projects/:id (Planned)
Get project by ID.

### PUT /projects/:id (Planned)
Update project by ID.

### DELETE /projects/:id (Planned)
Delete project by ID.

## Dashboard

### GET /dashboard/stats
Get dashboard statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 1234,
    "activeUsers": 892,
    "totalProjects": 56,
    "completedTasks": 789,
    "uptime": "99.9%",
    "monthlyRevenue": "$12,345",
    "growthRate": "+15%"
  }
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized 
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

Error Response Format:
```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

## Rate Limiting

**Note**: Rate limiting is planned but not yet implemented.

## Data Types

### User
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}
```

### Project
```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}
```

### Pagination Response
```typescript
interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```