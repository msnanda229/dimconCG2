import React, { useRef, useState } from 'react';
import { Sparkles, MessageSquareText } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
  isReady: boolean;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, isOpen, isReady }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={!isReady}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center bg-white border border-slate-200 shadow-[0_20px_40px_rgba(15,23,42,0.12)] rounded-full transition-all duration-500 overflow-hidden group ${
        !isReady ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:shadow-[0_30px_60px_rgba(15,23,42,0.2)] hover:-translate-y-1'
      } ${isHovered ? 'w-[280px] p-2' : 'w-[64px] h-[64px] justify-center'}`}
      style={{
        boxShadow: isHovered 
          ? '0 30px 60px rgba(37,99,235,0.15), 0 0 0 1px rgba(0,0,0,0.05)' 
          : '0 20px 40px rgba(15,23,42,0.12), 0 0 0 1px rgba(0,0,0,0.05)'
      }}
    >
      <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isHovered ? 'bg-blue-50' : 'bg-blue-600'}`}>
        {isHovered ? (
          <Sparkles className="w-5 h-5 text-blue-600" />
        ) : (
          <MessageSquareText className="w-6 h-6 text-white" />
        )}
      </div>

      <div 
        className={`flex flex-col items-start ml-3 whitespace-nowrap transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none'
        }`}
      >
        <span className="text-[14px] font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Dimension Consulting AI Consultant
        </span>
        <span className="text-[12px] text-slate-500 font-medium mt-0.5">
          Ask about Oracle, AI, ERP
        </span>
      </div>

      {isReady && !isHovered && (
        <span className="absolute top-2 right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
        </span>
      )}
    </button>
  );
};
