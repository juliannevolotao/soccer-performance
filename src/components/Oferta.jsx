import Button from './Button.jsx'
import { itensInclusos, preco, site } from '../config.js'

function Icone({ children }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DE602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

export default function Oferta() {
  const checkout = site.checkoutUrl || '#oferta'
  return (
    <section
      id="oferta"
      className="relative bg-panel py-[150px] [clip-path:polygon(0_0,100%_72px,100%_100%,0_calc(100%_-_72px))]"
    >
      <div
        aria-hidden="true"
        className="halftone absolute top-0 -left-[60px] h-full w-[220px] bg-brand opacity-90 [clip-path:polygon(55%_0,100%_0,45%_100%,0_100%)]"
      />
      <div className="wrap relative grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div id="incluso" className="flex flex-col gap-7">
          <h2 className="title-section m-0">Tudo o que você recebe</h2>
          <div className="flex flex-col">
            {itensInclusos.map((item, i) => (
              <div
                key={item.titulo}
                className={`flex items-start justify-between gap-5 py-5 ${i < itensInclusos.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div>
                  <div className="text-[19px] font-bold">{item.titulo}</div>
                  <div className="text-base text-muted">{item.descricao}</div>
                </div>
                <span className={`whitespace-nowrap ${item.valor === 'Incluso' ? 'font-semibold text-brand' : 'text-subtle'}`}>
                  {item.valor}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-[18px] border border-[#333333] bg-black px-8 py-9">
          <div
            aria-hidden="true"
            className="absolute -top-px -right-px h-3.5 w-[120px] bg-brand [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
          />
          <span className="font-label text-[11px] tracking-[0.1em] text-muted">SOCCER PERFORMANCE · PRÉ-TEMPORADA</span>
          <div>
            <div className="text-base text-subtle">Se fosse vendido separado</div>
            <div className="text-[26px] text-subtle line-through decoration-brand">{preco.separado}</div>
          </div>
          <div>
            <div className="text-base text-soft">Hoje, tudo por</div>
            <div className="dsp text-[clamp(64px,7vw,88px)] leading-[0.95] text-white">{preco.hoje}</div>
            <div className="text-[17px] text-soft">{preco.parcelado}</div>
          </div>
          <Button href={checkout} size="lg">
            Quero começar agora
          </Button>
          <div className="flex flex-col gap-2 text-[15px] text-muted">
            <span className="flex items-center gap-2.5">
              <Icone>
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </Icone>
              Pagamento seguro pela Eduzz
            </span>
            <span className="flex items-center gap-2.5">
              <Icone>
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </Icone>
              7 dias de garantia
            </span>
            <span className="flex items-center gap-2.5">
              <Icone>
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </Icone>
              Acesso enviado no seu e-mail
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
