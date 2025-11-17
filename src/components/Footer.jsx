export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900">Bizmark Studio</p>
            <p className="text-xs text-slate-600">Growth partner for SaaS teams</p>
          </div>
          <div className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Bizmark Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-xs font-medium text-slate-600 hover:text-slate-900">LinkedIn</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="text-xs font-medium text-slate-600 hover:text-slate-900">X</a>
            <span className="text-slate-300">•</span>
            <a href="mailto:hello@bizmark.studio" className="text-xs font-medium text-slate-600 hover:text-slate-900">hello@bizmark.studio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
