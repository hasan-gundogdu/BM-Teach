# Lineer Cebir — Final Öncesi Quick Tekrar

> **Amaç:** Sınavdan hemen önce hızlıca okuyup yöntemleri tekrar hatırlamak.
>
> Bu sürüm özellikle GitHub mobil ve Working Copy görüntüleyicilerinde bozulmaması için çok satırlı matrisleri **kod bloğu** biçiminde gösterir. Matematiksel içerik aynıdır; sadece görüntüleme daha sağlamdır.

Ana matrisimiz:

```text
A = [ 4  1 ]
    [ 2  3 ]
```

Denklem sistemi gerektiğinde:

```text
B = [ 6 ]
    [ 8 ]
```

Dolayısıyla `AX = B` sistemi:

```text
4x + y  = 6
2x + 3y = 8
```

---

# 0. Çalışma sırası = önem sırası

Sınava 1 saat kala bu sırayla git:

1. **Determinant → kofaktör → ters matris → Cramer**
2. **Çözüm durumları → rank → lineer bağımsızlık → baz**
3. **Özdeğer → özvektör → diyagonalizasyon**
4. **Ortogonal → ortonormal → Gram–Schmidt**
5. Son 5–10 dakika: **Doğru/Yanlış kartı + sık hatalar**

Bu sıra aynı zamanda konuların birbirini takip ettiği sıradır; zıplama yapmadan oku.

---

# 1. En kısa hatırlatma kartı

## 2×2 determinant

`A = [[a,b],[c,d]]` için:

$$\det(A)=ad-bc$$

## Kofaktör işaretleri

```text
+  -  +
-  +  -
+  -  +
```

## Kofaktör açılımıyla determinant

Bir satır veya sütun seç:

$$\det(A)=a_{i1}C_{i1}+a_{i2}C_{i2}+\cdots+a_{in}C_{in}$$

**Pratik:** En çok sıfır bulunan satır/sütundan aç.

## Ters matris — Gauss–Jordan

$$[A\mid I]\longrightarrow[I\mid A^{-1}]$$

## 2×2 ters kısa yolu

$$A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$

> Mobil görüntüleyicide bu formül bozulursa şu ezberi kullan: **köşegeni yer değiştir, diğer ikisinin işaretini değiştir, determinanta böl.**

## Adjoint ile ters

$$A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)$$

$$\operatorname{adj}(A)=C^T$$

Burada `C` kofaktör matrisidir.

Şart:

$$\det(A)\neq0$$

## Cramer

$$x_i=\frac{\det(A_i)}{\det(A)}$$

`A_i`: A matrisinin **i. sütununu B ile değiştir**.

## Özdeğer

$$\det(\lambda I-A)=0$$

## Özvektör

Her bulunan `λ` için:

$$(\lambda I-A)X=0$$

ve `X ≠ 0`.

## 2×2 özdeğer kısa yolu

$$\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0$$

## Diyagonalizasyon

$$D=P^{-1}AP$$

- `P`: özvektörler sütunlarda.
- `D`: karşılık gelen özdeğerler aynı sırayla köşegende.

## Ortogonal

$$u\cdot v=0$$

## Ortonormal

Ortogonal + her vektörün uzunluğu 1.

$$\widehat v=\frac{v}{\|v\|}$$

## Gram–Schmidt — iki vektör

$$b_1=a_1$$

$$b_2=a_2-\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1$$

Sonra normalize et.

---

# 2. Küçük araçlar

## 2.1 Matris çarpımı

Her hücre:

> soldaki matristen **satır** × sağdaki matristen **sütun**.

Örnek:

```text
[ 4  1 ] [ x ]   [ 4x + y  ]
[ 2  3 ] [ y ] = [ 2x + 3y ]
```

## 2.2 Nokta çarpımı

`u=(a,b)` ve `v=(c,d)` ise:

$$u\cdot v=ac+bd$$

Sonuç `0` ise vektörler **ortogonal**.

## 2.3 Vektör uzunluğu

`v=(a,b)` ise:

$$\|v\|=\sqrt{a^2+b^2}$$

---

# 3. Determinant ve terslenebilirlik

