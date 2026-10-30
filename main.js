// Gözcü tanıtım sayfası: dil (EN/TR), kaydırınca belirme, giriş bölümündeki canlı demo ve ekran görüntüsünün eğimi.
// Kurulum dosyası, sitenin yayınlandığı herkese açık gozcu-site reposunun en son sürümüne (Releases) eklenir.
const DOWNLOAD_URL = 'https://github.com/jantecreative/gozcu-site/releases/latest/download/Gozcu-Setup.exe';

const TR = {
  'nav.features': 'Özellikler', 'nav.reminders': 'Hatırlatmalar', 'nav.pricing': 'Fiyat', 'nav.privacy': 'Gizlilik', 'nav.faq': 'SSS', 'foot.refunds': 'İade',
  'ss.note': "Kurulum dosyası henüz kod imzalı değil, bu yüzden Windows SmartScreen büyük ihtimalle uyarı verir. <b>Ek bilgi</b>'ye, sonra <b>Yine de çalıştır</b>'a tıkla.",
  'cta.downloadShort': 'İndir', 'cta.download': 'Windows için ücretsiz indir', 'cta.pro': 'Gözcü Pro · tek seferlik 6,99 $', 'cta.buy': "Gözcü Pro'yu satın al",
  'hero.eyebrow': "Windows'ta Claude Code için",
  'hero.title': 'Hangi Claude Code oturumunun seni beklediğini bil.',
  'hero.lede': "Gözcü bütün Claude Code terminallerini tek pencerede çalıştırır, seni bekleyeni yakar ve Claude'un isteklerini telefondan onaylamanı sağlar.",
  'hero.note': 'Kendi Claude aboneliğinle çalışır · Claude ayarlarına dokunmaz · Veriler bilgisayarında kalır',
  'demo.5h': '5 saat', 'demo.taskB': 'Write(colors.ts)', 'demo.done': 'Bitti, sıra sende', 'demo.idle': 'Mesajını bekliyor',
  'demo.askText': 'Claude çalıştırmak istiyor:', 'demo.allow': 'İzin ver', 'demo.deny': 'Reddet', 'demo.phoneDate': 'Perşembe', 'demo.now': 'şimdi',
  'lim.week': 'Haftalık', 'demo.waiting': 'seni bekliyor', 'demo.working': 'Çalışıyor', 'demo.waitingShort': 'Seni bekliyor',
  'strip.1': 'Claude Pro ve Max ile çalışır', 'strip.2': 'Sohbet kabuğu değil, gerçek Claude Code terminali', 'strip.3': 'Claude ayarların olduğu gibi kalır', 'strip.4': 'Türkçe ve İngilizce',
  'feat.title': 'Takılan terminali bulmak için sekme gezmeyi bırak.', 'feat.sub': 'Beş Claude Code oturumunu başında beklemeden yürütmek için gereken her şey.',
  'f1.t': 'Durum tek bakışta', 'f1.d': 'Mavi çalışıyor, kehribar seni bekliyor, yeşil bitti. Seni bekleyen oturum en üste çıkar.',
  'f2.t': 'Ses ve bildirim', 'f2.d': 'Claude izin isteyince ya da işini bitirince anında haber alırsın. Bildirime tıkla, doğrudan o terminale geç.',
  'f3.t': 'Telefondan onayla', 'f3.d': "Masadan uzakta mısın? Claude'un isteğine bildirimden izin ver ya da reddet. Her düğme tek kullanımlık ve yalnızca o istek için.",
  'f4.t': 'Limitini önceden gör', 'f4.d': "Claude'un 5 saatlik ve haftalık limiti başlık çubuğunda; üstelik bu hızla ne zaman dolacağının tahmini.", 'f4.eta': '14:20 civarı dolar',
  'f5.t': 'Token nereye gidiyor, bil', 'f5.d': "Günlere, projelere, saatlere ve modellere göre kullanım raporu; yardımcı ajanlar dahil. Doğrudan Claude'un bilgisayarındaki kayıtlarından.",
  'f6.t': 'Yan yana', 'f6.d': 'Oturumları ızgaraya sürükle, altı terminali birden izle. Bir pencereyi başlığından tutup başka biriyle yer değiştir.',
  'f7.t': 'Terminal başına token ve maliyet', 'f7.d': 'Her terminal kendi token sayısını, API fiyatıyla ne tutacağını ve bağlamın ne kadar dolduğunu gösterir. Pro ya da Max aboneliğinde bu parayı ödemezsin; hangi oturumun ağır olduğunu görmeni sağlar.',
  'f8.t': 'Yazmak yerine konuş', 'f8.d': 'Mikrofon düğmesi Windows sesle yazmayı açar; söylediğin, odaktaki terminale yazılır. Ekran görüntüsünü Ctrl+V ile yapıştır ya da dosyayı terminale bırak.',
  'f9.t': 'Türkçe ya da İngilizce', 'f9.d': "Arayüz, Windows bildirimleri ve telefon bildirimleri seçtiğin dilde gelir; istersen Windows'un diliyle aynı kalır.",
  'demo.listening': 'Dinleniyor…',
  'ex.title': 'Bir de küçük şeyler', 'ex.1': 'Yer lazım olunca oturum listesini daralt (Ctrl+Shift+L)', 'ex.2': 'Seni bekleyen oturuma Ctrl+Shift+B ile atla',
  'ex.3': '"Bitti" ve "bekliyor" için ayrı sesler, ayarlanabilir ses seviyesi', 'ex.4': 'Oturumları duruma göre grupla ya da sabit sırada tut',
  'ex.5': 'Her projede yeni bir konuşma başlat ya da sonuncusuna devam et', 'ex.6': 'Sağ tık seçili metni kopyalar, seçim yoksa yapıştırır',
  'rem.eyebrow': 'Hatırlatmalar · Obsidian ile çalışır', 'rem.title': 'Yapılacakların, terminallerinin yanında.',
  'rem.lede': 'Gözcü Obsidian kasandaki hatırlatma notunu ya da Markdown notlarının durduğu herhangi bir klasörü okur. Başlık çubuğundaki zil, gecikenleri ve bugünküleri sayar.',
  'rem.1': 'Gözcü açılınca geciken ve bugünkü işlerin bir pencerede görünür. Yapacak iş yoksa hiç çıkmaz.',
  'rem.2': 'Sabah bir Windows bildirimiyle özet, akşam hâlâ açık iş varsa bir hatırlatma daha. İstersen ikisi telefonuna da gelir.',
  'rem.3': "<b>Claude'da kaldığın yerler</b>: dünden bu yana her projedeki son isteğin ve en son düzenlenen dosya. Tek tıkla tam o konuşmaya devam edersin.",
  'rem.4': 'Kutuyu işaretleyince Gözcü yalnızca o satırdaki <code>[ ]</code> işaretini <code>[x]</code> yapar. Notlarına başka hiçbir şey yazılmaz.',
  'rem.fmt': '<code>## 2026-10-26</code> gibi tarih başlıklarını, 📅 tarihli işleri ve günlük notlarını okur.',
  'rem.dlg': 'Hatırlatmalar', 'rem.overdue': 'Gecikenler', 'rem.today': 'Bugün', 'rem.claude': "Claude'da kaldığın yerler", 'rem.lastEdit': 'Son düzenlenen', 'rem.resume': 'Devam et',
  'shot.title': 'Bu, uygulamanın kendisi.', 'shot.sub': "Windows 11'in kendi görünümü, Claude Code'un kendi terminali; arada başka bir şey yok.",
  'steps.title': 'Bir dakikada hazır.',
  's1.t': "Gözcü'yü indir", 's1.d': 'Küçük bir Windows kurulum dosyası. İlk kullanım turu Claude Code kurulu mu diye kontrol eder.',
  's2.t': 'Proje klasörlerini ekle', 's2.d': "Gözcü her birinde Claude Code'u kendi hesabınla açar.",
  's3.t': 'İşine dön', 's3.d': 'Gözcü her oturumu izler ve biri seni beklediği an haber verir.',
  'price.title': "Kullanmak ücretsiz. Pro tek seferlik 6,99 $.", 'price.sub': "Abonelik yok. Claude'a zaten para veriyorsun; Gözcü bir aylık fatura daha olmamalı.",
  'free.t': 'Ücretsiz', 'free.1': 'Aynı anda en fazla 4 terminal', 'free.2': 'Durum renkleri, ses, Windows bildirimi', 'free.3': '5 saatlik ve haftalık limit çubukları', 'free.4': '7 günlük kullanım raporu',
  'free.5': 'Terminal başına token ve API fiyatıyla maliyet', 'free.6': 'Obsidian notlarından hatırlatmalar',
  'price.refund': 'Sana uymazsa 14 gün içinde paranın tamamı iade. <a href="#refunds">İade nasıl işliyor</a>',
  'pv.title': 'Kodun ve notların bilgisayarında kalır.', 'pv.sub': "Gözcü'nün hesabı, analitiği ya da kendi sunucusu yok. Neye dokunduğu tam olarak şöyle.",
  'pv.1t': 'Veriler bu bilgisayarda kalır', 'pv.1d': "Kullanım raporu Claude Code'un kendi kayıt dosyalarından, hatırlatmalar not klasöründen okunur. Varsayılan olarak hiçbir şey bilgisayarından çıkmaz; telemetri yok.",
  'pv.2t': "Hook'lar yalnızca 127.0.0.1'e gider", 'pv.2d': "Her oturum durumunu Gözcü'nün içindeki küçük bir sunucuya bildirir. Bu sunucu yalnızca 127.0.0.1'i dinler ve her açılışta yeniden üretilen rastgele bir anahtarı kontrol eder.",
  'pv.3t': 'Claude ayarların olduğu gibi kalır', 'pv.3d': "Gözcü genel Claude ayarlarına, hook'larına ve CLAUDE.md dosyana dokunmaz. Kendi hook'ları ayrı bir ayar dosyasındadır ve yalnızca Gözcü'nün açtığı oturumlara verilir.",
  'pv.4t': 'Telefon bildirimi isteğe bağlı', 'pv.4d': "Sen açmadıkça kapalıdır ve ntfy üzerinden gider (ntfy.sh ya da kendi sunucun). Bildirimde proje, Claude'un kullanmak istediği dosya ya da komut ve son cevabının ilk cümleleri görünür; “Bildirimde ayrıntı göster” kapalıysa yalnızca proje adı ve durum gider. Hatırlatma özeti telefona ancak onu ayrıca açarsan gider.",
  'pv.5t': 'Lisans doğrulaması Polar ile', 'pv.5d': "Pro anahtarı girersen Gözcü, etkinleştirmek için anahtarı ve bilgisayarının adını Polar'a gönderir, sonra günde bir kez kontrol eder. İnternet yoksa Pro 14 gün çalışmaya devam eder. Ücretsiz sürüm Polar'a hiç bağlanmaz.",
  'pv.6t': 'Hiçbir yapay zekâya bağlanmaz', 'pv.6d': "Gözcü bilgisayarında kurulu Claude Code'u kendi hesabınla açar. İsteklerin her zamanki gibi Claude Code'dan Anthropic'e gider, Gözcü'den geçmez.",
  'pv.net': "Gözcü'nün internette bağlandığı yerler yalnızca şunlar: lisans anahtarı girdiysen Polar, telefon bildirimi açıksa ntfy sunucun.",
  'rf.t': 'İade politikası', 'rf.d': 'Gözcü Pro sana uymadıysa satın aldıktan sonraki 14 gün içinde, satın alırken kullandığın adresten <a href="mailto:jantecreative@gmail.com">jantecreative@gmail.com</a> adresine yaz. Ödeme altyapımız Polar üzerinden paranın tamamı, ödediğin yönteme iade edilir. İadeden sonra lisans anahtarı çalışmaz.',
  'pro.once': 'tek seferlik', 'pro.1': 'Sınırsız terminal', 'pro.2': 'Telefona bildirim (istersen yalnızca uzaktayken)', 'pro.3': 'Telefondan İzin ver / Reddet', 'pro.4': 'Limit dolma tahmini', 'pro.5': '90 günlük kullanım raporu', 'pro.6': '3 bilgisayara kadar',
  'pro.fine': 'Güvenli ödeme Polar ile. Lisans anahtarın e-postayla gelir.',
  'faq.title': 'Sorular',
  'q1': 'Gözcü kendi yapay zekâsını mı kullanıyor, token için ücret alıyor mu?', 'a1': "Hayır. Gözcü bilgisayarında kurulu olan Claude Code'u kendi Claude aboneliğinle açar. Kendisi hiçbir yapay zekâya bağlanmaz.",
  'q2': 'Claude Code ayarlarımı değiştiriyor mu?', 'a2': "Hayır. Durum takibi yalnızca Gözcü'nün açtığı oturumlara verilen geçici bir ayar dosyasıyla yapılır. Genel Claude ayarların, hook'ların ve CLAUDE.md olduğu gibi kalır.",
  'q3': 'Telefon bildirimi nasıl çalışıyor? Telefondan onay güvenli mi?', 'a3': "Gözcü ücretsiz ve açık kaynak ntfy uygulamasını kullanır: QR kodu okut, eşleşsin; hesap gerekmez. Bildirim Claude'un ne yapmak istediğini (ör. “index.html dosyasını oluşturmak istiyor”) ve son cevabının başını gösterir; ayrıntıları kapatabilirsin. Telefondan kontrol açıkken İzin ver / Reddet düğmeleri ve bir sonraki mesajını yazabileceğin küçük bir sayfa açan Yanıt yaz düğmesi gelir. Her düğme yalnızca o an için geçerli, tek kullanımlık bir kod taşır; bilgisayardan cevap verirsen geçersiz olur.",
  'q4': 'Mac sürümü var mı?', 'a4': "Henüz yok. Gözcü önce bu tür araçların eksik olduğu Windows için yapıldı. Mac kullanıyorsan aşağıdaki adrese yazarak ilgini bildirebilirsin.",
  'q5': 'Neye ihtiyacım var?', 'a5': "Windows 10 veya 11 ve Claude Pro ya da Max planıyla (veya API erişimiyle) kurulu Claude Code.",
  'q6': 'Kurulumu açınca "Bilgisayarınız Windows tarafından korundu" diyor.', 'a6': "Kurulum dosyası henüz kod imzalı değil; SmartScreen, imzasız ve az indirilmiş uygulamalarda bu uyarıyı gösterir. \"Ek bilgi\"ye, sonra \"Yine de çalıştır\"a tıkla. Kurulum dosyası doğrudan bu sitenin GitHub sürümlerinden gelir.",
  'final.title': 'Nöbeti Gözcü tutsun.', 'final.req': 'Windows 10 / 11 · Claude Code gerekir',
  'foot.legal': "Gözcü bağımsız bir üründür ve Anthropic ile bağlantılı değildir. Claude ve Claude Code, Anthropic'in ticari markalarıdır.",
};

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = id => document.getElementById(id);
// Dil değişince sahnelerin içindeki sabit yazıları yenileyen işlevler.
const relang = [];

