# Lineer Cebir — Final Öncesi Quick Tekrar

> **Amaç:** Sınavdan hemen önce hızlıca okuyup yöntemleri tekrar hatırlamak.
>
> Bu not mümkün olduğunca **tek bir ana matris** üzerinden ilerler. Böylece her bölümde yeni sayılarla uğraşmak yerine aynı nesnenin farklı konularda nasıl kullanıldığını görürüz.
>
> Ana matrisimiz:
>
> $$
> A=\begin{bmatrix}
> 4&1\\
> 2&3
> \end{bmatrix}
> $$
>
> Denklem sistemi gerektiğinde de şu sağ tarafı kullanacağız:
>
> $$
> B=\begin{bmatrix}6\\8\end{bmatrix}
> $$
>
> Böylece
>
> $$AX=B$$
>
> sistemi aslında
>
> $$
> \begin{cases}
> 4x+y=6\\
> 2x+3y=8
> \end{cases}
> $$
>
> demektir.

---

# 0. En kısa hatırlatma kartı

Bu notun tamamını okuyacak vaktin yoksa önce bunu oku.

## 2×2 determinant

$$
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc
$$

## 2×2 ters matris kısa yolu

$$
\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}
=
\frac1{ad-bc}
\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$

Şart:

$$\det(A)\neq0$$

## Cramer

$$x_i=\frac{\det(A_i)}{\det(A)}$$

$A_i$: $A$ matrisinin **i. sütununu $B$ ile değiştir**.

## Özdeğer

$$\boxed{\det(\lambda I-A)=0}$$

## Özvektör

Her bulduğun $\lambda$ için:

$$\boxed{(\lambda I-A)X=0}$$

ve **$X\neq0$** olacak.

## 2×2 özdeğer kısa yolu

$$\boxed{\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0}$$

Burada:

$$\operatorname{tr}(A)=\text{ana köşegen toplamı}$$

## Diyagonalizasyon

$$\boxed{D=P^{-1}AP}$$

- $P$: özvektörler sütunlarda.
- $D$: karşılık gelen özdeğerler aynı sırayla köşegende.

## Ortogonal

$$u\cdot v=0$$

## Ortonormal

- Ortogonal olacak.
- Her vektörün uzunluğu $1$ olacak.

Normalize etmek:

$$\widehat v=\frac{v}{\|v\|}$$

## Gram–Schmidt — iki vektör için

$$b_1=a_1$$

$$
\boxed{
b_2=a_2-\frac{a_2\cdot b_1}{b_1\cdot b_1}b_1
}
$$

Sonra istenirse:

$$c_1=\frac{b_1}{\|b_1\|},\qquad c_2=\frac{b_2}{\|b_2\|}$$

---

# 1. Ön bilgi — bugün sürekli kullandığımız küçük araçlar

## 1.1 Matris çarpımı

Sonuç matrisindeki **her hücre = soldaki matristen bir satır × sağdaki matristen bir sütun**.

Örnek:

$$
\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
\begin{bmatrix}
x\\y
\end{bmatrix}
=
\begin{bmatrix}
4x+y\\
2x+3y
\end{bmatrix}
$$

Yani matris çarpımında elemanları tek tek karşılıklı çarpıp bırakmıyoruz; satır-sütun çarpımlarını **topluyoruz**.

---

## 1.2 Vektör nokta çarpımı

$$
\begin{bmatrix}a\\b\end{bmatrix}
\cdot
\begin{bmatrix}c\\d\end{bmatrix}
=ac+bd
$$

Örnek:

$$
\begin{bmatrix}1\\-2\end{bmatrix}
\cdot
\begin{bmatrix}2\\1\end{bmatrix}
=1(2)+(-2)(1)=0
$$

Sonuç $0$ ise vektörler **ortogonal**, yani diktir.

---

## 1.3 Vektör uzunluğu

