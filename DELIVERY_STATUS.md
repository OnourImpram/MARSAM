# MARSAM. Canlı web sitesi ve teslim durumu

1 Ekim 2026. İnceleme sürümü 0.3.0.

**[Web sitesini aç](https://onourimpram.github.io/MARSAM/)**

Site GitHub Pages üzerinde yayımlandı. Gerçek HTTPS dosyaları ve canlı tarayıcı etkileşimleri doğrulandı. Kullanıcının beğendiği Marmara kimlikli tasarım ve sekiz dil korundu. Kaynak kodu [PR 1](https://github.com/OnourImpram/MARSAM/pull/1) üzerinden bu deponun `main` dalına birleştirildi.

## Tamamlanan yayın

Yayımlanan uygulama kaynağı `3fbce07da07e68b08d443d2643ff09be7f1fb0e2`. Kaynak birleştirme commit'i `5518f8ba5320036a5c3c1cbf8f5358dbda8162cc`.

Yayın ana makinesi `OnourImpram/onourimpram.github.io`, yayın dizini `MARSAM/`, yayın commit'i `94ebcf8cf2d61a38717fb95bd8b1a87e3e1b68e2`.

Önceki bağımsız Pages yapılandırma engeli için artık kullanıcı işlemi gerekmiyor. Sürüm, kullanıcının zaten etkin olan Pages yayınına ayrı bir dizin olarak eklendi. Yönetim yetkileri, hesap ayarları, kişisel ana sayfa, diğer siteler ve mevcut iş akışları değiştirilmedi.

[GitHub Pages dağıtımı](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36876484050) başarıyla tamamlandı.

[Yayın ve canlı tarayıcı doğrulaması](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36875672984) başarıyla tamamlandı.

## Yayımlanan özellikler

Marmara Üniversitesi için planlanan merkez kimliği, resmî genel üniversite işaretleri, sekiz dil, Arapça sağdan sola düzen, altı tematik koleksiyon, dört kaynağa kadar karşılaştırma, yerel kalıcı seçim ve diller arasında korunan paylaşılabilir adresler bulunur. Yerel JSON dışa aktarımı, tarihli dış etkinlikler ve uluslararası kaynak dizini çalışır.

Arama, konu ve tür filtreleri, kalıcı okuma listesi, atıf kopyalama, RIS ve BibTeX araçları korunmuştur. Katalog 22 kaynak kaydı, sekiz başlangıç dosyası ve üç öğrenme rotası içerir. 55 mantıksal sayfanın sekiz dildeki karşılığı 440 yerelleştirilmiş adrestir. Ayrıca Türkçe kök ana sayfa ve 404 dosyası bulunur. Bu sayılar ayrı yayın sayıları değildir.

## Bu yayında yeniden çalıştırılan kontroller

Kök yol ve `/MARSAM/` yolunda 29 Node içerik, dil ve sözleşme testi ile dokuz üretilen bağlantı testi geçti. Yayın öncesi gerçek HTTP Chromium testlerinde 642 temel işlev kontrolü ve 803 kurumsal geliştirme kontrolü geçti.

Canlı HTTPS adresinde 506 dosyanın içeriği SHA256 manifestiyle eşleşti. Canlı sunucudan alınan manifestin Git blob kimliği ayrıca yayımlanmış depodaki `c34cd64f0e3026e3b379f7bbdbf5af01ab3bcfa3` kimliğiyle eşleştirildi. Böylece canlı dosya kontrolü yayımlanan Git sürümüne bağlandı.

Doğrudan canlı site üzerinde 803 Chromium kontrolü geçti. Ek olarak Türkçe arama, yeniden yükleme sonrasında okuma listesi kalıcılığı, klavyeyle arama penceresi ve gerçek yerel JSON indirmesi doğrulandı. Tarayıcı hata listesi boştur. Kontroller 320, 390, 768 ve 1440 piksel genişlikleri içerir. Canlı Türkçe masaüstü ve mobil görüntüleri ile Arapça mobil görünüm görsel olarak da incelendi.

[Kalıcılığı sağlanan doğrulama özeti](docs/LIVE_REVIEW_RELEASE.json). Ayrıntılı test ve ekran görüntüsü paketi Actions kaydında 15 Ekim 2026 tarihine kadar saklanır. Bu sayılar otomatik doğrulama koşullarıdır, farklı kullanıcı senaryosu veya bağımsız katılımcı sayısı değildir.

## Sınırlar

Bu, çalışan ve herkese açık bir kurumsal inceleme sitesidir. Resmî merkez kuruluşunu, üniversitenin yayın onayını, yönetim atamalarını veya bilimsel değerlendirmelerin tamamlandığını ilan etmez. Kaynak kayıtları V1 ve PARTIALLY_VERIFIED düzeyini korur. Metinler ve çeviriler bilimsel ve dilsel insan incelemesini bekler.

Gerçek CMS, LMS, hesap sistemi, araştırma veritabanı veya sunucu tarafı başvuru sistemi yoktur. Katkı aracı yalnız yerel dosya oluşturur, gönderim yapmaz. Özel ders dosyaları, kitap taslakları, mesajlar, kısıtlı ölçek maddeleri veya katılımcı verileri yayımlanmamıştır. Chromium kontrolleri bağımsız erişilebilirlik belgesi veya bütün tarayıcılarda kusursuzluk garantisi değildir.

[Güncelleme ve yayın mimarisi](docs/GITHUB_PAGES_TR.md).
