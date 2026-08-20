# Elektrik Devre Temelleri — Final Öncesi Quick Tekrar

> **Amaç:** Testte tanım/formül sorularında ve klasik devre sorularında hızlı karar verebilmek.
>
> Bu not, ders PDF'lerindeki konu sırası ve kullanılan kavramlar temel alınarak hazırlanmıştır. Özellikle sınav öncesi 15–25 dakikalık tekrar için tasarlanmıştır.

---

# 0. Sınav refleksi — önce bunu oku

Bir devre sorusu gördüğünde sırayla şunu düşün:

1. **Ne isteniyor?** Akım mı, gerilim mi, eşdeğer direnç mi, güç mü?
2. **Devrede hangi yapı var?** Seri/paralel, düğüm, çevre, kaynak dönüşümü, Thevenin/Norton, RC/RL, op-amp?
3. **Kaynak söndürmem gerekiyor mu?** Yalnızca ilgili yöntemde gerekiyorsa.
4. **Yönleri kendim seçebilirim.** Sonuç negatif çıkarsa gerçek yön tersidir.
5. **Birim kontrolü yap:**
   - `kΩ × mA = V`
   - `kΩ × µF = ms`
   - `H / Ω = s`

---

# 1. En temel büyüklükler

## Elektrik yükü — q veya Q

Maddenin elektriksel özelliğini ifade eder.

- Birim: **Coulomb (C)**
- Elektron yükü negatiftir.

## Akım — i veya I

Birim zamanda hareket eden elektrik yüküdür.

$$I=\frac{Q}{t}$$

Daha genel ifade:

$$i=\frac{dq}{dt}$$

- Birim: **Amper (A)**
- Konvansiyonel akım yönü pozitif yük hareketi yönüdür.
- Elektron hareketi akım yönünün tersidir.

## Gerilim — v veya V

İki nokta arasındaki elektriksel potansiyel farkıdır.

$$V_{AB}=V_A-V_B$$

- Birim: **Volt (V)**
- Yüksek potansiyel `+`, düşük potansiyel `-` ile gösterilir.

## Güç — p veya P

Birim zamanda harcanan veya sağlanan enerjidir.

$$p=vi$$

- Birim: **Watt (W)**

## Enerji — w veya W

İş yapabilme kapasitesidir.

$$w=\int p\,dt$$

Sabit güçte:

$$w=Pt$$

- Birim: **Joule (J)**
- `1 J = 1 W·s`

**Enerjinin korunumu:** Devrede sağlanan toplam enerji/güç ile harcanan toplam enerji/güç dengededir.

---

# 2. Eleman güç alıyor mu, güç veriyor mu?

Bu konu testte işaret sorusu olarak gelebilir.

## Pasif işaret kuralı — en hızlı yöntem

Akım elemanın **pozitif işaretli ucundan içeri giriyorsa**:

$$p=+vi$$

- `p > 0` → eleman **güç alıyor / tüketiyor**.
- `p < 0` → eleman aslında **güç veriyor**.

Akım elemanın **negatif işaretli ucundan içeri giriyorsa**:

$$p=-vi$$

Pratik ezber:

> **Akım + uçtan girerse ALIR, - uçtan girerse VERİR.**

Örnek:

```text
     i →
   + [ eleman ] -
```

Akım `+` uçtan giriyor → eleman güç **alıyor**.

```text
     i ←
   + [ eleman ] -
```

Akım `-` uçtan giriyor → eleman güç **veriyor**.

## Aktif ve pasif eleman

Ders notundaki sınıflandırma:

- **Pasif eleman:** enerji üretme kapasitesi yoktur. Direnç, kondansatör, indüktör.
- **Aktif eleman:** enerji üretme/sağlama kapasitesine sahiptir. Jeneratör, pil, op-amp vb.

Dikkat: Bir **kaynak her an mutlaka güç veriyor** demek doğru değildir. Akım yönü ve polariteye göre bazı durumlarda güç alabilir. Kararı `p=vi` ve işaret kuralıyla ver.

