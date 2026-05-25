import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

// ============================================================
// PARES DE FOTOS ANTES/DEPOIS
// Arquivos em: public/images/
// ============================================================
const transformacoes = [
  {
    id: 1,
    // Arquivo: public/images/antes-degrade.jpg
    antes:   '/images/antes-degrade.jpg',
    // Arquivo: public/images/depois-degrade.jpg
    depois:  '/images/depois-degrade.jpg',
    servico: 'Degradê',
    valor:   'R$ 30,00',
  },
  {
    id: 2,
    // Arquivo: public/images/antes-combo.png
    antes:   '/images/antes-combo.png',
    // Arquivo: public/images/depois-combo.jpg
    depois:  '/images/depois-combo.jpg',
    servico: 'Combo Completo',
    valor:   'R$ 55,00',
  },
  {
    id: 3,
    // Arquivo: public/images/antes-platinado.png
    antes:   '/images/antes-platinado.png',
    // Arquivo: public/images/depois-platinado.png
    depois:  '/images/depois-platinado.png',
    servico: 'Platinado',
    valor:   'R$ 100,00',
  },
]

const LINK_AGENDAMENTO = 'https://cashbarber.com.br/ggdocorte'

// Componente do slider de comparação — arraste para ver antes/depois
function CompareSlider({ antes, depois }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] overflow-hidden cursor-col-resize select-none bg-[#1a1a1a]"
      onMouseDown={() => { dragging.current = true }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX) }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* DEPOIS — foto de baixo (base) */}
      <img src={depois} alt="Depois" className="absolute inset-0 w-full h-full object-cover" />

      {/* ANTES — foto de cima (cortada pelo clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={antes} alt="Antes" className="w-full h-full object-cover" />
      </div>

      {/* Linha divisória */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-red-600 z-10" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50">
          <div className="flex gap-0.5">
            <FiArrowLeft size={9} className="text-white" />
            <FiArrowRight size={9} className="text-white" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-20 font-sans text-[10px] tracking-widest uppercase text-white/70 bg-black/60 px-2 py-1 backdrop-blur-sm">Antes</span>
      <span className="absolute top-3 right-3 z-20 font-sans text-[10px] tracking-widest uppercase text-white bg-red-600/90 px-2 py-1">Depois</span>
    </div>
  )
}

export default function AntesDepois() {
  const [current, setCurrent] = useState(0)
  const item = transformacoes[current]

  return (
    <section id="antes-depois" className="relative py-32 bg-[#050505]">
      <div className="section-padding">

        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label flex items-center gap-3 mb-4"
          >
            <span className="red-line" />
            Resultados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            ANTES &<br />
            <span className="text-gradient-red">DEPOIS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CompareSlider antes={item.antes} depois={item.depois} key={current} />
          </motion.div>

          {/* Info + navegação */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="section-label mb-2 block">Transformação</span>
              <h3 className="font-display text-5xl text-white mb-2">{item.servico.toUpperCase()}</h3>
              <span className="font-display text-3xl text-red-600">{item.valor}</span>
              <p className="font-sans text-gray-400 text-sm mt-4">
                Arraste o slider para comparar. Cada corte é uma transformação personalizada feita aqui em Caponga.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-display text-6xl text-red-600 leading-none">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-6xl text-white/10 leading-none">
                / {String(transformacoes.length).padStart(2, '0')}
              </span>
            </div>

            {/* Navegação */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((c) => (c - 1 + transformacoes.length) % transformacoes.length)}
                className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-all duration-300 group"
              >
                <FiArrowLeft className="text-gray-400 group-hover:text-white" size={18} />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % transformacoes.length)}
                className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-all duration-300 group"
              >
                <FiArrowRight className="text-gray-400 group-hover:text-white" size={18} />
              </button>
            </div>

            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit group"
            >
              <span>Quero Minha Transformação</span>
              <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
