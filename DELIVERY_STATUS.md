# MARSAM. Canlı tasarım revizyonu

1 Ekim 2026. Tasarım sürümü 0.5.0.

## Canlı adres

https://onourimpram.github.io/MARSAM/tr/

Yayımlanan uygulama kaynağı `a5dfb6558be5dbbf180321e114f4725b3e6b9657`. Yayın deposundaki commit `56f9e346f5616853191e2c1c245da4e40926943c`. Bu nottan sonraki belge ve test güncellemeleri, yayımlanan uygulama dosyalarını değiştirmez.

## İncelenen tasarım süreci

Elif Tasarım'ın önceki tasarım değerlendirmeleri, V4 teslim raporu ve V23 olarak etiketlenen son canlı ana sayfası incelendi. Bütün tarihsel sürümler yeniden kurulmuş gibi bir iddia yoktur. Kaynaklardan gözlenenler ve MARSAM'a ilişkin tasarım çıkarımları docs/ELIF_DESIGN_LESSONS_TR.md dosyasında ayrılmıştır.

## Görsel düzenleme

Marmara işareti ve merkezin tam adı korundu. Üst bölüm sadeleştirildi. Mobilde gereksiz tekrarlar kaldırıldı ve dil seçicinin görünür etiketi kısaltılırken tam dil adı erişilebilir kaldı.

Açılışta açık zemin, büyük serif başlık ve dekoratif su fotoğrafı kullanıldı. Fotoğraf bir MARSAM binası veya faaliyeti olarak sunulmadı. Kaynak kaydı ayrı tutuldu. Gerçek bina gibi gösterilen temsili görüntüler, hayalî personel, uydurma istatistikler veya tanıtım videosu eklenmedi.

Tekrarlayan eş boyutlu kutuların yerine, araştırma alanlarında asimetrik dizin, yayınlarda farklı ağırlıklara sahip seçki, öğrenmede yerel HTML açılır bölümleri ve okuma dosyalarında ayrı bir görsel düzen kuruldu. Kütüphane, kaynak detayları, karşılaştırma tablosu ve uzun okuma sayfaları da aynı tipografi ve boşluk sistemiyle düzenlendi.

## Korunanlar

Sekiz dil, Arapça yönü, arama, okuma listesi, kaynak karşılaştırma, atıf indirme ve yerel katkı taslağı korunur. Akademik içerik kayıtları değiştirilmedi. Önceki düzeltmedeki sınırlar korunur. Tasarım referansları kamusal kurum dizinine dönüştürülmedi. Kişisel araştırma sorusu merkez sloganı yapılmadı.

## Canlı doğrulama

Son başarılı canlı doğrulama çalışması https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36895762664 adresindedir. Yayın işi 36894438613 içinde dosya hash denetimi ve kapsamlı tarayıcı adımları başarılı olmuş, son ek kontrol başarısız kalmıştır. Bu nedenle normal, sorgu parametresi içermeyen stil dosyası ve kullanıcı akışları ayrı bir işte yeniden denetlenmiştir. Son işteki 100 kontrolün tamamı geçmiştir. Önceki işin bütünü başarılıymış gibi gösterilmez.

Yayımlanan dosyalar kaynak sürümün hash kayıtlarıyla karşılaştırıldı. Gerçek GitHub Pages adresinde sekiz dil ve dört ekran genişliğiyle gezinme, başlıklar, görüntü yükleme, mobil menü, öğrenme yolları, kaynak karşılaştırma ve indirme denetlendi. Çince, CJK yazı tipleri bulunan bir test ortamında ayrıca görsel olarak kontrol edildi. Arama düğmesinin satır kırılması aynı ortamda yeniden üretildi ve giderildi.

Canlı son sürümde arama, okuma listesi kalıcılığı ve gerçek RIS indirme yeniden sınandı. Ana sayfa ve iç sayfaların masaüstü ve mobil ekranları canlı adresten alındı. Tarayıcı denetimi Chromium ile sınırlıdır. Bağımsız erişilebilirlik sertifikası, ana dil uzmanı incelemesi veya bilimsel editör onayı değildir.

Yayın deposunda yalnız MARSAM ağacı değiştirildi. Elif Tasarım, kişisel ana sayfa ve diğer kök girdilerinin hash değerleri korundu. Bir kerelik taşıma iş akışları ve kod aktarım paketleri MARSAM ana dalına taşınmadı.
