# Lineer Cebir — Final Öncesi Quick Tekrar

> **Amaç:** Sınavdan hemen önce hızlıca okuyup yöntemleri tekrar hatırlamak.
>
> Not mümkün olduğunca aynı ana matris üzerinden ilerler. Böylece farklı konuların aslında birbirine nasıl bağlandığını görmek kolaylaşır.

Ana matrisimiz:

$$
A=\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
$$

Denklem sistemi gerektiğinde:

$$
B=\begin{bmatrix}6\\8\end{bmatrix}
$$

Dolayısıyla:

$$AX=B$$

aslında

$$
\begin{cases}
4x+y=6\\
2x+3y=8
\end{cases}
$$

demektir.

---

# 0. En kısa hatırlatma kartı

## 2×2 determinant

$$
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc
$$

## Kofaktör işaret şablonu

$$
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}
$$

## Kofaktör açılımıyla determinant

Bir satır veya sütun seç:

$$
\det(A)=a_{i1}C_{i1}+a_{i2}C_{i2}+\cdots+a_{in}C_{in}
$$

veya aynı şekilde bir sütundan aç.

**Pratik:** En çok sıfır bulunan satır/sütundan aç.

## Ters matris — Gauss–Jordan

$$
\boxed{[A\mid I]\longrightarrow[I\mid A^{-1}]}
$$

## 2×2 ters kısa yolu

$$
\boxed{
A^{-1}=\frac1{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}}
$$

## Adjoint ile ters

$$
\boxed{A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)}
$$

Burada:

$$
\operatorname{adj}(A)=C^T
$$

ve $C$ kofaktör matrisidir.

Şart:

$$\boxed{\det(A)\neq0}$$

## Cramer

$$
\boxed{x_i=\frac{\det(A_i)}{\det(A)}}
$$

$A_i$: $A$ matrisinin **i. sütununu $B$ ile değiştir**.

## Özdeğer

$$
\boxed{\det(\lambda I-A)=0}
$$

## Özvektör

Her bulunan $\lambda$ için:

$$
\boxed{(\lambda I-A)X=0}
$$

ve $X\neq0$.

## 2×2 özdeğer kısa yolu

$$
\boxed{\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0}
$$

## Diyagonalizasyon

$$
\boxed{D=P^{-1}AP}
$$

- $P$: özvektörler sütunlarda.
- $D$: karşılık gelen özdeğerler aynı sırayla köşegende.

## Ortogonal

$$u\cdot v=0$$

## Ortonormal

Ortogonal + her vektörün uzunluğu 1.

$$
\widehat v=\frac{v}{\|v\|}
$$

## Gram–Schmidt — iki vektör

$$b_1=a_1$$

$$
\boxed{b_2=a_2-\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1}
$$

Sonra normalize et.

---

# 1. Küçük araçlar

## 1.1 Matris çarpımı

Her hücre:

> soldaki matristen **satır** × sağdaki matristen **sütun**.

Örnek:

$$
\begin{bmatrix}4&1\\2&3\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}4x+y\\2x+3y\end{bmatrix}
$$

---

## 1.2 Nokta çarpımı

$$
\begin{bmatrix}a\\b\end{bmatrix}\cdot
\begin{bmatrix}c\\d\end{bmatrix}
=ac+bd
$$

Sonuç $0$ ise vektörler diktir, yani ortogonaldir.

---

## 1.3 Vektör uzunluğu

$$
\left\|\begin{bmatrix}a\\b\end{bmatrix}\right\|
=\sqrt{a^2+b^2}
$$

---

# 2. Determinant ve terslenebilirlik

Ana matris:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$
\det(A)=4\cdot3-1\cdot2=10
$$

Yani:

$$\boxed{\det(A)=10\neq0}$$

Bunun sonuçları:

- $A$ terslenebilir.
- $A^{-1}$ vardır.
- $AX=B$ tek çözümlüdür.
- $AX=0$ homojen sisteminde yalnızca trivial çözüm vardır.

---

# 3. Kofaktör nedir?

Bir $a_{ij}$ elemanının **minörü** $M_{ij}$:

> o elemanın bulunduğu satırı ve sütunu sil, kalan küçük matrisin determinantını al.

