---
name: Professional Website
description: Presença digital profissional de engenharia de software e liderança técnica
colors:
  primary: "#0F4C81"
  primary-hover: "#0A365D"
  accent: "#0284C7"
  accent-subtle: "#E0F2FE"
  neutral-bg: "#F8F9FA"
  surface: "#FFFFFF"
  surface-subtle: "#F1F5F9"
  text-primary: "#0F172A"
  text-secondary: "#334155"
  text-muted: "#64748B"
  border-subtle: "#E2E8F0"
  border-strong: "#CBD5E1"
  success: "#065F46"
  success-bg: "#ECFDF5"
typography:
  display:
    fontFamily: "Epilogue, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Epilogue, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Epilogue, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Figtree, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "28px 28px"
---

# Design System: Professional Website

## Overview

**Creative North Star: "The Architectural Workshop"**

O sistema visual expressa a maturidade, método e precisão de um engenheiro de software sênior e líder técnico. Ele rejeita tanto o cinzento anônimo de templates corporativos quanto os ornamentos desnecessários. Toda decisão cromática e estrutural responde ao princípio de clareza, durabilidade e densidade funcional.

A interface opera em uma base mineral clara e serena (#F8F9FA), equilibrada por uma tipografia expressiva e autoral em Epilogue e Figtree, acentuada por cobalto arquitetônico (#0F4C81) e enriquecida por um canvas interativo de partículas em segundo plano que reage com elegância ao scroll da página.

**Key Characteristics:**
- Fundo mineral claro com partículas dinâmicas de baixa opacidade em segundo plano.
- Cartões assimétricos com bordas milimétricas e metadados estruturados.
- Tipografia com forte contraste de escala, ritmo generoso e sem gradient text.
- Ausência total de tons roxos, halos luminosos ociosos ou bordas decorativas excessivas.

## Colors

Paleta sóbria de alto contraste com base mineral, acentos em cobalto arquitetônico e conformidade estrita com padrões de acessibilidade WCAG AAA.

### Primary
- **Cobalto Arquitetônico** (#0F4C81): Utilizado nos botões de ação prioritários, marcação de navegação ativa e âncoras principais de hierarquia.
- **Cobalto Profundo** (#0A365D): Estado de hover e foco ativo de componentes primários.

### Secondary
- **Azul Técnico** (#0284C7): Acento de interatividade, anéis de foco acessível (:focus-visible) e destaques de marcadores.
- **Azul Nebulosa** (#E0F2FE): Superfície sutil para tags e badges técnicos de destaque.

### Neutral
- **Mineral Claro** (#F8F9FA): Fundo geral da página; transmite sensação de papel técnico puro e arejado.
- **Branco Puro** (#FFFFFF): Superfície dos cartões e módulos de conteúdo para garantir contraste ideal.
- **Slate Sutil** (#F1F5F9): Fundo de elementos utilitários, caixas de código e pílulas de habilidades.
- **Tinta Slate 900** (#0F172A): Texto primário de leitura e títulos com contraste superior a 12:1.
- **Slate 700** (#334155): Texto secundário de parágrafos e descrições técnicas.
- **Slate 500** (#64748B): Metadados, datas e rótulos auxiliares.
- **Borda Suave** (#E2E8F0): Delimitação sutil de cartões e divisores horizontais.

### Named Rules
**The Zero-Purple Rule.** Proibição estrita de qualquer tom roxo, magenta saturado ou gradientes violetas. Toda a autoridade é construída com cobalto, ardósia e azul técnico.

**The Functional Accent Rule.** Cores de acento cobalto e azul ocupam menos de 8% da superfície da tela. Seu poder reside exatamente na sua parcimônia e precisão.

## Typography

**Display Font:** Epilogue (com fallback -apple-system, BlinkMacSystemFont, sans-serif)  
**Body Font:** Figtree (com fallback -apple-system, Roboto, sans-serif)  
**Label/Mono Font:** Fira Code (com fallback monospace)

**Character:** A união da densidade geométrica com ritmo escultural de Epilogue para títulos e a legibilidade fluida de Figtree para blocos de leitura profunda.

### Hierarchy
- **Display** (700, 3.5rem, 1.12): Título principal do Hero; impõe presença imediata.
- **Headline** (700, 2.25rem, 1.2): Cabeçalhos de seção (h2) com margem superior generosa (4.5rem) e inferior contida (1rem).
- **Title** (700, 1.25rem, 1.35): Títulos de cargos, projetos e formações (h3).
- **Body** (400, 1rem, 1.65): Texto corrido de parágrafos, limitado a measure máxima de 65–70ch.
- **Label** (500, 0.75rem, 1.4): Metadados, tags de tecnologia e marcadores de código em Fira Code.

### Named Rules
**The No-Eyebrow Rule.** Títulos de seção e tópicos falam por si próprios; proíbe-se expressamente o uso de kickers ou eyebrows em cima de headings.

## Layout

Grid fluído de 12 colunas com container máximo de 1200px e espaçamento responsivo clamp.
- Layout assimétrico no Hero com proporção 1.35 : 1 para valorizar o perfil sem sobrecarregar a leitura.
- Timeline de experiência estruturada em coluna lateral fixa de datas (200px) e corpo de cartões informativos.
- Ritmo vertical baseado em múltiplos de 8px e 16px.

## Elevation & Depth

Sistema de elevação sutil baseado em offsets suaves e dispersão gradual, sem halos coloridos ou sombras duras de neobrutalismo.

### Shadow Vocabulary
- **Nível 1 - Repouso** (`box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`): Cartões estáticos e elementos em repouso.
- **Nível 2 - Hover** (`box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`): Elevação tátil de cartões interativos e botões primários.
- **Nível 3 - Destaque** (`box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.07)`): Card executivo do Hero e gavetas modais.

### Named Rules
**The Restful Surface Rule.** Superfícies permanecem planas em repouso; a elevação só se manifesta em resposta consciente à interação humana.

## Shapes

Forma retangular com cantos suavemente lapidados:
- Raios pequenos (4px) para tags, badges e pequenos inputs.
- Raios médios (8px) para botões e caixas de utilidade.
- Raios amplos (12px) para cartões de conteúdo principal e containers de seção.
- Pílulas (9999px) reservadas estritamente para status de disponibilidade ativo.

## Components

### Buttons
- **Shape:** Raio de 8px com tipografia de peso 600.
- **Primary (Vidro Azul iPhone):** Gradiente cobalto-safira translúcido (`linear-gradient(135deg, rgba(15, 76, 129, 0.88), rgba(2, 132, 199, 0.78))`), `backdrop-filter: blur(16px) saturate(190%)`, borda superior com reflexo especular de luz branca (`rgba(255, 255, 255, 0.85)`), chanfro interno e dispersão suave cobalto. Texto branco puro com alto contraste.
- **Secondary (Vidro Branco Translúcido):** Superfície translúcida líquida (`linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42))`), `backdrop-filter: blur(16px) saturate(170%)`, borda superior em reflexo puro (#FFFFFF) e texto cobalto de alto contraste (> 8.5:1).

### Cards / Containers
- **Corner Style:** 12px de raio lapidado.
- **Background:** Vidro líquido translúcido (`linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.58))`) com `backdrop-filter: blur(20px) saturate(180%)`.
- **Specular Rim Light (Bordas Refletindo Luz):** Borda superior em branco puro (#FFFFFF) simulando incidência de luz superior, chanfro interno iluminado (`inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)`), reflexão interna difusa e sombra suave de contato.
- **Internal Padding:** 28px a 48px com espaçamento interno generoso.

### Navigation
- Barra sticky no topo com altura de 72px e acabamento em vidro fosco (`backdrop-filter: blur(20px) saturate(180%)`), borda inferior translúcida e prompt de marca em micro-vidro chanfrado.

## Do's and Don'ts

### Do:
- **Do** manter alto contraste de texto (mínimo 4.5:1 para corpo e 3:1 para títulos grandes).
- **Do** utilizar tags funcionais com fontes mono para identificar tecnologias e competências.
- **Do** respeitar as preferências de acessibilidade do usuário (prefers-reduced-motion).
- **Do** estilizar superfícies nativas do navegador (::selection, :focus-visible, scrollbars).

### Don't:
- **Don't** utilizar qualquer matiz ou gradiente roxo.
- **Don't** aplicar kickers ou subtítulos diminutos acima dos títulos principais.
- **Don't** criar sombras com halo colorido ou sombras duras sem desfoque (box-shadow: 4px 4px 0).
- **Don't** empregar emojis ou glifos genéricos como ícones de sistema; utilize SVGs desenhados em stroke consistente.
