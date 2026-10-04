# MARSAM 0.10.2. Canlı dipnot temizliği

4 Ekim 2026. Kullanıcının gösterdiği genel klinik hizmet dipnotu ve benzer tekrarlanan uyarılar sekiz dilde kaldırıldı. Güncel sürüm canlıya yayımlandı.

Canlı site. https://onourimpram.github.io/MARSAM/tr/?v=0.10.2

## Değişiklikler

Ortak altbilgideki genel tanı ve terapi uyarısı, aynı metnin okuma ve katkı sayfalarındaki kopyaları, öğrenme yollarındaki genel kayıt ve sertifika uyarısı ve sayfalarda tekrarlanan taslak panelleri kaldırıldı. Bunlar CSS ile gizlenmedi. Oluşturma şablonları, kullanılmayan arayüz anahtarları ve artık kullanılmayan bileşen CSS kuralları temizlendi.

Kaynakçalar, araştırmalara özgü sınırlılıklar, ölçek izinleri, görsel atıflar ve editoryal politika korundu. 44 kaynak, sekiz dil ve 0.10.1'de düzeltilen sürekli portal görseli değiştirilmedi. Başka host projelerine dokunulmadı.

## Doğrulama

117 kaynak testi ve 11 oluşturulmuş site testi hem kök hem /MARSAM/ yollarında başarılıdır. Yeni beş test önce eski kaynakta beklenen şekilde başarısız oldu, değişiklikten sonra geçti. Kaynak ana dal doğrulaması 37229576625 ve GitHub Pages yayını 37229747478 başarıyla tamamlandı.

Gerçek kamuya açık adreste 883 dosyanın tamamı boyut ve SHA256 bakımından yayın manifestiyle eşleşti. 730 HTML dosyasının tamamında kaldırılan uyarı bileşenleri ve kullanılmayan iki arayüz anahtarı bulunmuyor. Chromium, Firefox ve WebKit ile 577 dipnot ve okuma arayüzü, 745 portal ve 818 temel etkileşim kontrolü geçti. Mobil ve masaüstü canlı altbilgi ekran görüntüleri incelendi.

## Test yürütme kayıtları

İlk aday işi 37228594596 mevcut testleri geçti. Yeni tarayıcı testinde Firefox, test konteynerindeki HOME sahipliği nedeniyle başlatılamadı. Yalnız test ortamı düzeltildi. Aynı web sitesi değişikliğini yeniden doğrulayan 37229227727 işi başarılıdır.

Canlı kontrol işi 37229640255 bütün dosya ve tarayıcı denetimlerini tamamladı. Testlerin ardından günlükleri yazdıran `tail -3` komutu çoklu dosya kullanımında hata verdiğinden işin genel durumu başarısızdır. Bu kayıt başarılı workflow olarak sunulmaz. Saklanan ayrı JSON ve günlük sonuçları, 577, 745 ve 818 canlı kontrolün tamamının başarılı olduğunu gösterir. Bu günlük yazdırma hatası kaynak kodu veya canlı site hatası değildir.

## Sabit yayın kimliği

Kaynak payload. `15885a42b21d082401c63406f1e433e064f15768`.

Host commit. `bf401c9299651d0ebac5f6430549f4f37873e054`.

[Değişmez yayın kaydı](docs/releases/notice-cleanup-0.10.2-live.json). [Temizlenen bileşenler](docs/design/NOTICE_CLEANUP_0_10_2.md). Sonraki yalnız belge içeren commitler yayınlanan payload kimliğini değiştirmez.
