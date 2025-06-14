import React, { useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignupForm from '../components/SignupForm';
import { LuLink } from "react-icons/lu";

const Landing: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md ring-1 ring-white/20 transition-transform hover:scale-110">
              <LuLink className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 bg-clip-text text-transparent tracking-tight">
              RedirIQ
            </h2>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl ring-1 ring-white/20 transition-transform hover:scale-105">
                <LuLink className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 bg-clip-text text-transparent mb-4 tracking-tight">
              RedirIQ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
              A modern, smart URL shortener that offers fast redirects combined with detailed analytics and performance scoring
            </p>
          </div>
          {showSignUp ? (
            <SignupForm onSwitchToSignIn={() => setShowSignUp(false)} />
          ) : (
            <SignInForm onSwitchToSignUp={() => setShowSignUp(true)} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Landing; 