$$
\left\|\begin{bmatrix}a\\b\end{bmatrix}\right\|
=\sqrt{a^2+b^2}
$$

Örnek:

$$
\left\|\begin{bmatrix}1\\-2\end{bmatrix}\right\|
=\sqrt{1^2+(-2)^2}=\sqrt5
$$

---

# 2. Determinant ve terslenebilirlik

Ana matris:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

Determinant:

$$
\det(A)=4(3)-1(2)=12-2=10
$$

Yani:

$$\boxed{\det(A)=10\neq0}$$

Bunun önemli sonuçları:

1. $A$ **terslenebilir**.
2. $A^{-1}$ vardır.
3. $AX=B$ sistemi tek çözümlüdür.
4. $AX=0$ homojen sisteminde yalnızca trivial çözüm vardır.

---

# 3. Homojen sistem ve trivial çözüm — özdeğerde neden determinantı 0 yapıyoruz?

## Homojen sistem nedir?

Sağ tarafı sıfır olan sistem:

$$AX=0$$

Örneğin:

$$
\begin{bmatrix}4&1\\2&3\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}0\\0\end{bmatrix}
$$

Her homojen sistemde:

$$x=0,\qquad y=0$$

çözümü vardır.

Buna **trivial çözüm** denir.

Biz özvektör ararken ise sıfır vektörü istemeyiz:

$$X\neq0$$

Bu yüzden özdeğer hesabında oluşturduğumuz homojen sistemin **trivial olmayan** çözümü olmalıdır.

Bir kare matrisin determinantı sıfır değilse terslenebilir ve homojen sistem yalnızca trivial çözüm verir.

O yüzden özvektör çıkabilmesi için:

$$\boxed{\det(\lambda I-A)=0}$$

şartını arıyoruz.

> **Kritik ayrım:** Özvektör $X=0$ olamaz. Ama özdeğer $\lambda=0$ olabilir.

---

# 4. Ters matris — uzun/genel yol: Gauss–Jordan

Bu yöntem 2×2 ile sınırlı değildir. Mantık:

$$\boxed{[A\mid I]\longrightarrow[I\mid A^{-1}]}$$

Ana matrisimiz:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

Yanına birim matrisi koy:

$$
\left[
\begin{array}{cc|cc}
4&1&1&0\\
2&3&0&1
\end{array}
\right]
$$

Amaç: sol tarafı $I$ yapmak.

## Adım 1

$$R_1\leftarrow R_1-R_2$$

$$
\left[
\begin{array}{cc|cc}
2&-2&1&-1\\
2&3&0&1
\end{array}
\right]
$$

## Adım 2

$$R_1\leftarrow\frac12R_1$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
2&3&0&1
\end{array}
\right]
$$

## Adım 3

$$R_2\leftarrow R_2-2R_1$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
0&5&-1&2
\end{array}
\right]
$$

## Adım 4

$$R_2\leftarrow\frac15R_2$$

$$
\left[
\begin{array}{cc|cc}
1&-1&1/2&-1/2\\
0&1&-1/5&2/5
\end{array}
\right]
$$

## Adım 5

$$R_1\leftarrow R_1+R_2$$

$$
\left[
\begin{array}{cc|cc}
1&0&3/10&-1/10\\
0&1&-1/5&2/5
\end{array}
\right]
$$

Sol taraf artık $I$ olduğuna göre sağ taraf ters matristir:

$$
\boxed{
A^{-1}=
\begin{bmatrix}
3/10&-1/10\\
-1/5&2/5
\end{bmatrix}
=
\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
}
$$

### Kontrol

$$AA^{-1}=I$$

çıkmalıdır.

---

# 5. Ters matris — 2×2 pratik yol

Sınavda 2×2 matris verilirse çoğu zaman daha hızlıdır.

Genel matris:

$$
A=\begin{bmatrix}a&b\\c&d\end{bmatrix}
$$

Önce determinant:

