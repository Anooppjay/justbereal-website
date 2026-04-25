export const metadata = {
  title: "Support — Just Be Real",
};

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-serif font-bold text-5xl sm:text-6xl">Support</h1>

      <p className="font-sans font-light text-lg leading-relaxed text-white/80">
        We&apos;re a small team. We read every message and we respond.
      </p>

      <hr className="border-white/10" />

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Contact</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          For account issues, bug reports, complaints, or general questions:
        </p>
        <a
          href="mailto:email@justbereal.app"
          className="font-sans font-light text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          email@justbereal.app
        </a>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We aim to respond within 72 hours. Usually faster.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* In-app reporting */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">In-app reporting</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          For abusive behavior or content violations, use the Report feature
          inside the app. Reports are reviewed within 72 hours and acted on
          directly.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Privacy and data */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Privacy and data</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Questions about how we handle your data? See our{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/ai-disclosure" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
            AI Data Disclosure
          </a>
          .
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          To export your data, go to{" "}
          <span className="text-white">Settings → Data &amp; Privacy → Export My Data</span>.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          To delete your account, go to{" "}
          <span className="text-white">Settings → Delete Account</span>. All
          your data is permanently erased immediately.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* What we can't help with */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">What we can&apos;t help with</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not a crisis service. If you are in distress, contact emergency
          services or a qualified mental health professional.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not a dating coach. We don&apos;t mediate conflicts between users.
          If you&apos;ve had a negative interaction, use the Report feature.
        </p>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          We are not legal counsel. If you have legal concerns, please consult a
          lawyer.
        </p>
      </section>

      <hr className="border-white/10" />

      {/* Where we are */}
      <section className="space-y-2">
        <h2 className="font-serif font-bold text-3xl">Where we are</h2>
        <p className="font-sans font-light text-base text-white/80">
          Kochi, Kerala, India.
        </p>
      </section>

    </div>
  );
}
