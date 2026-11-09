# Guia de Contribuição (CONTRIBUTING)

Este documento reúne as informações essenciais que agentes e desenvolvedores precisam saber para colaborar, manter e implementar melhorias no repositório `professional-website`.

---

## 1. Stack e Documentação de Dependências

O site foi construído seguindo uma filosofia web clássica com rigor de engenharia: zero etapas obrigatórias de build em runtime, sem frameworks JS pesados e compatibilidade total com navegadores modernos e serviços de páginas estáticas.

### Tecnologias e Dependências

- **HTML5 Semântico**: Estruturação acessível e hierárquica do conteúdo, metadados e atalhos de acessibilidade (`skip-link`).
  - Documentação: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- **CSS3 Moderno**: Folhas de estilo modulares com CSS Custom Properties (variáveis de design system), Flexbox, CSS Grid e efeitos de vidro líquido (*liquid glassmorphism*) com `backdrop-filter`.
  - Documentação: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- **JavaScript Vanilla (ES6+)**: Interatividade leve com menu móvel, cópia de e-mail e simulação reativa de partículas em elemento `<canvas>`.
  - Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
  - Canvas API: https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API
- **Google Fonts (Tipografia Web)**: Famílias tipográficas *Epilogue* (display), *Figtree* (editorial) e *Fira Code* (código/mono).
  - Documentação: https://fonts.google.com/
- **GitHub Pages**: Hospedagem estática de produção a partir da branch principal (`main`).
  - Documentação: https://docs.github.com/pages
- **localhost-server**: Servidor web local com terminação HTTPS para homologação e testes de desenvolvimento.
  - Documentação: [localhost-server/README.md](../localhost-server/README.md)

---

## 2. Padrões Gerais do Repositório

Ao colaborar ou realizar implementações no repositório, siga estritamente os seguintes padrões:

1. **Padrão de Git e Branching:**
   - Nunca realize alterações de código diretamente na branch `main`.
   - Crie sempre uma branch temática a partir da `main` (ex.: `feat/...`, `fix/...`, `chore/...`).
   - Antes de abrir uma nova branch, verifique se a cópia de trabalho está limpa (`git status`). Se não estiver, avise o usuário.
   - O merge para a branch `main` só deve ser realizado após aprovação explícita do usuário.

2. **Documentação e READMEs com Índices:**
   - Diretórios com recursos relevantes devem conter um arquivo `README.md` com uma breve descrição do propósito em um parágrafo e um índice seguindo o formato:
     - `nome-do-arquivo: breve descrição do arquivo em um parágrafo.`
     - `subdiretório/: breve descrição do subdiretório em um parágrafo.`
   - Mantenha os índices atualizados sempre que arquivos ou pastas forem adicionados ou renomeados.

3. **Arquitetura de Código Estático:**
   - `index.html`: Ponto de entrada do site e marcação semântica.
   - `css/`: Folhas de estilo CSS com tokens normativos e regras de layout responsivo.
   - `js/`: Scripts JavaScript puros para controle de UI e canvas.
   - `scripts/`: Ferramentas utilitárias e automações locais.

4. **Design e Acessibilidade:**
   - Respeite as diretrizes e tokens visuais documentados em `DESIGN.md`.
   - Respeite o posicionamento estratégico e os princípios definidos em `PRODUCT.md`.
   - Mantenha conformidade mínima WCAG AA (contraste adequado, navegação por teclado e descrições semânticas).

---

## 3. Scripts

Lista dos scripts disponíveis no projeto:

- `./scripts/deploy-local.sh`: Executa o Deploy Local, sincronizando os arquivos estáticos de produção para `localhost-server/www/lhanjos/`.
- `./deploy-local.sh`: Atalho na raiz para execução do script `./scripts/deploy-local.sh`.
