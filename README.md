# AMR Awareness — Interactive Story

A mobile-first, full-screen interactive awareness experience.

## Structure
- `index.html` — page structure
- `css/style.css` — layout and responsive styling
- `css/animations.css` — idle character and interface animations
- `js/app.js` — scene rendering and navigation
- `js/story.js` — story sequence
- `js/language.js` — translation loading and fallback
- `assets/characters/main-character.svg` — layered character illustration
- `languages/en.json`, `gu.json`, `hi.json` — translations

## Deploy
This is a static site. Upload the folder contents to a GitHub repository and enable GitHub Pages from the repository's Pages settings.

For local testing, use a static server (ES modules and `fetch()` do not work reliably when opening `index.html` directly as a local file).

## Next
The current build is the upgraded opening scene and a small placeholder story sequence. Add the remaining story scenes in `js/story.js`, then add Gujarati and Hindi translations in their JSON files.