---

# 3. Ohm kanunu

Direnç için:

$$V=IR$$

Bundan:

$$I=\frac{V}{R}$$

$$R=\frac{V}{I}$$

Dirençte güç:

$$P=VI$$

Ohm kanunu kullanılarak:

$$P=I^2R$$

$$P=\frac{V^2}{R}$$

---

# 4. Seri ve paralel direnç

## Seri

Aynı akımın geçtiği ve ortak düğümden başka kol çıkmayan elemanlar seri kabul edilir.

$$R_{eş}=R_1+R_2+\cdots$$

## Paralel

İki elemanın **iki ucu da aynı iki düğüme** bağlıysa paraleldir.

$$\frac1{R_{eş}}=\frac1{R_1}+\frac1{R_2}+\cdots$$

İki direnç için:

$$R_{eş}=\frac{R_1R_2}{R_1+R_2}$$

**Düğüm yöntemi:** Her direncin iki ucuna düğüm adı ver. Aynı iki düğüm çiftini görenler paraleldir.

---

# 5. Gerilim ve akım bölücü

## Gerilim bölücü — seri direnç

$$V_x=V_s\frac{R_x}{R_{toplam}}$$

## Akım bölücü — iki paralel direnç

`R1` üzerinden geçen akım:

$$I_1=I_T\frac{R_2}{R_1+R_2}$$

Yani akım **ters direnç oranında** bölünür.

---

# 6. Kirchhoff kanunları

## KCL / KAK — Kirchhoff Akımlar Kanunu

Bir düğümde:

$$\sum I=0$$

veya:

$$\text{giren akımlar}=\text{çıkan akımlar}$$

Düğüm analizi bunun uygulamasıdır.

Direnç akımını düğüm gerilimleriyle yazarken:

$$I_{AB}=\frac{V_A-V_B}{R}$$

**Refleks:** Akımı A'dan B'ye seçtiysen payda üstünde önce `VA`, sonra `VB` yaz.

## KVL / KGK — Kirchhoff Gerilim Kanunu

Kapalı bir çevrede:

$$\sum V=0$$

Çevre/mesh analizi bunun uygulamasıdır.

---

# 7. Düğüm gerilimleri yöntemi

1. Bir düğümü referans/toprak seç: `0 V`.
2. Diğer düğümlere `V1, V2, ...` adı ver.
3. Bilinmeyen düğümlerde KCL yaz.
4. Direnç akımlarını `(başlangıç düğümü - diğer düğüm)/R` biçiminde yaz.
5. Denklemleri çöz.

## Süper düğüm

İki bilinmeyen düğüm arasında ideal **gerilim kaynağı** varsa süper düğüm oluşturulur.

Örneğin kaynak `+` tarafı V1, `-` tarafı V2 ve değeri 10 V ise:

$$V_1-V_2=10$$

Bu, süper düğümün **ek denklemidir**.

---

# 8. Çevre / mesh akımları yöntemi

1. Her bağımsız çevreye bir mesh akımı seç. Genellikle saat yönü seçmek kolaydır.
2. Her çevrede KVL yaz.
3. Ortak dirençte ilgili iki mesh akımının farkını kullan.

İki mesh ortak direnç `R` üzerinde ters yönde ise, `i1` açısından:

$$V_R=R(i_1-i_2)$$

## Süper çevre / süper mesh

İki mesh arasında ortak kolda ideal **akım kaynağı** varsa süper mesh kullanılır.

Akım kaynağı iki mesh arasındaysa kaynak yönüne göre ek denklem yazılır:

$$i_1-i_2=I_s$$

veya yönlere göre tersi.

Tek bir mesh üzerinde akım kaynağı varsa mesh akımı doğrudan kaynak akımına eşittir; işaret/yöne dikkat edilir.

---

# 9. Süperpozisyon

İki veya daha fazla **bağımsız kaynaklı doğrusal devrelerde** kullanılır.

