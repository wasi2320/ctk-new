-- Add slug column to blogs table
-- This migration adds a slug field for SEO-friendly URLs

-- Add the slug column
ALTER TABLE blogs
ADD COLUMN slug TEXT;

-- Create an index for better performance on slug lookups
CREATE INDEX idx_blogs_slug ON blogs(slug);

-- Add a unique constraint to ensure no duplicate slugs
-- Note: This might fail if there are existing duplicate slugs, so we'll make it conditional
DO $$
BEGIN
    -- First, let's check if there are any duplicate slugs
    -- If there are, we'll need to handle them before adding the constraint

    -- Add unique constraint for slug (allowing NULL values)
    ALTER TABLE blogs
    ADD CONSTRAINT blogs_slug_unique UNIQUE (slug);

    EXCEPTION
        WHEN duplicate_object THEN
            RAISE NOTICE 'Unique constraint already exists';
        WHEN others THEN
            RAISE NOTICE 'Could not add unique constraint. There might be duplicate slugs.';
END $$;

-- Update existing blogs with auto-generated slugs (optional)
-- Uncomment and modify the following if you want to generate slugs for existing blogs:

-- UPDATE blogs
-- SET slug = LOWER(
--     REPLACE(
--         REPLACE(
--             REPLACE(title, ' ', '-'),
--             '[^a-zA-Z0-9\-]', ''
--         ),
--         '--+', '-'
--     )
-- )
-- WHERE slug IS NULL OR slug = '';

-- Create a function to automatically generate slugs
CREATE OR REPLACE FUNCTION generate_blog_slug(input_title TEXT)
RETURNS TEXT AS $$
DECLARE
    base_slug TEXT;
    final_slug TEXT;
    counter INTEGER := 1;
BEGIN
    -- Generate base slug from title
    base_slug := LOWER(
        REGEXP_REPLACE(
            REGEXP_REPLACE(input_title, '[^a-zA-Z0-9\s\-]', '', 'g'),
            '[\s\-]+', '-', 'g'
        )
    );

    -- Remove leading/trailing hyphens
    base_slug := TRIM(BOTH '-' FROM base_slug);

    -- If base_slug is empty, use a default
    IF base_slug = '' THEN
        base_slug := 'blog-post';
    END IF;

    -- Check if slug already exists and find unique version
    final_slug := base_slug;

    WHILE EXISTS (SELECT 1 FROM blogs WHERE slug = final_slug) LOOP
        counter := counter + 1;
        final_slug := base_slug || '-' || counter::TEXT;
    END LOOP;

    RETURN final_slug;
END;
$$ LANGUAGE plpgsql;

-- Optional: Create a trigger to auto-generate slugs for new blogs
-- Uncomment the following if you want automatic slug generation:

-- CREATE OR REPLACE FUNCTION set_blog_slug()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     IF NEW.slug IS NULL OR NEW.slug = '' THEN
--         NEW.slug := generate_blog_slug(NEW.title);
--     END IF;
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER trigger_set_blog_slug
--     BEFORE INSERT ON blogs
--     FOR EACH ROW
--     EXECUTE FUNCTION set_blog_slug();

-- Verify the migration
-- You can run this query to check the results:
-- SELECT id, title, slug FROM blogs LIMIT 10;
