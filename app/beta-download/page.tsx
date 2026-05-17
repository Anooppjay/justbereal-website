export const dynamic = 'force-dynamic';

export default function BetaDownloadPage() {
  const apkUrl = process.env.BETA_APK_URL || '#';

  return (
    <div className="bg-black text-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="font-serif font-bold text-5xl sm:text-6xl mb-6">
          Welcome to the beta
        </h1>
        <p className="font-sans font-light text-xl text-white/80 mb-12">
          Thanks for joining. Real conversations start here.
        </p>

        <a
          href={apkUrl}
          className="inline-block font-sans font-light text-sm tracking-widest uppercase border border-white/20 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-colors mb-16"
        >
          Download APK
        </a>

        <div className="mb-12">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-6">
            How to install on Android
          </h2>
          <ol className="font-sans font-light text-xl text-white/80 space-y-3 list-decimal list-inside">
            <li>Tap the Download APK button above</li>
            <li>When prompted, allow installation from this source</li>
            <li>Open the downloaded file and install</li>
            <li>Launch Just Be Real</li>
          </ol>
        </div>

        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-6">Beta notes</h2>
          <p className="font-sans font-light text-xl text-white/80 mb-3">
            This is an early build. Expect bugs and incomplete features.
          </p>
          <p className="font-sans font-light text-xl text-white/80">
            Share feedback at{' '}
            <a href="mailto:justberealtest@gmail.com" className="underline underline-offset-4">
              justberealtest@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
