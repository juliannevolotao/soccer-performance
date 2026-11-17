import Button from './Button.jsx'
import Contador from './Contador.jsx'
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
    <section className="relative overflow-hidden bg-black pb-[124px] [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_40px),0_100%)] lg:pb-24 lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_72px),0_100%)]">
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

      <div className="wrap relative grid gap-x-6 lg:min-h-[680px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_1fr]">
        <div className="flex flex-col items-start gap-4 pt-10 lg:gap-[22px] lg:pt-14">
          <p className="m-0 font-label text-[10.5px] leading-[1.6] tracking-[0.08em] lg:max-[1399px]:text-[11px] min-[1400px]:text-[10px] min-[1400px]:tracking-[0.06em] text-muted">
            PROGRAMA DE TREINO <br className="min-[1400px]:hidden" />
            PARA ATLETAS DE FUTEBOL
          </p>
          <h1 className="dsp m-0 text-[clamp(64px,7.4vw,112px)] text-white">
            <span className="block text-[1.42em] leading-[0.86]">Soccer</span>
            <span className="block">Performance</span>
          </h1>
          {/* subtítulo da marca: só texto, para não parecer botão */}
          <div className="-mt-1 flex items-center gap-3">
            <span aria-hidden="true" className="h-1 w-10 bg-brand lg:w-14" />
            <span className="dsp text-[clamp(26px,3vw,40px)] leading-none text-brand">Pré-Temporada</span>
          </div>
        </div>

        <div className="relative -mx-4 mt-2 flex h-[360px] items-end justify-center overflow-hidden sm:mx-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-auto lg:self-stretch lg:overflow-visible">
          {/* brilho laranja atrás do Mateus */}
          <div
            aria-hidden="true"
            className="absolute top-[2%] left-1/2 aspect-square w-[125%] max-w-[780px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(240,110,50,0.55)_0%,rgba(222,96,42,0.22)_34%,rgba(222,96,42,0)_64%)]"
          />
          {/* faixa diagonal da marca */}
          <div
            aria-hidden="true"
            className="halftone absolute top-[9%] bottom-[8%] left-[54%] w-[110px] -translate-x-1/2 -skew-x-[16deg] bg-brand lg:w-[150px]"
          />
          <img
            src="/images/mateus-hero.png"
            alt="Mateus Leon de braços cruzados"
            width="1024"
            height="1536"
            fetchPriority="high"
            className="relative block h-full w-auto max-w-none object-contain object-bottom lg:h-auto lg:w-full lg:max-w-[500px]"
          />
          <div className="absolute bottom-5 left-4 flex flex-col gap-0.5 border border-[#2E2E2E] bg-black py-2.5 pr-5 pl-4 [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)] sm:left-0 lg:bottom-[120px] lg:-left-3 lg:py-3.5 lg:pr-[22px] lg:pl-[18px]">
            <span className="dsp text-[22px] leading-none lg:text-[30px]">Mateus Leon</span>
            <span className="text-xs text-muted lg:text-sm">Pós-graduado em alto rendimento · {site.cref}</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 pt-7 pb-6 lg:gap-[22px] lg:pt-[26px]">
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.5] text-soft lg:text-xl lg:leading-normal">
            Um programa de 6 semanas na academia para você chegar na temporada mais forte, mais rápido e aguentando o
            jogo inteiro.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
            <Button href="#oferta">Quero começar</Button>
            <a href="#programa" className="self-center border-b-2 border-brand pb-0.5 font-semibold text-ink no-underline sm:self-auto">
              Ver o que vem no programa
            </a>
          </div>
          <div className="mt-3 grid w-full max-w-[560px] grid-cols-4 border-y border-line lg:mt-[18px] lg:border-y-0">
            {numeros.map((n, i) => (
              <div key={n.legenda} className={`py-3.5 pr-2 lg:py-0 ${i > 0 ? 'border-l border-line pl-3 lg:border-l-0 lg:pl-0' : ''}`}>
                <div className="dsp text-[34px] leading-none text-brand lg:text-[44px]">
                  <Contador valor={n.valor} />
                </div>
                <div className="mt-1 text-xs leading-tight text-muted lg:text-sm">{n.legenda}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
