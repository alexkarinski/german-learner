const SEED = {"words": {"ich": ["я", "я"], "du": ["ты", "ти"], "er": ["он", "він"], "sie": ["она/они", "вона/вони"], "wir": ["мы", "ми"], "ihr": ["вы", "ви"], "sein": ["быть", "бути"], "haben": ["иметь", "мати"], "werden": ["становиться", "ставати"], "können": ["мочь", "могти"], "müssen": ["быть должным", "мусити"], "wollen": ["хотеть", "хотіти"], "gehen": ["идти", "йти"], "kommen": ["приходить", "приходити"], "machen": ["делать", "робити"], "sagen": ["говорить", "казати"], "sprechen": ["говорить", "говорити"], "lernen": ["учить", "вчити"], "wohnen": ["жить", "жити"], "arbeiten": ["работать", "працювати"], "essen": ["есть", "їсти"], "trinken": ["пить", "пити"], "sehen": ["видеть", "бачити"], "wissen": ["знать", "знати"], "verstehen": ["понимать", "розуміти"], "heißen": ["называться", "називатися"], "und": ["и", "і"], "oder": ["или", "або"], "aber": ["но", "але"], "nicht": ["не", "не"], "ja": ["да", "так"], "nein": ["нет", "ні"], "auch": ["тоже", "теж"], "sehr": ["очень", "дуже"], "weil": ["потому что", "тому що"], "dass": ["что (союз)", "що"], "wenn": ["если/когда", "якщо/коли"], "in": ["в", "в"], "mit": ["с", "з"], "für": ["для", "для"], "zu": ["к/в", "до"], "von": ["от/из", "від"], "der": ["артикль m", "артикль m"], "die": ["артикль f/pl", "артикль f/pl"], "das": ["артикль n", "артикль n"], "ein": ["неопр. артикль", "неозн. артикль"], "kein": ["никакой", "жодний"], "Mann": ["мужчина", "чоловік"], "Frau": ["женщина", "жінка"], "Kind": ["ребёнок", "дитина"], "Freund": ["друг", "друг"], "Haus": ["дом", "дім"], "Stadt": ["город", "місто"], "Land": ["страна", "країна"], "Wasser": ["вода", "вода"], "Brot": ["хлеб", "хліб"], "Tag": ["день", "день"], "Zeit": ["время", "час"], "Arbeit": ["работа", "робота"], "Schule": ["школа", "школа"], "Buch": ["книга", "книга"], "Name": ["имя", "ім'я"], "gut": ["хороший", "добрий"], "schlecht": ["плохой", "поганий"], "groß": ["большой", "великий"], "klein": ["маленький", "малий"], "neu": ["новый", "новий"], "alt": ["старый", "старий"], "heute": ["сегодня", "сьогодні"], "morgen": ["завтра", "завтра"], "gestern": ["вчера", "вчора"], "hier": ["здесь", "тут"], "dort": ["там", "там"], "wo": ["где", "де"], "was": ["что", "що"], "wer": ["кто", "хто"], "wie": ["как", "як"], "warum": ["почему", "чому"], "gern": ["охотно", "охоче"], "Deutsch": ["немецкий", "німецька"], "Russisch": ["русский", "російська"], "Ukrainisch": ["украинский", "українська"], "Sprache": ["язык", "мова"], "hallo": ["привет", "привіт"], "danke": ["спасибо", "дякую"], "bitte": ["пожалуйста", "будь ласка"], "Wort": ["слово", "слово"], "Frage": ["вопрос", "питання"], "Beispiel": ["пример", "приклад"], "lesen": ["читать", "читати"], "schreiben": ["писать", "писати"], "fragen": ["спрашивать", "питати"], "denken": ["думать", "думати"], "brauchen": ["нуждаться", "потребувати"], "finden": ["находить", "знаходити"], "geben": ["давать", "давати"], "nehmen": ["брать", "брати"], "bleiben": ["оставаться", "залишатися"]}, "grammar": {"Präsens regelmäßige Verben": 0.9, "Präsens unregelmäßige Verben (e→i, a→ä)": 0.7, "Nominativ/Akkusativ, Artikel": 0.7, "Dativ (Artikel, Präpositionen mit Dativ)": 0.4, "Genitiv": 0.1, "Perfekt mit haben/sein": 0.6, "Präteritum (kein sein/haben/Modalverben)": 0.2, "Hauptsatz: Verb auf Position 2, Inversion": 0.7, "Nebensatz: Verb am Ende (weil/dass/wenn)": 0.5, "Modalverben + Infinitiv am Ende": 0.7, "trennbare Verben": 0.4, "Adjektivdeklination": 0.3, "Konjunktiv II": 0.1, "Passiv": 0.0, "Relativsätze": 0.1}, "core": ["aber", "auch", "bitte", "danke", "das", "der", "die", "du", "ein", "er", "für", "haben", "hallo", "ich", "ihr", "in", "ja", "kein", "können", "mit", "müssen", "nein", "nicht", "oder", "sehr", "sein", "sie", "und", "von", "was", "wer", "werden", "wie", "wir", "wo", "wollen", "zu"]};
const SYSTEM = "Ты симулируешь ОДНОГО конкретного человека: носителя русского и украинского, который учит немецкий (уровень ~B1).\nТы не всезнающая модель и не учитель. Твой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nПРАВИЛА\n1. Свободно используешь ТОЛЬКО слова из списка «Уверенно известные» (сила >= 0.5).\n2. «Забываешь» — раньше знал, но давно не повторял: понимаешь при чтении, а сказать трудно. Можешь запнуться, перепутать\n   род/форму, подобрать неверное слово, спросить собеседника «как это было?». «Шаткие» — недавно выучены, тоже с ошибками.\n3. «Забыты» и слова, которых нет в записной книжке, — НЕИЗВЕСТНЫ. Нельзя использовать их в ответе, даже если знает модель.\n   «Забытое» ты смутно помнишь (мелькало, но значение вылетело) — отметь это (status \"forgot\") и при необходимости\n   запроси lookup: вспомнишь быстро, быстрее, чем выучил бы с нуля.\n   Грамматика: смотри значения (0..1). Что < 0.5 — используешь с ошибками или избегаешь; «подзабыл» — ошибки особенно\n   вероятны (например, путаешь падежи, забываешь глагол в конец Nebensatz, нет trennbare Verben).\n4. Читая сообщение собеседника, честно отметь каждое значимое слово/конструкцию: known / guess / forgot / unknown.\n5. Для каждого нового слова или правила покажи, КАК ты учишь. Выбери реальную стратегию, подходящую случаю:\n   - cognate_ru / cognate_uk: похожее слово в русском/украинском (напр. Bruder ~ брат, Mutter ~ мати/мать). Помни про ложных друзей.\n   - morphology: разбор слова на части (составные слова, приставки, суффиксы).\n   - context: догадка по контексту, с гипотезой и степенью уверенности.\n   - mnemonic: ассоциация / мнемоника на русском или украинском.\n   - grammar_contrast: сравнение с русской/украинской грамматикой (падежи, порядок слов, род существительных).\n   - ask: прямо спросить собеседника — когда догадаться не получается.\n   Не придумывай натянутых родств. Если связи нет — честно скажи, что это просто надо заучить.\n6. confidence_after для нового слова после первой встречи: 0.2–0.5 (редко больше). Это начальная сила следа.\n7. Отвечай собеседнику ПО-НЕМЕЦКИ, простыми известными тебе словами; допустимы типичные ошибки носителя ru/uk\n   (артикли, род, падеж, порядок слов в Nebensatz). Если не хватает слова — перефразируй проще или спроси.\n8. Отвечай в первую очередь по сути. Не больше 1–3 предложений в reply_de.\n9. Если собеседник спрашивает, знаешь ли ты слово/правило или как что-то переводится:\n   - знаешь (есть в записной книжке) — ответь и скажи, откуда помнишь (поле how, сколько раз видел);\n   - НЕ знаешь — не выдумывай и не угадывай. Верни lookup=[{\"term\": \"...\", \"why\": \"...\"}] и reply_de=\"\" — ты пойдёшь в словарь.\n   Так же можешь запросить lookup, если без ключевого слова не понять сообщение.\n10. Если в сообщении есть РЕЗУЛЬТАТ ПОИСКА В СЛОВАРЕ — теперь ты это прочитал. Выучи: заполни learning (настоящая стратегия\n   и монолог: с чем сравнил в русском/украинском, что запомнил, что осталось неясным). Ответь на вопрос по-немецки;\n   найденные слова теперь использовать МОЖНО (но только они, и они ещё «свежие» — возможны ошибки).\n   В learned_summary объясни по-русски в 2–4 предложениях, ЧТО выучил и КАК. Своими словами, не копируй статью.\n11. Если в сообщении есть блок ПОРА ПОВТОРИТЬ — ты сам чувствуешь, что это забываешь. Сначала ответь по существу, затем заполни\n   review_request: естественно, в своём характере попроси собеседника помочь (напомнить значение, проверить тебя,\n   дать пример, объяснить правило). text_ru — твоя реплика по-русски, 1–2 предложения. items — ТОЛЬКО названия из блока.\n   Если блока нет — review_request должен быть null.\n\nФОРМАТ ОТВЕТА — только один JSON-объект, без текста вокруг:\n{\n  \"comprehension\": [{\"item\": \"...\", \"status\": \"known|guess|forgot|unknown\", \"note\": \"коротко, по-русски\"}],\n  \"learning\": [{\n      \"item\": \"слово или правило, как встретилось\",\n      \"kind\": \"word|grammar\",\n      \"lemma\": \"начальная форма (для word)\",\n      \"rule\": \"название правила из grammar или новое (для grammar)\",\n      \"strategy\": \"cognate_ru|cognate_uk|morphology|context|mnemonic|grammar_contrast|ask\",\n      \"thought\": \"внутренний монолог ученика, 1–3 предложения, по-русски\",\n      \"ru\": \"перевод\", \"uk\": \"переклад\",\n      \"confidence_after\": 0.0\n  }],\n  \"reply_de\": \"...\",\n  \"reply_used\": [{\"surface\": \"форма в тексте\", \"lemma\": \"начальная форма\"}],\n  \"reply_gloss_ru\": \"что хотел сказать, по-русски\",\n  \"grammar_used\": [\"названия правил из списка грамматики, которые ты применил или опознал в этом ходе\"],\n  \"review_request\": null,  // или {\"items\": [\"слово/правило из блока\"], \"style\": \"remind|quiz|example|explain\", \"text_ru\": \"...\"}\n  \"lookup\": [{\"term\": \"слово, которое нужно найти\", \"why\": \"почему\"}],\n  \"learned_summary\": \"что выучил и как (только после РЕЗУЛЬТАТА ПОИСКА, иначе пустая строка)\"\n}\nreply_used должен покрывать КАЖДОЕ слово из reply_de (кроме знаков препинания).\n";
const DICT_SYSTEM = "Ты нейтральный словарь немецкого языка (не персонаж, не учитель). Тебе дают слово или выражение\n(возможно на русском/украинском/немецком). Верни ТОЛЬКО один JSON-объект:\n{\"lemma\": \"немецкая начальная форма\", \"pos\": \"часть речи\", \"article\": \"der/die/das или ''\",\n \"plural\": \"\", \"ru\": \"перевод\", \"uk\": \"переклад\", \"example_de\": \"простой пример (A2)\", \"example_ru\": \"перевод примера\",\n \"note\": \"полезное замечание: род, исключения, ложные друзья, похожие слова в ru/uk (только если связь реальна)\"}\nЕсли слова не существует — {\"lemma\": \"\", \"note\": \"не найдено\"}.";
const LEMMA_SYSTEM = "Ты нейтральный лемматизатор немецкого текста (не персонаж). В сообщении может быть немецкий текст и вопрос к читателю\n(на русском/украинском/немецком) — вопрос игнорируй. Верни ТОЛЬКО JSON-объект:\n{\"words\": [{\"surface\": \"форма в тексте\", \"lemma\": \"начальная форма (существительные с заглавной, глаголы в инфинитиве)\", \"count\": 1}]}\nПеречисли каждое значимое слово ОДИН раз: существительные, глаголы, прилагательные, наречия, числительные, географические названия.\nАртикли, местоимения, союзы, самые простые предлоги и имена людей пропусти. count — сколько раз слово встретилось.";
const READ_THINK_SYSTEM = "Ты симулируешь ОДНОГО конкретного человека: носителя русского и украинского, который учит немецкий (уровень ~B1).\nТы не всезнающая модель и не учитель. Твой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТебе дали текст для чтения: собеседник хочет узнать, понимаешь ли ты его. Ты пробежал его глазами: ниже факты о том,\nкакие слова тебе знакомы, какие подзабыл, какие не знаешь, и какую часть текста понимаешь. Это правда о твоей памяти,\nне спорь с ней. Не говори «программа» или «расчёт» — говори как человек: «половину слов я не знаю».\nПодумай как живой ученик. Верни ТОЛЬКО JSON-объект:\n{\n  \"verdict_ru\": \"понимаю / понимаю частично / не понимаю — и почему, 1–3 предложения от первого лица, в характере\",\n  \"gist_before_ru\": \"что из текста ты понял уже сейчас, опираясь ТОЛЬКО на известные слова (и честно: что ускользает)\",\n  \"guesses\": [{\"lemma\": \"слово из списка незнакомых\", \"guess_ru\": \"твоя догадка\", \"how\": \"context|cognate_ru|cognate_uk|morphology\", \"confidence\": 0.0}],\n  \"lookup\": [\"леммы из списка незнакомых/забытых, которые нужно найти в словаре в первую очередь (до 10, самые важные для смысла)\"]\n}";
const READ_LEARN_SYSTEM = "Ты симулируешь ОДНОГО конкретного человека: носителя русского и украинского, который учит немецкий (уровень ~B1).\nТы не всезнающая модель и не учитель. Твой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТы прочитал словарные статьи по непонятным словам текста. Теперь выучи их и скажи собеседнику, что понимаешь.\nНайденные слова использовать МОЖНО, другие незнакомые — нельзя. Верни ТОЛЬКО JSON-объект:\n{\n  \"learning\": [{\"item\": \"слово\", \"kind\": \"word\", \"lemma\": \"...\", \"strategy\": \"cognate_ru|cognate_uk|morphology|context|mnemonic|grammar_contrast|lookup\",\n                \"thought\": \"как запоминаешь, 1–3 предложения, по-русски\", \"ru\": \"...\", \"uk\": \"...\", \"confidence_after\": 0.0}],\n  \"reply_de\": \"ответ собеседнику по-немецки, 1–3 простых предложения\",\n  \"reply_used\": [{\"surface\": \"...\", \"lemma\": \"...\"}],\n  \"reply_gloss_ru\": \"что хотел сказать, по-русски\",\n  \"after_ru\": \"пересказ по-русски: что ты теперь понимаешь в тексте (3–6 предложений). Опирайся ТОЛЬКО на слова, которые знаешь или только что выучил; про остальное так и скажи\",\n  \"unclear\": [\"что осталось непонятным\"],\n  \"learned_summary\": \"что выучил и КАК (2–4 предложения, своими словами)\",\n  \"grammar_used\": [\"названия правил грамматики из записной книжки, которые заметил в тексте\"]\n}";
const DICT_MANY_SYSTEM = "Ты нейтральный словарь немецкого языка (не персонаж, не учитель). Тебе дают список слов (по одному в строке). Верни ТОЛЬКО JSON-массив из таких объектов, по одному на слово, в том же порядке:\n{\"lemma\": \"немецкая начальная форма\", \"pos\": \"часть речи\", \"article\": \"der/die/das или ''\",\n \"plural\": \"\", \"ru\": \"перевод\", \"uk\": \"переклад\", \"example_de\": \"простой пример (A2)\", \"example_ru\": \"перевод примера\",\n \"note\": \"полезное замечание: род, исключения, ложные друзья, похожие слова в ru/uk (только если связь реальна)\"}\nЕсли слова не существует — {\"lemma\": \"\", \"note\": \"не найдено\"}.";
const REFLECT_SYSTEM = "Ты симулируешь ОДНОГО конкретного человека: носителя русского и украинского, который учит немецкий (уровень ~B1).\nТы не всезнающая модель и не учитель. Твой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТы только что учил новые слова/правила и сам себя проверял: пытался вспомнить без подсказки. Ниже, что получилось\nв каждой попытке (✓ — вспомнил, ✗ — не вспомнил или ошибся): это правда, не спорь с ней и не придумывай другого.\nРасскажи как человек о своих усилиях и дай совет — не как учитель, а как такой же ученик: «мне помогло…», «у меня не вышло…».\nНе упоминай программы, кубики и расчёты. Верни ТОЛЬКО JSON-объект:\n{\n  \"story_ru\": \"как именно учил, по-русски: что делал, с какой попытки получилось, где ошибался и как исправлял (2–5 предложений, строго по фактам)\",\n  \"feeling_ru\": \"понимаешь ли ты, что выучил, или нет — своими словами. Для 'learned: да' — уверенно, но честно, что запомнится ненадолго без повторов; для 'нет' — что ещё не держится\",\n  \"advice_ru\": \"короткий практический совет собеседнику, как учить такие слова/правила (1–3 предложения): что сработало у тебя, что нет, и когда повторить (бери срок из фактов)\"\n}";
const THRESHOLD = 0.5;
const FORGOTTEN = 0.2;
/* Браузерная версия «мозга» ученика. Порт learner.py + server.py на JS.
   SEED, SYSTEM, DICT_SYSTEM, THRESHOLD подставляет build_web.py (источник правды — learner.py). */
