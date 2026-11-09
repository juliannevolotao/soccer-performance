import { useEffect } from 'react'

// Faz cada seção (exceto a primeira, o Hero) surgir inteira, com fade e leve
// subida, quando entra na tela. Cada seção anima uma única vez.
export default function useReveal(seletor = 'main > section:not(:first-child), main > footer') {
  useEffect(() => {
    const els = document.querySelectorAll(seletor)
    if (!('IntersectionObserver' in window)) return

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => {
      el.classList.add('reveal')
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [seletor])
}
