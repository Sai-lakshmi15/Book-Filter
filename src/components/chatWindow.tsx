"use client";
import { useState } from "react";
import { Message } from "@/types/types";
import ChatForm from "./chatForm";
import ChatBox from "./chatBox";

const ChatWindow = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  return (
    <main className="px-20 py-10 flex flex-col gap-6 h-full">
      <div className="flex-1">
        <ChatBox chatHistory={chatHistory}/>
      </div>
      <ChatForm setChatHistory = {setChatHistory}/>
    </main>
  );
};

export default ChatWindow;
