export default function Card({ children, variant = 'default', interactive = false, className = '', ...props }) {
  const variants = {
    default: 'bg-pure-white rounded-cards p-6 border border-stone-border',
    dark: 'bg-soot rounded-cards p-6 border border-stone-border/10',
    light: 'bg-pure-white rounded-cards p-6 border border-stone-border',
    ghost: 'bg-transparent rounded-cards p-6 border border-stone-border',
    elevated: 'bg-pure-white rounded-feature-card p-6 shadow-xl',
  }

  const interactiveClass = interactive
    ? 'hover:shadow-md transition-shadow duration-200'
    : ''

  return (
    <div
      className={`${variants[variant]} ${interactiveClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
