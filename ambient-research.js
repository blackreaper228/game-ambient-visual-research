const concept = [
  `Игровой мир принято описывать через изображение: ландшафт, архитектуру, освещение и интерфейс. Но ощущение места создаёт и звук. В открытом мире игрок может надолго задержаться у дома, пойти не туда, куда ведёт сюжет, или вовсе остановиться. Музыка должна пережить эти непредсказуемые паузы. Поэтому предметом исследования стал эмбиент — композиция, в которой тембр, повтор, длительность и пространство нередко важнее привычного развития мелодии. В игре эти свойства получают новую задачу: сопровождать действие, момент начала и окончания которого выбирает сам игрок. Тема исследования — «Игровой эмбиент и его музыкальные истоки».`,
  `Отправной точкой служит идея Брайана Ино о музыке, допускающей разную степень внимания слушателя. Но игровой эмбиент нельзя просто назвать «фоном»: он может сообщать о безопасности места, нарушать её, обозначать переход между областями и менять смысл изображения. В исследовании рассматривается, как приёмы современной музыки меняются при переносе в интерактивную среду. Сохраняет ли композиция свою форму или превращается в набор фрагментов, которые собираются во времени заново? Когда отсутствие мелодии становится выразительным решением, а когда музыкальный материал уступает место шуму и тишине?`,
  `Материал отобран по двум признакам. Во-первых, музыка заметно участвует в построении игрового пространства, а не только сопровождает ролики или боевые сцены. Во-вторых, для сопоставления есть доступная запись и проверяемое свидетельство автора либо опубликованный материал о создании саундтрека. Десять глав расположены по датам первого релиза игр — от Silent Hill 2 (2001) до Cyberpunk 2077 (2020). На этих примерах рассматриваются разные способы использования музыки в играх: влияние на личный стиль композитора, переработку уже записанной песни, работу группы над адаптивной партитурой и соединение музыкальной композиции со звуковым дизайном.`,
  `Сопоставляются записи и условия их звучания: момент вступления, длительность, характер повторения и возможность повлиять на ход музыки. Интервью композиторов и материалы авторов используются для проверки истории создания; опубликованные альбомы и игровые фрагменты — для слухового анализа музыкальных приёмов. Если автор назвал музыканта, но не назвал конкретный трек, пара композиций служит материалом для сравнительного анализа. Тембровое сходство само по себе не подтверждает прямое влияние. Цитаты в основном тексте переведены на русский и снабжены номерами источников.`,
  `Гипотеза состоит в том, что игра заимствует у современной экспериментальной музыки не столько готовую «атмосферу», сколько способы организации внимания: длительный звук, медленное изменение, повтор и неполноту музыкальной фразы. Интерактивность меняет их функцию. В альбоме длительность задаёт автор, а в игре её ощущение зависит от маршрута и остановок игрока. Поэтому центральный вопрос звучит так: как музыкальные идеи, возникшие вне видеоигр, становятся инструментом построения игрового мира? Какие из них остаются узнаваемыми, а какие меняются до неузнаваемости, когда музыку приходится согласовывать с движением, тишиной и звуками среды?`
];

