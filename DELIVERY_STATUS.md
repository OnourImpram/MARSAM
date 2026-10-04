# MARSAM 0.10.0. Doğrulanmış canlı teslim

4 Ekim 2026. Geliştirme, kaynak aktarımı ve GitHub Pages yayını tamamlandı. Kamuya açık sitede son kabul 16.32 UTC, 19.32 Türkiye saati itibarıyla başarıyla tamamlandı.

Türkçe https://onourimpram.github.io/MARSAM/tr/

## Teslim edilen kapsam

38 kaynaklık seçkiye altı çalışma eklenerek 44 kaynağa ulaşıldı. Sekiz kanıt teması, 19 yapılandırılmış kanıt kaydı ve 152 dil matrisi satırı bulunur. Kalıcı kaynak ve dil metni parmak izleri, DOI tekrar denetimi, kapsam dışı kaynak engeli, karşılaştırmalı okuma bağlantıları ve görünür inceleme kapsamı düzeltmesi yayımlandı. Bu döngüde yeni kaynak çıkarılmadı. Önceden arşivlenen iki kitap yeni çıkarım olarak gösterilmez.

Onaylı 0.9.4 ebru portalı, iki simetri düzeltmesi, çini, CSS, Marmara kimliği, gezinme ve kurucu anlatısı korundu. Canlı portal ekran görüntüsü üç tarayıcı motorunda adayın görüntüsüyle piksel düzeyinde aynıdır. Başka host projelerine veya kök dosyalara dokunulmadı.

## Doğrulama

Aday işi 37215979835 başarıyla tamamlandı. Yedi tarayıcı paketinde toplam 10577 otomatik kontrol geçti. Kaynak main doğrulaması 37216409064, host staging işi 37216449856 ve Pages yayını 37216558850 ayrıca başarılıdır.

Yayın sonrası gerçek HTTP kabul işi 37216622752, ikinci denemesinde aynı kaynak ve değişmemiş testlerle geçti. 882 kamuya açık dosyanın tamamı boyut ve SHA256 bakımından manifestle eşleşti. Bunların 730'u HTML dosyasıdır. Chromium, Firefox ve WebKit ile sekiz dilde 818 çekirdek ve 1495 yeni kanıt döngüsü kontrolü geçti. Arama, bağlantı geçişleri, gerçek RIS ve BibTeX indirmeleri, dar ekranlar, Arapça yön ve JavaScript kapalı içerik denetlendi.

İlk canlı denemede tek bir Chromium indirme olayı 15 saniyelik süreyi aştı. Bu başarısız kayıt gizlenmedi. Ayrı tanı işinde 60 gerçek indirme hızlı, ters sıralı ve aralıklı koşullarda geçti. İlk zaman aşımının kesin nedeni belirlenmiş değildir. Son tam kabul, dosya veya tarayıcı güvenlik ayarı değiştirilmeden geçti.

## Sabit yayın kimliği

Kaynak payload commit. `79e1204c9f6fe117afac5e6e9d5e4f90ce17cc68`.

Host commit. `17f646b3ef890c4ea9d2b28735f238c507b6ff71`.

MARSAM alt ağacı. `140fc86b0352801926d19e5cdfe346230faff5bd`.

[Değişmez yayın kanıtı](docs/releases/evidence-continuity-0.10.0-live.json). [Geliştirme ve eleştirel inceleme raporu](docs/cycles/2026-10-04/REPORT.md). Sonraki yalnız belge içeren commitler bu yayın payload kimliğini değiştirmez.

## Bilinçli kararlar ve sınırlar

Yüzlerce kayıt veya yeni bir site çatısı yerine çıkarım kalitesini güçlendiren altı kaynak, iki sentez ve kalıcı kanıt sürekliliği tercih edildi. İyi çalışan kurucu bölümü, arama, laboratuvar ve görsel kimlik yeniden kurulmadı.

Teknik teslim, resmî merkez kuruluşu, insan bilimsel onayı, anadil uzmanı incelemesi, klinik hizmet yetkisi veya bağımsız erişilebilirlik sertifikası değildir. Dil matrisi semantik eşdeğerlik sertifikası vermez. Eski legacy-seed içeriklerin tümünün yeni modele taşındığı iddia edilmez. Bu geliştirme ve yayın döngüsü tamamlandı, insan denetimi gerektiren bilimsel ve kurumsal işlemler tamamlanmış gösterilmedi.
