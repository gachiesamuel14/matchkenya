import { useState } from 'react'
import { MapPin, Edit2, LogOut } from 'lucide-react'
import { KENYAN_COUNTIES, INTERESTS } from '../data/mockUsers'

export default function Profile({ user, updateUser, onLogout }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ ...user })

  const handleSave = () => {
    updateUser(form)
    setEditing(false)
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={() => setEditing(!editing)}
          className="flex items-center gap-1.5 text-sm text-brand-600 font-medium"
        >
          <Edit2 size={16} />
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {/* Avatar placeholder */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-brand-100 flex items-center justify-center text-3xl font-bold text-brand-700 mb-3">
          {user.name?.charAt(0)?.toUpperCase() || '?'}
        </div>
        <h2 className="text-xl font-semibold">{user.name}, {user.age || '—'}</h2>
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <MapPin size={14} />
          {user.town || '—'}, {user.county || 'Kenya'}
        </div>
      </div>

      {editing ? (
        <div className="space-y-4 bg-white rounded-2xl border border-gray-100 p-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 px-3 py-2 border rounded-xl"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={form.bio || ''}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded-xl resize-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">County</label>
            <select
              value={form.county || ''}
              onChange={(e) => setForm({ ...form, county: e.target.value })}
              className="w-full mt-1 px-3 py-2 border rounded-xl"
            >
              {KENYAN_COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-brand-600 text-white font-semibold py-2.5 rounded-xl"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-1">About</h3>
            <p className="text-gray-800">{user.bio || 'No bio yet'}</p>
          </div>

          {user.interests?.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.map(i => (
                  <span key={i} className="bg-brand-50 text-brand-700 text-sm px-3 py-1 rounded-full">{i}</span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-100 p-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">Tribe</span>
              <p className="font-medium">{user.tribe || '—'}</p>
            </div>
            <div>
              <span className="text-gray-500">Religion</span>
              <p className="font-medium">{user.religion || '—'}</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onLogout}
        className="mt-8 w-full flex items-center justify-center gap-2 text-red-600 font-medium py-3 rounded-xl border border-red-100 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Log out
      </button>
    </div>
  )
}
