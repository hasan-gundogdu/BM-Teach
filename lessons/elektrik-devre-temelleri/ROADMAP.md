# Elektrik Devre Temelleri (BM107) — Ders Yol Haritası

> **2026-08-17 kapsam düzeltmesi:** En yüksek öncelikli kaynak hocanın sınıf grubundaki son duyurularıdır. Önceki revizyonda RL yanlışlıkla kapsam dışı yazılmıştı. Hocanın açık mesajındaki ifade **“RC RL dahil”** şeklindedir. Bu dosya buna göre düzeltilmiştir.

## ⭐ Kesin vize kapsamı — son hoca duyuruları

- Baştan **RC ve RL dahil** işlenen konular sınav kapsamındadır.
- **RLC kapsam dışıdır.** Hoca RLC için AC, empedans, rezonans ve ikinci dereceden analiz gerekeceğini belirterek bu ders kapsamında işlememeyi tercih etmiştir.
- RL sunumundaki **bağımlı kaynaklı örnek sınavda sorulmayacaktır.**
- **Op-Amp dahildir.** Beklenen seviye: temel akım, gerilim ve kazanç; ideal op-amp varsayımları, eviren/evirmeyen temel devreler.
- **Thevenin, Norton ve Maksimum Güç Transferi sorularında bağımlı kaynak olmayacaktır.**
- Sorular ders notlarındaki örneklere benzer tarzda olacaktır; örnekleri bağımsız çözebilecek seviyede olmak hedeflenir.

## Ders zinciri

| Ders | Konu | Durum |
|---|---|---|
| 0001 | Akım, gerilim, güç, enerji, birimler, işaret | ✅ detaylı + çizimli |
| 0002 | Devre elemanları, düğüm/kol/çevre, kaynaklar, kısa-açık devre, kaynak dönüşümü | ✅ detaylı + çizimli |
| 0003 | Ohm, KCL, KVL, seri-paralel, gerilim/akım bölücü | ✅ detaylı + çizimli |
| 0004 | Düğüm Gerilimleri + Süper Düğüm | ✅ detaylı + çizimli |
| 0005 | Çevre Akımları + Süper Çevre | ✅ detaylı + çizimli |
| 0006 | Süperpozisyon; kaynak söndürme sonrası yeniden çizim ve topoloji okuma | ✅ detaylı + çizimli |
| 0007 | Thevenin | ✅ detaylı + çizimli; sınavda bağımlı kaynak yok |
| 0008 | Norton | ✅ detaylı + çizimli; sınavda bağımlı kaynak yok |
| 0009 | Maksimum Güç Transferi | ✅ detaylı + çizimli; sınavda bağımlı kaynak yok |
| 0010 | İdeal Op-Amp — akım, gerilim, kazanç | ✅ detaylı + çizimli |
| 0011 | RC — 0⁻/0⁺/∞, şarj/deşarj, R_TH, zaman sabiti | ✅ detaylı + çizimli |
| 0012 | RL — 0⁻/0⁺/∞, akım sürekliliği, R_TH, zaman sabiti | ✅ eklendi; bağımlı kaynak sınav dışı |
| 0013 | Genel Tekrar — karar haritası ve formül mantığı | ✅ RC+RL dahil güncellendi |
| 0014 | Örnek Sorular — 21 soruluk kapsamlı sınav provası | ✅ RC+RL dahil güncellendi |

## Pedagojik standart

Notlar kısa formül özeti olarak değil, mümkün olduğunca şu sırayla hazırlanır:

1. **Devrede ne görüyorum?** Düğümler, kollar, yük, kaynaklar, anahtar konumu.
2. **Neyi biliyorum / neyi arıyorum?** Akım mı, gerilim mi, eşdeğer mi?
3. **Normal yöntem ne olurdu?** Ohm, seri-paralel, KCL, KVL, düğüm, çevre.
4. **Normal yöntem nerede tıkanıyor?** Gerilim kaynağı düğümler arasında mı, akım kaynağı meshler arasında mı?
5. **Özel yöntem gerekiyorsa neden?** Süper düğüm, süper çevre, süperpozisyon, Thevenin/Norton.
6. **Devre değişti mi?** Kaynak söndürme veya anahtarlama sonrası devre yeniden çizilir.
7. **Denklem nasıl kuruluyor?** Formülün fiziksel/bağlantısal nedeni belirtilir.
8. **Sonucun yönü/işareti ne söylüyor?** Negatif sonuç doğrudan hata kabul edilmez.
9. **Sık hata / kontrol** ile konu kapatılır.

Kullanıcının özellikle zorlandığı “üst akım aşağıdaki kola tekrar eklenmeli mi?” türü sezgisel karışıklıklarda KCL'nin akım bölünmesini zaten kapsadığı ve bir direnç için yalnız o dirençten geçen akımın `V=IR` hesabında kullanılacağı açıkça vurgulanır.

## Görsel standart

Her ana analiz konusunda devre çizimi bulunur. Çizimler inline SVG olarak HTML içinde tutulur; harici görsel dosyasına bağımlı değildir.

Özellikle Süperpozisyon dersinde görsel akış:

`orijinal devre → kaynak söndürülmüş ilk hal → düğümleri yeniden oku → sade yeniden çizim → seri/paralel teşhis → katkı hesabı`

şeklindedir.

## Notasyon standardı

HTML derslerde alt indisler gerçek alt indis görünümüyle yazılır:

- `V<sub>a</sub>`, `V<sub>b</sub>`
- `I<sub>1</sub>`, `I<sub>2</sub>`, `I<sub>x</sub>`
- `V<sub>TH</sub>`, `R<sub>TH</sub>`
- `I<sub>N</sub>`, `R<sub>N</sub>`
- `v<sub>in</sub>`, `v<sub>out</sub>`
- `v<sub>C</sub>`, `i<sub>L</sub>`, `R<sub>L</sub>`

Amaç telefonda HTML render edilirken formüllerin ders kitabına yakın ve kolay okunur görünmesidir.

## RC sınav refleksi

`0⁻ → 0⁺ → ∞ → R_TH → τ → genel üstel ifade`

- `v_C(0⁺)=v_C(0⁻)`
- DC kararlı durumda C açık devredir.
- `τ=R_TH C`
- `v_C(t)=v_C(∞)+[v_C(0⁺)-v_C(∞)]e^(-t/τ)`

## RL sınav refleksi

`0⁻ → 0⁺ → ∞ → R_TH → τ → genel üstel ifade`

- `i_L(0⁺)=i_L(0⁻)`
- DC kararlı durumda ideal L kısa devre/teldir.
- `τ=L/R_TH`
- `i_L(t)=i_L(∞)+[i_L(0⁺)-i_L(∞)]e^(-t/τ)`
- Bağımlı kaynaklı RL örneği sınav dışıdır.

## Kaynak notları

Gerçek ders materyalleri `DersNotlari/ElektrikDevreTemelleri/` altındadır. `4. Hafta-1.pdf` ve `4. Hafta-2.pdf` repo içinde korunmaktadır. GitHub metin bağlayıcısı PDF binary içeriğini doğrudan metin olarak parse edemediği için RC/RL anlatımı, hocanın açık kapsam duyuruları ve standart birinci dereceden DC RC/RL analiz ilkeleriyle hazırlanmıştır. RLC özellikle eklenmemiştir.
