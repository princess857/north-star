import { Button } from './ui/primitives'

export default function PageHeader({ eyebrow, title, description, action, actionIcon: ActionIcon, onAction }) {
  return <div className="page-heading"><div><div className="breadcrumb"><span>Northstar</span><span className="breadcrumb-separator">/</span><span>{eyebrow}</span></div><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <Button onClick={onAction} className="page-heading-action">{ActionIcon && <ActionIcon size={16} />}{action}</Button>}</div>
}