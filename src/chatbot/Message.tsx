import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from './hooks/useChat';
import { SourceCard } from './SourceCard';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MessageProps {
  message: ChatMessage;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`chat-message flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 group`}>
      
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0 mr-3 mt-1 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
        </div>
      )}

      <div className="flex flex-col max-w-[78%]">
        <div 
          className={`px-5 py-3.5 ${
            isUser 
              ? 'bg-blue-600 text-white rounded-[20px] rounded-br-sm shadow-sm' 
              : 'bg-white text-slate-700 border border-slate-200 rounded-[20px] rounded-tl-sm shadow-[0_2px_10px_rgba(15,23,42,0.04)]'
          }`}
        >
          <div className={`prose prose-sm max-w-none ${isUser ? 'prose-invert text-white' : 'prose-slate text-slate-700'} prose-p:leading-relaxed prose-a:text-blue-600 font-medium`}>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>
        
        {/* Related Pages (Sources) */}
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-3 ml-2">
            <h5 className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Related Sources</h5>
            <div className="flex flex-col gap-2">
              {message.sources.map((source, i) => (
                <SourceCard key={`${source.slug}-${i}`} source={source} />
              ))}
            </div>
          </div>
        )}

        {/* Smart Actions (Mocked for Enterprise feel) */}
        {!isUser && (
          <div className="mt-3 ml-2 flex flex-wrap gap-2">
            <Link to="/contact" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-[12px] font-semibold text-slate-600 hover:text-blue-700 rounded-full transition-colors">
              <PhoneCall size={12} /> Book Discovery Call
            </Link>
            <Link to="/resources/case-studies" className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-[12px] font-semibold text-slate-600 hover:text-blue-700 rounded-full transition-colors">
              View Case Studies <ArrowRight size={12} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
