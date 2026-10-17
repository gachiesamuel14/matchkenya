import { useState, useMemo } from 'react'
import { mockUsers } from '../data/mockUsers'
import { Heart, X, MapPin, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Discover({ user, onLike, liked }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    maxDistance: 100,
    county: '',
    minAge: 18,
    maxAge: 45,
  })

  const available = useMemo(() => {
    return mockUsers.filter(u => {
      if (liked.includes(u.id)) return false
      if (filters.county && u.county !== filters.county) return false
      if (u.age < filters.minAge || u.age > filters.maxAge) return false
      if (u.distance > filters.maxDistance) return false
      return true
    })
  }, [liked, filters])

  const current = available[index]

  const handleSwipe = (likedPerson) => {
    if (!current) return
    setDirection(likedPerson ? 1 : -1)
    if (likedPerson) onLike(current)
    setTimeout(() => {
      setIndex(prev => prev + 1)
      setDirection(0)
    }, 250)
  }

  if (!current) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-6 text-center">
        <div className="text-6xl mb-4">💚</div>
        <h2 className="font-display text-xl font-bold text-gray-800 mb-2">No more profiles nearby</h2>
        <p className="text-gray-500 text-sm mb-4">
          Try adjusting your filters or check back later as more people join.
        </p>
        <button
          onClick={() => { setIndex(0); setShowFilters(true) }}
          className="text-brand-600 font-medium hover:underline"
        >
          Adjust filters
        </button>
      </div>
    )
  }

  return (
    <div className="relative h-[calc(100vh-8rem)] flex flex-col">
      {/* Filters toggle */}
      <div className="px-4 pt-3 pb-2 flex justify-between items-center">
        <h2 className="font-semibold text-gray-800">Discover near you</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm text-brand-600 font-medium"
        >
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="mx-4 mb-3 bg-white rounded-xl border border-gray-200 p-4 space-y-3 shadow-sm">
          <div>
            <label className="text-xs font-medium text-gray-500">Max distance: {filters.maxDistance} km</label>
            <input
              type="range"
              min="5"
              max="500"
              value={filters.maxDistance}
              onChange={(e) => setFilters({ ...filters, maxDistance: Number(e.target.value) })}
              className="w-full accent-brand-600"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-gray-500">Min age</label>
              <input
                type="number"
                value={filters.minAge}
                onChange={(e) => setFilters({ ...filters, minAge: Number(e.target.value) })}
                className="w-full px-2 py-1.5 border rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500">Max age</label>
              <input
                type="number"
                value={filters.maxAge}
                onChange={(e) => setFilters({ ...filters, maxAge: Number(e.target.value) })}
                className="w-full px-2 py-1.5 border rounded-lg text-sm"
              />
            </div>
          </div>
          <button
            onClick={() => setShowFilters(false)}
            className="w-full text-sm bg-brand-600 text-white py-2 rounded-lg"
          >
            Apply
          </button>
        </div>
      )}

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ scale: 0.95, opacity: 0, x: direction * 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, x: direction * -200 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="relative h-80 sm:h-96 bg-gray-200">
              <img
                src={current.photos[0]}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-2xl font-bold">{current.name}, {current.age}</h3>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <MapPin size={14} />
                  {current.town}, {current.county} · {current.distance} km away
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">{current.bio}</p>
              
              <div className="flex flex-wrap gap-1.5">
                {current.interests.map(i => (
                  <span key={i} className="bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {i}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 text-xs text-gray-500">
                {current.tribe && <span>{current.tribe}</span>}
                {current.religion && <span>· {current.religion}</span>}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-6 py-5">
        <button
          onClick={() => handleSwipe(false)}
          className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-red-300 hover:text-red-500 shadow-md transition active:scale-95"
        >
          <X size={28} />
        </button>
        <button
          onClick={() => handleSwipe(true)}
          className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-300 hover:bg-brand-700 transition active:scale-95"
        >
          <Heart size={30} fill="currentColor" />
        </button>
      </div>
    </div>
  )
}
