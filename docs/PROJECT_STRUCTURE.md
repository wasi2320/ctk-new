# Project Structure Documentation

This document provides a comprehensive overview of the CTK New project structure, explaining the purpose and organization of each directory and file.

## 🏗️ Root Directory Structure

```
ctk-new/
├── app/                          # Next.js 14 App Router
├── components/                   # Shared UI components
├── docs/                        # Project documentation
├── lib/                         # Utility libraries and configurations
├── public/                      # Static assets
├── utils/                       # Utility functions
├── .env.local                   # Environment variables (not in git)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project overview
```

## 📱 App Directory (`app/`)

### Core Files

- **`layout.tsx`** - Root layout component with global styles and metadata
- **`page.tsx`** - Homepage component
- **`globals.css`** - Global CSS styles and Tailwind imports
- **`not-found.tsx`** - 404 error page

### Routes (`app/(routes)/`)

- **`aboutus/`** - About us page
- **`admin/`** - Admin panel for blog management
  - `page.tsx` - Main admin page with tabs
  - `BlogUploadForm.tsx` - Blog creation/editing form
  - `BlogList.tsx` - Blog management list
  - `CategoryModal.tsx` - Category management modal
  - `LoginForm.tsx` - Admin authentication
- **`blogs/`** - Public blog listing and individual posts
  - `page.tsx` - Blog listing with category filtering
  - `[id]/page.tsx` - Individual blog post view
- **Service Pages** - Various service offerings (AI, AWS, DevOps, etc.)

### API Routes (`app/api/`)

- **`blogs/route.ts`** - Blog CRUD operations
- **`categories/route.ts`** - Category CRUD operations
- **`chat/route.ts`** - Chat functionality (if implemented)

### Components (`app/components/`)

- **`global/`** - Global components (logo, navigation)
- **`icons/`** - Icon components
- **`layout/`** - Layout components (header, footer)
- **`sections/`** - Page-specific section components
- **`ChatFloat.tsx`** - Floating chat widget
- **`ChatModal.tsx`** - Chat modal component
- **`ChatToggle.tsx`** - Chat toggle button
- **`HeroSection.tsx`** - Hero section component
- **`Loader.tsx`** - Loading spinner component
- **`ScrollToTop.tsx`** - Scroll to top button

### Hooks (`app/hooks/`)

- **`useScrollAnimation.ts`** - Scroll animation hook
- **`useScrollToTop.ts`** - Scroll to top functionality

### Styles (`app/styles/`)

- **`InfiniteScrollBar.css`** - Infinite scroll bar styles

## 🧩 Components Directory (`components/`)

### UI Components (`components/ui/`)

- **`badge.tsx`** - Badge component
- **`card.tsx`** - Card component
- **`Toast.tsx`** - Toast notification component

## 📚 Documentation (`docs/`)

### SQL Documentation (`docs/sql/`)

- **`supabase-setup.sql`** - Complete database schema setup
- **`categories-setup.sql`** - Categories table and relationships

### Setup Documentation (`docs/setup/`)

- **`supabase-config.md`** - Supabase configuration guide
- **`BLOG_CRM_SETUP.md`** - Blog CRM system setup

### API Documentation (`docs/api/`)

- **`README.md`** - Comprehensive API endpoint documentation

### General Documentation

- **`README.md`** - Main documentation index
- **`PROJECT_STRUCTURE.md`** - This file

## 🔧 Libraries (`lib/`)

- **`supabase.ts`** - Supabase client configuration
- **`utils.ts`** - Utility functions

## 🌐 Public Assets (`public/`)

### Images (`public/Images/`)

- Company logos and branding
- Service-related images
- Blog post images

### Icons (`public/svgs/`)

- SVG icons for various services and features

### Fonts (`public/Fonts/`)

- Custom font files (ClashGrotesk, Nunito)

### Email Templates (`public/email/`)

- Email template images and assets

### Service Images (`public/services/`)

- Service-specific illustrations and images

## 📋 Configuration Files

### Next.js (`next.config.ts`)

- Image optimization settings
- Supabase domain allowlist
- Build configuration

### Tailwind (`tailwind.config.ts`)

- Color palette
- Font families
- Custom utilities

### TypeScript (`tsconfig.json`)

- Compiler options
- Path mappings
- Strict type checking

### ESLint (`eslint.config.mjs`)

- Code quality rules
- TypeScript support
- Next.js specific rules

## 🔐 Environment Variables

Required environment variables (`.env.local`):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📦 Package Management

- **`package.json`** - Dependencies and scripts
- **`package-lock.json`** - Locked dependency versions
- **`yarn.lock`** - Yarn lock file (if using Yarn)

## 🚀 Scripts

Available npm/yarn scripts:

- **`dev`** - Start development server
- **`build`** - Build for production
- **`start`** - Start production server
- **`lint`** - Run ESLint
- **`type-check`** - Run TypeScript type checking

## 📁 File Naming Conventions

- **Components**: PascalCase (e.g., `BlogUploadForm.tsx`)
- **Pages**: kebab-case (e.g., `about-us/page.tsx`)
- **API Routes**: kebab-case (e.g., `blog-posts/route.ts`)
- **Utilities**: camelCase (e.g., `useScrollAnimation.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## 🔄 Data Flow

1. **User Input** → React Components
2. **API Calls** → Next.js API Routes
3. **Database Operations** → Supabase
4. **State Management** → React useState/useEffect
5. **UI Updates** → Component Re-renders

## 🎯 Key Features by Directory

- **`app/admin/`** - Blog management system
- **`app/blogs/`** - Public blog display
- **`app/api/`** - Backend API endpoints
- **`components/ui/`** - Reusable UI components
- **`docs/`** - Project documentation and guides

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints
- Responsive images with Next.js Image component
- Touch-friendly interface elements

## 🔒 Security Features

- Row Level Security (RLS) in Supabase
- Authentication required for admin operations
- Input validation and sanitization
- Secure API endpoints

---

_This structure is designed for scalability and maintainability. Each directory has a specific purpose and follows Next.js 14 best practices._
