import { UserBubbleProps } from "@/types/types";

const UserBubble: React.FC<UserBubbleProps> = ({ text }) => {
  return (
    <div className="bg-black rounded-full px-3 py-2 w-fit">
      <p className="text-white text-semibold">{text}</p>
    </div>
  );
};

export default UserBubble;
