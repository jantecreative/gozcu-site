// Gözcü tanıtım sayfası: dil (EN/TR), dile göre ekran görüntüleri, indirme bağlantısı.
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
  'pv.4t': 'Telefon bildirimi isteğe bağlı', 'pv.4d': "Sen açmadıkça kapalıdır ve ntfy üzerinden gider (ntfy.sh ya da kendi sunucun). Varsayılan olarak bildirimde proje, Claude'un kullanmak istediği dosya ya da komut ve son cevabının başı görünür. “Bildirimde ayrıntı göster”i kapatırsan yalnızca proje adı ve durum gider; telefondan onay açıksa neyi onayladığını bilmen için komut yine görünür. Hatırlatma özeti telefona ancak onu ayrıca açarsan gider.",
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
  'cta.downloadSub': 'Windows 10 ve 11 · 111 MB',
  'desk.cap': 'Bu, uygulamanın kendisi: dört Claude Code oturumu, biri izin bekliyor.',
  'f2b.t': 'İzin istemini kaçırma', 'f2b.d': "Claude bir komut çalıştırmak için izin isteyince o terminal kehribar renge döner, İzin ver ve Reddet çıkar, ses çalar ve Windows bildirimi gelir. Bildirime tıklayınca doğrudan oraya geçersin.",
  'f3.d2': "Ücretsiz ntfy uygulamasıyla bir QR kod okutarak telefonunu bağla. Claude'un isteğine bildirimden izin ver ya da reddet; her düğme tek kullanımlıktır ve yalnızca o istek için geçerlidir.",
  'f10.t': 'Telefondan yanıt yaz', 'f10.d': "Claude işini bitirince bildirimde Yanıt yaz düğmesi çıkar. Claude'un son cevabını gösteren küçük bir sayfa açılır; yazdığın mesaj doğrudan o terminale gider.",
  'more.title': 'Dahası da var',
  'm1.t': 'Gerektiğinde geniş alan', 'm2.t': 'Bekleyene tek tuşla geç', 'm3.t': 'İki ayrı ses', 'm4.t': 'Kaldığın yerden devam', 'm5.t': 'Sağ tıkla kopyala, yapıştır',
  'pro.7': "Claude'a telefondan yanıt yaz",
};

// ---------- Dil ----------
const original = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => original.set(el, el.innerHTML));
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = l === 'tr' && TR[k] ? TR[k] : original.get(el);
  });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  // Uygulama iki dilli: ekran görüntüleri de ziyaretçinin dilinde.
  document.querySelectorAll('img[data-shot]').forEach(img => { img.src = `assets/shots/${img.dataset.shot}-${l}.webp`; });
  try { localStorage.setItem('gozcu.lang', l); } catch { /* yok say */ }
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
let saved = null;
try { saved = localStorage.getItem('gozcu.lang'); } catch { /* yok say */ }

// ---------- İndirme ----------
document.querySelectorAll('[data-download]').forEach(a => { if (DOWNLOAD_URL) a.href = DOWNLOAD_URL; });

// Görev çubuğundaki saat ziyaretçinin saati olsun.
const clock = document.getElementById('clock');
if (clock) clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

setLang(saved || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en'));
