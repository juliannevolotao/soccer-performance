const perfis = [
  {
    titulo: 'Atletas em pré-temporada',
    texto: 'Quem precisa voltar ao ritmo antes dos jogos começarem, com um plano pronto para seguir.',
    deslocamento: '',
  },
  {
    titulo: 'Quem treina sozinho',
    texto: 'Cada treino vem com séries, descanso e o vídeo do exercício. Você sabe exatamente o que fazer.',
    deslocamento: 'lg:translate-y-6',
  },
  {
    titulo: 'Quem tem jogo na semana',
    texto: 'A programação se adapta a semanas sem jogo, com 1 ou com 2 jogos.',
    deslocamento: 'lg:translate-y-12',
  },
]

export default function ParaQuem() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="wrap flex flex-col gap-11">
        <h2 className="title-section m-0 max-w-[760px]">Para o atleta que leva a pré-temporada a sério</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {perfis.map((p) => (
            <div key={p.titulo} className={`flex flex-col gap-3 bg-panel px-[26px] py-7 ${p.deslocamento}`}>
              <span aria-hidden="true" className="h-1.5 w-11 -skew-x-[20deg] bg-brand" />
              <h3 className="dsp m-0 text-[30px] leading-none">{p.titulo}</h3>
              <p className="m-0 text-muted">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
