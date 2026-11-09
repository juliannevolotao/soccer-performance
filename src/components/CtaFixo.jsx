import { useEffect, useState } from 'react'
import { site } from '../config.js'

// Botão "Quero começar" preso no rodapé da tela (só no celular/tablet).
// Aparece depois do hero e some quando o hero, a oferta, a chamada final
// ou o rodapé estão na tela, porque ali já existe um botão.
export default function CtaFixo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const alvos = [
      document.querySelector('main > section:first-child'),
      document.getElementById('oferta'),
      document.getElementById('chamada'),
      document.querySelector('main > footer'),
    ].filter(Boolean)
    const naTela = new Set()

    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) naTela.add(e.target)
        else naTela.delete(e.target)
      }
      setVisivel(naTela.size === 0)
    })
    alvos.forEach((a) => obs.observe(a))
    return () => obs.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      } bg-gradient-to-t from-black via-black/85 to-transparent`}
      aria-hidden={!visivel}
    >
      <a
        href={site.checkoutUrl || '#oferta'}
        tabIndex={visivel ? 0 : -1}
        {...(site.checkoutUrl ? { target: '_blank', rel: 'noopener' } : {})}
        className="dsp flex min-h-14 w-full items-center justify-center bg-brand text-[22px] text-black no-underline shadow-[0_8px_30px_rgba(222,96,42,0.35)] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)] active:bg-brand-hover"
      >
        Quero começar
      </a>
    </div>
  )
}
