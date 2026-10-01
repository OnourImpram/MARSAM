# MARSAM

Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi. Marmara Üniversitesi bünyesinde planlanan merkez için sekiz dilli web taslağı.

İnceleme adresi: https://onourimpram.github.io/MARSAM/

## Sürüm 0.4.0

Ana sayfa merkezin tam adı, araştırma, eğitim ve mesleki gelişim çerçevesiyle açılır. Çalışma alanları, yayınlar, temel okumalar, öğrenme yolları, araştırma projeleri, seminerler, video arşivi ve duyurular ayrı bölümlerdir.

Tasarım için incelenen kurumların tanıtım kartları, kurum dizini ve dış etkinlik akışı kaldırılmıştır. Karşılaştırmalı web incelemeleri yalnız geliştirme belgelerinde kalır. Önceki tasarım raporlarında bu kurumların kamusal içeriğe taşınmasını öneren kararlar `docs/SCOPE_CORRECTION_TR.md` ile yürürlükten kaldırılmıştır. Bir öğrencinin araştırma sorusu veya kişisel yansıtması merkezin sloganı olarak kullanılmaz.

Alanla ilgili gerçek makaleler, kitaplar ve mesleki rehberler kaynakça bilgileriyle korunur. Bunlar tasarım referansı kurumların tanıtımından ayrıdır. Onaylanmış kayıt bulunmayan haber, proje, etkinlik ve video alanlarında gerçek durum belirtilir. Kayıt uydurulmaz.

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça sağdan sola düzenlenir. Endonezce ve Malayca ayrı metinlerdir. Her dilde aynı içerik yapısı bulunur. Şu an 12 kaynak kaydı, sekiz giriş okuması ve üç öğrenme yolu vardır. Yerelleştirilmiş adres sayısı yayın sayısı değildir.

## Yerelde çalıştırma

Node.js 22 veya üzeri. Uygulamanın npm paket bağımlılığı yoktur.

```sh
npm run check
npm run preview
```

Yerel adres: `http://127.0.0.1:4173/tr/`.

GitHub Pages yolu için:

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
npm run preview
```

## Testler

`npm run check` içerik, dil, kaynak, başlık, bağlantı ve yayın sınırı kontrollerini çalıştırır. Kurum vitrininin arama ve veri kayıtlarına geri girmesi ayrıca denetlenir.

```sh
python -m pip install playwright==1.57.0
python -m playwright install chromium
python tests/browser_e2e.py
python tests/scope_e2e.py
```

`tests/scope_e2e.py`, `PREVIEW_ORIGIN` tanımlandığında gerçek yayımlanmış siteyi sınayabilir. Arama, yerel okuma listesi, kaynak karşılaştırma, aynı sayfada dil değişimi, mobil menü ve gerçek dosya indirmesi korunur. Teknik testler bilimsel değerlendirme veya bağımsız erişilebilirlik sertifikası değildir.

## Yayın düzeni

Kaynak kodu bu depoda tutulur. Mevcut inceleme sitesi `OnourImpram/onourimpram.github.io` deposunun yalnız `MARSAM/` klasöründen yayımlanır. Güncelleme sırasında bu klasör temiz üretimle değiştirilir, kullanıcının diğer sitelerine dokunulmaz. Başarılı dağıtım ve gerçek HTTP kontrolü olmadan güncel sürümün canlı olduğu ileri sürülmez.

## İçerik sınırları

Kurumsal işaretler, Marmara Üniversitesi için planlanan merkezin görsel kimlik taslağında kullanılır. Site resmî kuruluş kararı, yönetim ataması veya üniversite yayın onayı ilan etmez. Kaynaklar belgelenmiş erişim sınırlarını korur. Metin ve çeviriler bilimsel ve dilsel insan incelemesini bekler. Özel ders dosyaları, yayımlanmamış kitap bölümleri, özel yazışmalar ve katılımcı verileri yayımlanmaz. Site klinik hizmet, gerçek CMS, LMS veya araştırma veri tabanı sunmaz.
