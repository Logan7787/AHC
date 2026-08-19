# Ayusya Health Care Web Application

A modern, animated, and production-grade React single page application (SPA) built for **Ayusya Health Care** using React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

---

## Technical Stack
- **Frontend Framework**: React 18 + Vite (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (smooth scroll reveals & transitions)
- **Routing**: React Router v6 (with clean browser history routing)
- **Backend-as-a-Service**: Supabase (PostgreSQL for services, teams, applications & submissions; Storage for resumes)
- **Forms**: `react-hook-form` + `zod` schema validation

---

## Project Structure

```
AHC/
  ├── .env.example
  ├── tailwind.config.js
  ├── postcss.config.js
  ├── index.html
  ├── supabase/
  │     ├── schema.sql           # Database tables and RLS policies
  │     └── seed.sql             # Default services, clinical advisory team, & partners
  └── src/
        ├── App.tsx              # App root & context provider mounts
        ├── main.tsx
        ├── index.css            # Tailwind directives & marquee animations
        ├── router.tsx           # Navigation paths & Layout wrapper
        ├── lib/
        │     ├── supabaseClient.ts
        │     └── queries/       # Fetching/writing helpers for DB & Storage
        └── components/
              ├── layout/        # Header, Footer, WhatsApp Button, Booking Drawer
              ├── home/          # Hero, Doctor Intro, Services, Spotlights, Marquee
              ├── contact/       # Contact Form logic
              └── shared/        # AnimatedSection, Counter, VideoLightbox, Toast alerts
```

---

## Local Setup & Installation

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure Supabase Database
1. Go to [Supabase Console](https://supabase.com) and create a new project.
2. In the project dashboard, go to the **SQL Editor**.
3. Create a new query, copy the contents of [supabase/schema.sql](file:///e:/VINODHAN/software%20project/AHC/supabase/schema.sql) and run it to set up tables and Row Level Security (RLS) policies.
4. Open another query, copy the contents of [supabase/seed.sql](file:///e:/VINODHAN/software%20project/AHC/supabase/seed.sql) and run it to seed initial content (services, clinical associates, reviews).

### 3. Configure Supabase Storage Buckets
In your Supabase project under **Storage**, create the following buckets:
- `resumes` - **Private** bucket (signed URLs only)
- `service-images` - **Public** bucket
- `team-photos` - **Public** bucket
- `partner-logos` - **Public** bucket
- `site-assets` - **Public** bucket

### 4. Configure Environment Variables
1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your Supabase Project credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-project-anon-key
   ```

---

## Development & Production Build

### Run Local Development Server
```bash
npm run dev
```

### Compile Production Build
```bash
npm run build
```
The static files will build into the `dist/` folder, ready for deployment to host targets such as Vercel, Netlify, or AWS Amplify.