Kofaktör:

$$
\boxed{C_{ij}=(-1)^{i+j}M_{ij}}
$$

İşaret şablonu:

$$
\boxed{
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}}
$$

Yani önce minor determinantını bul, sonra bulunduğu konuma göre işaret uygula.

---

# 4. Kofaktör açılımıyla determinant

Bu yöntem özellikle 3×3 ve daha büyük determinantlarda çok kullanılır.

Örnek olarak:

$$
M=
\begin{bmatrix}
1&2&0\\
3&4&5\\
0&6&7
\end{bmatrix}
$$

İlk satırdan açalım:

$$
\det(M)=1C_{11}+2C_{12}+0C_{13}
$$

### $C_{11}$

1. satır ve 1. sütunu sil:

$$
M_{11}=\begin{vmatrix}4&5\\6&7\end{vmatrix}=28-30=-2
$$

Konum $(1,1)$ işareti $+$:

$$C_{11}=-2$$

### $C_{12}$

1. satır ve 2. sütunu sil:

$$
M_{12}=\begin{vmatrix}3&5\\0&7\end{vmatrix}=21
$$

Konum $(1,2)$ işareti $-$:

$$C_{12}=-21$$

Şimdi:

$$
\det(M)=1(-2)+2(-21)+0=-44
$$

$$\boxed{\det(M)=-44}$$

### Sınav refleksi

Kofaktör açılımında **en çok sıfır bulunan satır veya sütunu seç**. Sıfırlı terimler direkt yok olur.

---

# 5. Homojen sistem ve trivial çözüm

Homojen sistem:

$$AX=0$$

Her zaman:

$$X=0$$

çözümü vardır. Buna **trivial çözüm** denir.

Eğer:

$$\det(A)\neq0$$

ise yalnızca trivial çözüm vardır.

Eğer:

$$\det(A)=0$$

ise trivial olmayan çözümler çıkabilir.

Bu fikir özdeğer konusunun temelidir.

---

# 6. Ters matris — Gauss–Jordan yöntemi

Genel ve güvenli yöntem:

$$
\boxed{[A\mid I]\rightarrow[I\mid A^{-1}]}
$$

Ana matris:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

Başlangıç:

$$
\left[
\begin{array}{cc|cc}
4&1&1&0\\
2&3&0&1
\end{array}
\right]
$$

### 1

$$R_1\leftarrow R_1-R_2$$

$$
\left[
\begin{array}{cc|cc}
2&-2&1&-1\\
2&3&0&1
\end{array}
\right]
$$

### 2

$$R_1\leftarrow\frac12R_1$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
2&3&0&1
\end{array}
\right]
$$

### 3

$$R_2\leftarrow R_2-2R_1$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
0&5&-1&2
\end{array}
\right]
$$

### 4

$$R_2\leftarrow\frac15R_2$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
0&1&-1/5&2/5
\end{array}
\right]
$$

### 5

$$R_1\leftarrow R_1+R_2$$

$$
\left[
\begin{array}{cc|cc}
1&0&3/10&-1/10\\
0&1&-1/5&2/5
\end{array}
\right]
$$

Dolayısıyla:

$$
\boxed{
A^{-1}=\frac1{10}
\begin{bmatrix}3&-1\\-2&4\end{bmatrix}}
$$

---

# 7. Ters matris — 2×2 pratik yol

Genel:

$$
A=\begin{bmatrix}a&b\\c&d\end{bmatrix}
$$

$$
\boxed{
A^{-1}=\frac1{ad-bc}
\begin{bmatrix}d&-b\\-c&a\end{bmatrix}}
$$

Ezber:

1. Ana köşegendekileri yer değiştir.
2. Diğer ikisinin işaretini değiştir.
3. Determinanta böl.

Bizim matriste:

$$
A^{-1}=\frac1{10}
\begin{bmatrix}3&-1\\-2&4\end{bmatrix}
$$

---

# 8. Adjoint / kofaktör yöntemiyle ters matris

Bu, konuştuğumuz **kofaktörle ters bulma yöntemi**.

Ana formül:

$$
\boxed{A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)}
$$

Burada:

$$
\boxed{\operatorname{adj}(A)=C^T}
$$

