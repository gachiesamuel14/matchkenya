import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Heart, MessageCircle, User, Compass, LogOut } from 'lucide-react'

export default function Layout({ user, onLogout, matchCount }) {
  const navigate = useNavigate()

  if (!user) return <Outlet />

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => navigate('/discover')} className="font-display font-bold text-xl text-brand-700">
            Match<span className="text-kenya-red">Kenya</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:inline">{user.county || 'Kenya'}</span>
            <button
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-lg mx-auto w-full pb-20">
        <Outlet />
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-lg mx-auto flex justify-around items-center h-16">
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition ${
                isActive ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <Compass size={22} />
            <span className="text-xs font-medium">Discover</span>
          </NavLink>

          <NavLink
            to="/matches"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition relative ${
                isActive ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <div className="relative">
              <Heart size={22} />
              {matchCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-kenya-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {matchCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Matches</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition ${
                isActive ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <User size={22} />
            <span className="text-xs font-medium">Profile</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
