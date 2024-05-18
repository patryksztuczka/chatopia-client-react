import { useEffect, useState } from "react";

import { socket } from "../../libs/socketio/config";
import ChatMessage from "../chat-message";
import ChatInput from "../chat-input";
import Button from "../button";
import { supabase } from "../../libs/supabase/config";

const ChatPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("message:create", message);
    setMessages([...messages, message]);
    setMessage("");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    socket.disconnect();
  };

  useEffect(() => {
    function receiveMessage(msg: string) {
      setMessages([...messages, msg]);
    }

    socket.on("message:emit", receiveMessage);

    return () => {
      socket.off("message:emit", receiveMessage);
    };
  }, [messages]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div className="h-dvh flex flex-col justify-between gap-6 py-5">
      <div className="relative">
        <h1 className="text-center font-bold text-xl">Messages</h1>
        <div className="absolute top-1/2 -translate-y-1/2 right-6" onClick={signOut}>
          X
        </div>
      </div>
      <div className="flex-1 flex gap-3 flex-col p-3 justify-end items-end bg-purple-600/10">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <form className="flex gap-4 px-5" onSubmit={sendMessage}>
        <ChatInput type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ChatPage;
