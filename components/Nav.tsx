'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className="w-full border-b border-white/10 relative">
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Just Be Real" width={40} height={40} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-sans font-light tracking-widest uppercase">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:opacity-60 transition-opacity">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden text-2xl leading-none"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col px-6 py-5">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <Image src="/logo.png" alt="Just Be Real" width={40} height={40} priority />
            </Link>
            <button
              className="text-2xl leading-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col gap-8 text-sm font-sans font-light tracking-widest uppercase">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:opacity-60 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
