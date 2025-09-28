# Changelog

All notable changes to this project will be documented in this file.

## [0.1.3] - 2025-09-28

### Added
- **Udemy-like Learning Platform** (Training Tab):
  - Complete course browsing system with search and filtering
  - Course detail modals with curriculum preview
  - Interactive course player with lesson navigation
  - Course enrollment and progress tracking
  - Professional course cards with pricing and ratings
  - Responsive grid layout for course display
- **Multi-Step Course Creator** (Admin Dashboard):
  - 5-step course creation workflow
  - Step 1: Course landing page setup (title, subtitle, description, category, level)
  - Step 2: Curriculum builder with sections and lessons
  - Step 3: Requirements, outcomes, and target audience
  - Step 4: Pricing and promotional setup
  - Step 5: Course preview and publishing
  - Progress indicator with step validation
  - Comprehensive form validation and user guidance
- **Enhanced CSS Styling System**:
  - New `training-platform.css` with complete Udemy-like styling
  - Course creator styles in enhanced `create-admin.css`
  - Professional course cards, player interface, progress bars
  - Mobile-responsive design throughout

### Enhanced
- **CreateTraining Component**:
  - Transformed from basic form to comprehensive multi-step course builder
  - TypeScript interfaces for course data structure
  - Dynamic curriculum building with sections and lessons
  - Array input management for requirements and outcomes
- **TrainingLanding Component**:
  - Complete rewrite as Udemy-like course platform
  - Course browsing, search, and enrollment functionality
  - Interactive course player with lesson management
  - Progress tracking and course completion system

## [0.1.2] - 2025-09-28

### Added
- **Lucide Icon Library**:
  - Installed `lucide-react` for modern, consistent icons
  - Replaced all emoji icons throughout the application
  - Professional icon set for navigation, tabs, and content areas
- **Home Dashboard Tab**:
  - New `HomeLanding` component as default tab
  - Dashboard overview with key metrics and statistics
  - Quick actions panel with 6 action cards
  - Stats grid showing user metrics and trends
- **Tab System Navigation**:
  - `TabSystem` component with animated tab switching and icon support
  - Five main application tabs: Home, Training, Routines, Recognitions, Resources
  - Tab content rendered in navbar below slot for consistent positioning
  - Lucide icons for all tab buttons
- **Admin Dashboard Enhancement**:
  - Moved `CreateAdmin` component to admin dashboard sidebar (Content Creation section)
  - New admin sidebar section for content creation and management
  - Conditional rendering between dashboard overview and creation interface
  - Four specialized creation interfaces: Training, Routines, Recognition, Resources
  - Comprehensive forms with validation and preview sections
  - Quick action cards for common creation tasks
  - Stats preview grids showing creation impact metrics
- **Landing Page Components**:
  - `HomeLanding` - Dashboard overview with stats and quick actions
  - `CreateAdmin` - Nested admin interface for content creation with sub-tabs
  - `CreateTraining` - Course and program creation with form validation
  - `CreateRoutines` - Routine and workflow creation interface
  - `CreateRecognition` - Award, badge, and certificate creation tools
  - `CreateResources` - Document and resource library management
  - `TrainingLanding` - Professional training programs and course catalog
  - `RoutinesLanding` - Workflow automation and routine templates
  - `RecognitionsLanding` - Employee recognition and awards system
  - `ResourcesLanding` - Knowledge repository and resource library
- **Enhanced Content Architecture**:
  - Hero sections with gradient backgrounds for each tab
  - Feature grids showcasing key capabilities
  - Call-to-action sections with multiple action buttons
  - Mobile-responsive landing page layouts
- **Component Styling**:
  - `/styles/components/tabs.css` - Tab system with animations and responsive design
  - Professional landing page styles with consistent design tokens

## [0.1.1] - 2025-09-28

### Added
- **Enhanced Navigation Components**:
  - `Logo` component with modern gradient icon and responsive text
  - `NotificationBell` with dropdown, badge counter, and mock notifications
  - `ProfileDropdown` with user avatar, role display, and menu items
- **Advanced UI Features**:
  - Notification system with unread badges and timestamps
  - Profile management with avatar initials fallback
  - Dropdown animations and outside-click handling
  - Mobile-responsive navigation improvements
- **Component Styling**:
  - `/styles/components/logo.css` - Logo with gradient icon
  - `/styles/components/notification-bell.css` - Notification dropdown with animations
  - `/styles/components/profile-dropdown.css` - Profile menu with user info
- **Enhanced User Experience**:
  - Mock notification data with different types (info, warning, success, error)
  - Admin-specific notifications and profile menu
  - Proper accessibility with ARIA labels and keyboard support
- **Icon System Enhancement**:
  - Updated `NotificationBell` to use Lucide icons (Bell, Check, X, CheckCheck)
  - Updated `ProfileDropdown` to use Lucide icons (User, ChevronDown)
  - Enhanced landing page hero sections with corresponding Lucide icons
  - Profile menu items now use consistent Lucide icons (User, Settings, HelpCircle, LogOut)
  - Tab icons replaced: Home, GraduationCap, Settings, Award, BookOpen

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