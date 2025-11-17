const clients = [
  { name: 'Acme Cloud', logo: 'AC' },
  { name: 'LinearFlow', logo: 'LF' },
  { name: 'NovaStack', logo: 'NS' },
  { name: 'Beacon AI', logo: 'BAI' },
  { name: 'DataForge', logo: 'DF' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Trusted by forward-thinking SaaS teams</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {clients.map((c) => (
            <div key={c.name} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white text-sm font-semibold">
                {c.logo}
              </div>
              <p className="text-xs font-medium text-slate-600">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