$$\det(A)=ad-bc$$

Sonra:

$$
\boxed{
A^{-1}=
\frac1{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
}
$$

Yani pratik ezber:

1. Ana köşegendeki iki elemanın yerini değiştir.
2. Diğer iki elemanın işaretini değiştir.
3. Hepsini determinanta böl.

Bizim matriste:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$\det(A)=10$$

İç matris:

$$
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
$$

Sonuç:

$$
\boxed{
A^{-1}=\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
}
$$

Gauss–Jordan ile bulduğumuzla aynı.

> **Şartı unutma:** $\det(A)=0$ ise bu formülü kullanamazsın; ters matris yoktur.

---

# 6. Ters matris ile denklem sistemi çözmek

Elimizde:

$$AX=B$$

varsa soldan $A^{-1}$ ile çarp:

$$A^{-1}AX=A^{-1}B$$

$$IX=A^{-1}B$$

$$\boxed{X=A^{-1}B}$$

Bizim sistem:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix},
\qquad
B=\begin{bmatrix}6\\8\end{bmatrix}
$$

$$
X=
\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
\begin{bmatrix}6\\8\end{bmatrix}
$$

$$
X=
\frac1{10}
\begin{bmatrix}
18-8\\
-12+32
\end{bmatrix}
=
\frac1{10}
\begin{bmatrix}
10\\20
\end{bmatrix}
$$

$$
\boxed{x=1,\qquad y=2}
$$

Kontrol:

$$4(1)+2=6$$

$$2(1)+3(2)=8$$

---

# 7. Cramer yöntemi

Aynı sistemi bu kez Cramer ile çözelim:

$$
\begin{cases}
4x+y=6\\
2x+3y=8
\end{cases}
$$

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix},
\qquad
B=\begin{bmatrix}6\\8\end{bmatrix}
$$

Önce:

$$\det(A)=10$$

Cramer'ın temel fikri:

- $x$ için **1. sütunu** $B$ ile değiştir.
- $y$ için **2. sütunu** $B$ ile değiştir.

## x için

$$
A_x=
\begin{bmatrix}
6&1\\
8&3
\end{bmatrix}
$$

$$
\det(A_x)=6(3)-1(8)=18-8=10
$$

$$
\boxed{x=\frac{\det(A_x)}{\det(A)}=\frac{10}{10}=1}
$$

## y için

$$
A_y=
\begin{bmatrix}
4&6\\
2&8
\end{bmatrix}
$$

$$
\det(A_y)=4(8)-6(2)=32-12=20
$$

$$
\boxed{y=\frac{\det(A_y)}{\det(A)}=\frac{20}{10}=2}
$$

Yine:

$$\boxed{x=1,\qquad y=2}$$

### Cramer için sınav refleksi

$$AX=B$$

1. $A$'yı kur.
2. $\det(A)$ hesapla.
3. $\det(A)=0$ ise klasik Cramer ile tek çözüm hesabına devam etme.
4. Her bilinmeyen için ilgili sütunu $B$ ile değiştir.
5. Yeni determinantı eski determinanta böl.

---

# 8. Özdeğer ve özvektör — temel fikir

Bir matris bir vektörü dönüştürür.

Bazı özel vektörler bu dönüşümde yönlerini değiştirmez; yalnızca ölçeklenir.

$$\boxed{AX=\lambda X}$$

- $X$: özvektör.
- $\lambda$: o özvektöre karşılık gelen özdeğer.

Önemli:

- Özvektör **sıfır vektörü olamaz**.
- Özdeğer **0 olabilir**.
- Kare olmayan matris için özdeğer tanımlı değildir.

---

# 9. Neden λI geliyor?

Başlangıç:

$$AX=\lambda X$$

$A$ matris, $\lambda$ sayı olduğu için doğrudan $A-\lambda$ diyemeyiz.

$\lambda X$ ifadesini:

