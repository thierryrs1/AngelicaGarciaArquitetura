# Angélica Garcia — Arquitetura, Interiores e Urbanismo

Landing page institucional e portfólio interativo desenvolvido para a arquiteta **Angélica Garcia** (`@angelicagarciaarq`), com sede em **Cambuí/MG** e atuação em todo o Sul de Minas e projetos online.

---

## ✨ Funcionalidades Principais

- **Identidade Visual Fiel**: Monograma geométrico `AG` em SVG vetorial, paleta inspirada na madeira natural, travertino e tons terrosos do escritório da arquiteta.
- **Showcase Interativo na Hero**: Alternância automática e manual entre os projetos de destaque da arquiteta.
- **Portfólio com 18 Projetos Reais e Filtro Dinâmico**:
  - Categorias: *Todos*, *Fachadas & Residencial*, *Design de Interiores*, *Campo & Lazer* e *Comercial & Plantas*.
  - **Lightbox Modal**: Visualização ampliada com descrição técnica, navegação por teclado (`Esc`, `←`, `→`) e botão direto para solicitar um projeto no mesmo estilo via WhatsApp.
- **Redirecionamento Inteligente para WhatsApp**:
  - Botões de conversão estrategicamente posicionados na barra superior, cabeçalho, hero, cards de especialidades, lightbox, formulário interativo e botão flutuante.
  - Formulário que estrutura automaticamente o briefing inicial do cliente e abre a conversa em `https://wa.me/5535992522222`.
- **Canais de Contato Integrados**:
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

