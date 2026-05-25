import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMapPin } from 'react-icons/fi'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

const navLinks = [
  { label: 'Agendamento', href: '#agendamento' },
  { label: 'Curso',       href: '#curso'       },
  { label: 'Serviços',    href: '#servicos'    },
  { label: 'Galeria',     href: '#galeria'     },
  { label: 'Experiência', href: '#experiencia' },
]

// ============================================================
// DADOS DE CONTATO
// ============================================================
const WHATSAPP     = '5585981803845'
const INSTAGRAM    = 'barberggdocorte'
const ENDERECO     = 'Caponga/Cascavel, CE'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Barra superior — localização + redes sociais */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b border-white/5 px-6 md:px-12 lg:px-24 py-2 items-center justify-between">
        <a
          href="https://maps.google.com/?q=GG+do+Corte+Fortaleza"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
        >
          <FiMapPin size={11} className="text-red-600" />
          {/* ENDEREÇO — troque pelo endereço completo da barbearia */}
          <span className="font-sans text-[10px] tracking-widest uppercase">
            {ENDERECO} — Rua Exemplo, 123
          </span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
          >
            <BsInstagram size={12} />
            <span className="font-sans text-[10px] tracking-widest uppercase">@{INSTAGRAM}</span>
          </a>
          <span className="w-px h-3 bg-white/10" />
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors duration-300"
          >
            <BsWhatsapp size={12} />
            <span className="font-sans text-[10px] tracking-widest uppercase">(85) 9 8180-3845</span>
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 md:top-9 top-0 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20">

          {/* -----------------------------------------------
              LOGO — usando o arquivo: public/images/logo icone.png
              Para trocar a logo, substitua o arquivo em public/images/
          ----------------------------------------------- */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/*
                LOGO REAL DO GG — arquivo: public/images/logo icone.png
                Se quiser mudar o tamanho, ajuste w-14 h-14 acima
              */}
              <img
               src="/images/logo.png"
                alt="GG do Corte"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Se não achar a imagem, mostra texto como fallback
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback caso a imagem não carregue */}
              <div className="w-14 h-14 bg-red-600 items-center justify-center hidden">
                <span className="font-display text-white text-2xl leading-none">GG</span>
              </div>
              {/* Borda animada no hover */}
              <div className="absolute inset-0 border border-red-600 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>

            {/* Texto ao lado da logo */}
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-2xl tracking-widest group-hover:text-red-500 transition-colors duration-300">
                GG DO CORTE
              </span>
              <span className="font-sans text-[9px] tracking-ultrawide text-gray-400 uppercase">
                Barbearia Premium · {ENDERECO}
              </span>
            </div>
          </a>

          {/* Links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA — desktop */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20agendar%20um%20horário%20no%20GG%20do%20Corte`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-6 py-3 flex items-center gap-2"
            >
              <BsWhatsapp size={13} className="relative z-10" />
              <span>Agendar Agora</span>
            </a>
          </div>

          {/* Hambúrguer — mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Menu mobile fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-8"
          >
            {/* Logo no menu mobile */}
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <img
                src="public/images/logo.png"
                alt="GG do Corte"
                className="w-10 h-10 object-contain"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="font-display text-white text-xl tracking-widest">GG DO CORTE</span>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-display text-5xl text-white tracking-widest hover:text-red-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20agendar`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="btn-primary w-fit mt-4 flex items-center gap-3"
              >
                <BsWhatsapp size={15} className="relative z-10" />
                <span>Agendar Agora</span>
              </motion.a>
            </div>

            <div className="absolute bottom-10 left-8 flex flex-col gap-2">
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-white transition-colors"
              >
                <BsInstagram size={12} />
                <span className="font-sans text-xs tracking-widest uppercase">@{INSTAGRAM}</span>
              </a>
              <span className="flex items-center gap-2">
                <FiMapPin size={11} className="text-red-600/50" />
                <span className="font-sans text-xs text-gray-600 tracking-widest uppercase">{ENDERECO}</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
