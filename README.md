# CTK New - Modern Business Solutions

A comprehensive business solutions website built with Next.js 14, featuring a blog management system, category organization, and modern UI/UX design.

## 🚀 Features

- **Blog Management System** - Create, edit, delete, and categorize blog posts
- **Admin Panel** - Secure admin interface with tabbed navigation
- **Category Management** - Organize content with flexible categories
- **Image Management** - Supabase storage integration for media
- **SEO Optimized** - Sitemap generation and meta tags
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **TypeScript** - Full type safety and better development experience

## 📁 Project Structure

```
ctk-new/
├── app/                          # Next.js 14 App Router
├── components/                   # Shared UI components
├── docs/                        # 📚 Comprehensive documentation
│   ├── sql/                     # Database schemas and setup
│   ├── setup/                   # Configuration guides
│   └── api/                     # API documentation
├── lib/                         # Utility libraries
├── public/                      # Static assets
└── ...
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Markdown**: @uiw/react-md-editor
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ctk-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Set up database**
   - Run the SQL scripts in `docs/sql/` in your Supabase SQL editor
   - See `docs/setup/` for detailed setup instructions

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- **[Main Documentation](docs/README.md)** - Complete project overview
- **[Project Structure](docs/PROJECT_STRUCTURE.md)** - Detailed file organization
- **[API Documentation](docs/api/README.md)** - All API endpoints
- **[Setup Guides](docs/setup/)** - Configuration and setup instructions
- **[SQL Scripts](docs/sql/)** - Database setup and schemas

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Database Setup

1. Create a new Supabase project
2. Run the SQL scripts from `docs/sql/`
3. Configure storage buckets for blog images
4. Set up Row Level Security (RLS) policies

## 🎯 Key Features

### Blog Management
- **Create/Edit/Delete** blog posts with rich markdown editor
- **Category Organization** - Flexible category system
- **Image Upload** - Drag & drop image support
- **Auto-excerpt Generation** - Smart content previews

### Admin Panel
- **Tabbed Interface** - Separate create and manage views
- **Category Management** - Add, edit, delete categories
- **Bulk Operations** - Manage multiple blogs efficiently
- **Secure Access** - Authentication required

### Public Interface
- **Category Filtering** - Filter blogs by category
- **Responsive Design** - Mobile-optimized layout
- **SEO Friendly** - Meta tags and structured data
- **Fast Loading** - Next.js Image optimization

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoint System** - Tailwind CSS responsive utilities
- **Touch Friendly** - Optimized for touch interactions
- **Performance** - Optimized images and lazy loading

## 🔒 Security Features

- **Row Level Security** - Database-level access control
- **Authentication** - Secure admin access
- **Input Validation** - Sanitized user inputs
- **API Protection** - Secure endpoint access

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify** - Static site hosting
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

- **Database Connection**: Check Supabase credentials and network access
- **Image Upload**: Verify storage bucket permissions
- **Build Errors**: Ensure all dependencies are installed
- **Type Errors**: Run `npm run type-check` for TypeScript issues

### Getting Help

1. Check the [documentation](docs/README.md)
2. Review [setup guides](docs/setup/)
3. Search existing issues
4. Create a new issue with detailed information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Supabase** - Backend-as-a-Service platform
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## 📞 Support

- **Documentation**: [docs/README.md](docs/README.md)
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

---

**Built with ❤️ using Next.js 14 and modern web technologies**

*Last updated: ${new Date().toLocaleDateString()}*
