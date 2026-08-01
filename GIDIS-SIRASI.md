# Gidiş Sırası — Çalışma Takibi

> Tek bakışta "nerede kaldık, sırada ne var". Her ders için: **ders dosyası + referans kartı + izlenecek Khan videoları.**
> Durum: ✅ bitti · ⬅️ sıradaki · ⬜ bekliyor · ⚠️ Khan kapsamıyor (teach + Strang ile).
> Yeni ders yazıldıkça bu dosya güncellenir.

---

# BM213 — Lineer Cebir · sınav 5 Ağustos
> ⚠️ **2026-07-18'de tamamen düzeltildi.** Eski sıralama (aşağıdaki, artık geçersiz) EBS'nin genel haftalık başlıklarına dayanıyordu. Kullanıcı hocanın gerçek ders notu PDF'lerini (`DersNotlari/LineerCebir/*.pdf`) paylaştı — gerçek içerik Bölüm bazlı ilerliyor ve haftalarla farklı eşleşiyor. **Tek doğru kaynak artık `lessons/lineer-cebir/ROADMAP.md`** (PDF'lere birebir bağlı). Aşağıdaki liste o dosyanın özeti — detay için ROADMAP.md'ye bak.

### 1 · 0001 — Lineer eşitlik tanımı, Gauss, 2×2/3×3 determinant (Sarrus) ✅
- **Ders:** `lessons/lineer-cebir/0001-sistemler-gauss-determinant.html` · **Referans:** `reference/lineer-cebir/determinant-ve-sistemler.html`
- Bölüm 1.1, 1.2, 3.1-3.2

### 2 · 0004 — Matrisler ve Özel Matrisler ✅
- **Ders:** `lessons/lineer-cebir/0004-matrisler-ve-ozel-matrisler.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 1.3 — matris tanımı, eşitlik, özel matrisler (sıfır, transpoze, köşegen, skalar, birim, üç köşegenli, üst/alt üçgen, simetrik, antisimetrik)
- **Khan:** "Bir Matrisin Transpozu"

### 3 · 0006 — Matris toplama, skalerle çarpım, matris çarpımı ✅
- **Ders:** `lessons/lineer-cebir/0006-matrisler-ve-temel-islemler.html` · **Referans:** `reference/lineer-cebir/matris-islemleri.html`
- Bölüm 1.3 (devam)
- **Khan:** Matris Vektör Çarpımı · Matris Toplamları ve Çarpımları · Birleşme/Dağılma Özelliği

### 4 · 0005 — Satır Eşdeğer Matris + Gauss-Jordan Eliminasyonu ✅
- **Ders:** `lessons/lineer-cebir/0005-satir-esdeger-matris-gauss-jordan.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 2.1-2.3 — arttırılmış matris, satır eşdeğer/indirgenmiş matris tanımı, Gauss & Gauss-Jordan formal
- **Khan:** Doğrusal Sistemleri Matrislerle Çözme · Matris Sırası-Kademeli Form

### 5 · 0007 — Ters Matris + Matris Tersi ile Sistem Çözümü ✅
- **Ders:** `lessons/lineer-cebir/0007-ters-matris.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 2.4-2.5 — [A:I]→[I:A⁻¹] yöntemi, X=A⁻¹B
- **Khan:** Ters Matris Bulma Örneği · 2×2 Ters Matris Formülü

### 6 · 0002 — Geometrik yorum, n-boyutlu determinant (permütasyon) ✅
- **Ders:** `lessons/lineer-cebir/0002-geometrik-yorum-n-boyutlu-determinant.html` · **Referans:** `reference/lineer-cebir/n-boyutlu-determinant.html`
- Ek derinlik (resmi notların ötesinde) + Bölüm 3.1 formal permütasyon tanımı
- **Ön bilgi:** Matematiksel notasyon (Σ, alt indis, σ, permütasyon) — `lessons/on-bilgi/0002-matematik-notasyonu.html` ✅

### 7 · 0003 — Determinant özellikleri (6 özellik) + üçgen matris ile hesaplama ✅
- **Ders:** `lessons/lineer-cebir/0003-determinantin-ozellikleri-ve-hesaplama.html` · **Referans:** `reference/lineer-cebir/determinant-ozellikleri.html`
- Bölüm 3.3-3.4

### 8 · 0008 — Kofaktör Açılımı (Minör, Kofaktör) ✅
- **Ders:** `lessons/lineer-cebir/0008-kofaktor-acilimi.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 3.5
- **Khan:** n×n Determinantı · Derinlemesine Determinantlar

