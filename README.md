# MARSAM

Marmara Üniversitesi bünyesinde planlanan Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için hazırlanmış kurumsal web sitesi taslağı.

## Canlı tasarım

https://onourimpram.github.io/MARSAM/tr/

Tasarım sürümü 0.5.0. Uygulama kaynağı `a5dfb6558be5dbbf180321e114f4725b3e6b9657`. Daha sonraki teslim notları ve test korumaları, yayımlanan uygulama dosyalarını değiştirmez.

Açık zemin, Marmara mavisi, serif başlıklar, kontrollü fotoğraf kullanımı, asimetrik araştırma dizini, yayın seçkisi, hedef kitleye göre açılan öğrenme yolları ve ortak bir okuma düzeni kullanılır. Elif Tasarım süreci tasarım geliştirme yöntemi bakımından incelenmiştir. Elif'in markası, ticari içeriği veya 3D ürünü MARSAM'a aktarılmamıştır.

## Kapsam

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzen kullanır. Kaynak kayıtları, okuma dosyaları ve öğrenme yolları korunmuştur. Arama, aynı sayfada dil değişimi, yerel okuma listesi, kaynak karşılaştırma, RIS ve BibTeX indirme ve yerel katkı taslağı bulunur.

Web sitesi bir kurumsal önizlemedir. Resmî kuruluş kararı, bilimsel editör onayı, çeviri uzmanı onayı veya klinik hizmet yetkisi varmış gibi sunulmaz. Katılımcı yanıtı, ödeme veya kişisel sağlık bilgisi toplanmaz. Etkinlik ve yayın boşlukları uydurma içerikle doldurulmaz.

## Yerel çalıştırma

Node.js 22 veya üzeri gerekir. Uygulamanın paket bağımlılığı yoktur.

```sh
npm run check
npm run preview
```

Tarayıcı adresi `http://127.0.0.1:4173/tr/`.

GitHub Pages alt yolu için.

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
```

## Doğrulama

`npm test` içerik ve tasarım korumalarını, `npm run test:build` üretilen yolları ve iç bağlantıları denetler. Gerçek tarayıcı kontrolleri `tests/browser_e2e.py`, `tests/scope_e2e.py` ve `tests/design_e2e.py` dosyalarındadır. Tarayıcı ortamında Çince için gerçek CJK glif desteği bulunmalıdır. Test ortamına kurulan yazı tipleri web sitesiyle veya teslim dosyalarıyla dağıtılmaz.

Canlı dağıtım ve son doğrulama kaydı DELIVERY_STATUS.md dosyasındadır. Tasarımın uygunluğu test adediyle eşitlenmez.

## Tasarım ve içerik kayıtları

Tasarım incelemesi `docs/ELIF_DESIGN_LESSONS_TR.md`. Görsel kaydı `docs/VISUAL_ASSET_PROVENANCE.json`. Kurumsal içerik sınırları `docs/SCOPE_CORRECTION_TR.md`. Canlı sürüm kaydı `docs/LIVE_REVIEW_RELEASE.json`.

Kaynak kimliği, doğrulama kapsamı ve editöryal onay birbirinden ayrıdır. Görsel tasarım incelemesi kaynak doğrulama veya bilimsel onay anlamına gelmez.
