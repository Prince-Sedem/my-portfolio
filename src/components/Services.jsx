import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Layers3, MonitorSmartphone } from 'lucide-react'
import SectionLabel from './SectionLabel'

const services = [
  { icon: MonitorSmartphone, title: 'Business websites', text: 'Professional, responsive websites that explain what you do and help customers take the next step.' },
  { icon: Layers3, title: 'Web apps & dashboards', text: 'Useful interfaces for managing content, viewing information, and making everyday workflows easier.' },
  { icon: Globe2, title: 'E-commerce experiences', text: 'Product listings, clear details, and customer-friendly journeys designed around your business.' },
]

function Services() {
  return (
    <section id="services" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><SectionLabel>What I can help with</SectionLabel><h2 className="max-w-xl text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">From first idea to <span className="text-lime-300">live website.</span></h2></div>
        <p className="max-w-sm text-sm leading-7 text-slate-400">Flexible development support for businesses and people who want to make something useful for the web.</p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }} className="group rounded-2xl border border-white/10 bg-[#11151d] p-7 transition hover:-translate-y-1 hover:border-lime-300/30">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/[0.08] text-lime-300"><Icon size={22} /></div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{service.text}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition group-hover:text-lime-300">Discuss a project <ArrowRight size={15} /></a>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
