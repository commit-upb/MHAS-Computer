export default function IconButton({ icon: Icon, label, variant = 'circle', size = 'md', dark = true, className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const variants = {
    circle: `${sizes[size]} rounded-full`,
    pill: 'btn-pill btn-sm',
  }

  const colors = dark
    ? 'bg-ink-black text-pure-white hover:bg-soot'
    : 'bg-pure-white text-ink-black hover:bg-canvas border border-stone-border'

  return (
    <button
      type="button"
      className={`${variants[variant]} ${colors} flex items-center justify-center transition-colors duration-200 ${className}`}
      aria-label={label}
    >
      <Icon size={size === 'sm' ? 14 : 16} />
      {variant === 'pill' && <span className="text-sm">{label}</span>}
    </button>
  )
}
