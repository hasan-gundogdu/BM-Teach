# Lineer Cebir (BM213) — Ders Yol Haritası

> **2026-08-01'de dosya adları çalışma sırasına göre yeniden numaralandırıldı.** Önceden ders dosya numaraları "oluşturma sırası" idi, çalışma sırası farklıydı — kafa karıştırıyordu. Artık **dosya numarası = çalışma sırası**: `0001` dosyasını bitirince `0002`'ye geç, vs. Her dersin sonundaki "Sıradaki" linki zaten doğru dosyaya götürüyor.

## Kaynak dosyalar → Bölüm eşlemesi

| PDF dosyası | İçerdiği Bölüm(ler) |
|---|---|
| `1-2-3.pdf` (Hafta 1-3) | Bölüm 1 (Lineer Eşitlikler, Matrisler) + Bölüm 2 (Matrisle Sistem Çözümü, Ters Matris) |
| `4-5-6.pdf` (Hafta 4-6) | Bölüm 3 (Determinantlar) + Bölüm 4 (Cramer, Adjoint Matris) |
| `7-8-9.pdf` (Hafta 7-9) | Bölüm 5 (Vektörler) + Bölüm 6 (Rank, Sistem Çözümü) |
| `10-11-12.pdf` (Hafta 10-12, 33 sayfa) | Bölüm 7.1–7.4.1.2 (Eigen Değer/Vektör, Baz, Diyagonalizasyon, Ortonormal Baz, Gram-Schmidt, Simetrik/Ortogonal Matris) — 5 Ağustos yaz okulu sınavının kapsamı dışındaydı; **2026-08-18'de Ders 16-31 ile tamamen işlendi** |
| `13-14.pdf` (Hafta 13-14, 12 sayfa) | Bölüm 7.4.1.3 (Örnek 20: tekrarlı özdeğer + Gram-Schmidt) + 20 soruluk değerlendirme seti (başlıkta "6. Bölüm" yazıyor ama içerik Bölüm 7) — **2026-08-18'de Ders 29 ve 31 ile işlendi** |

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

---

## Bölüm 7 — Ders sırası (2026-08-18'de eklendi)

> Numaralandırma `0016`'dan başlıyor; `0014` (Ders 01-13 genel tekrar) ve `0015` (Ders 01-13 pratik) mevcut düzeni bozmamak için yerinde bırakıldı.