Her bağımsız kaynak tek tek aktif bırakılır, diğer bağımsız kaynaklar söndürülür.

## Kaynak söndürme

- **Gerilim kaynağı → kısa devre / düz tel**
- **Akım kaynağı → açık devre**
- **Bağımlı kaynak → söndürülmez**

Her kaynağın oluşturduğu gerilim/akım katkısı sonrasında **cebirsel olarak toplanır**.

---

# 10. Kaynak dönüşümü

## Gerilim kaynağı → akım kaynağı

$$I_s=\frac{V_s}{R}$$

Seri `R`, dönüşüm sonrası akım kaynağına **paralel** olur.

## Akım kaynağı → gerilim kaynağı

$$V_s=I_sR$$

Paralel `R`, dönüşüm sonrası gerilim kaynağına **seri** olur.

Birim kısa yolu:

`mA × kΩ = V`

---

# 11. Thevenin

Bir doğrusal devre A-B uçlarından:

**tek gerilim kaynağı + seri direnç**

şeklinde temsil edilir.

## Adımlar

1. Varsa yük `RL` çıkarılır.
2. A-B açık devre gerilimini bul:

$$V_{Th}=V_{OC}=V_{AB}$$

3. `RTh` için bağımsız kaynakları söndür:
   - gerilim kaynağı → kısa devre
   - akım kaynağı → açık devre
4. A-B'den bakarak eşdeğer direnci bul.
5. Gerekirse yükü yeniden bağla.

**Önemli:** `VTh` bulunurken kaynaklar söndürülmez.

A-B açık devreyse, A'ya giden son dirençten akım geçmiyorsa o dirençte gerilim düşümü sıfırdır. Bu yüzden önceki düğüm gerilimi `VA` ile aynı olabilir.

---

# 12. Norton

Bir doğrusal devre A-B uçlarından:

**tek akım kaynağı + paralel direnç**

şeklinde temsil edilir.

$$R_N=R_{Th}$$

$$I_N=I_{SC}$$

Thevenin ↔ Norton dönüşümü:

$$I_N=\frac{V_{Th}}{R_{Th}}$$

$$V_{Th}=I_NR_N$$

---

# 13. Maksimum güç transferi

Yük direncine maksimum güç aktarılması için:

$$R_L=R_{Th}$$

Thevenin eşdeğeri üzerinden maksimum güç:

$$P_{max}=\frac{V_{Th}^2}{4R_{Th}}$$

Sınav refleksi:

> `RL kaç olmalı?` → önce `RTh`.
>
> `Maksimum güç kaç?` → ayrıca `VTh`.

---

# 14. Kondansatör — C

Kondansatör elektrik alanında enerji depolar.

## Temel bağıntılar

$$q=Cv$$

$$i=C\frac{dv}{dt}$$

Depolanan enerji:

$$w=\frac12Cv^2$$

- Birim: **Farad (F)**
- Kondansatörün **gerilimi aniden değişemez**:

$$V_C(0^-)=V_C(0^+)$$

- DC'de uzun zaman sonra kondansatör **açık devre** gibi davranır.

## Kondansatör eşdeğeri

Paralel:

$$C_{eş}=C_1+C_2+\cdots$$

Seri:

$$\frac1{C_{eş}}=\frac1{C_1}+\frac1{C_2}+\cdots$$

**Dirençlerin ters mantığıdır:** kondansatörde paralel toplama, seri terslerin toplamıdır.

---

# 15. RC birinci dereceden devre

Zaman sabiti:

$$\tau=RC$$

Kısa birim yolu:

`kΩ × µF = ms`

## Şarj olurken

Başlangıçtan son değere doğru toplam değişimin yaklaşık:

- `1τ` → `%63`
- `2τ` → `%86`
- `3τ` → `%95`
- `5τ` → pratikte `%100`

Başlangıç `0 V`, son değer `Vs` ise:

$$v_C(t)=V_s(1-e^{-t/RC})$$

