/**
 * Main Interface & Accessibility Controller
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Atualização do ano no rodapé
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Cópia rápida de e-mail com feedback acessível
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyFeedback = document.getElementById('copy-feedback');
  const emailAddress = document.getElementById('email-address');

  if (copyEmailBtn && emailAddress) {
    copyEmailBtn.addEventListener('click', async function() {
      const email = emailAddress.getAttribute('data-email') || emailAddress.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        if (copyFeedback) {
          copyFeedback.textContent = 'Copiado para a área de transferência!';
          copyFeedback.classList.add('visible');
          setTimeout(() => {
            copyFeedback.classList.remove('visible');
            copyFeedback.textContent = '';
          }, 3000);
        }
      } catch (err) {
        // Fallback para seleção direta caso permissão de clipboard falhe
        const range = document.createRange();
        range.selectNodeContents(emailAddress);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        if (copyFeedback) {
          copyFeedback.textContent = 'Pressione Ctrl+C para copiar.';
          copyFeedback.classList.add('visible');
        }
      }
    });
  }

  // 3. Highlight de navegação ativa via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'true');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
  }

  // 4. Menu mobile responsivo
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('open', !isExpanded);
      document.body.classList.toggle('menu-open', !isExpanded);
    });

    // Fechar menu mobile ao clicar em um link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }
});
