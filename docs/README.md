# CTK New - Project Documentation

Welcome to the CTK New project documentation. This document provides an overview of the project structure and links to all relevant documentation.

## 📁 Project Structure

```
ctk-new/
├── app/                          # Next.js application
│   ├── (routes)/                # App router pages
│   ├── api/                     # API routes
│   ├── components/              # React components
│   └── ...
├── docs/                        # Documentation
│   ├── sql/                     # Database schemas and setup
│   ├── setup/                   # Configuration and setup guides
│   └── api/                     # API documentation
├── lib/                         # Utility libraries
├── public/                      # Static assets
└── ...
```

## 🗄️ Database Documentation

### SQL Files

- **[supabase-setup.sql](sql/supabase-setup.sql)** - Complete database schema setup
- **[categories-setup.sql](sql/categories-setup.sql)** - Categories table and blog relationships

### Database Schema Overview

- **blogs** - Blog posts with categories, content, and metadata
- **categories** - Blog categories for organization
- **users** - User authentication and profiles
- **Row Level Security (RLS)** - Secure data access policies

## ⚙️ Setup & Configuration

### Setup Guides

- **[supabase-config.md](setup/supabase-config.md)** - Supabase configuration guide
- **[BLOG_CRM_SETUP.md](setup/BLOG_CRM_SETUP.md)** - Blog CRM system setup instructions

### Environment Variables

Required environment variables for the project:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install` or `yarn install`
3. **Set up environment variables** (see setup guides above)
4. **Run database setup scripts** (see SQL documentation)
5. **Start development server**: `npm run dev`

## 🔧 Key Features

- **Blog Management System** - Create, edit, delete blog posts
- **Category Management** - Organize blogs with categories
- **Admin Panel** - Secure admin interface for content management
- **Image Management** - Supabase storage integration
- **SEO Optimized** - Sitemap generation and meta tags
- **Responsive Design** - Mobile-first approach

## 📚 API Documentation

### Blog Endpoints

- `GET /api/blogs` - Fetch all blogs
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs` - Update existing blog
- `DELETE /api/blogs` - Delete blog

### Category Endpoints

- `GET /api/categories` - Fetch all categories
- `POST /api/categories` - Create new category
- `PUT /api/categories` - Update existing category
- `DELETE /api/categories` - Delete category

## 🛠️ Development

### Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Markdown**: @uiw/react-md-editor

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation as needed
4. Use conventional commit messages

## 🐛 Troubleshooting

Common issues and solutions:

- **Database connection errors**: Check Supabase credentials
- **Image upload failures**: Verify storage bucket permissions
- **Build errors**: Ensure all dependencies are installed

## 📞 Support

For questions or issues:

1. Check this documentation first
2. Review the setup guides
3. Check existing issues
4. Create a new issue with detailed information

---

_Last updated: ${new Date().toLocaleDateString()}_
