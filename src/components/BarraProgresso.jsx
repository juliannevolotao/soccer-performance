import { useEffect, useRef } from 'react'

// Linha laranja fina no topo da tela que enche conforme a página é rolada.
export default function BarraProgresso() {
  const barra = useRef(null)

  useEffect(() => {
    let frame = 0
    const atualizar = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (barra.current) barra.current.style.transform = `scaleX(${p})`
    }
    const agendar = () => {
      if (!frame) frame = requestAnimationFrame(atualizar)
    }
    atualizar()
    window.addEventListener('scroll', agendar, { passive: true })
    window.addEventListener('resize', agendar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', agendar)
      window.removeEventListener('resize', agendar)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      <div ref={barra} className="h-full origin-left scale-x-0 bg-brand" />
    </div>
  )
}
