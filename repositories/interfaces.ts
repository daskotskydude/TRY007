// Repository interfaces for data access layer
import { User, CreateUserDto, UpdateUserDto } from '../types/api';
import { Project, CreateProjectDto, UpdateProjectDto } from '../types/api';
import { PaginationParams, PaginatedResponse } from '../types/api';

export interface UserRepository {
  list(params?: PaginationParams): Promise<PaginatedResponse<User>>;
  getById(id: string): Promise<User | null>;
  create(data: CreateUserDto): Promise<User>;
  update(id: string, data: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<boolean>;
  getByEmail(email: string): Promise<User | null>;
}

export interface ProjectRepository {
  list(params?: PaginationParams): Promise<PaginatedResponse<Project>>;
  getById(id: string): Promise<Project | null>;
  create(data: CreateProjectDto): Promise<Project>;
  update(id: string, data: UpdateProjectDto): Promise<Project | null>;
  delete(id: string): Promise<boolean>;
  getByOwnerId(ownerId: string): Promise<Project[]>;
}