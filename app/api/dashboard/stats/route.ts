// API Route: GET /api/dashboard/stats
import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse, DashboardStats } from '../../../../types/api';
import { DashboardService } from '../../../../services';
import { InMemoryUserRepository, InMemoryProjectRepository } from '../../../../adapters/inmemory';

const dashboardService = new DashboardService(
  new InMemoryUserRepository(),
  new InMemoryProjectRepository()
);

export async function GET(request: NextRequest) {
  try {
    const stats = await dashboardService.getDashboardStats();

    const response: ApiResponse<DashboardStats> = {
      success: true,
      data: stats
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