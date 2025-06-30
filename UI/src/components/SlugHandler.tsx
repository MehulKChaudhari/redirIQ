import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { env } from '../config/env';
import axios from 'axios';

export const SlugHandler = () => {
  const { slug } = useParams<{ slug: string }>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const checkUrl = async () => {
      try {
        await axios.head(`${env.API_BASE_URL}/${slug}`);
        window.location.replace(`${env.API_BASE_URL}/${slug}`);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setNotFound(true);
        } else {
          window.location.replace(`${env.API_BASE_URL}/${slug}`);
        }
      }
    };

    checkUrl();
  }, [slug]);

  if (notFound) {
    return (
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
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
    </div>
  );
}; 