# RealtorTools Landing Page

> The main marketing site for RealtorTools.com

## Overview

This is the umbrella landing page that showcases all RealtorTools products:
- **CMAForge** - AI Comparative Market Analysis
- **ListingReels** - AI Property Video Generation
- **ListingPhoto** - AI Photo Enhancement

## Deployment

- **Host**: Vercel
- **Domain**: realtortools.com
- **Deploy Trigger**: Push to `main` branch

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Set these in Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `NUXT_PUBLIC_SITE_URL` | https://realtortools.com |

## Pages

- `/` - Main landing page
- `/products` - Product showcase
- `/pricing` - Combined pricing (future)
- `/about` - About RealtorTools

## Tech Stack

- **Framework**: Nuxt 3
- **UI**: Vue 3 + TailwindCSS
- **Hosting**: Vercel Edge Network
