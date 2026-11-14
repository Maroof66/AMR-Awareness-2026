(() => {
  const story = window.AMR_STORY;
  const $ = (id) => document.getElementById(id);
  const scene = $('scene');
  const artWindow = $('artWindow');
  const art = $('sceneArt');
  const number = $('sceneNumber');
  const title = $('sceneTitle');
  const kicker = $('sceneKicker');
  const description = $('sceneDescription');
  const note = $('scienceNote');
  const sticker = $('artSticker');
  const progress = $('progressFill');
  const progressTrack = $('progressTrack');
  const back = $('backButton');
  const next = $('nextButton');
  const hint = $('tapHint');
  const motionToggle = $('motionToggle');
  let current = 0;
  let busy = false;

  function render(index, animate = true) {
    current = Math.max(0, Math.min(story.length - 1, index));
    const item = story[current];
    if (animate) {
      busy = true;
      artWindow.classList.add('changing');
      scene.classList.remove('entering');
    }
    window.setTimeout(() => {
      kicker.textContent = item.kicker;
      title.textContent = item.title;
      description.textContent = item.description;
      art.src = item.image;
      art.alt = item.alt;
      sticker.textContent = item.sticker;
      note.querySelector('span:last-child').textContent = item.note;
      artWindow.dataset.scene = String(current + 1);
      number.textContent = `THE STORY · ${String(current + 1).padStart(2, '0')} / ${String(story.length).padStart(2, '0')}`;
      progress.style.width = `${((current + 1) / story.length) * 100}%`;
      progressTrack.setAttribute('aria-valuenow', String(current + 1));
      back.disabled = current === 0;
      next.innerHTML = current === story.length - 1 ? 'Start again <span aria-hidden="true">↻</span>' : 'Next <span aria-hidden="true">→</span>';
      hint.textContent = current === story.length - 1 ? 'You’ve reached the end' : 'Tap next to continue';
      artWindow.classList.remove('changing');
      scene.classList.add('entering');
      busy = false;
    }, animate ? 210 : 0);
  }

  next.addEventListener('click', () => {
    if (busy) return;
    render(current === story.length - 1 ? 0 : current + 1);
  });
  back.addEventListener('click', () => {
    if (busy || current === 0) return;
    render(current - 1);
  });
  motionToggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('reduce-motion');
    motionToggle.setAttribute('aria-pressed', String(enabled));
    motionToggle.querySelector('.motion-label').textContent = enabled ? 'Motion off' : 'Motion on';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') { event.preventDefault(); next.click(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); back.click(); }
  });
  let touchStartX = 0;
  scene.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].clientX; }, {passive:true});
  scene.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 65) (delta < 0 ? next : back).click();
  }, {passive:true});
  render(0, false);
})();
