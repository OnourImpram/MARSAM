# MARSAM

Maneviyat, ruh sağlığı, araştırma ve öğrenme için sekiz dilli akademik bilgi platformu. Marmara Üniversitesi bağlamında önerilen merkez için hazırlanmış kurumsal inceleme sürümüdür. Resmî kuruluş, üniversite sahipliği, onay, akreditasyon veya klinik hizmet yetkisi doğrulanmış değildir.

## Güncel tasarım ve uygulama

Kod sürümü 0.7.0. Araştırma ve tasarım kararlarının güncel dizini `docs/design/README.md`. Uygulanan, kısmen uygulanan ve ileri aşamaya bırakılan kapsam `docs/design/COVERAGE.md`. Doğrulanmış canlı sürüm ve yayın kanıtı `DELIVERY_STATUS.md` dosyasında tutulur. Eski sürüm raporları tarihsel kayıtlardır.

İngilizce site https://onourimpram.github.io/MARSAM/en/

Türkçe site https://onourimpram.github.io/MARSAM/tr/

## Uygulama

Beş ana gezinme alanı, erken görünür arama, özgün eser künyelerini koruyan katalog, kitaplarda kapak ve liste görünümü, kaynak karşılaştırma ve ayrı kaynak inceleme boyutları bulunur. Öğrenci, uygulayıcı ve araştırmacı okuma yolları korunur. DOI ve ISBN sorguları önceliklidir. Dil değişimi filtreleri ve ilgili sayfayı korur. Okuma listesi yalnız kullanılan tarayıcıda tutulur. Katkı formu yerel dosya hazırlar, gönderim yapmaz.

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzen kullanır. Akademik açıklamalar ve arayüz metinleri insan dil incelemesi bekler. Kaynak kimliği, erişilen kapsam, bilimsel değerlendirme, güncellik ve kullanım hakları aynı onay sayılmaz.

Ebru, kâğıt tonları ve ölçülü geometrik bezeme okuma düzenini destekler. Üniversite logosu için izin doğrulanmadığından kamusal üst bölümde resmî logo birleşimi kullanılmaz. Önerilen Marmara bağlamı açıkça belirtilir. Özel ders dosyaları, kişisel yansıtmalar, katılımcı verisi ve tam kitap metinleri yayımlanmaz. Tasarım örneği olarak incelenen kurumlar ortakmış gibi gösterilmez.

## Teknik yapı

Node.js 22 veya üzeri ile bağımlılıksız statik HTML üretimi. Açık bileşenler, tek stil dosyası ve semantik tasarım değişkenleri kullanılır. React, sunucu uygulaması, hesap, klinik asistan veya veri toplama altyapısı eklenmemiştir.

```sh
npm run check
npm run preview
```

Yerel adres `http://127.0.0.1:4173/en/`.

GitHub Pages alt yolu için.

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
node scripts/budget.mjs
```

## Doğrulama ve sınırlar

Kaynak ve bağlantı testleri `npm run check` komutuyla çalışır. `tests/browser_e2e.py`, `tests/scope_e2e.py` ve `tests/heritage_e2e.py` güncel ortak tarayıcı paketine yönlenir. `BROWSERS=chromium,firefox,webkit` üç motoru seçer. Test ortamı için kurulan yazı tipleri dağıtılmaz.

Otomatik testler insan akademik değerlendirmesi, ana dil incelemesi, gerçek cihaz testi, ekran okuyucu değerlendirmesi veya bağımsız erişilebilirlik onayı değildir. Kurumsal yayın, görsel kullanım izinleri ve bilimsel sorumluluk insan kararına bağlıdır.
