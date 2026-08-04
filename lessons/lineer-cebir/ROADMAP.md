# Lineer Cebir (BM213) — Ders Yol Haritası

> **2026-08-01'de dosya adları çalışma sırasına göre yeniden numaralandırıldı.** Önceden ders dosya numaraları "oluşturma sırası" idi, çalışma sırası farklıydı — kafa karıştırıyordu. Artık **dosya numarası = çalışma sırası**: `0001` dosyasını bitirince `0002`'ye geç, vs. Her dersin sonundaki "Sıradaki" linki zaten doğru dosyaya götürüyor.

## Kaynak dosyalar → Bölüm eşlemesi

| PDF dosyası | İçerdiği Bölüm(ler) |
|---|---|
| `1-2-3.pdf` (Hafta 1-3) | Bölüm 1 (Lineer Eşitlikler, Matrisler) + Bölüm 2 (Matrisle Sistem Çözümü, Ters Matris) |
| `4-5-6.pdf` (Hafta 4-6) | Bölüm 3 (Determinantlar) + Bölüm 4 (Cramer, Adjoint Matris) |
| `7-8-9.pdf` (Hafta 7-9) | Bölüm 5 (Vektörler) + Bölüm 6 (Rank, Sistem Çözümü) |
| `10-11-12.pdf` (Hafta 10-12) | Bölüm 7 (Eigen Değer/Vektör, Baz, Diyagonalizasyon) — **final sınavı kapsamı, bu sınavda (yaz okulu, 5 Ağustos) sorumlu değiliz** (2026-08-01, kullanıcı teyidi) |
| `13-14.pdf` (Hafta 13-14) | Bölüm 7 devamı (Örnek 20'ye kadar) + Bölüm 6 değerlendirme soruları — **final sınavı kapsamı, bu sınavda sorumlu değiliz** |

## Ders sırası (= dosya numarası sırası)

| Ders | Dosya | Bölüm/Fasıl | Konu | Durum |
|---|---|---|---|---|
| 01 | `0001-sistemler-gauss-determinant.html` | 1.1, 1.2, 3.1-3.2 | Lineer eşitlik tanımı, Gauss ile sistem çözümü, 2×2/3×3 determinant (Sarrus) | ✅ |
| 02 | `0002-matrisler-ve-ozel-matrisler.html` | 1.3 | Matris tanımı, eşitlik, özel matrisler (sıfır, transpoze, köşegen, skalar, birim, üç köşegenli, üst/alt üçgen, simetrik, antisimetrik) | ✅ |
| 03 | `0003-matrisler-ve-temel-islemler.html` | 1.3 (devam) | Matris toplama, skalerle çarpım, matris çarpımı | ✅ |
| 04 | `0004-satir-esdeger-matris-gauss-jordan.html` | 2.1-2.3 | Arttırılmış matris, satır eşdeğer/indirgenmiş matris tanımı, Gauss & Gauss-Jordan eliminasyon | ✅ |
| 05 | `0005-ters-matris.html` | 2.4-2.5 | Ters matris tanımı, [A:I]→[I:A⁻¹] yöntemi, matris tersi ile sistem çözümü | ✅ |
| 06 | `0006-geometrik-yorum-n-boyutlu-determinant.html` | 3.1 + ek derinlik | Geometrik yorum (gerçekten ek derinlik) + n-boyutlu/permütasyon tabanlı determinant tanımı (**resmi müfredatın parçası, PDF Bölüm 3.1 — ama soru bankasında sayısal permütasyon sorusu yok**, 2026-08-04 düzeltmesi) | ✅ |
| 07 | `0007-determinantin-ozellikleri-ve-hesaplama.html` | 3.3-3.4 | Determinant özellikleri (3 satır işlemi kuralı: takas/skaler/kat ekleme + 3 ek özellik: sıfır satır-sütun, eşit satır-sütun, transpoz), üçgen matris ile hesaplama | ✅ |
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

**Kapsam teyidi (2026-08-01):** Ders 1-13 (Bölüm 1-6, Hafta 1-9) = **bu sınavın (yaz okulu, 5 Ağustos) tam kapsamı** — kullanıcı teyit etti. Bölüm 7 (Eigen değer/vektör vb., `10-11-12.pdf`/`13-14.pdf`) final sınavına ait, bu sınav için ekstra ders gerekmiyor.

## Referans kartları

Ders 01, 03, 06, 07, 08, 09 için referans kartı mevcut (`reference/lineer-cebir/`): `determinant-ve-sistemler.html` (01), `matris-islemleri.html` (03), `n-boyutlu-determinant.html` (06, 2026-08-04'te yalnızca gerçek Ders06 içeriğine odaklanacak şekilde düzeltildi), `determinant-ozellikleri.html` (07), `kofaktor-acilimi.html` (08, yeni), `cramer-adjoint.html` (09, yeni). Ders 02, 04, 05, 10, 11, 12, 13 için henüz yazılmadı — istenirse sonradan eklenir.

## Genel tekrar ve pratik dosyaları

- `0014-genel-tekrar-1-13.html` (2026-08-02, 2026-08-04'te genişletildi) — Ders 01-13'ün **tüm kural ve kavramlarını** tek dosyada, sırayla toplayan kapsamlı tekrar sayfası. Artık ayrıca bir **yöntem seçme rehberi** (hangi soruda Cramer/ters matris/Gauss/rank seçilir) ve **son tekrar kontrol listesi** (8 madde) içeriyor. Sıralı çalışma dizisinin bir parçası değil (yeni içerik değil, sadece tekrar) — o yüzden GIDIS-SIRASI.md'deki ders listesine eklenmedi, sadece burada not düşüldü.
- `0015-pratik-sorular.html` (yeni, 2026-08-04) — 14 konu başlığının her biri için temel + sınav seviyesi soru (toplam 28 soru), çözümler `<details>` içinde. Ders içeriklerindeki örneklerin kopyası değil, farklı sayılarla.

## 2026-08-04 kapsamlı denetim (sınav öncesi son revizyon)

Hocanın `1-2-3.pdf`, `4-5-6.pdf`, `7-8-9.pdf` dosyaları ile Ders 01-13 karşılaştırıldı (3 paralel analiz + 2 paralel düzeltme ajanı). Bulunan ve düzeltilen teknik eksikler:
- **Ders05:** eksik ters matris özellikleri (`AA⁻¹=A⁻¹A`, `(sA)⁻¹=(1/s)A⁻¹`, `(Aᵏ)⁻¹=(A⁻¹)ᵏ`) eklendi, köşegen matris pratik sorusu köşegen olmayan bir matrisle değiştirildi.
- **Ders04:** sıfırdan Gauss ile sistem çözdüren sayısal pratik soru eklendi.
- **Ders02:** kırık iç referanslar ("Ders 0006" diye bir ders yok) düzeltildi.
- **Ders01:** "arttırılmış matris" resmi terimi ve tek çözüm/sonsuz çözüm/çözümsüz ayrımı eklendi.
- **Ders07:** eksik 3 determinant özelliği eklendi (sıfır satır/sütun→0, eşit satır/sütun→0, det(Aᵀ)=det(A)).
- **Ders06:** "resmi notların ötesinde" yanlış çerçevelemesi düzeltildi (permütasyon tanımı PDF Bölüm 3.1'in resmi parçası, sadece sayısal pratik sorusu yok; geometrik yorum gerçekten ek).
- **Ders09:** tam sayısal Cramer alıştırması + opsiyonel `A·adj(A)=det(A)·I` sezgi kutusu eklendi.
- **Ders12:** kırık "Ders 0005" referansı → Ders 04 olarak düzeltildi.
- **Ders10/11:** serbest/bağlı vektör notu ve lineer bağımsızlık sezgi cümlesi eklendi.
- Hiçbir sayısal örnekte hesaplama hatası bulunmadı (üç analiz ajanı da tüm örnekleri elle yeniden hesapladı).