$C$: kofaktör matrisi.

Yöntem sırası:

1. $\det(A)$ bul.
2. Her elemanın kofaktörünü bul.
3. Kofaktörleri yerlerine yazıp $C$ matrisini oluştur.
4. $C$'nin transpozunu al → $\operatorname{adj}(A)$.
5. $\frac1{\det(A)}$ ile çarp.

Ana matrisimiz:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

Zaten:

$$\det(A)=10$$

## Kofaktörler

2×2 matris olduğu için her elemanın minörü tek sayıdır.

$$C_{11}=+3=3$$

$$C_{12}=-2$$

$$C_{21}=-1$$

$$C_{22}=+4=4$$

Dolayısıyla kofaktör matrisi:

$$
C=
\begin{bmatrix}
3&-2\\
-1&4
\end{bmatrix}
$$

Şimdi transpoz:

$$
\operatorname{adj}(A)=C^T
=
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
$$

Son olarak:

$$
A^{-1}
=\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
$$

Yani Gauss–Jordan ve 2×2 kısa yolla **aynı sonuç**.

### Kritik bağlantı

Kofaktör iki farklı işte kullanılıyor:

**1. Determinant bulmak:**

$$
\det(A)=a_{i1}C_{i1}+a_{i2}C_{i2}+\cdots
$$

**2. Ters matris bulmak:**

$$
C\rightarrow C^T=\operatorname{adj}(A)
\rightarrow
A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)
$$

---

# 9. Ters matrisle denklem sistemi çözmek

$$AX=B$$

Soldan $A^{-1}$ ile çarp:

$$
X=A^{-1}B
$$

Bizim örnekte:

$$
X=
\frac1{10}
\begin{bmatrix}3&-1\\-2&4\end{bmatrix}
\begin{bmatrix}6\\8\end{bmatrix}
$$

$$
X=\frac1{10}
\begin{bmatrix}10\\20\end{bmatrix}
=
\begin{bmatrix}1\\2\end{bmatrix}
$$

$$\boxed{x=1,\ y=2}$$

---

# 10. Cramer yöntemi

Aynı sistem:

$$
\begin{cases}
4x+y=6\\
2x+3y=8
\end{cases}
$$

Ana determinant:

$$
\det(A)=10
$$

## $x$ için

1. sütunu $B$ ile değiştir:

$$
A_x=
\begin{bmatrix}6&1\\8&3\end{bmatrix}
$$

$$
\det(A_x)=18-8=10
$$

$$
\boxed{x=\frac{10}{10}=1}
$$

## $y$ için

2. sütunu $B$ ile değiştir:

$$
A_y=
\begin{bmatrix}4&6\\2&8\end{bmatrix}
$$

$$
\det(A_y)=32-12=20
$$

$$
\boxed{y=\frac{20}{10}=2}
$$

### Cramer refleksi

> Aradığın bilinmeyenin sütununu $B$ ile değiştir, yeni determinantı ana determinanta böl.

---

# 11. Özdeğer ve özvektör — temel fikir

$$
\boxed{AX=\lambda X}
$$

- $X$: özvektör.
- $\lambda$: özdeğer.

Özvektör sıfır vektörü olamaz:

$$X\neq0$$

Ama:

$$\lambda=0$$

olabilir.

---

# 12. Özdeğer formülü neden determinant 0?

$$AX=\lambda X$$

$$AX=\lambda IX$$

$$
(\lambda I-A)X=0
$$

Bu homojen sistemde $X\neq0$ istiyoruz.

Trivial olmayan çözüm için katsayı matrisi tekil olmalı:

$$
\boxed{\det(\lambda I-A)=0}
$$

---

# 13. Karakteristik determinant / polinom / eşitlik

Karakteristik determinant:

$$
\det(\lambda I-A)
$$

Karakteristik polinom: determinant açılınca çıkan ifade.

Örneğin:

$$
\lambda^2-7\lambda+10
$$

Karakteristik eşitlik:

$$
\lambda^2-7\lambda+10=0
$$

Kökleri özdeğerlerdir.

---

# 14. Ana matrisin özdeğerleri

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$
\lambda I-A=
\begin{bmatrix}
\lambda-4&-1\\
-2&\lambda-3
\end{bmatrix}
$$

