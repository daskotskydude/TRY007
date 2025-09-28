// API Types and DTOs
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  email: string;
  name: string;
  role?: 'admin' | 'user';
}

export interface UpdateUserDto {
  email?: string;
  name?: string;
  role?: 'admin' | 'user';
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectDto {
  name: string;
  description: string;
  status?: 'active' | 'inactive' | 'completed';
  ownerId: string;
}

export interface UpdateProjectDto {
  name?: string;
  description?: string;
  status?: 'active' | 'inactive' | 'completed';
  ownerId?: string;
}

// Stats Types
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedTasks: number;
  uptime: string;
  monthlyRevenue: string;
  growthRate: string;
}