import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

function ContactCTA() {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-lime-300/20 bg-gradient-to-br from-lime-300/[0.12] via-[#151a20] to-indigo-400/[0.08] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-lime-300/10 blur-[90px]" />
        <div className="relative">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-lime-300"><Sparkles size={22} /></span>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime-300">Have something in mind?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">Let's build something <span className="text-lime-300">worth using.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">Have a business idea, a website to improve, or a project you want to bring to life? Let's talk about it.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200">Start a conversation <ArrowUpRight size={16} /></a>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactCTA
