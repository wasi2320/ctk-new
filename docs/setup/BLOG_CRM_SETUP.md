# Blog CRM Setup Instructions

This document outlines how to set up the blog CRM system for your Code to Kloud website.

## Prerequisites

- A Supabase account and project
- Node.js and npm installed
- Your existing Next.js project

## Setup Steps

### 1. Install Dependencies

The required packages have already been installed:

- `@supabase/supabase-js` - Supabase client
- `@supabase/ssr` - Server-side rendering support
- `@uiw/react-md-editor` - Markdown editor
- `react-markdown` - Markdown rendering

### 2. Configure Supabase

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy your project URL and anon key
4. Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase-setup.sql`
4. Run the script to create:
   - `blogs` table with proper schema (including excerpt field)
   - Storage bucket for blog posters
   - Row Level Security policies
   - Indexes for performance

### 4. Create Admin User

1. Go to Authentication > Users in your Supabase dashboard
2. Click "Add User"
3. Enter your admin email and password
4. This user will be the only one who can access the admin panel

### 5. Configure Storage

1. Go to Storage in your Supabase dashboard
2. Ensure the `blog-posters` bucket exists
3. Set the bucket to public for read access
4. Verify the storage policies are in place

## Usage

### Admin Access

- Navigate to `/admin` in your browser
- Login with your admin credentials
- Use the form to upload blog posts with:
  - **Title**: Your blog post title
  - **Poster Image**: Featured image for the blog
  - **Markdown Content**: Write your blog content
  - **Auto-generated Excerpt**: Automatically created from first 3 lines of content

### Public Blog Display

- Blogs are automatically displayed at `/blogs`
- Individual blog posts are accessible at `/blogs/[id]`
- The system matches your existing design with red accent colors

## Features

- **Secure Admin Panel**: Only authenticated users can access
- **Markdown Editor**: Rich text editing with preview
- **Image Upload**: Automatic poster image handling
- **Content Images**: Upload images directly into your markdown content
- **Auto-generated Excerpts**: No need to write excerpts manually - they're generated from the first 3 lines of content
- **Responsive Design**: Matches your existing site design
- **SEO Friendly**: Proper meta tags and structure
- **Performance Optimized**: Efficient database queries and caching

## Image Upload Features

### Poster Images

- Upload featured images for blog listings
- Automatic storage in Supabase
- Preview before publishing

### Content Images

- Upload images directly into your markdown content
- Images are stored in the same storage bucket
- Automatic markdown link generation
- Images appear properly formatted in published blogs

## Security

- Row Level Security enabled on all tables
- Only authenticated users can create/edit blogs
- Public read access for blog content
- Secure file upload with validation

## Customization

The system is designed to integrate seamlessly with your existing design:

- Uses your red accent color (`#dc2626`)
- Follows your existing component patterns
- Responsive design matching your site
- Consistent typography and spacing

## Troubleshooting

### Common Issues

1. **Authentication Errors**: Ensure your admin user exists in Supabase
2. **Image Upload Fails**: Check storage bucket permissions and policies
3. **Database Connection**: Verify environment variables are correct
4. **Markdown Editor Issues**: Ensure all dependencies are installed

### Support

If you encounter issues:

1. Check the browser console for errors
2. Verify Supabase configuration
3. Ensure all environment variables are set
4. Check that the database schema is properly created

## File Structure

```
app/
├── (routes)/
│   ├── admin/
│   │   ├── page.tsx          # Main admin page
│   │   ├── LoginForm.tsx     # Login component
│   │   └── BlogUploadForm.tsx # Blog upload form with auto-excerpt
│   └── blogs/
│       ├── page.tsx          # Blog listing page
│       └── [id]/
│           └── page.tsx      # Individual blog page
├── api/
│   └── blogs/
│       └── route.ts          # Blog API endpoints
└── lib/
    └── supabase.ts           # Supabase configuration
```

## Key Features

- **No Manual Excerpts**: The system automatically generates excerpts from your blog content
- **Smart Preview**: Shows first 3 non-empty lines of your markdown content
- **Character Limit**: Automatically truncates to ~150 characters for clean display
- **Real-time Preview**: See your excerpt as you type in the markdown editor

The system is now ready to use! Your admin can upload blogs through `/admin`, and visitors can read them at `/blogs`. The excerpt generation happens automatically, so you just focus on writing great content!
