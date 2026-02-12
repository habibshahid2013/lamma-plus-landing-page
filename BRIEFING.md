# CLAUDE CODE BRIEFING — Lamma+ Phase 3, Session 37B

## Build Pre-Launch Marketing Landing Page

---

## CONTEXT

Read `PROJECT_SYNC.md` first. This is the Lamma+ project — an Islamic creator discovery platform built with Next.js 14, TypeScript, Tailwind CSS, Firebase/Firestore, deployed on Vercel at `lamma-app.vercel.app`.

**This session is NOT about the admin tools or data pipeline.** We are pivoting to marketing and business development. The goal is to build a standalone pre-launch landing page that will live at the root of the app (or at a dedicated route like `/launch`) to capture waitlist signups and build hype before public launch.

---

## WHAT TO BUILD

A single-page pre-launch marketing landing page with the following sections:

### 1. Navigation (fixed, transparent → solid on scroll)

- Palm tree SVG logomark + "LAMMA+" text (Playfair Display, uppercase, gold "+" accent)
- Nav links: Features, Our Story, Roadmap
- CTA button: "Get Early Access" → scrolls to waitlist section
- Blur/backdrop effect on scroll

### 2. Hero Section

- Badge: "● Coming Soon — Join the Waitlist" (gold badge, pulse animation on dot)
- Headline: "Discover the voices _shaping the ummah_" (Playfair Display, teal + terracotta italic)
- Subheadline: "The first platform to index Islamic scholars, educators, and creators across YouTube, TikTok, podcasts, books, and beyond — making the richness of Islamic knowledge accessible to everyone."
- **Email waitlist form** (email input + "Join the Waitlist →" button)
- Animated stats: 581+ Creators Indexed | 12+ Platforms Tracked | 40+ Countries
- Right side: Interactive platform preview mockup (browser chrome with creator cards showing names, roles, quality scores, platform tags)

### 3. Problem Section (teal background)

- Headline: "Islamic knowledge is _everywhere_ but impossible to navigate"
- Body copy about scattered creators across platforms
- Three stat cards: 2B+ Muslims Worldwide | 1000s of Creators | Zero unified tools

### 4. Features Grid (3x2)

Six feature cards with emoji icons, titles, descriptions:

- 🔍 Intelligent Discovery — search by topic, language, region, tradition, platform
- 📊 Unified Profiles — one profile per creator from all platforms
- 🌍 The Full Ummah — every tradition, region, generation represented
- 🎯 Quality Signals — AI-powered completeness scoring
- 📱 Every Platform — YouTube, TikTok, Instagram, Spotify, podcasts, books
- 🤲 Community-Built — nominate scholars, claim profiles

### 5. Representation Banner (cream gradient background)

- Headline: "The ummah is _beautifully vast_. Our platform reflects that."
- Copy about breadth of representation (West African Sufi traditions to Southeast Asian scholarship, converts, women educators, youth)
- Tag cloud: Scholars, Educators, Authors, Speakers, Podcasters, Content Creators, Activists, Artists, Converts, Youth Voices
- **IMPORTANT:** Do NOT use the word "diversity" or any DEI terminology. Frame everything as "representation," "the full ummah," "every voice, every tradition"

### 6. Founder Story Section

- Left: Placeholder portrait area (teal gradient card with ✦ icon, "Hassan — Founder & Creator")
- Right: Story copy:
  - Cedar Commission Fellow, MSAB Grant Recipient, software engineer, artist, community organizer in Minneapolis
  - "When I looked for a way to find the scholars, educators, and creators shaping how millions understand Islam — I found nothing."
  - "So I built one."
- Credential tags: Software Engineer, Cedar Commission Fellow, MSAB Grant Recipient, Tech-sess Founder

### 7. Roadmap (4 steps, vertical timeline)

- ✓ Now: 581+ creators indexed (done)
- 2 Next: 3,000 creator milestone
- 3 Soon: Public beta launch
- 4 Future: Creator profiles & community

### 8. Final CTA (teal background)

- Headline: "Be part of something _the ummah has been waiting for_"
- Second waitlist form
- ✦ star accents scattered as decoration

### 9. Footer

- LAMMA+ logo text
- © 2026 Lamma+. Islamic knowledge, organized.
- Social links: Instagram, TikTok, X, LinkedIn, Facebook

---

## BRAND IDENTITY

### Colors (from official logo sheet)

```
Primary:
  teal: #1B3C3C (dark backgrounds, text, primary brand color)
  gold: #D4A832 / #E8B931 (accents, CTAs, "+" in logo)

Warm neutrals:
  cream: #F5F0E5 (backgrounds)
  warmWhite: #FAF8F2 (card backgrounds)
  sand: #B5AD82 (muted text on dark, secondary elements)

Accents:
  terracotta: #C47A3A (section labels, italic headline accents)
  burgundy: #7A3045 (emphasis color)
  dustyTeal: #6B9A9A (secondary teal for variety)
```

### Typography

- Headlines: `Playfair Display` (serif, 400/600/700/800, including italic)
- Body: `DM Sans` (sans-serif, 300-700)
- Monospace (URL bar in preview): `DM Mono`
- Load via Google Fonts

### Logo

