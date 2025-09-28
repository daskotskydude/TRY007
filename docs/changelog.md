# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-09-28

### Added
- **Project Structure**: Complete Next.js App Router setup with TypeScript
- **Styling System**: Token-based CSS design system in `/styles/` folder
  - Design tokens for colors, spacing, typography, shadows
  - Component-specific CSS classes
  - Mobile-first responsive design
- **Component Library**: Reusable, prop-driven components
  - `Navbar` with pluggable slots (left, center, right, below)
  - `Sidebar` with sections and navigation items
  - `Button` with variants (primary, secondary, ghost) and sizes
  - `Card` with header/body/footer and variants
  - `StatsCard` for dashboard statistics
  - `Toast` component with useToast hook
- **Pages**: 
  - Homepage (`/`) with hero section, stats, and features
  - Admin Dashboard (`/admin`) with sidebar navigation and metrics
- **API Architecture**: Complete Controller → Service → Repository → Adapter pattern
  - Type definitions in `/types/api.ts`
  - Repository interfaces in `/repositories/interfaces.ts` 
  - InMemory adapters in `/adapters/inmemory.ts`
  - Business logic services in `/services/index.ts`
  - API routes: `/api/users`, `/api/projects`, `/api/dashboard/stats`
- **Documentation**:
  - `/docs/wiring_ids.md` - Complete UI ID → API → DB field mapping
  - `/docs/api_reference.md` - API endpoint documentation
  - `.github/copilot-instructions.md` - AI coding agent guidelines

### Architecture Decisions
- **Component-First**: Pages only compose components, never contain hardcoded UI
- **Token-Based Styling**: All styling comes from `/styles/` folder with CSS variables
- **Stable IDs**: Every interactive element has prefixed IDs (`nav-*`, `admin-*`, etc.)
- **Data Flow**: Components never fetch data; pages → services → repositories
- **Mobile-First**: All components responsive via CSS classes, not inline styles
- **Graceful Degradation**: Unfinished features show toast messages

### Technical Stack
- **Frontend**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Custom CSS with design tokens, no utility frameworks
- **Backend**: Next.js API routes with layered architecture
- **Data**: InMemory adapters (ready for Cloudflare D1 + R2 migration)

### Build Requirements
- Type checking: `tsc --noEmit`
- Code standards: `pnpm lint`