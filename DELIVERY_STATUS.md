# MARSAM 0.9.0. Bilimsel kanıt ve araştırma okuması

3 Ekim 2026. MARSAM 0.9.0, [canlı inceleme sürümü](https://onourimpram.github.io/MARSAM/tr/) olarak yayımlandı ve doğrulandı. Mevcut onaylı portal tasarımı korunarak bilimsel kaynakların değerlendirilmesi güçlendirildi. Kesin commitler, 784 dosyanın canlı hash karşılaştırması, üç tarayıcıda 8.554 başarılı kontrol ve ilk HTTP hatasının kaydı docs/releases/scholarly-evidence-0.9.0-live.json içindedir. Ayrıntılı Türkçe rapor docs/releases/SCHOLARLY_RELEASE_0_9_0_TR.md dosyasındadır. Önceki 0.8.3 teslim kaydı docs/releases/DELIVERY_0_8_3_HISTORICAL.md içinde korunur.

## Değişiklikler

- Mevcut 27 kaynağın tümü için gerekçeli kapsam kararı. 25 kaynak korundu, iki kişisel gelişim kaydı kamusal akademik seçkiden çıkarıldı. Tarihsel kayıtları silinmedi.
- Uluslararası ve Türkiye bağlamlarından 11 araştırma veya ölçme kaynağı eklendi. Kamusal katalog toplamı 36 kaynak.
- Altı temayı bir araya getiren Kanıtı okumak sayfası. Araştırma tasarımı, örneklem, bulgu ve çıkarım sınırı birlikte sunulur.
- Brief RCOPE, RSS-14, Yaşamın Anlamı Ölçeği ve DUREL için dört ölçme profili. Ölçek maddeleri veya izinsiz çeviriler çoğaltılmaz.
- Prof. Dr. Halil Ekşi’nin akademik girişimin kurucusu olarak ölçülü tanıtımı. Resmî müdürlük veya tamamlanmış merkez kuruluşu iddiası yoktur.
- Sekiz dilde 88 yeni kaynak metni ortak bilgi kayıtlarına bağlanır. Bilgi veya sınırlılık değiştiğinde eski dil sürümleri derlemeyi durdurur.
- Aday literatür keşfi betiği kamusal kataloğa otomatik içerik eklemez.

## Doğrulanan teslim

Kaynak PR 5, tüm kaynak ve üretilmiş sayfa testleri iki kökte, gerçek Jupyter defteri ve altı tarayıcı takımı başarılı olduktan sonra birleştirildi. Canlı paket tam olarak test edilen 05963f0512cab78e599945448d4365a6a705b835 kaynak commitinden üretildi. Yayın deposunda yalnız MARSAM ağacı değişti. Elif Tasarım ve diğer kökler aynı Git kimliklerini korur.

Canlı kontrolün ilk genel gezinme takımı Rusça katkı sayfasında GitHub servis hata sayfası aldı. İlk hata kaydı silinmedi. Aynı kod ve aynı test koşullarıyla bütün genel gezinme takımı üç tarayıcıda yeniden çalıştırıldı. 818 kontrol geçti, kaydedilen 280 gezinme yanıtı HTTP 200 oldu. Diğer beş takım ilk canlı çalıştırmada geçti. Hiçbir test koşulu gevşetilmedi. Güncel sonuçların ham JSON kayıtları docs/releases/verification/0.9.0 içinde, canlı ekran görüntüleri docs/releases/screenshots içinde bulunur.

## Bilinçli kararlar

Onaylı ebru portalı, palet, çini düzeni ve statik mimari korundu. Var olan güçlü dosyalar yeniden yazılmadı. Birçok küçük bölüm yerine altı temalı tek kanıt okuma alanı kuruldu. Başlığı genel görünen ancak manevi yaklaşımı açıkça içeren BDT, grup danışması ve kuram kitapları korundu. Güncel araştırma vitrini kurucu yayınlarıyla sınırlı tutulmadı.

## İnceleme sınırları

İçerik ve dil sürümleri yapay zekâ destekli editoryal taslaktır. Bilimsel uzman, anadil uzmanı ve resmî kurumsal onay tamamlanmış gösterilmez. Kaynaklar V1 / PARTIALLY_VERIFIED düzeyindedir. Dört ölçme profili kapsamlı geçerlik, uyarlama veya puanlama kataloğu değildir. Tema, kurucu ve RSS açıklamalarında yapısal dil denetimi vardır, 88 kaynak sürümüyle aynı ortak bilgi özeti bağı mevcut değildir. Ekran okuyucu kullanıcı araştırması ve bağımsız erişilebilirlik sertifikası yapılmamıştır.

Kaynak seçimi, doğrulama kapsamı, terminoloji ve bakım süreci docs/research/SCHOLARLY_WORKFLOW.md içinde açıklanır. Son kod incelemesi docs/research/FINAL_REVIEW.md içindedir.
