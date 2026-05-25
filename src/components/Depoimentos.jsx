import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

// ============================================================
// DEPOIMENTOS — clientes reais da região de Caponga/Cascavel
// ============================================================
const depoimentos = [
  {
    id: 1,
    nome: 'Ruan Oliveira',
    cidade: 'Caponga, CE',
    avaliacao: 5,
    texto: 'Melhor barbearia de Caponga com folga. O GG é um artista, sai daqui com o moral lá em cima. Recomendo demais!',
    servico: 'Degradê',
    tempo: 'Cliente há 2 anos',
  },
  {
    id: 2,
    nome: 'Kaique Mendonça',
    cidade: 'Cascavel, CE',
    avaliacao: 5,
    texto: 'Vim de Cascavel e não me arrependo. O atendimento é outro nível, o ambiente é top e o corte ficou perfeito. Voltarei sempre.',
    servico: 'Combo Completo',
    tempo: 'Cliente há 1 ano',
  },
  {
    id: 3,
    nome: 'Ítalo Freitas',
    cidade: 'Caponga, CE',
    avaliacao: 5,
    texto: 'O café enquanto espera já mostra que é diferente. O corte então, nem se fala. GG sabe o que faz, profissional de verdade.',
    servico: 'Platinado',
    tempo: 'Cliente há 8 meses',
  },
  {
    id: 4,
    nome: 'Wesley Sousa',
    cidade: 'Beberibe, CE',
    avaliacao: 5,
    texto: 'Vim de Beberibe especialmente pro GG. Valeu cada km. Saí outro homem, minha namorada nem me reconheceu. É o melhor!',
    servico: 'Degradê + Barba',
    tempo: 'Visita especial',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} size={12}
          className={i < count ? 'text-red-600 fill-red-600' : 'text-gray-700'} />
      ))}
    </div>
  )
}

export default function Depoimentos() {
  const [active, setActive] = useState(0)

  // Troca automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % depoimentos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="depoimentos" className="relative py-32 bg-[#111111]">
      <div className="section-padding">

        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label flex items-center gap-3 mb-4"
          >
            <span className="red-line" />
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            O QUE DIZEM<br />
            <span className="text-gradient-red">NOSSOS CLIENTES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Depoimento em destaque */}
          <div className="relative min-h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="glass p-10 relative"
              >
                <span className="font-display text-9xl text-red-600/10 absolute top-4 left-6 leading-none select-none">"</span>
                <Stars count={depoimentos[active].avaliacao} />
                <p className="font-sans text-white text-xl leading-relaxed font-light mt-6 mb-8 relative z-10">
                  "{depoimentos[active].texto}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-sans font-semibold text-white text-sm block">
                      {depoimentos[active].nome}
                    </span>
                    <span className="font-sans text-gray-500 text-xs">
                      {depoimentos[active].cidade} · {depoimentos[active].tempo}
                    </span>
                  </div>
                  <span className="font-sans text-xs tracking-widest uppercase text-red-600 border border-red-600/30 px-3 py-1">
                    {depoimentos[active].servico}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Lista de todos os depoimentos */}
          <div className="flex flex-col gap-3">
            {depoimentos.map((dep, i) => (
              <button
                key={dep.id}
                onClick={() => setActive(i)}
                className={`text-left glass p-5 transition-all duration-300 border-l-2 ${
                  i === active
                    ? 'border-red-600 bg-white/[0.06]'
                    : 'border-transparent hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-sans font-medium text-sm transition-colors duration-300 ${i === active ? 'text-white' : 'text-gray-400'}`}>
                    {dep.nome} <span className="font-light text-gray-600 text-xs">— {dep.cidade}</span>
                  </span>
                  <Stars count={dep.avaliacao} />
                </div>
                <p className="font-sans text-gray-600 text-xs line-clamp-1 font-light italic">
                  "{dep.texto}"
                </p>
              </button>
            ))}

            {/* Nota Google */}
            <div className="glass p-5 mt-2 flex items-center justify-between">
              <div>
                <span className="font-display text-4xl text-white">5.0</span>
                <p className="font-sans text-xs text-gray-500 mt-1">no Google Maps</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Stars count={5} />
                <span className="font-sans text-xs text-gray-600">Caponga, Cascavel CE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
