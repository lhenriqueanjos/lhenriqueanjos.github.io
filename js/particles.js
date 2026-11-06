/**
 * Particles Background Simulation
 * Reage suavemente ao scroll da página e ao movimento do cursor.
 * Respeita preferências de acessibilidade (prefers-reduced-motion) e otimiza bateria quando a aba fica inativa.
 */
(function() {
  'use strict';

  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;
  let particles = [];
  let animationId = null;
  let isRunning = false;

  // Parâmetros de física e interação
  const PARTICLE_COUNT_DESKTOP = 45;
  const PARTICLE_COUNT_MOBILE = 20;
  const CONNECTION_DIST = 120;
  const MOUSE_RADIUS = 100;

  let lastScrollY = window.scrollY || window.pageYOffset;
  let scrollVelocity = 0;
  let targetScrollVelocity = 0;
  let mouse = { x: -1000, y: -1000, isHovering: false };

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : (scrollVelocity > 0 ? height + 10 : -10);
      this.baseRadius = Math.random() * 1.5 + 1.2; // 1.2px - 2.7px
      this.radius = this.baseRadius;
      
      // Velocidades de repouso muito lentas e suaves
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      
      // Cores sutis (ardósia e cobalto mineral com baixa opacidade para não concorrer com texto)
      const colors = [
        'rgba(15, 76, 129, 0.22)',  // Cobalto arquitetônico
        'rgba(2, 132, 199, 0.25)',  // Azul técnico
        'rgba(100, 116, 139, 0.18)' // Ardósia suave
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      // Amortecimento suave da velocidade de scroll
      this.y += this.vy + scrollVelocity * 0.4;
      this.x += this.vx;

      // Interação suave com o cursor do mouse
      if (mouse.isHovering) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * 1.2;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
        }
      }

      // Reposicionar nas bordas da tela
      if (this.x < -20) this.x = width + 20;
      if (this.x > width + 20) this.x = -20;
      if (this.y < -20) this.y = height + 20;
      if (this.y > height + 20) this.y = -20;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    if (prefersReducedMotion.matches) {
      renderStatic();
    }
  }

  function onScroll() {
    const currentScrollY = window.scrollY || window.pageYOffset;
    const delta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;
    
    // Limitar velocidade máxima de impulso
    targetScrollVelocity = Math.max(Math.min(delta * 0.12, 4), -4);
  }

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isHovering = true;
  }

  function onMouseLeave() {
    mouse.isHovering = false;
  }

  function drawConnections() {
    const len = particles.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(15, 76, 129, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Amortecimento suave da velocidade de scroll com inércia
    scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.08;
    targetScrollVelocity *= 0.92;

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    drawConnections();

    animationId = requestAnimationFrame(loop);
  }

  function renderStatic() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
    }
    drawConnections();
  }

  function start() {
    if (prefersReducedMotion.matches) {
      renderStatic();
      return;
    }
    if (!isRunning) {
      isRunning = true;
      animationId = requestAnimationFrame(loop);
    }
  }

  function stop() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  // Event Listeners
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave);

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  prefersReducedMotion.addEventListener('change', function(e) {
    if (e.matches) {
      stop();
      renderStatic();
    } else {
      start();
    }
  });

  // Inicialização
  resize();
  start();
})();
