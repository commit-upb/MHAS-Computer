export default function SectionHeader({ eyebrow, title, description, align = 'center', dark = false, className = '' }) {
  const alignClass = align === 'center' ? 'text-center' : ''
  const titleColor = dark ? 'text-pure-white' : 'text-ink-black'
  const descColor = dark ? 'text-pure-white/60' : 'text-warm-gray'
  const eyebrowColor = dark ? 'text-pure-white/50' : 'text-warm-gray'

  return (
    <div className={`${alignClass} mb-16 ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`heading-lg ${titleColor} mb-6`}>{title}</h2>
      {description && (
        <p className={`subheading ${descColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
