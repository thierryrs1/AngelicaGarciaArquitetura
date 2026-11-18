# Angélica Garcia — Arquitetura, Interiores e Urbanismo

Landing page institucional e portfólio interativo desenvolvido para a arquiteta **Angélica Garcia** (`@angelicagarciaarq`), com sede em **Cambuí/MG** e atuação em todo o Sul de Minas e projetos online.

🌐 **Site Online (GitHub Pages):** [https://thierryrs1.github.io/AngelicaGarciaArquitetura/](https://thierryrs1.github.io/AngelicaGarciaArquitetura/)

---

## ✨ Funcionalidades Principais

- **Identidade Visual Oficial**:
  - Monograma geométrico `AG` em SVG vetorial fiel ao arquivo CorelDRAW (`.cdr`) e ao Manual de Identidade Visual.
  - Cartela de cores oficial aplicada em destaque e equilíbrio: Rosa Fosco (`#E39A9A`), Cinza Grafite (`#3D3D3D`), Cinza Chumbo (`#515151`) e Cinza Claro (`#F7F7F8`), com botões de ação primários, tags de seção, medalhão monograma, realces de cards e rodapé temático na paleta da arquiteta.
- **Responsividade Mobile Avançada**:
  - Layout adaptado para smartphones (`320px`, `375px`, `420px`) e tablets sem rolagem horizontal.
  - Menu mobile expansivo com animação de ícone, fechamento ao tocar fora e botão direto de WhatsApp.
  - Suporte a gestos de deslizar (*swipe* horizontal) na galeria Hero e no Lightbox em telas sensíveis ao toque.
  - Barra de filtros do portfólio com deslize horizontal fluido e prevenção de zoom automático no iOS em campos de formulário.
- **Alta Performance & Carregamento Instantâneo (WebP & Core Web Vitals)**:
  - 100% das imagens convertidas e servidas no formato de última geração **WebP**, reduzindo o peso total do site em **~40%** (de 12,55 MB para 7,56 MB) sem nenhuma perda de nitidez visual.
  - Carregamento prioritário (`fetchpriority="high"`) na imagem principal da Hero para otimização máxima do LCP (*Largest Contentful Paint*).
  - *Lazy loading* nativo e decodificação assíncrona (`decoding="async"`) em todas as imagens fora da primeira dobra e nas miniaturas.
  - Dimensões explícitas para prevenção de deslocamento de layout (*CLS* zero).
- **Especialidades & Áreas de Atuação com Imagens de Alto Impacto**:
  - Cards de serviços atualizados com projetos reais de altíssimo padrão:
    1. **Arquitetura Residencial**: Fachada contemporânea imponente com balanço escultural e luz cênica.
    2. **Design de Interiores**: Living nobre com forro iluminado e marcenaria sob medida.
    3. **Arquitetura Comercial & Corporativa**: Projeto de reforma comercial contemporânea com fachada imponente e iluminação moderna.
    4. **Casas de Campo, Lazer & Reformas**: Residência de campo panorâmica integrada à natureza e montanhas.
- **Modo Apresentação em Tela Cheia (Theater Stage para Clientes & Reuniões)**:
  - Botão dedicado **"Modo Apresentação"** no portfólio (ou atalho de teclado `P`) projetado especificamente para reuniões presenciais em TV/projetor ou videoconferências.
  - Oculta distrações do site (menus, formulários, botões) e exibe as fotos em tela cheia cinematográfica sobre fundo grafite escuro com o monograma vetorial oficial da arquiteta.
  - Respeita os filtros de categoria ativos (ex: se filtrar por *Campo & Lazer*, a apresentação roda apenas os projetos de campo).
  - Contador numérico elegante (`01 / 37`), identificação da categoria, descrição editorial do projeto e navegação fluida por teclado (`←`, `→`, `Espaço`, `Esc`), botões laterais ou gestos de deslizar (*swipe* no tablet/celular).
  - Botão de alternância para tela cheia nativa (*Fullscreen API*).
- **Showcase Interativo na Hero com 7 Destaques de Alto Padrão**:
  - Seleção das melhores obras da arquiteta com alternância automática e manual (e suporte a gestos de deslizar *swipe* no celular):
    1. **Fachada Contemporânea de Alto Padrão**: Volumetria marcante, balanço escultural e iluminação cênica.
    2. **Área de Lazer & Piscina**: Piscina revestida em pedra natural, deck e paisagismo integrado.
    3. **Casa de Campo Panorâmica**: Arquitetura campestre de luxo integrada à natureza e montanhas.
    4. **Living & Lounge Social**: Design de interiores nobre com marcenaria sob medida e forro iluminado.
    5. **Residência Crepúsculo**: Casa contemporânea executada sob iluminação crepuscular.
    6. **Residência Neoclássica Contemporânea**: Simetria, sofisticação e pórtico de entrada imponente.
    7. **Espaço Gourmet & Lazer Premium**: Área gourmet ampla para convivência com acabamentos nobres.
- **Portfólio em Carrossel Interativo com 37 Projetos Reais e Filtro Dinâmico**:
  - Carrossel horizontal responsivo (3 projetos por vista no desktop, 2 no tablet, 1 com *peek* no mobile), com botões de avanço/recuo, barra de progresso e suporte a *swipe*.
  - Categorias: *Todos (37)*, *Fachadas & Residencial*, *Design de Interiores*, *Campo & Lazer* e *Comercial & Plantas*.
  - Títulos 100% profissionais, elegantes e conceituais (sem exposição de nomes de clientes ou dados de terceiros).
  - **Lightbox Modal**: Visualização ampliada com descrição técnica, navegação por teclado (`Esc`, `←`, `→`) e botão direto para solicitar um projeto no mesmo estilo via WhatsApp.
- **Seção de Vídeos & Tours Virtuais 3D (`#videos`)**:
  - 7 passeios virtuais em vídeo com players nativos do YouTube embutidos diretamente nos cards e gerenciados via `CONFIG.videos` em [`app.js`](file:///c:/Users/Admin/Desktop/Clientes/AngelicaGarciaArquiteta/app.js).
- **Redirecionamento Inteligente para WhatsApp**:
  - Botões de conversão estrategicamente posicionados na barra superior, cabeçalho, hero, cards de especialidades, lightbox, formulário interativo e botão flutuante.
  - Formulário que estrutura automaticamente o briefing inicial do cliente e abre a conversa em `https://wa.me/5535992522222`.
- **Canais de Contato, CAU & Endereço Centralizados (Single Source of Truth)**:
  - Todas as informações de **WhatsApp**, **E-mail**, **Instagram**, **CAU** (`CAU A103145-7`), **Endereço** com link direto para o **Google Maps** (`R. Getúlio Vargas, 111 - Centro, Cambuí - MG, 37600-000`) e **Vídeos do YouTube** são configuradas em um único objeto `CONFIG` no início de [`app.js`](file:///c:/Users/Admin/Desktop/Clientes/AngelicaGarciaArquiteta/app.js).
  - **Registro Profissional**: `CAU A103145-7`
  - **Endereço & Localização**: `R. Getúlio Vargas, 111 - Centro, Cambuí - MG, 37600-000` — [maps.app.goo.gl/w88qzHhkhVsbSmDD7](https://maps.app.goo.gl/w88qzHhkhVsbSmDD7) (com links interativos para o Google Maps na topbar, na seção do escritório, no card de contato e no rodapé)
  - **WhatsApp**: [wa.me/5535992522222](https://wa.me/5535992522222) — `(35) 99252-2222`
  - **E-mail**: `angelicagarcia.arq@gmail.com` (com opção de envio direto e cópia rápida para a área de transferência)
  - **Instagram**: [@angelicagarciaarq](https://www.instagram.com/angelicagarciaarq/)

---

## 📁 Estrutura do Projeto

```text
AngelicaGarciaArquiteta/
├── assets/
│   └── img/                  # Fotografias do escritório e projetos reais otimizados
├── index.html                # Estrutura semântica da Landing Page
├── styles.css                # Estilização responsiva e animações
├── app.js                    # Lógica centralizada (filtros, lightbox, WhatsApp, navegação)
├── favicon.svg               # Monograma AG em SVG
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador moderno ou iniciar um servidor estático local:

```bash
# Utilizando Python
python -m http.server 8080
```

Em seguida, acesse `http://localhost:8080` no navegador.

