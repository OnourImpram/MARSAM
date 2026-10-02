# MARSAM 0.8.2. Mevcut çini tasarımının belirginleştirilmesi

2 Ekim 2026. Mevcut çini desenleri daha görünür hale getirildi ve canlı siteye yayımlandı. Yeni motif, SVG, raster görsel, renk paleti veya tasarım sistemi eklenmedi. Yalnızca mevcut CSS dekorasyon kurallarındaki opaklıklar ve kenar maskelerinin geçişi değişti.

## Canlı site

https://onourimpram.github.io/MARSAM/tr/?v=0.8.2

https://onourimpram.github.io/MARSAM/en/?v=0.8.2

## Görsel değişiklik

Aynı iki özgün çini SVG dosyası, aynı renk kodları, aynı boyutlar ve aynı konumlar korunuyor. Sayfa kenarı opaklığı 0,07 yerine 0,30. Açılış kenarı 0,105 yerine 0,32. Başlık üzerindeki mevcut dal 0,095 yerine 0,34. Bunlar CSS alfa değerleridir, algısal görünürlük oranları değildir. Kenardaki çizgiler daha uzun süre görünür kalırken maske, ana içerik sınırından 8 veya 10 piksel önce tamamen kaybolmaya devam ediyor. Tablet görünümünde 0,18 ila 0,24, mobildeki tek mevcut fragmanda 0,20 kullanılıyor.

Yeni çiçek, lale, rozet, merkez filigranı, çerçeve veya hareket eklenmedi. Önceki on görsel alternatiften herhangi biri siteye aktarılmadı. Parlama, beyaz örtü ve bulanıklık geri getirilmedi. Baskı ve zorlanmış renk modlarında dekorasyon kapalı kalıyor. Koyu yüzeyler değişmedi.

Marmara Üniversitesi logosu, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü ve Rehberlik ve Psikolojik Danışmanlık Anabilim Dalı satırı aynı kaldı. Ebru çerçeveli mat panel, tipografi, grid, kartlar, özgün kitap ve makale künyeleri, dört araştırma rehberi, indirmeler ve sekiz dil korunuyor.

## Yayın öncesi ve canlı doğrulama

Kaynak denetimi https://github.com/OnourImpram/MARSAM/actions/runs/37059667142

Canlı denetim https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37060669243

Her iki çalışma başarıyla tamamlandı. Önce eski CSS üzerinde görünürlük regresyonunun beklenen nedenle başarısız olduğu doğrulandı. Ardından iki dağıtım kökü, kaynak sözleşmeleri, mevcut etkileşimler, araştırma indirmeleri ve tarayıcılar sınandı. Aynı ortamda eski ve yeni sürümün yerleşim ve yazı ölçüleri eşleşti. Kesirli ekran koordinatlarının bir piksellik dış örnekleme kenarı hariç merkez panelin piksel eşitliği doğrulandı.

Canlı https://onourimpram.github.io adresinde Chromium, Firefox ve WebKit, sekiz dil ve çini paketi için beş genişlik kullanıldı. 649 kamusal dosyanın SHA256 değeri yayın manifestiyle eşleşti. Sürüm parametresi içermeyen CSS ve iki SVG ayrıca kontrol edildi. Çini paketinde 1273, temel etkileşimde 818, kapsamda 899 ve yerleşimde 2627 assertion geçti. Araştırma rehberi paketi de hatasız tamamlandı. Bunlar otomatik assertion sayılarıdır, bağımsız katılımcı veya senaryo sayıları değildir.

Yayın aşaması, kamusal dosya adlarının önceki sürümle aynı olduğunu ve HTML içeriğinde yalnız sürüm etiketinin değiştiğini doğruladı. Araştırma manifestlerinde yalnız platform sürümü değişti. Görsel dosyaları, renk değişkenleri, araştırma verileri, çeviriler ve diğer statik dosyalar değişmedi. Yeni kamusal dosya sayısı sıfırdır. CSS gzip boyutu 13198 bayttır, önceki 13187 bayta göre 11 bayt artmıştır. Yeni JavaScript, font veya görsel yükü yoktur. Bu ölçüm saha Core Web Vitals değerlendirmesi değildir.

Canlı ana sayfa, geniş ekran, mobil ve iç sayfa görüntüleri doğrulama paketinden alındı. Canlı masaüstü görüntüsü ayrıca gözle incelendi. Yerel önizleme görüntüsü canlı görüntü olarak sunulmadı.

## Sürüm kimliği ve korunan host kapsamı

Uygulama kaynağı `01d9ffa171f7c40f635a33f910a0891133933951`.

Hosting commit `6b47990c0c343bdaa365b5e7d3737b173e463ea9`.

MARSAM ağacı `b1ac951f4ceaabe32d0da73036ec9f1fe88ee192`.

Canlı kanıt paketi `11250671444`. ZIP SHA256 `51d446740ff3507084751760da5c0a4fd2383f6d7505855976c9d8859080e90d`.

Hosting deposunda yalnız MARSAM alt ağacı değiştirildi. .github, .nojekyll, kök README, kişisel ana sayfa ve Elif Tasarım ağacı aynı SHA değerlerinde kaldı. Bu son belge güncellemesi uygulama dosyalarını değiştirmez.

## Sınırlar ve önceki kayıt

Teknik kontroller bağımsız erişilebilirlik sertifikası, gerçek cihaz araştırması, bilimsel editör onayı veya ana dil uzmanı incelemesi değildir. Kurumsal kuruluş, akreditasyon ve klinik hizmet yetkisi eklenmedi. Kaynak inceleme, hak ve çeviri onayları yükseltilmedi.

Önceki 0.8.1 teslimi değişmez Git kaydında korunur. https://github.com/OnourImpram/MARSAM/blob/0ca2cb83667788fed8379f22a8ea5a1916ca2a3e/DELIVERY_STATUS.md

Görsel kararın önceki tasarım ve son görünürlük düzeltmesi docs/design/CINI_0_8_1.md içindedir. SVG köken kayıtları docs/CINI_ASSETS.json dosyasında değişmeden kalır.
