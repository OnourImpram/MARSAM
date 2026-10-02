# MARSAM 0.8.1

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Marmara kimliği ve kullanıcının onayladığı ebru çerçeveli mat panel korunur. Resmî kuruluş bu teknik teslimle doğrulanmış sayılmaz.

## Canlı site

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Araştırma rehberleri https://onourimpram.github.io/MARSAM/tr/research/

## Son görsel güncelleme

Eski tekrarlı dış kenar geometrisinin yerine, iki özgün SVG ile seyrek ve asimetrik İznik esintili çini kompozisyonları eklendi. Soluk kobalt ve turkuaz floral çizgiler, içerik kutusuna yaklaşmadan alfa maskesiyle kaybolur. Merkezdeki metin alanları ve kartlar temiz kalır. Mobilde tek küçük köşe fragmanı vardır. Yeni JavaScript, raster görsel, font veya animasyon eklenmedi. Ebru çerçeve, mat MARSAM paneli, Marmara logosu, tipografi ve grid korunur. Kaldırılan büyük açılış araması, açıklama paragrafı ve alt çiçek geri getirilmedi.

Kitap ve makale künyeleri, sekiz dilde dört yöntem rehberi, 13 indirilebilir çalışma dosyası, arama, okuma listesi, kaynak karşılaştırma ve atıf indirme işlevleri önceki sürümden korunur. Python betiği ve Jupyter notebook gerçek ortamda sınandı. Quarto kaynak dosyası sağlanır, çalıştırılmış Quarto raporu veya tamamlanmış meta analiz iddia edilmez.

## Doğrulanmış yayın

Yayımlanan uygulama kaynağı `0bf0a06f122ffc808273d918ef77ebe9ef79ba5d`. Hosting commit `a0cb5bc1bd1a0bdc9fc1d77ea324b15ecf8848c8`. Daha sonraki teslim belgesi güncellemeleri uygulama dosyalarını değiştirmez.

Canlı kontrol https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37054039081

Güncel durum DELIVERY_STATUS.md. Sürüm kimliği docs/LIVE_REVIEW_RELEASE.json. Çini kararları docs/design/CINI_0_8_1.md. Görsel köken kayıtları docs/CINI_ASSETS.json. Eski teslimler docs/releases içinde korunur.

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