$$
\det(\lambda I-A)=0
$$

$$
(\lambda-4)(\lambda-3)-2=0
$$

$$
\lambda^2-7\lambda+10=0
$$

$$
(\lambda-2)(\lambda-5)=0
$$

$$
\boxed{\lambda_1=2,\quad\lambda_2=5}
$$

---

# 15. 2×2 özdeğer kısa yolu

$$
\boxed{\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0}
$$

Bizde:

$$
\operatorname{tr}(A)=4+3=7
$$

$$
\det(A)=10
$$

Direkt:

$$
\lambda^2-7\lambda+10=0
$$

Kontrol:

$$
\lambda_1+\lambda_2=\operatorname{tr}(A)
$$

$$
\lambda_1\lambda_2=\det(A)
$$

---

# 16. Özvektörleri bulma

Her özdeğer için:

$$
\boxed{(\lambda I-A)X=0}
$$

## $\lambda=2$

$$
2I-A=
\begin{bmatrix}-2&-1\\-2&-1\end{bmatrix}
$$

$$
-2x_1-x_2=0
$$

$$
x_2=-2x_1
$$

$x_1=1$ seçersek:

$$
\boxed{v_1=\begin{bmatrix}1\\-2\end{bmatrix}}
$$

## $\lambda=5$

$$
5I-A=
\begin{bmatrix}1&-1\\-2&2\end{bmatrix}
$$

$$
x_1-x_2=0
$$

$$x_1=x_2$$

$x_1=1$ seçersek:

$$
\boxed{v_2=\begin{bmatrix}1\\1\end{bmatrix}}
$$

---

# 17. Üçgen matris kısa yolu

Üst üçgen, alt üçgen veya köşegen matriste:

> **Özdeğerler ana köşegen elemanlarıdır.**

Örnek:

$$
\begin{bmatrix}
2&7&4\\
0&3&5\\
0&0&9
\end{bmatrix}
$$

özdeğerleri:

$$
\boxed{2,3,9}
$$

Ayrıca üçgen matrisin determinantı da ana köşegen çarpımıdır.

---

# 18. Diyagonalizasyon

Özdeğerler:

$$\lambda_1=2,\quad\lambda_2=5$$

Özvektörler:

$$
v_1=\begin{bmatrix}1\\-2\end{bmatrix},
\qquad
v_2=\begin{bmatrix}1\\1\end{bmatrix}
$$

$P$ özvektörleri sütun yapar:

$$
P=
\begin{bmatrix}
1&1\\
-2&1
\end{bmatrix}
$$

Aynı sırada:

$$
D=
\begin{bmatrix}
2&0\\
0&5
\end{bmatrix}
$$

Ana formül:

$$
\boxed{D=P^{-1}AP}
$$

$P$'nin tersini bul:

$$
P^{-1}=\frac13
\begin{bmatrix}
1&-1\\
2&1
\end{bmatrix}
$$

Kontrol sonucunda:

$$
\boxed{P^{-1}AP=
\begin{bmatrix}2&0\\0&5\end{bmatrix}}
$$

### Kritik

$P$ sütunlarının sırası değişirse $D$ köşegenindeki özdeğerlerin sırası da değişir.

---

# 19. Ortogonal ve ortonormal

## Ortogonal

$$
\boxed{u\cdot v=0}
$$

## Ortonormal

Hem ortogonal olacak hem:

$$
\|u\|=\|v\|=1
$$

Kısa hafıza:

> **Ortonormal = Ortogonal + Normalize**

Normalize:

$$
\boxed{\widehat v=\frac{v}{\|v\|}}
$$

---

# 20. Gram–Schmidt

İki vektör:

$$
a_1=\begin{bmatrix}1\\-2\end{bmatrix},
\qquad
a_2=\begin{bmatrix}1\\1\end{bmatrix}
$$

Bunlar ortogonal değil:

$$
a_1\cdot a_2=1-2=-1
$$

## İlk vektörü bırak

$$
\boxed{b_1=a_1}
$$

## İkinciyi dikleştir

$$
\boxed{
b_2=a_2-
\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1}
$$

Pay:

$$
a_2\cdot b_1=-1
$$

Payda:

