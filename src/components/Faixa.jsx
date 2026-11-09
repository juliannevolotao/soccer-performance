const palavras = ['Força', 'Potência', 'Velocidade', 'Resistência']

export default function Faixa() {
  const texto = Array.from({ length: 4 }, () => palavras.join(' / ')).join(' / ')
  return (
    <div
      aria-hidden="true"
      className="relative z-[2] -mt-[100px] -ml-[5%] w-[110%] -rotate-2 overflow-hidden whitespace-nowrap bg-brand py-4"
    >
      <span className="faixa-balanco dsp inline-block text-[34px] tracking-[0.02em] text-black">{texto}</span>
    </div>
  )
}
