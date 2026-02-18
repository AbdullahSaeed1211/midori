CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clients table
CREATE TABLE clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  clerk_user_id TEXT UNIQUE,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'active', 'review', 'completed', 'on_hold')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project milestones
CREATE TABLE milestones (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  due_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  plan TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'past_due', 'cancelled', 'incomplete')),
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages/Communication log
CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  sender_id TEXT NOT NULL,
  sender_name TEXT,
  content TEXT NOT NULL,
  is_internal BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Files/Assets
CREATE TABLE files (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT,
  size INTEGER,
  uploaded_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activity log
CREATE TABLE activity_log (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  description TEXT,
  performed_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_projects_client_id ON projects(client_id);
CREATE INDEX idx_milestones_project_id ON milestones(project_id);
CREATE INDEX idx_subscriptions_client_id ON subscriptions(client_id);
CREATE INDEX idx_messages_project_id ON messages(project_id);
CREATE INDEX idx_files_project_id ON files(project_id);

-- Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;

-- Policies for clients (they can see their own data)
CREATE POLICY "Clients can view own data" ON clients
  FOR SELECT USING (clerk_user_id = auth.jwt()->>'sub');

CREATE POLICY "Clients can view own projects" ON projects
  FOR SELECT USING (client_id IN (
    SELECT id FROM clients WHERE clerk_user_id = auth.jwt()->>'sub'
  ));

CREATE POLICY "Clients can view own milestones" ON milestones
  FOR SELECT USING (project_id IN (
    SELECT p.id FROM projects p
    JOIN clients c ON p.client_id = c.id
    WHERE c.clerk_user_id = auth.jwt()->>'sub'
  ));

CREATE POLICY "Clients can view own subscriptions" ON subscriptions
  FOR SELECT USING (client_id IN (
    SELECT id FROM clients WHERE clerk_user_id = auth.jwt()->>'sub'
  ));

CREATE POLICY "Clients can view own messages" ON messages
  FOR SELECT USING (project_id IN (
    SELECT p.id FROM projects p
    JOIN clients c ON p.client_id = c.id
    WHERE c.clerk_user_id = auth.jwt()->>'sub'
  ));

CREATE POLICY "Clients can view own files" ON files
  FOR SELECT USING (project_id IN (
    SELECT p.id FROM projects p
    JOIN clients c ON p.client_id = c.id
    WHERE c.clerk_user_id = auth.jwt()->>'sub'
  ));

-- Service role can do everything (for API routes)
CREATE POLICY "Service role full access" ON clients FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON projects FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON milestones FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON subscriptions FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON messages FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON files FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON activity_log FOR ALL USING (auth.role() = 'service_role');
