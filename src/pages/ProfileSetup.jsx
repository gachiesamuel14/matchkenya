import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KENYAN_COUNTIES, INTERESTS, TRIBES, RELIGIONS } from '../data/mockUsers'
import { MapPin } from 'lucide-react'

export default function ProfileSetup({ user, updateUser }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    age: user.age || '',
    county: user.county || '',
    town: user.town || '',
    bio: user.bio || '',
    tribe: user.tribe || '',
    religion: user.religion || '',
    interests: user.interests || [],
  })
  const [locating, setLocating] = useState(false)
  const [locationMsg, setLocationMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleInterest = (interest) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest].slice(0, 6)
    }))
  }

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationMsg('Geolocation not supported by your browser')
      return
    }
    setLocating(true)
    setLocationMsg('Getting your location...')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        updateUser({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        })
        setLocationMsg(`Location saved! (±${Math.round(pos.coords.accuracy)}m)`)
        setLocating(false)
      },
      (err) => {
        setLocationMsg('Could not get location. You can still continue.')
        setLocating(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser({
      ...form,
      age: Number(form.age) || 25,
    })
    navigate('/discover')
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="font-display text-2xl font-bold text-gray-900 mb-1">Complete your profile</h1>
      <p className="text-gray-500 text-sm mb-6">This helps us find better matches near you.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              min="18"
              max="80"
              value={form.age}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Town / Area</label>
            <input
              name="town"
              value={form.town}
              onChange={handleChange}
              placeholder="e.g. Westlands"
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
          <select
            name="county"
            value={form.county}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            required
          >
            <option value="">Select county...</option>
            {KENYAN_COUNTIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={3}
            maxLength={200}
            placeholder="Tell people a bit about yourself..."
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">{form.bio.length}/200</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tribe (optional)</label>
            <select
              name="tribe"
              value={form.tribe}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            >
              <option value="">Prefer not to say</option>
              {TRIBES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
            <select
              name="religion"
              value={form.religion}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
            >
              <option value="">Prefer not to say</option>
              {RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Interests (up to 6)</label>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                  form.interests.includes(interest)
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-brand-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={18} className="text-brand-600" />
            <span className="font-medium text-gray-800">Enable location</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            We use your location only to show nearby people. You can change this later.
          </p>
          <button
            type="button"
            onClick={requestLocation}
            disabled={locating}
            className="bg-white border border-brand-200 text-brand-700 font-medium px-4 py-2 rounded-lg text-sm hover:bg-brand-50 transition disabled:opacity-50"
          >
            {locating ? 'Locating...' : 'Share my location'}
          </button>
          {locationMsg && <p className="text-xs text-gray-500 mt-2">{locationMsg}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition shadow-md"
        >
          Start Matching
        </button>
      </form>
    </div>
  )
}
