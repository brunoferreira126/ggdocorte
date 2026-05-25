import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCoffee, FiStar, FiSmartphone, FiShield, FiUsers, FiArrowRight } from 'react-icons/fi'
import { GiHelmet } from 'react-icons/gi'
import { MdOutlineLocalBar } from 'react-icons/md'

const features = [
  {
    icon: FiCoffee,
    title: 'Café & Bem-estar',
    desc: 'Recepcionado com café especial selecionado. Porque sua experiência começa antes do corte.',
  },
  {
    icon: FiStar,
    title: 'Ambiente Premium',
    desc: 'Espaço projetado para conforto e estilo. Cada detalhe pensado para você.',
  },
  {
    icon: FiUsers,
    title: 'Profissionais de Elite',
    desc: 'Barbeiros certificados e em constante atualização. Técnica e arte em cada atendimento.',
  },
  {
    icon: FiSmartphone,
    title: 'Agendamento Online',
    desc: 'Sem filas. Agende pelo WhatsApp ou app com horário garantido.',
  },
  {
    icon: MdOutlineLocalBar,
    title: 'Bar em Breve',
    desc: 'Uma experiência ainda mais completa vem aí. Drinques exclusivos no seu momento de cuidado.',
  },
  {
    icon: GiHelmet,
    title: 'Cantinho dos Capacetes',
    desc: 'Espaço especial para os motociclistas da casa. Porque aqui cabe o seu universo.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function Experiencia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experiencia" className="relative py-32 bg-[#050505]">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label flex items-center gap-3 mb-4">
              <span className="red-line" />
              A Experiência
            </span>
            <h2 className="section-title">
              MAIS QUE<br />
              <span className="text-gradient-red">UM CORTE</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle md:max-w-sm"
          >
            Do momento que você entra até quando sai, cada detalhe foi pensado para transformar seu tempo aqui em uma experiência inesquecível.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass p-8 md:p-10 group hover:bg-white/[0.06] transition-all duration-500 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 glass-red flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors duration-300">
                    <Icon className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white text-base mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://wa.me/5585981803845"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <span>Viver a Experiência</span>
            <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
