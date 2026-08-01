# Kaynaklar

## Lineer Cebir (BM213) Kaynakları

> Düzce BM213 sınavını geçmek için seviye-0'dan başlayan kaynak seti. Türkçe + görsel sezgi + sınav derinliği dengesi.

### Knowledge

- [Khan Academy Türkçe — Lineer (Doğrusal) Cebir](https://tr.khanacademy.org/math/linear-algebra)
  Türkçe, yapılandırılmış, alıştırmalı. **Birincil kaynak** — konu anlatımı + bol örnek soru. Use for: her konunun ilk öğrenimi ve sınav tipi alıştırma.
- [3Blue1Brown — Essence of Linear Algebra (playlist)](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
  Görsel sezgi şampiyonu. Use for: "matris neden böyle çarpılıyor", determinant/özvektör gibi kavramların *neden*ini görmek. Bölüm 1 (vektörler): https://www.youtube.com/watch?v=fNk_zzaMoSs · Bölüm 3 (dönüşüm & matris): https://www.youtube.com/watch?v=kYB8IZa5AuE
- [MIT 18.06SC Linear Algebra — Gilbert Strang (OCW)](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/)
  Klasik, sınav rigoruna en yakın. Use for: konuyu derinleştirmek, çözümlü problem videoları. Özet not PDF: [ZoomNotes](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/4d876a9159e32543eb0d73b4d4382f4c_MIT18_06S10ZoomNotes.pdf)

### Wisdom (Communities)
- Henüz eklenmedi. (Sınav-odaklı; topluluk şimdilik öncelik değil — gerekirse r/learnmath / Khan tartışma eklenebilir.)

### EBS resmî ders sayfaları (Düzce)
> Not: EBS sitesi SSL sertifika hatası verdiği için otomatik çekilemiyor. Kullanıcı tarayıcıdan açıp "Haftalık Konular" + öğrenme çıktılarını yapıştırıyor.
- BM Öğretim Programı (tüm dersler): https://ebs.duzce.edu.tr/tr-TR/Bolum/OgretimProgrami/14?bot=14
- **BM213 Lineer Cebir:** https://ebs.duzce.edu.tr/tr-TR/Ders/Index/333778?bno=14&bot=14&yilNo=0
- (Diğer derslerin sayfasına: program linkinden ders adına tıklanır.)

### Gaps
- **Geçmiş sınav soruları** elde yok. Hocadan/önceki dönem öğrencilerinden bulunursa eklenecek (sınav formatı için kritik).
- **Khan Academy Türkçe Lineer Cebir kapsamı** — Hafta 1-9 (Bölüm 1-6) içeriğiyle iyi örtüşüyor (bkz. her dersin kendi "Birincil kaynak" bölümü). Hafta 10-14 için Khan kapsamı henüz doğrulanmadı, PDF okununca netleşecek.
- **Düzeltme (2026-07-18):** "Vandermonde/üç köşegen özel determinantlar" ve "Kramer teoremi Khan'da yok" notları **eskiydi** — gerçek ders notu PDF'leri (`DersNotlari/LineerCebir/*.pdf`) okunduğunda, Vandermonde/üç köşegen determinant diye ayrı bir konu **hiç yok** (EBS'nin eski, yanlış çıkan iddiasıydı), Cramer kuralı ve Adjoint matris ise resmi notlarda ayrıntılı işlenmiş ve Ders 0009'da tamamen `teach` ile kapsandı — Khan'da olup olmaması artık önemli değil.
- Hamilton-Cayley/Sylvester, Jordan formu, kuadratik formlar için Hafta 10-14 PDF'i (`10-11-12.pdf`, `13-14.pdf`) henüz okunmadı — o zaman gerçek kapsam netleşecek, MIT 18.06 (Gilbert Strang) yedek kaynak olarak duruyor.

> Not: BM213'ün gerçek ders notu PDF'leri artık tek doğru kaynak — bkz. `lessons/lineer-cebir/ROADMAP.md`. Eski EBS haftalık syllabus'u (`lessons/lineer-cebir/bm213-haftalik-konular.md`) süperlendi, artık kullanılmıyor.

## Elektrik Devre Temelleri (BM107) Kaynakları

> **2026-08-01 güncellemesi:** Kullanıcı hocanın gerçek ders notu PDF'lerini (`DersNotlari/ElektrikDevreTemelleri/*.pdf`, Dr. Öğr. Üyesi Ekrem BAŞER) paylaştı — bunlar artık **tek doğru kaynak ve birincil referans**. Aşağıdaki Khan/Spinning Numbers/Kuphaldt kaynakları **ikincil** (pekiştirme/görsel sezgi) konuma indi. Gerçek ders kapsamı, jenerik 14 haftalık syllabus'tan önemli ölçüde farklı çıktı (bkz. `lessons/elektrik-devre-temelleri/ROADMAP.md`) — Wheatstone köprü, Y-Δ dönüşümü, Millman, Kapasitör, Bobin gerçek notlarda **yok**. Kullanıcının belirgin alt yapısı var (bkz. LR0006-edt-altyapi-var).

### Knowledge (birincil)
- `DersNotlari/ElektrikDevreTemelleri/*.pdf` (Dr. Öğr. Üyesi Ekrem BAŞER, Düzce Üniversitesi) — **Birincil kaynak.** 1. Hafta (temel kavramlar + Ohm/KCL/KVL/seri-paralel), 1. Hafta-Devam (DGY, Çevre Akımları/Kramer), 2.1 (Süperpozisyon, Kaynak Dönüşümü), 2.2 (Thevenin, Norton), 3.1 (Maksimum Güç Transferi), 3.2 (İdeal Opamp — **kapsam dışı**).
- `DersNotlari/ElektrikDevreTemelleri/Fundamentals of Electric Circuits.pdf` (Alexander & Sadiku, 4. baskı) + `Solutions-Fundamentals-of-Electric-Circuits-5th-Edition-[konkur.in].pdf` — **Pratik soru kaynağı.** Her ders (0001-0009) sonunda "📚 Kitaptan pratik" kutusunda ilgili bölüm + problem numaraları var (pdftotext ile PDF sayfa numaraları doğrulandı: printed sayfa + 32 = PDF sayfası). Çözüm kitabı 5. baskı olduğu için numaralar bazen 1-2 kaymış olabilir — tutmazsa şekil/konuya göre eşleştir.

### Knowledge (ikincil — pekiştirme)
- [Khan Academy — Electrical Engineering course](https://www.khanacademy.org/science/electrical-engineering) (İngilizce)
  Gerçek ders notundaki konuların çoğunu (devre elemanları, Ohm/Kirchhoff, düğüm/çevre analizi, süperpozisyon, Thevenin/Norton, maks. güç transferi) görsel/video formatında kapsıyor. Use for: konuyu ilk gördükten sonra pekiştirme.
- [Spinning Numbers](https://spinningnumbers.org/) (İngilizce)
  Khan EE kursunu hazırlayan kişinin yazılı/referans sitesi. Use for: hızlı tekrar.
- [Khan Academy Türkçe — Fizik / Devreler](https://tr.khanacademy.org/science/10-sinif-fizik/x700e03322a1a4ae2:elektrik-ve-manyetizma) (Türkçe)
  Yalnızca temel kavramlar (akım/voltaj/güç, Ohm, Kirchhoff) seviyesinde — lise fiziği kapsamında. Use for: temel kavramları Türkçe hızlıca tazelemek.

### Wisdom (Communities)
- Henüz eklenmedi.

### EBS resmî ders sayfası
- **BM107 Elektrik Devre Temelleri:** program linkinden ders adına tıklanarak ulaşılır (bkz. BM213 linki yukarıda, aynı program sayfası). Artık ikincil — gerçek ders notu PDF'leri esas alınıyor.

### Gaps
- Geçmiş sınav soruları elde yok.
- 3.2 (İdeal Opamp) sonrası ders notu var mı bilinmiyor — kullanıcı "opampa kadar sorumluyuz" dediği için araştırılmadı.
