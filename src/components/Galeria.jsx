const fotos = [
  {
    src: '/images/treino-esteira.webp',
    alt: 'Atleta correndo na esteira acompanhado pelo Mateus',
    pos: '50% 45%',
    classe: 'sm:flex-[1.3_1_0] sm:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]',
  },
  {
    src: '/images/treino-barra.webp',
    alt: 'Mateus acompanhando um atleta na barra fixa',
    pos: '60% 35%',
    classe: 'sm:mt-10 sm:flex-[1_1_0] sm:[clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]',
  },
  {
    src: '/images/treino-noite.webp',
    alt: 'Mateus orientando um atleta em um exercício de mobilidade no gramado, à noite',
    pos: '62% 55%',
    classe: 'sm:flex-[1_1_0] sm:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]',
  },
]

export default function Galeria() {
  return (
    <section aria-label="Fotos de treinos" className="pb-[110px]">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-3.5 px-6 sm:flex-row">
        {fotos.map((f) => (
          <img
            key={f.src}
            src={f.src}
            alt={f.alt}
            loading="lazy"
            style={{ objectPosition: f.pos }}
            className={`h-[300px] w-full min-w-0 object-cover sm:h-[380px] ${f.classe}`}
          />
        ))}
      </div>
    </section>
  )
}
