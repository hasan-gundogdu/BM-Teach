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
5. Birim kontrolü:
   - `kΩ × mA = V`
   - `V / kΩ = mA`
   - `kΩ × µF = ms`
   - `H / Ω = s`

---

# 1. Temel büyüklükler

## Yük

$$I=\frac{Q}{t},\qquad i=\frac{dq}{dt}$$

Yük birimi **Coulomb (C)**, akım birimi **Amper (A)**.

## Gerilim

İki nokta arasındaki potansiyel farkıdır:

$$V_{AB}=V_A-V_B$$

Birim: **Volt (V)**.

## Güç

$$P=VI$$

Ayrıca dirençte:

$$P=I^2R=\frac{V^2}{R}$$

Birim: **Watt (W)**.

## Enerji

$$W=Pt$$

Birim: **Joule (J)**.

---

# 2. Eleman güç alıyor mu, veriyor mu?

## Pasif işaret kuralı

Akım elemanın **+ ucundan giriyorsa**:

$$p=+vi$$

- `p > 0` → eleman **güç alıyor / tüketiyor**.
- `p < 0` → eleman **güç veriyor**.

Akım elemanın **- ucundan giriyorsa** güç sağlama yönündedir.

> **Kısa ezber:** Akım `+` uçtan girerse **ALIR**, `-` uçtan girerse **VERİR**.

Pasif elemanlar: direnç, kondansatör, bobin.

Aktif elemanlar: enerji sağlayabilen kaynaklar vb.

---

# 3. Ohm kanunu

$$V=IR$$

$$I=\frac VR$$

$$R=\frac VI$$

---

# 4. Seri ve paralel direnç

## Seri

Aynı akımın geçtiği ve ortak düğümden başka kol çıkmayan elemanlar seridir.

$$R_{eş}=R_1+R_2+\cdots$$

**Seride akım aynıdır.**

## Paralel

İki elemanın iki ucu da aynı iki düğüme bağlıysa paraleldir.

$$\frac1{R_{eş}}=\frac1{R_1}+\frac1{R_2}+\cdots$$

İki direnç için:

$$R_{eş}=\frac{R_1R_2}{R_1+R_2}$$

**Paralelde gerilim aynıdır.**

> **Düğüm yöntemi:** Bir tel üzerinde hiçbir devre elemanı geçmeden yürüyebiliyorsan aynı düğümdesin. Devre elemanı geçince düğüm değişir.

---

# 5. Gerilim bölücü ve akım bölücü — ÇOK ÖNEMLİ

## 5.1 Gerilim bölücü

**Seri dirençlerde** kullanılır.

Toplam kaynak gerilimi seri dirençlerin değerlerine göre bölünür.

İki direnç için:

$$V_{R1}=V_s\frac{R_1}{R_1+R_2}$$

$$V_{R2}=V_s\frac{R_2}{R_1+R_2}$$

Genel biçim:

$$\boxed{V_x=V_s\frac{R_x}{R_{toplam}}}$$

> **Ezber:** Hangi direncin gerilimini arıyorsan **o direnç paya gelir**.

### Neden?

Seride akım aynıdır:

$$I=\frac{V_s}{R_1+R_2}$$

Aranan direnç için `V=IR` yazınca gerilim bölücü formülü çıkar.

### Düğüm gerilimi sorularında

Alt hat/toprak `0 V` ise ve `a` düğümü ile toprak arasında `R2` varsa:

$$V_a=V_{R2}$$

Bu yüzden gerilim bölücüde `R2` paya gelir.

### Paralel dirençlerde ne olur?

Paralel elemanların uçları aynı iki düğüme bağlıdır, bu nedenle:

$$\boxed{V_{R1}=V_{R2}}$$

Eğer ikisi doğrudan gerilim kaynağına paralelse:

$$\boxed{V_{R1}=V_{R2}=V_s}$$

Yani **paralelde gerilim bölünmez; aynıdır.**

---

## 5.2 Akım bölücü

**Paralel dirençlerde** kullanılır.

İki paralel dirençte toplam akım `I_T` ise:

$$\boxed{I_1=I_T\frac{R_2}{R_1+R_2}}$$

$$\boxed{I_2=I_T\frac{R_1}{R_1+R_2}}$$

> **Ezber:** Akım bölücüde aradığın kolun formülünde **diğer direnç paya gelir**.

Sebebi: küçük dirençten daha fazla, büyük dirençten daha az akım geçer.

Bu yüzden akım **dirençle ters orantılı** bölünür.

### Seri devrede ne olur?

Seride dallanma olmadığı için:

$$\boxed{I_1=I_2=I_T}$$

