# Angélica Garcia — Arquitetura, Interiores e Urbanismo

Landing page institucional e portfólio interativo desenvolvido para a arquiteta **Angélica Garcia** (`@angelicagarciaarq`), com sede em **Cambuí/MG** e atuação em todo o Sul de Minas e projetos online.

🌐 **Site Online (GitHub Pages):** [https://thierryrs1.github.io/AngelicaGarciaArquitetura/](https://thierryrs1.github.io/AngelicaGarciaArquitetura/)

---

## ✨ Funcionalidades Principais

- **Identidade Visual Fiel**: Monograma geométrico `AG` em SVG vetorial, paleta inspirada na madeira natural, travertino e tons terrosos do escritório da arquiteta.
- **Responsividade Mobile Avançada**:
  - Layout adaptado para smartphones (`320px`, `375px`, `420px`) e tablets sem rolagem horizontal.
  - Menu mobile expansivo com animação de ícone, fechamento ao tocar fora e botão direto de WhatsApp.
  - Suporte a gestos de deslizar (*swipe* horizontal) na galeria Hero e no Lightbox em telas sensíveis ao toque.
  - Barra de filtros do portfólio com deslize horizontal fluido e prevenção de zoom automático no iOS em campos de formulário.
- **Showcase Interativo na Hero**: Alternância automática e manual entre os projetos de destaque da arquiteta.
- **Portfólio com 18 Projetos Reais e Filtro Dinâmico**:
  - Categorias: *Todos*, *Fachadas & Residencial*, *Design de Interiores*, *Campo & Lazer* e *Comercial & Plantas*.
  - **Lightbox Modal**: Visualização ampliada com descrição técnica, navegação por teclado (`Esc`, `←`, `→`) e botão direto para solicitar um projeto no mesmo estilo via WhatsApp.
- **Redirecionamento Inteligente para WhatsApp**:
  - Botões de conversão estrategicamente posicionados na barra superior, cabeçalho, hero, cards de especialidades, lightbox, formulário interativo e botão flutuante.
  - Formulário que estrutura automaticamente o briefing inicial do cliente e abre a conversa em `https://wa.me/5535992522222`.
- **Canais de Contato Centralizados (Single Source of Truth)**:
  - Todas as informações de **WhatsApp** (`wa.me` e máscara de exibição), **E-mail** e **Instagram** são configuradas em um único objeto `CONFIG` no início de [`app.js`](file:///c:/Users/Admin/Desktop/Clientes/AngelicaGarciaArquiteta/app.js).
  - Caso o telefone ou e-mail mude, basta alterar uma única linha e todo o site (links, textos visíveis, formulários e lightbox) se atualiza automaticamente.
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

