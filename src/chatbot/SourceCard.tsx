import React from 'react';
import { Link } from 'react-router-dom';
import { Document } from './utils/buildIndex';
import { FileText, ArrowRight, LayoutDashboard, Cloud, Globe } from 'lucide-react';

interface SourceCardProps {
  source: Document;
}

export const SourceCard: React.FC<SourceCardProps> = ({ source }) => {
  // Determine icon based on category
  const getIcon = () => {
    switch (source.category) {
      case 'services': return <Cloud size={16} className="text-blue-500" />;
      case 'industries': return <Globe size={16} className="text-indigo-500" />;
      case 'content': return <LayoutDashboard size={16} className="text-emerald-500" />;
      default: return <FileText size={16} className="text-slate-400" />;
    }
  };

  // Determine badge color
  const getBadgeClass = () => {
    switch (source.category) {
      case 'services': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'industries': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case 'content': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <Link 
      to={source.url}
      className="group block bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
            {getIcon()}
          </div>
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {source.title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center justify-center border ${getBadgeClass()}`}>
                {source.category || 'Page'}
              </span>
            </div>
          </div>
        </div>
        <div className="shrink-0 pt-1 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all">
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
};
