import { Link } from 'react-router-dom'
import { MessageCircle, Heart } from 'lucide-react'

export default function Matches({ matches }) {
  if (matches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
        <Heart size={48} className="text-gray-300 mb-4" />
        <h2 className="font-display text-xl font-bold text-gray-800 mb-2">No matches yet</h2>
        <p className="text-gray-500 text-sm mb-4">
          Keep swiping on Discover. When someone likes you back, they'll appear here.
        </p>
        <Link to="/discover" className="text-brand-600 font-medium hover:underline">
          Go to Discover →
        </Link>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="font-display text-2xl font-bold text-gray-900 mb-1">Your Matches</h1>
      <p className="text-gray-500 text-sm mb-5">{matches.length} match{matches.length !== 1 ? 'es' : ''}</p>

      <div className="space-y-3">
        {matches.map(match => (
          <Link
            key={match.id}
            to={`/chat/${match.id}`}
            className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <img
              src={match.photos[0]}
              alt={match.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900">{match.name}, {match.age}</h3>
              <p className="text-sm text-gray-500 truncate">{match.town}, {match.county}</p>
              <p className="text-xs text-brand-600 mt-0.5">New match!</p>
            </div>
            <MessageCircle size={22} className="text-brand-500 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}
