# MARSAM 0.10.1. Canlı görsel düzeltme teslimi

4 Ekim 2026. Kullanıcının gösterdiği sol alt dikdörtgen birleşim hatası giderildi ve düzeltme gerçek kamuya açık adreste doğrulandı.

Canlı site. https://onourimpram.github.io/MARSAM/tr/?v=0.10.1

## Düzeltme

Önceki iki CSS kaplaması kaldırıldı. Tek, kendi içinde yeterli SVG dosyası özgün WebP görselini bir kez gömer. Sağdaki ilk kemer konturu sola aktarılır. Kemer ayağı alt çerçeveden önce çapraz sonlanır. MARSAM yazısı ve görsel yeniden üretilmedi. Özgün WebP dosyaları değişmedi. Önceki kompozisyonu donduran testler, özgün piksel referansını denetleyen regresyonlarla değiştirildi.

Yalnızca mobil 480 ve masaüstü 960 çözünürlüklerini eşleştirmek yeterli değildi. Önceki dikdörtgen maske alt çerçeveyi de kesiyordu. Bu sürüm o geometrik sorunu giderir ve bağımsız ölçeklenen kaplamaları kaldırır.

## Doğrulama

112 kaynak testi ve 11 oluşturulmuş site testi hem kök hem /MARSAM/ yollarında geçti. Beş araştırma dosyası ve gerçek notebook testi başarılıdır. Mevcut yedi tarayıcı paketinde 10577, yeni portal paketinde 745 otomatik kontrol geçti. Yeni iki regresyon testi eski kompozisyonda beklenen şekilde başarısız oldu.

Aday doğrulaması 37226010682, ana dal doğrulaması 37226722972, host hazırlığı 37226744748 ve Pages yayını 37226834651 başarıyla tamamlandı.

Gerçek canlı kabul 37226348343 başarılıdır. 883 dosyanın tamamı, içlerindeki 730 HTML dosyası dahil, yayın manifestiyle boyut ve SHA256 bakımından eşleşti. Canlı adreste 818 temel etkileşim ve 745 portal kontrolü geçti. Chromium, Firefox ve WebKit, sekiz dil, 320, 390, 650, 651, 900 ve 1440 piksel genişlikleri sınandı. Türkçe ve Arapça için yüksek piksel yoğunluğu ayrıca kontrol edildi.

Seçilmiş alt çerçeve, merkez, sağ yüzey ve düzeltilmiş ayak bölgelerinde özgün referansa göre piksel farkı sıfırdı. Üç tarayıcının yüksek yoğunluklu mobil canlı portal görüntüleri test edilen adayla aynıydı. Canlı ekran görüntüleri ayrıca görsel olarak incelendi. Bu sonuçlar bütün cihazlar için kusursuzluk veya bağımsız erişilebilirlik sertifikası değildir.

## Korunan kapsam

44 kaynak, sekiz dil, 19 yapılandırılmış kanıt kaydı, 152 dil kaydı, kurucu anlatısı ve önceki akademik iyileştirmeler korundu. Eski 38 kaynaklık sürüme dönülmedi. Başka host projelerine dokunulmadı. Bu teknik düzeltme turunda yeni literatür araştırması yapılmadı.

## Sabit yayın kimliği

Kaynak payload. `f0572eb27dcd9324e07746ea89e192cbda47af23`.

Host commit. `12ed97027a1b7e46498497089bd95693370f0b39`.

[Değişmez yayın kanıtı](docs/releases/portal-continuity-0.10.1-live.json). [Görsel karar ve kök neden](docs/design/PORTAL_CONTINUITY_0_10_1.md).

Sonraki yalnız belge içeren commitler bu yayın payload kimliğini değiştirmez. Halil Ekşi'nin akademik değerlendirmesine sunulacak teknik sürüm hazırdır. İnsan bilimsel incelemesi, anadil uzmanı onayı ve resmî kuruluş süreçleri tamamlanmış gösterilmez.
