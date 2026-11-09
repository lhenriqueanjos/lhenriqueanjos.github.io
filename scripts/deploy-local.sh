#!/usr/bin/env bash
# ==============================================================================
# Deploy Local — professional-website
#
# Script de automação para publicar os arquivos estáticos de produção do site
# profissional no servidor web local (localhost-server/www/lhanjos/).
# ==============================================================================
set -euo pipefail

# Resolução canônica de diretórios (com resolução completa de symlinks)
TARGET_FILE="${BASH_SOURCE[0]}"
while [ -h "$TARGET_FILE" ]; do
  DIR="$(cd -P "$(dirname "$TARGET_FILE")" && pwd)"
  TARGET_FILE="$(readlink "$TARGET_FILE")"
  [[ $TARGET_FILE != /* ]] && TARGET_FILE="$DIR/$TARGET_FILE"
done
SCRIPT_DIR="$(cd -P "$(dirname "$TARGET_FILE")" && pwd)"
PROJECT_ROOT="$(cd -P "$SCRIPT_DIR/.." && pwd)"
DEFAULT_TARGET="$(cd "$PROJECT_ROOT/../localhost-server/www" 2>/dev/null && pwd || echo "$PROJECT_ROOT/../localhost-server/www")/lhanjos"
TARGET_DIR="${1:-${TARGET_DIR:-$DEFAULT_TARGET}}"

# Ajuda
if [ "${1:-}" = "-h" ] || [ "${1:-}" = "--help" ]; then
  cat <<EOF
Uso: $(basename "$0") [DIRETORIO_DESTINO]

Executa o deploy local dos arquivos estáticos do professional-website
para o diretório servido pelo localhost-server.

Opções:
  -h, --help    Exibe esta mensagem de ajuda e encerra.

Variáveis de ambiente:
  TARGET_DIR    Define o diretório de destino padrão.
                Padrão atual: $DEFAULT_TARGET

Exemplo:
  $(basename "$0")
  TARGET_DIR=/outro/caminho $(basename "$0")
EOF
  exit 0
fi

echo "=================================================="
echo "🚀 [Deploy Local] Publicando professional-website"
echo "=================================================="
echo "📁 Origem:  $PROJECT_ROOT"
echo "🎯 Destino: $TARGET_DIR"

# Valida se os arquivos principais existem
if [ ! -f "$PROJECT_ROOT/index.html" ]; then
  echo "❌ Erro: 'index.html' não encontrado em $PROJECT_ROOT." >&2
  exit 1
fi

# Cria diretório de destino se não existir
mkdir -p "$TARGET_DIR"

if command -v rsync >/dev/null 2>&1; then
  echo "📦 Sincronizando arquivos de produção com rsync..."
  rsync -av --delete \
    --exclude='.git*' \
    --exclude='.impeccable*' \
    --exclude='scripts*' \
    --exclude='*.md' \
    --exclude='*.sh' \
    --exclude='.*' \
    "$PROJECT_ROOT/" "$TARGET_DIR/"
else
  echo "📦 Sincronizando arquivos de produção com cp/find..."
  rm -rf "${TARGET_DIR:?}"/*

  # Copia index.html e arquivos HTML na raiz
  find "$PROJECT_ROOT" -maxdepth 1 -type f -name "*.html" -exec cp {} "$TARGET_DIR/" \;

  # Copia diretórios de assets web se existirem, ignorando markdown
  for dir in css js assets img images fonts; do
    if [ -d "$PROJECT_ROOT/$dir" ]; then
      mkdir -p "$TARGET_DIR/$dir"
      find "$PROJECT_ROOT/$dir" -type f ! -name "*.md" -exec cp --parents {} "$TARGET_DIR/" \; 2>/dev/null || {
        # Fallback sem --parents
        (cd "$PROJECT_ROOT" && find "$dir" -type f ! -name "*.md" -exec cp --parents {} "$TARGET_DIR/" \;)
      }
    fi
  done
fi

echo "--------------------------------------------------"
echo "✅ [Deploy Local] Deploy concluído com sucesso!"
echo "📄 Arquivos publicados em $TARGET_DIR:"
ls -la "$TARGET_DIR"
echo "--------------------------------------------------"
echo "🔗 Acesse em: https://local/lhanjos/ (ou http://localhost/lhanjos/)"
echo "=================================================="
