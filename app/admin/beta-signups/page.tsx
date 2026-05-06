import { createClient } from 'redis';

export const dynamic = 'force-dynamic';

export default async function BetaSignupsPage() {
  const client = createClient({ url: process.env.REDIS_URL });
  await client.connect();
  const signups = await client.lRange('beta_signups', 0, -1);
  await client.disconnect();
  const parsed = signups.map((s: any) =>
    typeof s === 'string' ? JSON.parse(s) : s
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-serif mb-6">Beta Signups ({parsed.length})</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/30">
            <th className="py-2 pr-4">Timestamp</th>
            <th className="py-2 pr-4">Email</th>
            <th className="py-2">Code</th>
          </tr>
        </thead>
        <tbody>
          {parsed.map((s: any, i: number) => (
            <tr key={i} className="border-b border-white/10">
              <td className="py-2 pr-4">{new Date(s.timestamp).toLocaleString()}</td>
              <td className="py-2 pr-4">{s.email}</td>
              <td className="py-2">{s.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
