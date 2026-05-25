import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiMapPin, FiCalendar } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

// ============================================================
// LINKS E DADOS — edite aqui
// ============================================================
const LINK_AGENDAMENTO  = 'https://cashbarber.com.br/ggdocorte'   // Sistema de agendamento
const WHATSAPP_SUPORTE  = '5585981803845'
const HORARIO           = 'Segunda a Sábado · 08h às 20h'
const ENDERECO_CURTO    = 'Caponga, Cascavel — CE'

export default function Agendamento() {
  return (
    <section id="agendamento" className="relative bg-[#111111] overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

        {/* =======================================================
            FOTO DE AGENDAMENTO — lado esquerdo
            Arquivo: public/images/agendamento.jpg
        ======================================================= */}
        <div className="relative h-72 lg:h-auto order-2 lg:order-1">
          <img
            src="/images/agendamento.jpg"
            alt="Agende seu horário no GG do Corte"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente sobre a foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent lg:hidden" />

          {/* Badge flutuante sobre a foto */}
          <div className="absolute bottom-8 left-8 glass px-5 py-4 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-sans text-xs text-white tracking-widest uppercase">Agendamento Online Disponível</span>
            </div>
          </div>
        </div>

        {/* Conteúdo — lado direito */}
        <div className="relative z-10 order-1 lg:order-2 flex items-center px-8 md:px-16 py-20">
          <div className="max-w-lg w-full">

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label flex items-center gap-3 mb-4"
            >
              <span className="red-line" />
              Agendamento Online
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title mb-6"
            >
              GARANTA SEU<br />
              <span className="text-gradient-red">HORÁRIO</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mb-10"
            >
              Sem fila, sem espera. Agende direto pelo nosso sistema e chegue na hora certa. Rápido, fácil e garantido.
            </motion.p>

            {/* Infos rápidas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 mb-10"
            >
              <div className="flex items-center gap-3">
                <FiClock size={14} className="text-red-600 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">{HORARIO}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin size={14} className="text-red-600 flex-shrink-0" />
                {/* ENDEREÇO — troque pelo endereço completo */}
                <span className="font-sans text-sm text-gray-400">{ENDERECO_CURTO}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCalendar size={14} className="text-red-600 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">Confirmação imediata pelo sistema</span>
              </div>
            </motion.div>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {/* CTA principal — sistema CashBarber */}
              <a
                href={LINK_AGENDAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-fit"
              >
                <FiCalendar size={15} className="relative z-10" />
                <span>Agendar Agora</span>
                <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Suporte — WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_SUPORTE}?text=Olá!%20Preciso%20de%20ajuda%20para%20agendar%20no%20GG%20do%20Corte`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors duration-300 group w-fit"
              >
                <BsWhatsapp size={14} />
                <span className="font-sans text-xs tracking-wide underline underline-offset-4 decoration-white/10 group-hover:decoration-green-400 transition-all">
                  Prefere pelo WhatsApp? Clique aqui
                </span>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