$$
b_1\cdot b_1=5
$$

Oran:

$$-\frac15$$

Bu oranı $b_1$ ile çarp:

$$
-\frac15b_1=
\begin{bmatrix}-1/5\\2/5\end{bmatrix}
$$

Sonra $a_2$'den çıkar:

$$
b_2=
\begin{bmatrix}1\\1\end{bmatrix}
-
\begin{bmatrix}-1/5\\2/5\end{bmatrix}
=
\begin{bmatrix}6/5\\3/5\end{bmatrix}
$$

Aynı yönün daha sade katını seçebiliriz:

$$
\boxed{b_2=\begin{bmatrix}2\\1\end{bmatrix}}
$$

Kontrol:

$$
\begin{bmatrix}1\\-2\end{bmatrix}\cdot
\begin{bmatrix}2\\1\end{bmatrix}
=2-2=0
$$

Artık ortogonaller.

---

# 21. Gram–Schmidt sonrası ortonormal yapma

$$
\|b_1\|=\sqrt5
$$

$$
\|b_2\|=\sqrt5
$$

Normalize:

$$
\boxed{
c_1=
\begin{bmatrix}
1/\sqrt5\\
-2/\sqrt5
\end{bmatrix}}
$$

$$
\boxed{
c_2=
\begin{bmatrix}
2/\sqrt5\\
1/\sqrt5
\end{bmatrix}}
$$

Artık:

$$c_1\cdot c_2=0$$

ve:

$$\|c_1\|=\|c_2\|=1$$

Dolayısıyla ortonormaller.

---

# 22. Soru görünce hangi yöntemi seçmeliyim?

## “Determinantı kofaktör açılımıyla bulun”

1. En çok sıfır bulunan satır/sütunu seç.
2. Her terim için minoru bul.
3. $+,-,+$ işaretlerini uygula.
4. $a_{ij}C_{ij}$ terimlerini topla.

## “Ters matrisi bulun”

2×2 hızlı soru:

$$
\frac1{ad-bc}
\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$

Genel / Gauss–Jordan istenirse:

$$[A|I]\to[I|A^{-1}]$$

“Kofaktör/adjoint yöntemiyle” denirse:

$$
C\to C^T=\operatorname{adj}(A)
\to
A^{-1}=\frac1{\det(A)}\operatorname{adj}(A)
$$

## “Cramer ile çözün”

$$
x_i=\frac{\det(A_i)}{\det(A)}
$$

## “Özdeğerleri bulun”

$$
\det(\lambda I-A)=0
$$

## “Özvektörleri bulun”

Her $\lambda$ için:

$$
(\lambda I-A)X=0
$$

## “Diyagonalleştirin”

Özdeğer → özvektör → $P$ → $P^{-1}$ → $D=P^{-1}AP$.

## “Ortogonal mi?”

Nokta çarpımı $0$ mı?

## “Ortonormal mi?”

Nokta çarpımı $0$ + uzunluklar $1$ mi?

## “Ortonormal hale getirin”

Zaten ortogonalse sadece normalize et.

Ortogonal değilse önce Gram–Schmidt, sonra normalize.

---

# 23. En sık hatalar

1. Kofaktör işaretlerini karıştırmak:

   $$
   \begin{bmatrix}+&-&+\\-&+&-\\+&-&+\end{bmatrix}
   $$

2. Minor ile kofaktörü aynı sanmak. Kofaktörde işaret de vardır.

3. Adjoint için kofaktör matrisinin **transpozunu almayı unutmak**.

4. $A^{-1}=\operatorname{adj}(A)/\det(A)$ formülünde determinantı unutmak.

5. $\det(A)=0$ iken ters almaya çalışmak.

6. Cramer'da satır değil, **sütun** değiştirilir.

7. Özdeğerde $I-A$ değil:

   $$\lambda I-A$$

8. Özvektörü $X=0$ seçmek. Yasak.

9. $\lambda=0$ olamaz sanmak. Olabilir.

10. $P$ içine özvektörleri satır değil **sütun** olarak koymak.

11. $P$'deki sıra ile $D$'deki sırayı eşleştirmemek.

12. Ortogonal ile ortonormali karıştırmak.

