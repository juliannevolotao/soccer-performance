import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

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

// Índice do item mais centralizado num trilho com scroll horizontal
function indiceAtual(trilho) {
  const w = trilho.firstElementChild?.getBoundingClientRect().width || 1
  return Math.round(trilho.scrollLeft / w)
}

function Pontos({ total, atual, onIr, claro }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Ver foto ${i + 1}`}
          aria-current={i === atual}
          onClick={() => onIr(i)}
          className="flex h-6 w-6 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
        >
          <span
            className={`block h-1.5 transition-all duration-300 ${i === atual ? 'w-6 bg-brand' : `w-1.5 ${claro ? 'bg-white/40' : 'bg-line'}`}`}
          />
        </button>
      ))}
    </div>
  )
}

function TelaCheia({ inicio, onFechar }) {
  const trilho = useRef(null)
  const fechar = useRef(null)
  const [atual, setAtual] = useState(inicio)

  useEffect(() => {
    const t = trilho.current
    t.scrollLeft = t.clientWidth * inicio
    fechar.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const tecla = (e) => {
      if (e.key === 'Escape') onFechar()
      if (e.key === 'ArrowRight') t.scrollBy({ left: t.clientWidth, behavior: 'smooth' })
      if (e.key === 'ArrowLeft') t.scrollBy({ left: -t.clientWidth, behavior: 'smooth' })
    }
    window.addEventListener('keydown', tecla)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', tecla)
    }
  }, [inicio, onFechar])

  const ir = (i) => trilho.current.scrollTo({ left: trilho.current.clientWidth * i, behavior: 'smooth' })

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fotos de treinos em tela cheia"
      className="animate-[aparecer_0.3s_ease-out] fixed inset-0 z-[60] flex flex-col bg-black"
    >
      <div className="flex justify-end p-3">
        <button
          ref={fechar}
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="flex h-12 w-12 cursor-pointer items-center justify-center border-0 bg-transparent text-4xl leading-none text-white"
        >
          ×
        </button>
      </div>
      <div
        ref={trilho}
        onScroll={(e) => setAtual(indiceAtual(e.currentTarget))}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fotos.map((f) => (
          <div key={f.src} className="flex w-full flex-none snap-center items-center justify-center px-3" onClick={onFechar}>
            <img src={f.src} alt={f.alt} className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
        ))}
      </div>
      <div className="p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
        <Pontos total={fotos.length} atual={atual} onIr={ir} claro />
      </div>
    </div>
  )
}

export default function Galeria() {
  const trilho = useRef(null)
  const [atual, setAtual] = useState(0)
  const [aberta, setAberta] = useState(null)
  const fecharTela = useCallback(() => setAberta(null), [])

  const ir = (i) => {
    const t = trilho.current
    const item = t.children[i]
    t.scrollTo({ left: item.offsetLeft - (t.clientWidth - item.clientWidth) / 2, behavior: 'smooth' })
  }

  return (
    <section aria-label="Fotos de treinos" className="pb-[110px]">
      {/* No celular: carrossel que trava em cada foto. A partir de sm: as três lado a lado. */}
      <div
        ref={trilho}
        onScroll={(e) => {
          const t = e.currentTarget
          const max = t.scrollWidth - t.clientWidth
          setAtual(max > 0 ? Math.round((t.scrollLeft / max) * (fotos.length - 1)) : 0)
        }}
        className="mx-auto flex max-w-[1360px] snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 [scrollbar-width:none] sm:gap-3.5 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setAberta(i)}
            aria-label={`Ampliar foto: ${f.alt}`}
            className={`group relative w-[84%] flex-none cursor-zoom-in snap-center overflow-hidden border-0 bg-transparent p-0 sm:w-auto sm:min-w-0 ${f.classe}`}
          >
            <img
              src={f.src}
              alt=""
              loading="lazy"
              style={{ objectPosition: f.pos }}
              className="block h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[380px]"
            />
          </button>
        ))}
      </div>
      <div className="mt-4 sm:hidden">
        <Pontos total={fotos.length} atual={atual} onIr={ir} />
      </div>

      {aberta !== null && createPortal(<TelaCheia inicio={aberta} onFechar={fecharTela} />, document.body)}
    </section>
  )
}
