import { Code2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-wide text-slate-300"><Code2 size={16} className="text-lime-300" /> DEV/FOLIO</a>
        <p>Designed with intent. Built for the web.</p>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
