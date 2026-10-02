# MARSAM 0.7.2

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Marmara kimliği korunur. Merkezin resmî kuruluşu bu teknik teslimle doğrulanmış sayılmaz.

## Canlı site ve güncel kararlar

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Güncel teslim `DELIVERY_STATUS.md`, sürüm kimliği `docs/LIVE_REVIEW_RELEASE.json`, kalıcı canlı kontrol kaydı `docs/releases/bookplate-0.7.2-live.json` dosyalarındadır. Tasarımın güncel dizini `docs/design/README.md`, son görsel düzeltmenin kapsamı `docs/design/SURFACE_0_7_2.md` dosyasıdır. Eski raporlar tarihsel kayıtlardır.

## Son görsel düzeltme

Alt çiçek bezemesi kaldırıldı. Üstte ayrı duran geometrik motif, mevcut özgün SVG kullanılarak kemerli iç yüzeyin tamamına arka plan yapıldı. MARSAM yazısı merkezde tutuldu. Ebru çerçeve ve Marmara üst kimliği korundu. Daha önce kaldırılması istenen açılış paragrafı, büyük arama formu ve bağlantı sırası çıkarıldı. Üst menüdeki arama ve ayrı arama sayfası çalışmaya devam eder.

Genel arka plan sıcak kâğıt tonları ve okuma metninden uzakta kalan geometrik kenarlar kullanır. Mobil, yazdırma ve yüksek karşıtlık durumlarında süsleme azaltılır veya kaldırılır. Yeni görsel dosyası, yazı tipi, JavaScript bağımlılığı veya hareketli arka plan eklenmedi.

## Korunan işlevler ve içerik

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzen ve özgün bibliyografik bilgiler korunur. Kitap ve makale kayıtları, özgün yazar sırası, DOI, ISBN ve inceleme durumları değiştirilmedi.

Katalog filtreleri, kapak ve liste görünümü, DOI ve ISBN araması, okuma listesi, kaynak karşılaştırma ve atıf dosyaları sürer. Okuma listesi kullanılan tarayıcıda tutulur. Katkı formu yerel dosya hazırlar, sunucuya gönderim yapmaz.

## Geliştirme ve doğrulama

Node.js 22 veya üzeri. Statik HTML, açık bileşenler ve tek stil dosyası.

```sh
npm run check
npm run preview
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
node scripts/budget.mjs
BROWSERS=chromium,firefox,webkit python tests/browser_e2e.py
BROWSERS=chromium,firefox,webkit python tests/scope_e2e.py
BROWSERS=chromium,firefox,webkit python tests/heritage_e2e.py
```

Tarayıcı testleri eşleşen Playwright kurulumu ve sekiz dilin gerçek karakter kapsamını gerektirir. Test ortamı yazı tipleri dağıtıma eklenmez. Yayında yalnız mevcut host deposunun MARSAM alt ağacı değiştirilir. Güncel host ana dalı önce okunur, diğer sitelerin yeni değişiklikleri korunur.

## İnceleme sınırları

Otomatik kontroller bilimsel editör incelemesi, ana dil uzmanı değerlendirmesi, ekran okuyucu veya gerçek cihaz testi ve bağımsız erişilebilirlik onayı değildir. Resmî kuruluş, akreditasyon, klinik hizmet, ortaklık veya hak sahipliği uydurulmaz. Özel ders dosyaları ve yayımlanmamış araştırma verileri yayımlanmaz.
