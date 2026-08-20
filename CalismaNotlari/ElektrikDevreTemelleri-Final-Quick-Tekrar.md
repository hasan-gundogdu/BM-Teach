# Elektrik Devre Temelleri — Final Öncesi Quick Tekrar

> **Amaç:** Testte tanım/formül sorularında ve klasik devre sorularında hızlı karar verebilmek.
>
> Ders notlarındaki konu sırası ve kullanılan kavramlar temel alınarak sınav öncesi hızlı tekrar için hazırlanmıştır.

---

# 0. Sınav refleksi

1. **Ne isteniyor?** Akım, gerilim, eşdeğer direnç, güç?
2. **Hangi yapı var?** Seri/paralel, düğüm, mesh, kaynak dönüşümü, Thevenin/Norton, RC/RL, op-amp?
3. **Kaynak söndürmek gerekiyor mu?** Yalnızca ilgili yöntemde.
4. Yönü kendin seçebilirsin; sonuç negatifse gerçek yön tersidir.
5. Birim kontrolü: `kΩ×mA=V`, `V/kΩ=mA`, `kΩ×µF=ms`, `H/Ω=s`.

---

# 1. Temel büyüklükler

$$I=\frac{Q}{t},\qquad i=\frac{dq}{dt}$$

$$V_{AB}=V_A-V_B$$

$$P=VI=I^2R=\frac{V^2}{R}$$

$$W=Pt$$

Birimler: yük `C`, akım `A`, gerilim `V`, direnç `Ω`, güç `W`, enerji `J`.

---

# 2. Eleman güç alıyor mu, veriyor mu?

Akım elemanın **+ ucundan giriyorsa** pasif işaret kuralına göre:

$$p=+vi$$

- `p>0` → güç **alıyor/tüketiyor**.
- `p<0` → güç **veriyor**.

> **Ezber:** Akım `+` uçtan girerse ALIR, `-` uçtan girerse VERİR.

Dirençte polariteyi seçtiğin akım yönüne göre koyabilirsin. Gerilim kaynağında `+/-` işaretleri verilidir; akıma göre değiştirilmez.

---

# 3. Ohm kanunu

$$V=IR,\qquad I=\frac VR,\qquad R=\frac VI$$

---

# 4. Düğüm, tel, seri ve paralel — çok kritik

> **Kesintisiz tel boyunca devre elemanı geçene kadar düğüm adı değişmez.**

Tel dönse veya devrenin etrafından dolaşsa bile arada direnç/kaynak vb. yoksa **aynı düğümdür**. Aynı kesintisiz tele iki farklı düğüm adı vermek hatadır.

## Seri

Ortak düğümden başka kol çıkmıyorsa aynı akım geçer:

$$R_{eş}=R_1+R_2+\cdots$$

Sadece çizimde yan yana/üst üste görünmeleri seri olduklarını göstermez.

## Paralel

İki elemanın iki ucu da aynı iki düğüme bağlıysa paraleldir:

$$\frac1{R_{eş}}=\frac1{R_1}+\frac1{R_2}+\cdots$$

İki direnç:

$$R_{eş}=\frac{R_1R_2}{R_1+R_2}$$

> **Seri → akım aynı, gerilim bölünür. Paralel → gerilim aynı, akım bölünür.**

---

# 5. Gerilim bölücü ve akım bölücü

## Gerilim bölücü

İlgili dirençler **seri** ise:

$$V_x=V_s\frac{R_x}{R_{toplam}}$$

> **Aradığın gerilim hangi direnç üzerindeyse o direnç paya gelir.**

Toprak `0V` ise ve aranan düğüm ile toprak arasında `R2` varsa, `R2` üzerindeki gerilim doğrudan o düğüm gerilimi olabilir.

## Akım bölücü — iki paralel direnç

$$I_1=I_T\frac{R_2}{R_1+R_2}$$

$$I_2=I_T\frac{R_1}{R_1+R_2}$$

> **Aradığın kol için diğer direnç paya gelir.** Küçük direnç daha fazla akım alır.

---

# 6. Açık devre ve kısa devre

## Açık devre

$$I=0$$

Akım geçmez ama uçlar arasında gerilim olabilir. Açık uçta biten ve başka dönüş yolu olmayan koldaki dirençlerden akım geçmez; bu nedenle o dirençlerde `V_R=IR=0` olur.

## Kısa devre

$$V=0$$

İdeal tel gibidir; akım sıfır olmak zorunda değildir.

---

# 7. KCL / Düğüm gerilimleri yöntemi

$$\sum I=0$$

Bir dirençte A'dan B'ye akım seçersen:

$$I_{AB}=\frac{V_A-V_B}{R}$$

Adımlar:

1. Bir düğümü toprak seç: `0V`.
2. Diğer düğümlere `V1,V2,...` de.
3. Bilinmeyen düğümlerde KCL yaz.
4. Direnç akımlarını düğüm gerilimleriyle yaz.
5. Denklemleri çöz.

**Toprağa bağlı direnç devreden silinmez; sadece bir ucu 0V olur.**

---

# 8. Süper düğüm

İki bilinmeyen düğüm arasında ideal **gerilim kaynağı** varsa süper düğüm oluşturulur.

Örneğin kaynak `+` tarafı `V1`, `-` tarafı `V2`, değeri `10V` ise:

$$V_1-V_2=10$$

Refleks:

- Süper düğümdeki `V1` ve `V2` için ayrı ayrı KCL yazmak yerine ikisini **tek büyük düğüm gibi** sar.
- Süper düğümün dışına çıkan/giren bütün direnç ve akım kaynağı kollarını kullanarak **tek KCL** yaz.
- Sonra ayrıca gerilim kaynağı denklemini yaz: `V1-V2=Vs`.
- Süper düğüme dahil olmayan örneğin `V3` düğümü varsa ona **normal KCL** yazılır.

---

# 9. KVL / Mesh / çevre yöntemi

$$\sum V=0$$

Her bağımsız çevreye genellikle saat yönünde mesh akımı seçilir.

Ortak dirençte iki mesh ters yöndeyse, `i1` açısından:

$$V_R=R(i_1-i_2)$$

## Süper mesh

İki mesh arasındaki ortak kolda ideal **akım kaynağı** varsa süper mesh kullanılır.

- Akım kaynağı kolunu atlayıp iki çevrenin dış sınırından tek KVL yaz.
- Kaynak yönüne göre ek denklem yaz:

$$i_1-i_2=I_s$$

veya yönlere göre tersi.

Süper mesh'e dahil olmayan başka çevre varsa ona **normal KVL** yazılır.

Tek bir mesh üzerinde akım kaynağı varsa mesh akımı doğrudan kaynak akımına eşit olabilir; yön/işarete dikkat.

---

# 10. Süperpozisyon

Birden fazla bağımsız kaynak bulunan **doğrusal devrede** kullanılır.

Her kaynak tek tek aktif bırakılır; diğer bağımsız kaynaklar kapatılır:

- Gerilim kaynağı → `0V` → **kısa devre/tel**
- Akım kaynağı → `0A` → **açık devre**
- Bağımlı kaynak → **söndürülmez**

Her aktif kaynağın oluşturduğu akım/gerilim katkıları en sonda **cebirsel olarak toplanır**. Yönler tersse çıkarma oluşur.

---

# 11. Kaynak dönüşümü

Gerilim kaynağı + seri direnç ↔ akım kaynağı + paralel aynı direnç.

$$I_s=\frac{V_s}{R}$$

$$V_s=I_sR$$

`mA×kΩ=V`.

---

# 12. Thevenin

Bir devre A-B uçlarından **tek gerilim kaynağı + seri RTh** şeklinde temsil edilir.

1. Yük `RL` çıkarılır → A-B açık terminal kalır.
2. Kaynaklar aktifken:

$$V_{Th}=V_{OC}=V_{AB}$$

3. `RTh` için bağımsız kaynakları söndür.
4. A-B'den içeri bakarak eşdeğer direnci bul.

> `VTh` bulunurken kaynaklar söndürülmez.

Açık devre nedeniyle son koldan akım `0` ise, o koldaki dirençte gerilim düşümü de `0` olur.

---

# 13. Norton

Bir devre A-B uçlarından **tek akım kaynağı + paralel RN** şeklinde temsil edilir.

$$R_N=R_{Th}$$

$$I_N=I_{SC}$$

$$I_N=\frac{V_{Th}}{R_{Th}}$$

$$V_{Th}=I_NR_N$$

---

# 14. Maksimum güç transferi

$$R_L=R_{Th}$$

$$P_{max}=\frac{V_{Th}^2}{4R_{Th}}$$

`RL kaç?` → önce `RTh`. `Pmax kaç?` → ayrıca `VTh`.

---

# 15. Kondansatör / RC

$$q=Cv$$

$$i=C\frac{dv}{dt}$$

$$W=\frac12Cv^2$$

Kondansatör gerilimi aniden değişemez:

$$V_C(0^-)=V_C(0^+)$$

DC uzun zamanda kondansatör **açık devre** olur.

$$\tau=RC$$

`kΩ×µF=ms`.

Yükselme: `1τ=%63`, `2τ=%86`, `3τ=%95`, `5τ≈%100`.

Azalmada kalan: `1τ=%37`, `2τ=%14`, `3τ=%5`, `5τ≈0`.

---

# 16. Bobin / RL

