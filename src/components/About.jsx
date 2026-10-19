import { motion } from 'framer-motion'
import { Terminal, Code2, Sparkles } from 'lucide-react'
import SectionLabel from './SectionLabel'

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28"
    >
      {/* LEFT SIDE — INTRODUCTION */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <SectionLabel>A little about me</SectionLabel>

        <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
          Curious by nature.
          <br />
          <span className="text-lime-300">Builder by choice.</span>
        </h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
              <Terminal size={22} />
            </div>

            <div>
              <p className="font-semibold text-white">My approach</p>
              <p className="mt-1 text-xs text-slate-500">
                Understand · Build · Improve
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Good websites should look great, work reliably, and make life
            easier for the people using them.
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDE — ANIMATED PHOTO FRAME */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto w-full max-w-md"
      >
        {/* Background glow */}
        <div className="absolute -inset-5 rounded-[2rem] bg-lime-300/10 blur-3xl" />

        {/* Floating photo frame */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          {/* Animated outer border */}
          <div className="absolute -inset-[2px] overflow-hidden rounded-[2rem]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,#d9f99d_130deg,#a3e635_180deg,transparent_240deg,transparent_360deg)]"
            />
          </div>

          {/* Image container */}
          <div className="relative m-[2px] overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#101510] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-lime-300/10 via-[#111713] to-black">
              <img
                src="/images/portfolio-profile.jpg"
                alt="Portrait of the developer"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Photo caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-300">
                    The Developer
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Turning ideas into reality.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lime-300/30 bg-black/40 text-lime-300 backdrop-blur-md">
                  <Code2 size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating status badge */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-5 top-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111713]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Creative Developer
              </p>
              <p className="text-xs text-slate-400">
                Design · Code · Create
              </p>
            </div>
          </motion.div>

          {/* Decorative corner detail */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-2xl border border-lime-300/20" />
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE — ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="space-y-5 text-base leading-8 text-slate-400 lg:col-start-1 lg:row-start-2"
      >
        <p className="text-xl leading-9 text-slate-200">
          I'm a web developer who enjoys turning ideas into useful digital
          experiences.
        </p>

        <p>
          I work across the frontend and enjoy bringing together clean
          interfaces, responsive layouts, thoughtful interactions, and
          practical functionality. I care about the small details that make
          a website feel intuitive, not just attractive.
        </p>

        <p>
          From a business website to a more interactive web application, I
          like understanding the problem first and choosing tools that help
          deliver a solid solution.
        </p>

        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          <div className="border-l border-lime-300/50 pl-4">
            <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
              01 / Purpose
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Build around real user needs.
            </p>
          </div>

          <div className="border-l border-lime-300/50 pl-4">
            <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
              02 / Craft
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Sweat the details and keep learning.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
