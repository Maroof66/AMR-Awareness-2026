# AMR Awareness — Animated Explainer Prototype

This is a first playable browser prototype for the AMR awareness story.

## Project structure
- `index.html` — full-screen experience and controls
- `css/style.css` — layout and responsive UI
- `css/motion.css` — character, camera, bacteria and transition animation
- `js/app.js` — navigation and stage control
- `js/story.js` — chapter-by-chapter narration
- `js/language.js` — JSON translation loader with English fallback
- `assets/scenes/story-stage.svg` — animated vector scene
- `languages/` — English, Gujarati and Hindi dictionaries

## Run / deploy
Upload the contents of this folder to the root of a GitHub repository and enable GitHub Pages.
Because this uses JavaScript modules and fetch(), run it through GitHub Pages or a local static server rather than opening index.html directly from a file browser.

## Current prototype scope
The prototype includes the full story beat sequence and camera transition into a stylised microscopic world. It is an authored 2D SVG motion prototype, not a pre-rendered studio animation. The next production pass should refine character rigging, replace placeholder clinic composition, and animate bacterial division and antibiotic-target interaction in more detail.

## Scientific accuracy
The visual shows a small pre-existing or newly arising resistant subpopulation with an altered target. Antibiotic exposure selects for those bacteria; bacteria do not intentionally decide to mutate. Resistance is not an inevitable result of one unnecessary dose.