## Deşarj olurken

Kalan değer yaklaşık:

- `1τ` → `%37`
- `2τ` → `%14`
- `3τ` → `%5`
- `5τ` → pratikte `0`

Doğal tepki:

$$v_C(t)=V_0e^{-t/RC}$$

**Ana fikir:** RC'de merkezde kondansatör **gerilimi** vardır.

---

# 16. İndüktör / bobin — L

İndüktör manyetik alanında enerji depolar.

## Temel bağıntılar

$$v=L\frac{di}{dt}$$

Depolanan enerji:

$$w=\frac12Li^2$$

- Birim: **Henry (H)**
- Bobinin **akımı aniden değişemez**:

$$I_L(0^-)=I_L(0^+)$$

- DC'de uzun zaman sonra bobin **kısa devre / düz tel** gibi davranır.

## İndüktör eşdeğeri

Seri:

$$L_{eş}=L_1+L_2+\cdots$$

Paralel:

$$\frac1{L_{eş}}=\frac1{L_1}+\frac1{L_2}+\cdots$$

Dirençlerle aynı bağlantı mantığıdır.

---

# 17. RL birinci dereceden devre

Zaman sabiti:

$$\tau=\frac{L}{R}$$

## Enerjilenme / akım yükselmesi

Son akıma doğru:

- `1τ` → `%63`
- `2τ` → `%86`
- `3τ` → `%95`
- `5τ` → pratikte `%100`

## Akımın azalması

Kalan akım:

- `1τ` → `%37`
- `2τ` → `%14`
- `3τ` → `%5`
- `5τ` → pratikte `0`

**Ana fikir:** RL'de merkezde bobin **akımı** vardır.

---

# 18. RC ve RL — çok hızlı karşılaştırma

| Özellik | RC | RL |
|---|---|---|
| Enerji depolayan eleman | Kondansatör C | Bobin L |
| Ani değişemeyen | `V_C` | `I_L` |
| Zaman sabiti | `τ=RC` | `τ=L/R` |
| DC uzun zaman | C açık devre | L kısa devre |
| 1τ yükselme | %63 | %63 |
| 1τ azalma sonrası kalan | %37 | %37 |

---

# 19. İdeal op-amp

Ders notundaki iki temel kural:

$$I_+=I_-=0$$

Negatif geri besleme varsa:

$$V_+\approx V_-$$

Yani ideal op-amp girişleri akım çekmez; giriş direnci sonsuz kabul edilir.

`V+ = 0 V` ve negatif geri besleme varsa `V- ≈ 0 V` olur. Bu nokta **sanal toprak**tır; fiziksel olarak GND'ye bağlı olmak zorunda değildir.

## Eviren yükselteç

Giriş `-` uca uygulanır.

$$A_v=\frac{V_{out}}{V_{in}}=-\frac{R_f}{R_{in}}$$

$$V_{out}=-\frac{R_f}{R_{in}}V_{in}$$

Eksi işareti: çıkış girişe göre ters işaretlidir.

## Evirmeyen yükselteç

Giriş `+` uca uygulanır.

$$A_v=1+\frac{R_2}{R_1}$$

$$V_{out}=V_{in}\left(1+\frac{R_2}{R_1}\right)$$

Çıkış girişle aynı işaretlidir.

---

# 20. Kaynaklar — tanım kartı

## Bağımsız kaynak

Sağladığı gerilim veya akım diğer devre değişkenlerinden etkilenmez.

## Bağımlı kaynak

Değeri devredeki başka bir gerilim veya akım tarafından kontrol edilir. Genellikle elmas sembolle gösterilir.

Dört tür:

- Gerilim Kontrollü Gerilim Kaynağı
- Akım Kontrollü Gerilim Kaynağı
- Gerilim Kontrollü Akım Kaynağı
- Akım Kontrollü Akım Kaynağı

**Kaynak söndürme yapılan yöntemlerde bağımlı kaynaklar söndürülmez.**