### 9 · 0009 — Cramer Kuralı + Adjoint Matris ✅
- **Ders:** `lessons/lineer-cebir/0009-cramer-adjoint.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 4.1-4.2 — A⁻¹=adj(A)/det(A)
- ⚠️ Cramer/adjoint isim olarak Khan'da net karşılığı yok → teach ile hazırlandı

### 10 · 0010 — Vektörler I: tanım, işlemler, nokta çarpım, açı ✅ ⬅️ SON İZLENEN
- **Ders:** `lessons/lineer-cebir/0010-vektorler-temel-nokta-carpim.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 5.1-5.4.7 — vektör tanımı, birim vektörler, P1P2 bileşenleri, nokta çarpım, açı
- **Ön bilgi:** Temel Trigonometri — `lessons/on-bilgi/0001-temel-trigonometri.html` ✅
- **Khan:** Vektör Nokta Çarpım ve Vektör Uzunluğu · İki Vektör Arasındaki Açıların Tanımlanması

### 11 · 0011 — Vektörel Çarpım, Karışık Çarpım, Lineer Bağımsızlık ✅
- **Ders:** `lessons/lineer-cebir/0011-vektorel-carpim-lineer-bagimsizlik.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 5.4.8-5.5 — çapraz çarpım (sağ el kuralı, determinant yöntemi), karışık çarpım, lineer kombinasyon, lineer bağımlılık/bağımsızlık
- **Khan:** Çapraz Çarpım · Doğrusal Bağımsızlık 1-2

### 12 · 0012 — Matris Rankı + Denk Matrisler Yöntemi ✅
- **Ders:** `lessons/lineer-cebir/0012-matris-ranki.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 6.1
- **Khan:** Sütun Uzayı ya da Rank'ın Boyutu

### 13 · 0013 — Rank ile Sistem Çözümü + Homojen Sistemler ✅ ⬅️ HAFTA 1-9 İÇERİĞİNİN SONU
- **Ders:** `lessons/lineer-cebir/0013-rank-ile-sistem-cozumu.html` · **Referans:** ⬜ (yazılacak)
- Bölüm 6.2-6.3.2 — r(A)=r(AB) kuralı, homojen sistem 4 kuralı
- **Khan:** Doğrusal Bir Sistemin Gösterilmesi İçin Matris Satır Sıralı Formun Kullanılması: Çözüm Olmaz

> **Not (2026-07-18):** Ders 0004-0013'ün referans kartları (hızlı başvuru sayfaları) henüz yazılmadı — dersler tamamlandığı için kullanıcı çalışmaya başlayabilir, referans kartları sonradan eklenecek.

⬜ **Hafta 10-12 ve 13-14 PDF'leri henüz okunmadı** — bu bölüme geldiğimizde `10-11-12.pdf` ve `13-14.pdf` açılıp gerçek içerik doğrulanacak (muhtemelen özdeğer/özvektör/Jordan/kuadratik form konuları farklı sırada/derinlikte çıkabilir — varsayım yapılmayacak).

---

# BM107 — Elektrik Devre Temelleri · sınav 4 Ağustos
Syllabus alındı, kaynak: Khan Academy (EN) "Electrical Engineering" kursu + spinningnumbers.org. Detay: `lessons/elektrik-devre-temelleri/ROADMAP.md`. Kullanıcının belirgin alt yapısı var (bkz. LR0006) → tempo hızlı ayarlanacak.

