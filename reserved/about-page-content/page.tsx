export const metadata = {
  title: "About — Just Be Real",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-serif font-bold text-5xl sm:text-6xl">About</h1>

      <hr className="border-white/10" />

      {/* Why we built this */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Why we built this</h2>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          Social media, dating, networking and matrimony apps — Users everywhere are treated like products. Profile photos, swipes, optimized feeds and timelines, attempts to impress, validation and dopamine hits. The platforms deploys ethically questionable strategies to make money. The users gets disenchanted and are missing depth and warmth of human connections.
        </p>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          Just Be Real is built because we believe meeting people could be fun again if things are kept real. And we need to have some real conversations about topics that actually matters and affects us all. Everyone deserves respect and the chances to be happy — and the answer is not more swipes, more filters, or more performance.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* What we believe */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">What we believe</h2>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          Authenticity is hard. But its exactly what makes it all worth the trust we offer when you meet someone. If you&apos;re not expected to perform a version of yourself that doesn&apos;t exist, you exist unapologetically as who you are.
        </p>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          Real connection requires depth. Depth requires honesty. Honesty requires safety. Safety requires accountability.
        </p>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          So we built an app where:
        </p>
        <ul className="space-y-4 pl-4 border-l border-white/20">
          <li className="font-sans font-light text-xl leading-relaxed text-white/80">
            Your AI avatar captures who you actually are, not who you perform to be
          </li>
          <li className="font-sans font-light text-xl leading-relaxed text-white/80">
            Other people meet your avatar before they meet you
          </li>
          <li className="font-sans font-light text-xl leading-relaxed text-white/80">
            You set the standard for who gets through
          </li>
          <li className="font-sans font-light text-xl leading-relaxed text-white/80">
            Bad behavior has consequences
          </li>
        </ul>
      </section>

      <hr className="border-white/10" />

      {/* What we're not */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">What we&apos;re not</h2>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          We are not a dating app. There is no swipe. There is no rank. There is no algorithm pushing you toward people who pay us more.
        </p>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          We are not your therapist. The AI conversations help you reflect — they are not medical advice or crisis support. You hold yourself responsible and your responsibility.
        </p>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          We are not free of trade-offs. Building something this serious means saying no to growth hacks, viral mechanics, and engagement bait.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Where we are */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Where we are</h2>
        <p className="font-sans font-light text-xl leading-relaxed text-white/80">
          Based in Kochi, Kerala, India. This is a single person operation building something that hopefully helps without seeking corporate funding or investment.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Contact</h2>
        <a
          href="mailto:email@justbereal.app"
          className="font-sans font-light text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          email@justbereal.app
        </a>
      </section>

    </div>
  );
}