---

# 21. Açık devre ve kısa devre

## Açık devre

$$I=0$$

Akım yolu kesiktir. Uçlar arasında gerilim olabilir.

## Kısa devre

$$V=0$$

İdeal tel gibi kabul edilir. Akım sıfır olmak zorunda değildir.

Bu iki bilgi kaynak söndürmede çok önemlidir:

- Gerilim kaynağı `0 V` → kısa devre
- Akım kaynağı `0 A` → açık devre

---

# 22. Testte sık karıştırılan cümleler

- **Kondansatör gerilimi** aniden değişemez; akımı değişebilir.
- **Bobin akımı** aniden değişemez; gerilimi değişebilir.
- Kondansatör DC kararlı durumda **açık devre**.
- Bobin DC kararlı durumda **kısa devre**.
- `VTh` bulunurken kaynaklar **söndürülmez**.
- `RTh` bulunurken bağımsız kaynaklar **söndürülür**.
- Thevenin direnci **seri**, Norton direnci **paralel** çizilir.
- `RN = RTh`.
- Maksimum güçte `RL = RTh`.
- Süper düğümün sebebi iki bilinmeyen düğüm arasındaki **gerilim kaynağıdır**.
- Süper mesh'in tipik sebebi iki mesh arasındaki **akım kaynağıdır**.
- Op-amp'ta `V- = 0` her zaman değildir; `V+ = 0` ve negatif geri besleme varsa sanal toprak olur.
- Bir sonuç negatif çıkarsa çoğu zaman yöntem yanlış değil, seçtiğin yönün tersini gösterir.

---

# 23. Birimler — son 30 saniye kartı

- Akım → `A`
- Gerilim → `V`
- Direnç → `Ω`
- Güç → `W`
- Enerji → `J`
- Yük → `C`
- Kapasitans → `F`
- Endüktans → `H`

Ön ekler:

- `k = 10^3`
- `m = 10^-3`
- `µ = 10^-6`
- `n = 10^-9`

Hızlı eşleşmeler:

- `A × Ω = V`
- `mA × kΩ = V`
- `V / kΩ = mA`
- `kΩ × µF = ms`
- `H / Ω = s`

---

# 24. Sınavdan hemen önce 2 dakikalık ezber kartı

```text
Ohm:            V = IR
Güç:            P = VI = I²R = V²/R
KCL:            ΣI = 0
KVL:            ΣV = 0

Gerilim kaynağı söndür → kısa devre
Akım kaynağı söndür    → açık devre

Kaynak dönüşümü:
V → I : I = V/R
I → V : V = IR

Thevenin:
VTh = açık devre gerilimi
RTh = kaynakları söndür, A-B'den bak
Gerilim kaynağı + SERİ RTh

Norton:
IN = kısa devre akımı
RN = RTh
Akım kaynağı + PARALEL RN
IN = VTh/RTh

Maksimum güç:
RL = RTh
Pmax = VTh²/(4RTh)

RC:
Vc ani değişmez
τ = RC
uzun zamanda C = açık devre

RL:
IL ani değişmez
τ = L/R
uzun zamanda L = kısa devre

1τ yükselme = %63
1τ azalma sonrası kalan = %37
2τ = %86 / %14
3τ = %95 / %5
5τ ≈ tamam

Ideal op-amp:
I+ = I- = 0
negatif geri besleme varsa V+ ≈ V-
Eviren:   Av = -Rf/Rin
Evirmeyen: Av = 1 + R2/R1
```

---

# 25. Bu final için özellikle unutma

- RLC devreleri çalışma kapsamına dahil edilmemiştir.
- RC ve RL devreleri önemlidir.
- RL'de bağımlı kaynak içeren örnek bulunmasına rağmen sınavda bağımlı kaynaklı RL sorusu sorulmayacağı belirtilmiştir.
- Bu nedenle son tekrar önceliği: **temel analiz → devre teoremleri → maksimum güç → op-amp → RC/RL**.
