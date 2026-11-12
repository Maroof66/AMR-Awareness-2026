import {story} from "./story.js";
import {loadLanguage,t} from "./language.js";

const $=id=>document.getElementById(id);
let index=0;

async function mountArt() {
  const response=await fetch("assets/scenes/story-stage.svg");
  if(!response.ok) throw new Error("Could not load story artwork");
  $("stage").innerHTML=await response.text();
}
function render() {
  const s=story[index];
  $("stage").dataset.phase=s.phase;
  $("chapter").textContent=s.chapter;
  $("kicker").textContent=s.kicker;
  $("headline").textContent=t(s.title);
  $("bodycopy").textContent=t(s.body);
  $("buttonText").textContent=t(s.button);
  const pct=index/(story.length-1)*100;
  $("progressValue").style.width=`${pct}%`;
  $("progressTrack").setAttribute("aria-valuenow",String(Math.round(pct)));
  const caption=document.querySelector(".scene-caption");
  caption.classList.remove("caption-replay");
  void caption.offsetWidth;
  caption.classList.add("caption-replay");
  $("nextButton").querySelector(".button-arrow").textContent=index===story.length-1?"↻":"→";
}
async function init() {
  await loadLanguage("en");
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  await mountArt();
  render();
  $("nextButton").addEventListener("click",()=>{
    index=index===story.length-1?0:index+1;
    render();
  });
}
init().catch(error=>{
  console.error(error);
  $("stage").innerHTML='<p class="stage-loading">The animation could not load. Please refresh the page.</p>';
});
