# Sedefli Diş: Diş Kliniği Web Sitesi (demo)

Kurgusal bir ağız ve diş sağlığı polikliniği için **çok sayfalı, iki dilli (TR/EN)** web sitesi. Tedavi sayfaları, hekimler, hasta rehberi, iletişim ve adım adım randevu talebi formu içerir.

> **Sedefli Diş kurgusal bir kliniktir.** Hekimler, adres ve telefon numarası gerçek değildir. Gerçek bir klinikle karıştırılmaması için site arama motorlarına kapalıdır (`noindex`) ve her sayfada demo şeridi bulunur. Randevu formu hiçbir veri göndermez.
> Bu proje [egementuncer.dev](https://egementuncer.dev) portföyü için hazırlanmıştır.

**Canlı demo:** https://klinik.egementuncer.dev

---

## Sayfalar (her dilde 14 sayfa, toplam 28)

| Sayfa | İçerik |
| --- | --- |
| Ana sayfa | Tedaviler, çalışma şekli, hekimler, canlı “şu an açık/kapalı” durumu, çalışma saatleri |
| Tedaviler + 6 tedavi sayfası | Nedir, kimler için uygun, adım adım süreç, yaklaşık süre, sonrası bakım, SSS, ilgili hekim |
| Hekimlerimiz | Uzmanlık, çalıştığı alanlar, diller, “bu hekimden randevu” bağlantısı |
| Kliniğimiz | Hijyen, dijital görüntüleme, erişilebilirlik |
| Hasta rehberi | İlk muayene, iptal, ödeme, acil durumlar, genel SSS |
| İletişim | Adres, saatler, şematik harita, ulaşım |
| Randevu talebi | 5 adımlı form: konu → hekim → gün ve saat aralığı → bilgiler → özet |
| KVKK | Örnek aydınlatma metni |

## Öne çıkanlar

- **Adım adım randevu talebi**
  - Tedavi sayfasından gelince konu, hekim sayfasından gelince hekim önceden seçili gelir (`?t=implant`, `?d=selin`).
  - Seçilen konuya göre ilgili hekim işaretlenir.
  - Gün seçici yalnızca açık günleri gösterir ve klavyeyle (ok tuşları) kullanılır.
  - Cumartesi seçilince saat aralıkları kısa çalışma saatine göre daralır.
  - Her adım doğrulanır; özet ekranında her satır düzenlenebilir.
  - JavaScript kapalıysa form tek sayfa olarak görünür.
- **Canlı çalışma durumu:** İstanbul saatine göre “Şu an açık · 19:00’a kadar” ya da “Şu an kapalı · yarın 09:00’da açılır”. Bugünün satırı tabloda vurgulanır.
- **Sağlık reklamı kurallarına uygun dil**
  - “En iyi”, “garantili”, “ağrısız”, “kesin sonuç” gibi iddialar yok.
  - Fiyat, kampanya, öncesi/sonrası görseli ve hasta yorumu yok.
  - Tedavi sayfaları genel bilgilendirme olarak yazıldı; kararı muayene sonrası hekim verir.
- **Yerel SEO altyapısı**
  - Her sayfanın kendi başlığı, açıklaması, canonical ve `hreflang` bağlantıları var.
  - `Dentist` (LocalBusiness) yapısal verisi: adres, telefon, çalışma saatleri, diller.
  - Tedavi sayfalarında `MedicalWebPage` ve `FAQPage`, bütün alt sayfalarda `BreadcrumbList`.
  - Site haritası ve robots.txt otomatik üretilir.
  - Gerçek bir klinikte `src/content.mjs` içindeki `demo: false` ile `noindex` kalkar.
- **Mobil öncelikli:** Alttan sabit “Ara / Randevu al” çubuğu ve tam ekran menü. 360 px'te yatay kaydırma yok.
- **Erişilebilirlik**
  - 28 sayfa, masaüstü ve mobilde axe taramasından temiz geçer.
  - Klavyeyle tam kullanım; menü açıkken odak menüde kalır, Esc ile kapanır.
  - `prefers-reduced-motion` açıksa hareketler kapanır.

## Teknik

- **Bağımlılık yok.** `build.mjs` (Node 18+) `src/` içindeki içerik ve şablonlardan statik HTML üretir. CSS ve JS dosya adlarına içerik özeti (hash) eklenir.
- Bütün metinler tek dosyada: `src/content.mjs`. Klinik bilgisi, saatler, hekimler, tedaviler ve iki dilin arayüz metinleri burada.
- **Cloudflare Workers (static assets)** ile yayın; deploy sırasında build otomatik çalışır.
- Fontlar: Instrument Serif + Plus Jakarta Sans (Google Fonts).
- **Fotoğraflar:** [Unsplash](https://unsplash.com) (Unsplash License). Fotoğrafçılar sitenin alt bilgisinde listelenir. Fotoğraflar kurgusal hekimlerin portresi olarak kullanılmaz; hekim kartları baş harflidir. `scripts/photos.mjs` (sharp) kaynak JPG'leri 640/1200 px AVIF + WebP'ye çevirir.

```
src/content.mjs     # bütün içerik (TR + EN)
src/templates.mjs   # sayfa şablonları
src/style.css       # stiller
src/app.js          # menü, açık/kapalı durumu, randevu formu
public/             # favicon, paylaşım görseli, img/ (optimize fotoğraflar)
scripts/photos.mjs  # fotoğraf dönüştürücü (sharp)
scripts/images.mjs  # og.png ve apple-touch-icon.png üretici
build.mjs           # src/ + public/ → dist/
```

## Çalıştırma

```bash
npm run dev        # build + http://localhost:8822
npx wrangler deploy
```

## Not

Yapay zekâ destekli geliştirildi; tasarım ve ürün kararları bana ait.
