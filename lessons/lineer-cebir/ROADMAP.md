# Lineer Cebir (BM213) — Ders Yol Haritası

> **2026-08-01'de dosya adları çalışma sırasına göre yeniden numaralandırıldı.** Önceden ders dosya numaraları "oluşturma sırası" idi, çalışma sırası farklıydı — kafa karıştırıyordu. Artık **dosya numarası = çalışma sırası**: `0001` dosyasını bitirince `0002`'ye geç, vs. Her dersin sonundaki "Sıradaki" linki zaten doğru dosyaya götürüyor.

## Kaynak dosyalar → Bölüm eşlemesi

| PDF dosyası | İçerdiği Bölüm(ler) |
|---|---|
| `1-2-3.pdf` (Hafta 1-3) | Bölüm 1 (Lineer Eşitlikler, Matrisler) + Bölüm 2 (Matrisle Sistem Çözümü, Ters Matris) |
| `4-5-6.pdf` (Hafta 4-6) | Bölüm 3 (Determinantlar) + Bölüm 4 (Cramer, Adjoint Matris) |
| `7-8-9.pdf` (Hafta 7-9) | Bölüm 5 (Vektörler) + Bölüm 6 (Rank, Sistem Çözümü) |
| `10-11-12.pdf` (Hafta 10-12) | ⬜ henüz okunmadı |
| `13-14.pdf` (Hafta 13-14) | ⬜ henüz okunmadı |

## Ders sırası (= dosya numarası sırası)

| Ders | Dosya | Bölüm/Fasıl | Konu | Durum |
|---|---|---|---|---|
| 01 | `0001-sistemler-gauss-determinant.html` | 1.1, 1.2, 3.1-3.2 | Lineer eşitlik tanımı, Gauss ile sistem çözümü, 2×2/3×3 determinant (Sarrus) | ✅ |
| 02 | `0002-matrisler-ve-ozel-matrisler.html` | 1.3 | Matris tanımı, eşitlik, özel matrisler (sıfır, transpoze, köşegen, skalar, birim, üç köşegenli, üst/alt üçgen, simetrik, antisimetrik) | ✅ |
| 03 | `0003-matrisler-ve-temel-islemler.html` | 1.3 (devam) | Matris toplama, skalerle çarpım, matris çarpımı | ✅ |
| 04 | `0004-satir-esdeger-matris-gauss-jordan.html` | 2.1-2.3 | Arttırılmış matris, satır eşdeğer/indirgenmiş matris tanımı, Gauss & Gauss-Jordan eliminasyon | ✅ |
| 05 | `0005-ters-matris.html` | 2.4-2.5 | Ters matris tanımı, [A:I]→[I:A⁻¹] yöntemi, matris tersi ile sistem çözümü | ✅ |
| 06 | `0006-geometrik-yorum-n-boyutlu-determinant.html` | ek derinlik + 3.1 | Geometrik yorum, n-boyutlu determinant (permütasyon) — resmi notların ötesinde derinlik | ✅ |
| 07 | `0007-determinantin-ozellikleri-ve-hesaplama.html` | 3.3-3.4 | Determinant özellikleri (6 özellik), üçgen matris ile hesaplama | ✅ |
| 08 | `0008-kofaktor-acilimi.html` | 3.5 | Minör, kofaktör tanımı, kofaktör açılımı ile determinant | ✅ |
| 09 | `0009-cramer-adjoint.html` | 4.1-4.2 | Cramer kuralı, adjoint matris, A⁻¹=adj(A)/det(A) | ✅ |
| 10 | `0010-vektorler-temel-nokta-carpim.html` | 5.1-5.4.7 | Vektör tanımı, birim vektörler, P1P2 bileşenleri, nokta çarpım, açı | ✅ |
| 11 | `0011-vektorel-carpim-lineer-bagimsizlik.html` | 5.4.8-5.5 | Vektörel (çapraz) çarpım, karışık çarpım, lineer kombinasyon, lineer bağımlılık/bağımsızlık | ✅ |
| 12 | `0012-matris-ranki.html` | 6.1 | Matris rankı tanımı, denk matrisler yöntemi | ✅ |
| 13 | `0013-rank-ile-sistem-cozumu.html` | 6.2-6.3.2 | AX=B çözümü rank ile (r(A)=r(AB)), homojen sistemler (4 kural) | ✅ |

## Ön bilgi gereksinimleri (değişmedi)

- **Matematiksel notasyon** (Σ, alt indis, σ, permütasyon) → `lessons/on-bilgi/0002-matematik-notasyonu.html` (Ders 06 için gerekli)
- **Trigonometri** → `lessons/on-bilgi/0001-temel-trigonometri.html` (Ders 10 vektör açı hesaplarında lazım)

## Sınav vurgusu (gerçek içerikten çıkarım)

Hafta 1-9 (Bölüm 1-6), sistemler + matris + determinant + vektör + rank konularının **tamamını** kapsıyor — sınavın en yoğun kısmı. Kofaktör açılımı ve Cramer kuralı resmi notlarda ayrıntılı işlenmiş, sınavda büyük ihtimalle sorulacak. Adjoint matris de yeni ama önemli bir kavram.

## Referans kartları

Ders 01, 06, 07, 03 için referans kartı mevcut (`reference/lineer-cebir/`). Ders 02, 04, 05, 08, 09, 10, 11, 12, 13 için henüz yazılmadı — istenirse sonradan eklenir.
