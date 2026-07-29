# Matematiksel notasyon ayrı bir ön-bilgi engeli (BM213 Ders 02)

Kullanıcı, Ders 02'deki determinant formülünü (`det(A) = Σσ sign(σ)·a1,σ(1)·a2,σ(2)···an,σ(n)`) anlamadığını, ders notlarının bazı şeyleri bildiği varsayılarak yazıldığını belirtti. Kök neden konu değil **notasyon** idi (Σ toplama sembolü, çift alt indis, fonksiyon notasyonu σ(x), permütasyon kavramı) — Ders 01-02'nin asıl matematiksel içeriğinde (Gauss, Sarrus, geometrik yorum) hiç takılmamıştı.

**Evidence:** Kullanıcı 15+ yıllık yazılımcı; Σ/alt indis/σ aslında for-döngüsü / dizi / fonksiyon kavramlarının matematik gösterimi — programlama diline çevrilince çok hızlı oturdu. `lessons/on-bilgi/0002-matematik-notasyonu.html` bu köprüyü kurmak için yazıldı (pseudocode çevirisi dahil).

**Implications:** İleriki derslerde yeni bir matematiksel notasyon/sembol çıktığında (toplam/çarpım sembolleri, küme gösterimi, ∀/∃) önce içeriği değil **notasyonu** açıkla — bu kullanıcı için tekrar eden bir engel türü. Programlama analojisi (döngü, dizi, fonksiyon, boolean) en hızlı köprü. LR-0005 (trigonometri) ile aynı desen: ihtiyaç anında kısa, izole ön-bilgi dersi.
