# BridgeWay International

Premium multi-page Next.js application for an international student agency.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** (v4)
- **Framer Motion** – animations
- **Clerk** – authentication
- **Supabase** – backend database

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.local.example` to `.env.local` and add your keys:

```bash
cp .env.local.example .env.local
```

- **Clerk**: [clerk.com](https://clerk.com) – create an application and add keys
- **Supabase**: [supabase.com](https://supabase.com) – create a project and add URL + anon key

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── page.tsx              # Landing (hero, bento grid, footer)
├── layout.tsx            # Root layout + ClerkProvider
├── programs/
│   ├── page.tsx          # Program tracks (Undergrad, Bachelor's, Master's)
│   ├── undergraduate/
│   ├── bachelors/
│   └── masters/
├── dashboard/
│   └── page.tsx          # Clerk-protected student portal
├── sign-in/[[...sign-in]]/
├── sign-up/[[...sign-up]]/
└── user-profile/[[...user-profile]]/

components/
├── Navbar.tsx            # Glassmorphism nav
└── Footer.tsx
```

## Design

- **Bento grid** – services section
- **Glassmorphism** – cards and navigation
- **Framer Motion** – page transitions and scroll reveals
