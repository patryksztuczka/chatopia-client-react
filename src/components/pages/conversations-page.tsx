import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import clsx from 'clsx';

import { socket } from '../../libs/socketio/config';
import { useSession } from '../../context/auth-context';
import ConversationsList from '../conversations-list';
import ChatWindow from '../chat-window';
import { currentConversationAtom } from '../../atoms/conversation';
import { Separator } from '../ui/separator';

const ChatPage = () => {
  const session = useSession();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const [currentConversation] = useAtom(currentConversationAtom);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit('message:create', message);
    setMessages([...messages, message]);
    setMessage('');
  };

  useEffect(() => {
    function receiveMessage(msg: string) {
      setMessages([...messages, msg]);
    }

    socket.on('message:emit', receiveMessage);

    return () => {
      socket.off('message:emit', receiveMessage);
    };
  }, [messages]);

  useEffect(() => {
    if (!session) return;

    socket.auth = { token: session.access_token };

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [session]);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   socket.on("connection", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);

  return (
    <div className="flex">
      <ConversationsList />
      <Separator orientation="vertical" className="hidden sm:block" />
      <ChatWindow />
      {/* <div
        className={clsx(
          'h-full flex-1 sm:h-fit sm:max-w-80 sm:flex-none',
          currentConversation != null ? 'hidden sm:block' : 'sm:block',
        )}
      >
        <ConversationsList />
      </div> */}
    </div>
  );
};

export default ChatPage;
