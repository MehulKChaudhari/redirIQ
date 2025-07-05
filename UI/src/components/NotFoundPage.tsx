import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen py-8 px-4">
    <div className="space-y-8 max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center mb-6">
        <Link to="/" className="w-96 h-48 rounded-2xl flex items-center justify-center">
          <img
            src="/assets/redirIQ.png"
            alt="RedirIQ"
            aria-label="RedirIQ - Smart URL Shortener"
            role="img"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">404 - Link Not Found</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The shortened URL you're looking for doesn't exist or has expired.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 ring-1 ring-white/20"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </div>
); 