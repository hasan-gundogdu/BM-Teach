# Lineer Cebir Bölüm 7 tamamlandı; ders notu PDF'lerinin içeriği metin değil **görsel** olarak gömülü

2026-08-18'de `10-11-12.pdf` (33 sayfa) ve `13-14.pdf` (12 sayfa) işlenip Bölüm 7'nin tamamı Ders 16-31 olarak yazıldı (özdeğer → özvektör → baz → diyagonalizasyon → ortonormal baz/Gram-Schmidt → simetrik matrisin ortogonal diyagonalizasyonu + 20 soruluk değerlendirme seti). Bu, BM213'ün resmî içeriğinin **tamamlandığı** anlamına geliyor: Bölüm 1-6 (Ders 01-13) + Bölüm 7 (Ders 16-31).

**Evidence / yöntem notu (gelecekteki oturumlar için kritik):** Bu PDF'lerden `pdftotext` yalnızca **başlıkları** çıkarabildi (13-14.pdf'ten toplam 61 bayt). Bütün matrisler, denklemler, örnekler ve şıklar PowerPoint slaytlarından **görsel** olarak gömülmüş. Ayrıca:

1. `pdftoppm` / poppler bu makinede yok, `Read` aracı PDF'i render edemedi.
2. Çözüm: PDF'in nesne yapısı Node ile ayrıştırıldı — sayfa ağacı yürütülüp her sayfanın `/Resources /XObject` haritası ve içerik akışındaki `Do` operatörleri okundu, gömülü görseller sayfa/okuma sırasıyla dışa aktarıldı (JPEG doğrudan; Indexed 4/8-bit FlateDecode görseller PLTE'li PNG'ye çevrildi).
3. **Tuzak 1:** PDF artımlı güncellenmiş; kök `/Pages` nesnesinin **iki tanımı** vardı (eski: 22 sayfa, yeni: 33 sayfa). Nesne çözümlemesinde dosyada **en son geçen** tanım alınmazsa sayfaların üçte biri kaybolur ve sıralama tamamen kayar.
4. **Tuzak 2:** Bazı görsellerin filtresi `[/FlateDecode /DCTDecode]`; ham akış önce zlib ile açılmadan JPEG olarak okunamıyor.

**Implications:**
- Başka bir dersin PDF'i de "boş" görünürse (pdftotext az çıktı veriyorsa) içerik büyük olasılıkla görsel; yukarıdaki çıkarma yolu tekrar kullanılabilir. Scriptler `scratchpad`'de kaldı, kalıcı değil — gerekirse yeniden yazılır.
- **PDF'in kendisi hatasız değil.** Bölüm 7'de altı ayrı dizgi hatası tespit edildi (Örnek 5'te `x₂ = −2x₁`, Gram-Schmidt'te `b₂ = a₃ − …`, Örnek 12'de `5/9`, Örnek 20'de bağımlı/bağımsız terimlerinin yer değiştirmesi, Değerlendirme Soru 10'un şıklarında doğru özvektörün hiç bulunmaması, "6. Bölüm" başlığının Bölüm 7 sorularına verilmiş olması). Hepsi ilgili derslerde açıkça işaretlendi. **Sonuç: PDF otoritedir ama sağlaması yapılmadan aktarılmamalı** — her örnek `Av = λv`, iz/determinant ve `PP⁻¹ = I` ile bağımsız doğrulandı.
- Hocanın 7.2.2 slaytı sekmeli bir sunum; PDF'e yalnızca "Özellik 1" basılmış. Diğer sekmelerin içeriği **bilinmiyor** — uydurulmadı, Ders 21'de kapsam notu olarak yazıldı. Kullanıcı bu özellikleri başka bir kaynaktan bulursa Ders 21 genişletilmeli.
- Ön bilgi soruları kapandı: **kompleks sayılar gerekmiyor** (PDF açıkça reel örneklerle sınırlı), **polinom kökü için ayrı ders gerekmedi** (kübik çarpanlara ayırma Ders 17 ve 29 içinde yöntem olarak gösterildi).

Bkz. [[0008-ders-notu-kapsam-denetimi]] — "başlık kanıt değil, dosyayı aç oku" kuralı bu oturumda bir kez daha karşılığını buldu: ROADMAP "Bölüm 7 = final kapsamı" diyordu ama içeriğin ne olduğu PDF açılana kadar gerçekten bilinmiyordu.
