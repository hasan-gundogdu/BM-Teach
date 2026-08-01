---
name: edt-gercek-ders-notu-kapsam-sinirlari
description: BM107 gerçek ders notu PDF'leri jenerik syllabus'tan hem sıra hem içerik olarak önemli ölçüde farklı çıktı; kapsam "opampa kadar, opamp hariç" olarak netleşti
metadata:
  type: project
---

01/08/2026'da kullanıcı `DersNotlari/ElektrikDevreTemelleri/` altına gerçek ders notu PDF'lerini (Dr. Öğr. Üyesi Ekrem BAŞER, 5 dosya: 1. Hafta-1, 1. Hafta-Devam.pptx, 2.1, 2.2, 3.1, 3.2) ekledi ve mevcut Ders 01-03'ün bunlarla örtüşüp örtüşmediğinin denetlenmesini istedi.

**Bulgular:**
- Ders 01-03 (temel kavramlar, Ohm/KCL/KVL/seri-paralel) büyük ölçüde örtüşüyordu, ama gerçek notta olup bizde olmayan üç şey vardı: özdirenç formülü (R=ρL/A), direnç renk kodu okuma, **4 tip bağımlı kaynak** (GKGK/AKGK/GKAK/AKAK) ve `b=l+n−1` (dal-çevre-düğüm) formülü.
- **"1. Hafta-Devam.pptx" bizde hiç işlenmemişti:** Düğüm Gerilimleri Yöntemi (DGY) ve Çevre Akımları Yöntemi — ikisi de Kramer kuralı/determinant ile çözülüyor (BM213 köprüsü).
- Jenerik 14 haftalık syllabus'taki Wheatstone Köprü, Y-Δ dönüşümü, Millman, Karşıtlık/Doğrusallık, Kapasitör, Bobin **gerçek ders notlarında hiç yok** — bu dönem işlenmemiş (veya farklı sıraya kaymış).
- Gerçek pacing çok daha hızlı: "1. Hafta" tek başına eski planımızdaki Hafta 1-3'ün tamamını + DGY/Çevre analizini (eski planda Hafta 5-6) kapsıyor.

**Kapsam sınırı:** Kullanıcı net onayladı — "opampa kadar sorumluyuz, opamp dahil değil." Yani sorumluluk tam olarak: 1.Hafta-1 + 1.Hafta-Devam + 2.1 + 2.2 + 3.1 (Maksimum Güç Transferi). 3.2 (İdeal Opamp) ve sonrası **kapsam dışı**.

**Implications:**
1. Bu dersten sonra tüm BM107 dersleri (0001-0009) gerçek ders notu PDF'lerine birebir bağlandı — jenerik syllabus (`bm107-haftalik-konular.md`) süperlendi, artık kullanılmıyor (bkz. [[edt-altyapi-var]]).
2. **Genel ders**: Bir dersin "syllabus"unu EBS'nin genel taslağından değil, hocanın gerçek ders notundan al — ikisi arasında hem sıra hem kapsam farkı büyük olabilir (BM213'te de aynı desen tekrarlandı, bkz. `RESOURCES.md` BM213 notu).
3. Ders 07-09 (Thevenin, Norton, Maksimum Güç Transferi) **aynı sayısal örneği** (Vth=12V, Rth=4Ω) üç ders boyunca taşıyarak süreklilik sağladı — kullanıcı ileride yeni teorem dersleri isterse bu desen (önceki dersin sonucunu bir sonrakinde kullanmak) tekrarlanabilir, pekiştirmeyi güçlendiriyor.
