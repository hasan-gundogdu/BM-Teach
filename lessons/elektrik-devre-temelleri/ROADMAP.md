# Elektrik Devre Temelleri (BM107) — Ders Yol Haritası

> **2026-08-01 güncellemesi:** Kullanıcı gerçek ders notu PDF'lerini (`DersNotlari/ElektrikDevreTemelleri/`, Dr. Öğr. Üyesi Ekrem BAŞER) paylaştı. Bu dosyalar artık **tek doğru kaynak** — aşağıdaki `bm107-haftalik-konular.md` (EBS'nin jenerik 14 haftalık taslağı) **süperlendi**. Gerçek ders çok daha hızlı ilerliyor ve farklı bir sırayla: Hafta 1'in devamında düğüm/çevre analizi işleniyor, Hafta 5-6'daki Wheatstone/Y-Δ ve Hafta 10'daki Millman/Kapasitör/Bobin gerçek notlarda **hiç yok** (bu dönem işlenmemiş veya OPAMP sonrasına kaymış — kullanıcının kendi ifadesiyle kapsam dışı).
>
> **Kapsam güncellemesi (2026-08-02, hoca duyurusu — sınıf grubunda):** "Vizede opamptan da soru hazırlıyorum, opamp da dahil diyelim. Sadece Thevenin, Norton ve maksimum güç teoremleri için bağımlı kaynak olmayacak. Opampda akım, gerilim ve kazanç buluyoruz en fazla, bildiğiniz gibi." Yani **OPAMP artık kapsamda** (temel seviye: eviren/evirmeyen kazanç, KCL ile akım/gerilim — toplayıcı/fark alıcı/kademeli devreler değil). Buna karşılık Thevenin/Norton/Maks.Güç'te bağımlı kaynaklı sorular **çıkmayacak** — bu üç derste bağımlı-kaynak test-yöntemi sadece genel anlayış için kalıyor, sınav odaklı değil.

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
- Kullanıcının EDT'de belirgin bir alt yapısı var (bkz. [[edt-altyapi-var]] öğrenme kaydı) — hızlı kavradıkça tempo artırıldı, sıfırdan değil orta hızda anlatıldı.
- Anlatım: su analojisi (gerilim=basınç, akım=debi, direnç=dar boru) + günlük cihaz örnekleri + Ders 07-08-09'da **tek bir devre örneği** (Vth=12V, Rth=4Ω) üç teorem boyunca taşınarak sürekliliği gösterdi.
- Ders 05 (Çevre Akımları) BM213 ile kesişiyor (Kramer kuralı/2×2 determinant) — BM213 Ders 05'in (Cramer teoremi, henüz yazılmadı) ön bilgisi burada self-contained verildi.
- Sınav: 4 Ağustos 2026.
- Kaynak PDF'ler `DersNotlari/ElektrikDevreTemelleri/` altında saklı — sonraki oturumda içerik netleştirmek için yeniden okunabilir.
- **02/08/2026 görsel revizyon:** Kullanıcı ASCII-art devre şemalarının bozuk/kaymış olduğunu bildirdi (pil sembolü görünmüyordu, teller kaymıştı) — Ders 02-10'daki tüm şemalar gerçek SVG çizimlere çevrildi. V/R tarzı formüller `.frac` CSS sınıfıyla gerçek üst-alt kesir görünümüne çevrildi. Ders 07-10'da sınav-kapsamında/kapsam-dışı ayrımı `.examnote` (yeşil) / `.skip` (soluk, "SINAVDA ÇIKMAYACAK") sınıflarıyla netleştirildi. Ders 06'ya "bağımlı kaynak neden hiç söndürülmez" sorusuna somut örnekli, sıfırdan bilgi varsaymayan bir açıklama eklendi.