- Palm tree SVG as the "L" in LAMMA+
- Text is uppercase "LAMMA" in Playfair Display + gold "+"
- Four-pointed star ✦ used as decorative accent throughout (from logo sheet)
- The uploaded logo PNG is at: `/public/lamma-logo.png` (copy it there from the project root or uploads)

### Design Principles

- Warm, editorial feel — NOT cold tech startup aesthetic
- Cream/white backgrounds for most sections, teal for contrast sections
- Gold accents for CTAs and highlights
- Hover effects: cards lift slightly with shadow, border turns gold
- Subtle animations: fade-up on scroll, floating preview mockup, counter animation
- Mobile responsive (stack grids to single column, hide nav links)

---

## TECHNICAL IMPLEMENTATION

### Option A: New Next.js Page (Recommended)

Create as `app/launch/page.tsx` — a standalone page within the existing app.

```
app/launch/
  page.tsx          — Main landing page component
  components/
    WaitlistForm.tsx  — Email capture form
    PlatformPreview.tsx — Browser mockup with creator cards
    Counter.tsx       — Animated number counter
```

### Option B: Replace Homepage

If the current homepage isn't being used for the public app yet, this could replace `app/page.tsx`.

### Waitlist Backend

Create a simple API endpoint to capture emails:

```
app/api/waitlist/route.ts
```

```typescript
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  // Check for duplicates
  const q = query(collection(db, "waitlist"), where("email", "==", email));
  const existing = await getDocs(q);
  if (!existing.empty) {
    return Response.json({ message: "Already on the list!" }, { status: 200 });
  }

  await addDoc(collection(db, "waitlist"), {
    email,
    joinedAt: new Date().toISOString(),
    source: "landing-page",
  });

  return Response.json(
    { message: "Welcome to the waitlist!" },
    { status: 201 },
  );
}
```

The WaitlistForm component should call this API instead of using a fake setTimeout.

### Animations

Use CSS `@keyframes` for:

- `fadeUp` — elements animate in on load
- `softFloat` — preview mockup bobs gently
- `pulse` — "coming soon" dot pulses

Use `IntersectionObserver` for the animated counters (581+, 12+, 40+) — they count up when scrolled into view.

### Responsive

Add media queries or Tailwind responsive classes:

- Hero grid → single column on mobile
- Feature grid → single column on mobile
- Story grid → single column on mobile (photo above text)
- Nav links → hidden on mobile (just show logo + CTA button)

---

## REFERENCE DESIGN

A complete React/JSX implementation of this landing page has been created and approved by Hassan. It's available at:

```
/mnt/user-data/outputs/lammaplus-landing-v3.jsx
```

**Read this file first.** It contains the exact design, colors, copy, layout, and component structure. Convert it from inline styles to Tailwind CSS (or keep inline styles if faster), add TypeScript types, wire up the real waitlist API, and integrate it into the Next.js app.

The key things to preserve from the reference:

1. Exact color palette (teal, gold, cream, terracotta, burgundy, sand)
2. Playfair Display + DM Sans typography
3. The platform preview mockup with browser chrome and creator cards
4. The four-pointed star ✦ decorative accents
5. The warm, editorial tone — NOT generic tech startup
6. All copy and section structure
7. The waitlist form appearing in both hero and final CTA sections

---

## LOGO FILES

Copy the uploaded logo PNG to the public directory:

```bash
cp /mnt/user-data/uploads/10271.png public/lamma-logo.png
cp /mnt/user-data/uploads/10270.png public/lamma-brand-sheet.png
```

These can be used as `<img>` tags or referenced in OG meta tags.

---

## META / SEO

Add proper meta tags to the landing page:

```typescript
export const metadata = {
  title: "Lamma+ | Discover Islamic Scholars, Educators & Creators",
  description:
    "The first platform to index Islamic scholars, educators, and creators across YouTube, TikTok, podcasts, books, and beyond. Join the waitlist.",
  openGraph: {
    title: "Lamma+ | Discover the Voices Shaping the Ummah",
    description:
      "The first platform to discover and explore Islamic scholars, educators, and creators across every platform.",
    images: ["/lamma-brand-sheet.png"],
    url: "https://lammaplus.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamma+ | Discover Islamic Knowledge Creators",
    description:
      "The first unified platform for Islamic scholars, educators, and creators. 581+ indexed across 12+ platforms.",
  },
};
```

---

## DONE WHEN

1. Landing page renders at `/launch` (or root `/`)
2. Email waitlist form captures to Firestore `waitlist` collection
3. Duplicate emails handled gracefully (shows "already on the list")
4. All 9 sections render correctly with brand colors and typography
5. Animated counters work on scroll
6. Platform preview mockup looks like a real browser window
7. Mobile responsive — all grids stack, nav collapses
8. Build passes (`npm run build` clean)
9. Deployed to Vercel and accessible at production URL

---

## DO NOT

- Touch any admin pages or data pipeline code
- Modify existing components outside of this landing page
- Use the word "diversity" or DEI terminology — use "representation," "the full ummah," "every voice"
- Use generic AI startup aesthetics (purple gradients, Inter font, etc.)
- Skip the waitlist API — it must actually save emails to Firestore
