import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-sans text-xs font-light tracking-widest uppercase text-white/40">
          © {new Date().getFullYear()} Just Be Real · Made in Kochi
        </p>
        <ul className="flex items-center gap-6 text-xs font-sans font-light tracking-widest uppercase text-white/40">
          <li>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/ai-disclosure" className="hover:text-white transition-colors">
              AI Disclosure
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
