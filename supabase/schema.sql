-- Supabase Database Schema for Ayusya Health Care Website

-- 1. Services Offered
create table services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  short_description text,
  full_description text,
  hero_image_url text,
  icon text,
  display_order int default 0,
  created_at timestamptz default now()
);

-- 2. Team / Clinical Associates
create table team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  qualification text,
  specialty text,
  role_tag text default 'Clinical Associate',
  photo_url text,
  bio text,
  detail_slug text,
  featured_on_home boolean default false,
  display_order int default 0,
  created_at timestamptz default now()
);

-- 3. Video Testimonials
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  patient_name text,
  location text,
  youtube_id text not null,
  thumbnail_url text,
  display_order int default 0,
  created_at timestamptz default now()
);

-- 4. Partner / Clinical Associate Logos
create table partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  website_url text,
  display_order int default 0
);

-- 5. Career Postings
create table job_openings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text,
  employment_type text,
  description text,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- 6. Form Submissions - Contact Us
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  location text,
  service_interested uuid references services(id) on delete set null,
  message text,
  created_at timestamptz default now()
);

-- 7. Form Submissions - Annual Membership
create table membership_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  address text,
  plan_tier text,
  preferred_start_date date,
  created_at timestamptz default now()
);

-- 8. Form Submissions - Referral Partner
create table referral_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text,
  phone text not null,
  email text,
  relationship_type text,
  message text,
  created_at timestamptz default now()
);

-- 9. Form Submissions - Job Applications
create table job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references job_openings(id) on delete set null,
  name text not null,
  email text not null,
  phone text not null,
  resume_url text,
  cover_note text,
  created_at timestamptz default now()
);

-- =========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================

-- Enable RLS on all tables
alter table services enable row level security;
alter table team_members enable row level security;
alter table testimonials enable row level security;
alter table partners enable row level security;
alter table job_openings enable row level security;
alter table contact_submissions enable row level security;
alter table membership_submissions enable row level security;
alter table referral_submissions enable row level security;
alter table job_applications enable row level security;

-- 1. Services: Public Read-Only
create policy "Enable select for anonymous users" on services
  for select to anon using (true);

-- 2. Team Members: Public Read-Only
create policy "Enable select for anonymous users" on team_members
  for select to anon using (true);

-- 3. Testimonials: Public Read-Only
create policy "Enable select for anonymous users" on testimonials
  for select to anon using (true);

-- 4. Partners: Public Read-Only
create policy "Enable select for anonymous users" on partners
  for select to anon using (true);

-- 5. Job Openings: Public Read-Only
create policy "Enable select for anonymous users" on job_openings
  for select to anon using (true);

-- 6. Contact Submissions: Public Insert-Only
create policy "Enable insert for anonymous users" on contact_submissions
  for insert to anon with check (true);

-- 7. Membership Submissions: Public Insert-Only
create policy "Enable insert for anonymous users" on membership_submissions
  for insert to anon with check (true);

-- 8. Referral Submissions: Public Insert-Only
create policy "Enable insert for anonymous users" on referral_submissions
  for insert to anon with check (true);

-- 9. Job Applications: Public Insert-Only
create policy "Enable insert for anonymous users" on job_applications
  for insert to anon with check (true);
