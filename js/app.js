import { scenes } from "./story.js";
import { loadLanguage, t } from "./language.js";

let currentScene = 0;

const $ = (id) => document.getElementById(id);

function renderScene() {
  const scene = scenes[currentScene];
  $("title").textContent = t(scene.title);
  $("description").textContent = t(scene.description);
  $("nextButton").querySelector("[data-i18n]").textContent = t(scene.button);
  $("counter").textContent = scene.counter;

  const progress = scenes.length > 1 ? currentScene / (scenes.length - 1) * 100 : 0;
  $("progressFill").style.width = `${progress}%`;
  $("progressTrack").setAttribute("aria-valuenow", String(Math.round(progress)));

  const copy = document.querySelector(".scene__copy");
  copy.classList.remove("scene__copy--replay");
  void copy.offsetWidth;
  copy.classList.add("scene__copy--replay");
}

async function init() {
  await loadLanguage("en");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  renderScene();

  $("nextButton").addEventListener("click", () => {
    if (currentScene < scenes.length - 1) {
      currentScene += 1;
      renderScene();
    }
  });
}

init();