const chapters = [
  {title:'Minecraft', year:'2011', composer:'C418', texts:[
    `В «Minecraft» музыкальное событие не прикреплено к каждой секунде движения. Между короткими композициями остаются паузы, в которых слышны шаги, животные и действия игрока. Из-за этого появление фортепиано или мягкого синтезаторного слоя воспринимается как перемена в самом пространстве. Такая редкость музыки позволяет различить два времени: непрерывное время игры и ограниченное время записи.`,
    `C418 вспоминал, что в детстве пытался подражать более эмбиентным работам Aphex Twin.<sup><a href="#ref-2">2</a></sup> Это подтверждает влияние музыканта, но не указывает на один конкретный трек. Для прослушивания рядом можно поставить «#3» («Rhubarb») Aphex Twin и «Subwoofer Lullaby» C418: у обеих вещей важны мягкие тембровые слои и медленно меняющееся гармоническое поле. Здесь это аналитическое сравнение, а не утверждение о прямом цитировании.`,
    `Ино писал, что эмбиент допускает несколько уровней внимания, «не навязывая ни один из них» (перевод автора исследования).<sup><a href="#ref-1">1</a></sup> «Minecraft» проверяет эту формулу действием: музыка может на минуту выйти на передний план, пока игрок смотрит на ландшафт, а затем отступить, когда он начинает строить. Записанный альбом «Volume Alpha» позволяет услышать композиции подряд; в игре интервалы между ними становятся частью формы.<sup><a href="#ref-3">3</a></sup>`
  ], audio:{type:'bandcamp', id:'1349219244', label:'C418 — «Minecraft — Volume Alpha»',url:'https://c418.bandcamp.com/album/minecraft-volume-alpha'}, image:{"covers":[{"src":"https://c418wiki.absolutelywhizzer.co.uk/images/8/81/Minecraft_-_Volume_Alpha.jpg","caption":"Minecraft — Volume Alpha / C418 / 2011","source":"https://c418.bandcamp.com/album/minecraft-volume-alpha"},{"src":"https://gfx67.decks.de/decks/gfx/co_large/front/end_8/ckj-88.jpg","caption":"Minecraft — Volume Beta / C418 / 2013","source":"https://c418.bandcamp.com/album/minecraft-volume-beta"}]}},
  {title:'Silent Hill 2', year:'2001', composer:'Акира Ямаока', texts:[
    `В «Silent Hill 2» эмбиент не успокаивает. Низкочастотные гулы, индустриальные шумы и фрагменты музыкальных фраз заставляют сомневаться в том, что находится за пределами кадра. Звук не иллюстрирует уже показанную угрозу, а создаёт ожидание ещё невидимого. Поэтому тишина между событиями здесь столь же значима, как звучащий слой.`,
    `Акира Ямаока называл Portishead важным влиянием.<sup><a href="#ref-4">4</a></sup> В качестве внешнего материала можно сопоставить «Roads» с более меланхоличными фрагментами партитуры «Silent Hill 2»: приглушённая атака, ощущение удалённого голоса и замедленный ход объединяют эти записи. Сопоставление основано на слуховом анализе. Интервью подтверждает влияние группы, но не устанавливает связь между конкретными композициями.`,
    `Сам композитор говорил о силе всей слышимой информации игры воздействовать на восприятие.<sup><a href="#ref-5">5</a></sup> Поэтому звуковую картину нельзя свести к альбому саундтрека: важны помехи радио, шаги и обрывы музыки. В сравнении с устойчивой записью трип-хопа игра превращает похожую тембровую тревогу в переменное отношение между пространством и игроком.`
  ], audio:{type:'soundcloud',label:'Акира Ямаока — «A World of Madness» из «Silent Hill 2»',url:'https://soundcloud.com/user-276324423/04-akira-yamaoka-a-world-of-madness-147'}},
  {title:'No Man’s Sky', year:'2016', composer:'65daysofstatic', texts:[
    `Построк обычно строит напряжение во времени: повторяется фигура, уплотняется фактура, меняется громкость. «No Man’s Sky» обращается с этим материалом иначе. Игрок может провести на планете несколько секунд или остаться надолго, а окружающий звуковой мир должен сохранять ощущение движения без обязательного финала.`,
    `Группа 65daysofstatic создала для игры как альбомные пьесы, так и материал для изменяющихся звуковых ландшафтов. Позднее музыканты объясняли, что игровые ландшафты были написаны как «генеративные и бесконечно меняющиеся» (перевод автора исследования).<sup><a href="#ref-6">6</a></sup> Это редкий случай, когда сами авторы позволяют сравнить конечную запись с музыкой, рассчитанной на неопределённую длительность.`,
    `Внешний ориентир главы — прежний язык 65daysofstatic, например «Prisms» с альбома «Wild Light». Сопоставление показывает преемственность пульса и нарастания, но не доказывает, что одна композиция была образцом для другой. Главный сдвиг — в форме: то, что в записи движется к развязке, в игре должно допускать возвращение, перестановку и паузу.<sup><a href="#ref-7">7</a></sup>`
  ], audio:{type:'bandcamp',id:'715098984',label:'65daysofstatic — «No Man’s Sky: Music for an Infinite Universe»',url:'https://lacedrecords.bandcamp.com/album/no-mans-sky-music-for-an-infinite-universe-original-soundtrack'}},
  {title:'Grand Theft Auto V', year:'2013', composer:'Tangerine Dream, Вуди Джексон, The Alchemist, Oh No', texts:[
    `У «Grand Theft Auto V» несколько музыкальных слоёв. Радиостанции представляют музыку как часть мира, слышимую персонажем, а оригинальная партитура помогает организовать действие за пределами радио. Для исследования эмбиента особенно интересна карта: здесь игрок перестаёт двигаться по городу, но продолжает находиться внутри его звуковой системы.`,
    `Tangerine Dream принесли в игру опыт длительной электронной формы. Для сравнения используются пьеса из альбома «Phaedra» 1974 года и музыка, написанная группой для «GTA V». Во встроенном плеере звучит более поздняя версия «Phaedra» 2010 года, а не оригинальная запись. Сходство музыкального языка группы не означает, что эта пьеса была прямым образцом для игры. Композитор Торстен Квешнинг отдельно рассказывал, что один из фрагментов создавался для пользования навигацией по игровой карте.<sup><a href="#ref-8">8</a></sup>`,
    `Это меняет функцию длительного синтезаторного звучания. В альбоме слушатель следует за развитием записи; в интерфейсе оно удерживает ощущение мира в момент, когда изображение города заменено схемой. Так эмбиент связывает перемещение и остановку, не требуя от пользователя полного внимания.`
  ], audio:{type:'bandcamp',id:'4215786214',label:'Tangerine Dream — «The Cinematographic Score GTA 5»',url:'https://tangerinedream.bandcamp.com/album/the-cinematographic-score-gta-5'}},
  {title:'Death Stranding', year:'2019', composer:'Людвиг Форсселль; песни Low Roar и других музыкантов', texts:[
    `В «Death Stranding» музыка часто вступает во время долгого пути. Окружающий ветер, вода и шаги предваряют появление песни, а широкое пространство экрана делает её событием. Здесь важно разделять оригинальную партитуру и уже существовавшие записи, выбранные для игры: присутствие песни в саундтреке не доказывает, что она повлияла на сочинение инструментальной музыки.`,
    `Композиции Low Roar служат материалом для анализа музыкального курирования. Например, «I’ll Keep Coming» существовала как самостоятельная запись до выхода игры; игровой контекст изменяет её роль, связывая голос с одиночеством и расстоянием.<sup><a href="#ref-9">9</a></sup> Это не пример предполагаемого заимствования мотивов Форсселлем, а пример того, как внешняя современная музыка начинает работать внутри игрового пространства.`,
    `Форсселль описывал трудность переноса неоркестровых фрагментов «Death Stranding» в концертную форму.<sup><a href="#ref-10">10</a></sup> Обратное движение помогает понять игру: партитура рассчитана на маршрут, шум и ожидание, поэтому как автономное произведение она организована иначе. Включение готовой записи в игру представляет собой самостоятельный способ использования внешней музыки.`
  ], audio:{type:'soundcloud',label:'Low Roar — «I’ll Keep Coming»',url:'https://soundcloud.com/lowroar/ill-keep-coming'}},
  {title:'Disco Elysium', year:'2019', composer:'Sea Power', texts:[
    `В «Disco Elysium» музыка создаёт память города. Повторяющиеся мелодические обороты и протяжённые инструментальные слои возвращаются в разных обстоятельствах, поэтому знакомая интонация постепенно меняет смысл. Игрок сам выбирает порядок прогулок и разговоров, а музыка помогает воспринимать разрозненные места как части одного пространства.`,
    `Здесь связь с внешней музыкой особенно хорошо документирована. Sea Power рассказывали, что создатель игры предлагал конкретные песни из их каталога для адаптации к местам и сценам.<sup><a href="#ref-11">11</a></sup> Сравнение ранней «Up Against It» с игровой «Whirling-in-Rags» позволяет проследить переработку уже существовавшего материала, а не искать сходство на слух задним числом.`,
    `Главное изменение касается точки внимания. Песня предполагает слушание последовательности, а игровая версия должна выдерживать повтор и соседство с диалогами. Поэтому в ней важны протяжённость фактуры, пауза и узнаваемый звуковой образ гостиницы. Исток композиции остаётся слышен, но её форма подчиняется переменной длительности пребывания игрока.`
  ], audio:{type:'bandcamp',id:'2594204105',label:'Sea Power — «Disco Elysium»',url:'https://seapower.bandcamp.com/album/disco-elysium'}},
  {"title":"Fallout 3","year":"2008","composer":"Инон Зур","texts":["В «Fallout 3» исследование Столичной Пустоши сопровождается оригинальной партитурой и звуками окружающей среды. Радио Пип-Боя образует отдельный слой: игрок может включить его, чтобы на фоне тех же руин зазвучали песни с отчётливым ритмом и вокалом.","В интервью Laced Records Инон Зур выделял появление собственной музыкальной темы у «Fallout 3».<sup><a href=\"#ref-12\">12</a></sup> В пьесе «Into the Wasteland» из альбома саундтрека заметны протяжённые звуковые слои и редкие акценты. Такая фактура позволяет удерживать ощущение места, пока внимание занято маршрутом и звуками среды.","Сопоставление партитуры с радиопеснями показывает два способа организации внимания. Песня даёт слушателю различимую форму и переносит в Пустошь музыкальные ассоциации другой эпохи. Протяжённые фрагменты партитуры оставляют больше пространства для шагов, ветра и других звуков исследуемой местности.<sup><a href=\"#ref-21\">21</a></sup>"],"audio":{"type":"youtube","embed":"https://www.youtube.com/embed/0ZxBtLGxvvA","label":"Инон Зур — «Into the Wasteland»","url":"https://www.youtube.com/watch?v=0ZxBtLGxvvA"},"image":{"src":"https://static.gabestore.ru/screen_product/WFr46Ma-gsOH2oDcpytsMP7HHTFG_Nxw.jpg","caption":"«Fallout 3», руины Столичной Пустоши","source":"https://gabestore.ru/game/fallout-3-game-of-the-year-edition"}},
  {title:'Cyberpunk 2077', year:'2020', composer:'Марцин Пшибылович, П. Т. Адамчик, Пол Леонард-Морган', texts:[
    `Звук Найт-Сити складывается из рекламы, голосов, радио, транспорта и оригинальной партитуры. В таком плотном городе эмбиент не обязан быть тихим. Он может состоять из низких электронных слоёв и жёсткой ритмической фактуры, которые продолжают создавать ощущение места даже без ясно запоминаемой темы.`,
    `Композиторы называли ориентиром широкий спектр музыки — от даунтемпо и хип-хопа до индастриала и техно 1990-х.<sup><a href="#ref-13">13</a></sup> В плеере для сравнения звучит «Magneze» британского продюсера Surgeon: жёсткий пульс и шероховатая электронная фактура помогают услышать жанровый язык, о котором говорят композиторы. «Magneze» используется как пример жанра. Влияние этой записи на конкретную композицию «Cyberpunk 2077» не подтверждено.`,
    `В отличие от «Minecraft», где пауза отделяет музыкальное событие от среды, «Cyberpunk 2077» делает границу менее заметной: музыка и шум города постоянно подменяют друг друга. Это поддерживает гипотезу о том, что современная музыка входит в игру не только как набор произведений, но и как способ организовать тембр и внимание.`
  ], audio:{type:'rutube',id:'eca9e9dab0770c90287e0fc71cae174f',label:'Марцин Пшибылович, П. Т. Адамчик, Пол Леонард-Морган — «The Streets Are Long-Ass Gutters» (3:22)',url:'https://rutube.ru/video/eca9e9dab0770c90287e0fc71cae174f/'}},
  {"title":"Thief: Deadly Shadows","year":"2004","composer":"Эрик Бросиус","texts":["В «Thief: Deadly Shadows» звук помогает выбирать маршрут и момент для движения. Шаги и голоса сообщают о присутствии людей вне поля зрения, а фоновые тембры задают характер места. На этом соседстве строится напряжение: длительный звуковой слой поддерживает ожидание, пока отдельные шумы требуют реакции.","В записи «Shalebridge Cradle» протяжённые низкие слои и редкие шумовые акценты сближают партитуру с акустикой здания. Ранний саундтрек Бросиуса к «Thief: The Dark Project» даёт материал для сравнения: в обеих работах тембр и плотность фактуры помогают различать пространства серии.<sup><a href=\"#ref-23\">23</a></sup>","Бросиус обсуждает свою работу над звуком игр серии в интервью для подкаста о Looking Glass Studios.<sup><a href=\"#ref-14\">14</a></sup> В игровом эпизоде продолжительность ожидания определяет игрок. Поэтому устойчивый фон может сопровождать и короткий переход, и долгую остановку, оставляя слышимыми звуки, по которым принимаются решения."],"audio":{"type":"youtube","embed":"https://www.youtube.com/embed/0UEeiGUk3Iw","label":"Эрик Бросиус — Thief: Deadly Shadows (саундтрек)","url":"https://www.youtube.com/watch?v=0UEeiGUk3Iw"}},
  {title:'Hollow Knight', year:'2017', composer:'Кристофер Ларкин', texts:[
    `В «Hollow Knight» музыкальная фактура помогает различать области огромного подземного мира. У каждой зоны есть собственный тембр и плотность, но мелодия часто остаётся сдержанной. Благодаря этому пространство кажется существующим дольше, чем длится конкретный эпизод игрока.`,
    `Кристофер Ларкин упоминал Дебюсси среди музыкальных ориентиров.<sup><a href="#ref-15">15</a></sup> В сравнительном анализе «La cathédrale engloutie» и «City of Tears» рассматриваются регистр, резонанс и гармоническая неопределённость. Прямое влияние прелюдии на игровой трек не подтверждено.`,
    `У Дебюсси образ погружённого собора раскрывается в конечной фортепианной пьесе. В игре сходные средства пространственного воображения должны выдерживать повторное прохождение области. Так импрессионистическая работа с тембром и гармонией становится частью навигации, а не только способом описать настроение.`
  ], audio:{type:'bandcamp',id:'2306704082',label:'Кристофер Ларкин — «Hollow Knight»',url:'https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack'}}
];