// ---------- Dil ----------
const original = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => original.set(el, el.innerHTML));
let lang = 'en';
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = l === 'tr' && TR[k] ? TR[k] : original.get(el);
  });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  // Uygulama iki dilli: ekran görüntüsü de ziyaretçinin dilinde.
  $('shot-img').src = l === 'tr' ? 'assets/screenshot-tr.png' : 'assets/screenshot.png';
  try { localStorage.setItem('gozcu.lang', l); } catch { /* yok say */ }
  relang.forEach(f => f());
  demoText();
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
let saved = null;
try { saved = localStorage.getItem('gozcu.lang'); } catch { /* yok say */ }

// ---------- İndirme ----------
document.querySelectorAll('[data-download]').forEach(a => {
  if (DOWNLOAD_URL) a.href = DOWNLOAD_URL;
});

// ---------- Kaydırınca belirme ----------
const pending = new Set(document.querySelectorAll('.reveal'));
const show = el => { el.classList.add('in'); pending.delete(el); };
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for (const e of entries) if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
}, { threshold: 0.15 }) : null;
pending.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; if (io) io.observe(el); });
// Yedek: gözlemci çalışmazsa (eski tarayıcı, arka plan sekmesi) içerik görünmez kalmasın.
function sweep() {
  for (const el of pending) if (el.getBoundingClientRect().top < innerHeight * 0.92) show(el);
}
addEventListener('scroll', sweep, { passive: true });
addEventListener('load', sweep);
if (!io) pending.forEach(show);

