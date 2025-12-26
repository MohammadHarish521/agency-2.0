"use client";

import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function ChatButton() {
  return (
    <a
      href="#"
      id="chat-button"
      className="fixed z-40 inline-flex items-center gap-3 bg-white border border-gray-200 text-gray-900 pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-1 transition-all group"
      style={{ 
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        left: 'auto',
        top: 'auto'
      }}
    >
      <span className="font-semibold text-xs">Chat with us</span>
      <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
        <HiChatBubbleLeftRight className="w-4 h-4" />
      </div>
    </a>
  );
}