Ana matris:

```text
A = [ 4  1 ]
    [ 2  3 ]
```

$$\det(A)=4\cdot3-1\cdot2=10$$

Yani:

$$\det(A)=10\neq0$$

Bunun sonuçları:

- `A` terslenebilir.
- `A⁻¹` vardır.
- `AX=B` tek çözümlüdür.
- `AX=0` homojen sisteminde yalnızca trivial çözüm vardır.
- Kare matriste sütunlar ve satırlar lineer bağımsızdır.
- Rank tamdır: `rank(A)=n`.

---

# 4. Minor ve kofaktör

Bir `a_ij` elemanının **minörü** `M_ij`:

> o elemanın satırını ve sütununu sil, kalan küçük matrisin determinantını al.

Kofaktör:

$$C_{ij}=(-1)^{i+j}M_{ij}$$

İşaret düzeni:

```text
+  -  +
-  +  -
+  -  +
```

**Minor ≠ kofaktör.** Kofaktörde işaret de vardır.

---

# 5. Kofaktör açılımıyla determinant

Örnek:

```text
M = [ 1  2  0 ]
    [ 3  4  5 ]
    [ 0  6  7 ]
```

İlk satırdan açalım:

$$\det(M)=1C_{11}+2C_{12}+0C_{13}$$

`C11` için 1. satır ve 1. sütunu sil:

```text
[ 4  5 ]
[ 6  7 ]
```

$$M_{11}=4\cdot7-5\cdot6=-2$$

Konum `(1,1)` işareti `+`, yani `C11=-2`.

`C12` için 1. satır ve 2. sütunu sil:

```text
[ 3  5 ]
[ 0  7 ]
```

$$M_{12}=3\cdot7-5\cdot0=21$$

Konum `(1,2)` işareti `-`, yani `C12=-21`.

Sonuç:

$$\det(M)=1(-2)+2(-21)+0=-44$$

**Sınav refleksi:** En çok sıfır bulunan satır/sütunu seç.

---

# 6. Homojen sistem ve trivial çözüm

Homojen sistem:

$$AX=0$$

Her homojen sistemde `X=0` çözümü vardır. Buna **trivial çözüm** denir.

- `det(A) ≠ 0` → yalnızca trivial çözüm.
- `det(A) = 0` → trivial olmayan çözümler **olabilir**.

Homojen sistem **asla çözümsüz değildir**, çünkü en azından `X=0` vardır.

Bu fikir özdeğer konusunun temelidir.

---

# 7. Ters matris — Gauss–Jordan

Genel yöntem:

$$[A\mid I]\rightarrow[I\mid A^{-1}]$$

Başlangıç:

```text
[ 4  1 | 1  0 ]
[ 2  3 | 0  1 ]
```

Satır işlemleri sonunda:

```text
[ 1  0 |  3/10  -1/10 ]
[ 0  1 | -1/5    2/5  ]
```

Dolayısıyla:

```text
A⁻¹ = [  3/10  -1/10 ]
      [ -1/5    2/5  ]
```

Aynı şey:

```text
A⁻¹ = (1/10) [  3  -1 ]
              [ -2   4 ]
```

Kontrol: `A·A⁻¹ = I`.

---

# 8. Ters matris — 2×2 pratik yol

Genel matris:

```text
A = [ a  b ]
    [ c  d ]
```

Önce:

$$\det(A)=ad-bc$$

Sonra:

```text
A⁻¹ = 1/(ad-bc) · [  d  -b ]
                    [ -c   a ]
```

Ezber:

1. Ana köşegendekileri yer değiştir.
2. Diğer ikisinin işaretini değiştir.
3. Determinanta böl.

Bizim matriste:

```text
A⁻¹ = (1/10) [  3  -1 ]
              [ -2   4 ]
```

---

# 9. Adjoint / kofaktör yöntemiyle ters

Ana formül:

$$A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)$$

$$\operatorname{adj}(A)=C^T$$

Ana matris:

```text
A = [ 4  1 ]
    [ 2  3 ]
```

`det(A)=10`.

Kofaktörler:

- `C11 = +3 = 3`
- `C12 = -2`
- `C21 = -1`
- `C22 = +4 = 4`

