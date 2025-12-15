-- Create roles table for Careers open roles management
CREATE TABLE IF NOT EXISTS roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  employment_type TEXT NOT NULL DEFAULT 'Full-time',
  location TEXT NOT NULL DEFAULT 'Remote',
  summary TEXT NOT NULL,
  description TEXT,
  apply_url TEXT,
  due_date DATE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

-- Read policies
CREATE POLICY "Public read active roles" ON roles
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Authenticated read all roles" ON roles
  FOR SELECT USING (auth.role() = 'authenticated');

-- Write policies
CREATE POLICY "Allow authenticated insert roles" ON roles
  FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND created_by = auth.uid());

CREATE POLICY "Allow author update roles" ON roles
  FOR UPDATE USING (auth.uid() = created_by);

CREATE POLICY "Allow author delete roles" ON roles
  FOR DELETE USING (auth.uid() = created_by);

-- Ensure the shared updated_at trigger function exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to keep updated_at fresh
CREATE TRIGGER update_roles_updated_at
  BEFORE UPDATE ON roles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_roles_active_created_at ON roles(is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_roles_created_by ON roles(created_by);
CREATE INDEX IF NOT EXISTS idx_roles_due_date ON roles(due_date ASC);
