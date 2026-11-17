import { useEffect } from 'react'

// Faz os blocos de cada seção (exceto o Hero) entrarem rápido, em diagonal,
// quando chegam na tela. Blocos que aparecem juntos entram um logo atrás do
// outro. Cada bloco anima uma vez só.
export default function useReveal(seletor = 'main > section:not(:first-child), main > footer') {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const obs = new IntersectionObserver(
      (entries) => {
        let ordem = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.style.setProperty('--i', Math.min(ordem++, 5))
          e.target.classList.add('is-visible')
          obs.unobserve(e.target)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    document.querySelectorAll(seletor).forEach((secao) => {
      const wrap = secao.querySelector('.wrap') || secao
      for (const el of wrap.children) {
        el.classList.add('reveal-item')
        obs.observe(el)
      }
    })
    return () => obs.disconnect()
  }, [seletor])
}
