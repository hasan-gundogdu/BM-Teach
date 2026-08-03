# Gidiş Sırası — Çalışma Takibi

> Tek bakışta "nerede kaldık, sırada ne var". Her ders için: **ders dosyası + referans kartı + izlenecek Khan videoları.**
> Durum: ✅ bitti · ⬅️ sıradaki · ⬜ bekliyor · ⚠️ Khan kapsamıyor (teach + Strang ile).
> Yeni ders yazıldıkça bu dosya güncellenir.

---

# BM213 — Lineer Cebir · sınav 5 Ağustos
> ⚠️ **2026-07-18'de tamamen düzeltildi**, **2026-08-01'de dosya adları çalışma sırasına göre yeniden numaralandırıldı** (eskiden dosya numarası = oluşturma sırasıydı, çalışma sırasından farklıydı — kafa karıştırıyordu). Eski sıralama (yukarıdaki not, artık geçersiz) EBS'nin genel haftalık başlıklarına dayanıyordu. Kullanıcı hocanın gerçek ders notu PDF'lerini (`DersNotlari/LineerCebir/*.pdf`) paylaştı — gerçek içerik Bölüm bazlı ilerliyor ve haftalarla farklı eşleşiyor. **Tek doğru kaynak artık `lessons/lineer-cebir/ROADMAP.md`** (PDF'lere birebir bağlı, güncel dosya adlarıyla). Aşağıdaki liste o dosyanın özeti — detay için ROADMAP.md'ye bak. **Artık dosya numarası = çalışma sırası.**

### Ders 01 — Lineer eşitlik tanımı, Gauss, 2×2/3×3 determinant (Sarrus) ✅
- **Ders:** `lessons/lineer-cebir/0001-sistemler-gauss-determinant.html` · **Referans:** `reference/lineer-cebir/determinant-ve-sistemler.html`
- Bölüm 1.1, 1.2, 3.1-3.2

### Ders 02 — Matrisler ve Özel Matrisler ✅
- **Ders:** `lessons/lineer-cebir/0002-matrisler-ve-ozel-matrisler.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 1.3 — matris tanımı, eşitlik, özel matrisler (sıfır, transpoze, köşegen, skalar, birim, üç köşegenli, üst/alt üçgen, simetrik, antisimetrik)
- **Khan:** "Bir Matrisin Transpozu"

### Ders 03 — Matris toplama, skalerle çarpım, matris çarpımı ✅
- **Ders:** `lessons/lineer-cebir/0003-matrisler-ve-temel-islemler.html` · **Referans:** `reference/lineer-cebir/matris-islemleri.html`
- Bölüm 1.3 (devam)
- **Khan:** Matris Vektör Çarpımı · Matris Toplamları ve Çarpımları · Birleşme/Dağılma Özelliği

### Ders 04 — Satır Eşdeğer Matris + Gauss-Jordan Eliminasyonu ✅
- **Ders:** `lessons/lineer-cebir/0004-satir-esdeger-matris-gauss-jordan.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 2.1-2.3 — arttırılmış matris, satır eşdeğer/indirgenmiş matris tanımı, Gauss & Gauss-Jordan formal
- **Khan:** Doğrusal Sistemleri Matrislerle Çözme · Matris Sırası-Kademeli Form

### Ders 05 — Ters Matris + Matris Tersi ile Sistem Çözümü ✅
- **Ders:** `lessons/lineer-cebir/0005-ters-matris.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 2.4-2.5 — [A:I]→[I:A⁻¹] yöntemi, X=A⁻¹B
- **Khan:** Ters Matris Bulma Örneği · 2×2 Ters Matris Formülü

### Ders 06 — Geometrik yorum, n-boyutlu determinant (permütasyon) ✅
- **Ders:** `lessons/lineer-cebir/0006-geometrik-yorum-n-boyutlu-determinant.html` · **Referans:** `reference/lineer-cebir/n-boyutlu-determinant.html`
- Ek derinlik (resmi notların ötesinde) + Bölüm 3.1 formal permütasyon tanımı
- **Ön bilgi:** Matematiksel notasyon (Σ, alt indis, σ, permütasyon) — `lessons/on-bilgi/0002-matematik-notasyonu.html` ✅

### Ders 07 — Determinant özellikleri (6 özellik) + üçgen matris ile hesaplama ✅
- **Ders:** `lessons/lineer-cebir/0007-determinantin-ozellikleri-ve-hesaplama.html` · **Referans:** `reference/lineer-cebir/determinant-ozellikleri.html`
- Bölüm 3.3-3.4

### Ders 08 — Kofaktör Açılımı (Minör, Kofaktör) ✅
- **Ders:** `lessons/lineer-cebir/0008-kofaktor-acilimi.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 3.5
- **Khan:** n×n Determinantı · Derinlemesine Determinantlar

### Ders 09 — Cramer Kuralı + Adjoint Matris ✅
- **Ders:** `lessons/lineer-cebir/0009-cramer-adjoint.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 4.1-4.2 — A⁻¹=adj(A)/det(A)
- ⚠️ Cramer/adjoint isim olarak Khan'da net karşılığı yok → teach ile hazırlandı

### Ders 10 — Vektörler I: tanım, işlemler, nokta çarpım, açı ✅ ⬅️ SON İZLENEN
- **Ders:** `lessons/lineer-cebir/0010-vektorler-temel-nokta-carpim.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 5.1-5.4.7 — vektör tanımı, birim vektörler, P1P2 bileşenleri, nokta çarpım, açı
- **Ön bilgi:** Temel Trigonometri — `lessons/on-bilgi/0001-temel-trigonometri.html` ✅
- **Khan:** Vektör Nokta Çarpım ve Vektör Uzunluğu · İki Vektör Arasındaki Açıların Tanımlanması

### Ders 11 — Vektörel Çarpım, Karışık Çarpım, Lineer Bağımsızlık ✅
- **Ders:** `lessons/lineer-cebir/0011-vektorel-carpim-lineer-bagimsizlik.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 5.4.8-5.5 — çapraz çarpım (sağ el kuralı, determinant yöntemi), karışık çarpım, lineer kombinasyon, lineer bağımlılık/bağımsızlık
- **Khan:** Çapraz Çarpım · Doğrusal Bağımsızlık 1-2

### Ders 12 — Matris Rankı + Denk Matrisler Yöntemi ✅
- **Ders:** `lessons/lineer-cebir/0012-matris-ranki.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 6.1
- **Khan:** Sütun Uzayı ya da Rank'ın Boyutu

### Ders 13 — Rank ile Sistem Çözümü + Homojen Sistemler ✅ ⬅️ HAFTA 1-9 İÇERİĞİNİN SONU
- **Ders:** `lessons/lineer-cebir/0013-rank-ile-sistem-cozumu.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 6.2-6.3.2 — r(A)=r(AB) kuralı, homojen sistem 4 kuralı
- **Khan:** Doğrusal Bir Sistemin Gösterilmesi İçin Matris Satır Sıralı Formun Kullanılması: Çözüm Olmaz

> **Not (2026-08-01):** Dosya adları artık tam olarak çalışma sırasıyla (dosya gezgininde göründükleri sıra) ve her dersin sonundaki "Sıradaki" linkiyle birebir uyumlu — 13 dosya `git mv` ile yeniden numaralandırıldı, tüm iç bağlantılar (başlık, kicker, "Sıradaki" navigasyonu, çapraz referanslar) doğrulandı, kırık link kalmadı. Ders 02, 04, 05, 08, 09, 10, 11, 12, 13 için referans kartları (hızlı başvuru sayfaları) henüz yazılmadı — dersler tamamlandığı için kullanıcı çalışmaya başlayabilir, referans kartları sonradan eklenecek.

⬜ **Hafta 10-12 ve 13-14 PDF'leri henüz okunmadı** — bu bölüme geldiğimizde `10-11-12.pdf` ve `13-14.pdf` açılıp gerçek içerik doğrulanacak (muhtemelen özdeğer/özvektör/Jordan/kuadratik form konuları farklı sırada/derinlikte çıkabilir — varsayım yapılmayacak).

---

# BM107 — Elektrik Devre Temelleri · sınav 4 Ağustos
> ⚠️ **2026-08-01'de tamamen düzeltildi**, **2026-08-02'de kapsam güncellendi.** Kullanıcı gerçek ders notu PDF'lerini (`DersNotlari/ElektrikDevreTemelleri/*.pdf`, Dr. Öğr. Üyesi Ekrem BAŞER) paylaştı. Gerçek ders çok daha hızlı ve farklı sırayla ilerliyor — Wheatstone/Y-Δ/Millman/Kapasitör/Bobin gerçek notlarda **yok**. Hoca sınıf grubunda **OPAMP'ın da sınava dahil olduğunu** duyurdu (temel seviye: akım/gerilim/kazanç) — buna karşılık Thevenin/Norton/Maks.Güç'te bağımlı kaynak **çıkmayacak**. Tek doğru kaynak artık `lessons/elektrik-devre-temelleri/ROADMAP.md`.

### 1 · Ders 01 — Elektriksel temel kavramlar (akım, voltaj, güç, enerji) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0001-akim-voltaj-guc-enerji.html` · **Referans:** `reference/elektrik-devre-temelleri/temel-kavramlar-hizli-basvuru.html`
- Kaynak: 1. Hafta-1.pdf (kısım 1)

### 2 · Ders 02 — Devre terminolojisi, bağımlı kaynak 4 tipi, kaynak dönüşümü ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0002-devre-elemanlari-kaynak-donusumu.html` · **Referans:** `reference/elektrik-devre-temelleri/devre-terminolojisi-hizli-basvuru.html`
- Kaynak: 1. Hafta-1.pdf (kısım 2) — düğüm/kol/çevre, b=l+n−1, GKGK/AKGK/GKAK/AKAK, kaynak dönüşümü

### 3 · Ders 03 — Ohm, özdirenç/renk kodu, KCL/KVL, seri-paralel, bölücüler ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0003-ohm-kirchhoff-seri-paralel.html` · **Referans:** `reference/elektrik-devre-temelleri/ohm-kirchhoff-hizli-basvuru.html`
- Kaynak: 1. Hafta-1.pdf (kısım 3)

### 4 · Ders 04 — Düğüm Gerilimleri Yöntemi (DGY) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0004-dugum-gerilimleri-yontemi.html` · **Referans:** `reference/elektrik-devre-temelleri/dgy-cevre-akimlari-hizli-basvuru.html`
- Kaynak: 1. Hafta-Devam.pptx

### 5 · Ders 05 — Çevre Akımları Yöntemi (Kramer kuralı ile) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0005-cevre-akimlari-yontemi.html` · **Referans:** `reference/elektrik-devre-temelleri/dgy-cevre-akimlari-hizli-basvuru.html`
- Kaynak: 1. Hafta-Devam.pptx — BM213 Cramer kuralı köprüsü var

### 6 · Ders 06 — Süperpozisyon Teoremi ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0006-superpozisyon-teoremi.html` · **Referans:** `reference/elektrik-devre-temelleri/teoremler-hizli-basvuru.html`
- Kaynak: 2.1 Ders Notu

### 7 · Ders 07 — Thevenin Teoremi ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0007-thevenin-teoremi.html` · **Referans:** `reference/elektrik-devre-temelleri/teoremler-hizli-basvuru.html`
- Kaynak: 2.2 Ders Notu — Vth=12V,Rth=4Ω örneği Ders08-09'da devam ediyor

### 8 · Ders 08 — Norton Teoremi ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0008-norton-teoremi.html` · **Referans:** `reference/elektrik-devre-temelleri/teoremler-hizli-basvuru.html`
- Kaynak: 2.2 Ders Notu

### 9 · Ders 09 — Maksimum Güç Transferi ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0009-maksimum-guc-transferi.html` · **Referans:** `reference/elektrik-devre-temelleri/teoremler-hizli-basvuru.html`
- Kaynak: 3.1 Ders Notu
- Ders 07-08-09'da bağımlı kaynak yöntemine "sınavda çıkmayacak, mantık için var" notu eklendi (02/08 hoca duyurusu)

### 10 · Ders 10 — İdeal Opamp (akım, gerilim, kazanç) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0010-ideal-opamp.html` · **Referans:** `reference/elektrik-devre-temelleri/opamp-hizli-basvuru.html`
- Kaynak: 3.2 Ders Notu — hoca "akım, gerilim, kazanç buluyoruz en fazla" dediği için toplayıcı/fark alıcı/kademeli opamp devreleri **kapsam dışı** bırakıldı, sadece eviren/evirmeyen temel kazanç + KCL

### 11 · Ders 11 — Genel Tekrar (Ders 01-10 tek dosyada) ✅ ⬅️ KAPSAMIN SONU
- **Ders:** `lessons/elektrik-devre-temelleri/0011-genel-tekrar.html` · ayrı referans kartı yok (kendisi zaten özet)
- 02/08/2026'da eklendi: kullanıcı sınavda hocanın sözlü/kavramsal soru da sorabileceğini belirtti, tüm dersleri tek sıralı dosyada (tanım+formül+"neden"+muhtemel sözlü soru-cevap) isteyip onayladı ("/teach")

### 12 · Ders 12 — Örnek Sorular (sınav provası) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0012-ornek-sorular.html` · 25 soru, çözümler `<details>` ile gizli (önce kendin çöz)
- Kapsam dağılımı: temel/işaret/birim (S1-6) · Ohm-Kirchhoff-bölücü (S7-11) · DGY (S12-13) · Çevre+Kramer (S14-15) · Süperpozisyon (S16-17) · Thevenin-Norton-Maks.Güç (S18-21, **zincirleme tek devre**) · Opamp (S22-24) · sözlü (S25)
- Sayılar ders notlarındaki örneklerden **kasten farklı** (ezber değil yöntem sınanıyor). Sonunda "nerede takıldın → hangi dersi aç" tablosu var.
- 03/08/2026'da eklendi ("/teach", kullanıcı isteği: "konuların tamamına çalıştım, örnek çözeyim").

**02/08/2026 revizyonu:** Kullanıcı geri bildirimi üzerine tüm derslerdeki ASCII-art devre şemaları (bozuk/kaymış, pil sembolü görünmüyordu) **SVG şemalarla** değiştirildi; V/R tarzı kesirler gerçek üst-alt kesir görünümüne (`.frac` CSS sınıfı) çevrildi; Ders 07-10'a `.examnote` (yeşil, sınav kapsamında) ve `.skip` (soluk, sınavda çıkmayacak) görsel ayrımı netleştirildi; Ders 06'ya "bağımlı kaynak neden hiç söndürülmez" somut örnekli açıklama + bağımsız/bağımlı kaynak sıfırdan hatırlatması eklendi.

**03/08/2026 denetimi ("/teach"):** Tüm 27 ders dosyasında iç link taraması yapıldı — 12 dosyada "Sıradaki ders" **düz metindi (tıklanamıyordu)**, hepsi linke çevrildi; 1 kırık link (`on-bilgi/0002` → LC eski numara) düzeltildi; EDT Ders 03'ün "sıradaki" metni yanlış dersi tarif ediyordu (Karışık devreler → DGY) düzeltildi; Ders 02-03 kicker'ları eski EBS haftasını gösteriyordu (Hafta 2/3 → Hafta 1 kısım 2/3) düzeltildi. Genel tekrar dosyasındaki **tüm örnekler yeniden hesaplandı, SVG değerleri metinlerle karşılaştırıldı — tutarlı.** **Tüm BM107 dersleri tamamlandı (0001-0012).**

# BM106 — Olasılık ve İstatistik · sınav 6 Ağustos ⬜
Henüz başlanmadı. EBS haftalık konuları alınınca eklenecek. (Ayrık kısım calculus'suz; sürekli kısım için mini integral ön-bilgisi.)

---

## Ön Bilgi (derse özel değil)
- Temel Trigonometri: `lessons/on-bilgi/0001-temel-trigonometri.html` + `reference/on-bilgi/trigonometri-hizli-basvuru.html` ✅ (Lineer Cebir Ders 10 — Vektörler için gerekli)
- Matematiksel Notasyon (Σ, alt indis, σ, permütasyon): `lessons/on-bilgi/0002-matematik-notasyonu.html` ✅ (Lineer Cebir Ders 06 için gerekli)
- ⚠️ Kompleks sayılar — henüz yazılmadı (Lineer Cebir Hafta 10-12 içeriği okunduğunda netleşecek)
- ⚠️ Polinom kökü bulma — henüz yazılmadı (Lineer Cebir Hafta 13-14 içeriği okunduğunda netleşecek)