13. Gram–Schmidt'te oranı bulduktan sonra $b_1$ ile çarpmayı unutmak.

---

# 24. Son 2 dakikalık yöntem özeti

### Kofaktör determinant

> Bir satır/sütun seç → eleman × kofaktör → topla. En çok sıfır olanı seç.

### Adjoint ile ters

> Bütün kofaktörleri bul → kofaktör matrisi $C$ → transpoz $C^T$ → $\operatorname{adj}(A)$ → $1/\det(A)$ ile çarp.

### Gauss–Jordan ters

> $[A|I]\to[I|A^{-1}]$.

### Cramer

> Aradığım bilinmeyenin sütununu $B$ ile değiştir, determinantını ana determinanta böl.

### Özdeğer

> $\lambda I-A$ kur, determinantını sıfırla, kökleri bul.

### Özvektör

> Her $\lambda$'yı geri koy, $(\lambda I-A)X=0$ çöz, sıfır olmayan basit bir vektör seç.

### Diyagonalizasyon

> Özvektörler $P$'nin sütunları, özdeğerler aynı sırayla $D$'nin köşegeni.

### Ortogonal

> Nokta çarpımı 0.

### Ortonormal

> Ortogonal + uzunluk 1.

### Gram–Schmidt

> İlk vektörü bırak; ikincinin ilk yönündeki payını çıkar; sonra normalize et.

---

# 25. Kendine sor

- Minor ile kofaktör arasındaki fark ne?
- Kofaktör işaret matrisi neydi?
- Kofaktör açılımıyla determinant nasıl bulunur?
- Neden sıfırı çok olan satır/sütunu seçmek avantajlı?
- $\operatorname{adj}(A)$ nasıl bulunur?
- Adjoint ile ters formülü ne?
- $\det(A)=0$ ise ters var mı?
- Gauss–Jordan ile ters nasıl bulunur?
- Cramer'da hangi sütun değişir?
- Neden özdeğerde $\det(\lambda I-A)=0$ yapıyoruz?
- Özdeğer 0 olabilir mi?
- Sıfır vektörü özvektör olabilir mi?
- $P$ nasıl hazırlanır?
- Ortogonal ile ortonormal farkı ne?
- Gram–Schmidt ikinci vektöre ne yapıyor?

---

# 26. Test soruları için vektör, lineer bağımsızlık ve baz hızlı özeti

Bu bölüm özellikle **çoktan seçmeli sınavda kısa yorum soruları** için eklendi.

## 26.1 Lineer kombinasyon nedir?

Bir vektörü diğer vektörlerin skaler katlarını toplayarak yazabiliyorsan, o vektör onların lineer kombinasyonudur.

Örneğin:

$$
v_1=\begin{bmatrix}1\\0\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\end{bmatrix}
$$

ise:

$$
\begin{bmatrix}3\\2\end{bmatrix}=3v_1+2v_2
$$

## 26.2 Lineer bağımsızlık

Vektörler $v_1,\ldots,v_k$ için:

$$
c_1v_1+c_2v_2+\cdots+c_kv_k=0
$$

denkleminin **tek çözümü**

$$
c_1=c_2=\cdots=c_k=0
$$

ise vektörler **lineer bağımsızdır**.

Eğer sıfır olmayan katsayılarla da toplam sıfır yapılabiliyorsa **lineer bağımlıdır**.

### Testte hızlı işaretler

- Vektörlerden biri diğerinin katıysa → **bağımlı**.
- Kümede sıfır vektörü varsa → **bağımlı**.
- $\mathbb{R}^2$ içinde 3 veya daha fazla vektör varsa → mutlaka **bağımlı**.
- $\mathbb{R}^3$ içinde 4 veya daha fazla vektör varsa → mutlaka **bağımlı**.
- $n$ boyutlu uzayda $n$'den fazla vektör → mutlaka bağımlı.

## 26.3 Kare matriste determinant ve lineer bağımsızlık

Bir kare matrisin sütunlarını vektörler olarak düşün.

$$
\boxed{\det(A)\neq0}
$$

ise:

- sütunlar lineer bağımsızdır,
- satırlar lineer bağımsızdır,
- rank tamdır,
- ters matris vardır,
- $AX=B$ her $B$ için tek çözümlüdür,
- $AX=0$ yalnız trivial çözüme sahiptir.

