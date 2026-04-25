export const metadata = {
  title: "About — Just Be Real",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-serif font-bold text-5xl sm:text-6xl">About</h1>

      <hr className="border-white/10" />

      <section className="space-y-4">
        <p className="font-sans font-light text-lg leading-relaxed text-white/80">
          Your data is yours — export or delete anytime.
        </p>
      </section>

      <hr className="border-white/10" />

      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">What it&apos;s not</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Not a dating app. Not therapy. Not a social network. Not a
          productivity tool.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          It&apos;s a space to be honest about who you are and find people who
          can meet you there.
        </p>
      </section>

    </div>
  );
}
