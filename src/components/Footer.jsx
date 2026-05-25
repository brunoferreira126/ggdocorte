import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin, FiClock, FiPhone } from 'react-icons/fi'
import { BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs'

// ============================================================
// DADOS DO RODAPÉ — atualize aqui quando mudar
// ============================================================
const WHATSAPP     = '5585981803845'         // Número com DDI + DDD
const WHATSAPP_VIS = '(85) 9 8180-3845'     // Número formatado visível
const INSTAGRAM    = 'barberggdocorte'       // sem o @
const TIKTOK       = 'ggdocorte'             // sem o @
const ENDERECO     = 'Rua Exemplo, 123 — Bairro, Fortaleza/CE' // ← troque pelo endereço real
const HORARIO      = 'Seg a Sáb · 09h às 20h'

// Links de navegação do footer
const links = {
  navegacao: [
    { label: 'Início',      href: '#hero'        },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Serviços',    href: '#servicos'    },
    { label: 'Galeria',     href: '#galeria'     },
    { label: 'Contato',     href: '#agendamento' },
  ],
  formacao: [
    { label: 'Curso de Barbeiro',    href: '#curso' },
    { label: 'Depoimentos de Alunos', href: '#curso' },
    { label: 'Garantir Minha Vaga',   href: '#curso' },
  ],
}

// Redes sociais
const socials = [
  { Icon: BsInstagram, href: `https://instagram.com/${INSTAGRAM}`, label: 'Instagram' },
  { Icon: BsWhatsapp,  href: `https://wa.me/${WHATSAPP}`,          label: 'WhatsApp'  },
  { Icon: BsTiktok,    href: `https://tiktok.com/@${TIKTOK}`,      label: 'TikTok'    },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] border-t border-white/5">
      <div className="section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* -----------------------------------------------
              COLUNA 1 — Marca + endereço + horário + redes
          ----------------------------------------------- */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center overflow-hidden">
                {/*
                  LOGO REAL — descomente quando tiver a imagem:
                  <img src="/images/logo-gg.png" alt="GG" className="w-full h-full object-contain" />
                */}
                <span className="font-display text-white text-xl leading-none">GG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-white text-2xl tracking-widest group-hover:text-red-500 transition-colors duration-300">
                  GG DO CORTE
                </span>
                <span className="font-sans text-[9px] tracking-ultrawide text-gray-500 uppercase">
                  Barbearia Premium
                </span>
              </div>
            </a>

            {/* Descrição */}
            <p className="font-sans text-gray-500 text-sm leading-relaxed font-light max-w-xs mb-6">
              Onde o estilo começa. Uma experiência completa de cuidado masculino premium em Fortaleza, CE.
            </p>

            {/* Endereço */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-start gap-3">
                <FiMapPin size={13} className="text-red-600 mt-0.5 flex-shrink-0" />
                {/* ENDEREÇO — troque pelo endereço real da barbearia */}
                <a
                  href="https://maps.google.com/?q=GG+do+Corte+Fortaleza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-gray-500 text-xs hover:text-white transition-colors leading-relaxed"
                >
                  {ENDERECO}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiClock size={13} className="text-red-600 flex-shrink-0" />
                <span className="font-sans text-gray-500 text-xs">{HORARIO}</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone size={13} className="text-red-600 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-gray-500 text-xs hover:text-green-400 transition-colors"
                >
                  {WHATSAPP_VIS}
                </a>
              </div>
            </div>

            {/* Ícones das redes sociais */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-red-600 hover:bg-red-600 transition-all duration-300 group"
                >
                  <Icon size={14} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* -----------------------------------------------
              COLUNA 2 — Links de navegação
          ----------------------------------------------- */}
          <div>
            <h4 className="font-sans text-white text-xs tracking-widest uppercase font-semibold mb-6">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {links.navegacao.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-gray-500 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* -----------------------------------------------
              COLUNA 3 — Formação + CTA WhatsApp
          ----------------------------------------------- */}
          <div>
            <h4 className="font-sans text-white text-xs tracking-widest uppercase font-semibold mb-6">
              Formação
            </h4>
            <ul className="flex flex-col gap-3">
              {links.formacao.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-gray-500 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mini CTA WhatsApp no footer */}
            <div className="mt-8">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20agendar%20um%20horário`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-red px-4 py-3 flex items-center gap-3 group hover:bg-red-600/20 transition-all duration-300"
              >
                <BsWhatsapp size={14} className="text-red-500" />
                <span className="font-sans text-xs text-red-400 group-hover:text-red-300 transition-colors">
                  Agendar Agora
                </span>
                <FiArrowRight size={12} className="text-red-500 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior com copyright */}
      <div className="section-padding py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-gray-700 text-xs">
            © {new Date().getFullYear()} GG do Corte. Todos os direitos reservados.
          </span>
          <span className="font-sans text-gray-800 text-xs">
            Fortaleza, Ceará — Brasil
          </span>
        </div>
      </div>
    </footer>
  )
}