// ---------- Ekran görüntüsü: kaydırdıkça düzleşir ----------
const shot = $('shot');
function tilt() {
  const r = shot.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, 1 - (r.top - innerHeight * 0.15) / (innerHeight * 0.7)));
  shot.style.setProperty('--tilt', `${(1 - p) * 14}deg`);
  shot.style.setProperty('--sc', String(0.92 + p * 0.08));
}
if (!reduce) { addEventListener('scroll', tilt, { passive: true }); tilt(); }

// ---------- Özellik kartlarının sahneleri ----------
// Her sahne [zaman, adım] listesidir; yalnızca kart ekrandayken döner. "Animasyonları azalt" açıksa son kare gösterilir.
const SC = {
  en: {
    wait: 'Waiting for you', done: 'Done, your turn', permA: 'Needs permission: npm test', permB: 'Needs permission: pod install', tok: 'tokens', unit: ['K', 'M', 'B'],
    costA: (n, c) => `· ${n} tokens in this session (subagents and cache reads included) · context ${c}% full`,
    costB: c => `About ${c} at API prices. On a Claude Pro/Max plan you don't pay this; it counts toward your limit.`,
    costBar: (t, c) => `Terminals: ${t} · ≈ ${c} at API prices`,
    voice: 'add a dark mode toggle to the settings page',
    langT: 'storefront is waiting for you', langB: 'Claude is waiting for your reply',
    remO1: '<b>storefront</b> · renew the SSL certificate', remT1: '<b>api</b> · send the October invoice', remT2: '<b>mobile-app</b> · answer the App Store review',
    remWhen: 'yesterday 18:40', remQ: '“Fix the failing checkout tests”', remUpd: 'Updated with 6 additions',
    remNone: 'No Claude session is open for storefront.', remClosed: 'Closed', remWork: 'Working',
    remToastT: '2 things still open', remPrompt: 'Fix the failing checkout tests',
  },
  tr: {
    wait: 'Seni bekliyor', done: 'Bitti, sıra sende', permA: 'İzin istiyor: npm test', permB: 'İzin istiyor: pod install', tok: 'token', unit: [' bin', ' mn', ' mr'],
    costA: (n, c) => `· bu oturumda ${n} token (yardımcı ajanlar ve önbellekten okuma dahil) · bağlam %${c} dolu`,
    costB: c => `API fiyatıyla karşılığı yaklaşık ${c}. Claude Pro/Max aboneliğinde bu para ödenmez; limitine sayılır.`,
    costBar: (t, c) => `Terminaller: ${t} · API karşılığı ≈ ${c}`,
    voice: 'ayarlar sayfasına karanlık mod düğmesi ekle',
    langT: 'storefront seni bekliyor', langB: 'Claude cevabını bekliyor',
    remO1: '<b>storefront</b> · SSL sertifikasını yenile', remT1: '<b>api</b> · ekim faturasını gönder', remT2: '<b>mobile-app</b> · App Store incelemesine cevap yaz',
    remWhen: 'dün 18:40', remQ: '“Ödeme testlerindeki hatayı düzelt”', remUpd: '6 satır eklendi',
    remNone: 'storefront için açık bir Claude oturumu yok.', remClosed: 'Kapalı', remWork: 'Çalışıyor',
    remToastT: 'Hâlâ 2 iş açık', remPrompt: 'Ödeme testlerindeki hatayı düzelt',
  },
};
const S = () => SC[lang];
function scene(id, steps, cycle, still) {
  const el = $(id);
  let timers = [];
  const run = () => { for (const [at, fn] of steps) timers.push(setTimeout(() => fn(el), at)); timers.push(setTimeout(run, cycle)); };
  const stop = () => { timers.forEach(clearTimeout); timers = []; };
  if (reduce) { for (const [, fn] of steps.slice(0, still + 1)) fn(el); return; }
  if (!('IntersectionObserver' in window)) { run(); return; }
  new IntersectionObserver(([e]) => { stop(); if (e.isIntersecting) run(); }, { threshold: 0.3 }).observe(el);
}
const at = (node, x, y) => { node.style.transform = `translate(${x}px, ${y}px)`; };
const center = (node, root) => {
  let x = node.offsetWidth / 2, y = node.offsetHeight / 2;
  for (let n = node; n && n !== root; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
  return [x, y];
};
function count(node, to, ms, suffix = '%') {
  const t0 = performance.now();
  const tick = t => { const p = Math.min(1, (t - t0) / ms), e = 1 - (1 - p) ** 3; node(e * to, suffix); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
function fmtTok(n) {
  const u = S().unit, i = n >= 1e9 ? 2 : n >= 1e6 ? 1 : 0, v = n / [1e3, 1e6, 1e9][i];
  return `${v.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US', { maximumFractionDigits: v < 10 ? 1 : 0 })}${u[i]} ${S().tok}`;
}

// 1 · Durum: kehribara dönen oturum en üste çıkar
{
  const rows = k => document.querySelector(`#sc-status [data-k="${k}"]`);
  const set = (k, st, text) => { const r = rows(k); r.className = `row st-${st}`; r.querySelector('small').textContent = text; };
  const order = (...ks) => ks.forEach((k, i) => { rows(k).style.setProperty('--i', i); rows(k).classList.toggle('lift', i === 0 && rows(k).classList.contains('st-wait')); });
  scene('sc-status', [
    [0, () => { set('a', 'work', 'Edit(cart.ts)'); set('b', 'work', 'Write(colors.ts)'); set('c', 'done', S().done); order('a', 'b', 'c'); }],
    [1600, () => { set('b', 'wait', S().permB); order('b', 'a', 'c'); }],
    [3900, () => { set('b', 'work', 'Bash(pod install)'); order('b', 'a', 'c'); }],
    [5200, () => { set('c', 'wait', S().permA); order('c', 'b', 'a'); }],
    [7400, () => { set('c', 'work', 'Bash(npm test)'); order('c', 'b', 'a'); }],
    [8600, () => { set('b', 'done', S().done); }],
  ], 10000, 3);
}

// 2 · Windows bildirimi: ses, bildirime tıkla, doğru terminal açılır, izin ver
{
  const el = $('sc-notify'), cur = el.querySelector('.cursor');
  const go = (sel, dx = 0, dy = 0) => { const [x, y] = center(el.querySelector(sel), el); at(cur, x + dx, y + dy); };
  scene('sc-notify', [
    [0, () => { el.className = 'desk'; at(cur, el.clientWidth * 0.55, el.clientHeight + 20); }],
    [600, () => el.classList.add('d-toast')],
    [1900, () => go('.wtoast', -20, -6)],
    [2700, () => { cur.classList.add('down'); el.classList.add('d-click'); }],
    [2850, () => { cur.classList.remove('down'); el.classList.remove('d-toast', 'd-click'); el.classList.add('d-open'); }],
    [3500, () => go('.dask span', -2, -2)],
    [4300, () => { cur.classList.add('down'); el.classList.add('d-press'); }],
    [4450, () => { cur.classList.remove('down'); el.classList.remove('d-press'); el.classList.add('d-ok'); }],
    [5200, () => at(cur, el.clientWidth * 0.75, el.clientHeight + 20)],
    [6800, () => el.classList.remove('d-open', 'd-ok')],
  ], 7600, 2);
}

// 3 · Telefondan onay: istek telefona gider, "İzin ver", onay bilgisayara döner
{
  const row = document.querySelector('#sc-remote .row');
  const state = (st, text) => { row.className = `row st-${st}`; row.querySelector('small').textContent = text; };
  scene('sc-remote', [
    [0, el => { el.className = 'remote'; state('wait', S().permA); }],
    [400, el => el.classList.add('r-send')],
    [1400, el => { el.classList.remove('r-send'); el.classList.add('r-notif'); }],
    [2600, el => el.classList.add('r-menu')],
    [3500, el => el.classList.add('r-tap')],
    [3900, el => { el.classList.remove('r-menu'); el.classList.add('r-gone', 'r-back'); }],
    [4900, el => { el.classList.remove('r-back'); state('work', 'Bash(npm test)'); }],
  ], 7600, 3);
}

// 4 · Limit: dolar, bu hızla ne zaman biteceği çizilir
{
  const el = $('sc-limit'), [r5, rw] = el.querySelectorAll('.lrow');
  const bar = r => (v, s) => { r.querySelector('.lfill').style.width = `${v}%`; r.querySelector('.lpct').textContent = `${Math.round(v)}${s}`; };
  scene('sc-limit', [
    [0, () => { el.className = 'lpop'; bar(r5)(0, '%'); bar(rw)(0, '%'); }],
    [300, () => { count(bar(r5), 64, 1900); count(bar(rw), 31, 1900); }],
    [2300, () => el.classList.add('hot', 'proj')],
    [3300, () => el.classList.add('eta')],
    [7600, () => el.classList.add('fade')],
  ], 8200, 3);
  if (reduce) { bar(r5)(64, '%'); bar(rw)(31, '%'); }
}

// 5 · Rapor: aralık değişir, çubuklar yeniden dizilir, üzerine gelinen gün ipucu gösterir
{
  const el = $('sc-report'), bars = [...el.querySelectorAll('.rp-chart i')], tip = el.querySelector('.rp-tip');
  const D = {
    7: { v: [.32, .5, .41, .78, .6, .95, .52, .3, .7, .46, .66, .4], max: 168e6, total: 1.12e9 },
    30: { v: [.55, .62, .8, .7, .9, .58, .66, .74, .5, .85, .6, .72], max: 520e6, total: 4.83e9 },
    90: { v: [.2, .26, .3, .38, .35, .45, .52, .5, .64, .7, .82, .9], max: 1.3e9, total: 9.6e9 },
  };
  let cur = 7;
  const range = r => {
    cur = r; tip.classList.remove('on');
    el.querySelectorAll('.rp-tabs span').forEach(s => s.classList.toggle('on', s.dataset.r === String(r)));
    el.querySelectorAll('.rp-tabs span').forEach(s => { s.textContent = lang === 'tr' ? `${s.dataset.r} gün` : `${s.dataset.r}d`; });
    bars.forEach((b, i) => { b.style.height = `${D[r].v[i] * 100}%`; b.classList.remove('on'); });
    el.querySelector('.rp-total').textContent = fmtTok(D[r].total);
  };
  const hover = i => {
    bars.forEach((b, j) => b.classList.toggle('on', i === j));
    const b = bars[i];
    tip.textContent = fmtTok(D[cur].v[i] * D[cur].max);
    tip.style.left = `${b.offsetLeft + b.offsetWidth / 2}px`; tip.style.bottom = `${Math.min(D[cur].v[i] * 96, 66)}px`;
    tip.classList.add('on');
  };
  scene('sc-report', [
    [0, () => range(7)], [1100, () => hover(5)], [2300, () => hover(8)],
    [3500, () => range(30)], [4500, () => hover(4)],
    [5700, () => range(90)], [6700, () => hover(11)], [8200, () => { tip.classList.remove('on'); bars.forEach(b => b.classList.remove('on')); }],
  ], 9000, 2);
}

// 6 · Izgara: oturumu sürükle, pencere bölünsün; bir terminal izin isteyince kehribar yanar
{
  const el = $('sc-grid'), panes = [...el.querySelectorAll('.gp')], chip = el.querySelector('.gchip'), cur = el.querySelector('.cursor');
  const W = 276, H = 138, G = 6, hw = (W - G) / 2, hh = (H - G) / 2;
  const L = {
    1: [[0, 0, W, H]],
    2: [[0, 0, hw, H], [hw + G, 0, hw, H]],
    4: [[0, 0, hw, hh], [hw + G, 0, hw, hh], [0, hh + G, hw, hh], [hw + G, hh + G, hw, hh]],
  };
  // order[yer] = pencere; başlıktan sürükleyip bırakınca iki pencere yer değiştirir.
  let order = [0, 1, 2, 3];
  const lay = n => panes.forEach((p, i) => {
    const k = order.indexOf(i), r = L[n][k] || [W * 0.75, H * 0.75, W / 4, H / 4];
    Object.assign(p.style, { left: `${r[0]}px`, top: `${r[1]}px`, width: `${r[2]}px`, height: `${r[3]}px`, opacity: L[n][k] ? 1 : 0 });
  });
  const drag = (x, y) => { at(chip, x, y); at(cur, x + 34, y + 10); };
  const label = i => { chip.innerHTML = panes[i].querySelector('.gh').innerHTML; };
  scene('sc-grid', [
    [0, () => { order = [0, 1, 2, 3]; lay(1); panes.forEach(p => p.classList.remove('wait')); chip.style.opacity = 0; drag(-60, H + 10); }],
    [500, () => { label(1); chip.style.opacity = 1; }],
    [600, () => drag(W * 0.6, H * 0.4)],
    [1500, () => { chip.style.opacity = 0; lay(2); }],
    [1900, () => { drag(-60, H + 10); }],
    [2500, () => { label(2); chip.style.opacity = 1; drag(W * 0.12, H * 0.68); }],
    [3400, () => { chip.style.opacity = 0; lay(4); at(cur, W + 20, H + 20); }],
    [4600, () => panes[2].classList.add('wait')],
    // admin-panel'i başlığından tutup sol üste taşı: storefront ile yer değiştirir.
    [5000, () => { label(3); drag(hw + G + 6, hh + G + 3); }],
    [5700, () => { chip.style.opacity = 1; }],
    [5900, () => drag(6, 3)],
    [6700, () => { chip.style.opacity = 0; order = [3, 1, 2, 0]; lay(4); at(cur, W + 20, H + 20); }],
    [7600, () => panes[2].classList.remove('wait')],
  ], 9400, 7);
}

// 7 · Terminal başına token ve maliyet: sayaç artar, üzerine gelince ayrıntı çıkar
{
  const el = $('sc-cost'), chip = el.querySelector('.c-tok'), cur = el.querySelector('.cursor');
  const tipA = el.querySelector('.ctip-a'), tipB = el.querySelector('.ctip-b'), bar = el.querySelector('.cbar-t');
  const N = 1284310, COST = 4.82, TOTAL = 3.41e6, TOTAL_COST = 12.6;
  const loc = () => (lang === 'tr' ? 'tr-TR' : 'en-US');
  const usd = v => `$${v.toLocaleString(loc(), { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const text = () => { tipA.textContent = S().costA(N.toLocaleString(loc()), 42); tipB.textContent = S().costB(usd(COST)); };
  relang.push(() => { text(); chip.textContent = fmtTok(N); bar.textContent = S().costBar(fmtTok(TOTAL), usd(TOTAL_COST)); });
  scene('sc-cost', [
    [0, () => {
      el.className = 'cw'; text(); at(cur, el.clientWidth + 20, el.clientHeight * 0.7);
      count(v => { chip.textContent = fmtTok(v); }, N, 2200);
      count(v => { bar.textContent = S().costBar(fmtTok(v * TOTAL), usd(v * TOTAL_COST)); }, 1, 2200);
    }],
    [2600, () => { const [x, y] = center(chip, el); at(cur, x - 4, y - 2); }],
    [3300, () => el.classList.add('hov')],
    [7000, () => { el.classList.remove('hov'); at(cur, el.clientWidth + 20, el.clientHeight * 0.7); }],
  ], 8400, 2);
}

// 8 · Sesle yazma: mikrofona tıkla, Windows sesle yazma dinler, söylenen terminale yazılır
{
  const el = $('sc-voice'), cur = el.querySelector('.cursor'), txt = el.querySelector('.vtext'), mic = el.querySelector('.vmic');
  let gen = 0;
  const type = () => {
    const g = ++gen, words = S().voice.split(' ');
    if (reduce) { txt.textContent = S().voice; return; }
    words.forEach((_, i) => setTimeout(() => { if (g === gen) txt.textContent = words.slice(0, i + 1).join(' '); }, i * 330));
  };
  scene('sc-voice', [
    [0, () => { gen++; el.className = 'vw'; txt.textContent = ''; at(cur, el.clientWidth * 0.5, el.clientHeight + 20); }],
    [500, () => { const [x, y] = center(mic, el); at(cur, x - 3, y - 3); }],
    [1300, () => { cur.classList.add('down'); el.classList.add('v-press'); }],
    [1450, () => { cur.classList.remove('down'); el.classList.remove('v-press'); el.classList.add('v-on'); at(cur, el.clientWidth + 20, el.clientHeight * 0.8); }],
    [2000, type],
    [5600, () => el.classList.remove('v-on')],
  ], 7800, 4);
}

// 9 · Dil: Türkçe ↔ İngilizce, bildirim de dille birlikte değişir
{
  const el = $('sc-lang'), t = el.querySelector('.lt-t'), b = el.querySelector('.lt-b');
  const show = l => {
    el.classList.add('l-swap');
    setTimeout(() => {
      el.classList.remove('l-tr', 'l-en', 'l-swap'); el.classList.add(`l-${l}`);
      t.textContent = SC[l].langT; b.textContent = SC[l].langB;
    }, reduce ? 0 : 250);
  };
  scene('sc-lang', [[0, () => show('tr')], [2800, () => show('en')]], 5600, 0);
}

// Hatırlatmalar: açılışta bugünün işleri, kutu işaretlenir, Claude'da kalınan yere dönülür, akşam takibi
{
  const el = $('sc-rem'), cur = el.querySelector('.cursor'), badge = el.querySelector('.rbadge'), term = el.querySelector('.rterm');
  const state = el.querySelector('.rp-state'), nToday = el.querySelector('.rd-n'), btn = el.querySelector('.rbtn');
  const li = k => el.querySelector(`[data-k="${k}"]`);
  const plain = s => s.replace(/<[^>]+>/g, '');
  const day = (offset, opts) => new Date(Date.now() + offset * 864e5).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', opts);
  const fill = () => {
    el.querySelector('.rd-date').textContent = day(0, { weekday: 'long', day: 'numeric', month: 'long' });
    li('o1').querySelector('.rt').innerHTML = S().remO1;
    li('o1').querySelector('.rdt').textContent = day(-2, { day: 'numeric', month: 'short' });
    li('t1').querySelector('.rt').innerHTML = S().remT1;
    li('t2').querySelector('.rt').innerHTML = S().remT2;
    el.querySelector('.sp-when').textContent = S().remWhen;
    el.querySelector('.sp-q').textContent = S().remQ;
    el.querySelector('.rt-t').textContent = S().remToastT;
    el.querySelector('.rt-b').textContent = plain(S().remO1);
    if (el.classList.contains('r-work')) resumed(); else idle();
  };
  const idle = () => { term.innerHTML = `<span class="m">${S().remNone}</span>`; state.textContent = S().remClosed; };
  const resumed = () => {
    state.textContent = S().remWork;
    term.innerHTML = [`<span class="m">&gt;</span> ${S().remPrompt}`, '', `<span class="g">●</span> Update(<span class="c">src/checkout/cart.ts</span>)`, `  <span class="m">⎿ ${S().remUpd}</span>`, '', `<span class="m">&gt;</span> <span class="caret"></span>`].join('\n');
  };
  const bump = n => { badge.textContent = n; badge.classList.add('bump'); setTimeout(() => badge.classList.remove('bump'), 220); };
  const go = (node, dx, dy) => { const [x, y] = center(node, el); at(cur, x + dx, y + dy); };
  relang.push(fill);
  scene('sc-rem', [
    [0, () => { el.className = 'rs'; li('t1').classList.remove('done'); badge.textContent = '3'; nToday.textContent = '2'; fill(); at(cur, el.clientWidth * 0.72, el.clientHeight + 24); }],
    [500, () => el.classList.add('r-open')],
    [1600, () => go(li('t1').querySelector('.box'), -3, -4)],
    [2400, () => { cur.classList.add('down'); li('t1').classList.add('done'); }],
    [2550, () => { cur.classList.remove('down'); bump(2); nToday.textContent = '1'; }],
    [3300, () => go(btn, -8, -5)],
    [4100, () => { cur.classList.add('down'); el.classList.add('r-press'); }],
    [4250, () => { cur.classList.remove('down'); el.classList.remove('r-press', 'r-open'); el.classList.add('r-work'); resumed(); }],
    [4900, () => at(cur, el.clientWidth * 0.3, el.clientHeight + 24)],
    [6100, () => el.classList.add('r-toast', 'r-ring')],
    [8900, () => el.classList.remove('r-toast', 'r-ring')],
  ], 9900, 1);
}

// Kartın üzerinde imleci izleyen hafif ışık
document.querySelectorAll('.card').forEach(c => c.addEventListener('pointermove', e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
}));

// ---------- Canlı demo ----------
const T = {
  en: { edit: 'Edit(cart.ts)', perm: 'Needs permission: npm test', work: 'Bash(npm test)', done: 'Done, your turn', prompt: 'Fix the failing checkout tests', read: 'Read 142 lines', upd: 'Updated with 6 additions', proceed: 'Do you want to proceed?', yes: 'Yes', no: 'No, tell Claude what to do', pass: 'Tests: 128 passed, 128 total', fixed: 'Checkout is fixed and all tests pass.', eta: 'full ~14:20' },
  tr: { edit: 'Edit(cart.ts)', perm: 'İzin istiyor: npm test', work: 'Bash(npm test)', done: 'Bitti, sıra sende', prompt: 'Ödeme testlerindeki hatayı düzelt', read: '142 satır okundu', upd: '6 satır eklendi', proceed: 'Devam edilsin mi?', yes: 'Evet', no: "Hayır, Claude'a ne yapacağını söyle", pass: 'Testler: 128 geçti, 128 toplam', fixed: 'Ödeme düzeltildi, bütün testler geçiyor.', eta: '~14:20 dolar' },
};
const term = $('term'), rowA = $('r-a'), pane = $('pane'), ask = $('ask'), toast = $('toast'), tap = $('tap'), tYes = $('t-yes');
const lock = $('screen'), notif = $('notif');
// Dokunuş halkasını ekrana göre konumlar (telefon döndürülmüş olduğu için offset ile).
function touch(el, kind) {
  let x = el.offsetWidth / 2, y = el.offsetHeight / 2;
  for (let n = el; n && n !== lock; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
  // .toast transform ile yukarı kaydığı için hedef konumu sınıflardan sonra okunur.
  const m = new DOMMatrix(getComputedStyle(toast).transform);
  if (toast.contains(el)) y += m.m42;
  tap.style.left = `${x}px`; tap.style.top = `${y}px`;
  tap.className = 'tap'; void tap.offsetWidth; tap.classList.add(kind);
}
const pill = document.querySelector('.usage-pill');
let phase = 0;
const L = () => T[lang];
const lines = {
  base: () => [`<span class="o">✻</span> Welcome to <span class="b">Claude Code</span>`, '', `<span class="m">&gt;</span> ${L().prompt}`, '', `<span class="g">●</span> Read(<span class="c">src/checkout/cart.ts</span>)`, `  <span class="m">⎿ ${L().read}</span>`, '', `<span class="g">●</span> Update(<span class="c">src/checkout/cart.ts</span>)`, `  <span class="m">⎿ ${L().upd}</span>`],
};
function render(extra = [], caret = true) {
  term.innerHTML = [...lines.base(), ...extra].join('\n') + (caret ? '\n<span class="caret"></span>' : '');
}
function setRow(status, text) {
  rowA.className = `row st-${status} is-current`;
  $('a-task').textContent = text;
  pane.classList.toggle('is-wait', status === 'wait');
  $('t-wait').textContent = status === 'wait' ? '1' : '0';
  $('t-work').textContent = status === 'done' ? '1' : '2';
  $('t-done').textContent = status === 'done' ? '2' : '1';
  document.querySelector('.tally .st-wait').classList.toggle('on', status === 'wait');
}
function demoText() {
  $('u-eta').textContent = L().eta;
  // iOS kilit ekranı tarihi: "Thursday, October 23" / "23 Ekim Perşembe"
  $('ph-date').textContent = new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  // Dil değişince o anki kareyi yeniden çiz.
  step(phase, true);
}
function step(p, redraw) {
  phase = p;
  if (p === 0) {
    setRow('work', L().edit); render(); ask.classList.remove('show');
    toast.className = 'toast'; lock.classList.remove('focus'); tap.className = 'tap'; pill.classList.remove('hot'); $('u-fill').style.width = '48%'; $('u-pct').textContent = '48%';
  } else if (p === 1) {
    setRow('work', L().work); render([``, `<span class="y">●</span> Bash(<span class="c">npm test</span>)`]);
  } else if (p === 2) {
    setRow('wait', L().perm);
    render([``, `<span class="y">●</span> Bash(<span class="c">npm test</span>)`, '', `<span class="b">${L().proceed}</span>`, `<span class="c">❯ 1. ${L().yes}</span>`, `  2. ${L().no}`]);
    ask.classList.add('show');
    if (!redraw) setTimeout(() => toast.classList.add('show'), 600); else toast.classList.add('show');
  } else if (p === 3) {
    // iOS: bildirimi basılı tut, düğmeler açılsın
    toast.classList.add('show');
    if (redraw) { lock.classList.add('focus'); return; }
    touch(notif, 'hold'); notif.classList.add('press');
    setTimeout(() => { notif.classList.remove('press'); lock.classList.add('focus'); }, 550);
  } else if (p === 4) {
    // "İzin ver"e dokunuş
    lock.classList.add('focus');
    if (!redraw) setTimeout(() => touch(tYes, 'go'), 0);
    tYes.classList.add('press');
  } else if (p === 5) {
    tYes.classList.remove('press'); toast.classList.add('gone'); lock.classList.remove('focus'); ask.classList.remove('show');
    setRow('work', L().work);
    render([``, `<span class="g">●</span> Bash(<span class="c">npm test</span>)`, `  <span class="m">⎿ ${L().pass}</span>`]);
    $('u-fill').style.width = '64%'; $('u-pct').textContent = '64%'; pill.classList.add('hot');
  } else if (p === 6) {
    setRow('done', L().done);
    render([``, `<span class="g">●</span> Bash(<span class="c">npm test</span>)`, `  <span class="m">⎿ ${L().pass}</span>`, '', `<span class="g">●</span> ${L().fixed}`, '', `<span class="m">&gt;</span> `]);
  }
}
const timeline = [[0, 0], [1, 1600], [2, 3400], [3, 5300], [4, 6900], [5, 7700], [6, 9600]];
const CYCLE = 12500;
function loop() {
  for (const [p, at] of timeline) setTimeout(() => step(p), at);
  setTimeout(loop, CYCLE);
}
// Telefondaki saat gerçek saat olsun.
const now = new Date();
$('ph-time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

setLang(saved || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en'));
if (reduce) step(2, true); else loop();
