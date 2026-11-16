'use strict';

/**
 * Angélica Garcia Arquitetura, Interiores e Urbanismo
 * Configurações e lógica principal da Landing Page
 */
const App = (() => {
  // =========================================================================
  // CONFIGURAÇÃO CENTRALIZADA (ÚNICO LOCAL PARA EDITAR CONTATOS E VÍDEOS)
  // =========================================================================
  const CONFIG = {
    whatsappNumber: '5535992522222',
    whatsappDisplay: '(35) 99252-2222',
    email: 'angelicagarcia.arq@gmail.com',
    instagramUser: '@angelicagarciaarq',
    instagramUrl: 'https://www.instagram.com/angelicagarciaarq/',
    cau: 'CAU A103145-7',
    addressShort: 'R. Getúlio Vargas, 111 - Centro, Cambuí/MG',
    addressFull: 'R. Getúlio Vargas, 111 - Centro, Cambuí - MG, 37600-000',
    defaultCity: 'Cambuí/MG',
    videos: {
      video1: 'https://youtu.be/v1m7bIUq_B4', // 01 Interiores Residencial
      video2: 'https://youtu.be/YVemiMq7Uts', // 02 Interiores Comercial 1 (Clínica Fisio Corrêa)
      video3: 'https://youtu.be/Upaxh2Rtx08', // 03 Interiores Comercial 2
      video4: 'https://youtu.be/aDLWLHBzNJc', // 04 Interiores Comercial 3
      video5: 'https://youtu.be/zz5xanKI17Q', // 05 Reforma Comercial (Wandré Veículos)
      video6: 'https://youtu.be/TMlAr1SBFKk', // 06 Arquitetônico Residencial 1 (Edifício Mason 167)
      video7: 'https://youtu.be/lggV7VD-uek', // 07 Arquitetônico Residencial 2 (Residência em Desnível)
    },
  };

  let visiblePortfolioItems = [];
  let currentLightboxIndex = 0;
  let heroIntervalId = null;

  /**
   * Constrói URL do WhatsApp com mensagem codificada
   * @param {string} message
   * @returns {string}
   */
  function buildWhatsAppUrl(message = '') {
    if (!message) {
      return `https://wa.me/${CONFIG.whatsappNumber}`;
    }
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Extrai o ID de 11 caracteres de qualquer formato de link do YouTube
   * @param {string} input
   * @returns {string}
   */
  function extractYouTubeId(input = '') {
    const trimmed = input.trim();
    if (!trimmed) return '';
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
  }

  /**
   * Injeta os dados centralizados de contato, CAU e endereço em todo o HTML
   */
  function bindContactData() {
    // 1. Links de WhatsApp com mensagens pré-definidas
    const waLinks = document.querySelectorAll('[data-wa-link]');
    waLinks.forEach((link) => {
      const message = link.getAttribute('data-wa-message') || '';
      link.href = buildWhatsAppUrl(message);
    });

    // 2. Textos de WhatsApp para exibição visual (ex: "(35) 99252-2222")
    const waDisplays = document.querySelectorAll('[data-wa-display]');
    waDisplays.forEach((el) => {
      const prefix = el.getAttribute('data-wa-prefix') || '';
      el.textContent = `${prefix}${CONFIG.whatsappDisplay}`;
    });

    // 3. Links de E-mail (mailto:)
    const emailLinks = document.querySelectorAll('[data-email-link]');
    emailLinks.forEach((link) => {
      link.href = `mailto:${CONFIG.email}`;
    });

    // 4. Textos de E-mail exibidos
    const emailTexts = document.querySelectorAll('[data-email-text]');
    emailTexts.forEach((el) => {
      el.textContent = CONFIG.email;
    });

    // 5. Botões de cópia de e-mail
    const emailCopies = document.querySelectorAll('[data-email-copy]');
    emailCopies.forEach((btn) => {
      btn.setAttribute('data-email', CONFIG.email);
    });

    // 6. Links do Instagram
    const instaLinks = document.querySelectorAll('[data-instagram-link]');
    instaLinks.forEach((link) => {
      link.href = CONFIG.instagramUrl;
    });

    // 7. Textos do Instagram exibidos (ex: "@angelicagarciaarq")
    const instaTexts = document.querySelectorAll('[data-instagram-text]');
    instaTexts.forEach((el) => {
      const suffix = el.getAttribute('data-instagram-suffix') || '';
      el.textContent = `${CONFIG.instagramUser}${suffix}`;
    });

    // 8. Registro CAU
    const cauElements = document.querySelectorAll('[data-cau]');
    cauElements.forEach((el) => {
      el.textContent = CONFIG.cau;
    });

    // 9. Endereço curto e completo
    const addressShortElements = document.querySelectorAll('[data-address-short]');
    addressShortElements.forEach((el) => {
      el.textContent = CONFIG.addressShort;
    });

    const addressFullElements = document.querySelectorAll('[data-address-full]');
    addressFullElements.forEach((el) => {
      el.textContent = CONFIG.addressFull;
    });

    // 10. Players de Vídeo do YouTube (embutidos diretamente via CONFIG.videos)
    const youtubeEmbeds = document.querySelectorAll('[data-youtube-embed]');
    youtubeEmbeds.forEach((iframe) => {
      const key = iframe.getAttribute('data-youtube-embed') || '';
      const rawUrl = CONFIG.videos[key] || '';
      const ytId = extractYouTubeId(rawUrl);
      if (ytId) {
        iframe.src = `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`;
      }
    });
  }

  /**
   * Inicializa comportamento do cabeçalho fixo e menu mobile
   */
  function initNavigation() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 24) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      const scrollPos = window.scrollY + 160;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (menuToggle && navMenu) {
      const closeMobileMenu = () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      };

      menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = navMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });

      document.addEventListener('click', (event) => {
        if (!navMenu.classList.contains('open')) return;
        const target = event.target;
        if (target instanceof Node && !navMenu.contains(target) && !menuToggle.contains(target)) {
          closeMobileMenu();
        }
      });
    }
  }

  /**
   * Inicializa o seletor interativo de imagens na seção Hero
   */
  function initHeroShowcase() {
    const mainImg = document.getElementById('hero-featured-img');
    const mainTag = document.getElementById('hero-featured-tag');
    const mainTitle = document.getElementById('hero-featured-title');
    const thumbs = Array.from(document.querySelectorAll('.hero-thumb'));

    if (!mainImg || !mainTag || !mainTitle || thumbs.length === 0) return;

    let activeIdx = 0;

    function selectSlide(index) {
      const targetThumb = thumbs[index];
      if (!targetThumb) return;

      activeIdx = index;
      thumbs.forEach((btn, idx) => btn.classList.toggle('active', idx === index));

      const newSrc = targetThumb.getAttribute('data-img');
      const newTag = targetThumb.getAttribute('data-tag');
      const newTitle = targetThumb.getAttribute('data-title');

      mainImg.style.opacity = '0.35';
      setTimeout(() => {
        if (newSrc) mainImg.src = newSrc;
        if (newTag) mainTag.textContent = newTag;
        if (newTitle) mainTitle.textContent = newTitle;
        mainImg.style.opacity = '1';
      }, 160);
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        selectSlide(index);
        resetAutoPlay();
      });
    });

    // Suporte a gesto de deslizar (swipe) na imagem principal no celular
    let touchStartX = 0;
    mainImg.addEventListener(
      'touchstart',
      (event) => {
        if (event.touches.length > 0) {
          touchStartX = event.touches[0].clientX;
        }
      },
      { passive: true }
    );

    mainImg.addEventListener(
      'touchend',
      (event) => {
        if (event.changedTouches.length === 0) return;
        const diffX = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diffX) > 42) {
          const nextIdx = diffX < 0
            ? (activeIdx + 1) % thumbs.length
            : (activeIdx - 1 + thumbs.length) % thumbs.length;
          selectSlide(nextIdx);
          resetAutoPlay();
        }
      },
      { passive: true }
    );

    function startAutoPlay() {
      heroIntervalId = window.setInterval(() => {
        const nextIndex = (activeIdx + 1) % thumbs.length;
        selectSlide(nextIndex);
      }, 5500);
    }

    function resetAutoPlay() {
      if (heroIntervalId) {
        window.clearInterval(heroIntervalId);
      }
      startAutoPlay();
    }

    startAutoPlay();
  }

  /**
   * Inicializa filtros do Portfólio e modal Lightbox
   */
  function initPortfolioAndLightbox() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const allItems = Array.from(document.querySelectorAll('.portfolio-item'));
    const lightbox = document.getElementById('lightbox');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxSubtitle = document.getElementById('lightbox-subtitle');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxWaLink = document.getElementById('lightbox-wa-link');

    if (allItems.length === 0) return;

    visiblePortfolioItems = [...allItems];

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter') || 'todos';

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        visiblePortfolioItems = [];
        allItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');
          const matches = category === 'todos' || itemCategory === category;
          item.classList.toggle('hidden', !matches);
          if (matches) {
            visiblePortfolioItems.push(item);
          }
        });
      });
    });

    function updateLightboxContent(index) {
      if (visiblePortfolioItems.length === 0) return;
      currentLightboxIndex = (index + visiblePortfolioItems.length) % visiblePortfolioItems.length;
      const item = visiblePortfolioItems[currentLightboxIndex];

      const imgSrc = item.getAttribute('data-img') || '';
      const title = item.getAttribute('data-title') || '';
      const subtitle = item.getAttribute('data-subtitle') || '';
      const desc = item.getAttribute('data-desc') || '';

      if (lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxSubtitle) lightboxSubtitle.textContent = subtitle;
      if (lightboxDesc) lightboxDesc.textContent = desc;

      if (lightboxWaLink) {
        const waMsg = `Olá Angélica! Vi o projeto "${title}" (${subtitle}) no seu site e gostaria de conversar sobre um projeto nesse estilo.`;
        lightboxWaLink.href = buildWhatsAppUrl(waMsg);
      }
    }

    function openLightbox(item) {
      if (!lightbox) return;
      const index = visiblePortfolioItems.indexOf(item);
      updateLightboxContent(index >= 0 ? index : 0);
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }

    allItems.forEach((item) => {
      item.addEventListener('click', () => openLightbox(item));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        updateLightboxContent(currentLightboxIndex - 1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        updateLightboxContent(currentLightboxIndex + 1);
      });
    }

    document.addEventListener('keydown', (event) => {
      if (!lightbox || lightbox.hidden) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        updateLightboxContent(currentLightboxIndex - 1);
      } else if (event.key === 'ArrowRight') {
        updateLightboxContent(currentLightboxIndex + 1);
      }
    });

    // Suporte a swipe horizontal no Lightbox para dispositivos móveis
    if (lightbox) {
      let lbTouchStartX = 0;
      lightbox.addEventListener(
        'touchstart',
        (event) => {
          if (event.touches.length > 0) {
            lbTouchStartX = event.touches[0].clientX;
          }
        },
        { passive: true }
      );

      lightbox.addEventListener(
        'touchend',
        (event) => {
          if (lightbox.hidden || event.changedTouches.length === 0) return;
          const diffX = event.changedTouches[0].clientX - lbTouchStartX;
          if (Math.abs(diffX) > 48) {
            if (diffX < 0) {
              updateLightboxContent(currentLightboxIndex + 1);
            } else {
              updateLightboxContent(currentLightboxIndex - 1);
            }
          }
        },
        { passive: true }
      );
    }
  }

  /**
   * Inicializa o formulário inteligente de redirecionamento para WhatsApp e E-mail
   */
  function initContactActions() {
    const form = document.getElementById('whatsapp-form');
    const sendEmailBtn = document.getElementById('send-email-btn');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    function getFormValues() {
      const nameInput = document.getElementById('client-name');
      const typeSelect = document.getElementById('project-type');
      const cityInput = document.getElementById('project-city');
      const detailsInput = document.getElementById('project-details');

      const name = nameInput ? nameInput.value.trim() : '';
      const projectType = typeSelect ? typeSelect.value : 'Projeto Arquitetônico';
      const city = cityInput ? cityInput.value.trim() : '';
      const details = detailsInput ? detailsInput.value.trim() : '';

      return { name, projectType, city, details };
    }

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const { name, projectType, city, details } = getFormValues();

        const parts = [
          'Olá Angélica! Vim pela sua página e gostaria de solicitar um orçamento.',
          name ? `\n• *Nome:* ${name}` : '',
          `• *Interesse:* ${projectType}`,
          city ? `• *Cidade/Região:* ${city}` : '',
          details ? `• *Detalhes:* ${details}` : '',
        ].filter(Boolean);

        const url = buildWhatsAppUrl(parts.join('\n'));
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }

    if (sendEmailBtn) {
      sendEmailBtn.addEventListener('click', () => {
        const { name, projectType, city, details } = getFormValues();
        const subject = `Solicitação de Orçamento - ${projectType}${name ? ` (${name})` : ''}`;
        const bodyLines = [
          'Olá Angélica,',
          '',
          'Gostaria de conversar sobre um projeto arquitetônico:',
          name ? `Nome: ${name}` : '',
          `Tipo de Projeto: ${projectType}`,
          city ? `Cidade/Região: ${city}` : '',
          details ? `Detalhes: ${details}` : '',
        ].filter((line, idx) => idx < 3 || Boolean(line));

        const mailtoUrl = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailtoUrl;
      });
    }

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', async () => {
        const email = copyEmailBtn.getAttribute('data-email') || CONFIG.email;
        try {
          await navigator.clipboard.writeText(email);
          const originalText = copyEmailBtn.textContent;
          copyEmailBtn.textContent = 'E-mail copiado!';
          setTimeout(() => {
            copyEmailBtn.textContent = originalText;
          }, 2200);
        } catch (_err) {
          window.location.href = `mailto:${email}`;
        }
      });
    }
  }

  /**
   * Inicializa animações suaves ao rolar a página e atualiza o ano do rodapé
   */
  function initRevealAndYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    const revealItems = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px 80px 0px' }
      );

      revealItems.forEach((el) => observer.observe(el));
    } else {
      revealItems.forEach((el) => el.classList.add('revealed'));
    }
  }

  function init() {
    bindContactData();
    initNavigation();
    initHeroShowcase();
    initPortfolioAndLightbox();
    initContactActions();
    initRevealAndYear();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);

