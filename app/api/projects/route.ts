// API Route: GET /api/projects
import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse, PaginatedResponse, Project } from '../../../types/api';
import { ProjectService } from '../../../services';
import { InMemoryProjectRepository, InMemoryUserRepository } from '../../../adapters/inmemory';

const projectService = new ProjectService(
  new InMemoryProjectRepository(),
  new InMemoryUserRepository()
);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const result = await projectService.getProjects({ page, limit });

    const response: ApiResponse<PaginatedResponse<Project>> = {
      success: true,
      data: result
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
    return NextResponse.json(response, { status: 500 });
  }
}