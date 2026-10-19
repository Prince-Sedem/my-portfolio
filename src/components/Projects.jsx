import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionLabel from './SectionLabel'

const projects = [
  {
    number: '01',
    title: 'Hanguk Autos',
    type: 'Automotive · E-commerce',
    description: 'A premium pre-owned car experience with searchable inventory, detailed vehicle pages, and a streamlined path for buyers to enquire.',
    stack: ['React', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85',
    accent: 'from-amber-300/25 via-orange-400/10 to-transparent',
    url: 'https://hanguk-autos.vercel.app/shop',
    github: '',
  },
  {
    number: '02',
    title: 'Abib Travela & Tour',
    type: 'Travel · Booking experience',
    description: 'A destination-led travel website designed to make discovering experiences and sending booking enquiries feel simple.',
    stack: ['React', 'Tailwind CSS', 'WhatsApp'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',
    accent: 'from-emerald-300/25 via-teal-400/10 to-transparent',
    url: '',
    github: '',
  },
  {
    number: '03',
    title: 'Digital storefront',
    type: 'Concept · Online business',
    description: 'A clean storefront concept focused on product discovery, clear details, and a frictionless browsing experience.',
    stack: ['React', 'Vite', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
    accent: 'from-violet-300/25 via-fuchsia-400/10 to-transparent',
    url: '',
    github: '',
  },
]

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.018]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><SectionLabel>Selected work</SectionLabel><h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">A few things I've <span className="text-slate-500">worked on.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">A selection of web experiences, from business websites to interactive digital products.</p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: index * 0.08 } } }} className={`project-card group overflow-hidden rounded-2xl border border-white/10 bg-[#11151d] ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
              <div className={`relative min-h-[230px] overflow-hidden ${index === 0 ? 'lg:min-h-[350px]' : 'h-56'}`}>
                <div className={`absolute inset-0 z-10 bg-gradient-to-br ${project.accent} mix-blend-screen`} />
                <img src={project.image} alt={`${project.title} project preview`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#11151d]/75 via-transparent to-black/10" />
                <span className="absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 font-mono text-[10px] text-white backdrop-blur">{project.type}</span>
                <span className="absolute bottom-5 right-5 z-20 font-mono text-sm text-white/80">{project.number}</span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] text-slate-300">{tech}</span>)}</div>
                <div className="mt-7 flex items-center gap-4">
                  {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:gap-3">View live project <ArrowUpRight size={16} /></a> : <span className="text-xs text-slate-500">Add live project link</span>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="text-slate-400 transition hover:text-white"><Github size={17} /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-600">Replace sample project images, descriptions, and links with your final project details before publishing.</p>
      </div>
    </section>
  )
}

export default Projects
