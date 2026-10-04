# MARSAM 0.9.1. Ölçme kimliği ve çok dilli kanıt sürekliliği

4 Ekim 2026. MARSAM 0.9.1, 0.9.0 bilimsel kanıt sürümünün son akademik red team düzeltmesi olarak yayımlandı. Görsel kimlik veya bilgi mimarisi yeniden tasarlanmadı. Düzeltme, ölçme araçlarının birbirine karışması, kaynak içi psikometrik uyuşmazlığın görünürlüğü ve sekiz dilde kanıt güncelliğinin izlenmesi üzerinde yoğunlaştı.

## Canlı site

https://onourimpram.github.io/MARSAM/tr/?v=0.9.1

https://onourimpram.github.io/MARSAM/en/?v=0.9.1

## Bilimsel düzeltmeler

### İki ayrı SWBS

Aynı İngilizce kısaltma ve başlığa sahip iki farklı araç artık veri modelinde, ölçme dizininde, kaynak sayfalarında ve sekiz dilde ayrı kimliklerle gösterilir.

1. Ekşi ve Kardaş 2017. Türkiye'de geliştirilen 29 maddelik Spiritual Well-Being Scale.
2. Paloutzian ve Ellison 1982. 20 maddelik Spiritual Well-Being Scale.

Madde sayısı, geliştiriciler ve ölçme kökeni arayüzde görünür. Puanların veya psikometrik kanıtların birbirinin yerine kullanılabileceği izlenimi verilmez.

### Kaynak içi SRMR uyuşmazlığı

Ekşi ve Kardaş 2017 çalışmasının özetinde SRMR .50, Tablo 6'da ise .050 olarak raporlanır. MARSAM bu iki değerden birini varsayımla düzeltmez. Uyuşmazlık kaynak notuna açıkça eklenir ve doğrulama sınırı olarak korunur.

### Geliştirme, uyarlama ve doğrulama ayrımı

Türkiye'de geliştirilmiş bir araç ile başka bir aracın Türkçe uyarlaması aynı kategoriye konmaz. Bir çeviri veya Türkçe formun varlığı da bağımsız psikometrik doğrulama olarak sunulmaz.

### Çok dilli kanıt güncelliği

Kaynak kartlarının ötesinde kurucu bölümü, kanıt temaları, RSS ve önemli anlatı blokları kaynak parmak izi, ortak brief ve dil sürümü kimliklerine bağlandı. İçerik değiştiğinde eski bir dil sürümünün sessizce güncel görünmesini engelleyen doğrulama eklendi.

### Kaynak defteri

Tek bir global “checked” tarihi artık tüm katalog için güncellik iddiası üretmez. Kayıt düzeyindeki inceleme tarihleri yetkilidir.

### Editoryal temizlik

Hakkında sayfasındaki yinelenen giriş metni kaldırıldı. İçerik kapsamı veya kurucu ağırlığı büyütülmedi.

## Korunan güçlü sistemler

36 kaynaklık kamusal seçki, altı kanıt teması, kurucu bölüm, araştırma ve yöntem rehberleri, katalog, arama, DOI ve ISBN erişimi, okuma listesi, karşılaştırma, atıf dışa aktarımı, sekiz dil ve Arapça RTL davranışı korundu.

Onaylı katmanlı ebru portalı, İznik esintili arka plan, Marmara Üniversitesi masthead'i, renk paleti, tipografi, grid ve kart sistemi değişmedi. Görsel varlık SHA değerleri bu sürümde değiştirilmedi.

## Test ve doğrulama

Düzeltme için önce beş yeni regresyon testi eski davranış üzerinde başarısız oldu, ardından uygulama sonrası beşi de geçti.

Aday doğrulama çalışması 37192115633 başarıyla tamamlandı. Altı tarayıcı paketi şu otomatik kontrol sayılarını geçti.

- Temel etkileşim 818.
- Kapsam 899.
- Yerleşim 2723.
- Araştırma 2324.
- Çini 1393.
- Scholarship 829.

Ana dalın bağımsız doğrulaması 37201521701 üzerinde başarıyla tamamlandı. İki deployment root, gerçek notebook ve kurcalama kontrolleri, üç tarayıcı motoru, sekiz dil, responsive düzen ve kurumsal sınırlar geçti.

Hosting staging işi 37201910825 başarıyla tamamlandı. İlk staging denemesi kaynak hatası nedeniyle değil, runner ortamında nbformat bulunmadığı için durmuştu. Eşleşen notebook bağımlılıkları kurulduktan sonra exact kaynak aynı kontrollerden geçti.

GitHub Pages build ve deploy işi 37202021619 başarıyla tamamlandı.

## Sürüm kimliği

Kaynak commit: `b0f1ddb59b97b480fb994226a196e2d40d184d9c`.

Hosting commit: `0e0a0e9f38451ccf18b8a421f1be900edc19ad31`.

Host tree: `7222a0180dcda023cd5b3251f63454927145f7d1`.

MARSAM subtree: `b584efaa8bc5f3e5be6a74fbc3258809ff533dc7`.

Canlı hosttaki `MARSAM/release.json`, sürümü 0.9.1 ve sourceCommit değerini yukarıdaki kaynak commit olarak kaydeder. Yayımlanan Türkçe ölçme dizini de `data-release="0.9.1"` taşır.

## Bilinçli sapmalar

Master brief'teki her öneri mekanik olarak uygulanmadı. Bu sürümde yeni bilgi mimarisi, yeni görsel sistem veya yüzlerce yeni kaynak eklemek yerine 0.9.0'ın güçlü çözümleri korundu. Bunun nedeni bilimsel bütünlük önceliğinin değişiklik hacminden daha yüksek olmasıdır.

Ölçme dizini “tam psikometri gözlemevi” olarak sunulmadı. Yalnız kaynağı yeterince doğrulanmış alanlar genişletildi. Ölçek maddeleri çoğaltılmadı.

Sekiz dil “insan tarafından onaylanmış” gösterilmedi. Dil sürümleri yapay zekâ destekli editoryal taslak durumundadır. Bilimsel insan incelemesi, anadil incelemesi ve resmî yayın onayı ayrı kalır.

MARSAM'ın kurumsal statüsü yükseltilmedi. Platform planlanan Marmara Üniversitesi bağlamını korur, fakat teknik yayın resmî merkez kuruluşu, akreditasyon veya klinik yetki anlamına gelmez.

## Bilinen sınırlar

0.9.1 bağımsız bilimsel hakem incelemesi değildir. Sekiz dilde ana dil uzmanı incelemesi tamamlanmış değildir. Kaynakların V1 / PARTIALLY_VERIFIED düzeyi tam metin sistematik inceleme anlamına gelmez. Ölçme profilleri kullanım izni, puanlama talimatı veya klinik karar desteği sağlamaz. Bağımsız erişilebilirlik sertifikası ve saha Core Web Vitals çalışması yapılmamıştır.
