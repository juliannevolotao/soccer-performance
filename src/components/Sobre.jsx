import { site } from '../config.js'

const destaques = [
  { valor: '+1.000', legenda: 'atletas treinados', laranja: true },
  { valor: 'Ex-atleta', legenda: 'conhece o jogo por dentro' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="pt-[100px] pb-[110px]">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-[520px]">
          <div
            aria-hidden="true"
            className="halftone absolute -top-5 left-[30px] h-[92%] w-[70%] bg-brand [clip-path:polygon(30%_0,100%_0,70%_100%,0_100%)]"
          />
          <img
            src="/images/mateus-cones.webp"
            alt="Mateus Leon montando um treino com cones no campo"
            loading="lazy"
            className="relative h-[520px] w-full object-cover object-[50%_22%] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"
          />
        </div>

        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2.5">
            <span className="font-label text-xs tracking-[0.1em] text-brand">QUEM VAI TE TREINAR</span>
            <h2 className="title-section m-0">Mateus Leon</h2>
            <span className="text-muted">
              Ex-atleta · pós-graduado em esportes de alto rendimento pelo NAR ·{' '}
              <span className="whitespace-nowrap">{site.cref}</span>
            </span>
          </div>
          <p className="mt-1.5 mb-0.5 flex items-baseline gap-3 text-[22px] font-medium text-ink italic">
            <span aria-hidden="true" className="dsp text-[26px] text-brand">
              //
            </span>
            Performance não acontece por acaso.
          </p>
          <p className="m-0 text-lg text-soft">
            Construí minha trajetória dentro do esporte, primeiro como atleta e depois trabalhando com atletas de todos os
            níveis, vivendo na prática os desafios da preparação física e da busca pela alta performance.
          </p>
          <p className="m-0 text-muted">
            Meu trabalho é desenvolver o que decide o jogo: força, potência, velocidade, resistência e prevenção de
            lesões. Com ciência, planejamento e consistência, para você chegar mais preparado aos momentos decisivos.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-11 gap-y-4 border-t border-line pt-[22px]">
            {destaques.map((d) => (
              <div key={d.valor}>
                <div className={`dsp text-[40px] ${d.laranja ? 'text-brand' : ''}`}>{d.valor}</div>
                <div className="text-sm text-muted">{d.legenda}</div>
              </div>
            ))}
          </div>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center gap-2.5 self-start border border-[#3A3A3A] px-5 font-semibold text-ink no-underline hover:border-brand"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h0" />
            </svg>
            @{site.instagram}
          </a>
        </div>
      </div>
    </section>
  )
}
