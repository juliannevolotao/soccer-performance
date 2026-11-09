import Hero from './components/Hero.jsx'
import Faixa from './components/Faixa.jsx'
import ParaQuem from './components/ParaQuem.jsx'
import Pilares from './components/Pilares.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Oferta from './components/Oferta.jsx'
import Sobre from './components/Sobre.jsx'
import Galeria from './components/Galeria.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import { Garantia, Duvidas, Chamada, Rodape } from './components/Final.jsx'

export default function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Faixa />
      <ParaQuem />
      <Pilares />
      <ComoFunciona />
      <Oferta />
      <Sobre />
      <Galeria />
      <Depoimentos />
      <Garantia />
      <Duvidas />
      <Chamada />
      <Rodape />
    </main>
  )
}
