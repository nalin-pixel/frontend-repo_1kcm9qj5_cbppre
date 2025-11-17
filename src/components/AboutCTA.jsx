export default function AboutCTA() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Operator-led, outcomes-obsessed</h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              We’ve shipped inside venture-backed startups and public companies. Our model blends hands-on execution with
              lean strategy. Less decks, more systems. We embed with your team, build the pipeline, and measure impact in ARR.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">PLG motion</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">Messaging & Narrative</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">RevOps</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">Outbound</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">Investor updates</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Get a free teardown</h3>
              <p className="mt-2 text-sm text-slate-600">Share your site and funnel. We’ll send back 3-5 concrete moves to lift conversion.</p>
              <form className="mt-6 grid gap-3">
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
                <input type="email" placeholder="Work email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
                <input type="url" placeholder="Company website" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Request teardown</button>
              </form>
              <p className="mt-3 text-xs text-slate-500">No spam. We’ll reply within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