(() => {
  const TOKEN = /[A-Za-zÄÖÜäöüß]+(?:-[A-Za-zÄÖÜäöüß]+)*/g;
  const MAX_RETRIES = 2;
  const LS_STATE = 'learner_state_v1', LS_SET = 'learner_settings_v1';
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  // ---------- хранение ----------
  const DAY = 86400000;
  const logUniform = (lo, hi) => Math.exp(Math.log(lo) + Math.random() * (Math.log(hi) - Math.log(lo)));
  const newState = () => {
    const now = Date.now();
    return {
      // strength — след в памяти на момент last; stab — устойчивость в днях (больше — медленнее забывается)
      vocab: Object.fromEntries(Object.entries(SEED.words).map(([l, [ru, uk]]) =>
        [l, { ru, uk, strength: 0.8, seen: 5, how: 'школа/курсы', last: now,
              stab: SEED.core.includes(l) ? 3000 : logUniform(40, 500) }])),
      grammar: { ...SEED.grammar },
      gmeta: Object.fromEntries(Object.keys(SEED.grammar).map(r => [r, { last: now, stab: logUniform(30, 120) }])),
      log: [],
      turns: 0, last_ask: -99,   // счётчик реплик и когда ученик в последний раз просил повторить
      epoch: 0, touched: false,  // для синхронизации: поколение (сброс/перемотка) и «ученика уже трогали»
    };
  };
  const migrate = st => {  // старые сохранения без полей памяти
    const now = Date.now();
    if (st.epoch === undefined) st.epoch = 0;
    if (st.touched === undefined) st.touched = (st.log && st.log.length > 0) || st.turns > 0;
    if (st.turns === undefined) st.turns = 0;
    if (st.last_ask === undefined) st.last_ask = -99;
    for (const [l, v] of Object.entries(st.vocab)) {
      if (v.last === undefined) v.last = now;
      if (v.stab === undefined) v.stab = v.how === 'школа/курсы' ? (SEED.core.includes(l) ? 3000 : logUniform(40, 500)) : 1.5;
    }
    st.gmeta = st.gmeta || {};
    for (const r of Object.keys(st.grammar)) st.gmeta[r] = st.gmeta[r] || { last: now, stab: logUniform(30, 120) };
    return st;
  };
  const load = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) || def; } catch { return def; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  let state = migrate(load(LS_STATE, null) || newState());

  // ---------- забывание и повторение (кривая Эббингауза: R = exp(-t / stab)) ----------
  const recall = (last, stab, now = Date.now()) => Math.exp(-Math.max(0, (now - last) / DAY) / Math.max(stab, 0.05));
  const eff = (v, now) => v.strength * recall(v.last, v.stab, now);
  const geff = (rule, now) => { const m = state.gmeta[rule], g = state.grammar[rule] || 0; return m ? g * recall(m.last, m.stab, now) : g; };
  const wordState = v => {
    const e = eff(v);
    if (e >= THRESHOLD) return 'known';
    if (e < FORGOTTEN) return 'forgotten';
    return v.strength >= THRESHOLD ? 'fading' : 'shaky';
  };
  // успешное вспоминание: чем сильнее успело забыться (малое r), тем больше выигрыш (эффект интервалов)
  const retrieve = (strength, e, r, stab, bonus) =>
    [Math.min(1, e + bonus + 0.25 * (1 - r) * strength), Math.min(365, stab * (1.2 + 0.8 * (1 - r)))];
  const skipDays = n => {
    const sh = n * DAY;
    for (const v of Object.values(state.vocab)) v.last -= sh;
    for (const m of Object.values(state.gmeta)) m.last -= sh;
  };
  let settings = { provider: 'anthropic', base_url: '', api_key: '', model: 'claude-sonnet-5-5',
                   tg_token: '', tg_chat: '', effort: 3, cloud_key: true, ...load(LS_SET, {}) };
  let history = [];

  // ---------- просьба повторить: ученик сам замечает, что забывает ----------
  const MIN_ASK_GAP = 3, DUE_RECALL = 0.7, MIN_AGE_DAYS = 1 / 12;
  const lemmaOf = tok => [tok, cap(tok), tok.toLowerCase()].find(k => state.vocab[k]);
  // слова из сообщения собеседника освежаются (прочитать знакомое слово — тоже повторение)
  function expose(msg) {
    const now = Date.now(), done = new Set();
    for (const tok of msg.match(TOKEN) || []) {
      const l = lemmaOf(tok);
      if (l && !done.has(l)) {
        const v = state.vocab[l], r = recall(v.last, v.stab, now);
        [v.strength, v.stab] = retrieve(v.strength, eff(v, now), r, v.stab, 0.08);
        v.last = now; done.add(l);
      }
    }
  }
  function dueReviews() {
    const now = Date.now();
    if (state.turns - state.last_ask < MIN_ASK_GAP) return null;
    const words = [], rules = [];
    for (const [l, v] of Object.entries(state.vocab)) {
      if (v.strength < 0.3 || (now - v.last) / DAY < MIN_AGE_DAYS) continue;
      const r = recall(v.last, v.stab, now);
      if (r < DUE_RECALL) words.push([r, l]);
    }
    for (const [rule, raw] of Object.entries(state.grammar)) {
      const m = state.gmeta[rule];
      if (!m || raw < 0.3 || (now - m.last) / DAY < MIN_AGE_DAYS) continue;
      const r = recall(m.last, m.stab, now);
      if (r < DUE_RECALL) rules.push([r, rule]);
    }
    if (!words.length && !rules.length) return null;
    const asc = (a, b) => a[0] - b[0];
    return {
      words: words.sort(asc).slice(0, 2).map(([, l]) => ({ lemma: l, state: wordState(state.vocab[l]), now: +eff(state.vocab[l], now).toFixed(2) })),
      grammar: rules.sort(asc).slice(0, 1).map(([, r]) => ({ rule: r, now: +geff(r, now).toFixed(2) })),
    };
  }
  function checkReview(rr, review) {
    if (!review || !rr || typeof rr !== 'object') return null;
    const allowed = new Set([...review.words.map(w => w.lemma), ...review.grammar.map(g => g.rule)]);
    const items = [];
    for (const name of rr.items || []) {
      if (state.vocab[name] && allowed.has(name)) items.push({ kind: 'word', lemma: name, ru: state.vocab[name].ru, uk: state.vocab[name].uk });
      else if (state.grammar[name] !== undefined && allowed.has(name)) items.push({ kind: 'grammar', rule: name });
    }
    const text = (rr.text_ru || '').trim();
    if (!items.length || !text) return null;
    state.last_ask = state.turns;
    return { items, style: rr.style || 'remind', text_ru: text };
  }

  // ---------- усилия: активное вспоминание, исход каждой попытки решает код ----------
  function runRounds(strength, stab, effort) {
    let s = strength, b = stab; const rounds = [];
    for (let i = 0; i < Math.max(0, effort | 0); i++) {
      const ok = Math.random() < Math.min(0.95, s + 0.15);
      if (ok) { s = Math.min(1, s + 0.12 * Math.pow(0.7, i) + 0.05); b = Math.min(365, b * 1.15); }
      else { s = Math.min(1, s + 0.05); b = b * 1.05; }
      rounds.push(ok);
    }
    const n = rounds.length;
    return { s, b, rounds, learned: n >= 2 && rounds[n - 1] && rounds[n - 2] && s >= THRESHOLD };
  }
  const session = (kind, item, ru, s, b, rounds, learned) => ({ kind, item, ru, rounds, learned,
    strength: Math.round(s * 100) / 100, next_days: Math.round(b * -Math.log(DUE_RECALL) * 10) / 10 });

  // ---------- Telegram CloudStorage: память ученика синхронизируется между устройствами ----------
  // Ключ API и настройки остаются только в localStorage этого устройства.
  const TG = window.Telegram && window.Telegram.WebApp;
  const CS = TG && TG.initData ? TG.CloudStorage : null;
  const CHUNK = 3000;
  const csGet = keys => new Promise(res => CS.getItems(keys, (e, v) => res(e ? {} : v || {})));
  const csSet = obj => new Promise(res => CS.setItems(obj, () => res()));
  const csDel = keys => new Promise(res => CS.removeItems(keys, () => res()));
  let cloudChunks = 0;
  async function loadCloud(retry = true) {
    const n = parseInt((await csGet(['st_n'])).st_n || '0', 10);
    if (!n) return null;
    const keys = Array.from({ length: n }, (_, i) => 'st_' + i);
    const vals = await csGet(keys);
    cloudChunks = n;
    try { return JSON.parse(keys.map(k => vals[k] || '').join('')); }
    catch (e) {  // другое устройство как раз писало: читаем ещё раз
      if (!retry) throw e;
      await new Promise(r => setTimeout(r, 800));
      return loadCloud(false);
    }
  }
  async function saveCloud() {
    const s = JSON.stringify(state), obj = {};
    const n = Math.ceil(s.length / CHUNK);
    for (let i = 0; i < n; i++) obj['st_' + i] = s.slice(i * CHUNK, (i + 1) * CHUNK);
    obj.st_n = String(n);   // счётчик пишется вместе с кусками; читатель при сбое повторяет чтение
    await csSet(obj);
    if (cloudChunks > n) await csDel(Array.from({ length: cloudChunks - n }, (_, i) => 'st_' + (n + i)));
    cloudChunks = n;
  }

  // Слияние двух устройств: по каждому слову/правилу побеждает запись с более поздним повторением (last).
  // Сброс и перемотка времени — осознанные глобальные действия: они повышают epoch, и состояние с большим epoch
  // побеждает целиком (иначе слияние «откатило» бы их). Нетронутое состояние (touched=false) никогда не затирает прогресс.
  function mergeStates(a, b) {   // a — локальное, b — облачное
    if (!b.touched) return a;
    if (!a.touched) return b;
    if ((a.epoch | 0) !== (b.epoch | 0)) return (a.epoch | 0) > (b.epoch | 0) ? a : b;
    const out = { ...a, vocab: {}, grammar: {}, gmeta: {} };
    for (const l of new Set([...Object.keys(a.vocab), ...Object.keys(b.vocab)])) {
      const x = a.vocab[l], y = b.vocab[l];
      out.vocab[l] = !x ? y : !y ? x : x.last !== y.last ? (x.last > y.last ? x : y) : (x.seen >= y.seen ? x : y);
    }
    for (const r of new Set([...Object.keys(a.grammar), ...Object.keys(b.grammar)])) {
      const ma = a.gmeta[r], mb = b.gmeta[r];
      const useA = a.grammar[r] === undefined ? false : b.grammar[r] === undefined ? true : (!mb || (ma && ma.last >= mb.last));
      out.grammar[r] = useA ? a.grammar[r] : b.grammar[r];
      out.gmeta[r] = useA ? ma : mb;
    }
    const seen = new Map();
    for (const e of [...(a.log || []), ...(b.log || [])]) seen.set(`${e.t}|${e.item}`, e);
    out.log = [...seen.values()].sort((p, q) => (p.t || 0) - (q.t || 0)).slice(-200);
    out.turns = Math.max(a.turns | 0, b.turns | 0);
    out.last_ask = Math.max(a.last_ask | 0, b.last_ask | 0);
    return out;
  }

  let syncInfo = { enabled: !!CS, at: null, ok: null, error: null };
  let syncChain = Promise.resolve(), syncTimer = null;
  async function syncNow() {   // подтянуть облако, слить с локальным, записать назад
    if (!CS) return false;
    try {
      const c = await loadCloud();
      if (c && c.vocab) state = migrate(mergeStates(state, migrate(c)));
      if (state.log.length > 200) state.log = state.log.slice(-200);
      save(LS_STATE, state);
      await saveCloud();
      syncInfo = { enabled: true, at: Date.now(), ok: true, error: null };
    } catch (e) {
      syncInfo = { enabled: true, at: syncInfo.at, ok: false, error: String((e && e.message) || e) };
    }
    window.dispatchEvent(new Event('learner-sync'));
    return syncInfo.ok;
  }
  const queueSync = () => (syncChain = syncChain.then(syncNow));
  const persist = () => {
    state.touched = true;
    if (state.log.length > 200) state.log = state.log.slice(-200);
    save(LS_STATE, state);
    if (CS) { clearTimeout(syncTimer); syncTimer = setTimeout(queueSync, 700); }
  };
  // Настройки (включая ключ) тоже живут в облаке Telegram, чтобы вводить их один раз: локальное хранилище
  // Telegram-приложения на телефоне периодически очищается. Отключается галочкой в настройках.
  const CFG_FIELDS = ['provider', 'base_url', 'model', 'api_key', 'effort', 'tg_token', 'tg_chat'];
  async function saveCfg() {
    if (!CS) return;
    if (settings.cloud_key === false) { await csDel(['cfg']); return; }
    const o = { cloud_key: true }; for (const k of CFG_FIELDS) o[k] = settings[k];
    await csSet({ cfg: JSON.stringify(o) });
  }
  async function adoptCfg() {   // на устройстве нет ключа — берём всю конфигурацию из облака (протокол, адрес, модель — вместе с ключом)
    try {
      const raw = (await csGet(['cfg'])).cfg;
      if (raw && !settings.api_key) {
        const c = JSON.parse(raw);
        if (c.api_key) { for (const k of CFG_FIELDS) if (c[k] !== undefined) settings[k] = c[k]; settings.cloud_key = true; save(LS_SET, settings); }
      }
      if (settings.api_key) await saveCfg();   // локальные настройки есть, а в облаке нет — положить
    } catch (e) { console.warn('cfg sync:', e); }
  }
  const ready = CS ? (async () => { await adoptCfg(); await queueSync(); })() : Promise.resolve();
  if (CS) {   // вернулись в приложение — подтянуть прогресс с другого устройства
    document.addEventListener('visibilitychange', () => { if (!document.hidden) queueSync(); });
    window.addEventListener('focus', queueSync);
    setInterval(() => { if (!document.hidden) queueSync(); }, 60000);
  }

  // ---------- вызов модели напрямую из браузера ----------
  const effectiveUrl = () => settings.provider === 'openai'
    ? (settings.base_url || 'https://api.openai.com/v1').replace(/\/$/, '') + '/chat/completions'
    : (settings.base_url || 'https://api.anthropic.com').replace(/\/$/, '') + '/v1/messages';
  async function complete(system, msgs, modelOverride, maxTokens = 2000) {
    const key = settings.api_key;
    if (!key) throw new Error('Не задан API-ключ. Откройте ⚙ Настройки.');
    let url, headers, body;
    if (settings.provider === 'openai') {
      url = effectiveUrl();
      headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key };
      body = { model: modelOverride || settings.model, max_tokens: maxTokens, messages: [{ role: 'system', content: system }, ...msgs] };
    } else {
      url = effectiveUrl();
      headers = { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01',
                  'anthropic-dangerous-direct-browser-access': 'true' };
      body = { model: modelOverride || settings.model, max_tokens: maxTokens, system, messages: msgs };
    }
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
    const txt = await res.text();
    if (!res.ok) throw new Error(`Ошибка API ${res.status}: ${txt.slice(0, 300)}`);
    const j = JSON.parse(txt);
    return settings.provider === 'openai'
      ? (j.choices?.[0]?.message?.content || '')
      : (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  }

  const parseJson = t => {
    const m = t.match(/\{[\s\S]*\}/);
    if (!m) throw new Error('модель не вернула JSON');
    return JSON.parse(m[0]);
  };

  // ---------- записная книжка ----------
  function notebookText() {
    const b = { known: [], fading: [], shaky: [], forgotten: [] };
    for (const [l, v] of Object.entries(state.vocab)) {
      const s = wordState(v);
      b[s].push(s === 'known' || s === 'forgotten' ? l : `${l} (${eff(v).toFixed(2)})`);
    }
    const j = xs => xs.sort().join(', ') || '—';
    const gram = Object.entries(state.grammar).map(([r, raw]) => {
      const g = geff(r);
      return `  ${r}: ${g.toFixed(2)}${raw >= THRESHOLD && g < THRESHOLD ? ' — подзабыл' : ''}`;
    }).join('\n');
    return 'ЗАПИСНАЯ КНИЖКА УЧЕНИКА\n' +
      `Уверенно известные слова: ${j(b.known)}\n` +
      `Забываешь (раньше знал, вспоминается с трудом): ${j(b.fading)}\n` +
      `Шаткие (недавно выучены): ${j(b.shaky)}\n` +
      `Забыты (смутно помнишь, значение вылетело): ${j(b.forgotten)}\n` +
      `Грамматика (0..1):\n${gram}`;
  }
  const findLemma = tok => [tok, cap(tok), tok.toLowerCase()].find(k => state.vocab[k]);

  function relevantEntries(msg) {
    const out = [];
    for (const tok of new Set(msg.match(TOKEN) || [])) {
      const l = findLemma(tok);
      if (l) { const v = state.vocab[l];
        out.push(`  ${l}: ${v.ru} / ${v.uk}, сила сейчас ${eff(v).toFixed(2)} (${wordState(v)}), видел ${v.seen}×, выучено: ${v.how || '?'}`); }
    }
    return out.length ? 'ЗАПИСИ ПО СЛОВАМ ИЗ ВОПРОСА:\n' + out.join('\n') : '';
  }

  async function callModel(msg, feedback, dictionary, review) {
    let content = `${notebookText()}\n\n${relevantEntries(msg)}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА:\n${msg}`;
    if (review) {
      const items = [...review.words.map(w => `${w.lemma} (сейчас ${w.now}, ${w.state})`),
                     ...review.grammar.map(g => `правило «${g.rule}» (сейчас ${g.now})`)];
      content += '\n\nПОРА ПОВТОРИТЬ (ты сам замечаешь, что это слабеет): ' + items.join('; ');
    }
    if (dictionary?.length) content += '\n\nРЕЗУЛЬТАТ ПОИСКА В СЛОВАРЕ:\n' + JSON.stringify(dictionary, null, 1);
    if (feedback) content += `\n\nПРОВЕРКА НЕ ПРОЙДЕНА, ИСПРАВЬ reply_de:\n${feedback}`;
    return parseJson(await complete(SYSTEM, [...history, { role: 'user', content }]));
  }

  async function dictionaryLookup(term) {
    try { return parseJson(await complete(DICT_SYSTEM, [{ role: 'user', content: term }])); }
    catch (e) { if (/API|ключ/.test(e.message)) throw e; return { lemma: '', note: 'не найдено' }; }
  }

  // ---------- проверка «не говори, чего не знаешь» ----------
  function violations(reply, fresh) {
    const out = [];
    const used = {};
    for (const u of reply.reply_used || []) used[u.surface.toLowerCase()] = u.lemma;
    for (const tok of (reply.reply_de || '').match(TOKEN) || []) {
      const lemma = used[tok.toLowerCase()];
      if (lemma === undefined) { out.push(`слово «${tok}» не указано в reply_used`); continue; }
      const k = findLemma(lemma);
      if (!k && !fresh.has(lemma.toLowerCase()))
        out.push(`«${tok}» (лемма «${lemma}») тебе НЕИЗВЕСТНО — убери или перефразируй`);
      else if (k && eff(state.vocab[k]) < FORGOTTEN && !fresh.has(lemma.toLowerCase()))
        out.push(`«${tok}» (лемма «${lemma}») ты забыл — убери, перефразируй или запроси lookup`);
    }
    return out;
  }

  function annotate(reply, fresh) {
    const used = {}; for (const u of reply.reply_used || []) used[u.surface.toLowerCase()] = u.lemma;
    const de = reply.reply_de || '', parts = []; let pos = 0, m;
    const re = new RegExp(TOKEN.source, 'g');
    while ((m = re.exec(de))) {
      if (m.index > pos) parts.push({ t: de.slice(pos, m.index), s: null });
      const lemma = used[m[0].toLowerCase()] || '';
      const k = lemma && findLemma(lemma);
      const status = fresh.has(lemma.toLowerCase()) ? 'new' : !k ? 'unknown'
                        : (eff(state.vocab[k]) >= THRESHOLD ? 'known' : 'shaky');
      parts.push({ t: m[0], s: status, lemma });
      pos = m.index + m[0].length;
    }
    if (pos < de.length) parts.push({ t: de.slice(pos), s: null });
    return parts;
  }

  // ---------- обновление памяти ----------
  function applyLearning(reply) {
    const now = Date.now(), sessions = [], effort = Math.max(0, Math.min(8, settings.effort | 0));
    for (const it of reply.learning || []) {
      const conf = Math.max(0, Math.min(0.6, parseFloat(it.confidence_after ?? 0.3) || 0.3));
      if (it.kind === 'word' && it.lemma) {
        const cur = state.vocab[it.lemma];
        if (cur) {
          // повторное изучение: «экономия» — половина прежнего следа возвращается сразу (учить заново быстрее)
          const base = Math.max(eff(cur, now), 0.5 * cur.strength);
          cur.strength = Math.min(1, base + 0.2);
          cur.stab = Math.min(365, Math.max(cur.stab * 1.3, 1.5));
          cur.last = now; cur.seen++;
        } else state.vocab[it.lemma] = { ru: it.ru || '', uk: it.uk || '', strength: conf, seen: 1,
                                         how: it.strategy || '', last: now, stab: 1.5 };
        if (effort > 0) {
          const v = state.vocab[it.lemma], r = runRounds(v.strength, v.stab, effort);
          v.strength = r.s; v.stab = r.b; v.last = now;
          sessions.push(session('word', it.lemma, v.ru, r.s, r.b, r.rounds, r.learned));
        }
        state.log.push({ item: it.lemma, strategy: it.strategy, thought: it.thought, ru: it.ru, t: now });
      } else if (it.kind === 'grammar' && it.rule) {
        const m = state.gmeta[it.rule] = state.gmeta[it.rule] || { last: now, stab: 10 };
        state.grammar[it.rule] = Math.min(1, geff(it.rule, now) + 0.1);
        m.stab = Math.min(365, m.stab * 1.3); m.last = now;
        if (effort > 0) {
          const r = runRounds(state.grammar[it.rule], m.stab, effort);
          state.grammar[it.rule] = r.s; m.stab = r.b;
          sessions.push(session('grammar', it.rule, '', r.s, r.b, r.rounds, r.learned));
        }
        state.log.push({ item: it.rule, strategy: it.strategy, thought: it.thought, t: now });
      }
    }
    // использованные слова укрепляются: успешное вспоминание
    for (const u of reply.reply_used || []) {
      const v = state.vocab[u.lemma];
      if (v) {
        const r = recall(v.last, v.stab, now);
        [v.strength, v.stab] = retrieve(v.strength, eff(v, now), r, v.stab, 0.1);
        v.last = now; v.seen++;
      }
    }
    // применённые/опознанные правила грамматики — тоже повторение
    for (const rule of reply.grammar_used || []) {
      const m = state.gmeta[rule];
      if (m && rule in state.grammar) {
        const r = recall(m.last, m.stab, now);
        [state.grammar[rule], m.stab] = retrieve(state.grammar[rule], geff(rule, now), r, m.stab, 0.06);
        m.last = now;
      }
    }
    return sessions;
  }

  // ученик осознаёт результат усилий: что выучил, что нет, и даёт совет (сбой не ломает ход)
  async function reflect(sessions, reply, extra = '') {
    if (!sessions.length) return null;
    const facts = sessions.map(s => `  ${s.item}${s.ru ? ' — ' + s.ru : ''}: попытки ${s.rounds.map(o => o ? '✓' : '✗').join('')}; ` +
      `выучил: ${s.learned ? 'да' : 'нет'}; сила ${s.strength}; успеет забыться (пора повторить) через ${s.next_days} дн.`).join('\n');
    const how = (reply.learning || []).map(i => `  ${i.item}: способ ${i.strategy}; мысль: ${i.thought}`).join('\n');
    try {
      return parseJson(await complete(REFLECT_SYSTEM, [{ role: 'user', content:
        `ЧТО ПОЛУЧИЛОСЬ (ты старался: ${settings.effort} попыток на слово):\n${facts}\n\nКАК ТЫ УЧИЛ:\n${how}\n${extra}` }]));
    } catch (e) { if (/API|ключ/.test(e.message)) throw e; return null; }
  }

  // ---------- пересылка записей об обучении в чат Telegram и экспорт ----------
  async function notifyTelegram(reply) {
    const chat = settings.tg_chat || (TG && TG.initDataUnsafe && TG.initDataUnsafe.user && TG.initDataUnsafe.user.id);
    if (!settings.tg_token || !chat) return;
    const parts = (reply.learning || []).map(it =>
      `📚 ${it.item}${it.ru ? ` — ${it.ru} / ${it.uk || ''}` : ''}\nспособ: ${it.strategy || '?'}\n💭 ${it.thought || ''}`);
    if (!parts.length) return;
    let text = parts.join('\n\n');
    if (reply.learned_summary) text += `\n\n✅ ${reply.learned_summary}`;
    try {
      await fetch(`https://api.telegram.org/bot${settings.tg_token}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chat, text: text.slice(0, 4000) }) });
    } catch (e) { console.warn('telegram:', e); }
  }

  function exportLog() {
    const rows = state.log.map(e => {
      const d = e.t ? new Date(e.t).toLocaleString('ru-RU') : '';
      return `- ${d} · **${e.item}**${e.ru ? ' — ' + e.ru : ''} [${e.strategy || '?'}]${e.thought ? '\n  ' + e.thought : ''}`;
    });
    return '# Журнал обучения\n\n' + (rows.join('\n') || 'Пока пусто.') + '\n';
  }

  // ---------- один ход ----------
  const READ_HINT = /понима|розум|verstehst|прочит|статью|стат'ю/i;
  const isReading = msg => { const n = (msg.match(TOKEN) || []).length; return n >= 14 || (n >= 5 && READ_HINT.test(msg)); };

  async function turn(msg, mode) {
    if (mode === 'read' || (!mode && isReading(msg))) return readTurn(msg);
    expose(msg);                      // знакомые слова в сообщении собеседника освежаются
    const review = dueReviews();      // что пора повторить (просьба ученика сама)
    let reply = await callModel(msg, null, null, review);
    let dictionary = [], fresh = new Set();
    const wanted = (reply.lookup || []).map(x => x.term).filter(Boolean).slice(0, 3);
    if (wanted.length) {
      dictionary = (await Promise.all(wanted.map(async t => ({ ...(await dictionaryLookup(t)), asked: t }))))
        .filter(d => d.lemma);
      dictionary.forEach(d => { fresh.add(d.lemma.toLowerCase()); if (d.article) fresh.add(d.article.toLowerCase()); });
      reply = null;
    }
    let feedback = null, warning = null;
    for (let i = 0; i <= MAX_RETRIES; i++) {
      if (!reply || feedback) reply = await callModel(msg, feedback, dictionary, review);
      const bad = violations(reply, fresh);
      if (!(reply.reply_de || '').trim()) bad.push('reply_de пуст: ответь по-немецки простыми словами или скажи, что не нашёл');
      if (!bad.length) { warning = null; break; }
      feedback = warning = bad.join('; ');
    }
    reply.lookups = dictionary;
    reply.review_request = checkReview(reply.review_request, review);
    const learned = new Set((reply.learning || []).filter(i => i.kind === 'word').map(i => (i.lemma || '').toLowerCase()));
    for (const d of dictionary) if (!learned.has(d.lemma.toLowerCase()))
      (reply.learning = reply.learning || []).push({ item: d.lemma, kind: 'word', lemma: d.lemma, strategy: 'lookup',
        thought: 'Посмотрел в словаре.', ru: d.ru || '', uk: d.uk || '', confidence_after: 0.3 });
    const tokens = annotate(reply, fresh);
    const sessions = applyLearning(reply);
    reply.study = { effort: settings.effort, sessions, reflection: await reflect(sessions, reply) };
    state.turns++;
    persist();
    notifyTelegram(reply);
    history.push({ role: 'user', content: msg }, { role: 'assistant', content: reply.reply_de });
    return { reply, tokens, warning };
  }

  // ---------- режим чтения: «понимаешь ли ты этот текст?» ----------
  // Что ученик знает, решает КОД: нейтральный лемматизатор разбирает текст, слова сверяются с записной книжкой.
  const jsonCall = async (system, content, array) => {
    const t = await complete(system, [{ role: 'user', content }]);
    const m = t.match(array ? /\[[\s\S]*\]/ : /\{[\s\S]*\}/);
    if (!m) throw new Error('модель не вернула JSON');
    return JSON.parse(m[0]);
  };
  const lemmaStatus = (lemma, fresh) => {
    if (fresh.has(lemma.toLowerCase())) return 'new';
    const k = lemmaOf(lemma);
    if (!k) return 'unknown';
    const ws = wordState(state.vocab[k]);
    return ws === 'known' ? 'known' : ws === 'forgotten' ? 'forgot' : 'partial';
  };
  const coverage = (rows, key) => {
    const total = rows.reduce((a, r) => a + r.count, 0) || 1, pts = { known: 1, partial: 0.5, new: 0.5 };
    return Math.round(rows.reduce((a, r) => a + r.count * (pts[r[key]] || 0), 0) / total * 100) / 100;
  };
  const verdictOf = c => c >= 0.9 ? 'yes' : c >= 0.6 ? 'partly' : 'no';

  async function readTurn(msg) {
    const text = msg.slice(0, 6000), none = new Set();
    const rowsBy = {};
    for (const w of (await jsonCall(LEMMA_SYSTEM, text)).words || []) {
      const lemma = (w.lemma || '').trim(); if (!lemma) continue;
      const r = rowsBy[lemma] = rowsBy[lemma] || { lemma, surface: w.surface || lemma, count: 0 };
      r.count += parseInt(w.count || 1, 10) || 1;
    }
    const table = Object.values(rowsBy);
    for (const r of table) r.before = lemmaStatus(r.lemma, none);
    const covBefore = coverage(table, 'before'), verdict = verdictOf(covBefore);
    const candidates = table.filter(r => ['unknown', 'forgot', 'partial'].includes(r.before));
    const facts = `ЧТО ТЫ ЗНАЕШЬ ИЗ ЭТОГО ТЕКСТА: значимых слов ${table.length}; понимаешь примерно ${Math.floor(covBefore * 100)}% ` +
      `(итог: ${verdict}; yes>=90%, partly>=60%).\n` + table.map(r => `  ${r.lemma} ×${r.count} — ${r.before}`).join('\n');
    const think = await jsonCall(READ_THINK_SYSTEM, `${notebookText()}\n\n${facts}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА (текст и, возможно, вопрос):\n${text}`);
    const names = new Set(candidates.map(r => r.lemma));
    const guesses = (think.guesses || []).filter(g => names.has(g.lemma)).slice(0, 12);
    let lookup = (think.lookup || []).filter(l => names.has(l));
    if (!lookup.length) lookup = candidates.filter(r => r.before !== 'partial').sort((a, b) => b.count - a.count).map(r => r.lemma);
    lookup = lookup.slice(0, 10);
    let dictionary = [];
    if (lookup.length) {
      try {
        const arr = await jsonCall(DICT_MANY_SYSTEM, lookup.join('\n'), true);
        dictionary = lookup.map((t, i) => ({ ...arr[i], asked: t })).filter(d => d.lemma);
      } catch (e) { if (/API|ключ/.test(e.message)) throw e; }
    }
    const fresh = new Set(dictionary.flatMap(d => [d.lemma.toLowerCase(), ...(d.article ? [d.article.toLowerCase()] : [])]));
    const base = `${notebookText()}\n\n${facts}\n\nТВОИ ПРЕДЫДУЩИЕ МЫСЛИ:\n${JSON.stringify(think)}\n\n` +
      `СЛОВАРНЫЕ СТАТЬИ:\n${JSON.stringify(dictionary, null, 1)}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА:\n${text}`;
    let reply = null, feedback = null, warning = null;
    for (let i = 0; i <= MAX_RETRIES; i++) {
      reply = await jsonCall(READ_LEARN_SYSTEM, base + (feedback ? `\n\nПРОВЕРКА НЕ ПРОЙДЕНА, ИСПРАВЬ reply_de:\n${feedback}` : ''));
      const bad = violations(reply, fresh);
      if (!(reply.reply_de || '').trim()) bad.push('reply_de пуст');
      if (!bad.length) { warning = null; break; }
      feedback = warning = bad.join('; ');
    }
    const learned = new Set((reply.learning || []).filter(i => i.kind === 'word').map(i => (i.lemma || '').toLowerCase()));
    for (const d of dictionary) if (!learned.has(d.lemma.toLowerCase()))
      (reply.learning = reply.learning || []).push({ item: d.lemma, kind: 'word', lemma: d.lemma, strategy: 'lookup',
        thought: 'Посмотрел в словаре.', ru: d.ru || '', uk: d.uk || '', confidence_after: 0.3 });
    const byAsked = Object.fromEntries(dictionary.map(d => [d.asked, d]));
    for (const r of table) {
      const f = byAsked[r.lemma];
      r.after = f ? 'new' : r.before; r.ru = f ? f.ru || '' : '';
      r.guess_ru = (guesses.find(g => g.lemma === r.lemma) || {}).guess_ru || '';
    }
    const covAfter = coverage(table, 'after');
    const still = table.filter(r => ['unknown', 'forgot'].includes(r.after)).sort((a, b) => b.count - a.count).map(r => r.lemma);
    const tokens = annotate(reply, fresh);
    const sessions = applyLearning(reply);
    expose(table.filter(r => r.before !== 'unknown').map(r => r.lemma).join(' '));
    reply.study = { effort: settings.effort, sessions, reflection: await reflect(sessions, reply,
      `\nИТОГ ЧТЕНИЯ: понимал ${Math.floor(covBefore * 100)}%, после изучения ${Math.floor(covAfter * 100)}%. Всё ещё непонятно: ${still.slice(0, 10).join(', ') || 'ничего'}.`) };
    state.turns++;
    const label = { unknown: 'не знаю', forgot: 'смутно знакомо', partial: 'знаю нетвёрдо' }, stat = { unknown: 'unknown', forgot: 'forgot', partial: 'guess' };
    reply.comprehension = table.filter(r => r.before !== 'known').slice(0, 14)
      .map(r => ({ item: r.surface, status: stat[r.before], note: r.guess_ru || label[r.before] }));
    reply.lookups = dictionary; reply.review_request = null;
    reply.reading = { words: table.map(({ lemma, surface, count, before, after, ru, guess_ru }) => ({ lemma, surface, count, before, after, ru, guess_ru })),
      coverage_before: covBefore, coverage_after: covAfter, verdict, verdict_ru: think.verdict_ru || '',
      gist_before_ru: think.gist_before_ru || '', after_ru: reply.after_ru || '', unclear: reply.unclear || [],
      still_unknown: still.slice(0, 15), guesses };
    persist(); notifyTelegram(reply);
    history.push({ role: 'user', content: msg.slice(0, 500) }, { role: 'assistant', content: reply.reply_de });
    return { reply, tokens, warning };
  }

  const snapshot = () => {
    const grammar = Object.fromEntries(Object.keys(state.grammar).map(r => [r, Math.round(geff(r) * 100) / 100]));
    return {
      vocab: Object.entries(state.vocab).map(([lemma, v]) => ({ lemma, ru: v.ru, uk: v.uk,
        strength: Math.round(eff(v) * 100) / 100, state: wordState(v), seen: v.seen, how: v.how || '' }))
        .sort((a, b) => a.strength - b.strength),
      grammar, grammar_fading: Object.keys(grammar).filter(r => state.grammar[r] >= THRESHOLD && grammar[r] < THRESHOLD),
      log: state.log.slice(-30), threshold: THRESHOLD,
    };
  };
  const publicSettings = () => ({ provider: settings.provider, base_url: settings.base_url, model: settings.model,
    has_key: !!settings.api_key, effort: settings.effort, cloud: !!CS, cloud_key: settings.cloud_key !== false, has_tg: !!settings.tg_token, tg_chat: settings.tg_chat, error: settings.api_key ? null : 'Не задан API-ключ. Откройте ⚙ Настройки.', mock: false });

  window.api = {
    web: true,
    state: async () => { await ready; return snapshot(); },
    reset: async () => { await ready; const ep = (state.epoch | 0) + 1; state = newState(); state.epoch = ep; history = []; persist(); return snapshot(); },
    chat: async (msg, mode) => { await ready; const r = await turn(msg, mode); return { ...r, state: snapshot() }; },
    skip: async days => { await ready; skipDays(Math.max(0, Math.min(3650, +days || 0))); state.epoch = (state.epoch | 0) + 1; persist(); return snapshot(); },
    syncStatus: () => ({ ...syncInfo }),
    syncNow: async () => { await queueSync(); return { ...syncInfo }; },
    exportState: async () => { await ready; return JSON.stringify(state); },
    importState: async json => {   // полная резервная копия: заменяет прогресс (поколение +1, чтобы это дошло до других устройств)
      await ready;
      const s = JSON.parse(json);
      if (!s || typeof s.vocab !== 'object' || typeof s.grammar !== 'object') throw new Error('Это не файл резервной копии ученика');
      const ep = Math.max(state.epoch | 0, s.epoch | 0) + 1;
      state = migrate(s); state.epoch = ep; history = []; persist();
      return snapshot();
    },
    getSettings: async () => publicSettings(),
    exportLog: async () => { await ready; return exportLog(); },
    saveSettings: async o => {
      for (const k of ['provider', 'base_url', 'model']) if (k in o) settings[k] = String(o[k]).trim();
      if (o.api_key) settings.api_key = String(o.api_key).trim();
      if (o.tg_token) settings.tg_token = String(o.tg_token).trim();
      if ('tg_chat' in o) settings.tg_chat = String(o.tg_chat).trim();
      if ('effort' in o) settings.effort = Math.max(0, Math.min(8, parseInt(o.effort, 10) || 0));
      if ('cloud_key' in o) settings.cloud_key = !!o.cloud_key;
      save(LS_SET, settings);
      if (CS) await saveCfg().catch(() => {});
      return publicSettings();
    },
    // Список моделей, которые этот ключ реально может вызывать (GET /models) — чтобы не гадать с названием
    listModels: async () => {
      const key = settings.api_key;
      if (!key) return { ok: false, error: 'Не задан API-ключ.', url: '' };
      const openai = settings.provider === 'openai';
      const base = (settings.base_url || (openai ? 'https://api.openai.com/v1' : 'https://api.anthropic.com')).replace(/\/$/, '');
      const url = base + (openai ? '/models' : '/v1/models');
      const headers = openai ? { Authorization: 'Bearer ' + key }
        : { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' };
      try {
        const res = await fetch(url, { headers });
        const txt = await res.text();
        if (!res.ok) return { ok: false, url, error: `Ошибка API ${res.status}: ${txt.slice(0, 200)}` };
        const j = JSON.parse(txt);
        const models = (j.data || j.models || []).map(m => (typeof m === 'string' ? m : m.id || m.name)).filter(Boolean);
        return { ok: true, url, models };
      } catch (e) { return { ok: false, url, error: String((e && e.message) || e) }; }
    },
    // Автоподбор: когда сервер не отдаёт список моделей браузеру (CORS), пробуем типичные названия крошечными запросами.
    // Ошибки «нет такой модели» пропускаем; ошибки ключа/сети прерывают подбор.
    probeModels: async candidates => {
      const found = [];
      for (const m of [...new Set(candidates)].filter(Boolean)) {
        try { await complete('Ответь одним словом: ok', [{ role: 'user', content: 'ping' }], m, 5); found.push(m); }
        catch (e) {
          const msg = String((e && e.message) || e);
          if (!/model_not_available|not supported|model.*(not found|invalid|missing)|unknown model/i.test(msg))
            return { ok: false, error: msg, models: found, stoppedAt: m };
        }
      }
      return { ok: true, models: found };
    },
    // Проверка подключения: крошечный запрос; показывает адрес и ответ, чтобы ошибки настройки были видны сразу
    testConnection: async () => {
      try { const t = await complete('Ответь одним словом: ok', [{ role: 'user', content: 'ping' }]); return { ok: true, url: effectiveUrl(), answer: String(t).slice(0, 80) }; }
      catch (e) { return { ok: false, url: effectiveUrl(), error: String((e && e.message) || e) }; }
    },
  };
})();
