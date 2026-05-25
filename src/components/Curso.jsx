import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

// ============================================================
// LINKS E DADOS DO CURSO — edite aqui
// ============================================================
const LINK_INSCRICAO = 'https://docs.google.com/forms/d/e/1FAIpQLSfgrIZNDTI5fClbuUDHXP-0LO2voh6z-akoSnpXH0Ox--Lcgg/viewform'

const beneficios = [
  'Técnicas profissionais de degradê e cortes modernos',
  'Módulo completo de barba — modelagem e hidratação',
  'Coloração, luzes e platinado',
  'Gestão e empreendedorismo para barbearia',
  'Certificado reconhecido no mercado',
  'Suporte pós-curso com a equipe GG',
  'Acesso à comunidade exclusiva de alunos',
  'Material didático completo incluso',
]

// Depoimentos de alunos da região
const depoimentosAlunos = [
  {
    nome: 'Mateus S.',
    cidade: 'Cascavel, CE',
    texto: 'O curso do GG abriu minha cabeça. Aprendi do zero e hoje atendo em casa com uma cartela cheia aqui em Cascavel.',
    destaque: 'Atende em casa',
  },
  {
    nome: 'Davi R.',
    cidade: 'Caponga, CE',
    texto: 'Melhor investimento que fiz. Em dois meses de formado já estava me pagando. GG ensina de verdade!',
    destaque: 'Retorno em 2 meses',
  },
  {
    nome: 'Thiago L.',
    cidade: 'Beberibe, CE',
    texto: 'Vim de Beberibe especialmente pro curso e valeu cada km. Hoje tenho minha barbearia e não me arrependo.',
    destaque: 'Abriu a própria barbearia',
  },
]

export default function Curso() {
  return (
    <section id="curso" className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 border border-red-600/10 rounded-full pointer-events-none" />

      <div className="section-padding relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label flex items-center gap-3 mb-4"
          >
            <span className="red-line" />
            Formação Profissional
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <h2 className="section-title">
              CURSO DE<br />
              <span className="text-gradient-red">BARBEIRO</span>
            </h2>
            <div className="glass-red px-6 py-3 w-fit">
              <span className="font-sans text-red-500 text-sm font-semibold tracking-widest uppercase">
                🔥 Turma Aberta
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            FOTO DA TURMA — arquivo: public/images/turmas-curso.png
            Aparece em destaque acima do conteúdo
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 overflow-hidden"
        >
          <img
            src="/images/turmas-curso.png"
            alt="Turma formada pelo Curso de Barbeiro GG do Corte — Caponga, Cascavel CE"
            className="w-full h-72 md:h-96 object-cover object-top"
          />
          {/* Overlay gradiente na foto da turma */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/40" />

          {/* Badge sobre a foto */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="glass px-5 py-3">
              <span className="font-display text-white text-2xl">200+ ALUNOS FORMADOS</span>
              <p className="font-sans text-xs text-gray-400 mt-1">e atuando no mercado em todo o Ceará</p>
            </div>
            <div className="glass px-5 py-3 hidden md:block">
              <span className="font-sans text-[10px] tracking-widest uppercase text-red-500">Caponga · Cascavel · CE</span>
            </div>
          </div>
        </motion.div>

        {/* Grid conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Esquerda — pitch e benefícios */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Aprenda com quem realmente faz. O GG do Corte forma barbeiros que saem prontos para o mercado — com técnica, postura e mentalidade de profissional. Aqui em Caponga, referência no Ceará.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck size={11} className="text-red-600" />
                  </div>
                  <span className="font-sans text-gray-300 text-sm font-light">{b}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA inscrição — Google Forms */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={LINK_INSCRICAO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>Garantir Minha Vaga</span>
                <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex flex-col justify-center">
                <span className="font-sans text-xs text-gray-500 font-light">Vagas limitadas por turma</span>
                <span className="font-sans text-xs text-red-500 font-medium">Inscrição pelo formulário</span>
              </div>
            </div>
          </motion.div>

          {/* Direita — depoimentos de alunos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-6">
              O que dizem nossos alunos
            </h3>
            {depoimentosAlunos.map((dep) => (
              <div key={dep.nome} className="glass p-6 relative overflow-hidden group hover:bg-white/[0.06] transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
                <div className="pl-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-sans font-semibold text-white text-sm">{dep.nome}</span>
                      <span className="font-sans text-gray-500 text-xs ml-2">— {dep.cidade}</span>
                    </div>
                    <span className="font-sans text-[10px] tracking-widest uppercase bg-red-600/10 text-red-500 px-2 py-1 border border-red-600/20">
                      {dep.destaque}
                    </span>
                  </div>
                  <p className="font-sans text-gray-400 text-sm font-light leading-relaxed italic">
                    "{dep.texto}"
                  </p>
                </div>
              </div>
            ))}

            <div className="glass p-6 text-center">
              <span className="font-display text-6xl text-red-600">200+</span>
              <p className="font-sans text-gray-400 text-sm mt-1">alunos formados — do Ceará pro mundo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
