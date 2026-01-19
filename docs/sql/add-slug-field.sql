-- Add slug field to blogs table if it doesn't exist
ALTER TABLE blogs
ADD COLUMN IF NOT EXISTS slug TEXT;

-- Create unique index on slug for better performance and uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(
    regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
    '\s+', '-', 'g'
  ));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Trigger to automatically generate slug if not provided
CREATE OR REPLACE FUNCTION set_blog_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_slug(NEW.title);

    -- Ensure uniqueness by appending number if slug exists
    WHILE EXISTS (SELECT 1 FROM blogs WHERE slug = NEW.slug AND id != NEW.id) LOOP
      NEW.slug := NEW.slug || '-' || floor(random() * 1000)::text;
    END LOOP;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS set_blog_slug_trigger ON blogs;
CREATE TRIGGER set_blog_slug_trigger
  BEFORE INSERT OR UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION set_blog_slug();

-- Update existing blogs without slugs
UPDATE blogs
SET slug = generate_slug(title)
WHERE slug IS NULL OR slug = '';

-- Add comment explaining the slug field
COMMENT ON COLUMN blogs.slug IS 'URL-friendly slug generated from title, used for SEO-friendly URLs';
