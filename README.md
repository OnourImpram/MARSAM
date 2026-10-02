# MARSAM 0.8.0

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Marmara kimliği ve kullanıcının onayladığı ebru çerçeveli tasarım korunur. Resmî kuruluş bu teknik teslimle doğrulanmış sayılmaz.

## Canlı site

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Araştırma rehberleri https://onourimpram.github.io/MARSAM/tr/research/

## Tamamlanan güncelleme

Panelin ortasındaki beyaz radyal katmanlar ve parlayan yazı gölgesi kaldırıldı. İç yüzey düz, mat kâğıt rengidir. Tam yüzeye yayılan geometrik desen, kemer, ebru çerçeve, Marmara logosu ve bölüm satırı korundu. Kullanıcının kaldırdığı ana sayfa arama kutusu, açıklama paragrafı, bağlantı sırası ve alt çiçek bezemesi geri getirilmedi.

Araştırma bölümüne sekiz dilde dört yöntem rehberi, boş araştırma ve ölçme şablonları, veri erişim dosyaları ve mevcut katalog metadata'sıyla çalışan yeniden üretilebilir bir laboratuvar eklendi. Toplam 13 indirilebilir çalışma dosyası bulunur. Python betiği ve Jupyter notebook gerçek ortamda çalıştırıldı. Quarto kaynak dosyası sağlanır, Quarto çalıştırma hizmeti veya tamamlanmış meta analiz sunulduğu ileri sürülmez.

## Doğrulanmış yayın

Yayımlanan uygulama kaynağı `91703cb6a91c03b67840965589f8c42bda477a73`. Hosting commit `cf35d7a7f53ce135b9223d03328fd614d5d525ed`. Daha sonraki teslim belgesi güncellemeleri uygulama dosyalarını değiştirmez.

Canlı kontrol https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37005526844/attempts/2

Güncel durum `DELIVERY_STATUS.md`, sürüm kimliği `docs/LIVE_REVIEW_RELEASE.json`, kaynakların uygulamaya aktarımı `docs/design/MATTE_RESEARCH_0_8.md`. Önceki aday teslim metni tarihsel kayıt olarak saklanmıştır.

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
python tests/research_artifacts.py
```

Tarayıcı kontrolleri eşleşen Playwright sürümünü ve sekiz dilin karakter kapsamını gerektirir. Notebook kontrolü gerçek Jupyter çekirdeği kullanır. Test ortamı yazı tipleri dağıtılmaz. Yalnız hosting deposunun `MARSAM/` alt ağacı değiştirilir.

Bilimsel ve ana dil uzmanı incelemesi tamamlanmış sayılmaz. Kaynak kimliği, inceleme derinliği, kullanım hakları ve kurumsal onay ayrı tutulur. Özel ders dosyaları, tanımlanabilir katılımcı verileri veya paylaşım izni olmayan ham veri setleri yayımlanmaz.
