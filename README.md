# Small Habit. Bigger Consequence. — AMR Awareness Story

A mobile-first, step-by-step antibiotic-resistance awareness experience. Built with plain HTML, CSS, JavaScript and inline SVG compositions. No build tools or framework required.

## Run it

Open `index.html` in a browser, or publish the folder to GitHub Pages. Keep the folder structure intact.

## Publish with GitHub Pages

1. Create/open the repository for the project.
2. Upload the contents of this folder (not the outer ZIP folder).
3. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`.
4. Save and wait for GitHub Pages to publish.

## Visual assets and sources

- The scene illustrations are composed as SVG directly in `js/app.js` to keep one consistent palette and visual language instead of mixing unrelated stock illustrations.
- Supporting icon requests are from **Tabler Icons**, MIT licensed, loaded from jsDelivr at runtime: https://github.com/tabler/tabler-icons (MIT). The current story uses the SVG scene compositions as its primary visuals; Tabler icon helper is available for adding small supporting icons.
- Typography uses Google Fonts (DM Sans and Manrope) with system fallbacks.

If you later download any third-party Lottie/SVG asset, keep its original creator, source URL and licence in `licenses/ASSET-CREDITS.md` before publishing. LottieFiles free public animations use the Lottie Simple License; review the specific animation and licence before embedding or redistributing it.

## Scientific accuracy notes

The story does not imply bacteria consciously adapt. Resistant variants may already exist or arise through genetic changes. Antibiotic exposure selects for bacteria that survive, which can then multiply. Antibiotics do not treat viral illnesses such as the common cold. The target illustration is a simplified conceptual example, not a depiction of one specific drug-target pair.

## Edit story text

Change the scene copy and sequence in `js/story.js`. Scene illustrations are functions in `js/app.js`. Global colours and layout are in `css/style.css`; motion is in `css/animations.css`.
