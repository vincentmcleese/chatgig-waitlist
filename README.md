# Chat Gig - Landing Page

A modern, minimalistic SaaS landing page for Chat Gig - "Fiverr for ChatGPT"

## Features

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS with custom design system
- shadcn/ui components
- Responsive design
- Subtle animations
- SEO optimized

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
chat-gig/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & design system
├── components/
│   ├── ui/                 # shadcn components
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── VideoDemo.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── AvatarGroup.tsx
└── public/                 # Static assets
```

## Customization

### Adding Suisse Intl Font

1. Add your Suisse Intl font files to `public/fonts/`
2. Update `app/globals.css` with @font-face declarations
3. The CSS variables are already set up to use Suisse Intl

### Adding Logo

1. Place your logo in `public/`
2. Update the logo placeholder in `components/sections/Footer.tsx`

### Embedding Tally Form

Replace the button links in `components/sections/Hero.tsx`:

```tsx
// For waitlist
<a href="YOUR_TALLY_FORM_URL">Join the waitlist</a>

// For freelancers
<a href="YOUR_FREELANCER_TALLY_FORM_URL">I'm a freelancer</a>
```

### Adding Video

Update `components/sections/VideoDemo.tsx` with your video URL:

```tsx
<iframe
  src="YOUR_VIDEO_URL"
  // ... other props
/>
```

## Design System

The design system uses Ghost Team brand colors:
- Primary Green: `rgb(27, 200, 140)`
- Primary Green Dark: `rgb(20, 160, 112)`
- Black: `rgb(26, 26, 26)`

All colors and design tokens are defined in `app/globals.css` as CSS variables.

## Sections

1. **Hero** - Main heading with CTAs and avatar group showing waitlist count
2. **Video Demo** - Full-width video demonstration
3. **Features** - 4 key features with icons
4. **How It Works** - 3-step process
5. **Testimonials** - Social proof from early users
6. **FAQ** - Accordion-style frequently asked questions
7. **Footer** - Minimal footer with product links

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Heroicons (inline SVG)
- **Font:** Geist (placeholder for Suisse Intl)
