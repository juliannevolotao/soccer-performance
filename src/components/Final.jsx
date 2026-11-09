import { duvidas, site } from '../config.js'

export function Garantia() {
  return (
    <section className="pt-[90px] pb-10">
      <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-7">
        <div className="flex h-32 w-32 flex-none flex-col items-center justify-center bg-brand text-black [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)]">
          <span className="dsp text-[64px]">7</span>
          <span className="text-sm font-bold uppercase">dias</span>
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <h2 className="dsp m-0 text-[clamp(34px,4vw,48px)]">Garantia de 7 dias</h2>
          <p className="mt-2.5 mb-0 max-w-[640px] text-muted">
            Comece o programa sem risco. Se em até 7 dias você achar que não é para você, peça o reembolso e devolvemos
            100% do valor.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Duvidas() {
  return (
    <section id="duvidas" className="pt-[70px] pb-[110px]">
      <div className="wrap flex max-w-[920px] flex-col gap-7">
        <h2 className="title-section m-0">Dúvidas frequentes</h2>
        <div className="border-t border-line">
          {duvidas.map((d, i) => (
            <details key={d.pergunta} open={i === 0} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {d.pergunta}
                <span aria-hidden="true" className="font-display text-[34px] leading-none font-bold text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-0 mb-[22px] max-w-[760px] text-[17px] leading-relaxed text-muted">{d.resposta}</p>
            </details>
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
