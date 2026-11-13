(() => {
 const story=window.AMR_STORY, $=id=>document.getElementById(id);
 let current=0, touchX=0;
 const f={eyebrow:$("eyebrow"),kicker:$("kicker"),headline:$("headline"),description:$("description"),annotation:$("annotation"),artCaption:$("artCaption"),chapter:$("chapter"),sceneCount:$("sceneCount"),progress:$("progressFill"),art:$("sceneArt"),back:$("back"),next:$("next"),dots:$("dots")};
 function render(){
  const s=story[current];
  f.eyebrow.textContent=s.eyebrow; f.kicker.textContent=s.kicker; f.headline.innerHTML=s.headline;
  f.description.textContent=s.description; f.annotation.textContent=s.annotation; f.artCaption.textContent=s.artCaption;
  f.chapter.textContent=`THE STORY · ${String(current+1).padStart(2,"0")} / ${String(story.length).padStart(2,"0")}`;
  f.sceneCount.textContent=`${String(current+1).padStart(2,"0")} — ${String(story.length).padStart(2,"0")}`;
  f.progress.style.width=((current+1)/story.length*100)+"%"; f.back.disabled=current===0;
  f.next.innerHTML=current===story.length-1?'<span>Start again</span><b>↻</b>':'<span>Next scene</span><b>→</b>';
  f.dots.innerHTML=story.map((_,i)=>`<button class="dot ${i===current?"active":""}" aria-label="Go to scene ${i+1}" data-scene="${i}"></button>`).join("");
  f.art.classList.add("switching");
  setTimeout(async()=>{try{const r=await fetch(s.asset);f.art.innerHTML=await r.text();}catch(e){f.art.innerHTML="<p>Illustration could not be loaded. Please refresh.</p>";}f.art.classList.remove("switching");},130);
 }
 function go(n){current=Math.max(0,Math.min(story.length-1,n));render();}
 f.next.addEventListener("click",()=>go(current===story.length-1?0:current+1));
 f.back.addEventListener("click",()=>go(current-1)); $("restart").addEventListener("click",()=>go(0));
 f.dots.addEventListener("click",e=>{const b=e.target.closest("[data-scene]");if(b)go(Number(b.dataset.scene));});
 document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(current===story.length-1?0:current+1);if(e.key==="ArrowLeft")go(current-1);});
 document.addEventListener("touchstart",e=>{touchX=e.changedTouches[0].screenX;},{passive:true});
 document.addEventListener("touchend",e=>{const dx=e.changedTouches[0].screenX-touchX;if(Math.abs(dx)>65)go(current+(dx<0?1:-1));},{passive:true});
 render();
})();