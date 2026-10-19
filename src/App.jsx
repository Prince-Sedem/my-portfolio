import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import ContactCTA from './components/ContactCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0d12] text-slate-100 selection:bg-lime-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.16] grid-texture" />
      <div className="pointer-events-none fixed -left-44 top-36 z-0 h-96 w-96 rounded-full bg-lime-300/10 blur-[130px]" />
      <div className="pointer-events-none fixed -right-48 top-[38rem] z-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/10 blur-[150px]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <ContactCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
