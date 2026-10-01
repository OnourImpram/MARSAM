# MARSAM

**Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi. Marmara Üniversitesi için geliştirilen akademik kaynak platformu.**

## Web sitesini incele

**[MARSAM web sitesini aç](https://onourimpram.github.io/MARSAM/)**

[Türkçe](https://onourimpram.github.io/MARSAM/tr/) · [English](https://onourimpram.github.io/MARSAM/en/) · [العربية](https://onourimpram.github.io/MARSAM/ar/)

Marmara kimlikli sekiz dilli sürüm, 1 Ekim 2026 tarihinde kullanıcının incelemesi için GitHub Pages üzerinde yayımlandı. Kaynak geliştirmesi bu deponun `main` dalındadır. [PR 1](https://github.com/OnourImpram/MARSAM/pull/1) ana dala birleştirilmiştir.

Bu yayın, Marmara Üniversitesi bünyesinde planlanan merkez için hazırlanmış çalışan bir kurumsal inceleme sitesidir. Resmî kuruluş kararı, üniversitenin yayın onayı veya bilimsel ve dilsel insan incelemesinin tamamlandığı anlamına gelmez.

## Başlangıç noktaları

[Kaynak kütüphanesi](https://onourimpram.github.io/MARSAM/tr/library/), [tematik koleksiyonlar](https://onourimpram.github.io/MARSAM/tr/collections/), [kaynak karşılaştırma](https://onourimpram.github.io/MARSAM/tr/compare/), [öğrenme rotaları](https://onourimpram.github.io/MARSAM/tr/learning/), [etkinlikler](https://onourimpram.github.io/MARSAM/tr/events/) ve [uluslararası kaynaklar](https://onourimpram.github.io/MARSAM/tr/network/).

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzen kullanır. Endonezce ve Malayca ayrı çevirilerdir.

22 kaynak kaydı, 8 başlangıç okuma dosyası, 3 öğrenme rotası ve 6 tematik koleksiyon bulunur. 55 mantıksal sayfanın sekiz dildeki karşılığı 440 yerelleştirilmiş adrestir. Bunlar 440 farklı yayın değildir. Proje kökü Türkçe ana sayfayı açar.

Arama, konu ve tür filtreleri, yerel okuma listesi, atıf kopyalama, RIS ve BibTeX dışa aktarımı bulunur. Karşılaştırma aracı en fazla dört kaynağın künyesini, kapsamını, haklarını ve yorum sınırını gösterir. Seçim dil değişiminde korunur ve adres üzerinden paylaşılabilir. Karşılaştırma JSON olarak indirilebilir. Klinik etkililik sıralaması yapılmaz.

Etkinlikler dış kurumlardan alınır ve tarihine göre arşiv veya yaklaşan olarak ayrılır. Tarihin gösterilmesi kayıtların açık olduğu anlamına gelmez. Katkı aracı yalnızca yerel dosya üretir, başvuru göndermez.

## Yayın ve kaynak ilişkisi

İlk bağımsız Pages etkinleştirme girişimi yönetim izni nedeniyle sonuçlanmadı. İnceleme sitesi, kullanıcının zaten etkin olan [onourimpram.github.io](https://github.com/OnourImpram/onourimpram.github.io/tree/main/MARSAM) deposuna yalnızca `MARSAM/` klasörü eklenerek yayımlandı. Kişisel ana sayfa, diğer siteler ve mevcut iş akışları değiştirilmedi. Pages yönetim ayarları veya hesap izinleri değiştirilmedi.

Yayımlanan uygulamanın kaynak commit'i `3fbce07da07e68b08d443d2643ff09be7f1fb0e2`, yayın commit'i `94ebcf8cf2d61a38717fb95bd8b1a87e3e1b68e2`.

[Pages dağıtımı](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36876484050), [yayın ve canlı tarayıcı kontrolleri](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36875672984), [yayın manifesti](https://onourimpram.github.io/MARSAM/release.json).

[Yayın ve güncelleme notları](docs/GITHUB_PAGES_TR.md). Bu depodaki bağımsız `deploy-pages.yml` iş akışı mevcut ana makine yayınıyla aynı dağıtım yolu değildir.

## Yerel çalıştırma

Node.js 22 veya üzeri. Uygulamanın npm çalışma zamanı bağımlılığı yoktur.

```sh
npm run check
npm run preview
```

Yerel adres `http://127.0.0.1:4173/tr/`.

GitHub Pages yolu için.

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
npm run preview
```

PowerShell ortamında değişkenler ayrı satırlarda tanımlanır.

```powershell
$env:BASE_PATH='/MARSAM/'
$env:PAGES_PREVIEW='true'
npm run check
npm run preview
```

Bu yapıda yerel adres `http://127.0.0.1:4173/MARSAM/tr/` olur.

## Testler ve tasarım dayanakları

`npm run check` içerik, dil, rota ve kaynak kontrollerini çalıştırır. Gerçek tarayıcı testleri için yalnız test ortamında Playwright kullanılır.

```sh
python -m pip install playwright==1.57.0
python -m playwright install --with-deps chromium
python tests/browser_e2e.py
python tests/campus_e2e.py
```

[Karşılaştırmalı akademik platform incelemesi](docs/ACADEMIC_BENCHMARK_TR.md), Harvard Human Flourishing Program, Duke, Columbia SMBI ve IAPR için gözlenen yapı, tasarım çıkarımı ve uygulanan özelliği ayırır. Bu bir prestij sıralaması değildir. Marmara genel üniversite işaretlerinin kaynakları [varlık kayıtlarında](docs/MARMARA_ASSETS.json) bulunur.

## İçerik sınırları

Kaynak kayıtları V1 ve PARTIALLY_VERIFIED düzeyindedir. Çeviriler bilimsel ve dilsel insan incelemesini bekler. Teknik testler bağımsız erişilebilirlik, bilimsel onay veya ana dil incelemesi değildir. Özel konuşmalar, danışan verileri, ders dosyaları, kısıtlı ölçek maddeleri ve yayımlanmamış kitap bölümleri yayın paketinde bulunmaz. Dış kurumlar ortak veya destekçi olarak gösterilmez.

Site statiktir. Yönetici paneli, LMS, araştırma veritabanı ve sunucu tarafı başvuru işlemleri içermez. `PAGES_PREVIEW=true` teknik inceleme yayınını kaydeder. `PUBLISH=true` gerekli bilimsel ve kurumsal onaylar olmadığı sürece kapalıdır. Üniversite alan adına geçiş ayrıca ele alınır.