$$\lambda IX$$

olarak yazarız.

Sonra:

$$AX=\lambda IX$$

$$\lambda IX-AX=0$$

$$\boxed{(\lambda I-A)X=0}$$

Özvektörün $X\neq0$ olması gerektiği için bu homojen sistemin trivial olmayan çözümü olmalıdır.

Bu da bizi:

$$\boxed{\det(\lambda I-A)=0}$$

şartına getirir.

---

# 10. Karakteristik determinant, polinom, eşitlik

Bu üç ismi karıştırmamak önemli.

## Karakteristik determinant

$$\boxed{\det(\lambda I-A)}$$

## Karakteristik polinom

Determinantı açınca çıkan $\lambda$ polinomu.

Bizim örnekte birazdan:

$$\boxed{\lambda^2-7\lambda+10}$$

çıkacak.

## Karakteristik eşitlik

Polinomu sıfıra eşitlemek:

$$\boxed{\lambda^2-7\lambda+10=0}$$

Bu denklemin kökleri özdeğerlerdir.

---

# 11. Ana matrisin özdeğerlerini bulalım

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

Birim matris:

$$
I=\begin{bmatrix}1&0\\0&1\end{bmatrix}
$$

$$
\lambda I=
\begin{bmatrix}\lambda&0\\0&\lambda\end{bmatrix}
$$

Şimdi:

$$
\lambda I-A
=
\begin{bmatrix}
\lambda-4&-1\\
-2&\lambda-3
\end{bmatrix}
$$

Determinantı sıfırla:

$$
(\lambda-4)(\lambda-3)-(-1)(-2)=0
$$

$$
(\lambda-4)(\lambda-3)-2=0
$$

$$
\lambda^2-7\lambda+12-2=0
$$

$$
\lambda^2-7\lambda+10=0
$$

Çarpanlara ayır:

$$
(\lambda-2)(\lambda-5)=0
$$

Özdeğerler:

$$\boxed{\lambda_1=2,\qquad\lambda_2=5}$$

---

# 12. 2×2 özdeğer pratik yolu: trace + determinant

2×2 için:

$$
\boxed{\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0}
$$

Bizim matriste:

$$\operatorname{tr}(A)=4+3=7$$

$$\det(A)=10$$

Direkt:

$$\lambda^2-7\lambda+10=0$$

çıkar.

Ayrıca 2×2 için kontrol olarak:

$$\lambda_1+\lambda_2=\operatorname{tr}(A)$$

$$\lambda_1\lambda_2=\det(A)$$

Bizde:

$$2+5=7$$

$$2\cdot5=10$$

ikisi de tutuyor.

> **Sınav tavsiyesi:** Formülü karıştırırsan uzun/güvenli yol olan $\det(\lambda I-A)=0$ yöntemine dön.

---

# 13. Özvektörleri bulalım

Özdeğer bulundu. Şimdi her özdeğer için:

$$\boxed{(\lambda I-A)X=0}$$

çöz.

---

## 13.1 λ = 2 için

$$
2I-A=
\begin{bmatrix}
-2&-1\\
-2&-1
\end{bmatrix}
$$

$$
\begin{bmatrix}
-2&-1\\
-2&-1
\end{bmatrix}
\begin{bmatrix}x_1\\x_2\end{bmatrix}
=
\begin{bmatrix}0\\0\end{bmatrix}
$$

İki satır da aynı denklemi verir:

$$-2x_1-x_2=0$$

$$x_2=-2x_1$$

$x_1$ serbesttir. En basit seçim:

$$x_1=1$$

$$x_2=-2$$

Özvektör olarak:

$$
\boxed{v_1=\begin{bmatrix}1\\-2\end{bmatrix}}
$$

seçebiliriz.

Aslında bunun her sıfır olmayan katı da özvektördür:

$$t\begin{bmatrix}1\\-2\end{bmatrix},\qquad t\neq0$$

