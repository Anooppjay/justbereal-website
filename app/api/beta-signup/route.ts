import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: 'Email and code required' }, { status: 400 });
    }

    const validCodes = (process.env.VALID_REFERRAL_CODES || '').split(',').map(c => c.trim());
    if (!validCodes.includes(code.trim().toUpperCase())) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 403 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const signup = {
      email: email.trim().toLowerCase(),
      code: code.trim().toUpperCase(),
      timestamp: new Date().toISOString(),
    };

    await kv.lpush('beta_signups', JSON.stringify(signup));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Beta signup error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
