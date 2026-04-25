export const metadata = {
  title: "How It Works — Just Be Real",
};

export default function HowItWorks() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

      <h1 className="font-serif font-bold text-5xl sm:text-6xl">How it works</h1>

      <hr className="border-white/10" />

      <section className="space-y-4">
        <h2 className="font-serif font-bold text-3xl">Logic Gate</h2>
        <p className="font-sans font-light text-base leading-relaxed text-white/80">
          Logic Gate is an optional feature in coffee chats. If activated, AI
          analyzes your conversation and produces a report on communication
          patterns. Useful for accountability. Especially useful for spotting
          manipulation.
        </p>
      </section>

    </div>
  );
}
