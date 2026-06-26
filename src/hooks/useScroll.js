import { useEffect, useState } from 'react'

// Devuelve si la página fue scrolleada (para el header sticky) y el id de la
// sección actualmente visible (para resaltar el link activo del nav).
export function useScroll(sectionIds) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [sectionIds])

  return { scrolled, activeId }
}
