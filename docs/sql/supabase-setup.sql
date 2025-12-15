-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  poster_url TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to read blogs
CREATE POLICY "Allow public read access" ON blogs
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert blogs
CREATE POLICY "Allow authenticated insert" ON blogs
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Create policy to allow authors to update their own blogs
CREATE POLICY "Allow author update" ON blogs
  FOR UPDATE USING (auth.uid() = author_id);

-- Create policy to allow authors to delete their own blogs
CREATE POLICY "Allow author delete" ON blogs
  FOR DELETE USING (auth.uid() = author_id);

-- Create storage bucket for blog posters
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-posters', 'blog-posters', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for blog posters
CREATE POLICY "Allow public read access to blog posters" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-posters');

-- Create storage policy for authenticated users to upload blog posters
CREATE POLICY "Allow authenticated upload to blog posters" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'blog-posters' 
    AND auth.role() = 'authenticated'
  );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blogs_updated_at 
  BEFORE UPDATE ON blogs 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON blogs(author_id);
