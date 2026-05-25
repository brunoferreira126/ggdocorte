import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

// ============================================================
// TABELA DE SERVIÇOS E PREÇOS — edite aqui
// ============================================================
const servicos = [
  { number: '01', name: 'Degradê',      preco: 'R$ 30,00', desc: 'Transição perfeita do mais escuro ao mais claro. Técnica de elite.' },
  { number: '02', name: 'Corte Social', preco: 'R$ 25,00', desc: 'Clássico com acabamento premium. Elegância que fala por si.', destaque: true },
  { number: '03', name: 'Barba',        preco: 'R$ 20,00', desc: 'Modelagem, hidratação e acabamento. Sua barba cuidada.' },
  { number: '04', name: 'Bigode',       preco: 'R$ 5,00',  desc: 'Definição e acabamento perfeito.' },
  { number: '05', name: 'Pézinho',      preco: 'R$ 5,00',  desc: 'Acabamento na nuca com precisão.' },
  { number: '06', name: 'Sobrancelha',  preco: 'R$ 10,00', desc: 'Design e definição para um visual completo.' },
  { number: '07', name: 'Listra',       preco: 'R$ 2,00',  desc: 'Detalhe que faz toda a diferença no estilo.' },
  { number: '08', name: 'Platinado',    preco: 'R$ 100,00', desc: 'Transformação radical com técnica de alta performance.' },
]

const LINK_AGENDAMENTO = 'https://cashbarber.com.br/ggdocorte'

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-32 bg-[#111111]">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label flex items-center gap-3 mb-4"
          >
            <span className="red-line" />
            Serviços & Preços
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title"
            >
              O QUE<br />
              <span className="text-gradient-red">OFERECEMOS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-subtitle"
            >
              Preços justos, qualidade premium. Padrão GG em cada detalhe.
            </motion.p>
          </div>
        </div>

        {/* Lista de serviços */}
        <div className="divide-y divide-white/5">
          {servicos.map((servico, i) => (
            <motion.div
              key={servico.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-7 gap-4 hover:px-4 transition-all duration-500 cursor-default"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-10">
                <span className="font-display text-4xl text-white/10 group-hover:text-red-600/30 transition-colors duration-500 leading-none w-10">
                  {servico.number}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-red-500 transition-colors duration-300 leading-none">
                      {servico.name.toUpperCase()}
                    </h3>
                    {/* Badge "Popular" para o Corte Social */}
                    {servico.destaque && (
                      <span className="font-sans text-[9px] tracking-widest uppercase bg-red-600 text-white px-2 py-0.5">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-gray-500 text-sm mt-1 font-light max-w-md">
                    {servico.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 ml-16 md:ml-0">
                {/* Preço */}
                <span className="font-display text-2xl text-white/80 group-hover:text-red-500 transition-colors duration-300 whitespace-nowrap">
                  {servico.preco}
                </span>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300">
                  <FiArrowRight size={14} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <span>Agendar Agora</span>
            <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
