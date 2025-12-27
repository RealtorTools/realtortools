# RealtorTools

> **The Complete AI-Powered Suite for Real Estate Professionals**

[![Website](https://img.shields.io/badge/Website-realtortools.com-teal)](https://realtortools.com)

---

## Overview

RealtorTools is the umbrella brand for a suite of AI-powered tools designed for real estate professionals:

| Product | Description | App | Landing |
|---------|-------------|-----|---------|
| **CMAForge** | AI Comparative Market Analysis | [cmaforge.app](https://cmaforge.app) | [cmaforge.com](https://cmaforge.com) |
| **ListingReels** | AI Property Video Generation | [app.listingreels.net](https://app.listingreels.net) | [listingreels.net](https://listingreels.net) |
| **ListingPhoto** | AI Photo Enhancement | [app.listingphoto.com](https://app.listingphoto.com) | [listingphoto.com](https://listingphoto.com) |

---

## Repository Architecture

Each product maintains its own Git repository for independent development and deployment:

```
GitHub Organization (Wal33D)
│
├── realtortools            # This repo - umbrella branding & landing
│   ├── platform/landing/   # realtortools.com marketing site
│   ├── docs/BRANDING.md    # Brand guidelines
│   ├── CLAUDE.md           # AI agent configuration
│   └── README.md           # This file
│
├── cmaforge-mono           # CMAForge product repo
│   ├── api/                # Express.js backend
│   ├── app/                # React frontend (Lovable)
│   ├── landing/            # Nuxt.js marketing site (Vercel)
│   └── extension/          # Chrome extension
│
├── listingreels            # ListingReels product repo
│   ├── api/
│   ├── app/
│   ├── landing/
│   └── extension/
│
└── listingphoto            # ListingPhoto product repo
    ├── api/
    ├── app/
    ├── landing/
    └── extension/
```

> **Note**: Products are stored locally in `products/` for organization, but each pushes to its own GitHub repo. This umbrella repo excludes `products/` via `.gitignore`.

---

## Products

### CMAForge
**AI Comparative Market Analysis**

Generate professional CMA reports in minutes. AI-powered property valuation that impresses clients and closes deals.

- Seller & buyer CMA workflows
- AI pricing with appraisal guidance
- Market trends visualization
- Shareable PDF & web reports
- Chrome extension for instant property capture

**Repo**: [github.com/Wal33D/cmaforge-mono](https://github.com/Wal33D/cmaforge-mono)

---

### ListingReels
**AI Property Video Generation**

Transform property photos into stunning video tours with AI. Create scroll-stopping social content.

- Professional AI presenters
- Script generation with multiple tones
- Multi-format output (9:16, 16:9, 1:1)
- Direct social media sharing

**Repo**: [github.com/Wal33D/listingreels](https://github.com/Wal33D/listingreels)

---

### ListingPhoto
**AI Photo Enhancement**

Enhance listing photos with professional AI editing. Virtual staging, sky replacement, and one-click improvements.

- One-click photo enhancement
- Virtual staging
- Sky replacement
- Object removal
- Batch processing

**Repo**: [github.com/Wal33D/listingphoto](https://github.com/Wal33D/listingphoto)

---

## Deployment Matrix

| Product | Component | Platform | Domain |
|---------|-----------|----------|--------|
| CMAForge | API | SSDNodes | api.cmaforge.com |
| CMAForge | App | Lovable | cmaforge.app |
| CMAForge | Landing | Vercel | cmaforge.com |
| ListingReels | API | SSDNodes | api.listingreels.net |
| ListingReels | App | Lovable | app.listingreels.net |
| ListingReels | Landing | Vercel | listingreels.net |
| ListingPhoto | API | SSDNodes | api.listingphoto.com |
| ListingPhoto | App | Lovable | app.listingphoto.com |
| ListingPhoto | Landing | Vercel | listingphoto.com |
| **RealtorTools** | Landing | Vercel | realtortools.com |

---

## Brand Guidelines

See [`docs/BRANDING.md`](docs/BRANDING.md) for complete brand guidelines including:

- Color palette per product
- Typography standards
- Logo usage guidelines
- UI component styles
- Messaging & voice

---

## AI Agent Configuration

This repo includes [`CLAUDE.md`](CLAUDE.md) for AI coding assistants with:

- MCP server connections (Linear, Stripe, GitHub, Sentry, Vercel, etc.)
- SSH access for deployment
- Deployment workflows
- Product-specific contexts

---

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm
- MongoDB (for APIs)

### Working on a Product

```bash
# Clone the specific product repo
git clone https://github.com/Wal33D/cmaforge-mono.git
cd cmaforge-mono

# Or if using the umbrella local structure
cd products/cmaforge
```

Each product has its own README with detailed setup instructions.

---

## Contributing

1. Each product has independent version control
2. Follow brand guidelines in `docs/BRANDING.md`
3. Follow commit policy in `CLAUDE.md`

---

## License

Proprietary - All rights reserved.

---

*RealtorTools - AI for Real Estate Professionals*
