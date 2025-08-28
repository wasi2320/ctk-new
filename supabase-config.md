# Supabase Configuration

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## How to Get These Values

1. **Go to your Supabase project dashboard**
2. **Navigate to Settings > API**
3. **Copy the following values:**
   - Project URL (for `NEXT_PUBLIC_SUPABASE_URL`)
   - anon/public key (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - service_role key (for `SUPABASE_SERVICE_ROLE_KEY`)

## Example

```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Security Notes

- Never commit `.env.local` to version control
- The `SUPABASE_SERVICE_ROLE_KEY` has admin privileges - keep it secure
- The `NEXT_PUBLIC_` variables are safe to expose in the browser
