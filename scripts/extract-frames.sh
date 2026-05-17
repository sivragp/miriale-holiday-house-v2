#!/usr/bin/env bash
#
# extract-frames.sh
# Estrae i frame del video drone in due varianti (desktop 1920px, mobile 1080px)
# per l'eventuale effetto scroll dell'hero di MiriAle Holiday House.
#
# Uso:
#   ./scripts/extract-frames.sh                    # cerca trevi-drone.mp4 nella root
#   VIDEO=/path/al/video.mp4 ./scripts/extract-frames.sh
#
# Prerequisito: FFmpeg installato a livello di sistema (brew install ffmpeg).
# Ri-esegui SOLO quando il video sorgente cambia.

set -euo pipefail

# Esegui sempre dalla root del progetto, indipendentemente dalla CWD del chiamante
cd "$(dirname "$0")/.."

VIDEO="${VIDEO:-public/media/trevi-drone.mp4}"
DESKTOP_DIR="public/frames/desktop"
MOBILE_DIR="public/frames/mobile"
FPS=24

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg non trovato. Installa con: brew install ffmpeg" >&2
  exit 1
fi
if ! command -v ffprobe >/dev/null 2>&1; then
  echo "ffprobe non trovato (di norma incluso in ffmpeg)." >&2
  exit 1
fi
if [[ ! -f "$VIDEO" ]]; then
  echo "Video sorgente non trovato: $VIDEO" >&2
  echo "Posiziona il file nella root del progetto, oppure:" >&2
  echo "  VIDEO=/path/al/video.mp4 ./scripts/extract-frames.sh" >&2
  exit 1
fi

# Pulisce i frame precedenti per evitare residui di run con conteggio diverso
# (preserva .gitkeep e qualunque altro file non-jpg)
echo "Pulizia frame precedenti..."
find "$DESKTOP_DIR" "$MOBILE_DIR" -maxdepth 1 -name '*.jpg' -delete

DURATION=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$VIDEO")
EXPECTED=$(awk -v d="$DURATION" -v f="$FPS" 'BEGIN { printf "%d", d * f }')
echo "Durata video: ${DURATION}s - stimati ~${EXPECTED} frame a ${FPS}fps"
echo

echo "Estrazione desktop (1920px, q:v 3)..."
ffmpeg -y -i "$VIDEO" \
  -vf "fps=${FPS},scale=1920:-2" \
  -q:v 3 \
  "$DESKTOP_DIR/frame-%04d.jpg" \
  -hide_banner -loglevel warning -stats

echo
echo "Estrazione mobile (1080px, q:v 4)..."
ffmpeg -y -i "$VIDEO" \
  -vf "fps=${FPS},scale=1080:-2" \
  -q:v 4 \
  "$MOBILE_DIR/frame-%04d.jpg" \
  -hide_banner -loglevel warning -stats

DESKTOP_COUNT=$(find "$DESKTOP_DIR" -maxdepth 1 -name '*.jpg' | wc -l | tr -d ' ')
MOBILE_COUNT=$(find "$MOBILE_DIR" -maxdepth 1 -name '*.jpg' | wc -l | tr -d ' ')
DESKTOP_SIZE=$(du -sh "$DESKTOP_DIR" | awk '{print $1}')
MOBILE_SIZE=$(du -sh "$MOBILE_DIR" | awk '{print $1}')

echo
echo "Estrazione completata."
echo "  Desktop : ${DESKTOP_COUNT} frame, ${DESKTOP_SIZE}"
echo "  Mobile  : ${MOBILE_COUNT} frame, ${MOBILE_SIZE}"
echo "  Stima   : ~${EXPECTED} frame attesi"
