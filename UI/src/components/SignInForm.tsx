import React, { useState } from 'react';

interface SignInFormProps {
  onSwitchToSignUp: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-stone-50/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-stone-200/30">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-orange-50/10 rounded-2xl pointer-events-none" />
      <div className="relative z-10">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            className="px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/80 placeholder-stone-400 shadow-sm"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/80 placeholder-stone-400 shadow-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-blue-800 transition disabled:opacity-60 cursor-pointer"
            type="submit"
            disabled={submitting}
          >
            Sign in
          </button>
          <div className="text-center text-sm text-stone-600">
            <span>Don't have an account? </span>
            <button
              type="button"
              className="text-amber-600 hover:text-amber-700 hover:underline font-medium cursor-pointer"
              onClick={onSwitchToSignUp}
            >
              Sign up instead
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <hr className="flex-1 border-stone-300" />
          <span className="mx-3 text-sm text-stone-500">or</span>
          <hr className="flex-1 border-stone-300" />
        </div>
        <button
          className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-blue-800 transition cursor-pointer"
          type="button"
          onClick={() => console.log('Sign in anonymously')}
        >
          Sign in anonymously
        </button>
      </div>
    </div>
  );
};

export default SignInForm; 