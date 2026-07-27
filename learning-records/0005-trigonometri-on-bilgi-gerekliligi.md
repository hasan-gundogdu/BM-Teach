---
name: trigonometri-on-bilgi-gerekliligi
description: Trigonometri, Lineer Cebir'in vektör bileşenleri konusunda beklenenden erken gerekiyor
metadata:
  type: project
---

Khan Academy'nin "Vectors and spaces" ünitesindeki bir pratik soruda (büyüklük+açı biçiminde verilen vektörleri (x,y) bileşenlerine çevirme, açılar 100°/210°) kullanıcı trigonometriye (sin/cos, referans açı) ihtiyaç duyduğunu keşfetti. Daha önce (bkz. sohbet, 2026-07-17) trigonometrinin sadece BM213 Hafta 14'te gerekeceği varsayılmıştı — bu yanlış çıktı, vektör bileşenleri konusunun kendisi (Hafta 1 civarı/KA'nın kendi girişi) trigonometri gerektiriyor.

**Why:** Kullanıcının matematik altyapısı okuldan uzun süre uzak kaldığı için zayıf; trigonometriyi sıfırdan (dik üçgen tanımı değil, birim çember tanımı — çünkü 90°'den büyük açılar da gerekiyor) öğretmek gerekti. `lessons/on-bilgi/0001-temel-trigonometri.html` + `reference/on-bilgi/trigonometri-hizli-basvuru.html` bu amaçla yazıldı.

**How to apply:** İleride benzer "önce sanılandan erken çıkan altyapı ihtiyacı" durumlarında (kompleks sayılar — Hafta 10, polinom kökleri — Hafta 12) aynı desen izlenmeli: kısa, izole bir `lessons/on-bilgi/NNNN-*.html` ön-bilgi dersi + başvuru kartı, ihtiyaç anında (önceden değil) yazılmalı. Bu dersler BM213'e özel değil — BM107/BM303 gibi diğer derslerde de kullanılabilir.

**Durum (2026-07-18):** Tamamlandı — kullanıcı birim çember tanımı, referans açı yöntemi, özel üçgenler (30-60-90, 45-45-90, bonus 15-75) ve vektör bileşen çevirmeyi (Khan Academy pratik sorularıyla) başarıyla uyguladı. Lineer Cebir Ders 03'e (Hafta 4) devam için ek altyapı gerekmiyor.

**Güncelleme (referans düzeni):** Ayrı `bolge-cozum-adimlari.html` kartı, çakışmayı gidermek için `trigonometri-hizli-basvuru.html` içine birleştirildi (çözümlü örnekler + hesap-makinesi notu oraya taşındı, dosya silindi).