const bibliography = [
  ['Ино Б. Ambient Music : заметки к альбому «Ambient 1: Music for Airports». 1978. URL: https://soundenvironments.wordpress.com/wp-content/uploads/2011/10/eno_ambience.pdf (дата обращения: 25.11.2026).','https://soundenvironments.wordpress.com/wp-content/uploads/2011/10/eno_ambience.pdf'],
  ['Бёрнс Т. Л. Интервью с C418 // Red Bull Music Academy Daily. 2015. URL: https://web03125.microsites03.redbull.com/2015/08/c418-interview/ (дата обращения: 25.11.2026).','https://web03125.microsites03.redbull.com/2015/08/c418-interview/'],
  ['C418. Minecraft — Volume Alpha : альбом. 2011. URL: https://c418.bandcamp.com/album/minecraft-volume-alpha (дата обращения: 25.11.2026).','https://c418.bandcamp.com/album/minecraft-volume-alpha'],
  ['Ямаока А. Интервью // Game Revolution. 19.05.2008. URL: https://www.silenthillmemories.net/creators/interviews/2008.05.19_allen_yamaoka_gamerevolution_en.htm (дата обращения: 25.11.2026).','https://www.silenthillmemories.net/creators/interviews/2008.05.19_allen_yamaoka_gamerevolution_en.htm'],
  ['Ямаока А. Интервью // RocketBaby. 2001. URL: https://www.silenthillmemories.net/creators/interviews/2001_yamaoka_rocketbaby_en.htm (дата обращения: 25.11.2026).','https://www.silenthillmemories.net/creators/interviews/2001_yamaoka_rocketbaby_en.htm'],
  ['65daysofstatic. No Man’s Sky: Journeys — New Album. 27.08.2025. URL: https://www.65daysofstatic.com/no-mans-sky-journeys-new-album/ (дата обращения: 25.11.2026).','https://www.65daysofstatic.com/no-mans-sky-journeys-new-album/'],
  ['65daysofstatic. No Man’s Sky: Music for an Infinite Universe : описание издания. URL: https://65daysofstatic.bandcamp.com/merch/no-mans-sky-double-gatefold-vinyl (дата обращения: 25.11.2026).','https://65daysofstatic.bandcamp.com/merch/no-mans-sky-double-gatefold-vinyl'],
  ['Квешнинг Т. Интервью о создании музыки // Sound on Sound. URL: https://www.soundonsound.com/techniques/how-got-sound-thorsten-quaeschning (дата обращения: 25.11.2026).','https://www.soundonsound.com/techniques/how-got-sound-thorsten-quaeschning'],
  ['Epic Games Store. Six moody tracks from «Death Stranding». URL: https://store.epicgames.com/news/six-moody-tracks-from-death-stranding-to-put-you-in-your-feelings (дата обращения: 25.11.2026).','https://store.epicgames.com/news/six-moody-tracks-from-death-stranding-to-put-you-in-your-feelings'],
  ['Форсселль Л. Интервью // Kojima Productions. URL: https://www.kojimaproductions.jp/en/strands_of_harmony_interview (дата обращения: 25.11.2026).','https://www.kojimaproductions.jp/en/strands_of_harmony_interview'],
  ['Уилкинсон Я. Интервью о музыке «Disco Elysium» // Nintendo Life. 12.10.2022. URL: https://www.nintendolife.com/features/meet-sea-power-the-talent-behind-disco-elysiums-exquisite-music (дата обращения: 25.11.2026).','https://www.nintendolife.com/features/meet-sea-power-the-talent-behind-disco-elysiums-exquisite-music'],
  ["Квилфелдт Т. Интервью с Иноном Зуром // Laced Records. 19.04.2019. URL: https://www.lacedrecords.co/blogs/blog/interview-fallout-composer-inon-zur-on-creating-other-world-music (дата обращения: 26.11.2026).","https://www.lacedrecords.co/blogs/blog/interview-fallout-composer-inon-zur-on-creating-other-world-music"],
  ['Пшибылович М., Адамчик П. Т., Леонард-Морган П. Интервью о музыке «Cyberpunk 2077» // Game Informer. 19.11.2020. URL: https://gameinformer.com/2020/11/19/sitting-down-with-the-composers-behind-cyberpunk-2077s-soundtrack (дата обращения: 25.11.2026).','https://gameinformer.com/2020/11/19/sitting-down-with-the-composers-behind-cyberpunk-2077s-soundtrack'],
  ["Looking Glass Studios Podcast. Интервью с Эриком Бросиусом. Часть 7. 2016. URL: https://www.youtube.com/watch?v=4oyoi4pT-Q8 (дата обращения: 26.11.2026).","https://www.youtube.com/watch?v=4oyoi4pT-Q8"],
  ['Ларкин К. Интервью // Bandcamp Daily. URL: https://daily.bandcamp.com/features/christopher-larkin-hollow-knight-silksong-interview (дата обращения: 25.11.2026).','https://daily.bandcamp.com/features/christopher-larkin-hollow-knight-silksong-interview']
];

