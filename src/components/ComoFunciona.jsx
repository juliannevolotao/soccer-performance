import { useState } from 'react'

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

// t = treino, r = descanso, g = jogo
const semanas = {
  sem: {
    rotulo: 'Sem jogo',
    dias: [
      ['Segunda', 'Força geral', 't'],
      ['Terça', 'Força específica', 't'],
      ['Quarta', 'Membros superiores', 't'],
      ['Quinta', 'Velocidade', 't'],
      ['Sexta', 'Core e estabilidade', 't'],
      ['Sábado', 'Resistência', 't'],
      ['Domingo', 'Descanso', 'r'],
    ],
  },
  um: {
    rotulo: '1 jogo',
    dias: [
      ['Segunda', 'Descanso', 'r'],
      ['Terça', 'Força geral', 't'],
      ['Quarta', 'Resistência', 't'],
      ['Quinta', 'Membros superiores', 't'],
      ['Sexta', 'Força específica', 't'],
      ['Sábado', 'Descanso', 'r'],
      ['Domingo', 'Jogo', 'g'],
    ],
  },
  dois: {
    rotulo: '2 jogos',
    dias: [
      ['Segunda', 'Descanso', 'r'],
      ['Terça', 'Força geral', 't'],
      ['Quarta', 'Jogo', 'g'],
      ['Quinta', 'Membros superiores', 't'],
      ['Sexta', 'Força específica', 't'],
      ['Sábado', 'Descanso', 'r'],
      ['Domingo', 'Jogo', 'g'],
    ],
  },
}

const estiloDia = {
  t: 'bg-panel-2 text-ink border border-[#2E2E2E]',
  r: 'bg-transparent text-[#A8A29D] border border-dashed border-[#4A4A4A]',
  g: 'bg-brand text-black border border-brand',
}

export default function ComoFunciona() {
  const [semana, setSemana] = useState('sem')

  return (
    <section id="como-funciona" className="pt-20 pb-[110px]">
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

        <div className="mt-[30px] flex flex-col gap-5">
          <h3 className="dsp m-0 text-[clamp(32px,4vw,48px)]">Se adapta à sua semana de jogos</h3>
          <div role="tablist" aria-label="Tipo de semana" className="flex flex-wrap gap-2">
            {Object.entries(semanas).map(([id, s]) => {
              const ativo = id === semana
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  onClick={() => setSemana(id)}
                  className={`min-h-12 cursor-pointer border-0 px-6 font-display text-xl font-bold uppercase italic [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)] ${
                    ativo ? 'bg-brand text-black' : 'bg-panel-2 text-soft hover:text-white'
                  }`}
                >
                  {s.rotulo}
                </button>
              )
            })}
          </div>
          <div role="tabpanel" className="grid gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {semanas[semana].dias.map(([dia, item, tipo]) => (
              <div
                key={dia}
                className={`flex min-h-[104px] flex-col justify-between gap-2.5 px-3.5 pt-3.5 pb-4 ${estiloDia[tipo]}`}
              >
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase opacity-80">{dia}</span>
                <span className="font-display text-xl leading-[1.05] font-bold uppercase italic">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
