# MiriAle Holiday House — sito (bozza v2)

Sito ufficiale del cliente **MiriAle Holiday House**, casa vacanze vicino
all'aeroporto di Fiumicino. Scheletro tecnico ereditato 1:1 dal template
originale; contenuti, brand, asset e metadata sostituiti con quelli di MiriAle.

<!-- Deploy: ripristino progetto originario (nessun redesign). -->

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Media Processing

L'hero del sito usa un effetto scroll basato su frame JPG estratti dal video drone (`trevi-drone.mp4`). I frame vivono in `public/frames/desktop/` (1920px) e `public/frames/mobile/` (1080px) e vengono generati offline — non a runtime.

### Prerequisiti

FFmpeg deve essere installato a livello di sistema (non passa da npm):

```bash
brew install ffmpeg
```

Verifica con `ffmpeg -version` e `ffprobe -version`.

### Estrazione frame

Posiziona `trevi-drone.mp4` in `public/media/` e lancia:

```bash
./scripts/extract-frames.sh
```

In alternativa, indica un percorso esplicito:

```bash
VIDEO=/path/al/video.mp4 ./scripts/extract-frames.sh
```

Lo script esegue due passaggi `ffmpeg` con questi parametri:

| Variante | Comando |
|---|---|
| Desktop | `ffmpeg -i trevi-drone.mp4 -vf "fps=24,scale=1920:-2" -q:v 3 public/frames/desktop/frame-%04d.jpg` |
| Mobile  | `ffmpeg -i trevi-drone.mp4 -vf "fps=24,scale=1080:-2" -q:v 4 public/frames/mobile/frame-%04d.jpg` |

- `fps=24` → un frame ogni ~42ms, abbastanza fluido per lo scroll.
- `scale=1920:-2` / `scale=1080:-2` → ridimensiona mantenendo l'aspect ratio (`-2` arrotonda l'altezza al pari più vicino, requisito di alcuni encoder).
- `-q:v 3` (desktop) → qualità JPEG ~75-80%, sweet spot per il web.
- `-q:v 4` (mobile) → qualità leggermente inferiore per ridurre il peso sulla rete mobile.

A fine run lo script stampa: numero frame estratti per variante, peso totale delle cartelle e stima dei frame attesi (durata video × 24).

### Quando ri-eseguire

Lancia lo script **solo** se cambia il video sorgente (nuovo montaggio, taglio diverso, color grading rivisto). I frame generati sono deterministici: a parità di sorgente e parametri, l'output è identico, quindi non serve rigenerarli a ogni build.

I frame esistenti vengono cancellati a inizio run per evitare residui di estrazioni precedenti con conteggio diverso.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