---

## 13.2 λ = 5 için

$$
5I-A=
\begin{bmatrix}
1&-1\\
-2&2
\end{bmatrix}
$$

İlk satır:

$$x_1-x_2=0$$

$$x_1=x_2$$

Burada **ikisi bağımsız serbest değildir**. Aralarında ilişki vardır.

Birini serbest seç:

$$x_1=1\Rightarrow x_2=1$$

Özvektör:

$$
\boxed{v_2=\begin{bmatrix}1\\1\end{bmatrix}}
$$

---

# 14. Üçgen matris kısa yolu

Bu ana örneğimizden bağımsız ama sınavda çok hızlı puan getirebilir.

Bir matris üst üçgen, alt üçgen veya köşegen ise **özdeğerler doğrudan ana köşegen elemanlarıdır**.

Örnek:

$$
\begin{bmatrix}
2&7&4\\
0&3&5\\
0&0&9
\end{bmatrix}
$$

özdeğerleri direkt:

$$\boxed{2,3,9}$$

Ayrıca üçgen matrisin determinantı da ana köşegen çarpımıdır.

---

# 15. Diyagonalizasyon

Ana matrisimizin özdeğer ve özvektörlerini artık biliyoruz:

$$\lambda_1=2,\qquad v_1=\begin{bmatrix}1\\-2\end{bmatrix}$$

$$\lambda_2=5,\qquad v_2=\begin{bmatrix}1\\1\end{bmatrix}$$

Diyagonalizasyonun ana formülü:

$$\boxed{D=P^{-1}AP}$$

## P nasıl kurulur?

Özvektörleri **sütun** olarak yan yana koy:

$$
P=
\begin{bmatrix}
1&1\\
-2&1
\end{bmatrix}
$$

1. sütun $\lambda=2$ özvektörü.

2. sütun $\lambda=5$ özvektörü.

Bu sıraya göre $D$:

$$
D=
\begin{bmatrix}
2&0\\
0&5
\end{bmatrix}
$$

> **Çok önemli:** $P$'de özvektörlerin sırasını değiştirirsen $D$'de özdeğerlerin sırasını da aynı şekilde değiştir.

---

## 15.1 P⁻¹

$$
P=
\begin{bmatrix}
1&1\\
-2&1
\end{bmatrix}
$$

$$\det(P)=1(1)-1(-2)=3$$

2×2 kısa yoldan:

$$
P^{-1}
=
\frac13
\begin{bmatrix}
1&-1\\
2&1
\end{bmatrix}
$$

---

## 15.2 D = P⁻¹AP kontrolü

Önce $AP$:

$$
AP=
\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
\begin{bmatrix}
1&1\\
-2&1
\end{bmatrix}
=
\begin{bmatrix}
2&5\\
-4&5
\end{bmatrix}
$$

Sonra:

$$
D=P^{-1}(AP)
$$

$$
D=
\frac13
\begin{bmatrix}
1&-1\\
2&1
\end{bmatrix}
\begin{bmatrix}
2&5\\
-4&5
\end{bmatrix}
$$

İç çarpım:

$$
\begin{bmatrix}
6&0\\
0&15
\end{bmatrix}
$$

$1/3$ ile çarp:

$$
\boxed{
D=
\begin{bmatrix}
2&0\\
0&5
\end{bmatrix}
}
$$

Beklediğimiz özdeğerler köşegene geldi.

---

# 16. Ortogonal ve ortonormal — kelimeleri ayır

Bu ikisi aynı şey değildir.

## Ortogonal = dik

İki vektör için:

$$\boxed{u\cdot v=0}$$

ise ortogonaldirler.

## Ortonormal = dik + uzunlukları 1

Yani:

$$u\cdot v=0$$

ve ayrıca:

$$\|u\|=1,\qquad\|v\|=1$$

olmalıdır.

Kısa ezber:

