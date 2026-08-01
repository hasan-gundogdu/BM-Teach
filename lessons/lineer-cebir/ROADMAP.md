# Lineer Cebir (BM213) — Ders Yol Haritası

> **2026-07-18'de tamamen düzeltildi.** Önceki sürüm EBS'nin genel haftalık konu başlıklarına dayanıyordu; kullanıcı hocanın gerçek ders notu PDF'lerini (`DersNotlari/LineerCebir/*.pdf`) paylaşınca, gerçek içeriğin **Bölüm bazlı** ilerlediği ve haftalarla farklı eşleştiği ortaya çıktı. Bu dosya artık **resmi ders notu PDF'lerine birebir bağlı** — sürpriz yaşamamak için her ders o PDF'in ilgili Bölümünü kapsar.

## Kaynak dosyalar → Bölüm eşlemesi

| PDF dosyası | İçerdiği Bölüm(ler) |
|---|---|
| `1-2-3.pdf` (Hafta 1-3) | Bölüm 1 (Lineer Eşitlikler, Matrisler) + Bölüm 2 (Matrisle Sistem Çözümü, Ters Matris) |
| `4-5-6.pdf` (Hafta 4-6) | Bölüm 3 (Determinantlar) + Bölüm 4 (Cramer, Adjoint Matris) |
| `7-8-9.pdf` (Hafta 7-9) | Bölüm 5 (Vektörler) + Bölüm 6 (Rank, Sistem Çözümü) |
| `10-11-12.pdf` (Hafta 10-12) | ⬜ henüz okunmadı |
| `13-14.pdf` (Hafta 13-14) | ⬜ henüz okunmadı |

> Not: Dosya adları hafta aralığı, ama ders içeriği "Bölüm" mantığıyla ilerliyor — bir haftada birden fazla alt-fasıl bitebilir. Ders numaraları (0001, 0002, ...) **oluşturma sırası**; asıl takip sırası bu tablodaki **Bölüm sırası**.

## Ders sırası (Bölüm bazlı)

| Sıra | Ders dosyası | Bölüm/Fasıl | Konu | Durum |
|---|---|---|---|---|
| 1 | 0001-sistemler-gauss-determinant.html | 1.1, 1.2, 3.1-3.2 | Lineer eşitlik tanımı, Gauss ile sistem çözümü, 2×2/3×3 determinant (Sarrus) | ✅ |
| 2 | 0004-matrisler-ve-ozel-matrisler.html | 1.3 | Matris tanımı, eşitlik, toplama/skalerle çarpım, matris çarpımı (0006'da), özel matrisler (sıfır, transpoze, köşegen, skalar, birim, üç köşegenli, üst/alt üçgen, simetrik, antisimetrik) | ⬅️ SIRADAKİ |
| 3 | 0006-matrisler-ve-temel-islemler.html | 1.3 (devam) | Matris toplama, skalerle çarpım, matris çarpımı | ✅ |
| 4 | 0005-satir-esdeger-matris-gauss-jordan.html | 2.1-2.3 | Arttırılmış matris, satır eşdeğer/indirgenmiş matris tanımı, Gauss & Gauss-Jordan eliminasyon | ⬜ |
| 5 | 0007-ters-matris.html | 2.4-2.5 | Ters matris tanımı, [A:I]→[I:A⁻¹] yöntemi, matris tersi ile sistem çözümü | ⬜ |
| 6 | 0002-geometrik-yorum-n-boyutlu-determinant.html | (ek derinlik) 3.1 | Geometrik yorum, n-boyutlu determinant (permütasyon) — resmi notların ötesinde derinlik | ✅ |
| 7 | 0003-determinantin-ozellikleri-ve-hesaplama.html | 3.3-3.4 | Determinant özellikleri (6 özellik), üçgen matris ile hesaplama | ✅ |
| 8 | 0008-kofaktor-acilimi.html | 3.5 | Minör, kofaktör tanımı, kofaktör açılımı ile determinant | ⬜ |
| 9 | 0009-cramer-adjoint.html | 4.1-4.2 | Cramer kuralı, adjoint matris, A⁻¹=adj(A)/det(A) | ⬜ |
| 10 | 0010-vektorler-temel-nokta-carpim.html | 5.1-5.4.7 | Vektör tanımı, birim vektörler, P1P2 bileşenleri, nokta çarpım, açı | ⬜ |
| 11 | 0011-vektorel-carpim-lineer-bagimsizlik.html | 5.4.8-5.5 | Vektörel (çapraz) çarpım, karışık çarpım, lineer kombinasyon, lineer bağımlılık/bağımsızlık | ⬜ |
| 12 | 0012-matris-ranki.html | 6.1 | Matris rankı tanımı, denk matrisler yöntemi | ⬜ |
| 13 | 0013-rank-ile-sistem-cozumu.html | 6.2-6.3.2 | AX=B çözümü rank ile (r(A)=r(AB)), homojen sistemler (4 kural) | ⬜ |

## Ön bilgi gereksinimleri (değişmedi)

- **Matematiksel notasyon** (Σ, alt indis, σ, permütasyon) → `lessons/on-bilgi/0002-matematik-notasyonu.html`
- **Trigonometri** → `lessons/on-bilgi/0001-temel-trigonometri.html` (Bölüm 5 vektör açı hesaplarında lazım olacak)

## Sınav vurgusu (gerçek içerikten çıkarım)

Hafta 1-9 (Bölüm 1-6), sistemler + matris + determinant + vektör + rank konularının **tamamını** kapsıyor — sınavın en yoğun kısmı. Kofaktör açılımı ve Cramer kuralı resmi notlarda ayrıntılı işlenmiş, sınavda büyük ihtimalle sorulacak. Adjoint matris de yeni ama önemli bir kavram.