### 1 · Ders 01 — Elektriksel temel kavramlar (akım, voltaj, güç, enerji) ✅
- **1.1 Ders:** `lessons/elektrik-devre-temelleri/0001-akim-voltaj-guc-enerji.html`
- **1.2 Referans:** `reference/elektrik-devre-temelleri/temel-kavramlar-hizli-basvuru.html` ✅ (yazdırmaya uygun; sınav tekrarında dersi değil bunu oku)
- **1.3 Kaynak:** Khan EE — Basic electricity & magnetism / Circuit elements
- **1.4 Khan (TR, Ünite 1):** Akımın Yönü (2 video) ✅izle · Öz Direnç ve İletkenlik ✅izle · Elektrik Akımı ⏭️(derste var) · Elektrolitik iletkenlik ⏭️(müfredat dışı)
- **1.5 Sonradan eklendi (29/07):** Bölüm 0 birim önekleri · Bölüm 2 akım yönü (konvansiyonel/elektron + referans yön seçimi) · Bölüm 4b pasif işaret konvansiyonu · W notasyon uyarısı · işaret kuralları özet tablosu · inline citation'lar · duraklama noktası
- **1.6 Ders yapısı:** 0 önekler → 1 akım → 2 akım yönü → ☕ duraklama → 3 voltaj → 4 güç → 4b işaret konvansiyonu → 5 enerji · 7 çözümlü soru

### 2 · Ders 02 — Devre elemanları, tanımlar, kaynak dönüşümü (Hafta 2) ✅
- **2.1 Ders:** `lessons/elektrik-devre-temelleri/0002-devre-elemanlari-kaynak-donusumu.html`
- **2.2 Referans:** `reference/elektrik-devre-temelleri/devre-terminolojisi-hizli-basvuru.html`
- **2.3 Khan (TR, Ünite 1):** İdeal Devre Elemanları · İdeal Gerilim ve Akım Kaynakları · Devre Terminolojisi (düğüm/kol/çevre — Hafta 3-6'nın temeli) · Voltmetreler ve Ampermetreler (opsiyonel)
- **2.4 Not:** Kaynak dönüşümü (source transformation) Khan Ünite 1'de YOK → derste anlatıldı (Bölüm 4).
- **2.5 Ders yapısı:** 1 terminoloji (düğüm/kol/çevre) → 2 ideal kaynaklar → 3 kısa/açık devre → 4 kaynak dönüşümü → ☕ duraklama · 5 soru

### 3 · Ders 03 — Ohm Kanunu, Kirchhoff Kanunları, Seri-Paralel Dirençler (Hafta 3) ✅
- **3.1 Ders:** `lessons/elektrik-devre-temelleri/0003-ohm-kirchhoff-seri-paralel.html`
- **3.2 Referans:** `reference/elektrik-devre-temelleri/ohm-kirchhoff-hizli-basvuru.html`
- **3.3 Khan (TR, Ünite 1):** Ohm Kanunu · Kirşof Akım Kanunu · Kirşof Gerilim Kanunu · Seri Dirençler · Paralel Dirençler · Gerilim Bölücü · Akım Bölücü — hepsi bu dersle birebir örtüşüyor
- **3.4 Ders yapısı:** 1 Ohm → 2 KCL → 3 KVL → ☕ duraklama → 4 seri + gerilim bölücü → 5 paralel + akım bölücü · 6 soru

### 4 · Ders 04 — Karışık (seri-paralel) devreler (Hafta 4) ⬅️ SIRADAKİ
- **4.1 Ders:** ⬜ · **4.2 Referans:** ⬜

# BM106 — Olasılık ve İstatistik · sınav 6 Ağustos ⬜
Henüz başlanmadı. EBS haftalık konuları alınınca eklenecek. (Ayrık kısım calculus'suz; sürekli kısım için mini integral ön-bilgisi.)

---

## Ön Bilgi (derse özel değil)
- Temel Trigonometri: `lessons/on-bilgi/0001-temel-trigonometri.html` + `reference/on-bilgi/trigonometri-hizli-basvuru.html` ✅ (Lineer Cebir 0010 — Vektörler için gerekli)
- Matematiksel Notasyon (Σ, alt indis, σ, permütasyon): `lessons/on-bilgi/0002-matematik-notasyonu.html` ✅ (Lineer Cebir 0002 için gerekli)
- ⚠️ Kompleks sayılar — henüz yazılmadı (Lineer Cebir Hafta 10-12 içeriği okunduğunda netleşecek)
- ⚠️ Polinom kökü bulma — henüz yazılmadı (Lineer Cebir Hafta 13-14 içeriği okunduğunda netleşecek)
