const treinos = ['Força geral', 'Força específica', 'Membros superiores', 'Core e estabilidade', 'Velocidade', 'Resistência']

const fases = [
  {
    nome: 'Fase 1',
    semanas: 'Semanas 1, 2 e 3',
    cor: 'text-amber',
    texto: 'Base de força, técnica e coordenação para o corpo aguentar o que vem pela frente.',
  },
  {
    nome: 'Fase 2',
    semanas: 'Semanas 4, 5 e 6',
    cor: 'text-brand',
    texto: 'Mais carga, mais explosão e sprints com mudança de direção, perto do ritmo de jogo.',
  },
]

const semanas = [
  { n: '0', rotulo: 'Sem jogo', texto: 'Semana completa de treinos para desenvolver tudo o que o jogo cobra.' },
  { n: '1', rotulo: 'Jogo na semana', texto: 'Os treinos se reorganizam para você chegar inteiro no dia do jogo.' },
  { n: '2', rotulo: 'Jogos na semana', texto: 'Treinos encaixados entre os jogos, sem perder o ritmo nem acumular fadiga.' },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="pt-14 pb-16 lg:pt-20 lg:pb-[110px]">
      <div className="wrap flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="title-section m-0">Duas fases, seis semanas</h2>
          <p className="m-0 max-w-[640px] text-muted">
            A cada fase os treinos mudam e ficam mais exigentes. Você sempre sabe em que semana está e o que vem depois.
          </p>
        </div>

        <div className="flex gap-2.5" aria-hidden="true">
          <div className="flex flex-1 flex-col gap-2.5">
            <div className="h-[18px] bg-amber [clip-path:polygon(0_0,100%_0,98%_100%,0_100%)]" />
            <div className="flex justify-between text-sm text-subtle">
              <span>Semana 1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2.5">
            <div className="h-[18px] bg-brand [clip-path:polygon(2%_0,100%_0,100%_100%,0_100%)]" />
            <div className="flex justify-between text-sm text-subtle">
              <span>4</span>
              <span>5</span>
              <span>Semana 6</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {fases.map((f) => (
            <div key={f.nome} className="flex flex-col gap-3.5 border border-line p-7">
              <div className="flex flex-wrap items-baseline gap-3.5">
                <h3 className={`dsp m-0 text-[44px] ${f.cor}`}>{f.nome}</h3>
                <span className="text-muted">{f.semanas}</span>
              </div>
              <p className="m-0 text-soft">{f.texto}</p>
              <div className="flex flex-wrap gap-2">
                {treinos.map((t) => (
                  <span key={t} className="bg-panel-2 px-3 py-1.5 text-[15px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:mt-[30px]">
          <div className="flex flex-col gap-3">
            <h3 className="title-section m-0 text-[clamp(36px,4vw,52px)]">
              Se adapta à
              <br />
              sua semana de jogos
            </h3>
            <p className="m-0 max-w-[640px] text-muted">
              O programa traz três formatos de semana. É só seguir o que combina com a sua.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {semanas.map((s, i) => (
              <div
                key={s.n}
                className={`relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 overflow-hidden py-5 pr-5 pl-6 md:grid-cols-1 md:gap-y-4 md:px-7 md:pt-6 md:pb-7 ${
                  i === 2 ? 'halftone-soft bg-brand text-black' : 'border border-[#2E2E2E] bg-panel-2'
                }`}
              >
                {i < 2 && <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-1 bg-brand md:top-0 md:right-auto md:bottom-auto md:h-1 md:w-16" />}
                <span
                  className={`dsp w-[62px] text-center text-[88px] leading-[0.8] md:w-auto md:text-left md:text-[110px] ${
                    i === 2 ? 'text-black' : 'text-transparent [-webkit-text-stroke:1.5px_#DE602A]'
                  }`}
                >
                  {s.n}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="dsp text-[26px] leading-none">{s.rotulo}</span>
                  <p className={`m-0 text-[15px] leading-snug ${i === 2 ? 'font-medium text-[#1A0E08]' : 'text-soft'}`}>{s.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
