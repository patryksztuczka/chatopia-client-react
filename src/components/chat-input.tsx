import { ComponentProps } from "react";

interface IChatInputProps extends ComponentProps<"input"> {}

const ChatInput = ({ type, value, onChange }: IChatInputProps) => {
  return <input type={type} placeholder="Aa" value={value} onChange={onChange} className="w-full px-4 text-black" />;
};

export default ChatInput;
