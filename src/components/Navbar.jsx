import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0b0d12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/30 bg-lime-300/10 text-lime-300 transition group-hover:bg-lime-300 group-hover:text-slate-950">
            <Code2 size={21} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-white">DEV<span className="text-lime-300">/</span>FOLIO</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.16em] text-slate-500">INDEPENDENT DEVELOPER</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-lime-300">{label}</a>
          ))}
          <a href="#contact" className="rounded-full border border-lime-300/50 px-5 py-2.5 text-sm font-semibold text-lime-200 transition hover:bg-lime-300 hover:text-slate-950">
            Let’s talk <ArrowUpRight className="ml-1 inline" size={15} />
          </a>
        </div>

        <button className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-lime-300">{label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
