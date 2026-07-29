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
- **teach skill:** **repo içinde** `.claude/skills/teach/` (5 dosya: SKILL.md + 4 format dosyası) — kullanıcı `/teach` ile çağırır. Kaynak: `mattpocock/skills` → `skills/productivity/teach/` (bkz. `skills-lock.json`).
  - ⚠️ **Buradan taşımayın.** Skill 17/07/2026'da `1065e5e` commit'inde `.agents/skills/teach/`'ten kazara silindi ve 29/07'de git geçmişinden buraya restore edildi. `.agents/skills/` klasörünü Claude Code **okumaz** (oradaki diğer 14 mattpocock skill'i de bu yüzden görünmüyor); çalışan tek yer repo içindeki `.claude/skills/`. Repo içinde olduğu için git ile iki makine arasında da taşınır.
- **Dil:** Türkçe.
- **Tüm adımlar yazılır:** Worked example'larda "benzer şekilde uygulanır" gibi kısayollar YASAK; her ara adım (satır işlemleri, ara matrisler, geri yerine koyma) tek tek gösterilir. (bkz. NOTES.md)
- Her ders: `lessons/<ders>/NNNN-*.html` + bir `reference/<ders>/*.html` kartı; ders tarayıcıda açılır.
- **Müfredata sadık kal:** Bir dersin resmî EBS haftalık konuları alınmadan "eksiksiz" varsayma. (EBS SSL hatası verir → kullanıcı içeriği yapıştırır.)

## Oturum başı kontrol (30 saniye, atlanmaz)
Sohbet geçmişi makineler arası taşınmadığı için **durum dosyaları drift eder.** Yeni oturumda ders yazmaya başlamadan önce:
1. `find lessons reference -name "*.html"` → diskte gerçekten ne var?
2. Bunu `GIDIS-SIRASI.md` ve ilgili dersin ROADMAP dosyasıyla karşılaştır. Uyuşmuyorsa **önce dosyaları düzelt**, sonra derse geç.
3. "Şu ders yazılmadı / şu konu derste var" gibi bir iddiada bulunmadan önce **dosyayı aç oku** — başlık kanıt değildir (LR0008).
4. Bir dosya kayıp görünüyorsa `git log --all --diff-filter=D -- "*ad*"` ile geçmişe bak; kasıtlı silinmiş/birleştirilmiş olabilir.

## Dosya haritası
- `GIDIS-SIRASI.md` — **tek bakışta çalışma takibi:** her ders → ders dosyası + referans + Khan videoları + durum. Yeni ders yazıldıkça güncellenir.
- `MISSION.md` — neden (pusula)
- `PLAN.md` — ders önceliklendirme, azami süre stratejisi, sayılar, doğrulanacaklar
- `RESOURCES.md` — güvenilir kaynaklar + EBS resmî ders linkleri
- `NOTES.md` — öğrenci profili + öğretim tercihleri
- `lessons/<ders>/`, `reference/<ders>/`, `learning-records/`
- `lessons/lineer-cebir/ROADMAP.md` — 14 haftalık syllabus → ders eşlemesi
- `lessons/on-bilgi/` — derse özel olmayan ön bilgi dersleri (örn. trigonometri); ihtiyaç doğduğunda yazılır, önceden değil (bkz. LR0005)

## Şu anki ilerleme

> ⚠️ **Hangi ders yazıldı / sırada ne var → tek kaynak: `GIDIS-SIRASI.md`.** Burada ders-ders durum listesi **tutulmaz** (üç dosyada birden tutulduğu için 29/07'de drift oldu: Ders 03 yazılmışken CLAUDE.md ve ROADMAP "yazılmadı" diyordu). Yeni oturum önce GIDIS-SIRASI.md'yi okur; ders başlıkları ve syllabus eşlemesi için `lessons/<ders>/ROADMAP.md`. Bu bölüm yalnızca **dosyalardan okunamayan** bilgiyi tutar.

- **Sınav sırası (en yakın önce):** BM107 → 4 Ağustos · BM213 → 5 Ağustos · BM106 → 6 Ağustos. BM106 henüz başlanmadı.
- **Kullanıcının kavradığı, tekrar anlatılmasına gerek olmayanlar:**
  - Gauss eliminasyonunun mantığı ("denklem çıkarma"nın aynısı) ve toplama/çıkarma işareti kuralı.
  - Matriste girişin işareti vs. determinantın yapısal işareti ayrımı (LR0004).
- **Doğrulanmış eşlemeler:** BM213 ve BM107 resmî EBS haftalık syllabus'ları kullanıcı tarafından paylaşıldı; ilgili ROADMAP.md'ler birebir uyumlu (yeniden doğrulamaya gerek yok).
- **BM107 Ders 01 notu:** 29/07'de denetlendi, üç kapsam boşluğu kapatıldı (birim önekleri, akım yönü, pasif işaret konvansiyonu) — bkz. LR0008. Ders yazarken **ön koşul zincirini açık yaz**; işaret konvansiyonu olmadan Hafta 3-6 çözülemez.

## Önemli kararlar
- Yaz okulu (devam şartı yok) → **KESİNLEŞTİ (ders programı alındı, 17/07/2026), 21 AKTS, 5 ders:** BM213 (Lineer Cebir), BM107 (Elektrik Devre Temelleri), BM106 (Olasılık ve İstatistik), BM303 (İşaretler ve Sistemler), **MAT112 (Matematik II, MAT102 yerine — denklik onaylandı)**.
  - **BM204 ve BM301 yaz okulundan çıktı**, azami süre sonu sınavına (Rota 2) geri döndü.
  - **SINAV TRİAJ (22/07/2026):** Yalnızca **3 dersin** sınavına girilecek — BM107 (4 Ağu), BM213 (5 Ağu), BM106 (6 Ağu). **MAT112 + BM303** (27 Tem, aynı gün, hazırlıksız + kullanıcı şehir dışı) **girilmiyor** → azami süre sınavına düşer. Bkz. `belgeler/yaz-okulu-sinav-takvimi.md`.
- Lab dersleri (BM203, BM304, BM302) yaz okulunda açıldı ama U>0 → lab politikası netleşmeden azami süre sınavı rotasında bırakıldı.
- BM213 **determinant-önce** sıralama kullanıyor (Rus geleneği müfredat) — LR0002.
- Staj BM499 iş-temelli muafiyetle geçmiş olabilir (OBS'den teyit edilecek).

## Açık teyitler (öğrenci işleri)
PLAN.md "Doğrulanacaklar" bölümüne bak: seçmeli ders sayımı, lab dersi tek sınavla geçilir mi, yaz okulu lab katılımı, DGS muafiyet, vb.