Buna karşılık:

$$
\boxed{\det(A)=0}
$$

ise:

- matris tekildir,
- ters yoktur,
- sütunlar ve satırlar lineer bağımlıdır,
- $AX=0$ için trivial olmayan çözümler vardır.

> **Çok önemli:** $\det(A)=0$ demek, genel $AX=B$ sistemi için otomatik olarak “çözüm yok” demek değildir. Sistem **çözümsüz de olabilir, sonsuz çözümlü de olabilir**.

## 26.4 Baz nedir?

Bir vektör kümesi bir uzayın bazıysa iki şart birlikte gerekir:

1. Vektörler **lineer bağımsız** olacak.
2. Uzayın tamamını **gerecek (span)**.

Örneğin $\mathbb{R}^2$ için:

$$
\begin{bmatrix}1\\0\end{bmatrix},
\begin{bmatrix}0\\1\end{bmatrix}
$$

bir bazdır.

$\mathbb{R}^2$'de iki lineer bağımsız vektör zaten baz oluşturur. Benzer şekilde $\mathbb{R}^3$'te üç lineer bağımsız vektör baz oluşturur.

## 26.5 Boyut

Bir uzayın herhangi bir bazındaki vektör sayısı o uzayın **boyutudur**.

$$
\dim(\mathbb{R}^2)=2,\qquad \dim(\mathbb{R}^3)=3
$$

## 26.6 Span / germe

Bir vektör kümesinin bütün lineer kombinasyonlarıyla oluşturabildiği kümeye o vektörlerin gerdiği uzay denir.

Kısaca:

> **Span = bu vektörleri katsayılarla çarpıp toplayarak ulaşabildiğim bütün vektörler.**

---

# 27. Testte çok sorulabilecek sistem çözüm durumları

Buradaki ayrım özellikle önemli.

## 27.1 Kare sistemde $\det(A)\neq0$

$$
\boxed{\det(A)\neq0\Rightarrow\text{tek çözüm}}
$$

Ayrıca ters vardır ve Cramer uygulanabilir.

## 27.2 Kare sistemde $\det(A)=0$

Burada tek başına determinant sana iki seçenekten hangisi olduğunu söylemez:

- **çözüm yok**, veya
- **sonsuz çözüm**.

Ayırmak için satır indirgeme / rank bilgisine bakılır.

### Satır indirgemede çözümsüzlük işareti

Eğer şöyle bir satır çıkarsa:

$$
[0\quad0\quad\cdots\quad0\mid c],\qquad c\neq0
$$

bu:

$$0=c$$

anlamına gelir ve sistem **çözümsüzdür**.

Örneğin:

$$
[0\quad0\mid3]
$$

→ $0=3$ imkânsız → çözüm yok.

### Sonsuz çözüm işareti

Çelişki yoksa ve en az bir **serbest değişken** varsa → sonsuz çözüm vardır.

Örneğin:

$$
[1\quad2\mid4]\\
[0\quad0\mid0]
$$

tek denklem, iki bilinmeyen → bir serbest değişken → sonsuz çözüm.

## 27.3 Homojen sistem özel durumu

$$AX=0$$

homojen sistem **asla çözümsüz değildir**, çünkü her zaman $X=0$ çözümü vardır.

- $\det(A)\neq0$ → yalnız trivial çözüm.
- $\det(A)=0$ → trivial olmayan çözümler de vardır → sonsuz çözüm.

Bu ayrım testte çok güzel çeldirici olabilir.

## 27.4 Rank ile kısa test bilgisi

$AX=B$ sistemi için:

- $\operatorname{rank}(A)=\operatorname{rank}([A|B])=n$ → **tek çözüm**.
- $\operatorname{rank}(A)=\operatorname{rank}([A|B])<n$ → **sonsuz çözüm**.
- $\operatorname{rank}(A)\neq\operatorname{rank}([A|B])$ → **çözüm yok**.

Burada $n$ bilinmeyen sayısıdır.

---

# 28. Test için kısa doğru/yanlış bilgileri

Bunları özellikle son turda oku:

