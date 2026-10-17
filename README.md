# MatchKenya 💚

**Location-based online dating for people in Kenya.**

Find matches near you by county, interests, tribe, religion and distance.

## Features (MVP)

- User registration & login (demo mode)
- Profile setup with Kenyan counties, interests, tribe, religion
- Browser geolocation support
- Discover / swipe interface with filters (distance, age, county)
- Matching system (simulated)
- Real-time-feeling chat (mock replies)
- Matches list & profile editing
- Fully responsive, mobile-first design
- Kenya-themed UI (green & accents from the flag)

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Hosting**: Netlify (configured)
- **Data**: LocalStorage + mock Kenyan users (for demo)

## Getting Started

```bash
# Clone
git clone https://github.com/gachiesamuel14/matchkenya.git
cd matchkenya

# Install
npm install

# Run locally
npm run dev
```

Open http://localhost:5173

## Deploy to Netlify

1. Connect this GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## Next Steps (Roadmap)

- [ ] Real authentication (Supabase / Firebase / Auth0)
- [ ] PostgreSQL or MongoDB backend
- [ ] Real GPS matching algorithm (Haversine formula + PostGIS)
- [ ] Photo uploads (Cloudinary / Supabase Storage)
- [ ] Real-time chat (Socket.io or Supabase Realtime)
- [ ] Push notifications
- [ ] Report / block / safety tools
- [ ] M-Pesa payments for premium features
- [ ] Verification badges
- [ ] Student / Professional / Church modes

## Localisation Ideas

- Support Sheng & Swahili phrases
- County + town level matching
- M-Pesa for subscriptions
- Local payment methods

---

Built with ❤️ for Kenya. Karibu!
