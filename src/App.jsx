import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Agendamento from './components/Agendamento'
import Curso from './components/Curso'
import Servicos from './components/Servicos'
import AntesDepois from './components/AntesDepois'
import Experiencia from './components/Experiencia'
import Depoimentos from './components/Depoimentos'
import Galeria from './components/Galeria'
import Localizacao from './components/Localizacao'
import Footer from './components/Footer'

// ============================================================
// ORDEM DAS SEÇÕES — mude a ordem aqui se quiser reorganizar
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />          {/* 1. Hero — apresentação + CTAs */}
        <Agendamento />   {/* 2. Agendamento — prioridade 1 */}
        <Curso />         {/* 3. Curso de Barbeiro */}
        <Servicos />      {/* 4. Serviços e preços */}
        <AntesDepois />   {/* 5. Antes e depois */}
        <Experiencia />   {/* 6. Diferenciais */}
        <Depoimentos />   {/* 7. Depoimentos */}
        <Galeria />       {/* 8. Galeria */}
        <Localizacao />   {/* 9. Mapa + endereço */}
      </main>
      <Footer />
    </div>
  )
}
