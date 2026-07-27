import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Paperclip, Sparkles, RefreshCcw, LayoutTemplate, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { useChat } from './hooks/useChat';
import { Message } from './Message';

interface ChatWindowProps {
  onClose: () => void;
  isOpen: boolean;
}

const SUGGESTED_QUESTIONS = [
  'Oracle Cloud Migration',
  'Compare Oracle vs NetSuite',
  'Healthcare Solutions',
  'Manufacturing ERP',
  'Retail Cloud',
  'Industries you support',
  'Book Discovery Call'
];

const LOADING_STATUSES = [
  'Searching Knowledge Base...',
  'Analyzing your request...',
  'Finding the best answer...',
  'Preparing response...'
];

export const ChatWindow: React.FC<ChatWindowProps> = ({ onClose, isOpen }) => {
  const [input, setInput] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const loadingTimer = useRef<number | null>(null);
  const suggestionContainerRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: scrollContainerRef.current.scrollHeight, behavior });
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    const isNearBottom = distanceFromBottom < 120;
    setShowScrollButton(!isNearBottom);
    setIsAtBottom(isNearBottom);
  };

  useEffect(() => {
    if (isLoading) {
      loadingTimer.current = window.setInterval(() => {
        setLoadingIndex((current) => (current + 1) % LOADING_STATUSES.length);
      }, 1800);
    }
    return () => {
      if (loadingTimer.current) {
        window.clearInterval(loadingTimer.current);
        loadingTimer.current = null;
      }
      setLoadingIndex(0);
    };
  }, [isLoading]);

  useEffect(() => {
    if (messages.length === 0) return;
    if (isAtBottom) {
      scrollToBottom('smooth');
    }
  }, [messages.length, isAtBottom]);

  useEffect(() => {
    if (!isOpen || messages.length === 0) return;
    const lastMessage = scrollContainerRef.current?.querySelector('.chat-message:last-child');
    if (lastMessage) {
      const ctx = gsap.context(() => {
        gsap.fromTo(lastMessage,
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.32, ease: 'power2.out' }
        );
      }, scrollContainerRef);
      return () => ctx.revert();
    }
  }, [messages.length, isOpen]);

  // Focus trap and Body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseRequest();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);

      setTimeout(() => inputRef.current?.focus(), 320);
      setTimeout(() => scrollToBottom('auto'), 100);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // GSAP Entry Animation
  useEffect(() => {
    if (isOpen) {
      const isMobile = window.innerWidth < 768;
      const ctx = gsap.context(() => {

        // Overlay Animation
        if (overlayRef.current) {
          gsap.fromTo(overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        }

        // Chat Window Animation
        if (windowRef.current) {
          if (isMobile) {
            gsap.fromTo(windowRef.current,
              { opacity: 0, scale: 0.98 },
              { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
            );
          } else {
            gsap.fromTo(windowRef.current,
              { y: 16, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" }
            );
          }
        }

        // Suggestion Chips Animation
        const suggestionChips = suggestionContainerRef.current?.querySelectorAll('.suggestion-chip');
        if (messages.length === 0 && suggestionChips?.length) {
          gsap.fromTo(suggestionChips,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.03, ease: "power2.out", delay: 0.2 }
          );
        }
      }, windowRef);

      return () => ctx.revert();
    }
  }, [isOpen, messages.length]);

  const handleCloseRequest = () => {
    if (input.trim()) {
      if (window.confirm("Are you sure you want to close? Your message will be lost.")) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
      setTimeout(() => scrollToBottom('smooth'), 150);
    }
  };

  const handleSuggestionClick = (question: string) => {
    if (!isLoading) {
      sendMessage(question);
      setTimeout(() => scrollToBottom('smooth'), 150);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay Modal */}
      <div
        ref={overlayRef}
        onClick={handleCloseRequest}
        className="fixed inset-0 w-[100vw] h-[100vh] bg-slate-900/45 backdrop-blur-[6px] z-[1900] transition-opacity duration-300"
      />

      {/* Chat Window */}
      <div
        ref={windowRef}
        className="fixed inset-0 md:inset-auto md:bottom-[24px] md:right-[24px] w-full h-full md:w-[420px] md:h-[720px] md:max-h-[calc(100vh-140px)] bg-white md:border border-black/[0.06] shadow-[0_40px_100px_rgba(15,23,42,0.18)] md:rounded-[28px] flex flex-col z-[2000] overflow-hidden transform-gpu"
      >
        {/* Header (Fixed) */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white z-20 shrink-0 sticky top-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-[15px] tracking-tight leading-none mb-1">Dimension Consulting AI Consultant</h3>
              <p className="text-slate-500 text-[12px] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 relative">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50"></span>
                </span>
                Using Dimension Consulting Knowledge Base
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={clearChat}
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors group"
              title="New Chat"
            >
              <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            </button>
            <button
              onClick={handleCloseRequest}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages Area (Scrollable) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-6 scroll-smooth bg-slate-50/80 relative custom-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', overscrollBehavior: 'contain' }}
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.35); border-radius: 9999px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.7); }
            .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(59,130,246,0.35) transparent; }
          `}</style>

          {messages.length === 0 ? (
            <div className="flex flex-col h-full items-center justify-center text-center max-w-[90%] mx-auto pb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[28px] bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-6 shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
                <LayoutTemplate size={30} />
              </div>
              <h2 className="text-slate-900 font-semibold text-[28px] mb-3 tracking-tight">Welcome to Dimension Consulting AI</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-[420px]">
                Enterprise AI guidance for Oracle, ERP, AI, and digital transformation. Start with a suggested question below.
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
              ))}

              {/* Multi-stage loading indicator */}
              {isLoading && (
                <div className="flex justify-start mb-6">
                  <div className="bg-white border border-slate-200 rounded-[24px] px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] flex flex-col gap-2 min-w-[240px] animate-fade-in">
                    <span className="text-slate-500 text-[13px] font-medium">{LOADING_STATUSES[loadingIndex]}</span>
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-blue-600 rounded-full animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="text-left p-4 mb-4 bg-red-50 border border-red-100 rounded-3xl text-red-600 text-[13px] font-medium shadow-sm">
                  <div className="font-semibold mb-1">Unable to fetch a response.</div>
                  <div>{error}</div>
                  <div className="mt-2 text-slate-500 text-[12px]">Try rephrasing the question or check your connection.</div>
                </div>
              )}
              <div ref={messagesEndRef} className="h-[24px]" />
            </div>
          )}
        </div>

        {/* Scroll to Bottom Button */}
        {showScrollButton && (
          <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={scrollToBottom}
              className="w-8 h-8 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowDown size={16} />
            </button>
          </div>
        )}

        {/* Sticky Suggested Prompts (Horizontal Scroll) */}
        <div ref={suggestionContainerRef} className="bg-white border-t border-slate-100 shrink-0 z-20 overflow-x-auto py-4 px-4 custom-scrollbar relative">
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white pointer-events-none" />
          <div className="flex gap-3 overflow-x-auto scrollbar-none py-1 pl-2 pr-2">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(q)}
                className="suggestion-chip shrink-0 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-[13px] font-semibold rounded-full border border-slate-200 hover:border-blue-200 transition-all duration-200 shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Input Area */}
        <div className="p-4 bg-white z-20 shrink-0 sticky bottom-0">
          <form onSubmit={handleSubmit} className="relative flex items-end gap-2 bg-slate-50 border border-slate-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:bg-white rounded-[24px] p-1.5 transition-all duration-300">
            <button
              type="button"
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors shrink-0"
              disabled={isLoading}
            >
              <Paperclip size={18} />
            </button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Oracle, ERP, AI, Industries..."
              disabled={isLoading}
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 py-2 text-[14px] focus:outline-none disabled:opacity-50 min-h-[40px]"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="inline-flex items-center justify-center min-w-[52px] min-h-[52px] rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] shadow-[0_12px_30px_rgba(37,99,235,0.22)] transition-transform duration-200 disabled:opacity-50 disabled:shadow-none disabled:hover:bg-blue-600"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400 font-medium">AI Consultant can make mistakes. Verify important info.</span>
          </div>
        </div>
      </div>
    </>
  );
};
