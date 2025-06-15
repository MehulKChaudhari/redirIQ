interface URLShortenerFormProps {
  onSubmit: (url: string) => Promise<void>;
  isLoading: boolean;
  originalUrl: string;
  onUrlChange: (url: string) => void;
}

export const URLShortenerForm: React.FC<URLShortenerFormProps> = ({
  onSubmit,
  isLoading,
  originalUrl,
  onUrlChange,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(originalUrl);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-blue-50/30"></div>
      <div className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-3">
              Enter your long URL
            </label>
            <input
              id="url"
              type="url"
              value={originalUrl}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="https://example.com/very/long/url/that/needs/shortening"
              className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200/30 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !originalUrl.trim()}
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:shadow-indigo-500/25 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] ring-1 ring-white/20"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Shortening...</span>
              </div>
            ) : (
              "Shorten URL"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}; 