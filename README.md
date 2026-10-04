# MARSAM 0.10.0

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi girişimi için sekiz dilli akademik bilgi platformu. Planlanan akademik yapı Marmara Üniversitesi, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü, Rehberlik ve Psikolojik Danışmanlık Anabilim Dalıdır. Teknik yayın, resmî kuruluş veya bilimsel onay değildir.

## Platform

Türkçe https://onourimpram.github.io/MARSAM/tr/

English https://onourimpram.github.io/MARSAM/en/

Bu kaynak sürümünde 44 kamusal kaynak kaydı, sekiz kanıt teması, 19 ortak bilimsel özete bağlı araştırma kaydı ve bu kayıtlar için 152 dil metni bulunur. Sekiz dildeki tüm eski dosyaların bağımsız anadil veya bilimsel incelemesinin tamamlandığı iddia edilmez. Eski içeriklerin legacy-seed modeli ayrıca kaydedilir.

## Bu döngü

Altı yeni kaynak, boylamsal ve kişi içi bulgular, Türkiye'de eş kaybı, Brezilya'daki tıp öğrencileri, psikoz bağlamı ve din görevlileriyle ilişkili istismar sonrası manevi zarar konularını seçkiye ekler. İki yeni sentez, farklı örneklem ve yöntemlerden gelen sonuçları tek bir etkililik hükmüne indirgemez.

Kaynak üstverisi ve her dil metni kalıcı taslak parmak izleriyle korunur. Build sırasında eski parmak izleri otomatik olarak yeniden onaylanmaz. data/locale-parity.json alanların varlığını ve kayıtlı içerikle eşleşmeyi gösterir. Bu dosya anlam eşdeğerliği, doğruluk veya insan onayı sertifikası değildir.

Onaylı 0.9.4 portalı, bütün görsel varlıklar, CSS, gezinme, kurucu anlatısı ve mevcut araştırma laboratuvarı korunur. İki SWBS ayrı araç olarak kalır. Ekşi ve Kardaş 2017 kaynağındaki .50 ve .050 SRMR uyuşmazlığı gizlenmez.

Ayrıntılar [döngü raporunda](docs/cycles/2026-10-04/REPORT.md), yayın kanıtları [teslim durumunda](DELIVERY_STATUS.md) bulunur. Önceki README ve teslim metni değişmeden döngü arşivine taşınmıştır.

## Geliştirme ve kontrol

Node.js 22 veya üzeri. Ek bir uygulama çatısı veya tarayıcı çalışma zamanı bağımlılığı yoktur.

```sh
npm run check
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
node scripts/budget.mjs
python tests/research_artifacts.py
BROWSERS=chromium,firefox,webkit python tests/browser_e2e.py
BROWSERS=chromium,firefox,webkit python tests/scope_e2e.py
BROWSERS=chromium,firefox,webkit python tests/heritage_e2e.py
BROWSERS=chromium,firefox,webkit python tests/research_e2e.py
BROWSERS=chromium,firefox,webkit python tests/cini_e2e.py
BROWSERS=chromium,firefox,webkit python tests/scholarship_e2e.py
BROWSERS=chromium,firefox,webkit python tests/evidence_cycle_e2e.py
```

Kalıcı taslak kayıtlarının güncellenmesi için [bakım yönergesini](docs/cycles/2026-10-04/MAINTENANCE.md) izleyin. Özel ders belgeleri, katılımcı verileri, izin alınmamış ölçek maddeleri ve font dosyaları yayımlanmaz. Teknik kontroller insan bilimsel değerlendirmesi, bağımsız erişilebilirlik sertifikası veya anadil incelemesi yerine geçmez.
