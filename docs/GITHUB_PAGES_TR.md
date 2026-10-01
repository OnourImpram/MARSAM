# GitHub Pages. MARSAM inceleme sitesi

## Güncel yayın

**[MARSAM web sitesini aç](https://onourimpram.github.io/MARSAM/)**

1 Ekim 2026 tarihli inceleme sürümü, kullanıcının zaten etkin olan `OnourImpram/onourimpram.github.io` deposunun `MARSAM/` dizininden sunulur. Bu bağlantı için yeni bir Pages ayarı yapılması gerekmez. Kaynak geliştirmesi `OnourImpram/MARSAM` deposunun `main` dalında sürer.

İlk bağımsız Pages etkinleştirme girişimi `Resource not accessible by integration` yanıtıyla durmuştu. Bu engel yeni yetki edinilerek veya yönetim sınırı aşılarak giderilmedi. Kullanıcının mevcut, yetkilendirilmiş Pages yayınına ayrı bir site dizini eklendi. Önceki kişisel ana sayfa, Elif sitesi, README ve iş akışları aynı Git nesneleriyle korundu.

## Sürüm kimliği

Uygulama kaynağı. `3fbce07da07e68b08d443d2643ff09be7f1fb0e2`.

Kaynak birleştirmesi. [PR 1](https://github.com/OnourImpram/MARSAM/pull/1), `5518f8ba5320036a5c3c1cbf8f5358dbda8162cc`.

Yayın commit'i. `94ebcf8cf2d61a38717fb95bd8b1a87e3e1b68e2`.

Yayın dizininin Git ağacı. `f88cc377ac8eb796942876dbe769b1be11dc9c4e`.

[Pages dağıtım kaydı](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36876484050).

[Yapı, etkileşim ve canlı yayın doğrulaması](https://github.com/OnourImpram/onourimpram.github.io/actions/runs/36875672984).

[Yayımlanan sürümün dosya manifesti](https://onourimpram.github.io/MARSAM/release.json).

Kaynak deposundaki sonraki dokümantasyon commit'leri, yayımlanan uygulama dosyalarının farklı bir sürüme geçtiği anlamına gelmez. Uygulama kimliği manifestteki `sourceCommit` alanıyla izlenir.

## Yayın işlemi

Kaynak commit'i sabitlenerek kök yol ve `/MARSAM/` yolu için içerik, dil ve bağlantı testleri çalıştırılır. Ardından gerçek HTTP üzerinde iki Playwright paketiyle tarayıcı davranışları sınanır. Yalnız `dist` içeriği yayın paketine alınır. Kaynak kodu, ders dosyaları, çalışma belgeleri ve test ortamı bağımlılıkları bu dizine taşınmaz.

Yayın ana makinesinde önce ayrı bir aday dal hazırlanır. Mevcut ana dalın ağacı temel alınır ve yalnız `MARSAM` alt ağacı eklenir veya denetlenerek güncellenir. Ana sayfa ve diğer sitelerin nesne kimlikleri korunur. Ana dal güncellemesi zorlamasız yapılır. Ana dal arada değişmişse yeni durumla yeniden uzlaştırılmadan işlem tekrarlanmaz.

GitHub'ın mevcut Pages yayını bu ana dal commit'ini dağıtır. Sonrasında gerçek HTTPS adresindeki dosyalar, manifest kimliği, dil sürümleri, görseller ve tarayıcı etkileşimleri kontrol edilir. GitHub'da bir commit veya iş akışı bulunması tek başına canlı yayın kanıtı sayılmaz.

## Sonraki güncellemeler

Kaynak değişiklikleri bu deponun `main` dalında gözden geçirilir. Yeni uygulama sürümü için aşağıdaki yapı ve testler tekrar çalıştırılır.

```sh
BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check
python tests/browser_e2e.py
python tests/campus_e2e.py
```

Yeni `dist`, yeni kaynak commit'ine bağlı bir manifestle mevcut yayın ana makinesinin yalnız `MARSAM/` dizinine taşınır. Ana makinenin başka klasörleri silinmez veya eski bir anlık görüntüyle değiştirilmez. Yayın sonrasında canlı tarayıcı kontrolü şu biçimde çalıştırılabilir.

```sh
PREVIEW_ORIGIN=https://onourimpram.github.io python tests/campus_e2e.py
```

Bu depodaki `.github/workflows/deploy-pages.yml`, MARSAM deposunda ayrıca etkinleştirilebilecek bağımsız Pages yayını içindir. Mevcut inceleme sitesinin güncelleme yolu değildir. Bu eski iş akışını tekrar çalıştırmak mevcut ana makinedeki siteyi kendiliğinden güncellemez.

## Kurumsal ve teknik sınırlar

Site Marmara Üniversitesi için hazırlanmış kurumsal inceleme sürümüdür. Üniversitenin kuruluş, yönetim veya yayın onayını ilan etmez. `PAGES_PREVIEW=true` teknik paylaşımı, `PUBLISH=true` ise ayrı bilimsel ve kurumsal yayın koşullarını temsil eder. İkinci yol onaylar olmadan kapalıdır.

Sayfalardaki `noindex` bilgisi gizlilik sağlamaz. GitHub Pages içeriği herkese açıktır. Bu nedenle özel konuşmalar, ders ödevleri, yayımlanmamış kitap bölümleri, kısıtlı ölçek maddeleri ve katılımcı verileri yayın paketine alınmaz.

Bu bir statik web sitesidir. Gerçek editör hesabı, araştırma veritabanı, sunucu tarafı başvuru veya LMS içermez. Katkı formu yerel dosya üretir, gönderim yapmaz. GitHub Pages `_headers` dosyasını sunucu güvenlik ayarı olarak uygulamaz. Üniversite barındırmasına geçişte sunucu başlıkları, erişim yönetimi ve veri sorumluluğu ayrıca yapılandırılmalıdır.

## GitHub belgeleri

[Pages yayın kaynağı](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

[Pages REST API ve yetkiler](https://docs.github.com/en/rest/pages/pages).
