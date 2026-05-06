import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization');

  const unauthorized = () =>
    new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
    });

  if (!auth || !auth.startsWith('Basic ')) return unauthorized();

  const decoded = atob(auth.split(' ')[1]);
  const pass = decoded.split(':').slice(1).join(':');

  if (pass !== process.env.ADMIN_PASSWORD) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