$$v=L\frac{di}{dt}$$

$$W=\frac12Li^2$$

Bobin akımı aniden değişemez:

$$I_L(0^-)=I_L(0^+)$$

DC uzun zamanda bobin **kısa devre/tel** olur.

$$\tau=\frac LR$$

Yükselme ve azalma yüzdeleri RC ile aynıdır.

> **Kondansatör gerilimini, bobin akımını hatırlar.**

---

# 17. İdeal op-amp

$$I_+=I_-=0$$

Negatif geri besleme varsa:

$$V_+\approx V_-$$

`V+=0V` ise negatif geri beslemede `V-≈0V`; buna **sanal toprak** denir. Fiziksel GND değildir.

## Eviren

$$A_v=-\frac{R_f}{R_{in}}$$

$$V_{out}=-\frac{R_f}{R_{in}}V_{in}$$

Giriş `-` uca; çıkış işareti ters.

## Evirmeyen

$$A_v=1+\frac{R_2}{R_1}$$

$$V_{out}=V_{in}\left(1+\frac{R_2}{R_1}\right)$$

Giriş `+` uca; çıkış aynı işaretli.

---

# 18. Kaynaklar — tanım kartı

- **Bağımsız kaynak:** değeri başka devre değişkenine bağlı değildir.
- **Bağımlı kaynak:** değeri başka bir akım/gerilim tarafından kontrol edilir; genellikle elmas sembolüyle gösterilir.

Bağımlı kaynaklar kaynak söndürme yapılan yöntemlerde söndürülmez.

---

# 19. Testte sık karıştırılanlar

- Kesintisiz tel boyunca eleman geçmeden düğüm adı değişmez.
- Seri → akım aynı.
- Paralel → gerilim aynı.
- Gerilim bölücü seri yapıda; aradığın direnç paya gelir.
- Akım bölücü paralel kollarda; iki dirençli formülde diğer direnç paya gelir.
- Toprağa bağlı direnç silinmez.
- Açık devre: `I=0`, `V` olabilir.
- Kısa devre: `V=0`, `I` olabilir.
- Gerilim kaynağı söndür → kısa devre.
- Akım kaynağı söndür → açık devre.
- `VTh` bulunurken kaynaklar söndürülmez.
- `RTh` bulunurken bağımsız kaynaklar söndürülür.
- `RN=RTh`.
- Maksimum güçte `RL=RTh`.
- Süper düğüm → bilinmeyen düğümler arasında gerilim kaynağı.
- Süper düğümde içerideki düğümlere ayrı KCL değil: **tek dış KCL + kaynak denklemi**.
- Süper mesh → ortak kolda akım kaynağı.
- Süper mesh dışındaki çevreler normal KVL ile çözülür.
- Kondansatör gerilimi ani değişmez; DC'de açık devre.
- Bobin akımı ani değişmez; DC'de kısa devre.
- Op-amp'ta `V-=0` her zaman değildir; `V+=0` ve negatif geri besleme varsa sanal toprak olur.

---

# 20. Son 2 dakika kartı

```text
Ohm:       V = IR
Güç:       P = VI = I²R = V²/R
KCL:       ΣI = 0
KVL:       ΣV = 0

SERİ:      akım aynı, gerilim bölünür
PARALEL:   gerilim aynı, akım bölünür

Gerilim bölücü:
Vx = Vs·Rx/Rtoplam
(aradığın direnç paya)

Akım bölücü:
I1 = It·R2/(R1+R2)
(aradığın kol için diğer direnç paya)

Gerilim kaynağı söndür → kısa devre
Akım kaynağı söndür    → açık devre

Thevenin:
VTh = açık devre gerilimi
RTh = kaynakları söndür, uçlardan bak

Norton:
RN = RTh
IN = VTh/RTh

Maksimum güç:
RL = RTh
Pmax = VTh²/(4RTh)

RC: Vc ani değişmez, τ=RC, uzun zamanda C=açık
RL: IL ani değişmez, τ=L/R, uzun zamanda L=kısa

1τ yükselme %63 / azalmada kalan %37
2τ %86 / %14
3τ %95 / %5
5τ ≈ tamam

Op-amp:
I+ = I- = 0
negatif geri besleme → V+ ≈ V-
Eviren:    Av=-Rf/Rin
Evirmeyen: Av=1+R2/R1
```

---

# 21. Bu final için özellikle unutma

- RLC çalışma kapsamına dahil değil.
- RC ve RL kapsamda.
- RL'de bağımlı kaynaklı örnek bulunmasına rağmen sınavda bağımlı kaynaklı RL sorusu sorulmayacağı belirtilmişti.
- Öncelik: **temel analiz → devre teoremleri → maksimum güç → op-amp → RC/RL**.
