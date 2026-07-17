# BM-Teach — Bilgisayar Mühendisliği Mezuniyet Çalışma Workspace'i

> Bu dosya workspace'in hafızasıdır. Sohbet geçmişi makineler arası taşınmaz (iş/ev farklı Claude). Yeni bir oturum bu dosyayı + aşağıdaki belgeleri okuyup **kaldığı yerden** devam etmeli.

## Bu workspace nedir
Hasan'ın Düzce Üniversitesi Bilgisayar Mühendisliği'nden mezun olabilmesi için kalan dersleri çalıştığımız, `teach` skill tabanlı öğrenme workspace'i. Hem ders planlama/strateji hem de birebir ders anlatımı burada yürür.

## Öğrenci
- Hasan Gündoğdu, no 211002086, Düzce BM (İ.Ö.), 2021 DGS girişli. GANO 1,94.
- 15+ yıl profesyonel yazılım mühendisi. **Güçlü:** yazılım/CS. **Zayıf:** matematik, fizik, devre/elektronik (okuldan uzun süre uzak kaldı).

## Durum & hedef (KRİTİK)
- Azami süre bu yıl doluyor. Azami süre sonu sınavlarından (2 sınav) sonra **başarısız ders ≤5** olmazsa kayıt silinir (6+ = silinir, 2–5 = 3 dönem ek süre, ≤1 = sınırsız sınav hakkı).
- **28 geçilmemiş ders** var. Hayatta kalmak için **en az 23'ünü** geçmek gerek. Detaylı sayılar/strateji: **PLAN.md**.

## Nasıl çalışıyoruz (kurallar)
- **teach skill:** `.agents/skills/teach/SKILL.md` — kullanıcı `/teach` ile çağırır; çağıramazsa SKILL.md'yi oku ve izle.
- **Dil:** Türkçe.
- **Tüm adımlar yazılır:** Worked example'larda "benzer şekilde uygulanır" gibi kısayollar YASAK; her ara adım (satır işlemleri, ara matrisler, geri yerine koyma) tek tek gösterilir. (bkz. NOTES.md)
- Her ders: `lessons/<ders>/NNNN-*.html` + bir `reference/<ders>/*.html` kartı; ders tarayıcıda açılır.
- **Müfredata sadık kal:** Bir dersin resmî EBS haftalık konuları alınmadan "eksiksiz" varsayma. (EBS SSL hatası verir → kullanıcı içeriği yapıştırır.)

## Dosya haritası
- `MISSION.md` — neden (pusula)
- `PLAN.md` — ders önceliklendirme, azami süre stratejisi, sayılar, doğrulanacaklar
- `RESOURCES.md` — güvenilir kaynaklar + EBS resmî ders linkleri
- `NOTES.md` — öğrenci profili + öğretim tercihleri
- `lessons/<ders>/`, `reference/<ders>/`, `learning-records/`
- `lessons/lineer-cebir/ROADMAP.md` — 14 haftalık syllabus → ders eşlemesi

## Şu anki ilerleme
- **Aktif ders:** Lineer Cebir (BM213).
  - Ders 01 (Hafta 1-2: sistemler/Gauss/2×2-3×3 determinant) yazıldı + açıldı.
  - Ders 06 (matris işlemleri, Hafta 7) hazır (başta yanlışlıkla Ders 01 yapılmıştı, syllabus görülünce taşındı).
  - Kullanıcı Gauss eliminasyonunun mantığını ("denklem çıkarma"nın aynısı) kavradı.
- **Sıradaki:** Ders 02 — geometrik yorum + n-boyutlu determinant (kullanıcı onayıyla).

## Önemli kararlar
- Yaz okulu (max 24 AKTS, devam şartı yok) → **KESİNLEŞTİ (28/06/2026), 24 AKTS:** BM213, BM107, BM106, BM303, BM204, BM301.
- Lab dersleri (BM203, BM304, BM302) yaz okulunda açıldı ama U>0 → lab politikası netleşmeden azami süre sınavı rotasında bırakıldı.
- BM213 **determinant-önce** sıralama kullanıyor (Rus geleneği müfredat) — LR0002.
- Staj BM499 iş-temelli muafiyetle geçmiş olabilir (OBS'den teyit edilecek).

## Açık teyitler (öğrenci işleri)
PLAN.md "Doğrulanacaklar" bölümüne bak: seçmeli ders sayımı, lab dersi tek sınavla geçilir mi, yaz okulu lab katılımı, DGS muafiyet, vb.
