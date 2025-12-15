-- Add slug field to your existing blogs table (from supabase-setup.sql)
-- Run these commands in your Supabase SQL Editor

-- Step 1: Add the slug column to the existing blogs table
ALTER TABLE blogs ADD COLUMN slug TEXT;

-- Step 2: Add index for better performance (matches your existing index pattern)
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Step 3: Add unique constraint (optional but recommended)
ALTER TABLE blogs ADD CONSTRAINT blogs_slug_unique UNIQUE (slug);

-- Step 4: Generate slugs for existing blogs using the same pattern as your setup
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

-- Step 5: Handle any duplicate slugs that might have been created
-- (Run this if the unique constraint fails due to duplicates)
UPDATE blogs
SET slug = slug || '-' || id::text
WHERE slug IN (
    SELECT slug
    FROM blogs
    GROUP BY slug
    HAVING COUNT(*) > 1
)
AND id NOT IN (
    SELECT MIN(id)
    FROM blogs
    GROUP BY slug
    HAVING COUNT(*) > 1
);

-- Verification queries:
-- Check that all blogs have slugs: SELECT COUNT(*) FROM blogs WHERE slug IS NULL;
-- Check for duplicate slugs: SELECT slug, COUNT(*) FROM blogs GROUP BY slug HAVING COUNT(*) > 1;
-- Sample of results: SELECT id, title, slug FROM blogs LIMIT 5;
