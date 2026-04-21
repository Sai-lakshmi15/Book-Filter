"use client";
import { useState, useRef } from "react";
import { Send } from "lucide-react";
import { ChatFormProps, Message } from "@/types/types";

const ChatForm: React.FC<ChatFormProps> = ({ setChatHistory }) => {
  const [prompt, setPrompt] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    console.log(userMessage);
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sessionId: "session-1",
      sender: "user",
      timestamp: new Date(),
      text: userMessage,
    };
    setChatHistory((prev) => [...prev, newMessage]);
    const aiMessage: Message = {
  id: crypto.randomUUID(),
  sessionId: "session-1",
  sender: "chatbot",
  timestamp: new Date(),

  reply: `Here are some books you might enjoy based on your interest in romance and strong male leads:`,

  suggestions: [
    "More books with billionaire heroes",
    "Enemies to lovers romance",
    "Slow burn love stories",
  ],

  books: [
    {
      title: "The Fine Print",
      author: "Lauren Asher",
      description: "A grumpy billionaire meets a determined woman working at his theme park.",
      releaseYear: 2022,
      genre: ["Romance", "Contemporary"],
      percentageFit: 92,
      cover: "https://covers.openlibrary.org/b/id/123456-L.jpg",
      rank: 1,
      isbn: "9781737507710",
    },
    {
      title: "King of Wrath",
      author: "Ana Huang",
      description: "A powerful CEO enters a forced engagement that turns into something deeper.",
      releaseYear: 2022,
      genre: ["Romance", "Drama"],
      percentageFit: 89,
      cover: "https://covers.openlibrary.org/b/id/234567-L.jpg",
      rank: 2,
      isbn: "9780349434285",
    },
  ],
};
  setChatHistory((prev) => [...prev, aiMessage]);
    setPrompt("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={prompt}
        ref={inputRef}
        onChange={handleChange}
        placeholder="Type your prompt here..."
        className="border-2 border-black rounded-l-xl w-full h-12 p-2 focus:outline-none"
      />
      <button type="submit" className="bg-black h-12 w-12 rounded-r-xl p-2">
        <Send className="text-white hover:scale-110" />
      </button>
    </form>
  );
};

export default ChatForm;
