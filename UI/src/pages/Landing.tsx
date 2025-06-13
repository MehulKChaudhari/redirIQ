import React, { useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignupForm from '../components/SignupForm';

const Landing: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold">Landing Page</h1>
    </div>
  );
};

export default Landing; 