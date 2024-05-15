interface IChatMessageProps {
  message: string;
}

const ChatMessage = ({ message }: IChatMessageProps) => {
  return <div className="px-2 py-1 text-sm bg-white text-black rounded-sm shadow-md">{message}</div>;
};

export default ChatMessage;
