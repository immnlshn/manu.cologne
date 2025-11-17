import type { ReactNode } from 'react'
import { Tag } from './Tag'

export function TagList({ items }: { items: ReactNode[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((s, i) => (
        <Tag key={i}>{s}</Tag>
      ))}
    </div>
  )
}

