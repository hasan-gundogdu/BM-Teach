---
name: matematik-notasyonu-on-bilgi
description: Kullanıcı Ders 02'deki permütasyon formülünün notasyonunda (Σ, alt indis, σ) takıldı — genel matematik sembol okuryazarlığı eksikti
metadata:
  type: project
---

Kullanıcı, Ders 02'deki determinant formülünü (`det(A) = Σσ sign(σ)·a1,σ(1)·a2,σ(2)···an,σ(n)`) anlamadığını, ders notlarının bazı şeyleri bildiği varsayılarak yazıldığını belirtti. Kök neden konu değil, **notasyon** (Σ toplama sembolü, çift alt indis, fonksiyon notasyonu σ(x), permütasyon kavramı) idi — Ders 01-02'nin asıl matematiksel içeriğinde (Gauss, Sarrus, geometrik yorum) hiç takılmamıştı.

**Why:** Kullanıcı 15+ yıllık yazılımcı; Σ/alt indis/σ aslında for-döngüsü/dizi/fonksiyon kavramlarının matematik gösterimi — programlama diline çevrilince çok hızlı oturdu. `lessons/on-bilgi/0002-matematik-notasyonu.html` bu köprüyü kurmak için yazıldı (pseudocode çevirisi dahil).

**How to apply:** İleriki derslerde yeni bir matematiksel notasyon/sembol karşımıza çıktığında (ör. toplam/çarpım sembolleri, küme gösterimi, ∀/∃ mantık sembolleri) önce içeriği değil **notasyonu** açıklamayı düşün — bu kullanıcı için tekrar eden bir engel türü olabilir. Programlama analojisi (döngü, dizi, fonksiyon, boolean) en hızlı köprü. [[trigonometri-on-bilgi-gerekliligi]] ile aynı desen: ihtiyaç anında kısa, izole ön-bilgi dersi.
