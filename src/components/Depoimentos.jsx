import { depoimentos } from '../config.js'

export default function Depoimentos() {
  return (
    <section className="relative bg-panel py-[140px] [clip-path:polygon(0_72px,100%_0,100%_100%,0_calc(100%_-_72px))]">
      <div className="wrap flex flex-col gap-10">
        <h2 className="title-section m-0">Quem já treinou com o Mateus</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <figure key={i} className={`m-0 flex flex-col gap-[18px] bg-black px-[26px] py-7 ${i === 1 ? 'lg:translate-y-6' : ''}`}>
              <span aria-hidden="true" className="dsp text-[64px] leading-[0.6] text-brand">
                //
              </span>
              <blockquote className="m-0 text-soft">{d.texto}</blockquote>
              <figcaption className="flex flex-col">
                <span className="font-bold">{d.nome}</span>
                <span className="text-sm text-subtle">{d.detalhe}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
