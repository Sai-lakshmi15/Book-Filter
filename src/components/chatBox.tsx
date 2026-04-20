import { Send } from "lucide-react";

const ChatBox = () => {
  return (
    <main className="px-20 py-10 flex flex-col h-full">
      <div className="flex-1"></div>
      <div className="flex">
        <input
          type="text"
          className="border-2 border-black rounded-l-xl w-full h-12 p-2 focus:outline-none"
        />
        <button className="bg-black h-12 w-12 rounded-r-xl p-2">
          <Send className="text-white hover:scale-110" />
        </button>
      </div>
    </main>
  );
};

export default ChatBox;