$$\boxed{\text{Ortonormal}=\text{Ortogonal}+\text{Normalize}}$$

---

# 17. Ana matrisin özvektörleri ortogonal mi?

Özvektörlerimiz:

$$
v_1=\begin{bmatrix}1\\-2\end{bmatrix},
\qquad
v_2=\begin{bmatrix}1\\1\end{bmatrix}
$$

Nokta çarpımı:

$$v_1\cdot v_2=1(1)+(-2)(1)=-1$$

$$-1\neq0$$

Dolayısıyla bunlar **ortogonal değil**.

Tam burada Gram–Schmidt devreye girer.

---

# 18. Gram–Schmidt — aynı özvektörleri dikleştirelim

Başlangıç vektörleri olarak özvektörleri kullanalım:

$$
a_1=\begin{bmatrix}1\\-2\end{bmatrix},
\qquad
a_2=\begin{bmatrix}1\\1\end{bmatrix}
$$

Amaç: aynı uzayı temsil eden, birbirine dik yeni vektörler üretmek.

## 18.1 İlk vektör değişmez

$$
\boxed{b_1=a_1=\begin{bmatrix}1\\-2\end{bmatrix}}
$$

---

## 18.2 İkinci vektörün birinci yönündeki payını bul

Formül:

$$
\frac{a_2\cdot b_1}{b_1\cdot b_1}
$$

Pay:

$$
a_2\cdot b_1
=1(1)+1(-2)
=-1
$$

Payda:

$$
b_1\cdot b_1
=1(1)+(-2)(-2)
=5
$$

Oran:

$$\boxed{-\frac15}$$

Bu oranı $b_1$ ile çarp:

$$
-\frac15
\begin{bmatrix}1\\-2\end{bmatrix}
=
\begin{bmatrix}-1/5\\2/5\end{bmatrix}
$$

---

## 18.3 Bunu ikinci vektörden çıkar

$$
b_2
=a_2-
\left(-\frac15b_1\right)
$$

Eksi eksi artı olduğuna dikkat:

$$
b_2
=
\begin{bmatrix}1\\1\end{bmatrix}
+
\frac15
\begin{bmatrix}1\\-2\end{bmatrix}
$$

$$
b_2
=
\begin{bmatrix}6/5\\3/5\end{bmatrix}
$$

Bu vektör:

$$
\frac35\begin{bmatrix}2\\1\end{bmatrix}
$$

ile aynı yöndedir.

Ortogonal bazda sıfırdan farklı katı kullanmak dikliği bozmaz. Hesabı sadeleştirmek için:

$$
\boxed{b_2=\begin{bmatrix}2\\1\end{bmatrix}}
$$

seçebiliriz.

Kontrol:

$$
\begin{bmatrix}1\\-2\end{bmatrix}
\cdot
\begin{bmatrix}2\\1\end{bmatrix}
=2-2=0
$$

Artık:

$$
\boxed{
b_1=\begin{bmatrix}1\\-2\end{bmatrix},
\qquad
b_2=\begin{bmatrix}2\\1\end{bmatrix}
}
$$

**ortogonal** iki vektördür.

---

# 19. Gram–Schmidt sonrası ortonormal yapma

Şu anda vektörler dik ama uzunlukları 1 olmak zorunda değil.

## b₁ uzunluğu

$$
\|b_1\|
=\sqrt{1^2+(-2)^2}
=\sqrt5
$$

## b₂ uzunluğu

$$
\|b_2\|
=\sqrt{2^2+1^2}
=\sqrt5
$$

Her vektörü kendi uzunluğuna böl:

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

Şimdi:

- $c_1\cdot c_2=0$
- $\|c_1\|=1$
- $\|c_2\|=1$

Dolayısıyla **ortonormal** oldular.

---

# 20. Gram–Schmidt'i formülden önce cümleyle hatırla

İki vektör için zihinsel akış:

1. **İlk vektörü olduğu gibi al.**
2. İkinci vektörün ilk vektör yönündeki payını bul:

   $$\frac{a_2\cdot b_1}{b_1\cdot b_1}$$

3. Çıkan sayıyı $b_1$ ile çarp.
4. Oluşan vektörü $a_2$'den çıkar.
5. Artık iki yeni vektör birbirine diktir → **ortogonal**.
6. Her birini kendi uzunluğuna böl → **ortonormal**.

Kısa fikir:

> **İkinci vektörün birinci yönündeki kısmını çıkar; geriye birinciye dik kısım kalır.**

---

# 21. Aynı ana matris üzerinden büyük resim

Şimdi bütün konuları birbirine bağlayalım.

Ana matris:

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

## Determinant

$$\det(A)=10$$

↓

$\det(A)\neq0$ olduğu için ters var.

## Ters

$$
A^{-1}=\frac1{10}
\begin{bmatrix}3&-1\\-2&4\end{bmatrix}
$$

↓

$AX=B$ sistemi ters matrisle çözülebilir.

## Cramer

Aynı sistem determinantlarla da çözülür:

$$x=1,\qquad y=2$$

## Özdeğer

$$\det(\lambda I-A)=0$$

↓

$$\lambda^2-7\lambda+10=0$$

↓

$$\lambda=2,5$$

## Özvektör

$$\lambda=2\Rightarrow v_1=(1,-2)$$

$$\lambda=5\Rightarrow v_2=(1,1)$$

## Diyagonalizasyon

$$
P=\begin{bmatrix}1&1\\-2&1\end{bmatrix}
$$

$$
D=P^{-1}AP
=\begin{bmatrix}2&0\\0&5\end{bmatrix}
$$

## Ortogonal kontrol

$$v_1\cdot v_2=-1\neq0$$

Yani özvektörlerimiz dik değil.

## Gram–Schmidt

Onlardan aynı uzayı temsil eden dik vektörler ürettik:

$$
b_1=(1,-2),\qquad b_2=(2,1)
$$

## Ortonormal

Uzunlukları $\sqrt5$ olduğundan normalize ettik:

$$
c_1=(1/\sqrt5,-2/\sqrt5)
$$

$$
c_2=(2/\sqrt5,1/\sqrt5)
$$

---

# 22. Sınavda soru görünce hangi yöntemi seçmeliyim?

## “A matrisinin tersini bulun”

2×2 ise hızlı yol:

$$
\frac1{ad-bc}
\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$

Genel yöntem istenirse / 3×3 ise:

$$[A\mid I]\to[I\mid A^{-1}]$$

---

## “Denklem sistemini Cramer ile çözün”

$$x_i=\frac{\det(A_i)}{\det(A)}$$

Sütun değiştir.

---

## “Özdeğerleri bulun”

$$\det(\lambda I-A)=0$$

2×2 ise istersen:

$$\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0$$

---

## “Özvektörleri bulun”

Önce özdeğerler.

Sonra her $\lambda$ için:

$$\boxed{(\lambda I-A)X=0}$$

---

## “Diyagonalleştirin”

1. Özdeğerleri bul.
2. Özvektörleri bul.
3. Özvektörleri sütun yap → $P$.
4. $P^{-1}$ bul.
5. $D=P^{-1}AP$.
6. $P$ sütun sırası ile $D$ özdeğer sırasını eşleştir.

---

## “Vektörler ortogonal mi?”

Nokta çarpımı:

$$u\cdot v$$

$0$ ise evet.

---

## “Ortonormal mi?”

Önce ortogonal mi kontrol et.

Sonra her vektörün uzunluğu $1$ mi bak.

---

## “Ortonormal hale getirin”

Vektörler zaten ortogonalse sadece normalize et:

$$v\to\frac{v}{\|v\|}$$

Ortogonal değillerse önce Gram–Schmidt, sonra normalize.

---