Yani **seride akım bölünmez; aynıdır.**

### En kısa karşılaştırma

| Bağlantı | Aynı kalan | Bölünen |
|---|---|---|
| Seri | **Akım** | Gerilim |
| Paralel | **Gerilim** | Akım |

> **Sınav ezberi:** SERİ → akım aynı, gerilim bölünür. PARALEL → gerilim aynı, akım bölünür.

---

# 6. Kirchhoff kanunları

## KCL / Kirchhoff Akımlar Kanunu

$$\sum I=0$$

veya:

$$\text{giren akımlar}=\text{çıkan akımlar}$$

Direnç akımını düğüm gerilimleriyle:

$$I_{AB}=\frac{V_A-V_B}{R}$$

## KVL / Kirchhoff Gerilim Kanunu

Kapalı çevrede:

$$\sum V=0$$

---

# 7. Düğüm gerilimleri yöntemi

1. Bir düğümü referans/toprak seç: `0 V`.
2. Bilinmeyen düğümlere `V1, V2...` adı ver.
3. KCL yaz.
4. Direnç akımlarını `(başlangıç düğümü-diğer düğüm)/R` biçiminde yaz.
5. Denklemleri çöz.

## Süper düğüm

İki bilinmeyen düğüm arasında ideal gerilim kaynağı varsa süper düğüm oluşturulur.

Örneğin:

$$V_1-V_2=10V$$

Bu ek denklemdir.

---

# 8. Mesh / çevre akımları

Her bağımsız çevreye bir mesh akımı seçilir ve KVL yazılır.

Ortak dirençte iki mesh ters yöndeyse, `i1` açısından:

$$V_R=R(i_1-i_2)$$

## Süper mesh

İki mesh arasındaki ortak kolda ideal akım kaynağı varsa süper mesh kullanılır.

Kaynak yönüne göre ek denklem:

$$i_1-i_2=I_s$$

veya tersi.

Tek bir mesh üzerinde akım kaynağı varsa mesh akımı doğrudan kaynak akımına eşittir; yön/işarete dikkat.

---

# 9. Süperpozisyon

Birden fazla bağımsız kaynaklı doğrusal devrelerde kaynaklar tek tek ele alınır.

Kaynak söndürme:

- Gerilim kaynağı → **kısa devre / düz tel**
- Akım kaynağı → **açık devre**
- Bağımlı kaynak → söndürülmez

Katkılar cebirsel olarak toplanır.

---

# 10. Kaynak dönüşümü

Gerilim kaynağı + seri R → akım kaynağı + paralel R:

$$I_s=\frac{V_s}{R}$$

Akım kaynağı + paralel R → gerilim kaynağı + seri R:

$$V_s=I_sR$$

---

# 11. Thevenin

Bir devre A-B uçlarından **gerilim kaynağı + seri direnç** şeklinde temsil edilir.

1. Yük `R_L` çıkarılır; A-B açık terminal kalır.
2. Kaynaklar aktifken açık devre gerilimini bul:

$$\boxed{V_{Th}=V_{OC}=V_{AB}}$$

3. `RTh` için bağımsız kaynakları söndür.
4. A-B'den devrenin içine bakarak eşdeğer direnci bul.

> `VTh` bulurken kaynaklar **söndürülmez**.

---

# 12. Norton

Bir devre A-B uçlarından **akım kaynağı + paralel direnç** şeklinde temsil edilir.

$$R_N=R_{Th}$$

$$I_N=I_{SC}$$

$$I_N=\frac{V_{Th}}{R_{Th}}$$

$$V_{Th}=I_NR_N$$

---

# 13. Maksimum güç transferi

$$\boxed{R_L=R_{Th}}$$

$$\boxed{P_{max}=\frac{V_{Th}^2}{4R_{Th}}}$$

`RL kaç olmalı?` → `RTh` bul.

`Maksimum güç kaç?` → `VTh` de bul.

---

# 14. Kondansatör

$$q=Cv$$

$$i=C\frac{dv}{dt}$$

$$w=\frac12Cv^2$$

- `V_C` aniden değişemez:

$$V_C(0^-)=V_C(0^+)$$

- DC uzun zamanda kondansatör → **açık devre**.

Kondansatörlerde:

- Paralel → doğrudan toplanır.
- Seri → terslerin toplamı.

---

# 15. RC devresi

$$\tau=RC$$

Yükselme:

- `1τ` → %63
- `2τ` → %86
- `3τ` → %95
- `5τ` → yaklaşık %100

Azalma sonrası kalan:

- `1τ` → %37
- `2τ` → %14
- `3τ` → %5
- `5τ` → yaklaşık 0

Başlangıç 0 ise şarj:

