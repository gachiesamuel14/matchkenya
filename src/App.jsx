import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileSetup from './pages/ProfileSetup'
import Discover from './pages/Discover'
import Matches from './pages/Matches'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import { currentUser as defaultUser } from './data/mockUsers'

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('matchkenya_user')
    return saved ? JSON.parse(saved) : null
  })
  const [matches, setMatches] = useState(() => {
    const saved = localStorage.getItem('matchkenya_matches')
    return saved ? JSON.parse(saved) : []
  })
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem('matchkenya_liked')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    if (user) localStorage.setItem('matchkenya_user', JSON.stringify(user))
    else localStorage.removeItem('matchkenya_user')
  }, [user])

  useEffect(() => {
    localStorage.setItem('matchkenya_matches', JSON.stringify(matches))
  }, [matches])

  useEffect(() => {
    localStorage.setItem('matchkenya_liked', JSON.stringify(liked))
  }, [liked])

  const handleLogin = (userData) => {
    setUser({ ...defaultUser, ...userData })
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleLike = (profile) => {
    if (!liked.includes(profile.id)) {
      setLiked([...liked, profile.id])
      // Simulate match ~40% of the time for demo
      if (Math.random() > 0.55) {
        setMatches(prev => {
          if (prev.find(m => m.id === profile.id)) return prev
          return [...prev, { ...profile, matchedAt: new Date().toISOString() }]
        })
      }
    }
  }

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }))
  }

  return (
    <Routes>
      <Route path="/" element={<Landing user={user} />} />
      <Route path="/login" element={user ? <Navigate to="/discover" /> : <Login onLogin={handleLogin} />} />
      <Route path="/register" element={user ? <Navigate to="/profile-setup" /> : <Register onLogin={handleLogin} />} />
      
      <Route element={<Layout user={user} onLogout={handleLogout} matchCount={matches.length} />}>
        <Route path="/profile-setup" element={user ? <ProfileSetup user={user} updateUser={updateUser} /> : <Navigate to="/login" />} />
        <Route path="/discover" element={user ? <Discover user={user} onLike={handleLike} liked={liked} /> : <Navigate to="/login" />} />
        <Route path="/matches" element={user ? <Matches matches={matches} /> : <Navigate to="/login" />} />
        <Route path="/chat/:id" element={user ? <Chat matches={matches} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile user={user} updateUser={updateUser} onLogout={handleLogout} /> : <Navigate to="/login" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
