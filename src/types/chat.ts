/**
 * Represents the role of a message in the chat UI.
 */
export type ChatRole = 'user' | 'assistant'

/**
 * Represents a single chat message displayed in the UI.
 */
export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
  timestamp: Date
}

/**
 * Represents the state of the chat interface.
 * This is UI-only and does not imply real AI processing.
 */
export interface ChatState {
  messages: ChatMessage[]
  isTyping: boolean
}