Kofaktör matrisi:

```text
C = [  3  -2 ]
    [ -1   4 ]
```

Transpoz:

```text
adj(A) = Cᵀ = [  3  -1 ]
               [ -2   4 ]
```

Sonuç:

```text
A⁻¹ = (1/10) [  3  -1 ]
              [ -2   4 ]
```

**Kritik bağlantı:** Kofaktör hem determinant açılımında hem de adjoint ile ters bulmada kullanılır.

---

# 10. Ters matrisle denklem sistemi çözmek

`AX=B` ise:

$$X=A^{-1}B$$

Bizde:

```text
X = (1/10) [  3  -1 ] [ 6 ]
           [ -2   4 ] [ 8 ]
```

Sonuç:

```text
X = [ 1 ]
    [ 2 ]
```

Yani `x=1`, `y=2`.

---

# 11. Cramer yöntemi

Sistem:

```text
4x + y  = 6
2x + 3y = 8
```

Ana matris:

```text
A = [ 4  1 ]
    [ 2  3 ]
```

`det(A)=10`.

## x için

1. sütunu `B` ile değiştir:

```text
Ax = [ 6  1 ]
     [ 8  3 ]
```

`det(Ax)=18-8=10`.

$$x=\frac{10}{10}=1$$

## y için

2. sütunu `B` ile değiştir:

```text
Ay = [ 4  6 ]
     [ 2  8 ]
```

`det(Ay)=32-12=20`.

$$y=\frac{20}{10}=2$$

**Refleks:** Aradığın bilinmeyenin **sütununu** `B` ile değiştir.

---

# 12. Çözüm durumları — testte çok sorulur

Bir sistem `AX=B` için üç ihtimal vardır:

## Tek çözüm

Kare `n×n` sistemde:

- `det(A) ≠ 0`
- `rank(A)=rank([A|B])=n`
- Ters vardır.
- Tek çözüm vardır.

## Sonsuz çözüm

- `rank(A)=rank([A|B])<n`
- Serbest değişken vardır.

## Çözüm yok

- `rank(A) ≠ rank([A|B])`
- Satır indirgemede şu tip satır çıkar:

```text
0  0  0 | k     (k ≠ 0)
```

Bu, `0=k` gibi imkânsız bir denklem demektir.

### Çok önemli

`det(A)=0` demek **kesin çözümsüz** demek değildir.

Kare sistemde `det(A)=0` ise **tek çözüm yoktur**; sistem uygun `B` için sonsuz çözümlü, uygun değilse çözümsüz olabilir.

---

# 13. Rank — hızlı mantık

**Rank**, satır indirgemeden sonra pivot sayısıdır; aynı zamanda lineer bağımsız satır/sütun sayısını ifade eder.

Örnek:

```text
RREF = [ 1  0  * ]
       [ 0  1  * ]
       [ 0  0  0 ]
```

Burada iki pivot var → `rank=2`.

Kare `n×n` matris için:

- `rank(A)=n` ↔ `det(A)≠0` ↔ ters var ↔ sütunlar bağımsız.
- `rank(A)<n` ↔ `det(A)=0` ↔ ters yok ↔ sütunlar bağımlı.

---

# 14. Lineer kombinasyon, span, lineer bağımsızlık

## Lineer kombinasyon

`v1, v2, ...` vektörlerinden:

$$c_1v_1+c_2v_2+\cdots+c_kv_k$$

şeklinde oluşturulan her vektör bir **lineer kombinasyondur**.

## Span

Bu vektörlerin tüm lineer kombinasyonlarının kümesi:

$$\operatorname{span}\{v_1,v_2,\ldots,v_k\}$$

## Lineer bağımsızlık

Şu denklem:

$$c_1v_1+c_2v_2+\cdots+c_kv_k=0$$

yalnızca

$$c_1=c_2=\cdots=c_k=0$$

çözümünü veriyorsa vektörler **lineer bağımsızdır**.

Sıfır olmayan başka katsayılarla da `0` üretilebiliyorsa **lineer bağımlıdır**.

### 2 vektör için hızlı sezgi

