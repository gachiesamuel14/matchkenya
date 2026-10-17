import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'

export default function Chat({ matches }) {
  const { id } = useParams()
  const match = matches.find(m => m.id === Number(id))
  const [messages, setMessages] = useState([
    { id: 1, from: 'them', text: `Hey! Nice to match with you 😊`, time: 'Just now' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!match) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Match not found</p>
        <Link to="/matches" className="text-brand-600 mt-2 inline-block">Back to matches</Link>
      </div>
    )
  }

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages(prev => [...prev, {
      id: Date.now(),
      from: 'me',
      text: input.trim(),
      time: 'Just now'
    }])
    setInput('')

    // Mock reply
    setTimeout(() => {
      const replies = [
        'That sounds great!',
        'Haha true 😂',
        'Would love to know more',
        'Same here!',
        'We should meet for coffee sometime',
        'Karibu! How’s your week going?'
      ]
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        from: 'them',
        text: replies[Math.floor(Math.random() * replies.length)],
        time: 'Just now'
      }])
    }, 1200 + Math.random() * 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white sticky top-0">
        <Link to="/matches" className="p-1.5 -ml-1.5 rounded-full hover:bg-gray-100">
          <ArrowLeft size={20} />
        </Link>
        <img src={match.photos[0]} alt={match.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h2 className="font-semibold text-gray-900">{match.name}</h2>
          <p className="text-xs text-gray-500">{match.town}, {match.county}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.from === 'me'
                  ? 'bg-brand-600 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-3 border-t border-gray-100 bg-white flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
        />
        <button
          type="submit"
          className="w-11 h-11 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  )
}
