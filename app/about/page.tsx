export const metadata = {
  title: "About — Just Be Real",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-oswald text-4xl sm:text-5xl uppercase tracking-widest">About</h1>

      <hr className="border-white/10" />

      {/* Why we built this */}
      <section className="space-y-4">
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl">Why we built this</h2>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          Social media, dating apps networking apps — Users everywhere are treated like products. Platforms deploys ethically questionable strategies to generate revenue and ensure engagement. Profile photos, swipes, optimized feeds and timelines, attempts to impress, validation and dopamine hits. The users gets disenchanted and are missing depth and warmth of human connections. And some of us are just done dealing with all the crap
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          Just Be Real is built because of the firm belief meeting people could still be fun if things are kept real. And we need to have some conversations about topics that actually matters. Everyone deserves respect and the chances to be happy — and the answer is not more swipes, AI forcefully inserted into every aspect of life or more performance directed at volume. Its real human one on one connections
        </p>
      </section>

      <hr className="border-white/10" />

      {/* What we believe */}
      <section className="space-y-4">
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl">What we believe</h2>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          Authenticity is hard. But its exactly what makes it all worth the trust we offer when you meet someone. When you&apos;re not expected to perform an ideal version of yourself, you exist unapologetically as who you are.
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          Real connection requires depth. Depth requires honesty. Honesty requires safety. Safety requires accountability.
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          So we built an app where:
        </p>
        <ul className="space-y-4 pl-4 border-l border-white/20">
          <li className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
            You train your AI avatar with parameters about how you express yourself in public interactions and let it be your gate.
          </li>
          <li className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
            Other users meet your avatar before they meet you. You set the standard for what levels are acceptable for you.
          </li>
        </ul>
      </section>

      <hr className="border-white/10" />

      {/* What we're not */}
      <section className="space-y-4">
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl">What we&apos;re not</h2>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          We are not another dating app. Not a character AI service. There is no ranking or popularity contest. There is no algorithm pushing you toward people who pay more. There&apos;s no pressure to perform.
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          We are not your therapist. The AI algorithms that you train doesn&apos;t scavenge your personal information to profile you. We are not providing medical advice or crisis support. You hold yourself responsible and handle your own responsibility. The service isn&apos;t trying to replace real human connection with an AI assisted service.
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          We don&apos;t think we are innovating the best possible path for human evolution, the solution for all problems or that this is the way of future. We are simply filling a gap thats currently getting wider.
        </p>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          It may not be free of trade-offs. Building something this serious means saying no to growth hacks, viral mechanics, and engagement bait. But we will keep getting better. Because we believe humans are awesome. We just need to sit down and have some serious conversations about topics that actually matters, before giving people our energy to ensure they don&apos;t waste our time.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Where we are */}
      <section className="space-y-4">
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl">Where we are</h2>
        <p className="font-comfortaa text-lg sm:text-xl leading-relaxed text-white/80">
          Based in Kochi, Kerala, India. This is a single person operation building something that hopefully helps, without selling out or seeking corporate investment.
        </p>
      </section>

    </div>
  );
}
