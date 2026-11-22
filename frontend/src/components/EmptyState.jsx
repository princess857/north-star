import { SearchX } from 'lucide-react'
import { Button } from './ui/primitives'

export default function EmptyState({ title = 'No students found', description = 'Try adjusting your search or filters.', onReset }) {
  return <div className="empty-state"><span className="empty-state-icon"><SearchX size={21} /></span><h3>{title}</h3><p>{description}</p>{onReset && <Button variant="secondary" size="small" onClick={onReset}>Clear filters</Button>}</div>
}