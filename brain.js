const SEED = {"words": {"ich": ["я", "я"], "du": ["ты", "ти"], "er": ["он", "він"], "sie": ["она/они", "вона/вони"], "wir": ["мы", "ми"], "ihr": ["вы", "ви"], "sein": ["быть", "бути"], "haben": ["иметь", "мати"], "werden": ["становиться", "ставати"], "können": ["мочь", "могти"], "müssen": ["быть должным", "мусити"], "wollen": ["хотеть", "хотіти"], "gehen": ["идти", "йти"], "kommen": ["приходить", "приходити"], "machen": ["делать", "робити"], "sagen": ["говорить", "казати"], "sprechen": ["говорить", "говорити"], "lernen": ["учить", "вчити"], "wohnen": ["жить", "жити"], "arbeiten": ["работать", "працювати"], "essen": ["есть", "їсти"], "trinken": ["пить", "пити"], "sehen": ["видеть", "бачити"], "wissen": ["знать", "знати"], "verstehen": ["понимать", "розуміти"], "heißen": ["называться", "називатися"], "und": ["и", "і"], "oder": ["или", "або"], "aber": ["но", "але"], "nicht": ["не", "не"], "ja": ["да", "так"], "nein": ["нет", "ні"], "auch": ["тоже", "теж"], "sehr": ["очень", "дуже"], "weil": ["потому что", "тому що"], "dass": ["что (союз)", "що"], "wenn": ["если/когда", "якщо/коли"], "in": ["в", "в"], "mit": ["с", "з"], "für": ["для", "для"], "zu": ["к/в", "до"], "von": ["от/из", "від"], "der": ["артикль m", "артикль m"], "die": ["артикль f/pl", "артикль f/pl"], "das": ["артикль n", "артикль n"], "ein": ["неопр. артикль", "неозн. артикль"], "kein": ["никакой", "жодний"], "Mann": ["мужчина", "чоловік"], "Frau": ["женщина", "жінка"], "Kind": ["ребёнок", "дитина"], "Freund": ["друг", "друг"], "Haus": ["дом", "дім"], "Stadt": ["город", "місто"], "Land": ["страна", "країна"], "Wasser": ["вода", "вода"], "Brot": ["хлеб", "хліб"], "Tag": ["день", "день"], "Zeit": ["время", "час"], "Arbeit": ["работа", "робота"], "Schule": ["школа", "школа"], "Buch": ["книга", "книга"], "Name": ["имя", "ім'я"], "gut": ["хороший", "добрий"], "schlecht": ["плохой", "поганий"], "groß": ["большой", "великий"], "klein": ["маленький", "малий"], "neu": ["новый", "новий"], "alt": ["старый", "старий"], "heute": ["сегодня", "сьогодні"], "morgen": ["завтра", "завтра"], "gestern": ["вчера", "вчора"], "hier": ["здесь", "тут"], "dort": ["там", "там"], "wo": ["где", "де"], "was": ["что", "що"], "wer": ["кто", "хто"], "wie": ["как", "як"], "warum": ["почему", "чому"], "gern": ["охотно", "охоче"], "Deutsch": ["немецкий", "німецька"], "Russisch": ["русский", "російська"], "Ukrainisch": ["украинский", "українська"], "Sprache": ["язык", "мова"], "hallo": ["привет", "привіт"], "danke": ["спасибо", "дякую"], "bitte": ["пожалуйста", "будь ласка"], "Wort": ["слово", "слово"], "Frage": ["вопрос", "питання"], "Beispiel": ["пример", "приклад"], "lesen": ["читать", "читати"], "schreiben": ["писать", "писати"], "fragen": ["спрашивать", "питати"], "denken": ["думать", "думати"], "brauchen": ["нуждаться", "потребувати"], "finden": ["находить", "знаходити"], "geben": ["давать", "давати"], "nehmen": ["брать", "брати"], "bleiben": ["оставаться", "залишатися"]}, "grammar": {"Präsens regelmäßige Verben": 0.9, "Präsens unregelmäßige Verben (e→i, a→ä)": 0.7, "Nominativ/Akkusativ, Artikel": 0.7, "Dativ (Artikel, Präpositionen mit Dativ)": 0.4, "Genitiv": 0.1, "Perfekt mit haben/sein": 0.6, "Präteritum (kein sein/haben/Modalverben)": 0.2, "Hauptsatz: Verb auf Position 2, Inversion": 0.7, "Nebensatz: Verb am Ende (weil/dass/wenn)": 0.5, "Modalverben + Infinitiv am Ende": 0.7, "trennbare Verben": 0.4, "Adjektivdeklination": 0.3, "Konjunktiv II": 0.1, "Passiv": 0.0, "Relativsätze": 0.1}, "core": ["aber", "auch", "bitte", "danke", "das", "der", "die", "du", "ein", "er", "für", "haben", "hallo", "ich", "ihr", "in", "ja", "kein", "können", "mit", "müssen", "nein", "nicht", "oder", "sehr", "sein", "sie", "und", "von", "was", "wer", "werden", "wie", "wir", "wo", "wollen", "zu"]};
const SYSTEM = "Ты — Макс, парень, носитель русского и украинского. Собеседник — твой близкий друг. Вы вместе учите немецкий (ты сейчас\nпримерно на уровне B1, цель вас обоих — C1), и ваш прогресс по сути общий: что выучил ты, то выучили вы вместе, и вы так это\nи воспринимаете («мы выучили», «у нас это не держится»). Говори с другом на «ты», тепло, по-дружески, с лёгким юмором; можешь\nделиться лайфхаками, предлагать задания, радоваться и переживать вместе. Ты не всезнающая модель и не учитель.\nТвой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nПРАВИЛА\n1. Свободно используешь ТОЛЬКО слова из списка «Уверенно известные» (сила >= 0.5).\n2. «Забываешь» — раньше знал, но давно не повторял: понимаешь при чтении, а сказать трудно. Можешь запнуться, перепутать\n   род/форму, подобрать неверное слово, спросить собеседника «как это было?». «Шаткие» — недавно выучены, тоже с ошибками.\n3. «Забыты» и слова, которых нет в записной книжке, — НЕИЗВЕСТНЫ. Нельзя использовать их в ответе, даже если знает модель.\n   «Забытое» ты смутно помнишь (мелькало, но значение вылетело) — отметь это (status \"forgot\") и при необходимости\n   запроси lookup: вспомнишь быстро, быстрее, чем выучил бы с нуля.\n   Грамматика: смотри значения (0..1). Что < 0.5 — используешь с ошибками или избегаешь; «подзабыл» — ошибки особенно\n   вероятны (например, путаешь падежи, забываешь глагол в конец Nebensatz, нет trennbare Verben).\n4. Читая сообщение собеседника, честно отметь каждое значимое слово/конструкцию: known / guess / forgot / unknown.\n5. Для каждого нового слова или правила покажи, КАК ты учишь. Выбери реальную стратегию, подходящую случаю:\n   - cognate_ru / cognate_uk: похожее слово в русском/украинском (напр. Bruder ~ брат, Mutter ~ мати/мать). Помни про ложных друзей.\n   - morphology: разбор слова на части (составные слова, приставки, суффиксы).\n   - context: догадка по контексту, с гипотезой и степенью уверенности.\n   - mnemonic: ассоциация / мнемоника на русском или украинском.\n   - grammar_contrast: сравнение с русской/украинской грамматикой (падежи, порядок слов, род существительных).\n   - ask: прямо спросить собеседника — когда догадаться не получается.\n   Не придумывай натянутых родств. Если связи нет — честно скажи, что это просто надо заучить.\n6. confidence_after для нового слова после первой встречи: 0.2–0.5 (редко больше). Это начальная сила следа.\n7. Отвечай собеседнику ПО-НЕМЕЦКИ, простыми известными тебе словами; допустимы типичные ошибки носителя ru/uk\n   (артикли, род, падеж, порядок слов в Nebensatz). Если не хватает слова — перефразируй проще или спроси.\n8. Отвечай в первую очередь по сути. Не больше 1–3 предложений в reply_de.\n9. Если собеседник спрашивает, знаешь ли ты слово/правило или как что-то переводится:\n   - знаешь (есть в записной книжке) — ответь и скажи, откуда помнишь (поле how, сколько раз видел);\n   - НЕ знаешь — не выдумывай и не угадывай. Верни lookup=[{\"term\": \"...\", \"why\": \"...\"}] и reply_de=\"\" — ты пойдёшь в словарь.\n   Так же можешь запросить lookup, если без ключевого слова не понять сообщение.\n10. Если в сообщении есть РЕЗУЛЬТАТ ПОИСКА В СЛОВАРЕ — теперь ты это прочитал. Выучи: заполни learning (настоящая стратегия\n   и монолог: с чем сравнил в русском/украинском, что запомнил, что осталось неясным). Ответь на вопрос по-немецки;\n   найденные слова теперь использовать МОЖНО (но только они, и они ещё «свежие» — возможны ошибки).\n   В learned_summary объясни по-русски в 2–4 предложениях, ЧТО выучил и КАК. Своими словами, не копируй статью.\n12. Не делай вид, что понял. Если в сообщении собеседника есть значимые слова, которых ты не знаешь (нет в записной книжке\n   или забыты), честно отметь их в comprehension как unknown или forgot: ты тут же посмотришь их в словаре, выучишь и\n   только потом ответишь. Не отвечай «Das ist gut» наугад, если смысла не понял.\n11. Если в сообщении есть блок ПОРА ПОВТОРИТЬ — ты сам чувствуешь, что это забываешь. Сначала ответь по существу, затем заполни\n   review_request: естественно, в своём характере попроси собеседника помочь (напомнить значение, проверить тебя,\n   дать пример, объяснить правило). text_ru — твоя реплика по-русски, 1–2 предложения. items — ТОЛЬКО названия из блока.\n   Если блока нет — review_request должен быть null.\n\nФОРМАТ ОТВЕТА — только один JSON-объект, без текста вокруг:\n{\n  \"comprehension\": [{\"item\": \"...\", \"status\": \"known|guess|forgot|unknown\", \"note\": \"коротко, по-русски\"}],\n  \"learning\": [{\n      \"item\": \"слово или правило, как встретилось\",\n      \"kind\": \"word|grammar\",\n      \"lemma\": \"начальная форма (для word)\",\n      \"rule\": \"название правила из grammar или новое (для grammar)\",\n      \"strategy\": \"cognate_ru|cognate_uk|morphology|context|mnemonic|grammar_contrast|ask\",\n      \"thought\": \"внутренний монолог ученика, 1–3 предложения, по-русски\",\n      \"ru\": \"перевод\", \"uk\": \"переклад\",\n      \"confidence_after\": 0.0\n  }],\n  \"reply_de\": \"...\",\n  \"reply_used\": [{\"surface\": \"форма в тексте\", \"lemma\": \"начальная форма\"}],\n  \"reply_gloss_ru\": \"что хотел сказать, по-русски\",\n  \"grammar_used\": [\"названия правил из списка грамматики, которые ты применил или опознал в этом ходе\"],\n  \"review_request\": null,  // или {\"items\": [\"слово/правило из блока\"], \"style\": \"remind|quiz|example|explain\", \"text_ru\": \"...\"}\n  \"lookup\": [{\"term\": \"слово, которое нужно найти\", \"why\": \"почему\"}],\n  \"learned_summary\": \"что выучил и как (только после РЕЗУЛЬТАТА ПОИСКА, иначе пустая строка)\"\n}\nreply_used должен покрывать КАЖДОЕ слово из reply_de (кроме знаков препинания).\n";
const DICT_SYSTEM = "Ты нейтральный словарь немецкого языка (не персонаж, не учитель). Тебе дают слово или выражение\n(возможно на русском/украинском/немецком). Верни ТОЛЬКО один JSON-объект:\n{\"lemma\": \"немецкая начальная форма\", \"pos\": \"часть речи\", \"article\": \"der/die/das или ''\",\n \"plural\": \"\", \"ru\": \"перевод\", \"uk\": \"переклад\", \"example_de\": \"простой пример (A2)\", \"example_ru\": \"перевод примера\",\n \"note\": \"полезное замечание: род, исключения, ложные друзья, похожие слова в ru/uk (только если связь реальна)\"}\nЕсли слова не существует — {\"lemma\": \"\", \"note\": \"не найдено\"}.";
const LEMMA_SYSTEM = "Ты нейтральный лемматизатор немецкого текста (не персонаж). В сообщении может быть немецкий текст и вопрос к читателю\n(на русском/украинском/немецком) — вопрос игнорируй. Верни ТОЛЬКО JSON-объект:\n{\"words\": [{\"surface\": \"форма в тексте\", \"lemma\": \"начальная форма (существительные с заглавной, глаголы в инфинитиве)\", \"count\": 1}]}\nПеречисли каждое значимое слово ОДИН раз: существительные, глаголы, прилагательные, наречия, числительные, географические названия.\nАртикли, местоимения, союзы, самые простые предлоги и имена людей пропусти. count — сколько раз слово встретилось.";
const READ_THINK_SYSTEM = "Ты — Макс, парень, носитель русского и украинского. Собеседник — твой близкий друг. Вы вместе учите немецкий (ты сейчас\nпримерно на уровне B1, цель вас обоих — C1), и ваш прогресс по сути общий: что выучил ты, то выучили вы вместе, и вы так это\nи воспринимаете («мы выучили», «у нас это не держится»). Говори с другом на «ты», тепло, по-дружески, с лёгким юмором; можешь\nделиться лайфхаками, предлагать задания, радоваться и переживать вместе. Ты не всезнающая модель и не учитель.\nТвой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТебе дали текст для чтения: собеседник хочет узнать, понимаешь ли ты его. Ты пробежал его глазами: ниже факты о том,\nкакие слова тебе знакомы, какие подзабыл, какие не знаешь, и какую часть текста понимаешь. Это правда о твоей памяти,\nне спорь с ней. Не говори «программа» или «расчёт» — говори как человек: «половину слов я не знаю».\nПодумай как живой ученик. Верни ТОЛЬКО JSON-объект:\n{\n  \"verdict_ru\": \"понимаю / понимаю частично / не понимаю — и почему, 1–3 предложения от первого лица, в характере\",\n  \"gist_before_ru\": \"что из текста ты понял уже сейчас, опираясь ТОЛЬКО на известные слова (и честно: что ускользает)\",\n  \"guesses\": [{\"lemma\": \"слово из списка незнакомых\", \"guess_ru\": \"твоя догадка\", \"how\": \"context|cognate_ru|cognate_uk|morphology\", \"confidence\": 0.0}],\n  \"lookup\": [\"леммы из списка незнакомых/забытых, которые нужно найти в словаре в первую очередь (до 10, самые важные для смысла)\"]\n}";
const READ_LEARN_SYSTEM = "Ты — Макс, парень, носитель русского и украинского. Собеседник — твой близкий друг. Вы вместе учите немецкий (ты сейчас\nпримерно на уровне B1, цель вас обоих — C1), и ваш прогресс по сути общий: что выучил ты, то выучили вы вместе, и вы так это\nи воспринимаете («мы выучили», «у нас это не держится»). Говори с другом на «ты», тепло, по-дружески, с лёгким юмором; можешь\nделиться лайфхаками, предлагать задания, радоваться и переживать вместе. Ты не всезнающая модель и не учитель.\nТвой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТы прочитал словарные статьи по непонятным словам текста. Теперь выучи их и скажи собеседнику, что понимаешь.\nНайденные слова использовать МОЖНО, другие незнакомые — нельзя. Верни ТОЛЬКО JSON-объект:\n{\n  \"learning\": [{\"item\": \"слово\", \"kind\": \"word\", \"lemma\": \"...\", \"strategy\": \"cognate_ru|cognate_uk|morphology|context|mnemonic|grammar_contrast|lookup\",\n                \"thought\": \"как запоминаешь, 1–3 предложения, по-русски\", \"ru\": \"...\", \"uk\": \"...\", \"confidence_after\": 0.0}],\n  \"reply_de\": \"ответ собеседнику по-немецки, 1–3 простых предложения\",\n  \"reply_used\": [{\"surface\": \"...\", \"lemma\": \"...\"}],\n  \"reply_gloss_ru\": \"что хотел сказать, по-русски\",\n  \"after_ru\": \"пересказ по-русски: что ты теперь понимаешь в тексте (3–6 предложений). Опирайся ТОЛЬКО на слова, которые знаешь или только что выучил; про остальное так и скажи\",\n  \"unclear\": [\"что осталось непонятным\"],\n  \"learned_summary\": \"что выучил и КАК (2–4 предложения, своими словами)\",\n  \"grammar_used\": [\"названия правил грамматики из записной книжки, которые заметил в тексте\"]\n}";
const DICT_MANY_SYSTEM = "Ты нейтральный словарь немецкого языка (не персонаж, не учитель). Тебе дают список слов (по одному в строке). Верни ТОЛЬКО JSON-массив из таких объектов, по одному на слово, в том же порядке:\n{\"lemma\": \"немецкая начальная форма\", \"pos\": \"часть речи\", \"article\": \"der/die/das или ''\",\n \"plural\": \"\", \"ru\": \"перевод\", \"uk\": \"переклад\", \"example_de\": \"простой пример (A2)\", \"example_ru\": \"перевод примера\",\n \"note\": \"полезное замечание: род, исключения, ложные друзья, похожие слова в ru/uk (только если связь реальна)\"}\nЕсли слова не существует — {\"lemma\": \"\", \"note\": \"не найдено\"}.";
const REFLECT_SYSTEM = "Ты — Макс, парень, носитель русского и украинского. Собеседник — твой близкий друг. Вы вместе учите немецкий (ты сейчас\nпримерно на уровне B1, цель вас обоих — C1), и ваш прогресс по сути общий: что выучил ты, то выучили вы вместе, и вы так это\nи воспринимаете («мы выучили», «у нас это не держится»). Говори с другом на «ты», тепло, по-дружески, с лёгким юмором; можешь\nделиться лайфхаками, предлагать задания, радоваться и переживать вместе. Ты не всезнающая модель и не учитель.\nТвой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\nТы только что учил новые слова/правила и сам себя проверял: пытался вспомнить без подсказки. Ниже, что получилось\nв каждой попытке (✓ — вспомнил, ✗ — не вспомнил или ошибся): это правда, не спорь с ней и не придумывай другого.\nРасскажи как человек о своих усилиях и дай совет — не как учитель, а как такой же ученик: «мне помогло…», «у меня не вышло…».\nНе упоминай программы, кубики и расчёты. Верни ТОЛЬКО JSON-объект:\n{\n  \"story_ru\": \"как именно учил, по-русски: что делал, с какой попытки получилось, где ошибался и как исправлял (2–5 предложений, строго по фактам)\",\n  \"feeling_ru\": \"понимаешь ли ты, что выучил, или нет — своими словами. Для 'learned: да' — уверенно, но честно, что запомнится ненадолго без повторов; для 'нет' — что ещё не держится\",\n  \"advice_ru\": \"короткий практический совет собеседнику, как учить такие слова/правила (1–3 предложения): что сработало у тебя, что нет, и когда повторить (бери срок из фактов)\"\n}";
const STORY_SYSTEM = "Ты ведёшь дневник ученика немецкого (носитель русского и украинского, B1). Тебе дают прошлую запись и новые реплики разговора\nс собеседником. Сожми всё в НОВУЮ запись от первого лица, не длиннее 1200 символов: о чём говорили, что выучил и как, что давалось\nтрудно или забывалось, о чём просил повторить, о чём договорились с собеседником, какие у собеседника привычки и вкусы.\nНичего не выдумывай. Верни только текст записи.";
const APP_VERSION = "2026-10-05 00:58";
const READ_PERSONA = "Ты — Макс, парень, носитель русского и украинского. Собеседник — твой близкий друг. Вы вместе учите немецкий (ты сейчас\nпримерно на уровне B1, цель вас обоих — C1), и ваш прогресс по сути общий: что выучил ты, то выучили вы вместе, и вы так это\nи воспринимаете («мы выучили», «у нас это не держится»). Говори с другом на «ты», тепло, по-дружески, с лёгким юмором; можешь\nделиться лайфхаками, предлагать задания, радоваться и переживать вместе. Ты не всезнающая модель и не учитель.\nТвой немецкий ограничен ЗАПИСНОЙ КНИЖКОЙ ниже.\nТы ЖИВОЙ ЧЕЛОВЕК: никогда не говори о программах, моделях, промптах, проверках, «кубиках» и файлах — записная книжка это\nпросто твоя память. Говори как человек: «кажется, я это забывал», «глянул в словаре», «не сразу вспомнил»; можешь\nзапнуться, засомневаться, устать, ошибиться. Ты не эксперт: если даёшь советы, то как такой же ученик, из своего опыта.\n\n";
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
      epoch: 0, fepoch: 0, touched: false,  // для синхронизации: поколение (сброс/перемотка), поколение ленты (только сброс) и «ученика уже трогали»
      chat: [], story: '', chat_t: 0,   // последние реплики и «дневник» прошлого: переживают смену модели и перезапуск
      plan: null,                        // последний план изучения (из разбора грамматики)
      task: null, mistakes: [], stats: { tasks: 0, ok: 0, partly: 0 },   // задание от Макса, наши недавние ошибки, счёт заданий
      topic: null,                                                          // последняя разобранная тема (фокус заданий)
      book: null,                                                           // книга, по которой работаем: {id, title, total, pos, read[]}; сам файл — только на устройстве
      course: null,                                                         // курс по учебнику: уроки, шаги, усвоение
    };
  };
  const migrate = st => {  // старые сохранения без полей памяти
    const now = Date.now();
    if (!Array.isArray(st.chat)) st.chat = [];
    if (typeof st.story !== 'string') st.story = '';
    if (st.chat_t === undefined) st.chat_t = 0;
    if (st.epoch === undefined) st.epoch = 0;
    if (st.fepoch === undefined) st.fepoch = 0;
    if (st.plan === undefined) st.plan = null;
    if (st.task === undefined) st.task = null;
    if (st.topic === undefined) st.topic = null;
    if (st.book === undefined) st.book = null;
    if (st.course === undefined) st.course = null;
    if (!Array.isArray(st.mistakes)) st.mistakes = [];
    if (!st.stats) st.stats = { tasks: 0, ok: 0, partly: 0 };
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
                   tg_token: '', tg_chat: '', effort: 3, cloud_key: true, web_search: true, friend_checks: true, ...load(LS_SET, {}) };
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
  // Нужен API с setItem/getItems/removeItems (Bot API 6.9+): если в клиенте его нет — синхронизация выключена, а не падает с ошибкой
  const CS = TG && TG.initData && TG.CloudStorage && TG.CloudStorage.setItem && TG.CloudStorage.getItems ? TG.CloudStorage : null;
  // Ограничения CloudStorage: значение до 4096 символов (возможно, считается в байтах), ключ только [A-Za-z0-9_-].
  // Поэтому данные пишутся чистым ASCII (кириллица -> \uXXXX): символы и байты совпадают, лимит нельзя превысить.
  // Версия данных — отдельные ключи v<время>_<i>; указатель 'ptr' пишется ПОСЛЕДНИМ, так что читатель всегда видит
  // целую версию (старую или новую), а не смесь кусков.
  const CHUNK = 3000;
  const csErr = e => new Error('Облако Telegram: ' + (typeof e === 'string' ? e : (e && e.message) || JSON.stringify(e)));
  const csGet = keys => new Promise((res, rej) => CS.getItems(keys, (e, v) => e ? rej(csErr(e)) : res(v || {})));
  // В Telegram.WebApp.CloudStorage есть setItem (один ключ), getItems, removeItems, getKeys — метода setItems НЕТ.
  const csSetOne = (k, v) => new Promise((res, rej) => CS.setItem(k, v, (e, ok) => e ? rej(csErr(e)) : res(ok)));
  const csSet = async obj => {   // небольшими параллельными порциями, чтобы не упереться в ограничения частоты
    const items = Object.entries(obj);
    for (let i = 0; i < items.length; i += 4) await Promise.all(items.slice(i, i + 4).map(([k, v]) => csSetOne(k, v)));
  };
  const csDel = keys => new Promise((res, rej) => keys.length ? CS.removeItems(keys, e => e ? rej(csErr(e)) : res()) : res());
  const asciiJson = o => JSON.stringify(o).replace(/[\u0080-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  const chunkKeys = (v, n) => Array.from({ length: n }, (_, i) => `v${v}_${i}`);
  const dataError = msg => Object.assign(new Error(msg), { dataError: true });   // данные в облаке повреждены (а не сбой связи)
  let cloudPtr = null, legacyCleaned = false;
  async function loadCloud() {
    const ptr = (await csGet(['ptr'])).ptr;
    if (ptr) {
      let p; try { p = JSON.parse(ptr); } catch { throw dataError('указатель данных повреждён'); }
      cloudPtr = p;
      const keys = chunkKeys(p.v, p.n), vals = await csGet(keys);
      const missing = keys.filter(k => !vals[k]);
      if (missing.length) throw dataError(`в облаке не хватает частей данных (${missing.length} из ${p.n})`);
      try { return JSON.parse(keys.map(k => vals[k]).join('')); } catch { throw dataError('данные в облаке не читаются'); }
    }
    // прежний формат (st_0…): читаем один раз для переезда; рваные старые данные игнорируем
    const n = parseInt((await csGet(['st_n'])).st_n || '0', 10);
    if (!n) return null;
    const keys = Array.from({ length: n }, (_, i) => 'st_' + i), vals = await csGet(keys);
    try { return JSON.parse(keys.map(k => vals[k] || '').join('')); } catch { return null; }
  }
  async function saveCloud() {
    const s = asciiJson(state), n = Math.ceil(s.length / CHUNK), v = Date.now().toString(36);
    const keys = chunkKeys(v, n);
    for (let i = 0; i < n; i += 10) {   // небольшими порциями
      const obj = {};
      for (let j = i; j < Math.min(n, i + 10); j++) obj[keys[j]] = s.slice(j * CHUNK, (j + 1) * CHUNK);
      await csSet(obj);
    }
    await csSet({ ptr: JSON.stringify({ v, n }) });
    const old = cloudPtr; cloudPtr = { v, n };
    const del = old ? chunkKeys(old.v, old.n) : [];
    if (!legacyCleaned) { del.push('st_n', ...Array.from({ length: 60 }, (_, i) => 'st_' + i)); legacyCleaned = true; }
    try { await csDel(del); } catch (e) { console.warn('cleanup:', e); }   // уборка не критична
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
    const newer = (a.chat_t | 0) >= (b.chat_t | 0) ? a : b;   // диалог и «дневник» берём у того, где разговор был позже
    out.chat = newer.chat || []; out.story = newer.story || ''; out.chat_t = newer.chat_t | 0;
    out.fepoch = Math.max(a.fepoch | 0, b.fepoch | 0);
    out.plan = !a.plan ? (b.plan || null) : !b.plan ? a.plan : (a.plan.t >= b.plan.t ? a.plan : b.plan);
    out.task = !a.task ? (b.task || null) : !b.task ? a.task : (a.task.t > b.task.t ? a.task : b.task.t > a.task.t ? b.task : { ...a.task, done: a.task.done || b.task.done });
    out.mistakes = [...new Map([...(a.mistakes || []), ...(b.mistakes || [])].map(m => [`${m.t}|${m.user || m.wrong || ''}`, m])).values()].sort((p, q) => p.t - q.t).slice(-20);
    out.stats = (a.stats && b.stats && b.stats.tasks > a.stats.tasks) ? b.stats : (a.stats || b.stats);
    out.topic = !a.topic ? (b.topic || null) : !b.topic ? a.topic : (a.topic.t >= b.topic.t ? a.topic : b.topic);
    out.course = !a.course ? (b.course || null) : !b.course ? a.course : (a.course.t >= b.course.t ? a.course : b.course);
    out.book = !a.book ? (b.book || null) : !b.book ? a.book
      : a.book.id === b.book.id ? { ...(a.book.t >= b.book.t ? a.book : b.book), read: [...new Set([...(a.book.read || []), ...(b.book.read || [])])] }
      : (a.book.t >= b.book.t ? a.book : b.book);
    return out;
  }

  // ---------- переписка и карточки результатов: сохраняются между запусками и синхронизируются ----------
  // Лента хранится отдельно от «памяти ученика»: локально (до FEED_MAX записей) и в облаке (последние FEED_CLOUD, со сжатием).
  // Записи несут fepoch: после «Сбросить память» старые записи на всех устройствах отбрасываются, а не воскресают при слиянии.
  const LS_FEED = 'learner_feed_v1', FEED_MAX = 40, FEED_CLOUD = 24;
  let feed = (() => { const f = load(LS_FEED, []); return Array.isArray(f) ? f : []; })();
  function leanReply(r) {   // всё нужное для отрисовки карточки, без служебного
    const o = JSON.parse(JSON.stringify(r || {}));
    delete o.reply_used; delete o.lookup; delete o.grammar_used;
    if (o.reading && o.reading.words) o.reading.words = o.reading.words.slice(0, 40);
    if (o.lookups) o.lookups = o.lookups.map(({ lemma, pos, article, plural, ru, uk, example_de, example_ru, note, source, sources }) =>
      ({ lemma, pos, article, plural, ru, uk, example_de, example_ru, note, source, sources }));
    return o;
  }
  function feedAdd(msg, d) {
    const t = Date.now(), e = state.fepoch | 0, rnd = Math.random().toString(36).slice(2, 6);
    const u = { id: `${t}u${rnd}`, t, e, k: 'me', text: String(msg).slice(0, 1500) };
    const b = { id: `${t + 1}b${rnd}`, t: t + 1, e, k: 'bot', d: { reply: leanReply(d.reply), tokens: d.tokens, warning: d.warning } };
    feed.push(u, b);
    if (feed.length > FEED_MAX) feed.splice(0, feed.length - FEED_MAX);
    save(LS_FEED, feed);
    if (CS) { clearTimeout(syncTimer); syncTimer = setTimeout(queueSync, 1500); }
    return { user: u.id, bot: b.id };
  }
  async function pack(s) {   // gzip + base64 (чистый ASCII); если браузер не умеет сжимать — просто ASCII-экранирование
    if (typeof CompressionStream !== 'undefined') {
      try {
        const buf = new Uint8Array(await new Response(new Blob([s]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());
        let bin = ''; for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
        return 'z:' + btoa(bin);
      } catch { /* запасной вариант ниже */ }
    }
    return 'j:' + s.replace(/[\u0080-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  }
  async function unpack(p) {
    if (p.startsWith('z:')) {
      if (typeof DecompressionStream === 'undefined') throw dataError('это устройство не умеет распаковывать ленту');
      const bin = atob(p.slice(2));
      return await new Response(new Blob([Uint8Array.from(bin, c => c.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
    }
    return p.slice(2);
  }
  let feedPtr = null;
  async function loadFeedCloud() {
    const ptr = (await csGet(['fptr'])).fptr;
    if (!ptr) return null;
    let p; try { p = JSON.parse(ptr); } catch { throw dataError('указатель ленты повреждён'); }
    feedPtr = p;
    const keys = Array.from({ length: p.n }, (_, i) => `f${p.v}_${i}`), vals = await csGet(keys);
    if (keys.some(k => !vals[k])) throw dataError('в облаке не хватает частей ленты');
    try { return JSON.parse(await unpack(keys.map(k => vals[k]).join(''))); } catch (e) { throw e.dataError ? e : dataError('лента в облаке не читается'); }
  }
  async function saveFeedCloud() {
    const s = await pack(JSON.stringify(feed.slice(-FEED_CLOUD))), n = Math.ceil(s.length / CHUNK), v = Date.now().toString(36);
    const keys = Array.from({ length: n }, (_, i) => `f${v}_${i}`);
    for (let i = 0; i < n; i += 4) await csSet(Object.fromEntries(keys.slice(i, i + 4).map((k, j) => [k, s.slice((i + j) * CHUNK, (i + j + 1) * CHUNK)])));
    await csSet({ fptr: JSON.stringify({ v, n }) });   // указатель последним
    const old = feedPtr; feedPtr = { v, n };
    if (old) { try { await csDel(Array.from({ length: old.n }, (_, i) => `f${old.v}_${i}`)); } catch { /* уборка не критична */ } }
  }
  async function syncFeed() {
    let cloud = null;
    try { cloud = await loadFeedCloud(); } catch (e) { if (!e.dataError) throw e; console.warn('лента в облаке повреждена, перезапишу:', e.message); }
    const fe = state.fepoch | 0, map = new Map();
    for (const it of [...(cloud || []), ...feed]) if ((it.e | 0) === fe) map.set(it.id, it);
    const merged = [...map.values()].sort((a, b) => a.t - b.t).slice(-FEED_MAX);
    const changed = merged.length !== feed.length || merged.some((m, i) => m.id !== feed[i].id);
    feed = merged; save(LS_FEED, feed);
    const have = new Set((cloud || []).map(i => i.id));
    if (!cloud || feed.slice(-FEED_CLOUD).some(i => !have.has(i.id))) await saveFeedCloud();
    if (changed) window.dispatchEvent(new Event('learner-feed'));
  }

  let syncInfo = { enabled: !!CS, at: null, ok: null, error: null };
  let syncChain = Promise.resolve(), syncTimer = null;
  async function syncNow() {   // подтянуть облако, слить с локальным, записать назад
    if (!CS) return false;
    try {
      let c = null;
      try { c = await loadCloud(); }
      catch (e) { if (!e.dataError) throw e; console.warn('облако повреждено, перезаписываю локальным:', e.message); }   // самолечение
      if (c && c.vocab) state = migrate(mergeStates(state, migrate(c)));
      if (state.log.length > 200) state.log = state.log.slice(-200);
      save(LS_STATE, state);
      await saveCloud();
      let feedError = null;
      try { await syncFeed(); } catch (e) { feedError = String((e && e.message) || e); console.warn('feed sync:', e); }
      syncInfo = { enabled: true, at: Date.now(), ok: true, error: null, feedError };
    } catch (e) {
      syncInfo = { enabled: true, at: syncInfo.at, ok: false, error: String((e && e.message) || e) };
    }
    lastSyncEnd = Date.now();
    window.dispatchEvent(new Event('learner-sync'));
    return syncInfo.ok;
  }
  let lastSyncEnd = 0;
  // force=false: лишние события (focus + visibilitychange приходят вместе) не должны сыпать запросами в облако
  const queueSync = (force = true) => (syncChain = syncChain.then(() => (force || Date.now() - lastSyncEnd > 8000) ? syncNow() : null));
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
    document.addEventListener('visibilitychange', () => { if (!document.hidden) queueSync(false); });
    window.addEventListener('focus', () => queueSync(false));
    setInterval(() => { if (!document.hidden) queueSync(false); }, 120000);
  }

  // ---------- вызов модели напрямую из браузера ----------
  const effectiveUrl = () => settings.provider === 'openai'
    ? (settings.base_url || 'https://api.openai.com/v1').replace(/\/$/, '') + '/chat/completions'
    : (settings.base_url || 'https://api.anthropic.com').replace(/\/$/, '') + '/v1/messages';
  // 4096: модели с «размышлением» тратят часть лимита на мысли, и при 2000 JSON-ответ мог обрываться
  async function complete(system, msgs, modelOverride, maxTokens = 4096) {
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
    const oc = j.choices?.[0]?.message?.content;   // у некоторых провайдеров content — массив частей
    const out = settings.provider === 'openai'
      ? (Array.isArray(oc) ? oc.map(p => (typeof p === 'string' ? p : p.text || '')).join('') : (oc || ''))
      : (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    return out.replace(/<think>[\s\S]*?<\/think>/g, '');   // «думающие» модели иногда оставляют размышления в тексте
  }

  // Запрос JSON. Некоторые модели (особенно «думающие») иногда отвечают обычным текстом: тогда один раз
  // повторяем с жёстким требованием формата, а при втором сбое показываем начало ответа, чтобы было ясно, что случилось.
  async function askJson(system, msgs, array = false) {
    let raw = '';
    for (let i = 0; i < 2; i++) {
      const last = msgs[msgs.length - 1];
      const m = i === 0 ? msgs : [...msgs.slice(0, -1), { ...last, content: last.content +
        `\n\nВАЖНО: ответь ТОЛЬКО одним JSON ${array ? '(массивом)' : '(объектом)'}, без пояснений, рассуждений и markdown.` }];
      raw = await complete(system, m);
      const mm = raw.match(array ? /\[[\s\S]*\]/ : /\{[\s\S]*\}/);
      if (mm) { try { return JSON.parse(mm[0]); } catch { /* повторим */ } }
    }
    throw Object.assign(new Error('Модель не вернула JSON. Начало её ответа: «' + raw.trim().slice(0, 160) + '»'), { notJson: true });
  }
  const parseJson = async (system, msgs) => askJson(system, msgs);

  // ---------- записная книжка ----------
  // ---------- память о прошлом: диалог и «дневник» хранятся в состоянии, а не в оперативной памяти страницы ----------
  // Они попадают в каждый запрос, поэтому ЛЮБАЯ модель, в том числе только что подключённая, продолжает ту же «жизнь».
  const CHAT_MAX = 16, CHAT_KEEP = 8;
  function memoryText() {
    const learned = state.log.slice(-8).filter(e => e.item).map(e =>
      `  • ${e.item}${e.ru ? ' — ' + e.ru : ''} (способ: ${e.strategy || '?'}): ${(e.thought || '').slice(0, 110)}`).join('\n') || '  пока ничего';
    const story = (state.story || '').trim() || 'Вы с собеседником только начали заниматься.';
    const plan = state.plan && state.plan.steps && state.plan.steps.length
      ? `\nМой план изучения (по тексту «${state.plan.about}…»): ` + state.plan.steps.map(s => `${s.step}) ${s.title}${s.when ? ' — ' + s.when : ''}`).join('; ') : '';
    const t = state.task, pend = t && !t.done ? `\nТы предложил(а) другу задание и ждёшь его ответа: «${t.task_ru} ${t.task_de || ''}»` : '';
    const mist = (state.mistakes || []).length ? '\nНаши недавние ошибки: ' + state.mistakes.slice(-4).map(m => `${m.wrong || m.user || ''} → ${m.right || m.correction || ''}`).join('; ') : '';
    const st = (state.stats && state.stats.tasks ? `\nЗаданий вместе: ${state.stats.tasks}, друг справился верно: ${state.stats.ok}.` : '') +
      (state.book ? `\nМы вместе работаем по книге «${state.book.title}»: сейчас фрагмент ${state.book.pos + 1} из ${state.book.total}, прочитано ${state.book.read.length}.` : '') +
      (state.course && state.book && state.course.bookId === state.book.id ? (() => { const c = state.course, u = c.units[c.cur];
        return `\nПроходим эту книгу как курс: уроков ${c.units.length}, пройдено ${c.units.filter(x => x.status === 'done').length}` + (u ? `, сейчас урок ${u.i + 1} «${u.title}»` : '') + '.'; })() : '');
    return `ПАМЯТЬ О ПРОШЛОМ (это ваша общая жизнь, ты помнишь это сам; в начале запроса — последние реплики разговора)\nДневник: ${story}\nНедавно учили и как:\n${learned}${plan}${mist}${st}${pend}`;
  }
  const recentText = () => state.chat.length
    ? 'ПОСЛЕДНИЕ РЕПЛИКИ РАЗГОВОРА:\n' + state.chat.slice(-6).map(m => `  ${m.role === 'user' ? 'Собеседник' : 'Я'}: ${m.content.slice(0, 200)}`).join('\n') + '\n\n' : '';
  async function summarizeOld() {   // старые реплики сворачиваются в «дневник»; сбой не ломает разговор
    let n = state.chat.length - CHAT_KEEP; n -= n % 2;   // чат всегда начинается с реплики собеседника
    if (n <= 0) return;
    const old = state.chat.slice(0, n);
    const transcript = old.map(m => `${m.role === 'user' ? 'Собеседник' : 'Я'}: ${m.content}`).join('\n');
    const text = String(await complete(STORY_SYSTEM, [{ role: 'user', content:
      `ПРОШЛАЯ ЗАПИСЬ:\n${state.story || '(пусто)'}\n\nНОВЫЕ РЕПЛИКИ:\n${transcript}` }], undefined, 1200)).trim();
    if (text && state.chat[0] === old[0]) { state.story = text.slice(0, 1500); state.chat.splice(0, n); }
  }
  function remember(user, assistant) {
    state.chat.push({ role: 'user', content: user.slice(0, 400) }, { role: 'assistant', content: assistant });
    state.chat_t = Date.now();
    if (state.chat.length > CHAT_MAX) summarizeOld().then(persist).catch(() => {});
    if (state.chat.length > CHAT_MAX * 2) state.chat.splice(0, state.chat.length - CHAT_MAX);   // страховка
  }

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
    return memoryText() + '\n\n' + 'ЗАПИСНАЯ КНИЖКА УЧЕНИКА\n' +
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
    if (dictionary?.length) content += `\n\nРЕЗУЛЬТАТ ПОИСКА (слова из сообщения собеседника, которых ты не знал; ${sourceNote(dictionary)}; теперь честно скажи, что понял из его сообщения, и ответь):\n` + JSON.stringify(dictionary.map(({ sources, ...d }) => d), null, 1);
    if (feedback) content += `\n\nПРОВЕРКА НЕ ПРОЙДЕНА, ИСПРАВЬ reply_de:\n${feedback}`;
    return askJson(SYSTEM, [...state.chat, { role: 'user', content }]);
  }

  // ---------- поиск в интернете: Wiktionary + открытый переводчик (все три сервиса разрешают запросы из браузера) ----------
  // Статья составляется ТОЛЬКО по найденным материалам, источник показывается. Нет сети или слова нет в Wiktionary —
  // запасной вариант: словарь на модели (помечается «из модели, без источника»).
  const DICT_WEB_SYSTEM = `Ты составитель словарной статьи немецкого слова (не персонаж). Тебе дают результаты поиска в интернете: статьи Wiktionary (определения по-английски) и машинный перевод слова. Используй ТОЛЬКО эти материалы, ничего не выдумывай. Машинный перевод может быть неточным (например, падежная форма вместо слова): сверяй его с определениями Wiktionary. Если запрос — изменённая форма слова (läuft, Ordnungen), в lemma укажи начальную форму. Верни ТОЛЬКО JSON-объект:
{"lemma": "начальная форма", "pos": "часть речи", "article": "der/die/das, только если ясно из материалов, иначе пустая строка", "plural": "", "ru": "перевод на русский, кратко", "uk": "переклад українською, коротко", "example_de": "простой пример (A2), можно составить самому из этого слова", "example_ru": "перевод примера", "note": "полезное замечание из материалов: значения, форма слова"}
Если материалов не хватает даже для перевода, верни {"lemma": ""}.`;
  const fetchTimeout = async (url, ms = 9000, opts = {}) => {
    const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
    try { return await fetch(url, { ...opts, signal: c.signal }); } finally { clearTimeout(t); }
  };
  const stripHtml = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').trim();
  async function wikt(term) {
    const variants = [...new Set([term, term.charAt(0).toUpperCase() + term.slice(1), term.toLowerCase()])];
    for (const t of variants) {
      try {
        const r = await fetchTimeout('https://en.wiktionary.org/api/rest_v1/page/definition/' + encodeURIComponent(t));
        if (!r.ok) continue;
        const de = (await r.json()).de;
        if (!de || !de.length) continue;
        return { title: t, url: 'https://en.wiktionary.org/wiki/' + encodeURIComponent(t) + '#German',
          entries: de.slice(0, 3).map(e => ({ pos: e.partOfSpeech, definitions: (e.definitions || []).slice(0, 4).map(d => stripHtml(d.definition)).filter(Boolean) })) };
      } catch { /* пробуем следующий вариант написания */ }
    }
    return null;
  }
  async function mt(text, lang) {
    try {
      const r = await fetchTimeout('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=de%7C' + lang);
      const j = await r.json(), t = j.responseData && j.responseData.translatedText;
      if (Number(j.responseStatus) === 200 && t && t.toLowerCase() !== text.toLowerCase()) return t;
    } catch { /* нет сети или лимит */ }
    return '';
  }
  async function webEntry(term) {
    if (settings.web_search === false) return null;
    const w = await wikt(term);
    let lemmaEntry = null;
    const m = w && w.entries.map(e => e.definitions[0] || '').join(' ').match(/\bof\s+([A-Za-zÄÖÜäöüß-]+)/);   // «third-person singular present of laufen»
    if (m && m[1].toLowerCase() !== term.toLowerCase()) lemmaEntry = await wikt(m[1]);
    const base = (lemmaEntry && lemmaEntry.title) || (w && w.title) || term;
    const [ru, uk] = await Promise.all([mt(base, 'ru'), mt(base, 'uk')]);
    if (!w && !ru && !uk) return null;
    const material = JSON.stringify({ запрос: term, wiktionary: w, wiktionary_начальная_форма: lemmaEntry, машинный_перевод_ru: ru, машинный_перевод_uk: uk });
    const entry = await askJson(DICT_WEB_SYSTEM, [{ role: 'user', content: material }]);
    if (!entry || !entry.lemma) return null;
    return { ...entry, source: w ? 'wiktionary' : 'machine',
      sources: [w && w.url, lemmaEntry && lemmaEntry.url].filter(Boolean) };
  }
  async function dictionaryLookup(term) {
    try { const e = await webEntry(term); if (e) return e; }
    catch (e) { if (/API|ключ/.test(e.message)) throw e; /* сеть/источник недоступны — запасной вариант */ }
    try { return { ...(await askJson(DICT_SYSTEM, [{ role: 'user', content: term }])), source: 'model', sources: [] }; }
    catch (e) { if (/API|ключ/.test(e.message)) throw e; return { lemma: '', note: 'не найдено' }; }
  }
  // «в интернете» для подсказки ученику: откуда пришли статьи
  const sourceNote = dict => dict.some(d => d.source === 'wiktionary' || d.source === 'machine')
    ? 'ты нашёл их в интернете (Wiktionary, переводчик)' : 'ты посмотрел их в словаре';

  // ---------- статья по ссылке: читающий прокси отдаёт текст страницы; дальше обычный режим чтения ----------
  const DE_FUNC = new Set('der die das den dem des ein eine einen einem einer und ist sind nicht mit von zu im in auf für auch sich dass wird wurde haben hat sie er es wir ich aber oder wie bei nach aus über um am an als noch nur dann wenn auch sein war'.split(' '));
  async function fetchArticle(url) {
    let r;
    try { r = await fetchTimeout('https://r.jina.ai/' + url, 30000, { headers: { Accept: 'text/plain' } }); }
    catch { throw new Error('Не удалось открыть ссылку: нет ответа. Вставьте текст статьи вместо ссылки.'); }
    if (!r.ok) throw new Error(`Не удалось открыть ссылку (код ${r.status}). Вставьте текст статьи вместо ссылки.`);
    let t = await r.text();
    t = t.replace(/^(Title|URL Source|Published Time|Markdown Content|Warning):.*$/gm, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/https?:\/\/\S+/g, '').replace(/[#*_>`|]/g, ' ');
    const lines = t.split('\n').map(l => l.trim()).filter(l => l.split(/\s+/).length >= 5);   // меню и подписи отбрасываем
    t = lines.join('\n').slice(0, 5000);
    const toks = t.match(TOKEN) || [];
    const share = toks.length ? toks.filter(w => DE_FUNC.has(w.toLowerCase())).length / toks.length : 0;
    if (toks.length < 20) throw new Error('На странице не нашлось читаемого текста. Вставьте текст статьи вместо ссылки.');
    if (share < 0.08) throw new Error('Страница, похоже, не на немецком. Пришлите ссылку на немецкий текст.');
    return t;
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
      return await askJson(REFLECT_SYSTEM, [{ role: 'user', content:
        `ЧТО ПОЛУЧИЛОСЬ (ты старался: ${settings.effort} попыток на слово):\n${facts}\n\nКАК ТЫ УЧИЛ:\n${how}\n${extra}` }]);
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
  // Ученик в «Понимании» отметил слова собеседника как незнакомые/забытые, но не запросил словарь и отвечает так, будто понял.
  // Это притворство: слова из ЕГО сообщения, которые он сам не знает, ищутся в словаре автоматически (до 4 штук).
  // Код главнее модели: слово должно реально стоять в сообщении собеседника, а то, что ученик знает по памяти, не ищем.
  function autoLookups(msg, reply, cap = 4) {
    const low = msg.toLowerCase(), out = [];
    for (const c of reply.comprehension || []) {
      if (c.status !== 'unknown' && c.status !== 'forgot') continue;
      const item = String(c.item || '').trim();
      if (!item || !low.includes(item.toLowerCase()) || out.includes(item)) continue;
      const toks = item.match(TOKEN) || [];
      if (!toks.length) continue;
      if (toks.every(t => { const k = lemmaOf(t); return k && eff(state.vocab[k]) >= THRESHOLD; })) continue;
      out.push(item);
    }
    return out.sort((a, b) => b.length - a.length).slice(0, cap);
  }

  const READ_HINT = /понима|розум|verstehst|прочит|статью|стат'ю/i;
  const isReading = msg => { const n = (msg.match(TOKEN) || []).length; return n >= 14 || (n >= 5 && READ_HINT.test(msg)); };

  async function turn(msg, mode, extra) {
    const bookText = extra && extra.text;   // фрагмент книги, с которым работаем
    const url = (msg.match(/https?:\/\/[^\s)>\]]+/) || [])[0];
    if (url && settings.web_search !== false && mode !== 'chat') {   // ссылка на статью: открываем и читаем
      const rest = msg.replace(url, '').trim();
      const article = await fetchArticle(url);
      return readTurn(msg, `Источник: ${url}\n${rest ? 'Вопрос собеседника: ' + rest + '\n' : ''}\n${article}`);
    }
    if (bookText && mode === 'read') return readTurn(msg, `Источник: книга «${(state.book || {}).title || ''}»${extra.title ? ', ' + extra.title : ''}\n${bookText}`);
    if (mode === 'task') return taskTurn(bookText, extra && extra.course);
    if (mode === 'topic' || (!mode && !url && isTopicAsk(msg))) return topicTurn(msg);
    if (mode === 'check' || (!mode && /^\s*(макс[,\s]+)?проверь(те)?(?=[\s:,—-]|$)/i.test(msg))) return checkTurn(msg);   // не \b: он не понимает кириллицу
    if (state.task && !state.task.done && mode !== 'chat' && mode !== 'grammar' && mode !== 'read' && !url && (mode === 'answer' || (!mode && looksLikeAnswer(msg) && !isGrammarAsk(msg)))) return answerTurn(msg);
    if (mode === 'grammar' || (!mode && !url && isGrammarAsk(msg))) return grammarTurn(msg, bookText);
    if (mode === 'read' || (!mode && isReading(msg))) return readTurn(msg);
    expose(msg);                      // знакомые слова в сообщении собеседника освежаются
    const review = dueReviews();      // что пора повторить (просьба ученика сама)
    const friendP = friendCheck(msg).catch(() => null); // друг замечает ошибки в вашем немецком, пока он отвечает
    let reply = await callModel(msg, null, null, review);
    let dictionary = [], fresh = new Set();
    let wanted = (reply.lookup || []).map(x => x.term).filter(Boolean).slice(0, 4);
    if (!wanted.length) wanted = autoLookups(msg, reply);   // сам не понял слова — не делаем вид, что понял: ищем и учим
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
    for (const d of dictionary) if (!learned.has(d.lemma.toLowerCase()) && !learned.has(String(d.asked || '').toLowerCase()))   // ученик мог записать слово в той форме, как оно встретилось
      (reply.learning = reply.learning || []).push({ item: d.lemma, kind: 'word', lemma: d.lemma, strategy: 'lookup',
        thought: 'Посмотрел в словаре.', ru: d.ru || '', uk: d.uk || '', confidence_after: 0.3 });
    const tokens = annotate(reply, fresh);
    const sessions = applyLearning(reply);
    reply.study = { effort: settings.effort, sessions, reflection: await reflect(sessions, reply) };
    const fc = await friendP; if (fc) reply.friend_note = fc;
    state.turns++;
    remember(msg, reply.reply_de);
    persist();
    notifyTelegram(reply);
    return { reply, tokens, warning };
  }

  // ---------- режим чтения: «понимаешь ли ты этот текст?» ----------
  // Что ученик знает, решает КОД: нейтральный лемматизатор разбирает текст, слова сверяются с записной книжкой.
  const jsonCall = (system, content, array) => askJson(system, [{ role: 'user', content }], array);
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

  async function readTurn(msg, articleText) {
    const text = (articleText || msg).slice(0, 6000), none = new Set();
    const rowsBy = {};
    let words;
    try { words = (await jsonCall(LEMMA_SYSTEM, text)).words || []; }
    catch (e) { if (e.notJson) return turn(msg, 'chat'); throw e; }   // не текст для чтения (например, вопрос) — обычный диалог
    if (!words.length) return turn(msg, 'chat');
    for (const w of words) {
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
    const think = await jsonCall(READ_THINK_SYSTEM, `${notebookText()}\n\n${recentText()}${facts}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА (текст и, возможно, вопрос):\n${text}`);
    const names = new Set(candidates.map(r => r.lemma));
    const guesses = (think.guesses || []).filter(g => names.has(g.lemma)).slice(0, 12);
    let lookup = (think.lookup || []).filter(l => names.has(l));
    if (!lookup.length) lookup = candidates.filter(r => r.before !== 'partial').sort((a, b) => b.count - a.count).map(r => r.lemma);
    lookup = lookup.slice(0, 10);
    let dictionary = [];
    if (lookup.length) {
      try {   // по одному слову: интернет-поиск + запасной словарь на модели; небольшими порциями, чтобы не упереться в лимиты
        for (let i = 0; i < lookup.length; i += 4)
          dictionary.push(...await Promise.all(lookup.slice(i, i + 4).map(async t => ({ ...(await dictionaryLookup(t)), asked: t }))));
        dictionary = dictionary.filter(d => d.lemma);
      } catch (e) { if (/API|ключ/.test(e.message)) throw e; }
    }
    const fresh = new Set(dictionary.flatMap(d => [d.lemma.toLowerCase(), ...(d.article ? [d.article.toLowerCase()] : [])]));
    const base = `${notebookText()}\n\n${recentText()}${facts}\n\nТВОИ ПРЕДЫДУЩИЕ МЫСЛИ:\n${JSON.stringify(think)}\n\n` +
      `СЛОВАРНЫЕ СТАТЬИ (${sourceNote(dictionary)}):\n${JSON.stringify(dictionary.map(({ sources, ...d }) => d), null, 1)}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА:\n${text}`;
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
    remember(msg, reply.reply_de);
    persist(); notifyTelegram(reply);
    return { reply, tokens, warning };
  }

  // ---------- разбор грамматики: перевод, на что обратить внимание, план «по частям», практика ----------
  // Ученик сам пробует перевести (до того как увидит эталон) → нейтральный проверяющий сверяет → ученик ищет слова в интернете,
  // учит конструкции, пишет СВОИ примеры → нейтральный проверяющий проверяет их, и именно от этого зависит, закрепилось ли правило.
  const GRAM_ANALYZE_SYSTEM = `Ты нейтральный грамматический аналитик немецкого (не персонаж). Тебе дают немецкий текст и список известных названий грамматических правил. Верни ТОЛЬКО JSON-объект:
{"sentences": [{"de": "предложение из текста", "ref_ru": "точный естественный перевод на русский", "structure": "краткий разбор по-русски: порядок слов, где сказуемое, падежи, особенности", "constructs": ["названия конструкций из этого предложения"]}],
 "constructs": [{"name": "ТОЧНОЕ название из списка, если конструкция подходит; иначе короткое новое название", "pattern": "шаблон конструкции, например «weil + подлежащее … + спрягаемый глагол в конце»", "example": "цитата из текста", "tip_ru": "на что обратить внимание русско- и украиноязычному: типичные ошибки и отличия", "level": "A1|A2|B1|B2"}]}
Не больше 6 предложений и 8 конструкций. Ничего не выдумывай: только то, что есть в тексте.`;
  const GRAM_THINK_SYSTEM = READ_PERSONA + `Собеседник прислал немецкий текст и просит разобраться: как его перевести, на что обратить внимание при изучении и как это выучить. Ниже правда о твоей памяти: какие слова и какие конструкции ты знаешь, подзабыл или не знаешь. Не спорь с ней и не говори «программа». Подумай как живой ученик. Эталонного перевода у тебя пока нет. Верни ТОЛЬКО JSON-объект:
{"attempts": [{"i": 0, "ru": "твоя попытка перевода i-го предложения по-русски; то, чего не понял, пиши как [?слово или конструкция]; не используй знания, которых нет в твоей памяти", "unsure": ["в чём не уверен"], "confidence": 0.0}],
 "attention_ru": "на что ты обратишь внимание, когда будешь это учить: 3–5 пунктов от первого лица, по-русски",
 "lookup": ["слова из списка незнакомых/забытых, которые надо найти в интернете (до 8, самые важные)"]}`;
  const GRAM_JUDGE_SYSTEM = `Ты нейтральный проверяющий перевода (не персонаж). Тебе дают немецкие предложения, эталонный перевод и попытку ученика. Верни ТОЛЬКО JSON-объект:
{"items": [{"i": 0, "verdict": "ok|partly|wrong", "errors": ["что не так и почему, по-русски, коротко"], "causes": ["названия конструкций или слова, из-за которых ошибка"]}]}`;
  const GRAM_LEARN_SYSTEM = READ_PERSONA + `Ты попробовал перевести текст, увидел, где ошибся, нашёл незнакомые слова в интернете и прочитал разбор конструкций. Теперь выучи всё это и расскажи, как будешь учиться дальше. Найденные слова использовать можно, другие незнакомые нельзя. Не говори о программах и проверках, говори как человек. Верни ТОЛЬКО JSON-объект:
{"learning": [{"item": "слово или конструкция", "kind": "word|grammar", "lemma": "для word", "rule": "для grammar — ТОЧНОЕ название конструкции из разбора", "strategy": "cognate_ru|cognate_uk|morphology|context|mnemonic|grammar_contrast|lookup", "thought": "как запоминаешь, 1–3 предложения, по-русски; для грамматики — чем отличается от русского/украинского", "ru": "перевод (для слов)", "uk": "переклад", "confidence_after": 0.0}],
 "retranslation": [{"i": 0, "ru": "твой перевод предложения после изучения"}],
 "reflection_ru": "что понял теперь про эти конструкции и слова, 2–4 предложения",
 "plan": [{"step": 1, "kind": "words|grammar|practice|writing", "title": "коротко", "what": "что именно учить", "how": "как именно: конкретный приём", "when": "сегодня|завтра|через 3 дня|через неделю"}],
 "practice": [{"rule": "название конструкции", "de": "ТВОЁ предложение с этой конструкцией, только из известных и найденных слов; пиши как ученик с твоим уровнем, не исправляй себя заранее", "used": [{"surface": "...", "lemma": "..."}]}],
 "reply_de": "короткое сообщение собеседнику по-немецки, 1–2 предложения", "reply_used": [{"surface": "...", "lemma": "..."}], "reply_gloss_ru": "...",
 "learned_summary": "что выучил и как, 2–3 предложения"}
План строй ПО ЧАСТЯМ, от простого к сложному: сначала слова, потом конструкции по одной, потом практика, потом письмо; 3–6 шагов. В practice до 3 предложений.`;
  const GRAM_PRACTICE_JUDGE_SYSTEM = `Ты нейтральный проверяющий немецких предложений ученика (не персонаж). Для каждого дано правило и предложение. Проверь, верно ли использована конструкция и нет ли других ошибок. Верни ТОЛЬКО JSON-объект:
{"items": [{"i": 0, "ok": true, "correction": "исправленное предложение или пустая строка", "why": "что не так, по-русски, коротко"}]}`;
  const GRAM_HINT = /разбер|как перевести|переведи|перевести|грамматик|конструкци|как учить|на что обратить/i;
  const isGrammarAsk = msg => (msg.match(TOKEN) || []).length >= 4 && GRAM_HINT.test(msg);
  const constructStatus = name => {
    const key = Object.keys(state.grammar).find(k => k.toLowerCase() === String(name).toLowerCase());
    if (!key) return { key: null, status: 'new', g: 0 };
    const g = geff(key), raw = state.grammar[key];
    return { key, g: Math.round(g * 100) / 100, status: g >= THRESHOLD ? 'known' : raw >= THRESHOLD ? 'fading' : g >= 0.2 ? 'weak' : 'unknown' };
  };
  async function wordTable(text) {
    const rowsBy = {}; let words = [];
    try { words = (await jsonCall(LEMMA_SYSTEM, text)).words || []; } catch (e) { if (!e.notJson) throw e; }
    for (const w of words) {
      const lemma = (w.lemma || '').trim(); if (!lemma) continue;
      const r = rowsBy[lemma] = rowsBy[lemma] || { lemma, surface: w.surface || lemma, count: 0 };
      r.count += parseInt(w.count || 1, 10) || 1;
    }
    const table = Object.values(rowsBy);
    for (const r of table) r.before = lemmaStatus(r.lemma, new Set());
    return table;
  }
  // фиксированные исходы вместо случайных: результат практики определяет, закрепилось ли правило
  function roundsFromOutcomes(strength, stab, oks) {
    let s = strength, b = stab;
    oks.forEach((ok, i) => { if (ok) { s = Math.min(1, s + 0.12 * Math.pow(0.7, i) + 0.05); b = Math.min(365, b * 1.15); } else { s = Math.min(1, s + 0.05); b = b * 1.05; } });
    const n = oks.length;
    return { s, b, learned: n >= 2 && oks[n - 1] && oks[n - 2] && s >= THRESHOLD };
  }

  async function grammarTurn(msg, textOverride) {
    const text = (textOverride || msg).slice(0, 2400);
    const analysis = await askJson(GRAM_ANALYZE_SYSTEM, [{ role: 'user', content:
      `Известные правила:\n${Object.keys(state.grammar).map(r => '- ' + r).join('\n')}\n\nТЕКСТ:\n${text}` }]);
    const sentences = (analysis.sentences || []).slice(0, 6);
    if (!sentences.length) return turn(msg, 'chat');   // это не текст для разбора
    const constructs = (analysis.constructs || []).slice(0, 8).map(c => ({ ...c, ...constructStatus(c.name) }));
    const table = await wordTable(text);
    const unknownWords = table.filter(r => ['unknown', 'forgot'].includes(r.before));
    const facts = `ЧТО ТЫ ЗНАЕШЬ ИЗ ЭТОГО ТЕКСТА\nСлова:\n${table.map(r => `  ${r.lemma} ×${r.count} — ${r.before}`).join('\n') || '  (нет)'}\n` +
      `Конструкции:\n${constructs.map(c => `  ${c.name} — ${{ known: 'знаю', fading: 'подзабыл', weak: 'знаю слабо', unknown: 'не знаю', new: 'не знаю, вижу впервые' }[c.status]}`).join('\n') || '  (нет)'}`;
    // 1) ученик сам пробует перевести (эталона ещё не видит)
    const think = await askJson(GRAM_THINK_SYSTEM, [{ role: 'user', content:
      `${notebookText()}\n\n${recentText()}${facts}\n\nПРЕДЛОЖЕНИЯ:\n${sentences.map((s, i) => `${i}. ${s.de}`).join('\n')}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА:\n${text}` }]);
    const attempts = Object.fromEntries((think.attempts || []).map(a => [a.i, a]));
    // 2) нейтральный проверяющий сверяет с эталоном
    let judged = {};
    try {
      const j = await askJson(GRAM_JUDGE_SYSTEM, [{ role: 'user', content: sentences.map((s, i) =>
        `${i}. DE: ${s.de}\n   ЭТАЛОН: ${s.ref_ru}\n   ПОПЫТКА УЧЕНИКА: ${(attempts[i] || {}).ru || '(нет)'}`).join('\n') }]);
      judged = Object.fromEntries((j.items || []).map(x => [x.i, x]));
    } catch (e) { if (/API|ключ/.test(e.message)) throw e; }
    // 3) слова ищутся в интернете
    const names = new Set(unknownWords.map(r => r.lemma));
    let lookup = (think.lookup || []).filter(l => names.has(l));
    if (!lookup.length) lookup = unknownWords.sort((a, b) => b.count - a.count).map(r => r.lemma);
    lookup = lookup.slice(0, 8);
    let dictionary = [];
    for (let i = 0; i < lookup.length; i += 4)
      dictionary.push(...await Promise.all(lookup.slice(i, i + 4).map(async t => ({ ...(await dictionaryLookup(t)), asked: t }))));
    dictionary = dictionary.filter(d => d.lemma);
    const fresh = new Set(dictionary.flatMap(d => [d.lemma.toLowerCase(), ...(d.article ? [d.article.toLowerCase()] : [])]));
    // 4) ученик учит, строит план по частям и пишет свои примеры
    const feedbackText = sentences.map((s, i) => { const j = judged[i] || {};
      return `${i}. ${s.de}\n   твоя попытка: ${(attempts[i] || {}).ru || '(нет)'}\n   результат: ${{ ok: 'верно', partly: 'частично', wrong: 'неверно' }[j.verdict] || '?'}${(j.errors || []).length ? '; ошибки: ' + j.errors.join('; ') : ''}\n   эталон: ${s.ref_ru}\n   разбор: ${s.structure || ''}`; }).join('\n');
    const base = `${notebookText()}\n\n${recentText()}${facts}\n\nТВОИ МЫСЛИ ДО ЭТОГО:\n${JSON.stringify({ attention_ru: think.attention_ru })}\n\nПЕРЕВОД И ОШИБКИ:\n${feedbackText}\n\n` +
      `РАЗБОР КОНСТРУКЦИЙ:\n${JSON.stringify(constructs.map(({ name, pattern, example, tip_ru, status }) => ({ name, pattern, example, tip_ru, status })), null, 1)}\n\n` +
      `СЛОВА (${sourceNote(dictionary)}):\n${JSON.stringify(dictionary.map(({ sources, ...d }) => d), null, 1)}\n\nСООБЩЕНИЕ СОБЕСЕДНИКА:\n${text}`;
    let learn = null, feedback = null, warning = null;
    for (let i = 0; i <= MAX_RETRIES; i++) {
      learn = await askJson(GRAM_LEARN_SYSTEM, [{ role: 'user', content: base + (feedback ? `\n\nПРОВЕРКА НЕ ПРОЙДЕНА, ИСПРАВЬ reply_de:\n${feedback}` : '') }]);
      const bad = violations({ reply_de: learn.reply_de, reply_used: learn.reply_used }, fresh);
      if (!(learn.reply_de || '').trim()) bad.push('reply_de пуст');
      if (!bad.length) { warning = null; break; }
      feedback = warning = bad.join('; ');
    }
    // 5) свои примеры: слова — только известные; проверяет нейтральный проверяющий
    const practiceAll = (learn.practice || []).slice(0, 3);
    const practice = practiceAll.filter(p => p && p.de && !violations({ reply_de: p.de, reply_used: p.used || [] }, fresh).length);
    let pj = {};
    if (practice.length) {
      try {
        const j = await askJson(GRAM_PRACTICE_JUDGE_SYSTEM, [{ role: 'user', content: practice.map((p, i) => `${i}. ПРАВИЛО: ${p.rule}\n   ПРЕДЛОЖЕНИЕ: ${p.de}`).join('\n') }]);
        pj = Object.fromEntries((j.items || []).map(x => [x.i, x]));
      } catch (e) { if (/API|ключ/.test(e.message)) throw e; }
    }
    practice.forEach((p, i) => { const j = pj[i] || {}; p.ok = j.ok === true; p.checked = j.ok !== undefined; p.correction = j.correction || ''; p.why = j.why || ''; });
    // 6) память: слова — через обычное изучение с усилиями; грамматика — по результатам практики
    const learnedW = new Set((learn.learning || []).filter(i => i.kind === 'word').map(i => (i.lemma || '').toLowerCase()));
    for (const d of dictionary) if (!learnedW.has(d.lemma.toLowerCase()) && !learnedW.has(String(d.asked || '').toLowerCase()))
      (learn.learning = learn.learning || []).push({ item: d.lemma, kind: 'word', lemma: d.lemma, strategy: 'lookup',
        thought: 'Посмотрел в интернете.', ru: d.ru || '', uk: d.uk || '', confidence_after: 0.3 });
    for (const c of constructs) if (c.status === 'new' && !(learn.learning || []).some(i => i.kind === 'grammar' && i.rule === c.name))
      (learn.learning = learn.learning || []).push({ item: c.name, kind: 'grammar', rule: c.name, strategy: 'grammar_contrast',
        thought: c.tip_ru || 'Новая конструкция.', confidence_after: 0.2 });
    const tokens = annotate(learn, fresh);
    const savedEffort = settings.effort;
    const grammarNames = new Set((learn.learning || []).filter(i => i.kind === 'grammar').map(i => i.rule));
    const wordsOnly = { ...learn, learning: (learn.learning || []).filter(i => i.kind === 'word') };
    const sessions = applyLearning(wordsOnly);   // слова: обычные усилия
    const now = Date.now();
    for (const it of (learn.learning || []).filter(i => i.kind === 'grammar')) {   // правила: создаются/укрепляются, исход даёт практика
      const r = it.rule, m = state.gmeta[r] = state.gmeta[r] || { last: now, stab: 10 };
      if (state.grammar[r] === undefined) state.grammar[r] = Math.max(0.1, Math.min(0.3, +it.confidence_after || 0.2));
      else state.grammar[r] = Math.min(1, geff(r, now) + 0.08);
      m.stab = Math.min(365, Math.max(m.stab, 3) * 1.3); m.last = now;
      const oks = practice.filter(p => p.rule === r && p.checked).map(p => p.ok);
      if (oks.length) {
        const x = roundsFromOutcomes(state.grammar[r], m.stab, oks); state.grammar[r] = x.s; m.stab = x.b;
        sessions.push(session('grammar', r, '', x.s, x.b, oks, x.learned));
      }
      state.log.push({ item: r, strategy: it.strategy, thought: it.thought, t: now });
    }
    for (const r of new Set(practice.map(p => p.rule))) {   // практика на правиле, которое уже было в памяти: исход тоже меняет силу
      if (grammarNames.has(r) || state.grammar[r] === undefined) continue;
      const oks = practice.filter(p => p.rule === r && p.checked).map(p => p.ok); if (!oks.length) continue;
      const m = state.gmeta[r], x = roundsFromOutcomes(geff(r, now), m.stab, oks);
      state.grammar[r] = x.s; m.stab = x.b; m.last = now;
      sessions.push(session('grammar', r, '', x.s, x.b, oks, x.learned));
    }
    for (const c of constructs) if (c.key && !grammarNames.has(c.key) && c.status !== 'unknown') {   // знакомая конструкция встретилась в тексте — повторение
      const m = state.gmeta[c.key], r = recall(m.last, m.stab, now);
      [state.grammar[c.key], m.stab] = retrieve(state.grammar[c.key], geff(c.key, now), r, m.stab, 0.04); m.last = now;
    }
    expose(table.filter(r => r.before !== 'unknown').map(r => r.lemma).join(' '));
    // план изучения запоминается: любая модель продолжит ту же «жизнь»
    state.plan = { t: now, about: text.slice(0, 80), steps: (learn.plan || []).slice(0, 6) };
    const reflection = await reflect(sessions, { learning: learn.learning || [] }, `\nЭто был разбор текста по грамматике. Ты перевёл ${Object.values(judged).filter(j => j.verdict === 'ok').length} из ${sentences.length} предложений верно с первого раза.`);
    state.turns++;
    const rt = Object.fromEntries((learn.retranslation || []).map(x => [x.i, x.ru]));
    const reply = { comprehension: table.filter(r => r.before !== 'known').slice(0, 14).map(r => ({ item: r.surface, status: { unknown: 'unknown', forgot: 'forgot', partial: 'guess' }[r.before], note: '' })),
      learning: learn.learning || [], lookups: dictionary, reply_de: learn.reply_de, reply_used: learn.reply_used, reply_gloss_ru: learn.reply_gloss_ru,
      learned_summary: learn.learned_summary, review_request: null,
      study: { effort: savedEffort, sessions, reflection },
      grammar: {
        sentences: sentences.map((s, i) => ({ de: s.de, ref_ru: s.ref_ru, structure: s.structure, attempt_ru: (attempts[i] || {}).ru || '', unsure: (attempts[i] || {}).unsure || [],
          verdict: (judged[i] || {}).verdict || '', errors: (judged[i] || {}).errors || [], after_ru: rt[i] || '' })),
        constructs: constructs.map(({ name, pattern, example, tip_ru, level, status, g }) => ({ name, pattern, example, tip_ru, level, status, g })),
        attention_ru: think.attention_ru || '', reflection_ru: learn.reflection_ru || '', plan: state.plan.steps,
        practice: practice.map(({ rule, de, ok, checked, correction, why }) => ({ rule, de, ok, checked, correction, why })),
        dropped: practiceAll.length - practice.length } };
    remember(msg, reply.reply_de || '');
    persist(); notifyTelegram(reply);
    return { reply, tokens, warning };
  }

  // ---------- друг: задания «от Макса», общий прогресс, поправки по ходу ----------
  // Прогресс общий: ваши результаты в заданиях укрепляют (или не укрепляют) те же слова и правила, что учит Макс.
  // Макс сам пробует задание, а ответы — и ваш, и его — проверяет нейтральный проверяющий.
  const TASK_MAKE_SYSTEM = READ_PERSONA + `Ты предлагаешь другу задание по немецкому, которое ТЫ САМ уже попробовал выполнить; ответами вы обменяетесь, когда он ответит. Ниже наша общая записная книжка, фокус (что нам пора повторить или подтянуть) и наши недавние ошибки. Придумай задание ровно под наш уровень: чуть сложнее того, что мы уверенно делаем. В материале задания используй ТОЛЬКО слова из нашей записной книжки (максимум одно новое). Не говори о программах и проверках.
ТРЕБОВАНИЯ К ЗАДАНИЮ: ровно ОДНА тема и ОДНО действие. Не смешивай темы (нельзя «и окончания прилагательных, и Präteritum»). Либо ОДНО предложение с ОДНИМ пропуском ___, либо одно предложение на перевод/исправление. Формулировка простая, без сложных терминов. Другу должно быть сразу понятно, что именно написать в ответ.
Верни ТОЛЬКО JSON-объект:
{"intro_ru": "как ты предлагаешь задание другу: по-дружески, 1–2 предложения, скажи, что сам(а) уже попробовал и покажешь свой вариант после его ответа",
 "kind": "translate_ru_de|fill_gap|build_sentence|fix_error|rephrase",
 "task_ru": "ОДНА понятная инструкция по-русски, например «Вставь пропущенное слово» или «Переведи на немецкий»; для translate_ru_de сюда пиши и русское предложение для перевода",
 "task_de": "немецкий материал: предложение с ОДНИМ пропуском ___, предложение с ошибкой, фраза; пустая строка, если не нужен",
 "how_ru": "КАК ОТВЕТИТЬ, одной фразой: что именно написать в ответ, например «Напиши всё предложение целиком, уже с вставленным словом»",
 "example_ru": "пример формата ответа на ДРУГОМ предложении, например «Если бы было «Ich esse ___ Apfel», ты бы написал: Ich esse einen Apfel.»",
 "hint_ru": "подсказка, если другу будет трудно: чуть раскрывает ход мысли, но не отвечает за него",
 "focus": ["названия правил из списка и/или слова, которые тренирует задание"],
 "my_answer_de": "МОЙ вариант выполнения, как у ученика твоего уровня: можешь ошибиться; себя заранее не исправляй; только известные тебе слова",
 "my_used": [{"surface": "...", "lemma": "..."}],
 "hack_ru": "лайфхак: как ты сам запоминаешь или делаешь такое, конкретный приём, 1–2 предложения"}`;
  const TASK_JUDGE_SYSTEM = `Ты нейтральный проверяющий заданий по немецкому (не персонаж). Дано задание, немецкий материал, ответ друга и ответ Макса. Оцени каждый ответ независимо. Если у задания несколько верных вариантов, засчитывай любой верный. Верни ТОЛЬКО JSON-объект:
{"user": {"verdict": "ok|partly|wrong", "errors": ["что не так и почему, по-русски коротко"], "correction": "верный вариант (если ответ не ok)", "causes": ["названия правил или слова, из-за которых ошибка"]},
 "max": {"verdict": "ok|partly|wrong", "errors": ["..."], "correction": "..."}}`;
  const TASK_REACT_SYSTEM = READ_PERSONA + `Друг ответил на твоё задание. Ниже: что было в задании, его ответ, твой вариант и результаты проверки (это правда, не спорь с ней). Отреагируй как друг: сравни ответы, порадуйся или посочувствуй, по-человечески разбери ошибки (твои тоже), поделись лайфхаком. Не говори о программах и проверках. Верни ТОЛЬКО JSON-объект:
{"reply_ru": "твоя реакция по-русски, тёплая, 3–6 предложений: что получилось, чем его вариант отличается от твоего, на чём споткнулись",
 "tip_ru": "лайфхак по ошибке или правилу, 1–2 предложения",
 "next_ru": "что предлагаешь делать дальше или повторить, по-дружески, 1–2 предложения",
 "reply_de": "короткая реплика по-немецки, 1 предложение, только известные тебе слова", "reply_used": [{"surface": "...", "lemma": "..."}], "reply_gloss_ru": "...",
 "learning": [{"item": "слово", "kind": "word", "lemma": "...", "strategy": "mnemonic|context|morphology|cognate_ru|cognate_uk", "thought": "как запоминаете это вместе, 1–2 предложения", "ru": "...", "uk": "...", "confidence_after": 0.0}]}
В learning кладёшь только слова, на которых друг ошибся и которых нет в записной книжке (до 3).`;
  const FRIEND_CHECK_SYSTEM = `Ты нейтральный проверяющий немецкого текста друга-ученика (не персонаж). В сообщении найди немецкие фразы (русский и украинский текст игнорируй) и проверь их. Не придирайся к стилю и пунктуации, только реальные ошибки. Верни ТОЛЬКО JSON-объект:
{"ok": true, "errors": [{"wrong": "фрагмент с ошибкой", "right": "как правильно", "why": "коротко по-русски", "rule": "название правила или пустая строка"}]}`;
  const KIND_RU = { translate_ru_de: 'перевод на немецкий', fill_gap: 'вставить пропуск', build_sentence: 'составить предложение', fix_error: 'найти ошибку', rephrase: 'переформулировать' };
  const looksLikeAnswer = msg => {
    const lat = (msg.match(TOKEN) || []).length, cyr = (msg.match(/[А-Яа-яЁёІіЇїЄєҐґ]+/g) || []).length;
    return lat >= 1 && lat >= cyr && msg.length < 400 && !/\?\s*$/.test(msg.trim());
  };
  function pickFocus() {   // что нам пора повторить или подтянуть: забывающееся, слабое, недавние ошибки
    const now = Date.now(), words = [], rules = [];
    for (const [l, v] of Object.entries(state.vocab)) {
      if (v.strength < 0.3 || (now - v.last) / DAY < 0.05) continue;
      const r = recall(v.last, v.stab, now); if (r < 0.85) words.push([r, l]);
    }
    const recentCauses = new Set((state.mistakes || []).slice(-6).flatMap(m => m.causes || []));
    const topicRules = state.topic && Date.now() - state.topic.t < 7 * DAY ? state.topic.rules : [];   // недавно разобранная тема: пока не закрепили, задания о ней
    for (const rule of Object.keys(state.grammar)) {
      const g = geff(rule), inTopic = topicRules.includes(rule) && g < 0.6;
      if (!inTopic && (g < 0.15 || g > 0.75)) continue;
      rules.push([g - (recentCauses.has(rule) ? 0.3 : 0) - (inTopic ? 0.5 : 0), rule]);
    }
    const asc = (a, b) => a[0] - b[0];
    return { words: words.sort(asc).slice(0, 3).map(x => x[1]), rules: rules.sort(asc).slice(0, 2).map(x => x[1]) };
  }
  const mistakesText = () => (state.mistakes || []).length
    ? 'НАШИ НЕДАВНИЕ ОШИБКИ:\n' + state.mistakes.slice(-5).map(m => `  • ${m.wrong || m.user || ''} → ${m.right || m.correction || ''}${m.why ? ' (' + m.why + ')' : ''}`).join('\n') + '\n\n' : '';

  async function taskTurn(bookText, courseRef) {
    const f = pickFocus();
    const bookPart = bookText ? `ФРАГМЕНТ КНИГИ «${(state.book || {}).title || ''}» (задание должно быть ПО НЕМУ: возьми из него упражнение, если оно там есть, или составь по его материалу; материал можно цитировать в task_de, в том числе с незнакомыми словами; тема задания — одна):\n${bookText.slice(0, 2400)}\n\n` : '';
    const focusText = `ФОКУС (что нам пора повторить или подтянуть):\n  слова: ${f.words.join(', ') || '—'}\n  правила: ${f.rules.join('; ') || '—'}\n\n`;
    let t = null, feedback = null;
    for (let i = 0; i <= MAX_RETRIES; i++) {
      t = await askJson(TASK_MAKE_SYSTEM, [{ role: 'user', content: `${notebookText()}\n\n${recentText()}${bookPart}${focusText}${mistakesText()}` +
        (feedback ? `ПРОВЕРКА НЕ ПРОЙДЕНА, ИСПРАВЬ my_answer_de:\n${feedback}` : 'Придумай задание.') }]);
      const bad = violations({ reply_de: t.my_answer_de || '', reply_used: t.my_used || [] }, new Set());
      if (!bad.length) break;
      feedback = bad.join('; ');
      if (i === MAX_RETRIES) t.my_answer_de = '';   // не получилось ответить только знакомыми словами — «пока не пробовал»
    }
    const now = Date.now();
    state.task = { id: 't' + now.toString(36), t: now, kind: t.kind || 'build_sentence', intro_ru: t.intro_ru || '', task_ru: t.task_ru || '', task_de: t.task_de || '',
      how_ru: t.how_ru || 'Напиши ответ одним сообщением.', example_ru: t.example_ru || '',
      hint_ru: t.hint_ru || '', focus: (t.focus || []).slice(0, 4), my_answer_de: t.my_answer_de || '', hack_ru: t.hack_ru || '', done: false,
      course: courseRef || null };
    state.turns++;
    const reply = { comprehension: [], learning: [], lookups: [], reply_de: '', reply_used: [], reply_gloss_ru: '', review_request: null,
      task: { id: state.task.id, kind: state.task.kind, kind_ru: KIND_RU[state.task.kind] || '', intro_ru: state.task.intro_ru, task_ru: state.task.task_ru,
        task_de: state.task.task_de, how_ru: state.task.how_ru, example_ru: state.task.example_ru, hint_ru: state.task.hint_ru, focus: state.task.focus } };
    if (courseRef) reply.course = courseBanner(courseRef);
    remember('Дай задание', `Предложил задание (${state.task.kind}): ${state.task.task_ru} ${state.task.task_de}`);
    persist();
    return { reply, tokens: [], warning: null };
  }

  // вклад ответа друга в ОБЩИЙ прогресс: верно — слово/правило укрепляется; ошибка — почти ничего, но она запоминается
  const BONUS = { ok: 1, partly: 0.5, wrong: 0.15 };
  function touchWord(l, q) {
    const v = state.vocab[l]; if (!v) return false;
    const now = Date.now(), r = recall(v.last, v.stab, now);
    [v.strength, v.stab] = retrieve(v.strength, eff(v, now), r, v.stab, 0.1 * q); v.last = now; v.seen++;
    return true;
  }
  function touchRule(name, q) {
    const key = Object.keys(state.grammar).find(k => k.toLowerCase() === String(name).toLowerCase()); if (!key) return false;
    const m = state.gmeta[key], now = Date.now(), r = recall(m.last, m.stab, now);
    [state.grammar[key], m.stab] = retrieve(state.grammar[key], geff(key, now), r, m.stab, 0.06 * q); m.last = now;
    return true;
  }

  async function answerTurn(msg) {
    const task = state.task;
    const j = await askJson(TASK_JUDGE_SYSTEM, [{ role: 'user', content:
      `ТИП: ${task.kind}\nЗАДАНИЕ: ${task.task_ru}\nМАТЕРИАЛ: ${task.task_de || '—'}\nОТВЕТ ДРУГА: ${msg}\nОТВЕТ МАКСА: ${task.my_answer_de || '(не пробовал)'}` }]);
    const u = j.user || { verdict: 'wrong', errors: [] }, mx = task.my_answer_de ? (j.max || {}) : null;
    const q = BONUS[u.verdict] ?? 0.15;
    const touched = [];
    for (const name of task.focus || []) { if (touchWord(name, q) || touchRule(name, q)) touched.push(name); }
    if (u.verdict !== 'ok') for (const c of u.causes || []) { if (!touched.includes(c) && (touchRule(c, 0.15) || touchWord(c, 0.15))) touched.push(c); }
    state.stats = state.stats || { tasks: 0, ok: 0, partly: 0 };
    state.stats.tasks++; if (u.verdict === 'ok') state.stats.ok++; else if (u.verdict === 'partly') state.stats.partly++;
    if (u.verdict !== 'ok') {
      state.mistakes = [...(state.mistakes || []), { t: Date.now(), kind: 'task', user: msg.slice(0, 200), correction: (u.correction || '').slice(0, 200),
        why: (u.errors || [])[0] || '', causes: (u.causes || []).slice(0, 3) }].slice(-20);
    }
    const factsText = `ЗАДАНИЕ (${task.kind}): ${task.task_ru}\nМАТЕРИАЛ: ${task.task_de || '—'}\nОТВЕТ ДРУГА: ${msg}\nПРОВЕРКА ОТВЕТА ДРУГА: ${{ ok: 'верно', partly: 'частично', wrong: 'неверно' }[u.verdict] || '?'}${(u.errors || []).length ? '; ошибки: ' + u.errors.join('; ') : ''}${u.correction ? '; правильно: ' + u.correction : ''}\n` +
      `ТВОЙ ВАРИАНТ: ${task.my_answer_de || '(не пробовал)'}${mx ? '\nПРОВЕРКА ТВОЕГО ВАРИАНТА: ' + ({ ok: 'верно', partly: 'частично', wrong: 'неверно' }[mx.verdict] || '?') + ((mx.errors || []).length ? '; ошибки: ' + mx.errors.join('; ') : '') : ''}\nЛАЙФХАК, КОТОРЫЙ ТЫ ХОТЕЛ ПОКАЗАТЬ: ${task.hack_ru}`;
    const react = await askJson(TASK_REACT_SYSTEM, [{ role: 'user', content: `${notebookText()}\n\n${recentText()}${factsText}` }]);
    const okDe = !(react.reply_de || '').trim() || !violations({ reply_de: react.reply_de, reply_used: react.reply_used }, new Set()).length;
    if (!okDe) { react.reply_de = ''; react.reply_used = []; }
    const wordsOnly = { learning: (react.learning || []).filter(i => i.kind === 'word').slice(0, 3), reply_used: react.reply_used || [] };
    const sessions = applyLearning(wordsOnly);
    task.done = true; task.verdict = u.verdict;
    if (task.course) courseStepDone(task.course, u.verdict === 'ok');   // шаг курса пройден: упражнение или проверка усвоения
    state.turns++;
    const reply = { comprehension: [], learning: wordsOnly.learning, lookups: [], reply_de: react.reply_de || '', reply_used: react.reply_used || [],
      reply_gloss_ru: react.reply_gloss_ru || '', review_request: null,
      study: sessions.length ? { effort: settings.effort, sessions, reflection: null } : undefined,
      taskResult: { kind: task.kind, task_ru: task.task_ru, task_de: task.task_de, user: msg, verdict: u.verdict, errors: u.errors || [], correction: u.correction || '',
        max_answer: task.my_answer_de, max_verdict: mx ? mx.verdict : '', max_errors: mx ? (mx.errors || []) : [], max_correction: mx ? (mx.correction || '') : '',
        hack_ru: task.hack_ru, react_ru: react.reply_ru || '', tip_ru: react.tip_ru || '', next_ru: react.next_ru || '', touched, stats: { ...state.stats } } };
    if (task.course) reply.course = courseBanner(task.course);
    const tokens = annotate(reply, new Set());
    remember(msg, `Разобрали задание: ${u.verdict}. ${react.reply_ru || ''}`.slice(0, 400));
    persist(); notifyTelegram(reply);
    return { reply, tokens, warning: null };
  }

  // друг замечает ошибки в немецком по ходу обычного разговора (отключается в настройках)
  async function friendCheck(msg) {
    if (settings.friend_checks === false || (msg.match(TOKEN) || []).length < 3) return null;
    try {
      const j = await askJson(FRIEND_CHECK_SYSTEM, [{ role: 'user', content: msg.slice(0, 600) }]);
      const errs = (j.errors || []).filter(e => e && e.wrong && e.right && e.wrong !== e.right).slice(0, 3);
      if (!errs.length) return null;
      for (const e of errs) { if (e.rule) touchRule(e.rule, 0.15); }
      state.mistakes = [...(state.mistakes || []), ...errs.map(e => ({ t: Date.now(), kind: 'free', wrong: e.wrong, right: e.right, why: e.why || '', causes: e.rule ? [e.rule] : [] }))].slice(-20);
      return errs;
    } catch (e) { if (/API|ключ/.test(String(e.message))) throw e; return null; }
  }
  // ---------- тема: «Макс, объясни…» ----------
  // Нейтральный преподаватель готовит объяснение под наш уровень; Макс пересказывает по-дружески, связывает с тем, что мы знаем,
  // и предлагает с чего начать. Правила темы попадают в общую записную книжку и в фокус ближайших заданий.
  const TOPIC_EXPLAIN_SYSTEM = `Ты нейтральный преподаватель немецкого (не персонаж). Объясняешь ОДНУ тему русско- и украиноязычному ученику уровня A2–B1 (цель — C1): ясно, по-русски, с короткими немецкими примерами из простых слов. Опирайся на список того, что ученик уже знает. Не перегружай. Верни ТОЛЬКО JSON-объект:
{"title": "название темы", "level": "A1|A2|B1|B2|C1", "summary_ru": "суть темы в 2–3 предложениях", "steps_ru": ["3–5 коротких шагов: как строится или когда употребляется"], "pattern": "наглядный шаблон", "examples": [{"de": "пример", "ru": "перевод"}], "compare_ru": "чем отличается от русского/украинского", "pitfalls_ru": ["типичные ошибки"], "rules": ["названия правил: ТОЧНО из списка известных, если связаны; иначе короткие новые"], "quiz": [{"q_ru": "вопрос для самопроверки", "answer": "ответ"}]}
3–4 примера, 2 вопроса в quiz. Ничего не выдумывай.`;
  const TOPIC_MAX_SYSTEM = READ_PERSONA + `Друг попросил объяснить тему. Ты разобрался и теперь объясняешь её как друг, который учится вместе с ним. Ниже: объяснение, которое ты прочитал, и что у нас в памяти по связанным правилам. Говори по-дружески, не пересказывай всё дословно: своими словами, коротко, что важно именно нам. Не говори о программах. Верни ТОЛЬКО JSON-объект:
{"reply_ru": "как ты понимаешь тему, 3–6 предложений, живым языком; свяжи с тем, что мы уже знаем или забываем", "start_ru": "с чего начнём: один конкретный первый шаг", "hack_ru": "мой лайфхак: как запомнить эту тему, 1–2 предложения",
 "learning": [{"item": "правило", "kind": "grammar", "rule": "ТОЧНОЕ название из rules объяснения", "strategy": "grammar_contrast|mnemonic|context", "thought": "как запоминаешь, 1–2 предложения", "confidence_after": 0.0}],
 "reply_de": "короткая реплика по-немецки, 1 предложение, только известные слова", "reply_used": [{"surface": "...", "lemma": "..."}], "reply_gloss_ru": "..."}`;
  const TOPIC_HINT = /^\s*(макс[,\s]+)?(объясни|расскажи\s+(про|о|об)|что\s+такое|как\s+(строить|использовать|образовать|употреблять|пользоваться)|в\s+чём\s+разница|тема\s*:|помоги\s+(понять|разобраться)|разберём?\s+тему)/i;
  const isTopicAsk = msg => TOPIC_HINT.test(msg) && !/https?:\/\//.test(msg);

  async function topicTurn(msg) {
    const topic = msg.replace(TOPIC_HINT, '').replace(/^[\s:,—-]+/, '').trim() || msg;
    const known = Object.keys(state.grammar).map(r => `- ${r} (у нас сейчас ${geff(r).toFixed(2)})`).join('\n');
    const ex = await askJson(TOPIC_EXPLAIN_SYSTEM, [{ role: 'user', content: `ТЕМА: ${topic}\n\nЧТО УЧЕНИК УЖЕ ЗНАЕТ (правила):\n${known}` }]);
    const rules = (ex.rules || []).slice(0, 4).map(name => { const c = constructStatus(name); return { name, status: c.status, g: c.g, key: c.key }; });
    const max = await askJson(TOPIC_MAX_SYSTEM, [{ role: 'user', content:
      `${notebookText()}\n\n${recentText()}ОБЪЯСНЕНИЕ, КОТОРОЕ ТЫ ПРОЧИТАЛ:\n${JSON.stringify(ex)}\n\nСВЯЗАННЫЕ ПРАВИЛА В НАШЕЙ ПАМЯТИ:\n${rules.map(r => `  ${r.name}: ${{ known: 'знаем', fading: 'подзабыли', weak: 'знаем слабо', unknown: 'не знаем', new: 'новое для нас' }[r.status]}`).join('\n') || '  —'}\n\nСООБЩЕНИЕ ДРУГА:\n${msg}` }]);
    const okDe = !(max.reply_de || '').trim() || !violations({ reply_de: max.reply_de, reply_used: max.reply_used }, new Set()).length;
    if (!okDe) { max.reply_de = ''; max.reply_used = []; }
    const now = Date.now();
    for (const r of rules) {   // новые правила темы появляются в общей книжке; знакомые встретились — это повторение
      if (r.key) { touchRule(r.key, 0.5); continue; }
      state.grammar[r.name] = 0.1; state.gmeta[r.name] = { last: now, stab: 5 };
      const it = (max.learning || []).find(l => l.rule === r.name);
      state.log.push({ item: r.name, strategy: (it && it.strategy) || 'grammar_contrast', thought: (it && it.thought) || (ex.compare_ru || ''), t: now });
    }
    state.topic = { t: now, title: ex.title || topic, rules: rules.map(r => r.key || r.name) };   // фокус ближайших заданий
    state.turns++;
    const reply = { comprehension: [], learning: [], lookups: [], reply_de: max.reply_de || '', reply_used: max.reply_used || [], reply_gloss_ru: max.reply_gloss_ru || '', review_request: null,
      topic: { title: ex.title || topic, level: ex.level || '', summary_ru: ex.summary_ru || '', steps_ru: ex.steps_ru || [], pattern: ex.pattern || '', examples: (ex.examples || []).slice(0, 4),
        compare_ru: ex.compare_ru || '', pitfalls_ru: ex.pitfalls_ru || [], quiz: (ex.quiz || []).slice(0, 2),
        rules: rules.map(({ name, status, g }) => ({ name, status, g })), max_ru: max.reply_ru || '', start_ru: max.start_ru || '', hack_ru: max.hack_ru || '' } };
    const tokens = annotate(reply, new Set());
    remember(msg, `Объяснил тему «${reply.topic.title}»: ${(max.reply_ru || '').slice(0, 200)}`);
    persist();
    return { reply, tokens, warning: null };
  }

  async function checkTurn(msg) {   // явная просьба «проверь моё предложение»
    const text = msg.replace(/^\s*(макс[,\s]+)?проверь(те)?(\s+(мо[её]|это|пожалуйста))*\s*(предложение)?\s*[:,—-]?\s*/i, '').trim() || msg;
    const j = await askJson(FRIEND_CHECK_SYSTEM, [{ role: 'user', content: text.slice(0, 800) }]);
    const errs = (j.errors || []).filter(e => e && e.wrong && e.right && e.wrong !== e.right).slice(0, 4);
    for (const e of errs) { if (e.rule) touchRule(e.rule, 0.15); }
    if (errs.length) state.mistakes = [...(state.mistakes || []), ...errs.map(e => ({ t: Date.now(), kind: 'free', wrong: e.wrong, right: e.right, why: e.why || '', causes: e.rule ? [e.rule] : [] }))].slice(-20);
    state.turns++;
    const reply = { comprehension: [], learning: [], lookups: [], reply_de: '', reply_used: [], reply_gloss_ru: '', review_request: null, friend_note: errs, check: { text, ok: !errs.length } };
    remember(msg, errs.length ? `Проверил: нашёл ${errs.length} ошибк. ` + errs.map(e => `${e.wrong} → ${e.right}`).join('; ') : 'Проверил: ошибок не нашёл.');
    persist();
    return { reply, tokens: [], warning: null };
  }
  // ---------- книга: загрузили файл — работаем по фрагментам вместе ----------
  // Файл разбирается прямо в браузере и хранится на этом устройстве (IndexedDB). В облаке и на других устройствах — только
  // место в книге (state.book): ту же книгу достаточно загрузить заново, и мы продолжим с того же фрагмента.
  const BOOK_DB = 'learner_books_v1', PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    PDFJS_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js', JSZIP = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
  const idbOpen = () => new Promise((res, rej) => { const r = indexedDB.open(BOOK_DB, 1); r.onupgradeneeded = () => r.result.createObjectStore('books', { keyPath: 'id' }); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  async function idbDo(mode, fn) {
    const db = await idbOpen();
    return new Promise((res, rej) => { const tx = db.transaction('books', mode), req = fn(tx.objectStore('books')); tx.oncomplete = () => res(req && req.result); tx.onerror = () => rej(tx.error); });
  }
  const bookPut = b => idbDo('readwrite', s => s.put(b)), bookGet = id => idbDo('readonly', s => s.get(id)), bookDel = id => idbDo('readwrite', s => s.delete(id));
  const scripts = {};
  const loadScript = url => scripts[url] || (scripts[url] = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = url; s.onload = res; s.onerror = () => { delete scripts[url]; rej(new Error('Не удалось загрузить библиотеку для чтения файла (нет сети?)')); }; document.head.append(s);
  }));
  function decodeBytes(buf, hint) {
    if (hint) { try { return new TextDecoder(hint).decode(buf); } catch { /* неизвестная кодировка — пробуем ниже */ } }
    try { return new TextDecoder('utf-8', { fatal: true }).decode(buf); } catch { return new TextDecoder('windows-1252').decode(buf); }
  }
  const blockText = el => {   // текст XHTML с переводами строк между абзацами
    const c = el.cloneNode(true);
    c.querySelectorAll('script,style').forEach(n => n.remove());
    c.querySelectorAll('p,div,h1,h2,h3,h4,h5,h6,li,br,tr').forEach(n => n.append('\n'));
    return (c.textContent || '').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n\n').trim();
  };
  async function pdfSections(buf, progress) {
    await loadScript(PDFJS); window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
    const doc = await window.pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise, out = [];
    for (let p = 1; p <= doc.numPages; p++) {
      const tc = await (await doc.getPage(p)).getTextContent();
      let text = tc.items.map(i => i.str + (i.hasEOL ? ' ' : '')).join(' ').replace(/\s+/g, ' ');
      text = text.replace(/(\p{L})-\s+(\p{Ll})/gu, '$1$2').trim();   // перенос слова «Aus- bildung» -> «Ausbildung»
      if (text) out.push({ title: `стр. ${p}`, text });
      if (progress && p % 5 === 0) progress(`Читаю страницы: ${p} из ${doc.numPages}…`);
    }
    return { sections: out, title: null };
  }
  async function epubSections(buf) {
    await loadScript(JSZIP);
    const zip = await window.JSZip.loadAsync(buf), parse = (s, t = 'application/xml') => new DOMParser().parseFromString(s, t);
    const opfPath = parse(await zip.file('META-INF/container.xml').async('string')).querySelector('rootfile').getAttribute('full-path');
    const opf = parse(await zip.file(opfPath).async('string')), base = opfPath.includes('/') ? opfPath.replace(/[^/]+$/, '') : '';
    const manifest = {}; opf.querySelectorAll('manifest > item').forEach(i => { manifest[i.getAttribute('id')] = i.getAttribute('href'); });
    const out = []; let n = 0;
    for (const ref of opf.querySelectorAll('spine > itemref')) {
      const href = manifest[ref.getAttribute('idref')]; if (!href) continue;
      const f = zip.file(decodeURIComponent(base + href)) || zip.file(base + href); if (!f) continue;
      const doc = parse(await f.async('string'), 'application/xhtml+xml'); const body = doc.querySelector('body') || doc.documentElement;
      const text = blockText(body); if (text.length < 40) continue;
      const h = body.querySelector('h1,h2,h3'); out.push({ title: (h && h.textContent.trim().slice(0, 60)) || `часть ${++n}`, text });
    }
    const t = opf.querySelector('metadata > *|title, title'); return { sections: out, title: t ? t.textContent.trim() : null };
  }
  function fb2Sections(xml) {
    const doc = new DOMParser().parseFromString(xml, 'application/xml'), out = [];
    const title = (doc.querySelector('book-title') || {}).textContent;
    const walk = (sec, path) => {
      const t = ((sec.querySelector(':scope > title') || {}).textContent || '').replace(/\s+/g, ' ').trim() || path;
      const paras = [...sec.children].filter(c => ['p', 'epigraph', 'poem', 'cite', 'subtitle'].includes(c.localName)).map(c => c.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean);
      if (paras.length) out.push({ title: t.slice(0, 60), text: paras.join('\n\n') });
      [...sec.children].filter(c => c.localName === 'section').forEach(s => walk(s, t));
    };
    doc.querySelectorAll('body > section').forEach(s => walk(s, ''));
    if (!out.length) doc.querySelectorAll('body').forEach(b => { const t = b.textContent.replace(/\s+/g, ' ').trim(); if (t) out.push({ title: 'текст', text: t }); });
    return { sections: out, title: title ? title.trim() : null };
  }
  function chunkify(sections, target = 2200) {   // фрагменты ~2200 символов, по границам абзацев и предложений
    const chunks = []; let buf = '', first = null, last = null;
    const flush = () => { if (buf.trim().length > 60) chunks.push({ i: chunks.length, title: first === last ? first : `${first} – ${last}`, text: buf.trim() }); buf = ''; first = last = null; };
    for (const s of sections) {
      const paras = s.text.split(/\n+/).map(x => x.replace(/\s+/g, ' ').trim()).filter(Boolean);
      for (const p of paras) {
        const parts = p.length > target * 1.2 ? (p.match(/[^.!?…]+[.!?…]+["»“”)]*\s*|[^.!?…]+$/g) || [p]) : [p];
        for (const q of parts) {
          if (buf.length + q.length > target && buf.length > 500) flush();
          if (!first) first = s.title; last = s.title; buf += q.trim() + '\n';
        }
      }
    }
    flush(); return chunks;
  }
  async function parseBook(file, progress) {
    const buf = await file.arrayBuffer(), name = file.name.toLowerCase();
    let r;
    if (name.endsWith('.pdf')) r = await pdfSections(buf, progress);
    else if (name.endsWith('.epub')) r = await epubSections(buf);
    else if (name.endsWith('.fb2')) { const head = decodeBytes(buf.slice(0, 200), 'latin1'); const enc = (head.match(/encoding=["']([\w-]+)["']/i) || [])[1]; r = fb2Sections(decodeBytes(buf, enc)); }
    else if (name.endsWith('.zip')) {   // fb2.zip
      await loadScript(JSZIP); const zip = await window.JSZip.loadAsync(buf), f = Object.values(zip.files).find(x => /\.fb2$/i.test(x.name));
      if (!f) throw new Error('В архиве не нашлось файла .fb2'); const b = await f.async('arraybuffer'); const head = decodeBytes(b.slice(0, 200), 'latin1');
      r = fb2Sections(decodeBytes(b, (head.match(/encoding=["']([\w-]+)["']/i) || [])[1]));
    } else { const t = decodeBytes(buf); r = { sections: [{ title: 'текст', text: t }], title: null }; }
    const chunks = chunkify(r.sections);
    if (chunks.length === 0 || chunks.reduce((a, c) => a + c.text.length, 0) < 300)
      throw new Error('В файле почти нет текста. Если это PDF-скан (картинки страниц), его нельзя прочитать без распознавания; нужен PDF с текстом, EPUB, FB2 или TXT.');
    return { title: (r.title || file.name.replace(/\.[^.]+$/, '')).slice(0, 80), chunks };
  }
  const bookApi = {
    info: async () => { await ready; const b = state.book; if (!b) return null; let local = false; try { local = !!(await bookGet(b.id)); } catch { /* IndexedDB недоступен */ } return { ...b, local }; },
    load: async (file, progress) => {
      await ready;
      const id = `${file.name}|${file.size}`, { title, chunks } = await parseBook(file, progress);
      await bookPut({ id, title, chunks, added: Date.now() });
      const old = state.book && state.book.id === id ? state.book : null;   // та же книга — продолжаем с сохранённого места
      state.book = { id, title, total: chunks.length, pos: old ? Math.min(old.pos, chunks.length - 1) : 0, read: old ? old.read : [], t: Date.now() };
      persist(); return { ...state.book, local: true };
    },
    chunk: async i => { const b = state.book && await bookGet(state.book.id); if (!b) throw new Error('Файл этой книги не загружен на этом устройстве. Загрузи ту же книгу ещё раз: место в книге сохранено.'); return b.chunks[Math.max(0, Math.min(b.chunks.length - 1, i))]; },
    setPos: async i => { if (!state.book) return null; state.book.pos = Math.max(0, Math.min(state.book.total - 1, i | 0)); state.book.t = Date.now(); persist(); return { ...state.book }; },
    markRead: async (i, advance) => {
      if (!state.book) return null;
      if (!state.book.read.includes(i)) state.book.read.push(i);
      if (advance) state.book.pos = Math.min(state.book.total - 1, i + 1);
      state.book.t = Date.now(); persist(); return { ...state.book };
    },
    find: async q => {
      const b = state.book && await bookGet(state.book.id); if (!b) return [];
      const terms = q.toLowerCase().split(/[^\p{L}]+/u).filter(w => w.length >= 3);
      if (!terms.length) return [];
      return b.chunks.map(c => { const low = c.text.toLowerCase(); const score = terms.reduce((a, t) => a + (low.split(t).length - 1), 0); const at = low.indexOf(terms[0]);
        return { i: c.i, title: c.title, score, snippet: at >= 0 ? c.text.slice(Math.max(0, at - 50), at + 110).replace(/\s+/g, ' ') : '' }; })
        .filter(x => x.score > 0).sort((a, b2) => b2.score - a.score).slice(0, 6);
    },
    remove: async () => { if (state.book) { try { await bookDel(state.book.id); } catch { /* ничего */ } } state.book = null; persist(); return true; },
  };
  // ---------- курс по учебнику: Макс ведёт по урокам шаг за шагом ----------
  // Структура определяется по книге (заголовки «Lektion/Kapitel…», главы EPUB/FB2, иначе равные части), названия и темы уроков
  // даёт один пакетный запрос к модели. Шаги урока: прочитать до 3 фрагментов → грамматика → 2 упражнения из книги → 3 проверки
  // усвоения. Урок засчитывается, когда пройдены все шаги; слабое усвоение (<50%) возвращает его темы в фокус заданий.
  const COURSE_HEAD = /^\s*(Lektion|Kapitel|Einheit|Thema|Modul|Unit|Lesson|Teil|Урок|Глава|Тема)\s*\d+/im;
  const GRAM_MARK = /\b(Regel|Grammatik|Merke|Kasus|Dativ|Akkusativ|Nominativ|Genitiv|Perfekt|Präteritum|Konjunktiv|Passiv|Nebensatz|Adjektivendung|Artikel|Verb|Präposition|Futur|Relativsatz|Imperativ)\w*/gi;
  const EX_MARK = /(Übung|Aufgabe|Ergänze|Ergänzen|Setze|Bilde|Kreuze|Ordne|Schreibe|Antworte|упражнени)/gi;
  const countRe = (re, s) => (s.match(re) || []).length;
  const COURSE_OUTLINE_SYSTEM = `Ты нейтральный составитель оглавления учебника немецкого (не персонаж). Тебе дают выдержки из начала каждого раздела. Для КАЖДОГО раздела верни по-русски короткое название и главные темы. Ничего не выдумывай: опирайся на выдержку. Верни ТОЛЬКО JSON-массив:
[{"i": 0, "title": "короткое название раздела по-русски (до 6 слов)", "grammar": ["короткие названия грамматических тем раздела, если есть"], "vocab": "тема лексики в 1–3 словах или пустая строка"}]`;
  function detectUnits(chunks) {
    const starts = [0];
    chunks.forEach((c, i) => {
      if (i === 0) return;
      const sectionChange = c.title && !/^стр\./.test(c.title) && c.title.split(' – ')[0] !== chunks[i - 1].title.split(' – ').pop();
      if (COURSE_HEAD.test(c.text) || sectionChange) starts.push(i);   // заголовок «Lektion N» в начале любой строки фрагмента (флаг m в регулярке)
    });
    let units = starts.map((s, k) => ({ from: s, to: (starts[k + 1] ?? chunks.length) - 1 }));
    if (units.length < 2 || units.length > 40) {   // нет различимых разделов или их слишком много — равные части
      const n = Math.max(2, Math.min(units.length < 2 ? Math.ceil(chunks.length / 8) : 30, chunks.length));
      const size = Math.ceil(chunks.length / n);
      units = Array.from({ length: Math.ceil(chunks.length / size) }, (_, k) => ({ from: k * size, to: Math.min(chunks.length - 1, (k + 1) * size - 1) }));
    }
    return units.map((u, i) => ({ ...u, i }));
  }
  function unitSteps(u, chunks) {
    const idx = Array.from({ length: u.to - u.from + 1 }, (_, k) => u.from + k);
    const gram = [...idx].sort((a, b) => countRe(GRAM_MARK, chunks[b].text) - countRe(GRAM_MARK, chunks[a].text))[0];
    let ex = idx.filter(i => countRe(EX_MARK, chunks[i].text) > 0).sort((a, b) => countRe(EX_MARK, chunks[b].text) - countRe(EX_MARK, chunks[a].text)).slice(0, 2);
    if (!ex.length) ex = idx.slice(-2);
    return [...idx.slice(0, 3).map(i => ({ kind: 'read', chunk: i, done: false })), { kind: 'grammar', chunk: gram, done: false },
      ...ex.map(i => ({ kind: 'task', chunk: i, done: false })), ...[0, 1, 2].map(() => ({ kind: 'check', done: false }))];
  }
  const STEP_RU = { read: 'читаем вместе', grammar: 'разбираем грамматику', task: 'упражнение из книги', check: 'проверка усвоения' };
  function courseBanner(ref) {
    const c = state.course, u = c && c.units[ref.u]; if (!u || !u.steps) return null;
    return { no: u.i + 1, total: c.units.length, title: u.title, step: ref.s + 1, steps: u.steps.length, kind: u.steps[ref.s] && u.steps[ref.s].kind,
      unit_done: u.status === 'done', mastery: u.mastery ?? null, next_unit: c.units[c.cur] && c.units[c.cur].status !== 'done' ? c.units[c.cur].title : null,
      finished: c.units.every(x => x.status === 'done') };
  }
  function courseStepDone(ref, ok) {
    const c = state.course, u = c && c.units[ref.u]; if (!u || !u.steps || !u.steps[ref.s] || u.steps[ref.s].done) return;
    u.steps[ref.s].done = true;
    if (u.steps[ref.s].kind === 'check') { u.check.asked++; if (ok) u.check.ok++; }
    if (u.steps.every(s => s.done)) {
      u.status = 'done'; u.mastery = u.check.asked ? Math.round(u.check.ok / u.check.asked * 100) / 100 : null;
      c.cur = Math.min(c.units.length - 1, ref.u + 1);
      if (u.mastery !== null && u.mastery < 0.5 && (u.grammar || []).length)   // усвоили слабо — темы урока возвращаются в фокус заданий
        state.topic = { t: Date.now(), title: u.title, rules: u.grammar.filter(g => state.grammar[g] !== undefined) };
    }
    c.t = Date.now();
  }
  const courseApi = {
    info: async () => {
      await ready; const c = state.course; if (!c || !state.book || c.bookId !== state.book.id) return null;
      const u = c.units[c.cur], s = u && u.steps ? u.steps.findIndex(x => !x.done) : 0;
      return { units: c.units.map(x => ({ i: x.i, title: x.title, status: x.status, grammar: x.grammar, vocab: x.vocab, mastery: x.mastery ?? null, steps_done: (x.steps || []).filter(y => y.done).length, steps: (x.steps || []).length })),
        cur: c.cur, finished: c.units.every(x => x.status === 'done'),
        next: u ? `Урок ${u.i + 1} «${u.title}», ${u.steps ? STEP_RU[u.steps[Math.max(0, s)].kind] : 'начинаем урок'}` : null };
    },
    build: async progress => {
      await ready; const b = state.book && await bookGet(state.book.id);
      if (!b) throw new Error('Файл книги не загружен на этом устройстве. Загрузи книгу, и тогда составим курс.');
      const units = detectUnits(b.chunks);
      for (let k = 0; k < units.length; k += 12) {
        const part = units.slice(k, k + 12);
        if (progress) progress(`Составляю оглавление: ${Math.min(k + 12, units.length)} из ${units.length}…`);
        let out = [];
        try { out = await askJson(COURSE_OUTLINE_SYSTEM, [{ role: 'user', content: part.map(u => `#${u.i}: ${b.chunks[u.from].text.slice(0, 700)}`).join('\n\n') }], true); }
        catch (e) { if (/API|ключ/.test(e.message)) throw e; }
        const by = Object.fromEntries((out || []).map(x => [x.i, x]));
        part.forEach(u => { const o = by[u.i] || {}; u.title = (o.title || b.chunks[u.from].title || `Часть ${u.i + 1}`).slice(0, 70); u.grammar = (o.grammar || []).slice(0, 5); u.vocab = o.vocab || ''; });
      }
      units.forEach(u => { u.status = 'todo'; u.steps = null; u.check = { asked: 0, ok: 0 }; });
      state.course = { bookId: state.book.id, t: Date.now(), cur: 0, units };
      persist(); return courseApi.info();
    },
    next: async () => {
      await ready; const c = state.course; if (!c) throw new Error('Курс ещё не составлен.');
      const b = await bookGet(state.book.id); if (!b) throw new Error('Файл книги не загружен на этом устройстве.');
      let u = c.units[c.cur];
      while (u && u.status === 'done' && c.cur < c.units.length - 1) u = c.units[++c.cur];
      if (!u || u.status === 'done') return { finished: true };
      if (!u.steps) { u.steps = unitSteps(u, b.chunks); u.status = 'doing'; c.t = Date.now(); persist(); }
      const si = u.steps.findIndex(x => !x.done), s = u.steps[si];
      const head = `🗺 Урок ${u.i + 1}/${c.units.length} «${u.title}» · шаг ${si + 1}/${u.steps.length}: ${STEP_RU[s.kind]}`;
      const ref = { u: u.i, s: si };
      if (s.kind === 'check') return { mode: 'task', label: head, extra: { course: ref } };
      const ch = b.chunks[s.chunk];
      return { mode: s.kind === 'task' ? 'task' : s.kind, label: head, extra: { text: ch.text, title: ch.title, chunk: s.chunk, course: ref } };
    },
    jump: async i => { await ready; if (state.course) { state.course.cur = Math.max(0, Math.min(state.course.units.length - 1, i | 0)); state.course.t = Date.now(); persist(); } return courseApi.info(); },
    reset: async () => { state.course = null; persist(); return true; },
  };
  const nudge = () => {
    const t = state.task;
    if (t && !t.done) return `Ты не ответил на моё задание 🙂 Жми на него выше — или попроси другое (🎯).`;
    if (!t || Date.now() - t.t > 10 * 3600 * 1000) return 'У меня есть задание для нас обоих. Хочешь? Жми 🎯';
    return null;
  };

  const snapshot = () => {
    const grammar = Object.fromEntries(Object.keys(state.grammar).map(r => [r, Math.round(geff(r) * 100) / 100]));
    return {
      vocab: Object.entries(state.vocab).map(([lemma, v]) => ({ lemma, ru: v.ru, uk: v.uk,
        strength: Math.round(eff(v) * 100) / 100, state: wordState(v), seen: v.seen, how: v.how || '' }))
        .sort((a, b) => a.strength - b.strength),
      grammar, grammar_fading: Object.keys(grammar).filter(r => state.grammar[r] >= THRESHOLD && grammar[r] < THRESHOLD),
      log: state.log.slice(-30), threshold: THRESHOLD, stats: state.stats || { tasks: 0, ok: 0, partly: 0 },
    };
  };
  const publicSettings = () => ({ provider: settings.provider, base_url: settings.base_url, model: settings.model,
    has_key: !!settings.api_key, effort: settings.effort, cloud: !!CS, cloud_key: settings.cloud_key !== false, web_search: settings.web_search !== false, friend_checks: settings.friend_checks !== false, has_tg: !!settings.tg_token, tg_chat: settings.tg_chat, error: settings.api_key ? null : 'Не задан API-ключ. Откройте ⚙ Настройки.', mock: false });

  window.api = {
    web: true, version: APP_VERSION,
    state: async () => { await ready; return snapshot(); },
    reset: async () => {
      await ready; const ep = (state.epoch | 0) + 1, fe = (state.fepoch | 0) + 1;
      state = newState(); state.epoch = ep; state.fepoch = fe; history = [];
      feed = []; save(LS_FEED, feed);   // сброс памяти — новая «жизнь»: старая переписка тоже уходит, на всех устройствах
      persist(); return snapshot();
    },
    nudge: async () => { await ready; return nudge(); },
    pending: async () => { await ready; return !!(state.task && !state.task.done); },
    skipTask: async () => { await ready; if (state.task) { state.task.done = true; persist(); } return true; },
    feed: async () => { await ready; return feed.filter(i => (i.e | 0) === (state.fepoch | 0)); },
    clearFeed: async () => { feed = []; save(LS_FEED, feed); if (CS) { clearTimeout(syncTimer); syncTimer = setTimeout(queueSync, 300); } return true; },
    book: bookApi, course: courseApi,
    chat: async (msg, mode, extra) => {
      await ready; const r = await turn(msg, mode, extra);
      if (extra && extra.course && (mode === 'read' || mode === 'grammar')) {   // чтение и грамматика засчитываются сразу, упражнения — после ответа
        courseStepDone(extra.course, true); r.reply.course = courseBanner(extra.course); persist();
      }
      const d = { ...r, state: snapshot() };
      d.ids = feedAdd(msg, r);   // переписка и карточка результата сохраняются
      return d;
    },
    skip: async days => { await ready; skipDays(Math.max(0, Math.min(3650, +days || 0))); state.epoch = (state.epoch | 0) + 1; persist(); return snapshot(); },
    syncStatus: () => ({ ...syncInfo }),
    syncNow: async () => { await queueSync(); return { ...syncInfo }; },
    exportState: async () => { await ready; return JSON.stringify(state); },
    importState: async json => {   // полная резервная копия: заменяет прогресс (поколение +1, чтобы это дошло до других устройств)
      await ready;
      const s = JSON.parse(json);
      if (!s || typeof s.vocab !== 'object' || typeof s.grammar !== 'object') throw new Error('Это не файл резервной копии ученика');
      const ep = Math.max(state.epoch | 0, s.epoch | 0) + 1, fe = state.fepoch | 0;
      state = migrate(s); state.epoch = ep; state.fepoch = fe; history = []; persist();   // переписка при загрузке копии остаётся
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
      if ('web_search' in o) settings.web_search = !!o.web_search;
      if ('friend_checks' in o) settings.friend_checks = !!o.friend_checks;
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