$$v_C(t)=V_s(1-e^{-t/RC})$$

Deşarj:

$$v_C(t)=V_0e^{-t/RC}$$

---

# 16. Bobin / indüktör

$$v=L\frac{di}{dt}$$

$$w=\frac12Li^2$$

Bobin akımı aniden değişemez:

$$I_L(0^-)=I_L(0^+)$$

DC uzun zamanda bobin → **kısa devre / düz tel**.

---

# 17. RL devresi

$$\tau=\frac LR$$

Yükselme yüzdeleri: `%63, %86, %95, ≈%100`.

Azalma sonrası kalan: `%37, %14, %5, ≈0`.

---

# 18. RC ve RL karşılaştırması

| Özellik | RC | RL |
|---|---|---|
| Enerji elemanı | Kondansatör C | Bobin L |
| Ani değişemeyen | `V_C` | `I_L` |
| Zaman sabiti | `τ=RC` | `τ=L/R` |
| DC uzun zaman | C açık | L kısa |

> Kondansatör **gerilimini**, bobin **akımını** hatırlar.

---

# 19. İdeal op-amp

$$I_+=I_-=0$$

Negatif geri besleme varsa:

$$V_+\approx V_-$$

`V+ = 0` ise `V- ≈ 0` olur; buna **sanal toprak** denir.

## Eviren yükselteç

$$A_v=-\frac{R_f}{R_{in}}$$

$$V_{out}=-\frac{R_f}{R_{in}}V_{in}$$

## Evirmeyen yükselteç

$$A_v=1+\frac{R_2}{R_1}$$

$$V_{out}=V_{in}\left(1+\frac{R_2}{R_1}\right)$$

---

# 20. Açık ve kısa devre

## Açık devre

$$I=0$$

Gerilim olabilir.

## Kısa devre

$$V=0$$

Akım sıfır olmak zorunda değildir.

---

# 21. Testte sık karıştırılanlar

- Seri → **akım aynı**, gerilim bölünür.
- Paralel → **gerilim aynı**, akım bölünür.
- Gerilim bölücüde aradığın direnç **paya** gelir.
- Akım bölücüde aradığın kol için **diğer direnç paya** gelir.
- Kondansatör gerilimi aniden değişmez.
- Bobin akımı aniden değişmez.
- Kondansatör DC kararlı durumda açık devredir.
- Bobin DC kararlı durumda kısa devredir.
- `VTh` bulunurken kaynaklar söndürülmez.
- `RTh` bulunurken bağımsız kaynaklar söndürülür.
- Thevenin direnci seri, Norton direnci paraleldir.
- `RN=RTh`.
- Maksimum güçte `RL=RTh`.
- Süper düğüm → iki bilinmeyen düğüm arasında gerilim kaynağı.
- Süper mesh → iki mesh arasında akım kaynağı.
- Negatif sonuç çoğu zaman gerçek yönün seçilen yönün tersi olduğunu gösterir.

---

# 22. Son 2 dakikalık formül kartı

```text
Ohm:       V = IR
Güç:       P = VI = I²R = V²/R
KCL:       ΣI = 0
KVL:       ΣV = 0

SERİ:
I aynı
Req = R1 + R2 + ...
Vx = Vs * Rx / Rtoplam

PARALEL:
V aynı
Req (iki R) = R1*R2/(R1+R2)
I1 = It * R2/(R1+R2)
I2 = It * R1/(R1+R2)

Gerilim kaynağı söndür → kısa devre
Akım kaynağı söndür    → açık devre

Kaynak dönüşümü:
I = V/R
V = IR

Thevenin:
VTh = açık devre gerilimi
RTh = kaynakları söndür, uçlardan bak

Norton:
RN = RTh
IN = VTh/RTh

Maksimum güç:
RL = RTh
Pmax = VTh²/(4RTh)

RC:
Vc ani değişmez
τ = RC
uzun zamanda C = açık

RL:
IL ani değişmez
τ = L/R
uzun zamanda L = kısa

1τ yükselme %63 / azalmada kalan %37
2τ %86 / %14
3τ %95 / %5
5τ ≈ tamam

Ideal op-amp:
I+ = I- = 0
negatif geri besleme: V+ ≈ V-
Eviren:    Av = -Rf/Rin
Evirmeyen: Av = 1 + R2/R1
```

---

# 23. Bu final için özellikle unutma

- RLC çalışma kapsamında değil.
- RC ve RL kapsamında.
- Bağımlı kaynaklı RL sorusu sınavda sorulmayacağı belirtildi.
- Öncelik: **temel analiz → devre teoremleri → maksimum güç → op-amp → RC/RL**.