Biri diğerinin katıysa bağımlıdır.

Örnek:

`(1,2)` ve `(2,4)` → bağımlı.

`(1,0)` ve `(0,1)` → bağımsız.

### Kare matris bağlantısı

Kare matriste sütun vektörleri için:

- `det(A)≠0` → bağımsız.
- `det(A)=0` → bağımlı.

---

# 15. Baz ve boyut

Bir kümenin **baz** olması için iki şart:

1. Uzayı germeli (**span etmeli**).
2. Vektörler lineer bağımsız olmalı.

Örnek, `R²` için standart baz:

```text
e1 = (1,0)
e2 = (0,1)
```

`R²` boyutu 2, `R³` boyutu 3.

Bir bazdaki vektör sayısı = uzayın **boyutu**.

---

# 16. Özdeğer ve özvektör — temel fikir

$$AX=\lambda X$$

- `X`: özvektör.
- `λ`: özdeğer.

Özvektör `0` vektörü olamaz.

Ama `λ=0` olabilir.

---

# 17. Özdeğerde neden determinant 0?

$$AX=\lambda X$$

$$AX=\lambda IX$$

$$(\lambda I-A)X=0$$

Burada `X ≠ 0` istiyoruz.

Homojen sistemde trivial olmayan çözüm için katsayı matrisi tekil olmalı:

$$\det(\lambda I-A)=0$$

---

# 18. Karakteristik determinant / polinom / eşitlik

- **Karakteristik determinant:** `det(λI-A)`
- **Karakteristik polinom:** determinant açılınca çıkan polinom.
- **Karakteristik eşitlik:** o polinomu `0`'a eşitlemek.

Kökler özdeğerlerdir.

---

# 19. Ana matrisin özdeğerleri

```text
A = [ 4  1 ]
    [ 2  3 ]
```

```text
λI - A = [ λ-4   -1  ]
         [ -2    λ-3 ]
```

Determinantı sıfırla:

$$(\lambda-4)(\lambda-3)-2=0$$

$$\lambda^2-7\lambda+10=0$$

$$(\lambda-2)(\lambda-5)=0$$

Özdeğerler:

$$\lambda_1=2,\qquad \lambda_2=5$$

---

# 20. 2×2 özdeğer kısa yolu

$$\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0$$

Bizde:

- `tr(A)=4+3=7`
- `det(A)=10`

Dolayısıyla:

$$\lambda^2-7\lambda+10=0$$

Kontrol:

- `λ1+λ2 = tr(A)`
- `λ1·λ2 = det(A)`

---

# 21. Özvektörleri bulma

Her özdeğer için:

$$(\lambda I-A)X=0$$

## λ = 2

```text
2I - A = [ -2  -1 ]
         [ -2  -1 ]
```

Denklem:

`-2x1 - x2 = 0` → `x2=-2x1`.

`x1=1` seçersek:

```text
v1 = [  1 ]
     [ -2 ]
```

## λ = 5

```text
5I - A = [  1  -1 ]
         [ -2   2 ]
```

`x1-x2=0` → `x1=x2`.

`x1=1` seçersek:

```text
v2 = [ 1 ]
     [ 1 ]
```

Özvektörün sıfır olmayan her katı da özvektördür.

---

# 22. Üçgen matris kısa yolu

Üst üçgen, alt üçgen veya köşegen matriste **özdeğerler ana köşegen elemanlarıdır**.

Örnek:

```text
[ 2  7  4 ]
[ 0  3  5 ]
[ 0  0  9 ]
```

Özdeğerler: `2, 3, 9`.

Ayrıca üçgen matrisin determinantı ana köşegen çarpımıdır.

---

# 23. Diyagonalizasyon

Özdeğerler:

`λ1=2`, `λ2=5`.

Özvektörler:

```text
v1 = [  1 ]      v2 = [ 1 ]
     [ -2 ]           [ 1 ]
```

`P` özvektörleri **sütun** yapar:

```text
P = [  1  1 ]
    [ -2  1 ]
```

Aynı sırada:

```text
D = [ 2  0 ]
    [ 0  5 ]
```

Ana formül:

$$D=P^{-1}AP$$

