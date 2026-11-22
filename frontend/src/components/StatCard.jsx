import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function StatCard({ title, value, change, note, icon: Icon, tone = 'teal', index = 0 }) {
  const isPositive = !String(change).startsWith('-')
  return <motion.article className="stat-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.055, ease: 'easeOut' }} whileHover={{ y: -3 }}>
    <div className="stat-card-top"><span className={`stat-icon stat-icon-${tone}`}><Icon size={18} strokeWidth={1.8} /></span><span className={`trend ${isPositive ? 'trend-up' : 'trend-down'}`}>{isPositive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{change}</span></div>
    <p className="stat-label">{title}</p><div className="stat-value-row"><strong>{value}</strong><span>{note}</span></div>
  </motion.article>
}