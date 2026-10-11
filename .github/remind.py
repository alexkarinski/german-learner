# Напоминание от Макса в Telegram. Запускается из GitHub Actions (.github/workflows/remind.yml).
# Никаких учебных данных: только дружеский текст, «фраза дня» (B1–C1) и кнопка, открывающая приложение.
import datetime
import json
import os
import random
import urllib.error
import urllib.request

TOKEN, CHAT, APP = os.environ.get('TG_TOKEN', '').strip(), os.environ.get('TG_CHAT', '').strip(), os.environ.get('APP_URL', '').strip()
if not TOKEN or not CHAT:
    raise SystemExit('Добавьте секреты TG_TOKEN и TG_CHAT: Settings → Secrets and variables → Actions')


def tg(method, body):
    """Вызов Bot API; при ошибке возвращает ответ Telegram с описанием (токен в лог не попадает)."""
    req = urllib.request.Request(f'https://api.telegram.org/bot{TOKEN}/{method}', data=json.dumps(body).encode(),
                                 headers={'Content-Type': 'application/json'})
    try:
        return json.load(urllib.request.urlopen(req, timeout=20))
    except urllib.error.HTTPError as e:
        try:
            return json.loads(e.read().decode())
        except Exception:
            return {'ok': False, 'error_code': e.code, 'description': str(e.reason)}


# --- профиль бота: кнопка меню открывает приложение, понятное описание (идемпотентно, каждый запуск) ---
me = tg('getMe', {})
print('бот:', me.get('result', {}).get('username') if me.get('ok') else me)
if APP:
    r = tg('setChatMenuButton', {'chat_id': int(CHAT) if CHAT.lstrip('-').isdigit() else CHAT,
                                 'menu_button': {'type': 'web_app', 'text': 'Макс', 'web_app': {'url': APP}}})
    print('кнопка меню:', r.get('ok'), r.get('description', ''))
tg('setMyShortDescription', {'short_description': 'Макс — друг, который учит немецкий вместе с тобой: задания, разборы, повторение до C1.', 'language_code': 'ru'})
tg('setMyDescription', {'description': 'Привет! Я Макс, тоже учу немецкий. Вместе разбираем темы и тексты, делаем задания, пока оба не выучим, и повторяем, чтобы не забывать. Нажми «Макс» внизу, чтобы открыть приложение.', 'language_code': 'ru'})

