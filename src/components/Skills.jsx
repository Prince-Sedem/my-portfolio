import { motion } from 'framer-motion'
import { Code2, Database, Github, Globe2, Layers3, Terminal } from 'lucide-react'
import SectionLabel from './SectionLabel'

const skills = [
  { name: 'React', group: 'Frontend', level: 'Component-driven interfaces' },
  { name: 'JavaScript', group: 'Frontend', level: 'Interactive web experiences' },
  { name: 'Tailwind CSS', group: 'Styling', level: 'Responsive, consistent UI' },
  { name: 'HTML & CSS', group: 'Frontend', level: 'Accessible web foundations' },
  { name: 'Supabase', group: 'Backend', level: 'Database and authentication' },
  { name: 'Git & GitHub', group: 'Workflow', level: 'Version control and collaboration' },
  { name: 'Vite', group: 'Tooling', level: 'Fast modern development' },
  { name: 'Vercel', group: 'Deployment', level: 'Deployment and hosting' },
]

function SkillIcon({ group }) {
  if (group === 'Backend') return <Database size={19} />
  if (group === 'Deployment') return <Globe2 size={19} />
  if (group === 'Workflow') return <Github size={19} />
  if (group === 'Tooling') return <Terminal size={19} />
  if (group === 'Styling') return <Layers3 size={19} />
  return <Code2 size={19} />
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.018]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mb-12 max-w-2xl">
          <SectionLabel>Tools of the trade</SectionLabel>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">My everyday <span className="text-slate-500">toolkit.</span></h2>
          <p className="mt-5 leading-7 text-slate-400">A practical set of technologies for building, shipping, and improving modern web projects.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.045 }} className="group rounded-xl border border-white/10 bg-[#11151d] p-5 transition hover:-translate-y-1 hover:border-lime-300/30">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lime-300 transition group-hover:bg-lime-300 group-hover:text-slate-950"><SkillIcon group={skill.group} /></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">{skill.group}</span>
              </div>
              <h3 className="font-bold text-white">{skill.name}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