`P` sütunlarının sırası değişirse `D` köşegenindeki özdeğerlerin sırası da değişir.

### Diyagonalleştirilebilirlik için kısa test bilgisi

`n×n` bir matrisin diyagonalleştirilebilmesi için `n` tane lineer bağımsız özvektör gerekir.

`n` tane **farklı** özdeğer varsa bu şart otomatik sağlanır.

Tekrarlı özdeğer varsa bağımsız özvektör sayısına ayrıca bakmak gerekir.

---

# 24. Ortogonal ve ortonormal

## Ortogonal

$$u\cdot v=0$$

## Ortonormal

Hem ortogonal olacak hem de her vektörün normu `1` olacak.

Kısa hafıza:

> **Ortonormal = Ortogonal + Normalize**

Normalize:

$$\widehat v=\frac{v}{\|v\|}$$

---

# 25. Gram–Schmidt

Başlangıç:

```text
a1 = [  1 ]      a2 = [ 1 ]
     [ -2 ]           [ 1 ]
```

Bunlar ortogonal değil:

`a1·a2 = 1-2 = -1`.

İlk vektör:

$$b_1=a_1$$

İkinci:

$$b_2=a_2-\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1$$

Pay:

`a2·b1 = -1`.

Payda:

`b1·b1 = 5`.

Oran:

`-1/5`.

Bu oranı `b1` ile çarp ve `a2`'den çıkar:

```text
b2 = [ 6/5 ]
     [ 3/5 ]
```

Aynı yönün daha sade katını seçebiliriz:

```text
b2 = [ 2 ]
     [ 1 ]
```

Kontrol:

`(1,-2)·(2,1)=2-2=0`.

Artık ortogonaller.

---

# 26. Gram–Schmidt sonrası ortonormal yapma

```text
b1 = (1,-2)   → ||b1|| = √5
b2 = (2, 1)   → ||b2|| = √5
```

Normalize:

```text
c1 = (1/√5, -2/√5)
c2 = (2/√5,  1/√5)
```

Şimdi:

- `c1·c2=0`
- `||c1||=1`
- `||c2||=1`

Yani ortonormaller.

---

# 27. Test için doğru / yanlış kartı

1. `det(A)≠0` ise kare matris terslenebilir. **Doğru**
2. `det(A)=0` ise `AX=B` kesin çözümsüzdür. **Yanlış**
3. `det(A)=0` ise kare sistem tek çözümlü olamaz. **Doğru**
4. Homojen sistem çözümsüz olabilir. **Yanlış**
5. Homojen sistemde her zaman trivial çözüm vardır. **Doğru**
6. `rank(A)=n` ise kare matriste ters vardır. **Doğru**
7. `rank(A)<n` ise sütunlar lineer bağımlıdır. **Doğru**
8. `rank(A)=rank([A|B])<n` ise sonsuz çözüm vardır. **Doğru**
9. `rank(A)≠rank([A|B])` ise çözüm yoktur. **Doğru**
10. Özvektör `0` olabilir. **Yanlış**
11. Özdeğer `0` olabilir. **Doğru**
12. Ortogonal vektörlerin normları mutlaka 1'dir. **Yanlış**
13. Ortonormal vektörler ortogonaldir. **Doğru**
14. `n` farklı özdeğeri olan `n×n` matris diyagonalleştirilebilir. **Doğru**

---

# 28. Soru görünce hangi yöntemi seçmeliyim?

## “Determinantı kofaktör açılımıyla bulun”

En çok sıfır olan satır/sütun → minor → kofaktör işareti → `aij·Cij` terimlerini topla.

## “Ters matrisi bulun”

- 2×2: kısa yol.
- Genel: `[A|I] → [I|A⁻¹]`.
- “Adjoint/kofaktörle”: `C → Cᵀ → adj(A) → adj(A)/det(A)`.

## “Cramer ile çözün”

Aradığın bilinmeyenin sütununu `B` ile değiştir.

## “Kaç çözüm var?”

Önce `det(A)` ve/veya rank ilişkisine bak.

## “Lineer bağımsız mı?”

