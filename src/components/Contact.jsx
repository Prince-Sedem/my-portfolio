import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import SectionLabel from './SectionLabel'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.07] bg-white/[0.018]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Have a project?<br /><span className="text-lime-300">Let's talk.</span></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">Tell me a little about what you're working on. Share the idea, the challenge, or even just the starting point.</p>
          <div className="mt-9 space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-lime-300"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"><Mail size={18} /></span><span><span className="block text-xs text-slate-500">Email me</span><span className="mt-1 block">hello@example.com</span></span><ArrowUpRight size={16} className="ml-auto text-slate-500" /></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-lime-300"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"><MessageCircle size={18} /></span><span><span className="block text-xs text-slate-500">Prefer WhatsApp?</span><span className="mt-1 block">Send me a message</span></span><ArrowUpRight size={16} className="ml-auto text-slate-500" /></a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-lime-300/30 hover:text-lime-300"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-lime-300/30 hover:text-lime-300"><Linkedin size={18} /></a>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-[#11151d] p-6 sm:p-8">
          <div className="mb-7 flex items-center justify-between"><h3 className="text-lg font-bold text-white">Send an enquiry</h3><span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">CONTACT / 001</span></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-xs font-medium text-slate-400">Your name<input required name="name" placeholder="Jane Doe" className="form-input mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-lime-300/60" /></label>
            <label className="block text-xs font-medium text-slate-400">Email address<input required type="email" name="email" placeholder="jane@example.com" className="form-input mt-2 w-full rounded-xl border border-white/10 bg-[#0b0d12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-lime-300/60" /></label>
          </div>
          <label className="mt-5 block text-xs font-medium text-slate-400">What do you have in mind?<textarea required name="message" rows="5" placeholder="Tell me a little about your project..." className="form-input mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0b0d12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-lime-300/60" /></label>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-lime-200 sm:w-auto">Send message <ArrowUpRight size={16} /></button>
          {submitted && <p className="mt-4 text-xs leading-5 text-lime-200">Your email app should open with your message. Update the placeholder email address in the code before publishing.</p>}
          <p className="mt-4 text-xs leading-5 text-slate-600">This form opens the visitor's default email app. It does not send submissions through a backend service.</p>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
