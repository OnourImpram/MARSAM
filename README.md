# MARSAM

Marmara Üniversitesi bünyesinde planlanan Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi için kurumsal web sitesi taslağı.

## Canlı sürüm

https://onourimpram.github.io/MARSAM/tr/

Sürüm 0.6.0. Ebru ve mimari bezemeden esinlenen görsel kimlik, dokuz kitaplık seçki ve 2025 ile 2026 yıllarından sekiz araştırma kaydı.

Yayımlanan uygulama kaynağı `038506a0313509437ba038043188f3aa0c398cb6`. Yayın deposundaki commit `7a15cd6d9daec45a81a60b1669bbad24b81a789f`. Daha sonraki teslim belgeleri uygulama dosyalarını değiştirmez.

Kitaplık https://onourimpram.github.io/MARSAM/tr/books/

Güncel araştırmalar https://onourimpram.github.io/MARSAM/tr/publications/

## Görsel kimlik ve kaynaklar

Marmara işareti, lacivert ve petrol mavisi korunur. Kâğıt tonları, ölçülü altın çizgiler, geometrik geçmeler ve bitkisel bezeme kullanılır. Ebru uyarlamasının eser sahibi, lisansı ve yapılan değişiklikler belirtilmiştir. Belirli bir tarihî yapının birebir rekonstrüksiyonu iddia edilmez.

GitHub tasarım kaynaklarından yararlanılan ilkeler ve incelenen commitler `docs/HERITAGE_DESIGN_REVIEW_TR.md` dosyasındadır. Elif Tasarım sürecinden alınan tasarım dersleri `docs/ELIF_DESIGN_LESSONS_TR.md` dosyasında korunur. Referans kurumlar ortak veya merkez üyesi olarak sunulmaz.

## Kapsam

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzen kullanır. Arama, okuma listesi, kaynak karşılaştırma, RIS ve BibTeX indirme, kitap ve makale filtreleri bulunur. Katalog, özgün eser adlarını ve yazar sırasını korur. Diğer dillerdeki açıklamalar yayımlanmış çeviri baskılarına işaret etmez.

Site kurumsal inceleme sürümüdür. Resmî kuruluş kararı, bilimsel editör onayı veya klinik hizmet yetkisi varmış gibi sunulmaz. Katılımcı yanıtı, ödeme veya kişisel sağlık bilgisi toplanmaz. Yayın ortaklığı, kadro üyeliği veya öğrencilik ilişkisi olarak yorumlanmaz. Tam metinler ve kişisel ders dosyaları yayımlanmaz.

## Yerel çalıştırma

Node.js 22 veya üzeri. Uygulamanın paket bağımlılığı yoktur.

```sh
npm run check
npm run preview
```

Yerel adres `http://127.0.0.1:4173/tr/`.

GitHub Pages alt yolu için.

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
```

## Doğrulama

`npm run check` kaynak testlerini, derlemeyi ve iç bağlantıları denetler. `tests/heritage_e2e.py` yeni tasarım ve katalogların gerçek tarayıcı denetimidir. Önceki işlevler `tests/browser_e2e.py` ve `tests/scope_e2e.py` ile korunur. Gerçek glif desteği test ortamında sağlanır. Yazı tipi dosyaları siteyle veya teslim arşivleriyle dağıtılmaz.

Son canlı doğrulama https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36911218513 adresindedir. Doğrulama kapsamı ve önceki başarısız kurulum kaydı `DELIVERY_STATUS.md` dosyasındadır. Teknik testler bilimsel onay, ana dil uzmanı incelemesi veya bağımsız erişilebilirlik sertifikası değildir.