| Ders | Dosya | Bölüm/Fasıl | Konu | Durum |
|---|---|---|---|---|
| 16 | `0016-ozdeger-ozvektor-karakteristik-denklem.html` | 7.1, 7.1.1 | AX=λX kavramı, karakteristik determinant/polinom/eşitlik, **Örnek 1** (2×2) | ✅ |
| 17 | `0017-ozdeger-bulma-3x3-tekrarli-kokler.html` | 7.1.1.2-7.1.1.3 | 3×3 karakteristik polinom (kofaktör açılımı), tekrarlı kök — **Örnek 2, Örnek 3** | ✅ |
| 18 | `0018-baz-ve-cozum-uzayi.html` | 7.1.2 | Baz (basis) tanımı+teoremi, Şekil 7.1-7.2, homojen sistemin çözüm uzayı bazı — **Örnek 4** | ✅ |
| 19 | `0019-ozvektor-bulma-proseduru.html` | 7.1.3, 7.1.3.1 | 2 adımlı prosedür, (λI−A)x=0 — **Örnek 5** (2×2, iki yoldan) | ✅ |
| 20 | `0020-ozvektor-3x3-tam-ornek.html` | 7.1.3.2 | 3×3 üç özvektör tam çözüm + bağımsızlık determinantı — **Örnek 6, Örnek 7** | ✅ |
| 21 | `0021-ozdeger-ozellikleri-ucgen-matrisler.html` | 7.2, 7.2.1-7.2.3 | Bağımsızlık teoremi, Özellik 1 (cλ ↔ cA) + örneği, üçgen matris teoremi + örneği | ✅ |
| 22 | `0022-diyagonallestirilebilirlik.html` | 7.3, 7.3.1 | Diyagonalleştirilebilirlik tanımı ve şartı — **Örnek 8, 9, 10** | ✅ |
| 23 | `0023-diyagonallestirme-yontemi.html` | 7.3.1.4-7.3.1.5 | 5 adımlık yöntem, D=P⁻¹AP — **Örnek 11** (P⁻¹ Gauss-Jordan ile tam) | ✅ |
| 24 | `0024-diyagonallestirme-tam-ornekler.html` | 7.3.1.6-7.3.1.7 | Kesirli P⁻¹ ve negatif det(P) — **Örnek 12, Örnek 13** | ✅ |
| 25 | `0025-ortogonal-ortonormal-bazlar.html` | 7.3.2, 7.3.2.1-7.3.2.3 | Ortogonal/ortonormal küme ve baz tanımları — **Örnek 14, Örnek 15** | ✅ |
| 26 | `0026-gram-schmidt.html` | 7.3.3, 7.3.3.1 | Gram-Schmidt formülleri + normalize — **Örnek 16** | ✅ |
| 27 | `0027-simetrik-ve-ortogonal-matrisler.html` | 7.4, 7.4.1 | Simetrik (A=Aᵀ) ve ortogonal (AᵀA=I) matris, simetrik matrisin A–E özellikleri — **Örnek 17, Örnek 18** | ✅ |
| 28 | `0028-simetrik-matris-ortogonal-diyagonalizasyon.html` | 7.4.1.1-7.4.1.2 | D=PᵀAP, 6 adımlık yöntem — **Örnek 19** | ✅ |
| 29 | `0029-tekrarli-ozdeger-gram-schmidt-ornek20.html` | 7.4.1.3 (`13-14.pdf`) | Tekrarlı özdeğer + eigen uzayında Gram-Schmidt — **Örnek 20** (Bölüm 7'nin en kapsamlı örneği) | ✅ |
| 30 | `0030-genel-tekrar-bolum7.html` | — | Bölüm 7'nin tüm tanım/formül/yöntemleri tek sayfada + yöntem seçme rehberi + hata listesi + son kontrol listesi | ✅ |
| 31 | `0031-bolum7-degerlendirme-sorulari.html` | `13-14.pdf` değerlendirme | PDF'teki 20 çoktan seçmeli sorunun tamamı, her biri tam çözümlü | ✅ |

### Bölüm 7 referans kartları
- `reference/lineer-cebir/ozdeger-ozvektor.html` (Ders 16-21)
- `reference/lineer-cebir/diyagonalizasyon.html` (Ders 22-24, 27-29)
- `reference/lineer-cebir/ortonormal-gram-schmidt.html` (Ders 25-27)

### PDF kapsam denetimi (2026-08-18)
`10-11-12.pdf` (33 sayfa) ve `13-14.pdf` (12 sayfa) sayfa sayfa tarandı. PDF'lerin metni gömülü ama tüm matematiksel içerik **görsel** olarak saklı; sayfa yapısı ayrıştırılıp 251 + 40 görsel çıkarılarak okundu. Kapsam eşlemesi:

| PDF bölümü | Ders |
|---|---|
| 7.1 Eigen ve eigen vektör kavramı | 16 |
| 7.1.1 Karakteristik determinant/polinom/eşitlik + Örnek 1 | 16 |
| 7.1.1.2-7.1.1.3 Örnek 2, 3 | 17 |
| 7.1.2 Baz + Şekil 7.1/7.2 + tanım/teorem + Örnek 4 | 18 |
| 7.1.3 Prosedür + Örnek 5 | 19 |
| 7.1.3.2 Örnek 6 · Örnek 7 (bağımsızlık) | 20 |
| 7.2.1 / 7.2.2 (Özellik 1 + örnek) / 7.2.3 (üçgen + örnek) | 21 |
| 7.3 + 7.3.1 + Örnek 8, 9, 10 | 22 |
| 7.3.1.4 yöntem + 7.3.1.5 Örnek 11 | 23 |
| 7.3.1.6 Örnek 12 · 7.3.1.7 Örnek 13 | 24 |
| 7.3.2 + Örnek 14 + 7.3.2.2 + Örnek 15 | 25 |
| 7.3.3 Gram-Schmidt + Örnek 16 | 26 |
| 7.4 (simetrik/ortogonal) + Örnek 17, 18 + 7.4.1 A–E | 27 |
| 7.4.1.1 Örnek 19 + 7.4.1.2 6 adımlık yöntem | 28 |
| 7.4.1.3 Örnek 20 (`13-14.pdf`) | 29 |
| Değerlendirme soruları 1-20 (`13-14.pdf`) | 31 |

**Kapsam dışı kalan / PDF'de bulunmayanlar:** Hocanın 7.2.2 slaytı sekmeli bir sunum ("Özellik 1 / Özellik 2 / Özellik 3 / …"); PDF'e yalnızca **Özellik 1**'in metni ve örneği basılmış, diğer sekmelerin içeriği görünmüyor. Ders 21'de bu durum açıkça not edildi, uydurma özellik eklenmedi.

**PDF'te tespit edilen dizgi hataları (derslerde açıkça işaretlendi):**
- Örnek 5, λ=2 adımı: "x₂ = −2x₁" yazıyor; sistem ve slaytın kendi cevabı `x₂ = −x₁` diyor (Ders 19).
- Gram-Schmidt formül listesi: `b₂ = a₃ − …` yazıyor; doğrusu `b₂ = a₂ − …` (Ders 26).
- Örnek 12, `P⁻¹A` ara matrisinin (2,1) girişi `5/9` basılmış; doğrusu `6/9` (Ders 24).
- Örnek 20'de "bağımlı/bağımsız değişken" terimleri PDF'in diğer örneklerine göre yer değiştirmiş (Ders 29).
- Değerlendirme Soru 10'un şıklarında doğru özvektör (`(2,−2,1)` veya katı) hiçbir şıkta yok; işaretli şık Ⓒ `(−2,2,1)` ama o vektör `Av = 0`'ı sağlamıyor (Ders 31'de gösterildi).
- Değerlendirme başlığı "6. BÖLÜM DEĞERLENDİRME SORULARI"; içerik Bölüm 7.

**Sayısal doğrulama:** Bütün örneklerdeki özdeğerler iz/determinant çaprazlamasıyla, bütün özvektörler `Av = λv` ile, bütün tersler `PP⁻¹ = I` (veya `PᵀP = I`) ile, bütün diyagonalizasyonlar `D = P⁻¹AP` çarpımı yeniden hesaplanarak doğrulandı.
