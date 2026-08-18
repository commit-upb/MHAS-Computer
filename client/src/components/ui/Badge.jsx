export default function Badge({ children, variant = 'accent', icon: Icon, className = '' }) {
  const variants = {
    accent: 'bg-cyan-signal text-ink-black',
    neutral: 'bg-soot text-pure-white',
    light: 'bg-sky-wash text-cyan-edge',
    outline: 'bg-transparent text-ink-black border border-stone-border',
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-tags body-sm font-medium ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </span>
  )
}
