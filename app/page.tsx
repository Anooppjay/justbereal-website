import BetaSignupForm from './components/BetaSignupForm';

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
        <p className="relative font-oswald text-2xl sm:text-3xl tracking-widest uppercase text-white drop-shadow-md text-center px-6">
          What do you seek, human?
        </p>
      </div>

      {/* Heading + tagline, centred */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24 text-center">
        <h1 className="font-outfit font-bold text-7xl sm:text-8xl leading-none tracking-tight mb-1">
          Just Be Real.
        </h1>
        <span className="inline-block bg-white/30 backdrop-blur-md rounded-full shadow-xl border border-white/40 px-8 py-3 font-sacramento text-4xl sm:text-5xl text-white">
          authentic human connections.
        </span>
      </section>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Body — 7 sections */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-20">

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            Conversations has been at centre stage
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            of civilisation for a while now. It&apos;s how we used to know people, express ourselves, learn, play, debate, fight, love, care, inspire, build communities and experience the journey of the outwards world.. Conversations bring humans together and remains one of the most beautiful expressions of humanity. The tools that we developed to keep us connected though, has contributed more to the isolation of the individual lately, at scale. In a carefully crafted bubble of feed made by exploitative algorithms thats trying to monetise every tiny bit of information they can find about you and suggest your next purchase or subscription, You get uninspired, disconnected..
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            You don&apos;t know whats real anymore
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            and you&apos;re tired of this shit across platforms. You don&apos;t have time or energy for fake and shallow interactions. You&apos;ve already started dreaming about a peaceful life on a cozy mountain top/beach cabin with a dog. You cant be bothered enough to be constantly worrying something is AI or not. And what kind of unhealed issue you&apos;re dealing with, in the next interesting human you&apos;re coming across.
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            The hopeful part is, theres still nothing else like a good conversation with someone you actually vibe with and trust
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            We needed to bring back the trust. The key, apparently is actually very simple: Accountability in interactions. We need spaces that celebrates unmoderated expression and freedom. We also need these spaces to remain safe for everyone. We need to bring the change we so desperately need and do it together.
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            It started with the vision of a platform
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            that empowers real connections through real communication. A new platform that addresses all these challenges without sucking the life out of the process. A platform upholding user privacy. Operate using minimal device access &amp; user data tracking but engaging with participation and intend instead. With the ability to connect people based on their capacity to hold real conversations and how much they prefer to see and be seen..
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            They say all AI is not bad
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            So we built an AI safety stack that might actually turn out to be the best usage of AI - To cut the noise out.
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            How?
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            An avatar that represents individual users by training on their own activity, how they show up on topics that matters. Your avatar then does the screening process for you. All those tricky conversations you wished you had way earlier with people that showed their true colors? - already covered. And thats where the AI stops
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl mb-6">
            You stay in control
          </h2>
          <p className="font-open-sans text-lg sm:text-xl leading-relaxed text-white/80">
            The platform then just does the boring task of finding people you&apos;d genuinely vibe with, based on your preferences and the thresholds you set for your presence. You decide who gets through. You meet people as who they are, at where you are. No compromises. So You don&apos;t have to deal with the cold meaningless &ldquo;Hey whaddup&rdquo; messages. So you spend your time exactly how you want to, being exactly who you are. So that when you actually talk with someone, you can be present, not worried about paying salaries to all those guards you&apos;ve employed over the years to protect you. So that when you live, you&apos;re actually living..
          </p>
        </div>

      </section>

      {/* Closing block */}
      <div className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <p className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
          Welcome to the world of being Real
        </p>
        <p className="font-open-sans text-lg sm:text-xl text-white/80">
          Let&apos;s make meeting strangers fun and exciting again
        </p>
        <p className="font-oswald text-2xl sm:text-3xl tracking-widest uppercase text-white drop-shadow-md text-center mt-4">
          Let&apos;s have some real conversations
        </p>
      </div>

      <hr className="border-white/10 max-w-3xl mx-auto" />

      {/* Beta signup — Block 1: image banner with overlay */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-[url('/hero2.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="relative text-center px-8 py-8 max-w-2xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">For the pathfinders of change</h2>
          <p className="font-sans font-light text-2xl leading-relaxed text-white/90">
            The light bringers who still believes in magic:
          </p>
          <p className="font-sans font-light text-2xl leading-relaxed text-white/90 mt-4">
            Real connections start somewhere, lets begin by igniting those conversations you feel are must have&apos;s
          </p>
        </div>
      </div>

      {/* Beta signup — Block 2: form */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex justify-center">
        <BetaSignupForm />
      </section>

    </div>
  );
}
