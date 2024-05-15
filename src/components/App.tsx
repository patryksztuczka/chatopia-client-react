import { useState, useEffect } from "react";

import { socket } from "../socket";
import ChatInput from "./chat-input";
import Button from "./button";
import ChatMessage from "./chat-message";

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("message:create", message);
    setMessages([...messages, message]);
    setMessage("");
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
      <h1 className="text-center font-bold text-xl">Messages</h1>
      <div className="flex-1 flex gap-3 flex-col p-3 justify-end items-end bg-purple-600/10">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <form className="flex gap-4 px-5" onSubmit={sendMessage}>
        <ChatInput type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button type="submit" value="Send" />
      </form>
    </div>
  );
};

export default App;
