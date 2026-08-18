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
- Bölüm 3.1 formal permütasyon tanımı (**resmi müfredat, PDF'nin ilk konusu — 2026-08-04 düzeltmesi: "resmi notların ötesinde" değil, sadece soru bankasında sayısal permütasyon sorusu yok**) + geometrik yorum (gerçekten ek derinlik)
- **Ön bilgi:** Matematiksel notasyon (Σ, alt indis, σ, permütasyon) — `lessons/on-bilgi/0002-matematik-notasyonu.html` ✅

### Ders 07 — Determinant özellikleri (3 satır işlemi kuralı + 3 ek özellik) + üçgen matris ile hesaplama ✅
- **Ders:** `lessons/lineer-cebir/0007-determinantin-ozellikleri-ve-hesaplama.html` · **Referans:** `reference/lineer-cebir/determinant-ozellikleri.html`
- Bölüm 3.3-3.4

### Ders 08 — Kofaktör Açılımı (Minör, Kofaktör) ✅
- **Ders:** `lessons/lineer-cebir/0008-kofaktor-acilimi.html` · **Referans:** `reference/lineer-cebir/kofaktor-acilimi.html`
- Bölüm 3.5
- **Khan:** n×n Determinantı · Derinlemesine Determinantlar

### Ders 09 — Cramer Kuralı + Adjoint Matris ✅
- **Ders:** `lessons/lineer-cebir/0009-cramer-adjoint.html` · **Referans:** `reference/lineer-cebir/cramer-adjoint.html`
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

> **Not (2026-08-01):** Dosya adları artık tam olarak çalışma sırasıyla (dosya gezgininde göründükleri sıra) ve her dersin sonundaki "Sıradaki" linkiyle birebir uyumlu — 13 dosya `git mv` ile yeniden numaralandırıldı, tüm iç bağlantılar (başlık, kicker, "Sıradaki" navigasyonu, çapraz referanslar) doğrulandı, kırık link kalmadı. Ders 02, 04, 05, 10, 11, 12, 13 için referans kartları henüz yazılmadı (08 ve 09 için 2026-08-04'te eklendi) — dersler tamamlandığı için kullanıcı çalışmaya başlayabilir, kalan kartlar sonradan eklenecek.

> **Not (2026-08-04, sınav öncesi kapsamlı denetim):** Hocanın 3 PDF'i (`1-2-3.pdf`, `4-5-6.pdf`, `7-8-9.pdf`) ile Ders 01-13'ün tamamı karşılaştırıldı, teknik eksikler dolduruldu (bkz. ROADMAP.md'deki "2026-08-04 kapsamlı denetim" bölümü). Ayrıca `0015-pratik-sorular.html` (14 konu, temel+sınav seviyesi 28 soru) eklendi ve `0014-genel-tekrar-1-13.html`'e yöntem seçme rehberi + son kontrol listesi eklendi.

---

## BÖLÜM 7 — Özdeğer, Özvektör, Diyagonalizasyon (Ders 16-31)
> ✅ **2026-08-18'de tamamlandı.** `10-11-12.pdf` (33 sayfa) ve `13-14.pdf` (12 sayfa) sayfa sayfa tarandı; PDF'lerdeki matematiksel içerik görsel olarak gömülü olduğu için sayfa yapısı ayrıştırılıp tüm görseller çıkarılarak okundu. Kapsam eşlemesi + tespit edilen PDF dizgi hataları: `lessons/lineer-cebir/ROADMAP.md` "Bölüm 7" bölümü. Bu içerik **5 Ağustos yaz okulu sınavının kapsamı dışındaydı**; azami süre sonu sınavı için hazır.

### Ders 16 — Özdeğer, özvektör, karakteristik denklem ✅
- **Ders:** `lessons/lineer-cebir/0016-ozdeger-ozvektor-karakteristik-denklem.html` · **Referans:** `reference/lineer-cebir/ozdeger-ozvektor.html`
- Bölüm 7.1, 7.1.1 — AX=λX, det(λI−A), karakteristik determinant/polinom/eşitlik, Örnek 1
- **Kaynak:** 3Blue1Brown "Eigenvectors and eigenvalues" (Bölüm 14) · MIT 18.06 Ders 21

### Ders 17 — 3×3 özdeğerler ve tekrarlı kökler ✅
- **Ders:** `lessons/lineer-cebir/0017-ozdeger-bulma-3x3-tekrarli-kokler.html` · **Referans:** `reference/lineer-cebir/ozdeger-ozvektor.html`
- Bölüm 7.1.1.2-7.1.1.3 — Örnek 2, Örnek 3
- **Khan:** "n x n Determinantı" (kofaktör açılımı tazeleme)

### Ders 18 — Baz (basis) ve çözüm uzayı ✅
- **Ders:** `lessons/lineer-cebir/0018-baz-ve-cozum-uzayi.html`
- Bölüm 7.1.2 — Şekil 7.1/7.2, baz tanımı+teoremi, Örnek 4 (5 bilinmeyenli homojen sistem)
- **Khan:** "Doğrusal Bağımsızlık", "Bir Altuzayın Bazı" · 3B1B Bölüm 2

### Ders 19 — Özvektör bulma prosedürü ✅
- **Ders:** `lessons/lineer-cebir/0019-ozvektor-bulma-proseduru.html` · **Referans:** `reference/lineer-cebir/ozdeger-ozvektor.html`
- Bölüm 7.1.3 — (λI−A)x=0, Örnek 5 (2×2, hem doğrudan hem kanonik yol)

### Ders 20 — 3×3 tam özvektör örneği + bağımsızlık ✅
- **Ders:** `lessons/lineer-cebir/0020-ozvektor-3x3-tam-ornek.html`
- Bölüm 7.1.3.2 — Örnek 6 (üç özvektör baştan sona), Örnek 7 (det=27 bağımsızlık kontrolü)

### Ders 21 — Özdeğerlerin özellikleri + üçgen matrisler ✅
- **Ders:** `lessons/lineer-cebir/0021-ozdeger-ozellikleri-ucgen-matrisler.html` · **Referans:** `reference/lineer-cebir/ozdeger-ozvektor.html`
- Bölüm 7.2 — bağımsızlık teoremi, Özellik 1 (cλ ↔ cA) + örneği, üçgen matris teoremi + örneği
- ⚠️ PDF'te sekmeli slayttan yalnızca **Özellik 1** basılmış; diğer sekmeler görünmüyor (derste not düşüldü)

### Ders 22 — Diyagonalleştirilebilirlik: karar verme ✅
- **Ders:** `lessons/lineer-cebir/0022-diyagonallestirilebilirlik.html` · **Referans:** `reference/lineer-cebir/diyagonalizasyon.html`
- Bölüm 7.3, 7.3.1 — n bağımsız özvektör şartı, Örnek 8, 9, 10

### Ders 23 — Diyagonalleştirme yöntemi (P ve D) ✅
- **Ders:** `lessons/lineer-cebir/0023-diyagonallestirme-yontemi.html` · **Referans:** `reference/lineer-cebir/diyagonalizasyon.html`
- Bölüm 7.3.1.4-7.3.1.5 — 5 adım, D=P⁻¹AP, Örnek 11 (P⁻¹ Gauss-Jordan ile tam gösterildi)
- **MIT 18.06:** Ders 22 (Diagonalization and Powers of A)

### Ders 24 — İki tam diyagonalleştirme örneği ✅
- **Ders:** `lessons/lineer-cebir/0024-diyagonallestirme-tam-ornekler.html`
- Bölüm 7.3.1.6-7.3.1.7 — Örnek 12 (kesirli P⁻¹, 1/9'lar), Örnek 13 (det(P)=−1; özvektörler PDF'te verilmemiş → türetildi)

### Ders 25 — Ortogonal ve ortonormal bazlar ✅
- **Ders:** `lessons/lineer-cebir/0025-ortogonal-ortonormal-bazlar.html` · **Referans:** `reference/lineer-cebir/ortonormal-gram-schmidt.html`
- Bölüm 7.3.2 — Örnek 14 (standart baz), tanımlar, Örnek 15
- **MIT 18.06:** Ders 17 (Orthogonal Matrices and Gram-Schmidt)

### Ders 26 — Gram-Schmidt yöntemi ✅
- **Ders:** `lessons/lineer-cebir/0026-gram-schmidt.html` · **Referans:** `reference/lineer-cebir/ortonormal-gram-schmidt.html`
- Bölüm 7.3.3 — formüller + Örnek 16
- **Khan:** "Gram-Schmidt Süreci", "Gram-Schmidt Süreci Örneği"

### Ders 27 — Simetrik ve ortogonal matrisler ✅
- **Ders:** `lessons/lineer-cebir/0027-simetrik-ve-ortogonal-matrisler.html` · **Referans:** `reference/lineer-cebir/ortonormal-gram-schmidt.html`
- Bölüm 7.4 — A=Aᵀ, AᵀA=I, Örnek 17, Örnek 18, simetrik matrisin A–E özellikleri
- **MIT 18.06:** Ders 25 (Symmetric Matrices)

### Ders 28 — Simetrik matrisin ortogonal diyagonalizasyonu ✅
- **Ders:** `lessons/lineer-cebir/0028-simetrik-matris-ortogonal-diyagonalizasyon.html` · **Referans:** `reference/lineer-cebir/diyagonalizasyon.html`
- Bölüm 7.4.1.1-7.4.1.2 — Örnek 19 (tam), 6 adımlık yöntem, D=PᵀAP

### Ders 29 — Tekrarlı özdeğer + Gram-Schmidt (Örnek 20) ✅ ⬅️ BÖLÜM 7'NİN EN KAPSAMLI ÖRNEĞİ
- **Ders:** `lessons/lineer-cebir/0029-tekrarli-ozdeger-gram-schmidt-ornek20.html`
- Bölüm 7.4.1.3 (`13-14.pdf`) — A=[[0,2,2],[2,0,2],[2,2,0]], λ=−2 (iki kez) ve λ=4, eigen uzayında Gram-Schmidt

### Ders 30 — Bölüm 7 Genel Tekrar ✅
- **Ders:** `lessons/lineer-cebir/0030-genel-tekrar-bolum7.html`
- Tüm tanım/formül/yöntemler tek sayfada + yöntem seçme rehberi + 16 maddelik hata listesi + 12 maddelik son kontrol listesi

### Ders 31 — Bölüm 7 Değerlendirme Soruları ✅
- **Ders:** `lessons/lineer-cebir/0031-bolum7-degerlendirme-sorulari.html`
- `13-14.pdf`'teki 20 çoktan seçmeli sorunun tamamı, her biri tam çözümlü + "nerede takıldın → hangi dersi aç" tablosu
- ⚠️ Soru 10'un şıklarında doğru özvektör yok (PDF dizgi hatası) — derste gösterildi

> **Not (2026-08-18):** Bölüm 7 dosyaları `0016`'dan başlıyor; `0014` (Ders 01-13 genel tekrar) ve `0015` (Ders 01-13 pratik) mevcut düzeni bozmamak için yerinde bırakıldı. Çalışma sırası: 01→13 → 14 (tekrar) → 15 (pratik) → 16→29 (Bölüm 7) → 30 (tekrar) → 31 (sorular).

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
- **Ders:** `lessons/elektrik-devre-temelleri/0013-genel-tekrar.html` · ayrı referans kartı yok (kendisi zaten özet)
- 02/08/2026'da eklendi: kullanıcı sınavda hocanın sözlü/kavramsal soru da sorabileceğini belirtti, tüm dersleri tek sıralı dosyada (tanım+formül+"neden"+muhtemel sözlü soru-cevap) isteyip onayladı ("/teach")

### 12 · Ders 12 — Örnek Sorular (sınav provası) ✅
- **Ders:** `lessons/elektrik-devre-temelleri/0014-ornek-sorular.html` · 25 soru, çözümler `<details>` ile gizli (önce kendin çöz)
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
- ✅ **Kompleks sayılar — gerekmiyor** (2026-08-18 teyidi): `10-11-12.pdf` Bölüm 7.1 açıkça "burada reel sayılar içeren örnekler üzerinde durulacaktır" diyor; tüm örneklerin kökleri gerçel.
- ✅ **Polinom kökü bulma — ayrı ön bilgi dersi gerekmedi** (2026-08-18): ihtiyaç yalnızca kübik polinomu tam sayı kök deneyerek çarpanlara ayırmak; bu, `lessons/lineer-cebir/0017-ozdeger-bulma-3x3-tekrarli-kokler.html` (Ders 17) ve `0029-tekrarli-ozdeger-gram-schmidt-ornek20.html` (Ders 29) içinde yöntem olarak gösterildi (sabit terimin bölenlerini dene → böl).
