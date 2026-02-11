import ChatMessage from './ChatMessage'
import React, { useState } from 'react'
import { mockInsights } from '@/data/mockInsights'
import { ChatMessage } from '@/types/chat'


/**
 * ChatWidget simulates an AI assistant interaction.
 * This is a UI-only component and does not connect to any backend service.
 */
const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-1',
      role: 'assistant',
      content:
        'Hello! I’m your Kinevo assistant. How can I support your training today?',
      timestamp: new Date(),
    },
  ])

  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulated assistant reply
    setTimeout(() => {
      const randomInsight =
        mockInsights[Math.floor(Math.random() * mockInsights.length)]

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: randomInsight.message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="chat-widget">
      <div className="chat-messages">
        {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
        ))}


        {isTyping && (
            <ChatMessage
                message={{
                    id: 'typing',
                    role: 'assistant',
                    content: '',
                    timestamp: new Date(),
                }}
                isTyping
            />
        )}

      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask your assistant..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default ChatWidget
