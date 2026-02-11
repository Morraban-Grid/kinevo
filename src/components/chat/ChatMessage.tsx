import React from 'react'
import { ChatMessage as ChatMessageType } from '@/types/chat'

interface ChatMessageProps {
  message: ChatMessageType
  isTyping?: boolean
}

/**
 * ChatMessage represents a single message bubble
 * inside the ChatWidget component.
 */
const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isTyping = false,
}) => {
  return (
    <div
      className={`chat-bubble ${message.role} ${
        isTyping ? 'typing' : ''
      }`}
    >
      {isTyping ? 'Typing...' : message.content}
    </div>
  )
}

export default ChatMessage
