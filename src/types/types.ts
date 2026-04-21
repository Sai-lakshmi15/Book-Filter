export interface BookCardProps {
  isbn: string;
  title: string;
  rank: number;
  description: string;
  author: string;
  releaseYear: number;
  genre: string[];
  percentageFit: number;
  cover: string;
}

export interface AiBubbleProps {
  reply: string;
  books: BookCardProps[]
  suggestions: string[];
  // timestamp: Date;
}

export interface UserBubbleProps{
  // userId: string;
  // username: string;
  text: string;
  // timestamp: Date;
}

export interface Message {
  id: string;
  sessionId: string;
  sender: "user" | "chatbot";
  timestamp: Date;
  userId?: string;
  username?: string;
  text?: string;
  reply?: string;
  books?: BookCardProps[];
  suggestions?: string[];
}

export interface ChatBoxProps {
  chatHistory: Message[];
}

export interface ChatFormProps {
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>
}
