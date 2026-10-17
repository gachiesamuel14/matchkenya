import { Link } from 'react-router-dom'
import { MapPin, Heart, Shield, MessageCircle } from 'lucide-react'

export default function Landing({ user }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero */}
      <div className="max-w-lg mx-auto px-6 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <MapPin size={14} />
          Made for Kenya
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Find your match<br />
          <span className="text-brand-600">near you</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-sm mx-auto">
          Location-based dating for Kenyans. Connect with people in your county, share interests, and start real conversations.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {user ? (
            <Link
              to="/discover"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-200 transition"
            >
              Continue Discovering
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-200 transition"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3.5 rounded-xl border border-gray-200 transition"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-lg mx-auto px-6 py-10 space-y-6">
        <Feature
          icon={<MapPin className="text-brand-600" size={24} />}
          title="Location-based matching"
          desc="See people near you in Nairobi, Mombasa, Kisumu, Eldoret and every county."
        />
        <Feature
          icon={<Heart className="text-kenya-red" size={24} />}
          title="Real Kenyan filters"
          desc="Filter by county, tribe, religion, interests, lifestyle and distance."
        />
        <Feature
          icon={<MessageCircle className="text-blue-500" size={24} />}
          title="Chat & connect"
          desc="Match and chat safely. Report tools and verification coming soon."
        />
        <Feature
          icon={<Shield className="text-amber-500" size={24} />}
          title="Built for safety"
          desc="Report system, block tools and community guidelines to keep you safe."
        />
      </div>

      {/* Counties teaser */}
      <div className="bg-brand-800 text-white py-10 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-3">From Nairobi to Lamu</h2>
          <p className="text-brand-100 mb-6">
            Whether you're in the city, the coast, or the highlands — find people who get your vibe.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Kiambu', 'Kilifi', 'Kisii'].map(c => (
              <span key={c} className="bg-brand-700/60 px-3 py-1 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-400 py-8">
        © {new Date().getFullYear()} MatchKenya · Built with ❤️ for Kenya
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <div className="bg-gray-50 p-3 rounded-xl shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}
