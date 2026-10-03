# MARSAM 0.8.3

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Resmî kuruluş, akreditasyon veya klinik hizmet yetkisi bu teknik teslimle doğrulanmış sayılmaz.

## Canlı site

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Araştırma rehberleri https://onourimpram.github.io/MARSAM/tr/research/

## Onaylanan görsel

3 Ekim 2026 tarihinde proje sahibi tarafından seçilen katmanlı MARSAM portalı ana sayfadaki mevcut görselin yerini aldı. Görsel, fildişi ve sıcak kâğıt yüzeyler, turkuaz ebru katmanları, ince altın hatlar ve yalnızca MARSAM sözcüğünü içeren özgün bir kompozisyondur. Eski “Araştırma · Öğrenme” alt yazısı ve ayrı ön plan kelime katmanı geri getirilmedi.

Sayfanın arka planındaki mevcut özgün çini SVG’leri korunuyor ancak yeniden geri plana alındı. Masaüstünde kenarlarda ve negatif alanda hafifçe görünür, merkeze yaklaşırken kaybolur. Tablet ve mobilde yoğunluk daha da düşer. Yeni animasyon, font veya JavaScript bağımlılığı eklenmedi.

Marmara Üniversitesi logosu ve akademik birim satırı, tipografi, grid, kartlar, kitap ve makale künyeleri, araştırma rehberleri, indirmeler, arama, okuma listesi, karşılaştırma ve sekiz dil korunur.

## Doğrulanmış yayın

Uygulama kaynağı `4ecce9f3f3be90e532890f1f071e4301bd035bd3`.

Kaynak doğrulaması https://github.com/OnourImpram/MARSAM/actions/runs/37103211071

Hosting staging doğrulaması https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37104882349

GitHub Pages yayını https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37104944002

Hosting commit `1245e91a67b2de15ca6846820b48612a496f6437`.

MARSAM ağacı `ff558e3279001baefccc6e020ad1ec4b9d9fc541`.

Güncel durum DELIVERY_STATUS.md. Görsel karar docs/design/APPROVED_PORTAL_0_8_3.md. Görsel köken ve işleme kaydı docs/design/APPROVED_PORTAL_ASSETS.json. Önceki tasarım ve teslim kayıtları Git geçmişinde ve docs/releases içinde korunur.

## Geliştirme

Node.js 22 veya üzeri. Statik HTML ve tek ortak stil sistemi.

```sh
npm run check
npm run preview
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
node scripts/budget.mjs
BROWSERS=chromium,firefox,webkit python tests/browser_e2e.py
BROWSERS=chromium,firefox,webkit python tests/scope_e2e.py
BROWSERS=chromium,firefox,webkit python tests/heritage_e2e.py
BROWSERS=chromium,firefox,webkit python tests/research_e2e.py
BROWSERS=chromium,firefox,webkit python tests/cini_e2e.py
python tests/research_artifacts.py
```

Teknik testler bilimsel editör onayı, ana dil uzmanı incelemesi, gerçek cihaz veya ekran okuyucu araştırması ya da bağımsız erişilebilirlik sertifikası değildir. Özel ders dosyaları, tanımlanabilir katılımcı verileri ve paylaşım izni olmayan ham veri setleri yayımlanmaz.
