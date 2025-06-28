import { useState } from 'react';
import { toast } from 'sonner';
import { useUrlShortener } from '../hooks/useUrlShortener';
import { Results } from './Results';

export const URLShortenerForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const { mutate: shortenUrl, isPending, error } = useUrlShortener();

  const isValidUrl = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      return;
    }

    if (!isValidUrl(url)) {
      return;
    }

    shortenUrl(url, {
      onSuccess: (data) => {
        setShortUrl(data.slug);
        toast.success("Your URL has been shortened successfully!", {
          duration: 4000,
          icon: '✨'
        });
      },
      onError: () => {
        toast.error("Oops! Failed to shorten the URL. Please try again.", {
          duration: 4000,
          icon: '❌'
        });
      }
    });
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(`http://localhost:3000/${shortUrl}`);
      toast.success("URL copied to clipboard!", {
        duration: 2000,
        icon: '📋'
      });
    } catch {
      toast.error("Failed to copy URL to clipboard", {
        duration: 3000,
        icon: '❌'
      });
    }
  };

  const handleReset = () => {
    setUrl('');
    setShortUrl('');
  };

  const isButtonDisabled = !url.trim() || !isValidUrl(url) || isPending;

  return (
    <div className="space-y-6">
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
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very/long/url/that/needs/shortening"
                className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200/30 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                disabled={isPending}
              />
              {url && !isValidUrl(url) && (
                <p className="mt-2 text-sm text-red-500">Please enter a valid URL!</p>
              )}
            </div>
            
            {error && (
              <div className="text-red-500 text-sm">Failed to shorten URL. Please try again!</div>
            )}

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-800 disabled:bg-gray-400 disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 disabled:hover:bg-gray-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:shadow-indigo-500/25 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none ring-1 ring-white/20 disabled:ring-0"
            >
              {isPending ? (
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

      {shortUrl && (
        <Results
          originalUrl={url}
          shortenedUrl={`http://localhost:3000/${shortUrl}`}
          onCopy={handleCopy}
          onReset={handleReset}
        />
      )}
    </div>
  );
}; 