import { LuCopy, LuExternalLink } from 'react-icons/lu';

interface ResultsProps {
  originalUrl: string;
  shortenedUrl: string;
  onCopy: () => void;
  onReset: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  originalUrl,
  shortenedUrl,
  onCopy,
  onReset,
}) => {
  if (!shortenedUrl) return null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 animate-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-blue-50/30 to-indigo-50/40"></div>
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-full flex items-center justify-center ring-1 ring-white/30">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Your shortened URL</span>
          </h3>
          <button
            onClick={onReset}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hover:bg-gray-100 px-3 py-1 rounded-lg"
          >
            Create another
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
            <p className="text-sm font-medium text-gray-600 mb-2">Original URL:</p>
            <p className="text-gray-800 break-all">{originalUrl}</p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 rounded-2xl border border-indigo-200/50 ring-1 ring-indigo-100/50">
            <p className="text-sm font-semibold text-indigo-700 mb-2">Shortened URL</p>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <p className="text-indigo-800 font-mono text-sm md:text-lg flex-1 break-all transition-colors duration-300 selection:bg-indigo-100">{shortenedUrl}</p>
              <div className="flex gap-2 shrink-0">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-800 text-white p-2 md:p-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 ring-1 ring-white/20"
                  title="Open link in new tab"
                >
                  <LuExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </a>
                <button
                  onClick={onCopy}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-800 text-white p-2 md:p-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 ring-1 ring-white/20"
                  title="Copy to clipboard"
                >
                  <LuCopy className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 