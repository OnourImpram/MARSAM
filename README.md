# MARSAM

**Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi. Marmara Üniversitesi için kurumsal web taslağı.**

MARSAM, Marmara Üniversitesi bünyesinde planlanan merkez için geliştirilen sekiz dilli akademik kaynak platformudur. Bu depo ve GitHub Pages önizlemesi resmî kuruluş kararı veya üniversitenin bilimsel yayın onayı yerine geçmez.

## Çalıştırma

Node.js 22 veya üzeri. Uygulama için npm bağımlılığı yoktur.

```sh
npm run check
npm run preview
```

Yerel adres `http://127.0.0.1:4173/tr/`.

GitHub proje yolu için `BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check` kullanılır. PowerShell'de önce `$env:BASE_PATH='/MARSAM/'` ve `$env:PAGES_PREVIEW='true'` tanımlanır.

## İçerik ve işlevler

Türkçe, İngilizce, Almanca, Basitleştirilmiş Çince, Rusça, Arapça, Endonezce ve Malayca. Arapça RTL kullanır. Endonezce ve Malayca ayrı çevirilerdir. Cavaca ve Sundaca kapsamda değildir.

22 kaynak kaydı, 8 başlangıç okuma dosyası, 3 öğrenme rotası, 6 tematik koleksiyon. Toplam 55 mantıksal sayfanın sekiz dildeki karşılığı 440 yerelleştirilmiş adrestir. Bunlar 440 farklı yayın değildir. Proje kökü Türkçe ana sayfayı açar. Ayrı 404 sayfası vardır.

Arama, konu ve tür filtreleri, kalıcı yerel okuma listesi, atıf kopyalama, RIS ve BibTeX korunmuştur. Yeni karşılaştırma aracı en fazla dört kaynağı tür, açıklama, künye, incelenen kapsam, haklar ve yorum sınırı bakımından gösterir. Kaynak kimlikleri paylaşılabilir adresle dil değişiminde korunur. Yerel JSON dışa aktarımı vardır. Klinik etkililik sıralaması yapılmaz.

Etkinlikler dış kurumlardan alınır, tarihine göre arşiv ve yaklaşan olarak ayrılır. Tarih görünmesi kayıtların açık olduğunu göstermez. Katkı aracı yalnız yerel dosya üretir. Site anket yanıtı veya kişisel bilgi toplamaz.

## Karşılaştırmalı inceleme ve Marmara kimliği

[Derinlemesine akademik platform incelemesi](docs/ACADEMIC_BENCHMARK_TR.md). Harvard Human Flourishing Program, Duke, Columbia SMBI ve IAPR için gözlenen yapı, tasarım çıkarımı ve uygulanan özellik ayrılmıştır. Bu bir bilimsel prestij sıralaması veya karşılaştırmalı kullanıcı araştırması değildir.

Marmara'nın resmî genel üniversite işaretleri ve yayımlanan kılavuzdaki ana mavi kullanılır. [Varlık kayıtları](docs/MARMARA_ASSETS.json). Yönetici, kurul üyesi, kurumsal iletişim veya kuruluş tarihi uydurulmaz.

## GitHub Pages

[GitHub Pages kurulumu](docs/GITHUB_PAGES_TR.md).

`.github/workflows/deploy-pages.yml`, geliştirme dalında test edilen `dist` klasörünü yayımlar. İçerik, bağlantı veya gerçek tarayıcı kontrolü başarısızsa dağıtım başlamaz. Sunulan sayfalar ve kaynak commit kimliği dağıtım sonrasında kontrol edilir. İş akışının depoda bulunması canlı yayın kanıtı değildir.

`PUBLISH=true` resmî akademik yayın için kapalıdır. İzin verilen teknik önizleme `PAGES_PREVIEW=true` ile ayrı kaydedilir. Ana dala birleştirme gerekmez. Üniversite alan adına taşıma ayrı bir kurumsal işlemdir.

## Testler

`npm run check` içerik, dil, rota ve kaynak kontrollerini çalıştırır. Gerçek tarayıcı testleri için yalnız test ortamında Playwright kullanılır.

```sh
python -m pip install playwright==1.57.0
python -m playwright install --with-deps chromium
python tests/browser_e2e.py
python tests/campus_e2e.py
```

Testler gerçek HTTP, tarayıcı saklaması ve dosya indirmesi kullanır. Günlükler `verification` altında oluşur. GitHub Actions kaynak ve test kanıtlarını indirilebilir paket olarak saklar. Teknik testler bağımsız erişilebilirlik, bilimsel onay veya ana dil incelemesi değildir.

## İçerik sınırları

Kaynak kayıtları V1 ve PARTIALLY_VERIFIED düzeyindedir. Çeviriler bilimsel ve dilsel insan incelemesini bekler. IAPOS'un iddia, kaynak, yorum ve onay ayrımları korunur. Kısıtlı ölçek maddeleri, özel konuşmalar, danışan verileri, ders dosyaları ve yayımlanmamış kitap bölümleri depoda yoktur. Dış kurumlar ortak veya destekçi olarak gösterilmez. Yönetici paneli, LMS ve araştırma veritabanı bu statik önizlemenin parçası değildir.
