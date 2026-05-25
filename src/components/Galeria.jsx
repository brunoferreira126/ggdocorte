import { motion } from 'framer-motion'
import { FiInstagram, FiArrowRight } from 'react-icons/fi'

// ============================================================
// FOTOS DA GALERIA
// Usando as fotos disponíveis em: public/images/
// ============================================================
const fotos = [
  {
    id: 1,
    // Arquivo: public/images/corte.jpg
    src:   '/images/corte.jpg',
    label: 'O Corte Perfeito',
    span:  'col-span-2 row-span-2',  // Foto grande — ocupa 2x2
  },
  {
    id: 2,
    // Arquivo: public/images/ambiente.png
    src:   '/images/ambiente.png',
    label: 'Nosso Ambiente',
    span:  '',
  },
  {
    id: 3,
    // Arquivo: public/images/depois-combo.jpg
    src:   '/images/depois-combo.jpg',
    label: 'Combo Completo',
    span:  '',
  },
  {
    id: 4,
    // Arquivo: public/images/depois-degrade.jpg
    src:   '/images/depois-degrade.jpg',
    label: 'Degradê',
    span:  '',
  },
  {
    id: 5,
    // Arquivo: public/images/depois-platinado.png
    src:   '/images/depois-platinado.png',
    label: 'Platinado',
    span:  '',
  },
]

const INSTAGRAM = 'barberggdocorte'

export default function Galeria() {
  return (
    <section id="galeria" className="relative py-32 bg-[#111111]">
      <div className="section-padding">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label flex items-center gap-3 mb-4">
              <span className="red-line" />
              Galeria
            </span>
            <h2 className="section-title">
              NOSSA<br />
              <span className="text-gradient-red">IDENTIDADE</span>
            </h2>
          </motion.div>

          <motion.a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="btn-outline flex items-center gap-3 group w-fit"
          >
            <FiInstagram size={16} />
            <span>@{INSTAGRAM}</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
          </motion.a>
        </div>

        {/* Grid de fotos — layout assimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" style={{ gridAutoRows: '200px' }}>
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden group ${foto.span}`}
            >
              <img
                src={foto.src}
                alt={foto.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-red-600/15 transition-all duration-500" />
              {/* Label no hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-sans text-xs tracking-widest uppercase text-white font-semibold">
                  {foto.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto complementar */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-sans text-gray-600 text-sm mt-8"
        >
          Siga no Instagram para ver mais transformações · <span className="text-red-600">@{INSTAGRAM}</span>
        </motion.p>
      </div>
    </section>
  )
}