// Кадры привязаны к играм, а не к порядку экранов: рубрикатор остаётся кратким.
const additionalMedia = {
  'Minecraft': [
    {src:'https://i.pinimg.com/originals/27/1b/99/271b999c4fd1f90c36524214d35bc9c5.gif',caption:'«Minecraft»: анимированный пейзаж',source:'https://www.pinterest.com/necrocrafter/minecraft-gifs/'}
  ],
  'Silent Hill 2': [
    {src:'https://pekoeblaze.wordpress.com/wp-content/uploads/2021/09/silent-hill-2-2001-corridor-screenshot.jpg?w=1024',caption:'«Silent Hill 2» (2001): пустой коридор',source:'https://pekoeblaze.wordpress.com/2021/11/14/how-horror-games-use-location-design-to-set-an-emotional-tone/'},
    {src:'https://media1.tenor.com/m/DACxARn7hjoAAAAd/silent-hill-james-sunderland.gif',caption:'«Silent Hill 2», Джеймс у зеркала (GIF)',source:'https://tenor.com/view/silent-hill-james-sunderland-gif-18482511'}
  ],
  'No Man’s Sky': [
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/7d45478fbac8b1a41172adf8e598784a7d04b41d/ss_7d45478fbac8b1a41172adf8e598784a7d04b41d.1920x1080.jpg',caption:'«No Man’s Sky»: исследование планеты',source:'https://store.steampowered.com/app/275850/No_Mans_Sky/'}
  ],
  'Grand Theft Auto V': [
    {src:'https://www.igrandtheftauto.com/content/images/lg/3603-gta5-just-another-wonderful-sunset-in-los-santos.jpg',caption:'«Grand Theft Auto V»: городской пейзаж Лос-Сантоса',source:'https://www.igrandtheftauto.com/gta5/images/3603-gta5-just-another-wonderful-sunset-in-los-santos'}
  ],
  'Death Stranding': [
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1190460/ss_6808ff9f0e130075aca75cfb4017e06fe888fd32.1920x1080.jpg',caption:'«Death Stranding»: путь через открытый ландшафт',source:'https://store.steampowered.com/app/1190460/DEATH_STRANDING/'}
  ],
  'Disco Elysium': [
    {src:'https://www.newgamenetwork.com/images/uploads/gallery/DiscoElysium/discoely_06.jpg',caption:'«Disco Elysium», улица Мартинеза',source:'https://www.newgamenetwork.com/article/2233/disco-elysium-review/'},
    {src:'https://miro.medium.com/v2/resize:fit:1400/1*8RQdDH88M8MS7GWCyDQpkw.gif',caption:'«Disco Elysium»: анимированный фрагмент исследования комнаты',source:'https://medium.com/@stethornton6/disco-elysium-forever-62ce7d510f46'}
  ],
  'Cyberpunk 2077': [
    {src:'https://cdn.tomshw.it/storage/wp/new-images/2020/12/cyberpunk-2077-album-25-06-2020-131847.jpg',caption:'«Cyberpunk 2077»: городская среда Найт-Сити',source:'https://www.tomshw.it/videogioco/cyberpunk-2077-come-iniziare-al-meglio'},
    {src:'https://i3.ruliweb.com/ori/20/06/27/172f3951ac84586b7.gif',caption:'«Cyberpunk 2077»: кинематографический пролёт над Найт-Сити',source:'https://m.ruliweb.com/ps/board/300001/read/2216922'}
  ],
  'Thief: Deadly Shadows': [{"src":"https://cdn.mos.cms.futurecdn.net/WQeLMGpRuFAFyxqU8E7gFZ.jpg","caption":"«Thief: Deadly Shadows», приют Шейлбридж","source":"https://www.pcgamer.com/great-moments-in-pc-gaming-the-shalebridge-cradle-in-thief-deadly-shadows/"}],
  'Hollow Knight': [
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg',caption:'«Hollow Knight»: подземное пространство',source:'https://store.steampowered.com/app/367520/Hollow_Knight/'},
    {src:'https://i.makeagif.com/media/3-07-2021/IQGM-u.gif',caption:'«Hollow Knight»: анимированный фрагмент игры',source:'https://makeagif.com/gif/focus-hollow-knight-IQGM-u'}
  ]
};
const headingArtists = {
  'Grand Theft Auto V': 'Tangerine Dream',
  'Death Stranding': 'Людвиг Форсселль',
  'Cyberpunk 2077': 'Марцин Пшибылович',
  'Thief: Deadly Shadows': 'Эрик Бросиус'
};
// Один конкретный внешний музыкальный пример для каждого сопоставления.
// `note` указывает статус связи и не выдаёт слуховое сходство за доказанное влияние.
const comparisonAudio = {
  'Minecraft': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=3962876167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3445984519/transparent=true/',label:'Aphex Twin — «#3» («Rhubarb»), 1994',url:'https://aphextwin.bandcamp.com/track/3',note:'C418 называл Aphex Twin влиянием; выбор именно этого трека — сопоставление.'},
  'Silent Hill 2': {type:'rutube',id:'b4ef8b53fcc4b210961ae6f417c80246',label:'Portishead — «Roads», концертная запись 1997 года (5:15)',url:'https://rutube.ru/video/b4ef8b53fcc4b210961ae6f417c80246/',note:'Ямаока называл Portishead влиянием; связь именно с этой песней не подтверждена.'},
  'No Man’s Sky': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=2076016976/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=346904642/transparent=true/',label:'65daysofstatic — «Prisms», 2013',url:'https://birdsrobe.bandcamp.com/track/prisms',note:'Ранняя запись той же группы: сравнение её конечной формы с игровым звуковым ландшафтом.'},
  'Grand Theft Auto V': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=113716958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3966202026/transparent=true/',label:'Tangerine Dream — «Phaedra», новая запись 2010 года',url:'https://tangerinedreamofficial.bandcamp.com/track/phaedra',note:'Сравнение языка группы. В плеере — новая запись пьесы из альбома 1974 года.'},
  'Disco Elysium': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=2214687530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3319588201/transparent=true/',label:'Sea Power — «Up Against It», 2012',url:'https://seapower.bandcamp.com/track/up-against-it',note:'Ранее записанная песня группы, материал которой был переработан для игры.'},
  "Fallout 3": {"type":"link","label":"Bethesda — Celebrating Fallout’s Songs","url":"https://fallout.bethesda.net/en-US/news/fallout-25-celebrating-fallouts-songs","note":"Песни игрового радио дают материал для сравнения с оригинальной партитурой."},
  'Cyberpunk 2077': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=837855729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3889555849/transparent=true/',label:'Surgeon — «Magneze», переиздание 2014 года',url:'https://dj-surgeon.bandcamp.com/track/magneze',note:'Пример индустриального техно для слухового сравнения; прямое влияние не установлено.'},
  "Thief: Deadly Shadows": {"type":"link","label":"Эрик Бросиус — Thief: The Dark Project (1998)","url":"https://thief-remastered.bandcamp.com/album/thief-the-dark-project-remastered-soundtrack","note":"Более ранняя партитура Бросиуса для сопоставления звуковой среды двух игр серии."},
  'Hollow Knight': {type:'bandcamp',embed:'https://bandcamp.com/EmbeddedPlayer/album=3118275143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3476114154/transparent=true/',label:'Клод Дебюсси — «La cathédrale engloutie», исполнение Сидни Рим, 2025',url:'https://sydneyrime.bandcamp.com/track/la-cath-drale-engloutie',note:'Ларкин упоминал Дебюсси; связь конкретной прелюдии с «City of Tears» — сопоставление.'}
};
for (const recording of Object.values(comparisonAudio)) {
  recording.ref = bibliography.length + 1;
  bibliography.push([`${recording.label}${recording.type === 'link' ? '' : ` [Звукозапись] // ${recording.type === 'rutube' ? 'RUTUBE' : 'Bandcamp'}`}. URL: ${recording.url} (дата обращения: 25.11.2026).`, recording.url]);
}
bibliography.push(['Low Roar. I’ll Keep Coming [Звукозапись] // SoundCloud. 2014. URL: https://soundcloud.com/lowroar/ill-keep-coming (дата обращения: 25.11.2026).','https://soundcloud.com/lowroar/ill-keep-coming']);
const authors = ["Mojang","Team Silent (Konami)","Hello Games","Rockstar North","Kojima Productions","ZA/UM","Bethesda Game Studios","CD Projekt Red","Ion Storm","Team Cherry"];
const soundtrackCaptions = ["Minecraft — Volume Alpha / C418 / 2011","A World of Madness / Акира Ямаока / 2001","No Man’s Sky: Music for an Infinite Universe / 65daysofstatic / 2016","The Cinematographic Score GTA 5 / Tangerine Dream / 2014","I’ll Keep Coming / Low Roar / 2014","Disco Elysium / Sea Power / 2019","Into the Wasteland / Инон Зур / 2008","The Streets Are Long-Ass Gutters / Марцин Пшибылович, П. Т. Адамчик, Пол Леонард-Морган / 2020","Thief: Deadly Shadows / Эрик Бросиус / 2004","Hollow Knight / Кристофер Ларкин / 2017"];
const comparisonCaptions = ["#3 (Rhubarb) / Aphex Twin / 1994","Roads (концертная запись) / Portishead / 1997","Prisms / 65daysofstatic / 2013","Phaedra (новая запись) / Tangerine Dream / 2010",null,"Up Against It / Sea Power / 2012","Celebrating Fallout’s Songs / Bethesda Softworks / 2022","Magneze (переиздание) / Surgeon / 2014","Thief: The Dark Project / Эрик Бросиус / 1998","La cathédrale engloutie (исп. Сидни Рим) / Клод Дебюсси / 2025"];
const chapterMedia = new Map(chapters.map((chapter, index) => {
  chapter.audio.caption = soundtrackCaptions[index];
  if (comparisonAudio[chapter.title]) comparisonAudio[chapter.title].caption = comparisonCaptions[index];
  const media = [chapter.image, ...(additionalMedia[chapter.title] || [])].filter(Boolean);
  return [chapter.title, media.map(image => image.covers ? image : {
    ...image, caption: [image.caption, authors[index], chapter.year].join(' / '),
  })];
}));
const allMedia = [...chapterMedia.values()].flat();
const imageSources = allMedia.map(image => (image.covers || [image]).map(item => `${item.caption}. ${item.source} (дата обращения: 26.11.2026).`).join(' · '));
const textScreen = html => `<section class="screen text-screen"><div class="text-column">${html}</div></section>`;
const headingScreen = title => `<section class="screen large"><h2>${title}</h2></section>`;
const audioScreen = audio => {
  const src = (audio.embed && audio.type === 'bandcamp'
    ? audio.embed.replace('/tracklist=false/', '/tracklist=false/artwork=small/')
    : audio.embed) || (audio.type === 'bandcamp'
    ? `https://bandcamp.com/EmbeddedPlayer/album=${audio.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`
    : audio.type === 'soundcloud'
      ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(audio.url)}&color=%23b84325&auto_play=false&hide_related=true&show_comments=false&show_user=true&visual=false`
      : `https://rutube.ru/play/embed/${audio.id}`);
  return `<figure class="screen music-embed ${['rutube', 'youtube'].includes(audio.type) ? 'music-video' : ''}">${audio.note ? `<div class="music-context">${audio.note}${audio.ref?`<sup><a href="#ref-${audio.ref}">${audio.ref}</a></sup>`:''}</div>` : ''}${audio.type === 'link' ? '' : `<iframe title="${audio.label}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen src="${src.replaceAll('&','&amp;')}"></iframe>`}<figcaption><a href="${audio.url}" target="_blank" rel="noopener noreferrer">${audio.caption || audio.label}</a></figcaption></figure>`;
};
const imageScreen = image => image.covers
  ? `<figure class="screen game-image"><div class="cover-collage">${image.covers.map(cover => `<img src="${cover.src}" alt="${cover.caption}" loading="lazy">`).join("")}</div><figcaption>${image.covers.map(cover => cover.caption).join(" · ")}</figcaption></figure>`
  : `<figure class="screen game-image"><img src="${image.src}" alt="${image.caption}" loading="lazy"><figcaption>${image.caption}${image.license ? ' · ' + image.license : ''}</figcaption></figure>`;

const sectionHeadings = {
  'concept': 'Концепция',
  'ending': 'Заключение',
  'bibliography': 'Библиография',
  'image-sources': 'Источники изображений',
};
const chapterHeading = chapter => `${chapter.title} — ${headingArtists[chapter.title] || chapter.composer}`;
const rubricHeadings = [
  sectionHeadings.concept,
  ...chapters.map(chapterHeading),
  sectionHeadings.ending,
  sectionHeadings.bibliography,
  sectionHeadings['image-sources'],
];

document.querySelector('#concept').innerHTML = headingScreen(sectionHeadings['concept']) + concept.map(textScreen).join('');
document.querySelector('#rubric-list').innerHTML = rubricHeadings.map((title,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${title}</li>`).join('');
const minecraftOriginal = audioScreen({type:'youtube',embed:'https://www.youtube.com/embed/o3_InDEtpLA',label:'Subwoofer Lullaby',caption:'Subwoofer Lullaby / C418 / 2011',url:'https://www.youtube.com/watch?v=o3_InDEtpLA'});
document.querySelector('#research').innerHTML = chapters.map(c=>{
  const media = chapterMedia.get(c.title);
  const external = comparisonAudio[c.title];
  return `<article class="chapter" id="${c.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}">${headingScreen(chapterHeading(c))}${textScreen(c.texts[0])}${external?audioScreen(external):''}${textScreen(c.texts[1])}${audioScreen(c.title==='Death Stranding'?{...c.audio,note:'Low Roar выпустили эту песню до игры; позднее она стала частью её музыкального мира.'}:c.audio)}${media[0]?imageScreen(media[0]):''}${textScreen(c.texts[2])}${media.slice(1).map(imageScreen).join('')}${c.title==='Minecraft'?minecraftOriginal:''}</article>`;
}).join('');
document.querySelector('#ending').innerHTML = headingScreen(sectionHeadings['ending']) + [
  `Сопоставление десяти игр показало, что «игровой эмбиент» — не единый жанр. В «Minecraft» он строится на редких появлениях музыкальной композиции, в «Silent Hill 2» — на тревожном соседстве музыки и шума, в «No Man’s Sky» — на возможности бесконечного изменения материала. В каждом случае важно не только то, как звучит запись, но и когда игрок её встречает.`,
  `Наиболее доказательная линия влияния прослеживается там, где есть свидетельство самих музыкантов или документированная переработка прежней работы. C418 и Ямаока называют свои ориентиры; Sea Power адаптируют собственный каталог. Сходство двух треков само по себе остаётся интерпретацией. Поэтому исследование различает подтверждённый источник, сопоставление музыкальных приёмов и использование готовой песни внутри игры.`,
  `Гипотеза подтвердилась частично. Игры действительно используют длительность, повтор, тембр и неполную фразу, знакомые современной экспериментальной музыке. Но интерактивная среда добавляет к ним новую переменную — действие слушателя. Игрок может задержать, прервать или заново открыть музыкальное событие. Именно поэтому игровой эмбиент способен не просто описывать место, а участвовать в его создании.`
].map(textScreen).join('');
const formatBibliography = label => label
  .replace(/\. URL: /, '. — URL: ')
  .replace(/\. (\d{4})\. — URL:/, '. — $1. — URL:')
  .replace(/\. (\d{2}\.\d{2}\.\d{4})\. — URL:/, '. — $1. — URL:');
document.querySelector('#bibliography').innerHTML = headingScreen(sectionHeadings['bibliography']) + `<div class="screen sources-panel"><ol>${bibliography.map(([label,url],i)=>`<li id="ref-${i+1}">${formatBibliography(label).replace(url,`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)}</li>`).join('')}</ol></div>`;
document.querySelector('#image-sources').innerHTML = headingScreen(sectionHeadings['image-sources']) + `<div class="screen sources-panel"><ol>${imageSources.map(s=>`<li>${s.replace(/https:\/\/[^ ]+/,url=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)}</li>`).join('')}</ol></div>`;
// Типографируем только видимый текст: адреса, атрибуты и встроенные плееры остаются нетронутыми.
const typograph = value => value
  .replace(/(^|[\s(«])((?:[ВвКкСсУуОоАаИиЯя]|во|Во|на|На|по|По|за|За|из|Из|от|От|до|До|не|Не|но|Но|со|Со|об|Об|ко|Ко|ни|Ни)) +(?=[А-Яа-яЁёA-Za-z0-9«])/g, '$1$2\u00a0')
  .replace(/(\d) +(года|год|лет|века|век|году|г\.)\b/gi, '$1\u00a0$2')
  .replace(/(\d{4})[\s-]+(\d{4})/g, '$1–$2')
  .replace(/([А-ЯЁ])\. +([А-ЯЁ])\./g, '$1.\u00a0$2.')
  .replace(/ +([,.;:!?])/g, '$1')
  .replace(/ {2,}/g, ' ');
const walker = document.createTreeWalker(document.querySelector('main'), NodeFilter.SHOW_TEXT);
const textNodes = [];
while (walker.nextNode()) textNodes.push(walker.currentNode);
for (const node of textNodes) {
  if (node.parentElement.closest('a[href^="http"], script, style')) continue;
  node.textContent = typograph(node.textContent);
}
document.querySelector('#screen-count').textContent = document.querySelectorAll('.screen').length;
