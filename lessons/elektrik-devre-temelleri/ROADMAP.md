# Elektrik Devre Temelleri (BM107) — Ders Yol Haritası

> **2026-08-01 güncellemesi:** Kullanıcı gerçek ders notu PDF'lerini (`DersNotlari/ElektrikDevreTemelleri/`, Dr. Öğr. Üyesi Ekrem BAŞER) paylaştı. Bu dosyalar **ikincil doğru kaynak** — aşağıdaki `bm107-haftalik-konular.md` (EBS'nin jenerik 14 haftalık taslağı) **süperlendi**. Gerçek ders çok daha hızlı ilerliyor ve farklı bir sırayla: Hafta 1'in devamında düğüm/çevre analizi işleniyor, Hafta 5-6'daki Wheatstone/Y-Δ ve Hafta 10'daki Millman/Kapasitör/Bobin gerçek notlarda **hiç yok** (bu dönem işlenmemiş — geçmiş final sınavlarında RC/RL geçici rejim soruları çıkmış olsa da, bkz. `DersNotlari/ElektrikDevreTemelleri/cikmis/`, bu dönem hiç işlenmediği için **kapsam dışı** kalmaya devam ediyor).
>
> ## ⭐ EN YÜKSEK ÖNCELİKLİ KAPSAM KAYNAĞI — hoca duyurusu (2026-08-02, sınıf grubu)
> > "Vizede opamptan da soru hazırlıyorum arkadaşlar. Opamp da dahil diyelim. Sadece Thevenin, Norton ve maksimum güç teoremleri için bağımlı kaynak olmayacak. Opampda akım, gerilim ve kazanç buluyoruz en fazla bildiğiniz gibi."
>
> Bu mesaj, PDF ders notlarının ve genel müfredatın **üzerinde** geçerlidir — çakışma olursa bu mesaj kazanır. Kesin kapsam kuralları:
>
> 1. **OPAMP vizededir.** Kapsanan: akım bulma, gerilim bulma, kazanç bulma, ideal opamp temel varsayımları (i±=0, v+=v− yalnızca geri beslemeyle), eviren/evirmeyen temel devreler, gerekirse KCL ile temel çözüm.
> 2. **OPAMP'ta kapsam dışı:** toplayıcı, fark alıcı, entegratör, türev alıcı, kademeli/karmaşık opamp devreleri, frekans cevabı, slew rate, CMRR ve diğer ileri gerçek-opamp ayrıntıları.
> 3. **Thevenin/Norton/Maks. Güç Transferi'nde bağımlı kaynak OLMAYACAK.** Test-kaynağı yöntemi (bağımlı kaynak varsa RTH bulma) ana anlatımdan çıkarılmadı ama her yerde **"sınav dışı / genel bilgi"** olarak açıkça işaretli (`.skip` sınıfı). Sınav tipi örneklerde sadece bağımsız gerilim ve/veya bağımsız akım kaynağı kullanılır; karma (V+I birlikte) bağımsız-kaynaklı örnekler kapsam **içinde**.
> 4. Wheatstone köprüsü, Y-Δ dönüşümü, Millman teoremi, kapasitör, bobin, RC/RL geçici rejim → bu dönem hiç işlenmedi, **kapsam dışı**.

## Gerçek ders notu → ders eşlemesi

