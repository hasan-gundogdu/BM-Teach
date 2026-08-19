# Lineer Cebir — Final Quick Tekrar Ek: Kofaktör, Determinant ve Adjoint ile Ters

> Bu dosya `LineerCebir-Final-Quick-Tekrar.md` notunun ekidir. Amaç: **kofaktör açılımıyla determinant** ve **adjoint ile ters matris** yöntemlerini sınav öncesi hızlıca hatırlamak.

---

# 1. Kofaktör neydi?

Bir matris elemanı `a_ij` için önce o elemanın bulunduğu **satırı ve sütunu sil**.

Geriye kalan küçük determinant, o elemanın **minörü**dür:

$$M_{ij}$$

Kofaktör ise:

$$\boxed{C_{ij}=(-1)^{i+j}M_{ij}}$$

3×3 için işaret tablosu:

$$
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}
$$

Yani işaretleri ezberlemek yerine bu tabloyu hatırla.

---

# 2. Kofaktör açılımıyla determinant bulma

3×3 bir matrisin determinantını **herhangi bir satır veya sütundan** kofaktör açılımıyla bulabilirsin.

Örneğin ilk satırdan:

$$
\boxed{\det(A)=a_{11}C_{11}+a_{12}C_{12}+a_{13}C_{13}}
$$

İşaretleri açık yazarsak:

$$
\det(A)=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}
$$

## Sınavda pratik seçim

**En çok sıfır bulunan satır veya sütundan açılım yap.**

Çünkü sıfırla çarpılan kofaktörleri hesaplamana gerek kalmaz.

---

# 3. Kofaktör açılımı örneği

Şu matrisi alalım:

$$
A=
\begin{bmatrix}
1&2&0\\
3&4&5\\
0&6&7
\end{bmatrix}
$$

İlk satırda bir sıfır var; ilk satırdan açmak mantıklı:

$$
\det(A)
=1\cdot C_{11}+2\cdot C_{12}+0\cdot C_{13}
$$

## `C11`

1. satır ve 1. sütunu sil:

$$
M_{11}=
\begin{vmatrix}
4&5\\
6&7
\end{vmatrix}
=4\cdot7-5\cdot6
=28-30=-2
$$

İşaret `+`:

$$C_{11}=-2$$

## `C12`

1. satır ve 2. sütunu sil:

$$
M_{12}=
\begin{vmatrix}
3&5\\
0&7
\end{vmatrix}
=3\cdot7-5\cdot0
=21
$$

Ama `(1,2)` konumunun işareti `-`:

$$C_{12}=-21$$

Dolayısıyla:

$$
\det(A)=1(-2)+2(-21)+0
$$

$$
\boxed{\det(A)=-44}
$$

> Dikkat: `C12` zaten işareti içerir. `a12*C12` yazıyorsan tekrar eksi koyma.

---

# 4. Adjoint matris nedir?

Adjoint ile ters bulmak için önce matrisin **bütün kofaktörlerini** hesaplarız.

Bunları aynı konumlarına yazarak **kofaktör matrisi** oluştururuz:

$$
C=
\begin{bmatrix}
C_{11}&C_{12}&\cdots\\
C_{21}&C_{22}&\cdots\\
\vdots&\vdots&\ddots
\end{bmatrix}
$$

Sonra bu matrisin **transpozunu** alırız:

$$\boxed{\operatorname{adj}(A)=C^T}$$

Yani:

> **Kofaktörleri bul → matrise koy → satırlarla sütunları değiştir = adjoint.**

---

# 5. Adjoint ile ters matris

Ana formül:

$$
\boxed{A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A)}
$$

Şart:

$$\boxed{\det(A)\neq0}$$

Eğer determinant `0` ise ters matris yoktur.

---

# 6. Aynı Quick Tekrar ana matrisiyle adjoint yöntemi

Ana quick tekrardaki matris:

$$
A=
\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
$$

Önce determinant:

$$
\det(A)=4\cdot3-1\cdot2=10
$$

## 6.1 Kofaktör matrisi

2×2 için kofaktörler:

$$
C_{11}=+3
$$

$$
C_{12}=-2
$$

$$
C_{21}=-1
$$

$$
C_{22}=+4
$$

Dolayısıyla:

$$
C=
\begin{bmatrix}
3&-2\\
-1&4
\end{bmatrix}
$$

## 6.2 Transpoz al → adjoint

$$
\operatorname{adj}(A)=C^T
$$

$$
\boxed{
\operatorname{adj}(A)=
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}}
$$

## 6.3 Determinanta böl

$$
A^{-1}
=\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}
$$

$$
\boxed{
A^{-1}
=\frac1{10}
\begin{bmatrix}
3&-1\\
-2&4
\end{bmatrix}}
$$

Bu sonuç ana Quick Tekrar'da:

- Gauss–Jordan ile,
- 2×2 kısa formülle

bulduğumuz ters matrisle **aynıdır**.

---

# 7. Aslında 2×2 ters kısa formül nereden geliyor?

Genel 2×2 matris:

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
$$

Kofaktör matrisi:

$$
C=
\begin{bmatrix}
d&-c\\
-b&a
\end{bmatrix}
$$

Transpoz:

$$
\operatorname{adj}(A)=
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
$$

Sonra:

$$
A^{-1}=\frac1{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
$$

Yani ezberlediğimiz 2×2 kısa ters formülü aslında **adjoint yönteminin 2×2 için sadeleşmiş hali**.

---

# 8. Kofaktör nerelerde kullanılıyor?

Kofaktörü iki ana yerde hatırla:

## 1. Determinant bulmak

Bir satır veya sütundan kofaktör açılımı:

$$
\det(A)=\sum a_{ij}C_{ij}
$$

## 2. Ters matris bulmak

Bütün kofaktörleri hesapla:

$$C\to C^T=\operatorname{adj}(A)$$

sonra:

$$
A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A)
$$

---

# 9. Sınavda yöntem seçme

## “Determinantı kofaktör açılımıyla bulun”

1. En çok sıfır olan satır/sütunu seç.
2. Her eleman için satır+sütunu sil → minörü bul.
3. `+ - + / - + - / + - +` işaretini uygula.
4. Eleman × kofaktörleri topla.

## “Adjoint yöntemiyle tersini bulun”

1. `det(A)` bul ve `0` olmadığını kontrol et.
2. **Bütün** kofaktörleri bul.
3. Kofaktör matrisini oluştur.
4. Transpoz al → `adj(A)`.
5. `1/det(A)` ile çarp.

---

# 10. En sık hata

- **Minör ile kofaktörü karıştırma.** Kofaktör işareti de içerir.
- `(+ - + / - + - / + - +)` işaret düzenini unutma.
- Determinant açılımında mümkünse sıfırlı satır/sütunu seç.
- Adjoint, kofaktör matrisinin kendisi değil; **transpozesidir**.
- `1/det(A)` ile çarpmayı unutma.
- `det(A)=0` ise adjoint hesaplanabilir ama `A^{-1}` formülünde bölme yapılamaz; ters matris yoktur.

---

# 11. Son 20 saniyelik hatırlatma

**Kofaktörle determinant:**

> Satır/sütun seç → minörleri çıkar → işaretleri uygula → elemanlarla çarp → topla.

**Adjoint ile ters:**

> Bütün kofaktörler → kofaktör matrisi → transpoz = adjoint → `1/det(A)` ile çarp.
