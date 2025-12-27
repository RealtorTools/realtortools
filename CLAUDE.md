# RealtorTools - AI Agent Configuration

> **Commit Policy**
> - Commit frequently.
> - Always set author to Wal33D <aquataze@yahoo.com>.
> - Do not add co-authors.

This is the master configuration for AI agents working on the RealtorTools platform.

---

## Platform Overview

RealtorTools is an umbrella organization containing three AI-powered products for real estate professionals:

| Product | Description | Directory |
|---------|-------------|-----------|
| **CMAForge** | AI Comparative Market Analysis | `products/cmaforge/` |
| **ListingReels** | AI Property Video Generation | `products/listingreels/` |
| **ListingPhoto** | AI Photo Enhancement | `products/listingphoto/` |

---

## Directory Structure

```
realtortools/                    # Umbrella repo (this repo)
├── platform/
│   └── landing/                 # realtortools.com marketing site
├── docs/
│   └── BRANDING.md              # Brand guidelines
├── infrastructure/              # DevOps & deployment configs
├── CLAUDE.md                    # AI agent configuration
└── README.md                    # Umbrella documentation

products/                        # Each product has its OWN git repo (local only)
├── cmaforge/                    # → github.com/RealtorTools/cmaforge
├── listingreels/                # → github.com/RealtorTools/listingreels
└── listingphoto/                # → github.com/RealtorTools/listingphoto
```

> **Note**: Products are standalone repositories in the RealtorTools GitHub organization. They may be organized locally in any structure, but each has its own git repository.

---

## Product-Specific Configuration

Each product has its own `CLAUDE.md` with detailed configuration:

- **CMAForge**: `products/cmaforge/CLAUDE.md`
- **ListingReels**: `products/listingreels/CLAUDE.md`
- **ListingPhoto**: `products/listingphoto/CLAUDE.md`

When working on a specific product, refer to its CLAUDE.md for:
- Deployment infrastructure
- API endpoints
- Database schemas
- Product-specific tools

---

## Shared MCP Servers

These MCP servers are available across all products:

| Server | Purpose | Status |
|--------|---------|--------|
| `github` | Code management, PRs, issues | ✓ Connected |
| `stripe` | Billing & subscriptions | ✓ Connected |
| `vercel` | Landing page deployments | ✓ Connected |
| `sentry` | Error monitoring | ✓ Connected |
| `linear-server` | Project management | ✓ Connected |
| `notion` | Documentation | ✓ Connected |
| `playwright` | Browser automation | ✓ Connected |
| `chrome-devtools` | Debugging | ✓ Connected |

### Property Data Sources (Shared)
| Server | Purpose | Status |
|--------|---------|--------|
| `zillow` | Property data via RapidAPI | ✓ Connected |
| `redfin` | Property data via RapidAPI | ✓ Connected |
| `realtor` | Property data via RapidAPI | ✓ Connected |

### Storage (Shared)
| Server | Purpose | Status |
|--------|---------|--------|
| `cloudinary` | Image/video storage | ⚠ Needs OAuth |

---

## SSH Access

All products share the same SSDNodes server for API deployment:

```bash
ssh ssdnodes
```

**SSH Config** (`~/.ssh/config`):
```
Host ssdnodes
    HostName 104.225.217.54
    User root
    IdentityFile ~/.ssh/ssdnodes_key
    StrictHostKeyChecking accept-new
```

### API Locations on Server

| Product | Directory | PM2 Process |
|---------|-----------|-------------|
| CMAForge | `/var/www/cmaforge-api` | `cmaforge-api` |
| ListingReels | `/var/www/listingreels-api` | `listingreels-api` |
| ListingPhoto | `/var/www/listingphoto-api` | `listingphoto-api` |

---

## Deployment Matrix

### Frontend (App)
All hosted on **Lovable**:
| Product | URL | Trigger |
|---------|-----|---------|
| CMAForge | cmaforge.app | Push to `main` |
| ListingReels | app.listingreels.net | Push to `main` |
| ListingPhoto | app.listingphoto.com | Push to `main` |

### Landing Pages
All hosted on **Vercel**:
| Product | URL | Trigger |
|---------|-----|---------|
| CMAForge | cmaforge.com | Push to `main` |
| ListingReels | listingreels.net | Push to `main` |
| ListingPhoto | listingphoto.com | Push to `main` |
| Platform | realtortools.com | Push to `main` |

### Backend (API)
All hosted on **SSDNodes** via GitHub Actions:
| Product | URL | PM2 Process |
|---------|-----|-------------|
| CMAForge | api.cmaforge.com | `cmaforge-api` |
| ListingReels | api.listingreels.net | `listingreels-api` |
| ListingPhoto | api.listingphoto.com | `listingphoto-api` |

---

## Common Commands

### Check All API Status
```bash
ssh ssdnodes "pm2 status"
```

### View Logs
```bash
# CMAForge
ssh ssdnodes "pm2 logs cmaforge-api --lines 50"

# ListingReels
ssh ssdnodes "pm2 logs listingreels-api --lines 50"

# ListingPhoto
ssh ssdnodes "pm2 logs listingphoto-api --lines 50"
```

### Restart Services
```bash
ssh ssdnodes "pm2 restart cmaforge-api"
ssh ssdnodes "pm2 restart listingreels-api"
ssh ssdnodes "pm2 restart listingphoto-api"
```

---

## Database (MongoDB)

Shared MongoDB instance on SSDNodes:

```bash
# List all databases
ssh ssdnodes "mongosh --eval 'show dbs' --quiet"

# Query specific database
ssh ssdnodes "mongosh --eval 'db = db.getSiblingDB(\"cmaforge\"); db.users.countDocuments({})' --quiet"
ssh ssdnodes "mongosh --eval 'db = db.getSiblingDB(\"listingreels\"); db.users.countDocuments({})' --quiet"
ssh ssdnodes "mongosh --eval 'db = db.getSiblingDB(\"listingphoto\"); db.users.countDocuments({})' --quiet"
```

---

## Cross-Product Consistency

Each product is independent, but should maintain brand consistency:

1. **Branding**: Follow guidelines in `docs/BRANDING.md`
2. **Color Palette**: Use product-specific colors from the brand guide
3. **Typography**: Inter for UI, consistent heading hierarchy
4. **Messaging**: "AI-Powered" positioning across all products

---

## Strategic Plans

Each product has its own strategic plan:

- **CMAForge**: `products/cmaforge/MASTER_PLAN.md`
- **ListingReels**: `products/listingreels/STRATEGIC_PLAN.md`
- **ListingPhoto**: `products/listingphoto/STRATEGIC_PLAN.md`

---

## Security Notes

1. **Never commit secrets** to any repository
2. **SSH keys** should be Ed25519 or RSA 4096-bit minimum
3. **API keys** are stored in GitHub Secrets and server `.env` files
4. **Rotate keys** if accidentally exposed
5. **Each product** has its own Stripe account and API keys

---

*RealtorTools - AI for Real Estate Professionals*
*Document Version: 1.0*
*Last Updated: December 27, 2025*
