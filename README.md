# TRY007 - Modern Component-First Application

A modern Next.js application with beautiful UI/UX, admin dashboard, and component-first architecture.

## Features

- 🎨 **Modern Single-Color Theme** - Clean, professional blue-based design
- 🧩 **Component-First Architecture** - Reusable, configurable components
- 📱 **Mobile-First Responsive** - Works beautifully on all devices
- 🏗️ **Layered Backend Architecture** - Controller → Service → Repository → Adapter
- 📊 **Admin Dashboard** - Comprehensive management interface
- 🎯 **Token-Based Styling** - Consistent design system with CSS variables

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Validation

```bash
# Type checking
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build
```

## Project Structure

```
/styles/           # Design tokens + component styles
/components/       # Reusable UI components
/app/             # Next.js pages (orchestration only)
/api/             # API routes with full backend stack
/services/        # Business logic layer
/repositories/    # Data access interfaces
/adapters/        # Storage implementations
/types/           # TypeScript definitions
/docs/            # Project documentation
```

## Architecture Principles

- **Pages = Orchestration Shells** - No hardcoded UI in pages
- **Component Reusability** - Build once, use everywhere
- **Token-Based Styling** - All styling comes from `/styles/`
- **Stable IDs** - Every interactive element has prefixed IDs
- **Data Flow Control** - Components never fetch data directly
- **Mobile-First** - Responsive design via CSS classes

## API Endpoints

- `GET /api/users` - User management
- `GET /api/projects` - Project management  
- `GET /api/dashboard/stats` - Dashboard statistics

## Documentation

- [API Reference](./docs/api_reference.md)
- [UI Element Mapping](./docs/wiring_ids.md)
- [Changelog](./docs/changelog.md)
- [AI Coding Guidelines](./.github/copilot-instructions.md)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with design tokens
- **Architecture**: Layered backend (Controller/Service/Repository/Adapter)
- **Storage**: InMemory (ready for Cloudflare D1 + R2)