- Her homojen sistemin en az trivial çözümü vardır. **Doğru.**
- $\det(A)=0$ ise $A^{-1}$ vardır. **Yanlış.**
- $\det(A)\neq0$ ise kare $AX=B$ sistemi tek çözümlüdür. **Doğru.**
- $\det(A)=0$ ise $AX=B$ kesin çözümsüzdür. **Yanlış.** Sonsuz çözüm de olabilir.
- Kare matriste $\det(A)\neq0$ ise sütunlar lineer bağımsızdır. **Doğru.**
- Bir kümede sıfır vektörü varsa küme lineer bağımsız olabilir. **Yanlış.**
- Bir vektör diğerinin katıysa ikisi lineer bağımlıdır. **Doğru.**
- Ortonormal vektörler mutlaka ortogonaldir. **Doğru.**
- Ortogonal vektörler mutlaka ortonormaldir. **Yanlış.** Uzunluklarının da 1 olması gerekir.
- Özvektör sıfır vektörü olabilir. **Yanlış.**
- Özdeğer sıfır olabilir. **Doğru.**
- Üçgen matrisin özdeğerleri köşegen elemanlarıdır. **Doğru.**
- $P$ matrisinde özvektörler satır olarak yazılır. **Yanlış.** Sütun olarak yazılır.
- Diyagonalizasyon için yeterli sayıda lineer bağımsız özvektör gerekir. **Doğru.**
- Farklı $n$ özdeğeri olan $n\times n$ matris diyagonalleştirilebilir. **Doğru.**

---

# 29. Çalışma sırası = önem sırası (yaklaşık 1 saatlik son tur)

Bu sıralamayı değiştirmeden git. Böylece hem öncelik hem öğrenme akışı aynı olur.

## 1. Determinant → kofaktör → ters matris → Cramer

**En yüksek öncelik.**

Önce şu bölümleri oku:

- Bölüm 2: determinant ve terslenebilirlik
- Bölüm 3–4: minor, kofaktör, kofaktörle determinant
- Bölüm 6–8: ters matrisin üç yöntemi
- Bölüm 9–10: tersle sistem çözme ve Cramer

Hatırlanacak çekirdek:

$$\det(A)\neq0\Rightarrow A^{-1}\text{ var}\Rightarrow\text{tek çözüm}$$

## 2. Sistemlerin çözüm durumları + lineer bağımsızlık + baz

Sonra **Bölüm 26–28**.

Test sınavı için özellikle şunları kafaya oturt:

$$\det(A)=0\not\Rightarrow\text{kesin çözümsüz}$$

ve:

$$\det(A)\neq0\Rightarrow\text{lineer bağımsız sütunlar}$$

Bu bölüm kısa ama testte çok puan getirebilir.

## 3. Özdeğer → özvektör → diyagonalizasyon

Sonra Bölüm 11–18.

Akış tek zincir:

$$
AX=\lambda X
\rightarrow
\det(\lambda I-A)=0
\rightarrow
\lambda
\rightarrow
(\lambda I-A)X=0
\rightarrow
\text{özvektör}
\rightarrow
P,D
$$

## 4. Ortogonal → ortonormal → Gram–Schmidt

En son Bölüm 19–21.

Akış:

$$
u\cdot v=0
\rightarrow
\text{ortogonal}
\rightarrow
\frac{v}{\|v\|}
\rightarrow
\text{ortonormal}
$$

Ortogonal değillerse:

$$
\text{Gram–Schmidt}\rightarrow\text{normalize}
$$

## 5. Son 5–10 dakika

Sadece şunlara dön:

- Bölüm 0 — en kısa hatırlatma kartı
- Bölüm 23 — sık hatalar
- Bölüm 24 — iki dakikalık yöntem özeti
- Bölüm 28 — doğru/yanlış test bilgileri

> **Bu son saatte amaç yeni bir şey öğrenmek değil; bildiğin konularda soru görünce hangi yolu kullanacağını otomatikleştirmek.**

---

> **Sınavda takılırsan formülü tek başına ezberden çağırmaya çalışma; yöntemin amacını hatırla.** Determinant, kofaktör, homojen sistem, matris çarpımı, lineer bağımsızlık ve nokta çarpımı birçok konunun ortak omurgasıdır.