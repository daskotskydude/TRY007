// In-Memory adapter implementations for repositories
import { UserRepository, ProjectRepository } from '../repositories/interfaces';
import { User, CreateUserDto, UpdateUserDto } from '../types/api';
import { Project, CreateProjectDto, UpdateProjectDto } from '../types/api';
import { PaginationParams, PaginatedResponse } from '../types/api';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [
    {
      id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      email: 'john.doe@example.com',
      name: 'John Doe',
      role: 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  async list(params?: PaginationParams): Promise<PaginatedResponse<User>> {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const items = this.users.slice(startIndex, endIndex);
    
    return {
      items,
      pagination: {
        page,
        limit,
        total: this.users.length,
        totalPages: Math.ceil(this.users.length / limit)
      }
    };
  }

  async getById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role || 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.users.push(user);
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    return this.users[userIndex];
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    return this.users.length < initialLength;
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }
}

export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      name: 'Marketing Campaign Q4',
      description: 'End-of-year marketing initiatives',
      status: 'active',
      ownerId: '1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      status: 'completed',
      ownerId: '2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  async list(params?: PaginationParams): Promise<PaginatedResponse<Project>> {
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const items = this.projects.slice(startIndex, endIndex);
    
    return {
      items,
      pagination: {
        page,
        limit,
        total: this.projects.length,
        totalPages: Math.ceil(this.projects.length / limit)
      }
    };
  }

  async getById(id: string): Promise<Project | null> {
    return this.projects.find(project => project.id === id) || null;
  }

  async create(data: CreateProjectDto): Promise<Project> {
    const project: Project = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      status: data.status || 'active',
      ownerId: data.ownerId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.projects.push(project);
    return project;
  }

  async update(id: string, data: UpdateProjectDto): Promise<Project | null> {
    const projectIndex = this.projects.findIndex(project => project.id === id);
    if (projectIndex === -1) return null;
    
    this.projects[projectIndex] = {
      ...this.projects[projectIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    return this.projects[projectIndex];
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.projects.length;
    this.projects = this.projects.filter(project => project.id !== id);
    return this.projects.length < initialLength;
  }

  async getByOwnerId(ownerId: string): Promise<Project[]> {
    return this.projects.filter(project => project.ownerId === ownerId);
  }
}