# 23. En sık yapılabilecek hatalar

1. **$I-A$ yapmak.** Özdeğerde gereken:

   $$\boxed{\lambda I-A}$$

2. $\lambda I$ yazarken yalnızca köşegenlerde $\lambda$ olduğunu unutmak:

   $$
   \lambda I=
   \begin{bmatrix}\lambda&0\\0&\lambda\end{bmatrix}
   $$

3. 2×2 determinantta:

   $$ad-bc$$

   işaretini karıştırmak.

4. Özdeğer bulurken determinantı sıfıra eşitlemeyi unutmak.

5. **$\lambda=0$ olamaz sanmak.** Olabilir.

6. **$X=0$'ı özvektör kabul etmek.** Edilemez.

7. Özvektör denkleminde serbest değişkenlerin hepsini bağımsız sanmak. Örneğin $x_1=x_2$ varsa birini seçince diğeri belirlenir.

8. $P$ içine özvektörleri satır olarak koymak. **Sütun olarak koy.**

9. $P$'deki özvektör sırası ile $D$'deki özdeğer sırasını karıştırmak.

10. Ortogonal ile ortonormali aynı sanmak.

11. Gram–Schmidt'te:

    $$\frac{a_2\cdot b_1}{b_1\cdot b_1}$$

    oranını bulduktan sonra $b_1$ ile çarpmayı unutmak.

12. Normalize ederken vektörü **kendi uzunluğuna bölmek** yerine uzunluğu yanlış hesaplamak.

13. Matris çarpımında satır × sütun yaptıktan sonra terimleri toplamayı unutmak.

---

# 24. Son 2 dakikalık ezber değil, yöntem özeti

## Ters

> Determinant sıfır değil → ters var. 2×2 kısa formül veya $[A|I]\to[I|A^{-1}]$.

## Cramer

> Aradığım bilinmeyenin sütununu $B$ ile değiştir, determinantını ana determinanta böl.

## Özdeğer

> $\lambda I-A$ kur, determinantını sıfırla, kökleri bul.

## Özvektör

> Her özdeğeri geri koy, $(\lambda I-A)X=0$ homojen sistemini çöz; sıfır olmayan bir vektör seç.

## Diyagonalizasyon

> Özvektörler $P$'nin sütunları; eşleşen özdeğerler $D$'nin köşegeni; $D=P^{-1}AP$.

## Ortogonal

> Nokta çarpımı 0.

## Ortonormal

> Nokta çarpımı 0 + her uzunluk 1.

## Gram–Schmidt

> İlk vektörü bırak; ikinci vektörün ilk vektör yönündeki payını ikinci vektörden çıkar; sonra normalize et.

---

# 25. Son kontrol — kendine sor

Bu soruların cevabını kağıda bakmadan verebiliyorsan bugün çalıştığımız bölüm iyi durumda:

- $\det(A)=0$ ile ters matris arasında ilişki ne?
- Homojen sistem nedir, trivial çözüm nedir?
- Neden özdeğer bulurken $\det(\lambda I-A)=0$ yapıyoruz?
- Karakteristik polinom ile karakteristik eşitlik arasındaki fark ne?
- Özdeğer $0$ olabilir mi?
- Sıfır vektörü özvektör olabilir mi?
- 2×2 ters matrisin kısa formülü ne?
- Cramer'da $A_x$ nasıl hazırlanır?
- Özdeğerden özvektöre nasıl geçilir?
- $P$ matrisi nasıl hazırlanır?
- Ortogonal ile ortonormal arasındaki fark ne?
- Gram–Schmidt ikinci vektöre ne yapıyor?

> **Sınavda takılırsan formülü ezberden hatırlamaya çalışmak yerine yöntemin amacını hatırla.** Bugün gördüğümüz konuların çoğu aynı birkaç fikrin farklı kullanımı: determinant, homojen sistem, nokta çarpımı ve matris çarpımı.