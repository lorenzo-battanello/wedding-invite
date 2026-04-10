# 💍 Roberto & Sabiana — Partecipazione Matrimonio

Sito statico SPA elegante per partecipazioni di matrimonio, costruito con **Vite + React**, **Framer Motion** e **Tailwind CSS**.

---

## ✨ Funzionalità

- **Hero** a schermo intero con nomi, data, parallax e petali animati
- **Conto alla rovescia** live fino al 26 Settembre 2026
- **Dettagli** cerimonia e ricevimento con animazioni on-scroll
- **Galleria** fotografica con hover overlay
- **RSVP** form con animazione di conferma
- **Footer** elegante con frase romantica
- **Navbar flottante** che appare dopo lo scroll

---

## 🚀 Setup locale

### Requisiti
- Node.js >= 18
- npm >= 9

### Installazione e avvio

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

### Build di produzione

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy

### Vercel (consigliato)

1. Vai su [vercel.com](https://vercel.com) e importa il repository
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Clicca **Deploy** — il sito sarà online in pochi secondi!

### Netlify

1. Vai su [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
2. Seleziona il repository GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Clicca **Deploy site**

### GitHub Pages

```bash
npm run build
# Carica la cartella `dist/` su GitHub Pages via Actions o manualmente
```

---

## 🛠️ Stack tecnologico

| Libreria | Versione | Scopo |
|---|---|---|
| React | ^18.2 | UI framework |
| Framer Motion | ^11 | Animazioni |
| Tailwind CSS | ^3.4 | Stile |
| Vite | ^5 | Build tool |
| Google Fonts | — | Cormorant Garamond + Lato |

---

## 📁 Struttura del progetto

```
wedding-invite/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Hero.jsx          ← Hero a schermo intero con parallax
│       ├── Countdown.jsx     ← Conto alla rovescia live
│       ├── Details.jsx       ← Cerimonia + Ricevimento
│       ├── Gallery.jsx       ← Galleria foto
│       ├── RSVP.jsx          ← Form di conferma presenza
│       └── Footer.jsx        ← Footer con frase romantica
└── public/
```

---

*Con amore, Roberto & Sabiana 💍*