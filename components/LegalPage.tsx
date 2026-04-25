"use client";

import ReactMarkdown from "react-markdown";

interface LegalPageProps {
  title: string;
  content: string;
}

export default function LegalPage({ title, content }: LegalPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl font-bold mb-12">{title}</h1>
      <div className="prose prose-invert prose-sm max-w-none font-sans font-light leading-relaxed
        prose-headings:font-serif prose-headings:font-semibold prose-headings:text-white
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
        prose-p:text-white/80 prose-p:mb-4
        prose-a:text-white prose-a:underline hover:prose-a:opacity-60
        prose-li:text-white/80
        prose-strong:text-white prose-strong:font-semibold">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
