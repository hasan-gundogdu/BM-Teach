# Elektrik Devre Temelleri (BM107) — Ders Yol Haritası

> **2026-08-17 kapsam güncellemesi:** En yüksek öncelikli kaynak, hocanın sınıf grubundaki son duyurularıdır. Repo içindeki eski kapsam notları bu duyurularla çelişirse aşağıdaki liste geçerlidir.

## ⭐ Kesin vize kapsamı — son hoca duyuruları

- Baştan **RC devreleri dahil** işlenen konular sınav kapsamındadır.
- **RL ve RLC kapsam dışıdır.** Hoca bu konuların daha ileri analiz (AC, empedans, rezonans, ikinci derece denklemler) gerektirdiğini özellikle belirtti.
- **Op-Amp dahildir.** Beklenen seviye: temel akım, gerilim ve kazanç bulma; ideal op-amp varsayımları, eviren/evirmeyen temel devreler.
- **Thevenin, Norton ve Maksimum Güç Transferi sorularında bağımlı kaynak olmayacaktır.**
- Sorular ders notlarındaki örneklere benzer tarzda olacaktır.

## Ders zinciri

| Ders | Konu | Durum |
|---|---|---|
| 0001 | Akım, gerilim, güç, enerji, birimler, işaret | ✅ revize |
| 0002 | Devre elemanları, düğüm/kol/çevre, kısa-açık devre, kaynak dönüşümü | ✅ revize |
| 0003 | Ohm, KCL, KVL, seri-paralel, bölücü mantığı | ✅ revize |
| 0004 | Düğüm Gerilimleri + Süper Düğüm | ✅ revize |
| 0005 | Çevre Akımları + Süper Çevre | ✅ revize |
| 0006 | Süperpozisyon | ✅ revize |
| 0007 | Thevenin | ✅ revize; sınavda bağımlı kaynak yok |
| 0008 | Norton | ✅ revize; sınavda bağımlı kaynak yok |
| 0009 | Maksimum Güç Transferi | ✅ revize; sınavda bağımlı kaynak yok |
| 0010 | İdeal Op-Amp — akım, gerilim, kazanç | ✅ revize |
| 0011-rc | RC Devreleri — şarj/deşarj, 0⁻/0⁺/∞, zaman sabiti | ✅ eklendi |
| 0011 | Genel Tekrar — gerçek vize kapsamı karar haritası | ✅ yeniden yazıldı |
| 0012 | Örnek Sorular — gerçek vize kapsamına göre | ✅ yeniden yazıldı |

## Pedagojik standart

Notlar formül listesi gibi değil, şu sıra ile hazırlanır:

1. **Devrede ne görüyorum?**
2. **Hangi fiziksel bilgi doğrudan verilmiş?**
3. **Normal yöntem neden çalışıyor / neden tıkanıyor?**
4. **Hangi analiz aracına geçmeliyim?**
5. **Denklem nasıl kuruluyor?**
6. **Sonucun yönü/işareti fiziksel olarak ne söylüyor?**

Özellikle düğüm/çevre analizinde akımları zihinde ayrı ayrı takip etmek yerine KCL/KVL'nin bütün kolları zaten kapsadığı vurgulanır. Süper düğüm ve süper çevre ezber kuralı olarak değil, normal yöntemin tıkandığı noktadan türetilir.

## Notasyon standardı

HTML derslerde alt indisler düz metin `_` ile değil gerçek alt indis görünümüyle yazılır:

- `V<sub>a</sub>`, `V<sub>b</sub>`
- `I<sub>1</sub>`, `I<sub>2</sub>`, `I<sub>x</sub>`
- `V<sub>TH</sub>`, `R<sub>TH</sub>`
- `I<sub>N</sub>`, `R<sub>N</sub>`
- `V<sub>in</sub>`, `V<sub>out</sub>`
- `v<sub>C</sub>`, `R<sub>L</sub>`

Amaç özellikle telefonda HTML render edilirken formüllerin okunabilir ve ders kitabı görünümüne yakın olmasıdır.

## RC için sınav refleksi

RC sorusunda doğrudan üstel formüle geçilmez:

`önce t=0⁻ → sonra t=0⁺ → sonra t→∞ → R_TH → τ → genel üstel ifade`

Kritik bağıntılar:

- `v_C(0⁺) = v_C(0⁻)`
- DC kararlı durumda kondansatör açık devredir.
- `τ = R_TH C`
- `v_C(t) = v_C(∞) + [v_C(0⁺)-v_C(∞)] e^(-t/τ)`

## Kaynak notları

Gerçek ders materyalleri `DersNotlari/ElektrikDevreTemelleri/` altındadır. 2026-08-17'de eklenen `4. Hafta-1.pdf` ve `4. Hafta-2.pdf` repo içinde korunmaktadır. GitHub metin bağlayıcısı PDF binary içeriğini doğrudan parse edemediği için RC dersinin sınav sınırı hocanın açık duyurusundan; temel RC çözüm yapısı ise standart birinci dereceden DC RC analizinden oluşturulmuştur. RL/RLC içeriği özellikle eklenmemiştir.
