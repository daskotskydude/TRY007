// API Route: GET /api/users
import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse, PaginatedResponse, User } from '../../../types/api';
import { UserService } from '../../../services';
import { InMemoryUserRepository } from '../../../adapters/inmemory';

const userService = new UserService(new InMemoryUserRepository());

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const sort = searchParams.get('sort') || 'name';
    const order = (searchParams.get('order') as 'asc' | 'desc') || 'asc';

    const result = await userService.getUsers({ page, limit, sort, order });

    const response: ApiResponse<PaginatedResponse<User>> = {
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