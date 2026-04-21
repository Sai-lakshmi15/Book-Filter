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
