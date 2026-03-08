import { Tag } from './Tag'
export function TagList({ items }: Readonly<{ items: string[] }>) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((s) => (
        <Tag key={s}>{s}</Tag>
      ))}
    </div>
  )
}
