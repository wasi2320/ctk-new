-- Simple migration to add slug column to blogs table
-- Run this in your Supabase SQL Editor

-- Step 1: Add the slug column
ALTER TABLE blogs ADD COLUMN slug TEXT;

-- Step 2: Create an index for better performance
CREATE INDEX idx_blogs_slug ON blogs(slug);

-- Step 3: Add unique constraint (optional, but recommended)
ALTER TABLE blogs ADD CONSTRAINT blogs_slug_unique UNIQUE (slug);

-- That's it! Your blogs table now has a slug column.

-- Optional: Generate slugs for existing blogs
-- You can run this separately after the above migration:

/*
UPDATE blogs
SET slug = LOWER(
    REPLACE(
        REPLACE(
            REPLACE(title, ' ', '-'),
            '[^a-zA-Z0-9\-]', ''
        ),
        '--+', '-'
    )
)
WHERE slug IS NULL OR slug = '';
*/
