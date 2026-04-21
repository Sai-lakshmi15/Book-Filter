import AiBubble from "./aiBubble";
import UserBubble from "./userBubble";
import { ChatBoxProps } from "@/types/types";

const ChatBox: React.FC<ChatBoxProps> = ({ chatHistory }) => {
  return (
    <div className="flex flex-col gap-5">
      {chatHistory.map((chat) => (
        <div
          key={chat.id}
          className={`flex w-full gap-5 ${chat.sender == "user" ? "justify-end" : "justify-start"}`}
        >
          {chat.sender == "user" ? (
            <UserBubble text={chat.text ?? ""} />
          ) : (
            <AiBubble
              reply={chat.reply ?? ""}
              suggestions={chat.suggestions ?? []}
              books={chat.books ?? []}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
