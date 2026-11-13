# AMR Awareness — Sketchbook Story
A mobile-first, eight-scene interactive story about unnecessary antibiotic use and target modification in antimicrobial resistance.

## Run locally
Serve this folder with a static server because SVG scene files are loaded with `fetch()`:
- VS Code Live Server, or
- `python -m http.server 8000` then open `http://localhost:8000`.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Upload the contents of this folder to the repository root.
3. GitHub → Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Controls
Next/Back buttons, scene dots, keyboard arrows, touch swipe and restart.

## Scientific accuracy
The story does not show bacteria consciously changing targets in response to attack. Resistant variants may already exist or arise through genetic changes. Antibiotic exposure selects for resistant bacteria by suppressing susceptible ones; resistant bacteria can then multiply. Antibiotics do not treat viral infections such as the common cold.

## Illustration and licensing note
The SVG scene artwork in this first build is custom-created for this project; no third-party artwork is falsely represented as downloaded. Open Peeps (https://www.openpeeps.com/) is CC0 and is a suitable source for replacing the recurring person. BioIcons (https://bioicons.com/) has mixed individual licences; check and credit each selected scientific illustration.
