/**
 * Particles Background Simulation — DeepSeek Harness Inspiration
 * Rede de nós interativos com profundidade tridimensional (parallax),
 * atração magnética e teia dinâmica que segue ativamente o cursor do mouse
 * e reage com inércia suave à rolagem da página.
 * 
 * Respeita preferências de acessibilidade (prefers-reduced-motion)
 * e pausa execução quando a aba está em segundo plano.
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

  // Parâmetros de densidade e interação
  const PARTICLE_COUNT_DESKTOP = 70;
  const PARTICLE_COUNT_MOBILE = 32;
  const CONNECTION_DIST = 135;
  const MOUSE_RADIUS = 180;
  const MOUSE_CONNECTION_DIST = 160;

  let lastScrollY = window.scrollY || window.pageYOffset;
  let scrollVelocity = 0;
  let targetScrollVelocity = 0;

  // Estado do cursor
  const mouse = {
    x: -2000,
    y: -2000,
    targetX: -2000,
    targetY: -2000,
    isHovering: false
  };

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : (scrollVelocity > 0 ? height + 15 : -15);
      
      // Profundidade (z-depth de 0.4 a 1.0)
      this.depth = 0.4 + Math.random() * 0.6;
      
      // Tamanho e opacidade proporcionais à profundidade
      this.baseRadius = (1.0 + this.depth * 1.5); // 1.4px a 2.5px
      this.radius = this.baseRadius;
      
      // Velocidade de deriva ambiente muito lenta
      this.baseVx = (Math.random() - 0.5) * 0.35 * this.depth;
      this.baseVy = (Math.random() - 0.5) * 0.35 * this.depth;
      
      // Velocidade dinâmica (impulso do mouse e scroll)
      this.vx = 0;
      this.vy = 0;

      // Cores por camada: cobalto arquitetônico, azul técnico e ardósia mineral
      const r = Math.random();
      if (r < 0.45) {
        this.baseColor = { r: 15, g: 76, b: 129, a: 0.22 * this.depth };   // Cobalto arquitetônico
      } else if (r < 0.75) {
        this.baseColor = { r: 2, g: 132, b: 199, a: 0.28 * this.depth };   // Azul técnico
      } else {
        this.baseColor = { r: 100, g: 116, b: 139, a: 0.18 * this.depth }; // Ardósia mineral
      }
    }

    update() {
      // 1. Atração magnética suave em direção ao cursor (seguir o cursor)
      if (mouse.isHovering) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS && dist > 2) {
          // Força de atração proporcional à proximidade e profundidade
          const force = (1 - dist / MOUSE_RADIUS) * 0.55 * this.depth;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }
      }

      // 2. Fricção e amortecimento das velocidades dinâmicas
      this.vx *= 0.92;
      this.vy *= 0.92;

      // 3. Atualização de posição integrando deriva ambiente, velocidade do mouse e scroll com parallax
      this.x += this.baseVx + this.vx;
      this.y += this.baseVy + this.vy + (scrollVelocity * 0.45 * this.depth);

      // 4. Efeito de contorno cíclico suave nas bordas
      const margin = 20;
      if (this.x < -margin) this.x = width + margin;
      if (this.x > width + margin) this.x = -margin;
      if (this.y < -margin) this.y = height + margin;
      if (this.y > height + margin) this.y = -margin;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.baseColor.a})`;
      ctx.fill();
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
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

    // Impulso suave de scroll com limite máximo
    targetScrollVelocity = Math.max(Math.min(delta * 0.14, 5), -5);
  }

  function onMouseMove(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isHovering = true;
  }

  function onMouseLeave() {
    mouse.isHovering = false;
  }

  function drawConnections() {
    const len = particles.length;

    // 1. Conexões entre partículas vizinhas
    for (let i = 0; i < len; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < len; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.16 * Math.min(p1.depth, p2.depth);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(15, 76, 129, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    // 2. Conexões dinâmicas do cursor com as partículas próximas (estilo DeepSeek Harness)
    if (mouse.isHovering) {
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_CONNECTION_DIST) {
          const alpha = (1 - dist / MOUSE_CONNECTION_DIST) * 0.28 * p.depth;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Suavização do mouse com interpolação linear (inércia fluida)
    if (mouse.isHovering) {
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;
    }

    // Inércia de scroll suave
    scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.08;
    targetScrollVelocity *= 0.92;

    // Atualização e renderização das partículas
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // Desenhar teia de conexões
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

  // Ouvintes de eventos
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
