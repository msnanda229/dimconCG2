import React, { useState } from 'react';
import { FloatingButton } from './FloatingButton';
import { ChatWindow } from './ChatWindow';
import { useKnowledge } from './hooks/useKnowledge';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isReady } = useKnowledge();

  return (
    <>
      <FloatingButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(true)} 
        isReady={isReady} 
      />
      <ChatWindow 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};

export default ChatBot;
