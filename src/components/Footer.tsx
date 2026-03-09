import { hero } from '../content'

export function Footer() {
  return (
    <footer
      className="relative py-10"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span
          className="text-sm"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          © {new Date().getFullYear()}{' '}
          <span style={{ fontFamily: 'var(--font-display)', fontVariationSettings: '"wght" 700', color: 'var(--text-2)' }}>
            {hero.name}
          </span>
          . Crafted with intention.
        </span>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          Back to top
          <span
            className="transition-transform duration-300 group-hover:-translate-y-1 inline-block"
          >
            ↑
          </span>
        </a>
      </div>
    </footer>
  )
}