`c1v1+...+ckvk=0` denkleminin yalnızca sıfır katsayı çözümü var mı bak. Kare matris sütunları için determinant kısa yol olabilir.

## “Baz mı?”

Hem span etmeli hem lineer bağımsız olmalı.

## “Özdeğerleri bulun”

`det(λI-A)=0`.

## “Özvektörleri bulun”

Her `λ` için `(λI-A)X=0`.

## “Diyagonalleştirin”

Özdeğer → özvektör → `P` → `P⁻¹` → `D=P⁻¹AP`.

## “Ortogonal mi?”

Nokta çarpımı `0` mı?

## “Ortonormal mi?”

Nokta çarpımı `0` + normlar `1` mi?

## “Ortonormal hale getirin”

Ortogonal değilse Gram–Schmidt, sonra normalize.

---

# 29. En sık hatalar

1. Kofaktör işaretlerini karıştırmak.
2. Minor ile kofaktörü aynı sanmak.
3. Adjoint için kofaktör matrisinin transpozunu unutmak.
4. `det(A)=0` iken ters almaya çalışmak.
5. Cramer'da satır değil **sütun** değiştirilir.
6. `det(A)=0` görünce “kesin çözüm yok” demek.
7. Rank karşılaştırmasında `[A|B]` artırılmış matrisi unutmak.
8. Özdeğerde `I-A` değil, `λI-A` kullanmak.
9. Özvektörü `X=0` seçmek.
10. `λ=0` olamaz sanmak.
11. `P` içine özvektörleri satır değil **sütun** olarak koymak.
12. `P`'deki sıra ile `D`'deki sırayı eşleştirmemek.
13. Ortogonal ile ortonormali karıştırmak.
14. Gram–Schmidt'te projeksiyon katsayısını bulduktan sonra `b1` ile çarpmayı unutmak.

---

# 30. Son 2 dakikalık özet

**Determinant:** `ad-bc`; 3×3'te kofaktör açılımı kullanabilirsin.

**Ters:** `det(A)≠0` şart. 2×2 kısa yol veya Gauss–Jordan; adjoint istenirse kofaktör matrisi → transpoz → `1/det`.

**Cramer:** Aradığım bilinmeyenin sütununu `B` ile değiştir.

**Çözüm sayısı:** Ranklar eşit değilse çözüm yok; eşit ve `n` ise tek; eşit ama `n`'den küçükse sonsuz.

**Lineer bağımsızlık:** Sıfır vektörü yalnızca tüm katsayılar 0 iken elde ediliyorsa bağımsız.

**Baz:** Span + lineer bağımsızlık.

**Özdeğer:** `λI-A` kur, determinantı sıfırla.

**Özvektör:** Her `λ` için `(λI-A)X=0`, sıfır olmayan basit vektör seç.

**Diyagonalizasyon:** Özvektörler `P`'nin sütunları, özdeğerler aynı sırada `D`'nin köşegeni.

**Ortogonal:** Nokta çarpımı 0.

**Ortonormal:** Ortogonal + norm 1.

**Gram–Schmidt:** İlk vektörü bırak; ikincinin ilk yönündeki payını çıkar; sonra normalize et.

---

# 31. Kendine sor

- `det(A)=0` sistem hakkında ne söyler, neyi **kesin söylemez**?
- Tek / sonsuz / çözüm yok durumlarını rank ile ayırabiliyor musun?
- Lineer bağımsızlık ile determinant bağlantısını biliyor musun?
- Baz olmak için iki şart ne?
- Minor ile kofaktör farkı ne?
- Adjoint nasıl bulunur?
- Cramer'da hangi sütun değişir?
- Neden `det(λI-A)=0` yapıyoruz?
- Özdeğer 0 olabilir mi? Özvektör 0 olabilir mi?
- `P` ve `D` nasıl hazırlanır?
- Ortogonal ile ortonormal farkı ne?
- Gram–Schmidt ikinci vektöre ne yapıyor?

> **Sınavda takılırsan formülü tek başına ezberden çağırmaya çalışma; yöntemin amacını hatırla.** Determinant, rank, homojen sistem, matris çarpımı ve nokta çarpımı birçok konunun ortak omurgasıdır.