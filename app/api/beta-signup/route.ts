import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

export async function POST(req: NextRequest) {
  let client;
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

    client = createClient({ url: process.env.REDIS_URL });
    await client.connect();
    await client.lPush('beta_signups', JSON.stringify(signup));
    await client.disconnect();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Beta signup error:', err);
    if (client) {
      try { await client.disconnect(); } catch {}
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
