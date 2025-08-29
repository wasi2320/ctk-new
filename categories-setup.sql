-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add category_id column to blogs table if it doesn't exist
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS category_id UUID REFERENCES categories(id);

-- Enable Row Level Security for categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to read categories
CREATE POLICY "Allow public read access to categories" ON categories
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert categories
CREATE POLICY "Allow authenticated insert to categories" ON categories
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update categories
CREATE POLICY "Allow authenticated update to categories" ON categories
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete categories
CREATE POLICY "Allow authenticated delete to categories" ON categories
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp for categories
CREATE OR REPLACE FUNCTION update_categories_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at for categories
CREATE TRIGGER update_categories_updated_at 
  BEFORE UPDATE ON categories 
  FOR EACH ROW 
  EXECUTE FUNCTION update_categories_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);
CREATE INDEX IF NOT EXISTS idx_blogs_category_id ON blogs(category_id);

-- Insert some sample categories
INSERT INTO categories (name, description) VALUES
  ('Technology', 'Articles about technology, programming, and software development'),
  ('Business', 'Business insights, strategies, and industry trends'),
  ('Design', 'UI/UX design, graphic design, and creative topics'),
  ('Marketing', 'Digital marketing, SEO, and growth strategies'),
  ('Tutorials', 'Step-by-step guides and how-to articles')
ON CONFLICT (name) DO NOTHING;
