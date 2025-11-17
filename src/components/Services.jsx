import { Rocket, PenTool, Workflow, LineChart, UsersRound } from 'lucide-react'

const services = [
  {
    title: 'Ideation',
    description: 'Strategy sprints to unlock new value props, refine ICPs, and prioritize the right bets.',
    icon: Rocket,
  },
  {
    title: 'Branding',
    description: 'Identity systems built for credibility: naming, visual design, narrative and messaging.',
    icon: PenTool,
  },
  {
    title: 'Operation management',
    description: 'Lightweight operating cadence, workflows, and dashboards that reduce drag and improve output.',
    icon: Workflow,
  },
  {
    title: 'Growth & Revenue Systems',
    description: 'Lifecycle funnels, content engines, and outbound programs tuned to pipeline and ARR.',
    icon: LineChart,
  },
  {
    title: 'Buyer & Investor Support',
    description: 'Data rooms, sales enablement, and narrative to accelerate deals and capital raises.',
    icon: UsersRound,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-4 text-slate-600">Full-stack growth partnership for product-led SaaS from 0 to 1 and 1 to n.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
