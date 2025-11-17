import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[], offset = 0) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target instanceof HTMLElement) {
          setActive(visible[0].target.id)
        }
      },
      {
        // More forgiving: trigger when section is ~30% from top, not exactly centered
        rootMargin: `${-offset}px 0px -30% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}
