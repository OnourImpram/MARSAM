# MARSAM 0.8.1. Çini uygulaması ve tamamlanan canlı teslim

2 Ekim 2026. Onaylanan seyrek, asimetrik İznik esintili çini kompozisyonu GitHub Pages üzerinde yayımlandı. Kaynak doğrulaması, yayın ve gerçek canlı tarayıcı kontrolleri başarıyla tamamlandı. Bu belge değişikliği yayımlanan uygulama dosyalarını değiştirmez.

## Canlı site

https://onourimpram.github.io/MARSAM/tr/

https://onourimpram.github.io/MARSAM/en/

## Uygulanan görsel değişiklik

Sayfanın ve açılışın dış kenarlarındaki eski tekrarlı geometri, MARSAM için oluşturulan iki özgün çini SVG kompozisyonuyla değiştirildi. Hatayi esintili çiçekler, rumi karakterli kıvrımlar, stilize laleler ve yapraklar seyrek dallar halinde kullanıldı. Renkler grileştirilmiş kobalt #46647a ve turkuaz #648a88. Mercan, dini ikonografi, müze eseri kopyası veya dış görsel bağımlılığı eklenmedi.

Kompozisyonlar kısmen ekran dışında devam eder. Motifin kendisi alfa maskesiyle içerik sınırına yaklaşmadan kaybolur. Ortaya beyaz örtü, parlama veya bulanıklaştırma eklenmez. Normal okuma ve kaynak alanları temiz kalır. Tablet görünümünde yoğunluk azalır. Mobilde genel sayfa ve açılış kenar bezemesi kapanır, yalnız başlık üstündeki boş köşede küçük bir fragman kalır. Baskıda, zorlanmış renklerde ve maske desteklenmediğinde yeni bezeme kapatılır.

Marmara Üniversitesi logosu, Atatürk Eğitim Fakültesi, Eğitim Bilimleri Bölümü ve Rehberlik ve Psikolojik Danışmanlık Anabilim Dalı satırı korundu. Ebru çerçeve, kemerli mat panel ve panelin iç geometrisi değişmedi. Tipografi, grid, kartlar, kitap ve makale kayıtları, dört araştırma rehberi, indirilebilir çalışma dosyaları ve sekiz dil aynı kaldı. Önceden kaldırılan büyük açılış araması, açıklama paragrafı, kısayol sırası, alt çiçek ve parlama geri getirilmedi.

Yeni JavaScript, animasyon, font veya raster görsel eklenmedi. Yeni koyu tema kurulmadı. Mevcut koyu yüzeyler değiştirilmedi. İki yeni SVG'nin toplam gzip boyutu 3.105 bayt. CSS gzip boyutu 13.187 bayt, mevcut 18.000 bayt bütçesinin altında. Bunlar dosya ölçümleridir, saha Core Web Vitals sonuçları değildir.

## Önceki kesintinin nedeni ve düzeltme

Önceki 37015548752 numaralı kaynak işinde bütün testler geçmiş, ancak build token ile bir workflow dosyasını değiştiren commit gönderilmek istendiğinde GitHub gönderimi reddetmişti. Bu çalıştırmada token yetkileri genişletilmedi. Build token yalnız uygulama ve test dosyalarını kaydetti. Gerekli yeniden kullanılabilir CI değişikliği yetkili bağlantı üzerinden ayrı uygulandı. Başarılı çini tasarımı baştan üretilmedi.

Yeni kaynak doğrulaması https://github.com/OnourImpram/MARSAM/actions/runs/37052908156

Başarılı canlı doğrulama https://github.com/OnourImpram/onourimpram.github.io/actions/runs/37054039081

## Sürüm kimliği

Yayımlanan uygulama kaynağı `0bf0a06f122ffc808273d918ef77ebe9ef79ba5d`.

Hosting commit `a0cb5bc1bd1a0bdc9fc1d77ea324b15ecf8848c8`.

MARSAM ağacı `0471e3096f86fd8d6bab1d5567369ae535c78afd`.

## Doğrulama kapsamı

649 kamusal dosyanın SHA256 değeri canlı yayın manifestiyle eşleşti. Sürüm parametresi olmayan stil dosyası ve iki SVG ayrıca karşılaştırıldı. Gerçek https://onourimpram.github.io origin üzerinde Chromium, Firefox ve WebKit kullanıldı. Çini paketi sekiz dilde 320, 390, 768, 1440 ve 1920 piksel genişlikleri sınadı. Bu pakette 1.225 kontrol, temel etkileşimde 818, kapsamda 899, yerleşimde 2.627 ve araştırma rehberlerinde 2.324 kontrol geçti. JavaScript hata kaydı ve form gönderimi yoktu. Bu sayılar otomatik assertion sayılarıdır, kullanıcı katılımcısı veya bağımsız test senaryosu sayısı değildir.

Kaynak doğrulamasında eski sürümle aynı ortamda ek karşılaştırma yapıldı. Grid ve metin ölçüleri aynı kaldı. Kesirli koordinatların ekran görüntüsünde yuvarlandığı tek piksellik dış sınır hariç panelin piksel eşitliği doğrulandı. Kitap kapakları her iki karşılaştırmada tamamen yüklendi. Kaynak çini paketinde bu ek denetimlerle 1.273 kontrol geçti. Python betiği, gerçek Jupyter notebook ve veri bozulması kontrollerinin beş testi de geçti.

Canlı masaüstü 1440 ve 1920, mobil 390 ve araştırma sayfası ekran görüntüleri ayrıca gözle incelendi. Görseller canlı doğrulama paketinden alındı, yerel önizleme görüntüleri canlı görüntü olarak sunulmadı.

Canlı kanıt paketi `11248380522`. ZIP SHA256 `766b8c07e431c0aef17e30c75db2dc96742492312e593959ec883a76cb2066c6`.

## Korunan kapsam ve sınırlar

Hosting deposunda yalnız MARSAM alt ağacı değiştirildi. .github, .nojekyll, kök README, kişisel index.html ve Elif Tasarım ağacı aynı SHA değerlerinde kaldı. Koruma kayıtları docs/releases/cini-0.8.1-live.json içindedir.

Teknik kontroller insan bilimsel incelemesi, ana dil uzmanı değerlendirmesi, gerçek cihaz veya ekran okuyucu araştırması ve bağımsız erişilebilirlik sertifikası değildir. Saha Core Web Vitals ölçümü yapılmadı. Kurumsal kuruluş, akreditasyon ve klinik hizmet yetkisi ileri sürülmedi. Önceki tamamlanan teslim docs/releases/DELIVERY_0_8_COMPLETED_HISTORICAL.md içinde korunur. Çini kararları docs/design/CINI_0_8_1.md, görsel köken kayıtları docs/CINI_ASSETS.json dosyasındadır.
