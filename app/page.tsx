export const metadata = {
  title: "Just Be Real — Authentic human connections.",
};

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero — full-width image with motto overlay */}
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] bg-[url('/hero.jpg')] bg-cover bg-center flex items-start justify-center pt-[10%]"
      >
        <div className="absolute inset-0 bg-black/50" />
        <p className="relative font-sans font-light text-3xl sm:text-4xl tracking-widest uppercase text-white drop-shadow-md text-center px-6">
          Time to have some real conversations
        </p>
      </div>

      {/* Heading + tagline, centred */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 text-center">
        <h1 className="font-serif font-bold text-7xl sm:text-8xl leading-none tracking-tight mb-6">
          Just Be Real.
        </h1>
        <p className="font-sans font-light text-xl sm:text-2xl tracking-widest uppercase text-white/60">
          Authentic human connections.
        </p>
      </section>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Body */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-16">

        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
            Quality conversations have been at centre stage
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            of civilisation for a while now. It&apos;s how we get to know people. Real convos is how
            we decide if someone is worth your time and energy. The tools that we have to keep us
            connected though, has contributed more to the noise to a point they&apos;re a distraction
            now and real connections seems hard.
          </p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
            We started with the vision of a platform
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            that empowers real conversations. And the ability to connect people based on their
            capacity to hold real conversations. And how much you want to see and be seen..
          </p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
            We then built an AI safety stack
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            that listens deep without moderating and telling you what to do. It learns who you
            actually are without implementing a predatory algorithm to exploit desperation of users.
            Then it does the boring task of finding you people you&apos;d genuinely vibe with and
            dealing with the cold &ldquo;Hey whaddup&rdquo; messages
          </p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-4">
            You stay in control
          </h2>
          <p className="font-sans font-light text-lg leading-relaxed text-white/80">
            You set your own thresholds. You decide who gets through. So that you meet people as who
            they are at where you are. No compromises.
          </p>
          <p className="font-serif font-bold text-3xl sm:text-4xl text-center mt-12">
            Welcome to the world of being Real
          </p>
        </div>

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

    </div>
  );
}
