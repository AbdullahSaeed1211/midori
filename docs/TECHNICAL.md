# Kiiro.cx - Technical Documentation

## Project Overview

**Kiiro.cx** is a conversion-focused web design agency website built with:
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS with custom theme
- **Database**: PostgreSQL via Prisma 7
- **Auth**: Supabase Auth
- **Payments**: Stripe
- **Email**: Resend
- **Deployment**: Vercel

---

## Architecture

### Directory Structure

```
app/
├── (auth)/              # Auth routes (login, signup, password reset)
│   ├── login/
│   ├── signup/
│   ├── forgot-password/
│   └── update-password/
├── api/                 # API routes
│   ├── contact/
│   ├── testimonials/
│   └── stripe/
├── portal/              # Client portal (protected)
│   ├── page.tsx         # Main portal page
│   ├── portal-content.tsx
│   └── loading.tsx
├── admin/               # Admin dashboard (protected, admin only)
├── blog/                # 26 SEO-optimized blog posts
├── hosting/            # Hosting plans & pricing
├── actions/            # Server Actions
│   ├── admin.ts
│   ├── integrations.ts
│   └── publishing.ts
└── components/
    ├── portal/         # Portal components
    │   ├── integrations-view.tsx
    │   ├── ai-studio-view.tsx
    │   └── posts-view.tsx
    └── ui/             # Shadcn UI components
```

### Database Schema (Prisma)

**Models:**
- `Client` - User client record linked to Supabase auth
- `Project` - Client projects
- `Subscription` - Stripe subscriptions
- `Integration` - API keys (encrypted)
- `Post` - Blog posts for publishing

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_STARTER=
STRIPE_PRICE_PRO=
STRIPE_PRICE_PREMIUM=

# Database
DATABASE_URL=

# Encryption (32-byte hex key)
ENCRYPTION_KEY=

# Email
RESEND_API_KEY=
BUSINESS_EMAIL=

# Analytics
GA_MEASUREMENT_ID=

# Admin
ADMIN_EMAIL=
```

---

## Key Features

### 1. Authentication (Supabase)

- Login/Signup with email & password
- Password reset flow
- Protected routes via middleware
- Admin access control via `ADMIN_EMAIL` env

### 2. Client Portal

**Sidebar Navigation:**
- Dashboard
- Projects
- Posts (Blog management)
- Schedule
- Messages
- Integrations (AI API keys)
- AI Studio
- Settings

**Features:**
- CRUD for blog posts
- Social publishing (Medium, LinkedIn, Instagram, Facebook)
- AI content generation with multiple providers
- Project tracking
- Subscription management

### 3. Admin Panel

- View all clients
- Manage client tool access
- View all projects
- View subscriptions & MRR

### 4. AI Integrations

**Supported Providers:**
- OpenAI (GPT-4)
- Google Gemini
- Minimax
- Zhipu GLM
- Custom/OpenRouter

### 5. SEO

- 26 blog posts with metadata
- JSON-LD structured data
- sitemap.xml
- robots.txt
- llms.txt (AI search optimization)
- OpenGraph images
- Google Analytics 4

---

## Server Actions

### `app/actions/integrations.ts`

```typescript
// Save API key
saveIntegration(provider: string, key: string, config?: object)

// Delete API key
deleteIntegration(provider: string)

// Get configured provider names
getConfiguredProviders(): string[]

// Get all integrations with details
getIntegrations(): Integration[]

// Generate AI content
generateAiContent(provider: string, prompt: string): string
```

### `app/actions/publishing.ts`

```typescript
// Create post
savePost(title: string, content: string, status: string, scheduledAt?: Date, destinations?: string[]): Post

// Get all posts
getPosts(): Post[]

// Get single post
getPost(postId: string): Post

// Update post
updatePost(postId: string, title: string, content: string, status: string): Post

// Delete post
deletePost(postId: string)

// Publish to social platforms
publishToMedium(postId: string): string
publishToLinkedIn(postId: string): string
publishToInstagram(postId: string): string
publishToFacebook(postId: string): string
```

### `app/actions/admin.ts`

```typescript
// Update client tool access
updateClientAccess(clientId: string, tools: string[])
```

---

## API Routes

### `POST /api/contact`
- Sends contact form via Resend
- Rate limited (5 req/min)

### `POST /api/testimonials`
- Submits testimonials
- Rate limited (5 req/min)

### `POST /api/stripe/checkout`
- Creates Stripe checkout session
- Requires authentication

### `POST /api/stripe/webhook`
- Handles Stripe webhooks

---

## Adding New Features

### 1. Add New Portal Tab

1. Add to `SIDEBAR_ITEMS` in `portal-content.tsx`
2. Add conditional rendering for the tab
3. Create or reuse component

### 2. Add New Integration

1. Add provider to `PROVIDERS` in `integrations-view.tsx`
2. Add case in `generateAiContent()` in `integrations.ts`
3. Add API call function

### 3. Add New Admin Feature

1. Add to admin sidebar in `admin-content.tsx`
2. Add Prisma query in `page.tsx`
3. Add server action if needed

---

## Common Issues

### Build Failures

1. **Prisma not generating**: Ensure `postinstall` script runs `prisma generate`
2. **Missing env vars**: Check Vercel project settings

### Runtime Errors

1. **Encryption key missing**: Add `ENCRYPTION_KEY` to env
2. **Auth not working**: Check Supabase URL and keys

---

## Deployment

```bash
# Build locally
pnpm build

# Deploy to Vercel
git push
```

Make sure to add all required environment variables in Vercel project settings.

---

## Version History

- **v1.0** - Initial release with Next.js 16, auth, portal, admin, blogs, SEO
- **v1.1** - Added posts management, social publishing, fixed empty state CTAs
- **v1.2** - Full CRUD for integrations (add/disconnect), complete admin features, production verification
