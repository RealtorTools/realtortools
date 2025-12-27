# RealtorTools Brand Guidelines

> The definitive guide for visual and messaging consistency across all RealtorTools products.

---

## Brand Overview

**RealtorTools** is an AI-powered suite for real estate professionals. Our brand represents innovation, trust, and professional excellence in the real estate technology space.

### Brand Promise
*"AI that works as hard as you do."*

### Brand Values
- **Innovation**: Leading-edge AI technology
- **Trust**: Reliable, accurate, professional-grade tools
- **Efficiency**: Save time, close more deals
- **Accessibility**: Enterprise power, simple to use

---

## Product Suite

| Product | Tagline | Primary Color | Icon |
|---------|---------|---------------|------|
| **RealtorTools** | AI-Powered Suite for Real Estate | Slate `#1E293B` | Building/Suite |
| **CMAForge** | AI Comparative Market Analysis | Emerald `#10B981` | Chart/Analysis |
| **ListingReels** | AI Property Video Generation | Violet `#8B5CF6` | Video/Play |
| **ListingPhoto** | AI Photo Enhancement | Amber `#F59E0B` | Camera/Image |

---

## Color Palette

### Primary Colors (By Product)

```css
/* RealtorTools Umbrella */
--rt-primary: #1E293B;      /* Slate 800 */
--rt-secondary: #334155;    /* Slate 700 */
--rt-accent: #3B82F6;       /* Blue 500 */

/* CMAForge */
--cma-primary: #10B981;     /* Emerald 500 */
--cma-secondary: #059669;   /* Emerald 600 */
--cma-light: #D1FAE5;       /* Emerald 100 */
--cma-dark: #064E3B;        /* Emerald 900 */

/* ListingReels */
--lr-primary: #8B5CF6;      /* Violet 500 */
--lr-secondary: #7C3AED;    /* Violet 600 */
--lr-light: #EDE9FE;        /* Violet 100 */
--lr-dark: #4C1D95;         /* Violet 900 */

/* ListingPhoto */
--lp-primary: #F59E0B;      /* Amber 500 */
--lp-secondary: #D97706;    /* Amber 600 */
--lp-light: #FEF3C7;        /* Amber 100 */
--lp-dark: #78350F;         /* Amber 900 */
```

### Neutral Colors (Shared)

```css
/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F8FAFC;    /* Slate 50 */
--bg-tertiary: #F1F5F9;     /* Slate 100 */
--bg-dark: #0F172A;         /* Slate 900 */

/* Text */
--text-primary: #1E293B;    /* Slate 800 */
--text-secondary: #64748B;  /* Slate 500 */
--text-muted: #94A3B8;      /* Slate 400 */
--text-inverse: #FFFFFF;

/* Borders */
--border-light: #E2E8F0;    /* Slate 200 */
--border-medium: #CBD5E1;   /* Slate 300 */
```

### Semantic Colors

```css
/* Status */
--success: #10B981;         /* Emerald 500 */
--warning: #F59E0B;         /* Amber 500 */
--error: #EF4444;           /* Red 500 */
--info: #3B82F6;            /* Blue 500 */
```

---

## Typography

### Font Family

**Primary Font**: Inter (Google Fonts)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48px / 3rem | 700 (Bold) | 1.1 |
| H2 | 36px / 2.25rem | 600 (Semibold) | 1.2 |
| H3 | 24px / 1.5rem | 600 (Semibold) | 1.3 |
| H4 | 20px / 1.25rem | 600 (Semibold) | 1.4 |
| Body | 16px / 1rem | 400 (Regular) | 1.6 |
| Body Small | 14px / 0.875rem | 400 (Regular) | 1.5 |
| Caption | 12px / 0.75rem | 500 (Medium) | 1.4 |

### Font Weights
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Buttons, labels, captions
- **Semibold (600)**: Headings, emphasis
- **Bold (700)**: Hero headlines, key CTAs

---

## Logo Guidelines

### Logo Formats

