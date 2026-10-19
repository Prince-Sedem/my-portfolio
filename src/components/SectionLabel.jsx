function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-lime-300">
      <span className="h-px w-7 bg-lime-300/70" />
      {children}
    </div>
  )
}

export default SectionLabel
