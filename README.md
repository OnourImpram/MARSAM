# MARSAM 0.8.2

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Marmara kimliği ve kullanıcının onayladığı ebru çerçeveli mat panel korunur. Resmî kuruluş bu teknik teslimle doğrulanmış sayılmaz.

## Canlı site

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Araştırma rehberleri https://onourimpram.github.io/MARSAM/tr/research/

## Son görsel güncelleme

Mevcut iki çini çiziminin görünürlüğü artırıldı. Yalnız CSS opaklığı ve dış kenardaki alfa geçişi değişti. Yeni desen, motif, SVG, renk paleti, görsel katman, font veya JavaScript eklenmedi. Motiflerin boyutları ve konumları aynı kaldı. Merkezdeki metin alanları temiz kalıyor. Mobildeki mevcut tek küçük fragman korunuyor. Ebru çerçeve, mat MARSAM paneli, Marmara logosu, tipografi ve grid değişmedi. Kaldırılan büyük açılış araması, açıklama paragrafı, alt çiçek ve parlama geri getirilmedi.

Kitap ve makale künyeleri, sekiz dilde dört yöntem rehberi, 13 indirilebilir çalışma dosyası, arama, okuma listesi, kaynak karşılaştırma ve atıf indirme işlevleri önceki sürümden korunur. Python betiği ve Jupyter notebook gerçek ortamda sınandı. Quarto kaynak dosyası sağlanır, çalıştırılmış Quarto raporu veya tamamlanmış meta analiz iddia edilmez.

## Doğrulanmış yayın

Yayımlanan uygulama kaynağı `01d9ffa171f7c40f635a33f910a0891133933951`. Hosting commit `6b47990c0c343bdaa365b5e7d3737b173e463ea9`. Daha sonraki teslim belgesi güncellemeleri uygulama dosyalarını değiştirmez.

Canlı kontrol https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37060669243

Güncel durum DELIVERY_STATUS.md. Sürüm kimliği docs/LIVE_REVIEW_RELEASE.json. Çini kararları ve son görünürlük düzeltmesi docs/design/CINI_0_8_1.md. Görsel köken kayıtları docs/CINI_ASSETS.json. Eski teslimler Git geçmişinde ve docs/releases içinde korunur.

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

Tarayıcı kontrolleri eşleşen Playwright sürümünü ve sekiz dilin karakter kapsamını gerektirir. Notebook kontrolü gerçek Jupyter çekirdeği kullanır. Test ortamı yazı tipleri dağıtılmaz. Yalnız hosting deposunun MARSAM alt ağacı değiştirilir.

Bilimsel ve ana dil uzmanı incelemesi tamamlanmış sayılmaz. Kaynak kimliği, inceleme derinliği, kullanım hakları ve kurumsal onay ayrı tutulur. Özel ders dosyaları, tanımlanabilir katılımcı verileri veya paylaşım izni olmayan ham veri setleri yayımlanmaz.
