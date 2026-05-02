export const metadata = {
  title: "Just Be Real â€” Authentic human connections.",
};

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="font-serif italic font-light text-2xl sm:text-3xl text-white/80 mb-10">
          Time to have some real conversations
        </p>
        <h1 className="font-serif font-bold text-7xl sm:text-8xl leading-none tracking-tight mb-6">
          Just Be Real.
        </h1>
        <p className="font-sans font-light text-xl sm:text-2xl tracking-widest uppercase text-white/60">
          Authentic human connections.
        </p>
      </section>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Body */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
        <p className="font-sans font-light text-lg leading-relaxed text-white/80">
          This is not a dating app. This is a space to find people you actually
          vibe with â€” based on who you are, not how you swipe.
        </p>
        <p className="font-sans font-light text-lg leading-relaxed text-white/80">
          We built an AI that listens deep. It learns who you actually are
          through conversation. Then it does the boring work of finding people
          you&apos;d genuinely connect with.
        </p>
        <p className="font-sans font-light text-lg leading-relaxed text-white/80">
          You stay in control. You set your own thresholds. You decide who gets
          through.
        </p>
      </section>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="font-sans font-light text-sm tracking-widest uppercase text-white/40 mb-8">
          Coming soon to Google Play Store.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md">
          <input
            type="email"
            placeholder="Get notified when we launch"
            className="flex-1 bg-transparent border border-white/20 rounded-none px-4 py-3 font-sans font-light text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            className="font-sans font-light text-sm tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Notify me
          </button>
        </form>
      </section>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Three values */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-20">

        <div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
            Honesty over performance.
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            Most apps reward you for performing. This one rewards you for being real.
          </p>
        </div>

        <hr className="border-white/10" />

        <div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
            Depth over volume.
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            You don&apos;t need a thousand matches. You need one or two who actually see you.
          </p>
        </div>

        <hr className="border-white/10" />

        <div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
            Power to decide.
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            You set the bar. People only get through if they meet it.
          </p>
        </div>

      </section>

    </div>
  );
}
