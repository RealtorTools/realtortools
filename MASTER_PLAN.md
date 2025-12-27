# RealtorTools Master Plan

**Last Updated:** December 27, 2025
**Status:** All 3 products live and operational

---

## Executive Summary

RealtorTools is an AI-powered suite of SaaS products for real estate professionals. The suite consists of three independent products, each with its own domain, codebase, and subscription model.

### Product Portfolio

| Product | Domain | Description | Status |
|---------|--------|-------------|--------|
| **CMAForge** | [cmaforge.com](https://cmaforge.com) | AI Comparative Market Analysis | Live |
| **ListingReels** | [listingreels.net](https://listingreels.net) | AI Property Video Generation | Live |
| **ListingPhoto** | [listingphoto.net](https://listingphoto.net) | AI Photo Enhancement | Live |

### Quick Links

| Product | Landing | App | API |
|---------|---------|-----|-----|
| CMAForge | [cmaforge.com](https://cmaforge.com) | [cmaforge.app](https://cmaforge.app) | [api.cmaforge.app](https://api.cmaforge.app) |
| ListingReels | [listingreels.net](https://listingreels.net) | [app.listingreels.net](https://app.listingreels.net) | [api.listingreels.net](https://api.listingreels.net) |
| ListingPhoto | [listingphoto.net](https://listingphoto.net) | [app.listingphoto.net](https://app.listingphoto.net) | [api.listingphoto.net](https://api.listingphoto.net) |

---

## Architecture Overview

### Repository Structure

All products are hosted under the **RealtorTools** GitHub organization:

```
github.com/RealtorTools/
├── realtortools/        # Umbrella repo (branding, this doc)
├── cmaforge/            # CMA product monorepo
├── listingreels/        # Video product monorepo
└── listingphoto/        # Photo product monorepo
```

### Monorepo Structure (Each Product)

```
product/
├── api/                 # Express.js backend
├── app/                 # React frontend (Vite)
├── landing/             # Nuxt.js marketing site
├── extension/           # Chrome extension
├── docs/                # Documentation
├── CLAUDE.md            # AI agent configuration
└── README.md            # Product overview
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18 + TypeScript + Vite + Tailwind CSS |
| **Landing** | Nuxt 3 + Vue 3 + Tailwind CSS |
| **Backend** | Express.js + TypeScript + MongoDB |
| **AI** | Gemini (scripts), HeyGen (video), Replicate (photos) |
| **Payments** | Stripe (subscriptions) |
| **Auth** | Google OAuth + JWT |
| **Email** | Resend (transactional) |
| **Hosting** | SSDNodes VPS (API), Vercel (landing), Lovable (app) |
| **Monitoring** | Sentry (error tracking) |

---

## Infrastructure

### Hosting Matrix

| Component | Platform | Deploy Trigger |
|-----------|----------|----------------|
| All APIs | SSDNodes VPS + PM2 | GitHub Actions on push to `main` |
| All Landing | Vercel | Auto-deploy on push to `main` |
| All Apps | Lovable | Auto-deploy on push to `main` |

### Server Details

**SSDNodes VPS:**
- IP: `104.225.217.54`
- SSH: `ssh ssdnodes`
- OS: Ubuntu
- Process Manager: PM2
- Web Server: Nginx
- Database: MongoDB (local)

**PM2 Processes:**
| Process | Port | Path |
|---------|------|------|
| `cmaforge-api` | 3730 | `/var/www/cmaforge-api` |
| `listingreels-api` | 3731 | `/var/www/listingreels-api` |
| `listingphoto-api` | 3732 | `/var/www/listingphoto-api` |

### Database

Each product has its own MongoDB database:
- `cmaforge`
- `listingreels`
- `listingphoto`

```bash
# Check all databases
ssh ssdnodes "mongosh --eval 'show dbs' --quiet"
```

---

## Product Status Dashboard

### CMAForge - AI Comparative Market Analysis

**Status:** Live and operational
**Launch Readiness:** 97%

| Feature | Status | Notes |
|---------|--------|-------|
| Seller CMA | ✅ Live | AI strategy, scenarios, appraisal risk |
| Buyer CMA | ✅ Live | Offer analysis, contingency advice |
| Market Intelligence | ✅ Live | Trends, charts, rental data |
| Share Links | ✅ Live | Branded shareable reports |
| PDF Export | ✅ Live | Professional PDF generation |
| Stripe Billing | ✅ Live | Free (3/mo) + Pro ($12.49/mo) |
| Referral Program | ✅ Live | Code gen, rewards, fraud controls |
| Chrome Extension | ⚠️ Stale | Needs regression testing |

**Provider Keys Needed:** None (all configured)

---

### ListingReels - AI Property Video Generation

**Status:** Live, needs provider keys
**Launch Readiness:** 85%

| Feature | Status | Notes |
|---------|--------|-------|
| Video Generator UI | ✅ Built | Tone/avatar selection, preview |
| HeyGen Integration | ⚠️ Pending | Needs `HEYGEN_API_KEY` |
| Gemini Script Gen | ✅ Built | 4 tone templates |
| Zillow Property Fetch | ✅ Built | Extract data from URL |
| Video History | ✅ Built | List, status, delete |
| Stripe Billing | ✅ Live | Free (5/mo) + Pro (50/mo) |
| Referral Program | ✅ Live | Same as CMAForge |

**Provider Keys Needed:**
- `HEYGEN_API_KEY` - For AI avatar video generation

**Tone Options:**
- Confident - Assertive, power words
- Concise - Data-driven, factual
- Friendly - Warm, inviting
- Luxury - Premium, exclusive

---

### ListingPhoto - AI Photo Enhancement

**Status:** Live, needs provider keys
**Launch Readiness:** 85%

| Feature | Status | Notes |
|---------|--------|-------|
| PhotoForge UI | ✅ Built | Upload, mode selection, preview |
| Replicate Integration | ⚠️ Pending | Needs `REPLICATE_API_TOKEN` |
| Multiple Modes | ✅ Built | 5 enhancement modes |
| Batch Processing | ✅ Built | Multiple images at once |
| Before/After Slider | ✅ Built | Compare results |
| Stripe Billing | ✅ Live | Free (200/mo) + Pro (2000/mo) |
| Referral Program | ✅ Live | Same as CMAForge |

**Provider Keys Needed:**
- `REPLICATE_API_TOKEN` - For AI image processing

**Enhancement Modes:**
| Mode | Description | Cost |
|------|-------------|------|
| `auto_hdr` | HDR enhancement & upscaling | $0.02 |
| `sky` | Sky replacement (blue/sunset) | $0.05 |
| `twilight` | Convert daytime to dusk | $0.08 |
| `staging` | Virtual furniture staging | $0.15 |
| `object_removal` | Remove clutter/objects | $0.10 |

---

## Shared Features (All Products)

Each product includes:

| Feature | Description |
|---------|-------------|
| **Google OAuth** | Sign in with Google, JWT tokens |
| **Stripe Billing** | Subscriptions, billing portal, history |
| **Referral Program** | Code generation, rewards, fraud controls |
| **Transactional Email** | Resend integration, verified domains |
| **Error Tracking** | Sentry for app + API |
| **Admin Dashboard** | User management, metrics, revenue |
| **Blog API** | Notion-backed blog for landing sites |
| **Property Data** | Zillow/Redfin/Realtor.com via RapidAPI |

---

## Immediate Priorities

### 1. Provider Keys (Blocking)

| Key | Product | Action |
|-----|---------|--------|
| `HEYGEN_API_KEY` | ListingReels | Sign up at heygen.com, add to server `.env` |
| `REPLICATE_API_TOKEN` | ListingPhoto | Sign up at replicate.com, add to server `.env` |

Once added, restart PM2 processes:
```bash
ssh ssdnodes "pm2 restart listingreels-api listingphoto-api"
```

### 2. Uptime Monitoring

Set up UptimeRobot or Pingdom for:
- https://api.cmaforge.app/health
- https://api.listingreels.net/health
- https://api.listingphoto.net/health

### 3. Chrome Extension Regression

CMAForge extension needs testing against current API. Run through:
1. Auth flow (Google login)
2. Property capture from Zillow/Redfin
3. CMA generation
4. Share link creation
5. Upgrade flow for free users

---

## Roadmap

### Phase 1: Operational (Current)

- [x] All three products deployed and running
- [x] Stripe billing live for all products
- [x] Google OAuth working
- [x] Sentry error tracking configured
- [x] Transactional emails verified
- [x] Referral program with fraud controls
- [ ] Provider keys for ListingReels/ListingPhoto
- [ ] Uptime monitoring

### Phase 2: Growth

- [ ] Cross-product SSO (single login for all products)
- [ ] RealtorTools.com hub with product directory
- [ ] Unified billing (bundle pricing)
- [ ] Mobile apps (React Native)
- [ ] API for third-party integrations

### Phase 3: Scale

- [ ] Team/Agency plans
- [ ] White-label options
- [ ] Enterprise features
- [ ] International expansion (translations)

---

## Development Workflow

### Local Development

```bash
# Clone a product
git clone https://github.com/RealtorTools/cmaforge.git
cd cmaforge

# API development
cd api && npm install && npm run dev

# App development (separate terminal)
cd app && npm install && npm run dev

# Landing development (separate terminal)
cd landing && npm install && npm run dev
```

### Deployment

All products auto-deploy on push to `main`:
- **API:** GitHub Actions → SSH to SSDNodes → pm2 restart
- **Landing:** Vercel auto-deploy
- **App:** Lovable auto-deploy

### Commit Convention

```
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Scope: api, app, landing, extension, docs
```

---

## Key Resources

### Dashboards

| Service | URL |
|---------|-----|
| Stripe | [dashboard.stripe.com](https://dashboard.stripe.com) |
| Resend | [resend.com](https://resend.com) |
| Sentry | [sentry.io](https://sentry.io) |
| Vercel | [vercel.com](https://vercel.com) |
| Lovable | [lovable.dev](https://lovable.dev) |
| GitHub | [github.com/RealtorTools](https://github.com/RealtorTools) |

### Server Commands

```bash
# Check all services
ssh ssdnodes "pm2 status"

# View logs
ssh ssdnodes "pm2 logs cmaforge-api --lines 50"
ssh ssdnodes "pm2 logs listingreels-api --lines 50"
ssh ssdnodes "pm2 logs listingphoto-api --lines 50"

# Restart services
ssh ssdnodes "pm2 restart cmaforge-api"
ssh ssdnodes "pm2 restart listingreels-api"
ssh ssdnodes "pm2 restart listingphoto-api"

# Check nginx
ssh ssdnodes "systemctl status nginx"
```

### Environment Variables

Each API requires these in `/var/www/{product}-api/.env`:

```bash
# Core
NODE_ENV=production
PORT=373X
MONGODB_URI=mongodb://localhost:27017/{product}

# Auth
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
JWT_SECRET=...
JWT_REFRESH_SECRET=...

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
RESEND_API_KEY=re_...

# AI Providers
GEMINI_API_KEY=...
HEYGEN_API_KEY=...        # ListingReels only
REPLICATE_API_TOKEN=...   # ListingPhoto only

# Property Data
RAPIDAPI_KEY=...

# Monitoring
SENTRY_DSN=...
```

---

## Documentation Index

| Document | Location | Purpose |
|----------|----------|---------|
| This Plan | `realtortools/MASTER_PLAN.md` | Suite overview & status |
| Branding Guide | `realtortools/docs/BRANDING.md` | Colors, fonts, logos |
| CMAForge Roadmap | `cmaforge/docs/planning/roadmap.md` | CMA feature status |
| ListingReels Roadmap | `listingreels/docs/planning/roadmap.md` | Video feature status |
| ListingPhoto Roadmap | `listingphoto/docs/planning/roadmap.md` | Photo feature status |
| CMAForge CLAUDE.md | `cmaforge/CLAUDE.md` | AI agent config |
| ListingReels CLAUDE.md | `listingreels/CLAUDE.md` | AI agent config |
| ListingPhoto CLAUDE.md | `listingphoto/CLAUDE.md` | AI agent config |

---

*RealtorTools - AI for Real Estate Professionals*
