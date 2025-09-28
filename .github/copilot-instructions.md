# 🤖 AI Coding Agent Instructions

## Project Architecture

This is a **Next.js App Router** project following a **component-first architecture**:

- **Pages are orchestration shells only** - they compose components and pass props, never contain hardcoded UI
- **Everything visible is a reusable component** - navbar, tabs, sidebar, cards, toasts, loaders, etc.
- **Frontend and backend built in parallel** - when creating UI features, scaffold matching `/api` endpoints simultaneously

## Critical File Structure

```
/styles/           # ALL styling lives here - design tokens + component styles
  tokens.css       # Color, spacing, typography variables (:root definitions)
  components/      # Component-specific CSS classes
/components/       # Reusable, prop-driven UI components
/app/             # Next.js App Router pages (orchestration only)
/api/             # Backend API routes with placeholder JSON
/docs/            # Required documentation (see below)
```

## Styling System (MANDATORY)

- **No utility classes or inline styles** - all classes must resolve from `/styles/`
- **Design tokens control everything** - colors, spacing, typography in `/styles/tokens.css`
- **Semantic class names only** - components use meaningful CSS classes, not utilities
- **Token-based approach**: `var(--color-primary)`, `var(--spacing-md)`, etc.

```css
/* Example: styles/tokens.css */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
}

/* Example: styles/components/card.css */
.card {
  background-color: var(--color-card-bg);
  padding: var(--spacing-md);
}
```

## Component Contracts

- **Props for all content/configuration** - no magic values or hardcoded content
- **Stable, prefixed IDs required** - `nav-*`, `form-*`, `btn-*` for all interactive elements
- **Events bubble up via callbacks** - components never fetch data themselves
- **Mobile-first responsive** - all components must work on mobile (flag if impossible)

## Navigation Architecture

- **Navbar uses fixed positioning** with pluggable slots: `left`, `center`, `right`, `below`
- **Tabs integrate INSIDE navbar** (not separate bar) - use the `below` slot
- **Future additions via props/slots** - never rewrite existing navigation structure

## API Architecture & Data Flow

**Strict layered architecture**: Controller → Service → Repository → Adapter

```
/api/               # Controllers (HTTP request/response only)
/services/          # Business logic layer  
/repositories/      # Data access interfaces (list, getById, create, update, delete)
/adapters/          # Storage implementations (InMemory → Cloudflare D1 + R2)
/types/             # Typed request/response DTOs
```

**Data Flow Rules**:
- **Components never fetch data** - pages call services, services call repositories
- **Controllers are thin** - validate input, call service, return response
- **Services contain business logic** - validation, transformations, orchestration
- **Repositories are interfaces** - abstract storage operations
- **Adapters implement repositories** - start with InMemory, migrate to D1/R2

**API Standards**:
- All endpoints under `/api` with REST JSON
- Use typed DTOs from `/types` for requests/responses
- Document every `UI ID → API endpoint → DB field` in `/docs/wiring_ids.md`

## Development Workflow

1. **Create feature components first** with props for all configuration
2. **Add matching CSS classes** in `/styles/components/`
3. **Scaffold full backend stack** - controller → service → repository → adapter
4. **Define typed DTOs** in `/types` for API contracts
5. **Compose in pages** - pages only orchestrate, never define UI
6. **Document complete data flow** in `/docs/wiring_ids.md`

## Unfinished Features

- Show **reusable toast/alert component** with message "This feature is not available yet"
- Never leave broken buttons or dead interactions

## Documentation Requirements (CRITICAL)

Always maintain these files:

- `/docs/wiring_ids.md` - Map: `UI Element ID → API Endpoint → Database Field`
- `/docs/api_reference.md` - Endpoint documentation
- `/docs/changelog.md` - Track all changes

## Naming Conventions

- **camelCase**: variables, functions
- **snake_case**: database fields  
- **kebab-case**: API endpoints
- **Prefixed IDs**: `nav-home-btn`, `form-login-email`, etc.

## Git Workflow

**MANDATORY**: End every completed chat/task with this exact format (copy-paste ready, summary only, no commands):

```
Modified files:
• [file list with brief descriptions]

Created files:
• [file list with brief descriptions]

Changes summary:
- [implementation bullet points]
- [build/validation status]
```

## Build Validation

Always validate changes with:
```bash
tsc --noEmit    # Type checking
pnpm lint       # Code standards
```

## Quality Checklist

Before submitting any code:
- [ ] Pages only compose components (no hardcoded UI)
- [ ] All styling comes from `/styles/` (removing it leaves clean scaffold)
- [ ] Full API stack: controller → service → repository → adapter
- [ ] Typed DTOs in `/types` for all API contracts
- [ ] All IDs documented in `/docs/wiring_ids.md`
- [ ] Mobile responsive via CSS classes (not inline)
- [ ] No data fetching in components (pages → services → repositories)
- [ ] Events bubble up through callbacks
- [ ] Unfinished features show graceful toast messages
- [ ] `tsc --noEmit` and `pnpm lint` pass

## Key Principles

- **Component reusability over speed** - build once, use everywhere
- **Parallel frontend/backend development** - scaffold both simultaneously  
- **Documentation is non-negotiable** - always update docs
- **Mobile support is mandatory** - flag impossible cases explicitly