Each product should have:
1. **Full Logo**: Icon + Text (horizontal)
2. **Stacked Logo**: Icon above Text (vertical)
3. **Icon Only**: For favicons, app icons
4. **Text Only**: When icon is already present

### Logo Clear Space

Maintain minimum clear space equal to the height of the icon on all sides.

### Logo Colors

| Context | Primary | Alternate |
|---------|---------|-----------|
| Light backgrounds | Product primary color | Slate 800 |
| Dark backgrounds | White | Product light color |
| Monochrome | Slate 800 | White |

### Logo Don'ts
- Don't stretch or distort
- Don't rotate or skew
- Don't add effects (shadows, gradients)
- Don't use unapproved colors
- Don't place on busy backgrounds

---

## UI Components

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--product-primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border-medium);
  color: var(--text-primary);
  padding: 12px 24px;
  border-radius: 8px;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--product-primary);
  padding: 12px 24px;
}
```

### Border Radius

```css
--radius-sm: 4px;     /* Small elements, tags */
--radius-md: 8px;     /* Buttons, inputs, cards */
--radius-lg: 12px;    /* Modals, large cards */
--radius-xl: 16px;    /* Hero sections */
--radius-full: 9999px; /* Pills, avatars */
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Spacing Scale (8px base)

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

---

## Messaging Guidelines

### Voice & Tone

**Voice**: Professional, knowledgeable, confident
**Tone**: Helpful, straightforward, empowering

### Key Phrases

| Use | Avoid |
|-----|-------|
| "AI-powered" | "Revolutionary AI" |
| "Professional-grade" | "Best in class" |
| "Save time" | "Blazing fast" |
| "Accurate analysis" | "Perfect results" |
| "Built for realtors" | "For everyone" |

### Product Descriptions

**CMAForge**
> Generate professional Comparative Market Analysis reports in minutes, not hours. AI-powered property valuation that impresses clients and closes deals.

**ListingReels**
> Transform property photos into stunning video tours with AI. Create scroll-stopping social content that gets listings noticed.

**ListingPhoto**
> Enhance listing photos with professional AI editing. Virtual staging, sky replacement, and one-click improvements for every photo.

**RealtorTools**
> The complete AI-powered suite for real estate professionals. Market analysis, video creation, and photo enhancement—all in one platform.

---

## Application Examples

### Email Signatures

```
[Name]
[Title]
RealtorTools | [Product Name]
[email] | [phone]
realtortools.com
```

### Social Media

**Profile Image**: Product icon on white background
**Cover Image**: Product hero with tagline
**Bio Format**: `[Product tagline] | Part of @RealtorTools`

### Presentation Slides

- White or dark slate background
- Product accent color for highlights
- Inter font throughout
- Logo in corner (not center)

---

## File Naming Conventions

```
[product]-[type]-[variant]-[size].[ext]

Examples:
cmaforge-logo-full-color.svg
listingreels-icon-white-512.png
realtortools-hero-dark-1920x1080.jpg
```

---

## Brand Assets Location

Assets should be stored in each product's `/public/brand/` directory:

```
/public/brand/
├── logo/
│   ├── logo-full.svg
│   ├── logo-stacked.svg
│   ├── icon.svg
│   └── text.svg
├── icons/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.png
└── colors/
    └── palette.json
```

---

## GitHub Organization

All RealtorTools repositories are hosted under the **RealtorTools** GitHub organization:

| Repository | Description | URL |
|------------|-------------|-----|
| realtortools | Umbrella branding & landing | github.com/RealtorTools/realtortools |
| cmaforge | CMA product monorepo | github.com/RealtorTools/cmaforge |
| listingreels | Video product monorepo | github.com/RealtorTools/listingreels |
| listingphoto | Photo product monorepo | github.com/RealtorTools/listingphoto |

---

## Contact

For brand questions or asset requests:
- **Email**: brand@realtortools.com
- **GitHub**: github.com/RealtorTools
- **Design System**: (Future) design.realtortools.com

---

*RealtorTools Brand Guidelines v1.0*
*Last Updated: December 27, 2025*
