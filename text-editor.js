(() => {
  const blocks = [...document.querySelectorAll(
    'main h1, main h2, .tag, .text-column, .music-context, figcaption, .rubric li, .sources-panel li'
  )];
  const proseEdits = [["Десять разделов названы по играм: от сравнительно редких музыкальных появлений в Minecraft до плотной звуковой среды Cyberpunk 2077. Порядок позволяет увидеть разные способы переноса музыки:","Десять глав расположены по датам первого релиза игр — от Silent Hill 2 (2001) до Cyberpunk 2077 (2020). На этих примерах рассматриваются разные способы использования музыки в играх:"],["Поэтому меня интересует эмбиент","Поэтому предметом исследования стал эмбиент"],["Я хочу выяснить, что происходит с приёмами самостоятельной современной музыки, когда они попадают в интерактивную среду.","В исследовании рассматривается, как приёмы современной музыки меняются при переносе в интерактивную среду."],["Я сопоставляю не только записи, но и условия их звучания: когда музыка вступает, сколько длится, повторяется ли без заметного шва и может ли слушатель изменить её ход.","Сопоставляются записи и условия их звучания: момент вступления, длительность, характер повторения и возможность повлиять на ход музыки."],["для собственного анализа слышимых приёмов","для слухового анализа музыкальных приёмов"],["выбранная мной пара композиций остаётся сравнением, а не доказанным заимствованием. Это различие важно: сходство тембра не даёт права объявлять влияние.","пара композиций служит материалом для сравнительного анализа. Тембровое сходство само по себе не подтверждает прямое влияние."],["Ответы на эти вопросы стали целью моего исследования.",""],["(перевод мой)","(перевод автора исследования)"],["Однако интервью не устанавливает происхождение определённой игровой композиции от «Roads»; связь конкретных треков — мой слуховой анализ.","Сопоставление основано на слуховом анализе. Интервью подтверждает влияние группы, но не устанавливает связь между конкретными композициями."],["Для сравнения я беру пьесу из их альбома «Phaedra» 1974 года и написанный ими материал для «GTA V».","Для сравнения используются пьеса из альбома «Phaedra» 1974 года и музыка, написанная группой для «GTA V»."],["Глава показывает границу нашего метода — не всякая внешняя музыка является источником влияния; иногда она становится частью самого произведения.","Включение готовой записи в игру представляет собой самостоятельный способ использования внешней музыки."],["Для сравнительного прослушивания можно взять «Your Hand in Mine» Explosions in the Sky и «Timber Hearth». Родство я вижу в медленном наращивании чувства пространства, но Пралоу не называл этот конкретный трек образцом.","При сопоставлении «Your Hand in Mine» Explosions in the Sky и «Timber Hearth» заметно, что ощущение пространства в обеих композициях формируется постепенно. Пралоу упоминал группу, не называя эту композицию образцом."],["Это мой выбор примера, а не подтверждённый ими источник конкретного трека «Cyberpunk 2077».","«Magneze» используется как пример жанра. Влияние этой записи на конкретную композицию «Cyberpunk 2077» не подтверждено."],["Для сопоставления я беру более раннюю работу Disasterpeace над «FEZ» и «The Midnight Wood» из «Hyper Light Drifter».","В анализе сопоставляются более ранняя работа Disasterpeace над «FEZ» и «The Midnight Wood» из «Hyper Light Drifter»."],["Для анализа я сопоставляю «La cathédrale engloutie» с «City of Tears»: интерес представляет не совпадение нот, а работа с регистром, резонансом и неясной гармонической перспективой. Прямое влияние конкретной прелюдии на конкретный игровой трек не подтверждено — это обозначенная авторская пара для прослушивания.","В сравнительном анализе «La cathédrale engloutie» и «City of Tears» рассматриваются регистр, резонанс и гармоническая неопределённость. Прямое влияние прелюдии на игровой трек не подтверждено."]];
  const mediaLinks = {"https://www.youtube.com/watch?v=0ZxBtLGxvvA":"https://music.apple.com/ru/album/fallout-3-original-game-soundtrack/1849212521","https://www.youtube.com/watch?v=0UEeiGUk3Iw":"https://the-clocktower.net/audio/music/","https://www.youtube.com/watch?v=4oyoi4pT-Q8":"https://gambit.mit.edu/updates/2011/07/_part_7_of_a.php","https://www.youtube.com/watch?v=o3_InDEtpLA":"https://c418.bandcamp.com/track/subwoofer-lullaby"};
  const key = 'ambient-research-text-v3';
  try {
    const currentDraft = localStorage.getItem(key);
    const previousDraft = localStorage.getItem('ambient-research-text-v2');
    const saved = JSON.parse(currentDraft ?? previousDraft ?? localStorage.getItem('ambient-research-text-v1') ?? '{}');
    const endOfThief = blocks.findLastIndex(block => block.closest('#thief-deadly-shadows'));
    blocks.forEach((block, index) => {
      if (!currentDraft && block.matches('figcaption, #image-sources li')) return;
      const savedIndex = currentDraft ? index : index + Number(index > endOfThief);
      if (!currentDraft && !previousDraft && (
        block.closest('#thief-deadly-shadows, #fallout-3, #ref-12, #ref-14, #ref-21, #ref-23') ||
        block.closest('.rubric li, #image-sources li') && /Thief: Deadly Shadows|Fallout 3/.test(block.textContent)
      )) return;
      if (typeof saved[savedIndex] === 'string') {
        let html = saved[savedIndex].replaceAll('&nbsp;', '\u00a0');
        for (const [before, after] of Object.entries(mediaLinks)) html = html.replaceAll(before, after);
        if (block.id === 'ref-14') html = html.replace('Часть 7. 2016.', 'Часть 7. 2011.').replace('Часть 7. — 2016.', 'Часть 7. — 2011.');
        for (const [before, after] of proseEdits) {
          html = html.replaceAll(typograph(before), typograph(after)).replaceAll(before, after);
        }
        block.innerHTML = html.replaceAll('C418 и Ямаока и Пралоу', 'C418 и Ямаока').replace(/C418, Ямаока и[ \u00a0]Пралоу/g, 'C418 и Ямаока').trimEnd();
      }
    });
  } catch {}

  const chapters = [...document.querySelectorAll('#research > .chapter')];
  const rubric = document.querySelector('#rubric-list');
  const rows = [...rubric.children];
  // Keep the original block indices for drafts saved before the reorder.
  const releaseOrder = [
    'silent-hill-2', 'thief-deadly-shadows', 'fallout-3', 'minecraft', 'grand-theft-auto-v',
    'no-man-s-sky', 'hollow-knight', 'disco-elysium',
    'death-stranding', 'cyberpunk-2077',
  ];
  const endingRow = rows[chapters.length + 1];
  for (const [index, id] of releaseOrder.entries()) {
    const originalIndex = chapters.findIndex(chapter => chapter.id === id);
    const chapter = chapters[originalIndex];
    chapter.parentElement.append(chapter);
    const row = rows[originalIndex + 1];
    const number = row.querySelector('span') ?? row.insertBefore(document.createElement('span'), row.firstChild);
    number.textContent = String(index + 2).padStart(2, '0');
    rubric.insertBefore(row, endingRow);
  }

  const status = document.querySelector('#save-status');
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
        const snapshot = Object.fromEntries(blocks.map((block, index) => [index, block.innerHTML]));
        const text = [...document.querySelectorAll('main [contenteditable]')].map(block => block.innerText).join('\n\n');
        if (localServer) {
          const response = await fetch('/save-text', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: text,
          });
          if (!response.ok) throw new Error('Save failed');
        }

        try {
          localStorage.setItem(key, JSON.stringify(snapshot));
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
