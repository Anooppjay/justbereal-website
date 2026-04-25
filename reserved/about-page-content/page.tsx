export const metadata = {
  title: "About — Just Be Real",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-serif font-bold text-5xl sm:text-6xl">About</h1>

      <hr className="border-white/10" />

      {/* Why we built this */}
      <section className="space-y-6">
        <h2 className="font-serif font-bold text-3xl">Why we built this</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Most apps treat humans like products. Profile photos, swipes, optimized
          timelines, dopamine hits. The platforms make money. The users get
          lonelier.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We built Just Be Real because we believe meeting people is broken —
          and we don&apos;t think the answer is more swipes, more filters, or
          more performance.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* What we believe */}
      <section className="space-y-6">
        <h2 className="font-serif font-bold text-3xl">What we believe</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Authenticity is hard. Apps make it harder. Every prompt asks you to
          perform a version of yourself that doesn&apos;t exist. Every match
          expects you to keep performing.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Real connection requires depth. Depth requires honesty. Honesty
          requires safety. Safety requires accountability.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          So we built an app where:
        </p>
        <ul className="space-y-3 pl-4 border-l border-white/20">
          <li className="font-sans font-light text-base leading-relaxed text-white/80">
            Your AI avatar learns who you actually are, not who you pretend to be
          </li>
          <li className="font-sans font-light text-base leading-relaxed text-white/80">
            Other people meet your avatar before they meet you
          </li>
          <li className="font-sans font-light text-base leading-relaxed text-white/80">
            You set the standard for who gets through
          </li>
          <li className="font-sans font-light text-base leading-relaxed text-white/80">
            Bad behavior has consequences
          </li>
        </ul>
      </section>

      <hr className="border-white/10" />

      {/* What we're not */}
      <section className="space-y-6">
        <h2 className="font-serif font-bold text-3xl">What we&apos;re not</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not a dating app. There is no swipe. There is no rank. There
          is no algorithm pushing you toward people who pay us more.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not your therapist. The AI conversations help you reflect —
          they are not medical advice or crisis support.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not free of trade-offs. Building something this serious means
          saying no to growth hacks, viral mechanics, and engagement bait.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Where we are */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Where we are</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are based in Kochi, Kerala, India. We are independently funded. We
          are a small team building something we hope helps.
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