# --- фраза дня: полезные обороты B1–C1 (по дню года, чтобы не повторялись подряд) ---
PHRASES = [
    ('Es kommt darauf an.', 'Это зависит от обстоятельств.', 'B1'),
    ('Ich bin davon überzeugt, dass …', 'Я убеждён, что …', 'B2'),
    ('Im Großen und Ganzen', 'В общем и целом', 'B2'),
    ('Das liegt auf der Hand.', 'Это очевидно.', 'B2'),
    ('Ich gehe davon aus, dass …', 'Я исхожу из того, что …', 'B2'),
    ('Unter diesen Umständen', 'При этих обстоятельствах', 'B2'),
    ('Es lässt sich nicht leugnen, dass …', 'Нельзя отрицать, что …', 'C1'),
    ('Angesichts der Tatsache, dass …', 'Ввиду того, что …', 'C1'),
    ('Das ist nicht von der Hand zu weisen.', 'С этим не поспоришь.', 'C1'),
    ('Etwas in Kauf nehmen', 'Мириться с чем-то (как с издержкой)', 'C1'),
    ('Zur Sprache bringen', 'Поднять (тему), заговорить о чём-то', 'C1'),
    ('Ich hätte nicht gedacht, dass …', 'Я бы не подумал, что …', 'B2'),
    ('Wenn ich du wäre, würde ich …', 'На твоём месте я бы …', 'B1'),
    ('Je mehr man übt, desto leichter wird es.', 'Чем больше практикуешься, тем легче.', 'B2'),
    ('Sowohl … als auch …', 'Как …, так и …', 'B2'),
    ('Es handelt sich um …', 'Речь идёт о …', 'B2'),
    ('Im Hinblick auf …', 'Принимая во внимание …', 'C1'),
    ('Das hängt davon ab, ob …', 'Это зависит от того, …ли', 'B1'),
    ('Ich habe den Eindruck, dass …', 'У меня впечатление, что …', 'B2'),
    ('Nicht nur …, sondern auch …', 'Не только …, но и …', 'B1'),
    ('Er soll sehr reich sein.', 'Говорят, он очень богат. (sollen = «говорят»)', 'C1'),
    ('Sie dürfte schon zu Hause sein.', 'Она, наверное, уже дома. (dürfte = предположение)', 'C1'),
    ('Das Problem ist leicht zu lösen.', 'Проблему легко решить. (sein + zu)', 'C1'),
    ('Der Vertrag lässt sich kündigen.', 'Договор можно расторгнуть. (sich lassen)', 'C1'),
    ('Er tut so, als ob er nichts wüsste.', 'Он делает вид, будто ничего не знает.', 'C1'),
    ('Zwar …, aber …', 'Хотя и …, но …', 'B2'),
    ('Infolgedessen', 'Вследствие этого', 'C1'),
    ('Meines Erachtens', 'По моему мнению', 'C1'),
    ('Es ist mir wichtig, dass …', 'Мне важно, чтобы …', 'B1'),
    ('Ich freue mich darauf.', 'Я жду этого с радостью. (darauf — на будущее)', 'B1'),
]
day = datetime.date.today().timetuple().tm_yday
de, ru, lvl = PHRASES[day % len(PHRASES)]
OPEN = random.choice([
    'Привет! Это Макс 🙂 Давай повторим немного, пока ничего не вылетело из головы?',
    'Hallo! 👋 Пора освежить то, что мы учили. Заглянешь на пару заданий?',
    'Эй, бро 😄 Немецкий сам себя не повторит. Пять минут — и мы снова в форме.',
    'Guten Abend! 🌙 Я уже открыл свою тетрадку. Повторим вместе?',
    'Привет! Я тут вспоминал наши слова и понял, что пара уже ускользает 😅 Спасём их?',
])
text = f'{OPEN}\n\n💬 Фраза дня ({lvl}):\n{de}\n— {ru}\n\nПопробуй придумать с ней своё предложение и пришли мне в приложении — проверю 😉'

# --- отправка: кнопка-приложение → обычная ссылка → просто текст (что-нибудь да дойдёт) ---
attempts = []
if APP:
    attempts.append({'inline_keyboard': [[{'text': '🔁 Повторить с Максом', 'web_app': {'url': APP}}]]})
    attempts.append({'inline_keyboard': [[{'text': '🔁 Открыть Макса', 'url': APP}]]})
attempts.append(None)
for markup in attempts:
    body = {'chat_id': CHAT, 'text': text}
    if markup:
        body['reply_markup'] = markup
    r = tg('sendMessage', body)
    if r.get('ok'):
        print('отправлено', 'с кнопкой' if markup else 'без кнопки')
        break
    print('не получилось:', r.get('error_code'), r.get('description'))
    if 'chat not found' in str(r.get('description', '')).lower() or r.get('error_code') in (401, 403, 404):
        break   # кнопка тут ни при чём — дальше пробовать бессмысленно
else:
    raise SystemExit('Сообщение не отправлено (см. причину выше)')
if not r.get('ok'):
    hint = {401: 'неверный токен в секрете TG_TOKEN', 404: 'неверный токен в секрете TG_TOKEN',
            403: 'бот заблокирован или вы ещё не нажали Start в чате с ботом'}.get(r.get('error_code'),
            'chat not found: откройте чат с ботом и нажмите Start; проверьте TG_CHAT' if 'chat not found' in str(r.get('description', '')).lower() else '')
    raise SystemExit('Сообщение не отправлено. ' + hint)