| Ders | Kaynak dosya | Konu | Durum |
|---|---|---|---|
| 0001 | 1. Hafta-1.pdf (kısım 1) | Elektriksel temel kavramlar: yük, akım, voltaj, güç, enerji, pasif işaret konvansiyonu | ✅ yazıldı |
| 0002 | 1. Hafta-1.pdf (kısım 2) | Devre terminolojisi (düğüm/kol/çevre, b=l+n−1), ideal kaynaklar, bağımlı kaynak 4 tipi, kısa/açık devre, kaynak dönüşümü | ✅ yazıldı |
| 0003 | 1. Hafta-1.pdf (kısım 3) | Ohm Kanunu, özdirenç/renk kodu/iletkenlik, KCL, KVL, seri-paralel dirençler, gerilim/akım bölücü | ✅ yazıldı |
| 0004 | 1. Hafta-Devam.pptx | Düğüm Gerilimleri Yöntemi (DGY) | ✅ yazıldı |
| 0005 | 1. Hafta-Devam.pptx | Çevre Akımları Yöntemi (Kramer kuralı ile) | ✅ yazıldı |
| 0006 | 2.1 Ders Notu | Süperpozisyon Teoremi | ✅ yazıldı |
| 0007 | 2.2 Ders Notu | Thevenin Teoremi | ✅ yazıldı |
| 0008 | 2.2 Ders Notu | Norton Teoremi | ✅ yazıldı |
| 0009 | 3.1 Ders Notu | Maksimum Güç Transferi | ✅ yazıldı |
| 0010 | 3.2 Ders Notu | İdeal Opamp (akım, gerilim, kazanç — eviren/evirmeyen) | ✅ yazıldı |
| 0011 | (Ders 01-10'un özeti) | Genel Tekrar — tüm dersler tek sıralı dosyada (tanım+formül+"neden"+muhtemel sözlü soru-cevap) | ✅ yazıldı (02/08 eklendi) |
| 0012 | (Ders 01-10 kapsamı) | Örnek Sorular — 25 soru, gizli çözümlü sınav provası (S18-21 zincirleme Thevenin/Norton/Maks.Güç) | ✅ yazıldı (03/08 eklendi) |

## Notlar
- Öğrenci bazı kavramları hızlı kavrıyor fakat temel bağlantı teşhisi, referans yönleri ve işaret kurallarında boşluklar olabilir. Her derste ön koşullar kısa bir kontrolle doğrulanmalı; bilinmeyen ön koşul varsayılmamalı.
- Anlatım: su analojisi (gerilim=basınç, akım=debi, direnç=dar boru) + günlük cihaz örnekleri + Ders 07-08-09'da **tek bir devre örneği** (Vth=12V, Rth=4Ω) üç teorem boyunca taşınarak sürekliliği gösterdi.
- Ders 05 (Çevre Akımları) BM213 ile kesişiyor (Kramer kuralı/2×2 determinant) — BM213 Ders 05'in (Cramer teoremi, henüz yazılmadı) ön bilgisi burada self-contained verildi.
- Sınav: 4 Ağustos 2026.
- Kaynak PDF'ler `DersNotlari/ElektrikDevreTemelleri/` altında saklı — sonraki oturumda içerik netleştirmek için yeniden okunabilir. `cikmis/` alt klasöründe gerçek bir geçmiş final sınav kağıdı (24.12.2024) var: S1 Thevenin+Maks.Güç, S2 Norton (ikisi de bağımsız V+I karma kaynaklı — bağımlı kaynak yok, tutarlı), S3-S4 RC/RL geçici rejim (bu dönem kapsam dışı, dokunulmadı).
- **02/08/2026 görsel revizyon:** Kullanıcı ASCII-art devre şemalarının bozuk/kaymış olduğunu bildirdi (pil sembolü görünmüyordu, teller kaymıştı) — Ders 02-10'daki tüm şemalar gerçek SVG çizimlere çevrildi. V/R tarzı formüller `.frac` CSS sınıfıyla gerçek üst-alt kesir görünümüne çevrildi. Ders 07-10'da sınav-kapsamında/kapsam-dışı ayrımı `.examnote` (yeşil) / `.skip` (soluk, "SINAVDA ÇIKMAYACAK") sınıflarıyla netleştirildi. Ders 06'ya "bağımlı kaynak neden hiç söndürülmez" sorusuna somut örnekli, sıfırdan bilgi varsaymayan bir açıklama eklendi.
- **03-04/08/2026 kapsam denetimi:** Tüm dersler 6 gerçek ders notu (1-3. Hafta PDF/pptx) ile sayfa/slayt bazında çapraz kontrol edildi. Ders03'e düğüm-tabanlı seri/paralel teşhis bölümü, Ders06'ya alt-devre şemaları, Ders10'a açık çevrim kazancı (gerçek nottaki A=2×10⁵ örneği) eklendi; Ders04/05'teki KCL/KVL işaret tutarsızlıkları düzeltildi. Ders07'ye bağımsız V+I karma kaynaklı örnek eklendi (geçmiş final sınavının stiliyle uyumlu). Ders11 kapsam etiketleriyle (VİZEDE/VİZE DIŞI/EK BİLGİ) yeniden formatlandı.
