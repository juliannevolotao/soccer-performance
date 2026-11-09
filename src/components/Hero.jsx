import Button from './Button.jsx'
import { site } from '../config.js'

const links = [
  { href: '#programa', label: 'Programa' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre o Mateus' },
  { href: '#duvidas', label: 'Dúvidas' },
]

const numeros = [
  { valor: '6', legenda: 'semanas' },
  { valor: '12', legenda: 'treinos' },
  { valor: '2', legenda: 'fases' },
  { valor: '+', legenda: 'vídeo de cada exercício' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pb-24 [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_72px),0_100%)]">
      {/* pontilhado discreto que some em direção ao texto */}
      <div
        aria-hidden="true"
        className="halftone-light absolute inset-0 [mask-image:linear-gradient(100deg,transparent_35%,#000_75%)]"
      />

      <header className="wrap relative z-10 flex items-center justify-between gap-6 pt-[22px] pb-2.5">
        <img src="/images/logo-mateus-leon.svg" alt="Mateus Leon · Alta Performance" className="h-[60px] w-auto" />
        <nav aria-label="Seções" className="hidden gap-7 text-[15px] font-medium lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#CFCAC6] no-underline hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#oferta" size="sm">
          Quero começar
        </Button>
      </header>

      <div className="wrap relative grid items-end gap-6 lg:min-h-[680px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col items-start gap-[22px] pt-14 pb-6">
          <p className="m-0 font-label text-xs tracking-[0.1em] text-muted">PROGRAMA DE TREINO PARA ATLETAS DE FUTEBOL</p>
          <h1 className="dsp m-0 text-[clamp(56px,7.4vw,112px)] text-white">
            Soccer
            <br />
            Performance
          </h1>
          <div className="dsp bg-brand py-2.5 pr-[30px] pl-6 text-[clamp(26px,3vw,40px)] leading-none text-black [clip-path:polygon(5%_0,100%_0,95%_100%,0_100%)]">
            Pré-Temporada
          </div>
          <p className="mt-1 mb-0 max-w-[520px] text-xl leading-normal text-soft">
            Um programa de 6 semanas na academia para você chegar na temporada mais forte, mais rápido e aguentando o
            jogo inteiro.
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-7 gap-y-3.5">
            <Button href="#oferta">Quero começar</Button>
            <a href="#programa" className="border-b-2 border-brand pb-0.5 font-semibold text-ink no-underline">
              Ver o que vem no programa
            </a>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-x-[34px] gap-y-2.5">
            {numeros.map((n) => (
              <div key={n.legenda} className="max-w-[150px]">
                <div className="dsp text-[44px] text-brand">{n.valor}</div>
                <div className="text-sm text-muted">{n.legenda}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-end justify-center self-stretch">
          {/* brilho laranja atrás do Mateus */}
          <div
            aria-hidden="true"
            className="absolute top-[2%] left-1/2 aspect-square w-[125%] max-w-[780px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(240,110,50,0.55)_0%,rgba(222,96,42,0.22)_34%,rgba(222,96,42,0)_64%)]"
          />
          {/* faixa diagonal da marca */}
          <div
            aria-hidden="true"
            className="halftone absolute top-[9%] bottom-[8%] left-[54%] w-[150px] -translate-x-1/2 -skew-x-[16deg] bg-brand"
          />
          <img
            src="/images/mateus-hero.png"
            alt="Mateus Leon de braços cruzados"
            width="1024"
            height="1536"
            fetchPriority="high"
            className="relative block h-auto w-full max-w-[500px]"
          />
          <div className="absolute bottom-[120px] -left-3 flex flex-col gap-0.5 border border-[#2E2E2E] bg-black py-3.5 pr-[22px] pl-[18px] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
            <span className="dsp text-[30px] leading-none">Mateus Leon</span>
            <span className="text-sm text-muted">Pós-graduado em alto rendimento · {site.cref}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
