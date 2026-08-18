export default function StatCard({ icon: Icon, value, label, dark = false }) {
  const bg = dark ? 'bg-soot border border-pure-white/10' : 'bg-pure-white border border-stone-border'
  const valueColor = dark ? 'text-pure-white' : 'text-ink-black'
  const labelColor = dark ? 'text-pure-white/50' : 'text-warm-gray'
  const iconColor = dark ? 'text-cyan-signal' : 'text-cyan-signal'

  return (
    <div className={`${bg} rounded-cards p-5 text-center transition-all duration-300 hover:shadow-md`}>
      <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center ${iconColor}`}>
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <p className={`heading-sm ${valueColor} mb-1`}>{value}</p>
      <p className={`caption ${labelColor}`}>{label}</p>
    </div>
  )
}
