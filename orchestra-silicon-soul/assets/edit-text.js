(() => {
  const blocks = [...document.querySelectorAll(
    '.cover h1, .cover .tag, .research-rubric li, .chapter-head h2, .block p, figcaption, .bibliography li'
  )];
  const storageKey = 'silicon-soul/research-draft-v4';
  const status = document.querySelector('#save-status');
  try {
    const draft = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    blocks.forEach((block, index) => {
      if (typeof draft[index] !== 'string' || (block.id === 'source-5' && /youtube\.com|youtu\.be/i.test(draft[index]))) return;
      if (draft.length === blocks.length - 1 && (block.id === 'source-17' || block.textContent.startsWith('В обложку'))) {
        if (block.id === 'source-17' || typeof draft[index - 1] !== 'string') return;
        block.innerHTML = draft[index - 1].replace('Встроенные плееры открывают видео премьеры и опубликованные электронные дорожки.', 'Встроенные плееры открывают альбомные записи и опубликованные электронные дорожки.');
        return;
      }
      const updates = [
        ['Видеовставки открываются около нужного момента записи премьеры. В плеерах Google Диска открываются полные электронные дорожки.', 'Bandcamp открывает полные части альбомной записи, а Google Диск — полные электронные дорожки. Нужные моменты указаны рядом с плеерами.'],
        ['29:54 на видео премьеры', '0:18 в альбомной записи'],
        ['32:26 на видео премьеры', '2:50 в альбомной записи'],
        ['38:03 на видео премьеры', '8:27 в альбомной записи'],
        ['0:55–1:03 от начала части, около 1:22–1:30 на видео премьеры', '0:55–1:03 в альбомной записи'],
        ['Встроенные плееры открывают видео премьеры и опубликованные электронные дорожки.', 'Встроенные плееры открывают альбомные записи и опубликованные электронные дорожки.'],
      ];
      if (draft[index] === 'Silicon: Soul, запись премьеры / Роберт Лейдлоу, BBC Philharmonic / 2022') return;
      block.innerHTML = updates.reduce((html, [before, after]) => html.replaceAll(before, after), draft[index]);
    });
  } catch {
    status.textContent = 'Черновик не удалось восстановить';
  }
  let revision = 0;
  let savedRevision = 0;
  let saving = false;
  let saveRequested = false;
  let statusTimer;
  const localServer = ['127.0.0.1', 'localhost'].includes(location.hostname);

  function showStatus(message, saved = false) {
    clearTimeout(statusTimer);
    status.dataset.saved = String(saved);
    status.textContent = message;
    if (saved) statusTimer = setTimeout(() => { status.textContent = ''; }, 2200);
  }

  for (const block of blocks) {
    block.contentEditable = 'plaintext-only';
    block.addEventListener('input', () => {
      revision++;
      showStatus('Есть несохранённые правки');
    });
    block.addEventListener('blur', () => {
      if (revision !== savedRevision) void save();
    });
  }

  async function save() {
    saveRequested = true;
    if (saving) return;
    saving = true;

    try {
      while (saveRequested) {
        saveRequested = false;
        const currentRevision = revision;
        const snapshot = blocks.map(block => block.innerHTML);
        const text = blocks.map(block => block.innerText.trim()).filter(Boolean).join('\n\n');
        if (localServer) {
          const response = await fetch('/save-text', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: text,
          });
          if (!response.ok) throw new Error('Save failed');
        }

        try {
          localStorage.setItem(storageKey, JSON.stringify(snapshot));
          savedRevision = currentRevision;
          if (revision === savedRevision) showStatus('✓ Текст сохранён', true);
          else showStatus('Есть несохранённые правки');
        } catch {
          if (!localServer) throw new Error('Browser storage unavailable');
          savedRevision = currentRevision;
          showStatus('Файл сохранён. Восстановить правки в браузере не удастся');
        }
      }
    } catch {
      showStatus('Сохранение не удалось');
    } finally {
      saving = false;
      if (saveRequested) void save();
    }
  }

})();
