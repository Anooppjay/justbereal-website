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
        className="bg-[#F2F2F7] border-none rounded-xl px-4 py-3 font-comfortaa text-sm text-black placeholder-black/40 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Referral code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        className="bg-[#F2F2F7] border-none rounded-xl px-4 py-3 font-comfortaa text-sm text-black placeholder-black/40 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-poppins font-semibold text-sm rounded-full bg-black text-white border border-white/20 px-8 py-3 hover:opacity-80 transition-opacity disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Get beta access'}
      </button>
      {status === 'error' && (
        <p className="font-sans text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
