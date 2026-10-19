import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Code2, MessageCircle, Sparkles, Terminal, Zap } from 'lucide-react'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="relative z-10">
        <motion.div variants={reveal} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-slate-300">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" /></span>
          Available for select projects
        </motion.div>
        <motion.p variants={reveal} className="mb-4 font-mono text-sm tracking-wide text-slate-400">HELLO, WORLD. I'M A WEB DEVELOPER.</motion.p>
        <motion.h1 variants={reveal} className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.2rem]">
          I turn ideas into <span className="text-lime-300">digital</span> experiences.
        </motion.h1>
        <motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          I design and build modern, responsive websites that help businesses show up with confidence, connect with people, and move forward.
        </motion.p>
        <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200">Explore my work <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.04]"><MessageCircle size={16} /> Get in touch</a>
        </motion.div>
        <motion.div variants={reveal} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-500">
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Responsive by default</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Thoughtful details</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Built for people</span>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[490px]">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-lime-300/10 via-transparent to-indigo-400/10 blur-xl" />
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#11151d] shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" /></div>
            <span className="font-mono text-[10px] tracking-wider text-slate-500">developer.tsx</span><Terminal size={15} className="text-slate-500" />
          </div>
          <div className="space-y-5 p-6 sm:p-8">
            <div className="font-mono text-xs leading-7 sm:text-sm">
              <p><span className="text-fuchsia-300">const</span> <span className="text-sky-300">developer</span> = {'{'}</p>
              <p className="pl-5"><span className="text-slate-400">name:</span> <span className="text-lime-200">'Prince Sedem'</span>,</p>
              <p className="pl-5"><span className="text-slate-400">focus:</span> <span className="text-lime-200">'Web development'</span>,</p>
              <p className="pl-5"><span className="text-slate-400">tools:</span> [</p>
              <p className="pl-10 text-sky-200">'React', 'React Native', 'Tailwind CSS',</p>
              <p className="pl-10 text-sky-200">'JavaScript', 'Supabase', 'Python'</p>
              <p className="pl-5">],</p>
              <p className="pl-5"><span className="text-slate-400">mindset:</span> <span className="text-lime-200">'Always learning'</span></p><p>{'}'}</p>
            </div>
            <div className="rounded-xl border border-lime-300/15 bg-lime-300/6 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-lime-200"><Sparkles size={14} /> CURRENT FOCUS</div>
              <p className="text-sm leading-6 text-slate-400">Turning complex ideas into clear, useful, and polished web experiences.</p>
            </div>
            <div className="grid grid-cols-3 gap-2">{['DESIGN', 'BUILD', 'REFINE'].map((item, i) => <div key={item} className="rounded-lg border border-white/10 px-2 py-3 text-center"><span className="mb-1 block font-mono text-[10px] text-slate-600">0{i + 1}</span><span className="text-[10px] font-bold tracking-widest text-slate-300">{item}</span></div>)}</div>
          </div>
        </div>
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-5 top-24 hidden rounded-2xl border border-white/10 bg-[#171c25] p-3 shadow-xl sm:block"><Code2 size={22} className="text-lime-300" /></motion.div>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-4 bottom-20 hidden rounded-2xl border border-white/10 bg-[#171c25] p-3 shadow-xl sm:block"><Zap size={22} className="text-indigo-300" /></motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
