'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BetaSignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      if (res.ok) {
        router.push('/beta-download');
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-transparent border border-white/20 rounded-none px-4 py-3 font-sans font-light text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
      />
      <input
        type="text"
        placeholder="Referral code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        className="bg-transparent border border-white/20 rounded-none px-4 py-3 font-sans font-light text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-sans font-light text-sm tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Get beta access'}
      </button>
      {status === 'error' && (
        <p className="font-sans text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
