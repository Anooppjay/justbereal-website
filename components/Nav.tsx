import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          justbereal
        </Link>
        <ul className="flex items-center gap-8 text-sm font-sans font-light tracking-widest uppercase">
          <li>
            <Link href="/support" className="hover:opacity-60 transition-opacity">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
