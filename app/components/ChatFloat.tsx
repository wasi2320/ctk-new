"use client";

import React, { useState } from "react";
import ChatModal from "@/app/components/ChatModal";
import ChatToggle from "@/app/components/ChatToggle";

const ChatFloat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
      <ChatToggle onToggle={toggleChat} isOpen={isChatOpen} />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ChatFloat;
