import React from 'react';
import { KeyRound } from 'lucide-react';

interface VerificationCodeProps {
  code: string;
  setCode: (value: string) => void;
  onVerify: () => void;
  isLoading: boolean;
}

export function VerificationCode({ code, setCode, onVerify, isLoading }: VerificationCodeProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <KeyRound className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter verification code"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          pattern="[0-9]*"
          maxLength={6}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || code.length < 6}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </button>
    </form>
  );
}