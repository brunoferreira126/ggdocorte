# GG do Corte — Landing Page Premium

## Stack
- React + Vite
- TailwindCSS
- Framer Motion
- React Icons

---

## Como rodar no seu VS Code

### 1. Copie os arquivos para o seu projeto

Substitua os seguintes arquivos no seu `gg-premium/`:

```
package.json          → dependências corretas
vite.config.js        → configuração Vite
tailwind.config.js    → paleta + fontes GG
postcss.config.js     → configuração PostCSS
index.html            → com Google Fonts (Poppins + Bebas Neue)

src/index.css         → estilos globais, variáveis, utilitários
src/main.jsx          → entry point
src/App.jsx           → monta todas as seções

src/components/
  Navbar.jsx          → Navbar fixa com scroll e menu mobile
  Hero.jsx            → Hero cinematográfico com vídeo
  Experiencia.jsx     → Grid de diferenciais
  Servicos.jsx        → Lista de serviços com hover premium
  AntesDepois.jsx     → Slider comparativo interativo
  Curso.jsx           → Seção do curso com prova social
  Depoimentos.jsx     → Carrossel de depoimentos
  Galeria.jsx         → Grid de fotos
  Agendamento.jsx     → CTA final de agendamento
  Footer.jsx          → Footer completo com links
```

### 2. Instale as dependências

```bash
cd gg-premium
npm install
```

### 3. Rode em desenvolvimento

```bash
npm run dev
```

Abra: http://localhost:5173

---

## Personalização obrigatória

### Número do WhatsApp
Busque e substitua em todos os componentes:
```
https://wa.me/5500000000000
```
Pelo número real: `https://wa.me/55XXXXXXXXXXX`

### Vídeo do Hero
Coloque o vídeo em `public/videos/hero.mp4`
E o poster (frame) em `public/images/hero-poster.jpg`

### Imagens da galeria e antes/depois
Coloque as fotos em `public/images/`:
- `galeria-1.jpg` até `galeria-6.jpg`
- `antes-1.jpg`, `depois-1.jpg`, etc.

### Textos e preços
Edite diretamente nos componentes — cada arquivo tem os dados no topo como arrays.

### Instagram / redes sociais
No `Footer.jsx` e `Galeria.jsx`, atualize os links.

---

## Estrutura de componentes

```
App.jsx
├── Navbar          → topo fixo com animação de scroll
├── Hero            → vídeo + título grande + CTAs + stats
├── Experiencia     → grid 3x2 com diferenciais
├── Servicos        → lista com números + preços
├── AntesDepois     → slider drag interativo
├── Curso           → pitch + benefícios + depoimentos alunos
├── Depoimentos     → carrossel automático + seleção manual
├── Galeria         → grid assimétrico de fotos
├── Agendamento     → CTA centralizado com efeitos
└── Footer          → links + redes + copyright
```

---

## Próximas etapas sugeridas

- [ ] Adicionar vídeo real no Hero
- [ ] Substituir imagens placeholder pelas do GG
- [ ] Atualizar número de WhatsApp
- [ ] Atualizar textos de preços
- [ ] Adicionar seção de Produtos (se necessário)
- [ ] Integrar com sistema de agendamento real
- [ ] Configurar domínio e deploy (Vercel recomendado)
- [ ] Adicionar Google Analytics / Pixel do Facebook

---

## Deploy (Vercel — recomendado)

```bash
npm run build
```
Suba a pasta `dist/` ou conecte o repositório no vercel.com
