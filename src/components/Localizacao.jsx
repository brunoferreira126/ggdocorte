import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiArrowRight } from 'react-icons/fi'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

// ============================================================
// DADOS DE LOCALIZAÇÃO — edite aqui
// ============================================================
const WHATSAPP     = '5585981803845'
const WHATSAPP_VIS = '(85) 9 8180-3845'
const INSTAGRAM    = 'barberggdocorte'
// ENDEREÇO — troque pelo endereço completo real da barbearia
const ENDERECO     = 'Caponga, Cascavel — CE'
const HORARIOS = [
  { dia: 'Segunda a Sábado', hora: '07h às 18h' },
  { dia: 'Domingo',          hora: '07h às 12h' },
]

// ============================================================
// IFRAME DO GOOGLE MAPS — cole o src do seu iframe aqui
// ============================================================
const MAPS_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47705.25246304233!2d-38.26925225031853!3d-4.034778647402609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b89c70b74a9b17%3A0xb4179c46c6c5b854!2sBarbearia%20GG%20do%20Corte!5e0!3m2!1spt-BR!2sbr!4v1779665384080!5m2!1spt-BR!2sbr'

export default function Localizacao() {
  return (
    <section id="localizacao" className="relative py-32 bg-[#050505]">
      <div className="section-padding">

        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label flex items-center gap-3 mb-4"
          >
            <span className="red-line" />
            Onde Estamos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            VENHA NOS<br />
            <span className="text-gradient-red">VISITAR</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Mapa do Google */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
            style={{ height: '450px' }}
          >
            {/*
              IFRAME DO GOOGLE MAPS
              Para atualizar: vá no Google Maps → Compartilhar → Incorporar mapa
              Cole o novo src na variável MAPS_SRC acima
            */}
            <iframe
              src={MAPS_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização GG do Corte"
            />
            {/* Borda vermelha decorativa */}
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent" />
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >

            {/* Endereço */}
            <div className="glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-red flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-red-600" size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-sm mb-1">Endereço</h3>
                  {/* ENDEREÇO — troque pelo endereço completo */}
                  <p className="font-sans text-gray-400 text-sm font-light leading-relaxed">
                    {ENDERECO}<br />
                    <span className="text-gray-600 text-xs">Próximo a [ponto de referência] — troque por referência real</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-red flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-red-600" size={18} />
                </div>
                <div className="w-full">
                  <h3 className="font-sans font-semibold text-white text-sm mb-3">Horários</h3>
                  <div className="flex flex-col gap-2">
                    {HORARIOS.map((h) => (
                      <div key={h.dia} className="flex items-center justify-between">
                        <span className="font-sans text-gray-400 text-sm font-light">{h.dia}</span>
                        <span className="font-sans text-sm font-medium text-white">
                          {h.hora}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-red flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-red-600" size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-sm mb-3">Contato</h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20saber%20onde%20fica%20a%20GG%20do%20Corte`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
                    >
                      <BsWhatsapp size={14} />
                      <span className="font-sans text-sm">{WHATSAPP_VIS}</span>
                    </a>
                    <a
                      href={`https://instagram.com/${INSTAGRAM}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <BsInstagram size={14} />
                      <span className="font-sans text-sm">@{INSTAGRAM}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=Barbearia+GG+do+Corte+Caponga+Cascavel+CE`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-3 group w-fit"
            >
              <FiMapPin size={14} />
              <span>Abrir no Google Maps</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
