import { useEffect, useRef, useState } from 'react'

// Número que sobe de 0 até o valor final quando aparece na tela.
// Valores que não são número (como "+") aparecem direto.
export default function Contador({ valor, duracao = 1200 }) {
  const alvo = Number(valor)
  const numerico = Number.isFinite(alvo) && alvo > 0
  const [atual, setAtual] = useState(numerico ? 0 : valor)
  const ref = useRef(null)

  useEffect(() => {
    if (!numerico) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAtual(alvo)
      return
    }
    let frame = 0
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const inicio = performance.now()
      const passo = (agora) => {
        const t = Math.min(1, (agora - inicio) / duracao)
        const suave = 1 - Math.pow(1 - t, 3)
        setAtual(Math.round(alvo * suave))
        if (t < 1) frame = requestAnimationFrame(passo)
      }
      frame = requestAnimationFrame(passo)
    })
    obs.observe(ref.current)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [alvo, numerico, duracao])

  return (
    <span ref={ref}>
      <span aria-hidden="true" className="tabular-nums">
        {atual}
      </span>
      <span className="sr-only">{valor}</span>
    </span>
  )
}
