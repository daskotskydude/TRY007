// Business logic layer - Services
import { UserRepository, ProjectRepository } from '../repositories/interfaces';
import { User, CreateUserDto, UpdateUserDto } from '../types/api';
import { Project, CreateProjectDto, UpdateProjectDto } from '../types/api';
import { PaginationParams, PaginatedResponse, DashboardStats } from '../types/api';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers(params?: PaginationParams): Promise<PaginatedResponse<User>> {
    return this.userRepository.list(params);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.getById(id);
  }

  async createUser(data: CreateUserDto): Promise<User> {
    // Validate email uniqueness
    const existingUser = await this.userRepository.getByEmail(data.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    return this.userRepository.create(data);
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new Error('User not found');
    }

    // Validate email uniqueness if email is being updated
    if (data.email && data.email !== user.email) {
      const existingUser = await this.userRepository.getByEmail(data.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
    }

    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new Error('User not found');
    }

    return this.userRepository.delete(id);
  }
}

export class ProjectService {
  constructor(
    private projectRepository: ProjectRepository,
    private userRepository: UserRepository
  ) {}

  async getProjects(params?: PaginationParams): Promise<PaginatedResponse<Project>> {
    return this.projectRepository.list(params);
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.projectRepository.getById(id);
  }

  async createProject(data: CreateProjectDto): Promise<Project> {
    // Validate owner exists
    const owner = await this.userRepository.getById(data.ownerId);
    if (!owner) {
      throw new Error('Project owner not found');
    }

    return this.projectRepository.create(data);
  }

  async updateProject(id: string, data: UpdateProjectDto): Promise<Project | null> {
    const project = await this.projectRepository.getById(id);
    if (!project) {
      throw new Error('Project not found');
    }

    // Validate owner exists if ownerId is being updated
    if (data.ownerId) {
      const owner = await this.userRepository.getById(data.ownerId);
      if (!owner) {
        throw new Error('Project owner not found');
      }
    }

    return this.projectRepository.update(id, data);
  }

  async deleteProject(id: string): Promise<boolean> {
    const project = await this.projectRepository.getById(id);
    if (!project) {
      throw new Error('Project not found');
    }

    return this.projectRepository.delete(id);
  }

  async getProjectsByOwner(ownerId: string): Promise<Project[]> {
    // Validate owner exists
    const owner = await this.userRepository.getById(ownerId);
    if (!owner) {
      throw new Error('Owner not found');
    }

    return this.projectRepository.getByOwnerId(ownerId);
  }
}

export class DashboardService {
  constructor(
    private userRepository: UserRepository,
    private projectRepository: ProjectRepository
  ) {}

  async getDashboardStats(): Promise<DashboardStats> {
    const usersResponse = await this.userRepository.list();
    const projectsResponse = await this.projectRepository.list();
    
    const totalUsers = usersResponse.pagination.total;
    const totalProjects = projectsResponse.pagination.total;
    const completedProjects = projectsResponse.items.filter(p => p.status === 'completed').length;

    return {
      totalUsers,
      activeUsers: Math.floor(totalUsers * 0.7), // Mock: 70% active
      totalProjects,
      completedTasks: completedProjects * 15, // Mock: 15 tasks per project
      uptime: '99.9%',
      monthlyRevenue: '$12,345',
      growthRate: '+15%'
    };
  }
}