# 🌴 Lamma+ — Pre-Launch Landing Page

> **Discover Islamic Scholars, Educators & Creators**

The first platform to index Islamic scholars, educators, and creators across YouTube, TikTok, podcasts, books, and beyond — making the richness of Islamic knowledge accessible to everyone.

🔗 **Live Site:** [lamma-plus-landing-page.vercel.app](https://lamma-plus-landing-page.vercel.app)

---

## ✨ Features

- **Hero Section** — Animated headline with waitlist signup form and interactive platform preview
- **Platform Preview** — Browser-chrome mockup showing featured creator cards with avatars and quality scores
- **Feature Showcase** — Six key features with elegant iconography
- **Statistics** — Animated counters for platform metrics
- **Social Proof** — Testimonial cards from early users
- **Founder Story** — Personal narrative with real founder photo and social links
- **Roadmap** — Visual timeline of planned milestones
- **Waitlist CTA** — Final call-to-action with dark theme variant
- **Footer** — Company social links with SVG icons

## 🛠 Tech Stack

| Layer         | Technology                                            |
| ------------- | ----------------------------------------------------- |
| Framework     | React + Vite                                          |
| Styling       | Vanilla CSS + inline styles                           |
| Fonts         | Playfair Display, DM Sans, DM Mono (Google Fonts)     |
| Icons         | Inline SVGs                                           |
| Hosting       | Vercel                                                |
| Email Capture | Google Sheets via Apps Script (localStorage fallback) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/habibshahid2013/lamma-plus-landing-page.git
cd lamma-plus-landing-page

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be running at `http://localhost:5173`

### Environment Variables

Copy the example env file and configure:

```bash
cp .env.example .env
```

| Variable            | Description                                         |
| ------------------- | --------------------------------------------------- |
| `VITE_WAITLIST_URL` | Google Apps Script Web App URL for waitlist signups |

> **Note:** The waitlist form works without this variable — emails are saved to localStorage as a fallback. See `google-apps-script.js` for full setup instructions.

## 📧 Waitlist Email Setup (Google Sheets)

1. Create a new Google Sheet named **"Lamma+ Waitlist"**
2. Add headers: `Timestamp | Email | Source`
3. Go to **Extensions → Apps Script**
4. Paste the contents of `google-apps-script.js`
5. **Deploy → New Deployment → Web app** (Execute as: Me, Access: Anyone)
6. Copy the deployment URL into your `.env` file as `VITE_WAITLIST_URL`
7. For Vercel: Add the same variable in **Settings → Environment Variables** and redeploy

## 📁 Project Structure

```
├── public/
│   ├── founder-hassan.jpg      # Founder headshot
│   ├── lamma-logo-nav.png      # Brand logo (transparent)
│   ├── lamma-logo.png          # Brand logo (full)
│   └── avatar-*.png            # Creator avatar illustrations
├── src/
│   ├── components/
│   │   ├── Counter.jsx          # Animated number counter
│   │   ├── Navbar.jsx           # Fixed navigation bar
│   │   ├── PlatformPreview.jsx  # Browser mockup with creator cards
│   │   └── WaitlistForm.jsx     # Email capture form
│   ├── constants/
│   │   └── colors.js            # Design tokens (teal, gold, sand, etc.)
│   ├── LammaPlusLanding.jsx     # Main landing page (all sections)
│   ├── App.jsx                  # App wrapper
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & animations
├── google-apps-script.js        # Google Sheets webhook code
├── .env.example                 # Environment variable template
└── vite.config.js               # Vite configuration
```

## 🎨 Design System

The landing page uses a warm, editorial color palette:

| Token          | Color | Hex       |
| -------------- | ----- | --------- |
| Teal (Primary) | 🟢    | `#1B3C3C` |
| Gold (Accent)  | 🟡    | `#D4A832` |
| Sand           | 🟤    | `#C8B89A` |
| Cream          | ⬜    | `#FAF7F2` |
| Burgundy       | 🔴    | `#6B2D3E` |
| Terracotta     | 🟠    | `#C07850` |

## 📄 License

MIT

---

Built with ❤️ by [Hassan](https://www.linkedin.com/in/hassan-s-49849368/)
