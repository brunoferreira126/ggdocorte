import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown, FiHelpCircle } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

// ============================================================
// DADOS — edite aqui
// ============================================================
const WHATSAPP_AGENDAMENTO = '5585981803845'
const WHATSAPP_SUPORTE     = '5585981803845'
const LINK_AGENDAMENTO     = 'https://cashbarber.com.br/ggdocorte'

const stats = [
  { number: '10+',    label: 'Anos de Experiência' },
  { number: '3000+', label: 'Clientes Satisfeitos' },
  { number: '50+',  label: 'Alunos Formados'      },
]

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function Hero() {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">

      {/* =======================================================
          FOTO DE FUNDO DO GG
          Arquivo: public/images/gg-foto.jpg
      ======================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gg-foto.jpg"
          alt="GG do Corte"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* =======================================================
          FOTO DO GG — lado direito (destaque)
          Arquivo: public/images/gg-foto.jpg
      ======================================================= */}
      <div className="absolute right-0 bottom-0 top-0 w-[55%] z-0 hidden lg:block">
        <img
          src="/images/gg-foto.jpg"
          alt="GG Barbeiro"
          className="w-full h-full object-cover object-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 80%, transparent 100%)',
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Linha vermelha decorativa */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '60%' }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 bg-gradient-to-b from-transparent via-red-600 to-transparent z-10"
      />

      {/* Conteúdo */}
      <div className="relative z-10 section-padding w-full pt-44 pb-32">
        <div className="max-w-2xl">

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="flex items-center gap-3 mb-8">
            <span className="red-line" />
            <span className="section-label">Barbearia Premium — Caponga, Cascavel/CE</span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-none text-white">
            ONDE O
          </motion.h1>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-none text-gradient-red">
            ESTILO
          </motion.h1>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-none text-white mb-8">
            COMEÇA.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="section-subtitle mb-10 text-gray-300">
            Não é só um corte. É uma experiência completa — ambiente premium, profissionais de elite e o cuidado que você merece. Referência em Caponga e região.
          </motion.p>

          {/* CTAs principais */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="flex flex-col sm:flex-row items-start gap-4 mb-6">

            {/* Botão de agendamento — link CashBarber */}
            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <BsWhatsapp size={15} className="relative z-10" />
              <span>Agendar Agora</span>
              <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Curso */}
            <a href="#curso" className="btn-outline group">
              <span>Curso de Barbeiro</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Suporte online */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}>
            <a
              href={`https://wa.me/${WHATSAPP_SUPORTE}?text=Olá!%20Preciso%20de%20ajuda%20para%20fazer%20meu%20agendamento`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 group"
            >
              <FiHelpCircle size={14} className="text-red-600/60 group-hover:text-red-500 transition-colors" />
              <span className="font-sans text-xs tracking-wide underline underline-offset-4 decoration-white/20 group-hover:decoration-red-600 transition-all">
                Dificuldade para agendar? Fale com nosso suporte online
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={7}
            className="flex items-center gap-10 mt-16 pt-10 border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl text-red-600 leading-none">{stat.number}</span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-gray-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] tracking-ultrawide uppercase text-gray-600">Explorar</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <FiChevronDown className="text-gray-600" size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
