# GitHub Pages. MARSAM taslak sitesi

## Amaç

Kullanıcının açık talebi doğrultusunda, `feat/multilingual-knowledge-platform` dalındaki teknik önizleme GitHub Pages üzerinde gösterilir. Resmî akademik yayın, üniversite alan adına geçiş veya ana dala birleştirme bu işlemin parçası değildir.

Beklenen proje adresi.

```text
https://onourimpram.github.io/MARSAM/
```

Bu adres, başarılı dağıtım ve HTTP kontrolü gerçekleşmeden canlı bağlantı olarak ilan edilmemelidir.

## Bir kez yapılacak hesap ayarı

Depo yöneticisi [Settings, Pages](https://github.com/OnourImpram/MARSAM/settings/pages) sayfasında **Build and deployment** bölümündeki **Source** değerini **GitHub Actions** olarak seçmelidir.

Bu oturumdaki ilk otomatik etkinleştirme denemesi GitHub'ın `Resource not accessible by integration` yanıtıyla durmuştur. Kaynak koda erişim, Pages için yönetim yetkisi olduğu anlamına gelmez. İzin sınırını aşmak için token, hesap veya yetki üretme işlemi yapılmaz.

Ayar tamamlandıktan sonra [Actions](https://github.com/OnourImpram/MARSAM/actions) altında **Deploy MARSAM institutional preview** iş akışının son çalışmasını açın. Yapı başarılı, dağıtım ayar nedeniyle başarısızsa **Re-run failed jobs** kullanılabilir. Build tamamlanmışsa yeniden içerik yazmak veya ZIP yüklemek gerekmez. `github-pages` ortamı ayrıca insan onayı istiyorsa dağıtım onayı yetkili kullanıcı tarafından verilmelidir.

## İş akışının yaptığı kontroller

`.github/workflows/deploy-pages.yml` önce sekiz dilin içerik ve bağlantı testlerini `/MARSAM/` alt yolunda çalıştırır. Ardından gerçek HTTP ile eski ve yeni kullanıcı etkileşimlerini sınar. Hata varsa dağıtımı başlatmaz.

Yalnız üretilen `dist` klasörü Pages paketine girer. Build manifestine kaynak commit kimliği yazılır. Dağıtım sonrasında canlı manifest, yerelleştirilmiş sayfalar, Marmara görselleri ve uygulama dosyaları HTTP ile kontrol edilir. İş akışı özeti canlı adresi ancak bu kontrollerden sonra gösterir.

## İçerik ve veri sınırları

Site `noindex` ve önizleme statüsünü korur. `noindex` gizlilik sağlamaz. GitHub Pages içeriği herkese açıktır. Bu nedenle özel ders dosyaları, kitap taslakları, mesajlar, danışan bilgileri veya araştırma yanıtları dağıtımda bulunmaz.

`PAGES_PREVIEW=true` teknik taslağın paylaşımını kaydeder. `PUBLISH=true` ise gerekli bilimsel ve kurumsal onaylar olmadığı sürece hata vererek kapanır. Bu iki karar birbirinin yerine geçmez.

GitHub Pages statik barındırmadır. Gerçek editör hesabı, veri tabanı, katılımcı kaydı, sunucu tarafı e-posta ve LMS sağlamaz. Siteyi görsel olarak yayımlamak, bu işlevleri kurulmuş yapmaz.

GitHub Pages `_headers` dosyasını sunucu güvenlik ayarı olarak uygulamaz. Meta CSP ve HTML düzeyindeki önizleme bilgileri korunur, ancak sunucu başlıklarına ilişkin ek güvence verilmez. Marmara'nın kendi barındırma ortamına geçildiğinde ilgili güvenlik başlıkları ve veri sorumluluğu ayrıca yapılandırılmalıdır.

## Resmî başvuru kaynağı

GitHub, Pages yayın kaynağını değiştirmek için yönetici veya uygun maintainer yetkisi gerektiğini açıklar. [GitHub Pages yayın kaynağı](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). [Özel iş akışı](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
