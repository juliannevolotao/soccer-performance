// "O que você vai desenvolver": quatro faixas inclinadas em escada.
const pilares = [
  {
    nome: 'Força',
    texto:
      'Força geral e específica para o futebol, com técnica antes de carga. É a base para proteger o corpo e ganhar as disputas.',
    exemplos: ['Agachamento tripla extensão', 'Supino com halteres', 'Afundo com remada', 'Barra fixa'],
    imagem: { src: '/images/treino-barra.webp', alt: 'Atleta na barra fixa acompanhado pelo Mateus', pos: '60% 35%' },
    caixa: 'bg-black [clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]',
    palavra: 'text-transparent [-webkit-text-stroke:2px_#DE602A]',
    chip: 'bg-panel-2 text-[#E6E1DD]',
    texto_cor: 'text-soft',
  },
  {
    nome: 'Potência',
    texto: 'Saltos verticais, horizontais e laterais para ser explosivo no primeiro passo.',
    exemplos: ['Salto vertical', 'Queda + salto na caixa', 'Salto lateral', 'Ataque horizontal unilateral'],
    caixa: 'bg-panel-2 lg:ml-[5%] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]',
    palavra: 'text-white',
    chip: 'bg-black text-white',
    texto_cor: 'text-soft',
  },
  {
    nome: 'Velocidade',
    texto: 'Sprints curtos, mudança de direção e coordenação, do jeito que a jogada acontece.',
    exemplos: ['Sprint de 10 m', 'Sprint entre cones', 'Mudança de direção', 'Sprint curvilíneo'],
    caixa: 'bg-black lg:ml-[10%] [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]',
    palavra: 'text-transparent [-webkit-text-stroke:2px_#FFFFFF]',
    chip: 'bg-panel-2 text-[#E6E1DD]',
    texto_cor: 'text-soft',
    traco: true,
  },
  {
    nome: 'Resistência',
    texto: 'Intervalados que imitam o ritmo do jogo, para repetir esforços até o apito final.',
    exemplos: ['Intervalado 30 s / 30 s', 'Circuito na esteira', 'Esteira ou bike'],
    imagem: { src: '/images/treino-esteira.webp', alt: 'Atleta correndo na esteira acompanhado pelo Mateus', pos: '50% 45%' },
    caixa: 'halftone bg-brand lg:ml-[2%] [clip-path:polygon(3%_0,100%_0,100%_100%,0_100%)]',
    palavra: 'text-black',
    chip: 'bg-black text-white',
    texto_cor: 'text-[#1A0E08] font-medium',
  },
]

// classes completas para o Tailwind encontrar
const COM_IMAGEM = 'lg:grid-cols-[auto_minmax(0,1fr)_210px]'
const SEM_IMAGEM = 'lg:grid-cols-[auto_minmax(0,1fr)]'

export default function Pilares() {
  return (
    <section
      id="programa"
      className="relative overflow-hidden bg-panel pt-[140px] pb-[150px] [clip-path:polygon(0_72px,100%_0,100%_calc(100%_-_72px),0_100%)]"
    >
      <div className="wrap flex flex-col gap-[18px]">
        <div className="mb-[26px] flex flex-wrap items-end justify-between gap-5">
          <h2 className="title-section m-0">O que você vai desenvolver</h2>
          <p className="m-0 max-w-[420px] text-muted">
            Os quatro pilares que o jogo cobra, trabalhados na academia com exercícios pensados para o futebol.
          </p>
        </div>

        {pilares.map((p) => (
          <div
            key={p.nome}
            className={`relative grid items-center gap-4 px-6 py-[26px] lg:gap-10 lg:px-12 lg:py-[30px] ${p.imagem ? COM_IMAGEM : SEM_IMAGEM} ${p.caixa}`}
          >
            {p.traco && <div aria-hidden="true" className="absolute top-0 left-0 h-1.5 w-[38%] bg-brand" />}
            <div className={`dsp text-[clamp(48px,5.4vw,84px)] leading-[0.85] whitespace-nowrap ${p.palavra}`}>
              {p.nome}
            </div>
            <div className="flex min-w-0 flex-col gap-3.5">
              <p className={`m-0 text-lg ${p.texto_cor}`}>{p.texto}</p>
              <div className="flex flex-wrap gap-2">
                {p.exemplos.map((e) => (
                  <span key={e} className={`cut inline-block px-3.5 py-1.5 text-sm font-semibold ${p.chip}`}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
            {p.imagem && (
              <img
                src={p.imagem.src}
                alt={p.imagem.alt}
                loading="lazy"
                style={{ objectPosition: p.imagem.pos }}
                className="h-[220px] w-full object-cover [clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)] lg:h-40 lg:w-[210px]"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
