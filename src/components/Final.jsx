import { useId, useState } from 'react'
import { duvidas, site } from '../config.js'

function Pergunta({ pergunta, resposta, inicial }) {
  const [aberta, setAberta] = useState(inicial)
  const id = useId()
  return (
    <div className="border-b border-line">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={id}
          onClick={() => setAberta((v) => !v)}
          className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent p-0 text-left font-body text-[19px] font-semibold text-ink"
        >
          {pergunta}
          <span
            aria-hidden="true"
            className={`font-display text-[34px] leading-none font-bold text-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${aberta ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h3>
      {/* altura animada com grid 0fr → 1fr: abre e fecha suave em qualquer navegador */}
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${aberta ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden" inert={!aberta}>
          <p className="mt-0 mb-[22px] max-w-[760px] text-[17px] leading-relaxed text-muted">{resposta}</p>
        </div>
      </div>
    </div>
  )
}

export function Duvidas() {
  return (
    <section id="duvidas" className="pt-[70px] pb-[110px]">
      <div className="wrap flex max-w-[920px] flex-col gap-7">
        <h2 className="title-section m-0">Dúvidas frequentes</h2>
        <div className="border-t border-line">
          {duvidas.map((d, i) => (
            <Pergunta key={d.pergunta} pergunta={d.pergunta} resposta={d.resposta} inicial={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Chamada() {
  return (
    <section className="halftone relative bg-brand pt-[130px] pb-[110px] text-black [clip-path:polygon(0_64px,100%_0,100%_100%,0_100%)]">
      <div className="wrap flex flex-wrap items-center justify-between gap-7">
        <h2 className="dsp m-0 max-w-[760px] text-[clamp(44px,6vw,84px)] text-black">
          A temporada começa antes do primeiro jogo
        </h2>
        <a
          href="#oferta"
          className="dsp cut inline-flex min-h-16 items-center justify-center bg-black px-10 text-2xl text-white no-underline hover:bg-[#1C1C1C]"
        >
          Quero começar
        </a>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="bg-black pt-11 pb-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <img src="/images/logo-mateus-leon.svg" alt="Mateus Leon · Alta Performance" loading="lazy" className="h-16 w-auto" />
        <div className="flex flex-col gap-1 text-sm text-subtle sm:text-right">
          <span>Mateus Leon · {site.cref}</span>
          <span>
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener" className="text-muted hover:text-white">
              @{site.instagram}
            </a>{' '}
            · {site.email}
          </span>
          <span>Pagamento processado pela Eduzz · © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
