const {ins,NAV}=require('./_ins.js');
ins('0004-dugum-gerilimleri-yontemi.html',NAV,`<h2>8. Baştan sona sayısal örnek</h2>
<div class="see"><b>Devrede ne görüyorum?</b> 12 V kaynak, 2 Ω üzerinden <span class="nd">A</span> düğümüne geliyor. <span class="nd">A</span> ile <span class="nd">B</span> arasında 4 Ω var. <span class="nd">B</span>'den referansa 4 Ω. Ayrıca <span class="nd">B</span> düğümüne dışarıdan 2 A akım kaynağı giriyor. Referans alt tel, 0 V.</div>
<p><b>Ne verilmiş?</b> Bütün direnç değerleri, kaynak gerilimi ve kaynak akımı. <b>Ne aranıyor?</b> V<sub>A</sub>, V<sub>B</sub> ve 4 Ω'dan referansa geçen akım.</p>
<div class="why"><b>Neden düğüm analizi?</b> Devrede bir akım kaynağı var — akım kaynakları düğüm analizinde <b>doğrudan</b> denkleme girer (bilinen bir terim olarak), oysa çevre analizinde süper çevre gerektirebilirdi. Ayrıca sadece 2 bilinmeyen düğüm var. Düğüm analizi burada daha az iş.</div>
<p><b>Adım 1 — referans ve isimlendirme.</b> Alt tel referans (0 V). Bilinmeyenler: V<sub>A</sub>, V<sub>B</sub>.</p>
<p><b>Adım 2 — <span class="nd">A</span> düğümüne KCL.</b> “Çıkanlar pozitif” yazalım. A'dan çıkan iki yol var: kaynağa doğru (2 Ω üzerinden) ve B'ye doğru (4 Ω üzerinden):</p>
<div class="eq"><code>(V<sub>A</sub>−12)/2 + (V<sub>A</sub>−V<sub>B</sub>)/4 = 0</code></div>
<p>4 ile çarp: <code>2(V<sub>A</sub>−12) + (V<sub>A</sub>−V<sub>B</sub>) = 0</code> → <code>3V<sub>A</sub> − V<sub>B</sub> = 24</code> &nbsp;<b>(1)</b></p>
<p><b>Adım 3 — <span class="nd">B</span> düğümüne KCL.</b> B'den çıkanlar: A'ya doğru (4 Ω) ve referansa (4 Ω). Akım kaynağı B'ye <b>giriyor</b>, çıkanlar pozitif konvansiyonunda eksi yazılır:</p>
<div class="eq"><code>(V<sub>B</sub>−V<sub>A</sub>)/4 + V<sub>B</sub>/4 − 2 = 0</code></div>
<p>4 ile çarp: <code>(V<sub>B</sub>−V<sub>A</sub>) + V<sub>B</sub> = 8</code> → <code>−V<sub>A</sub> + 2V<sub>B</sub> = 8</code> &nbsp;<b>(2)</b></p>
<p><b>Adım 4 — çöz.</b> (1)'den V<sub>B</sub>=3V<sub>A</sub>−24. (2)'ye koy:</p>
<div class="eq"><code>−V<sub>A</sub> + 2(3V<sub>A</sub>−24) = 8 → 5V<sub>A</sub> = 56 → V<sub>A</sub> = 11.2 V</code></div>
<div class="eq"><code>V<sub>B</sub> = 3(11.2) − 24 = <b>9.6 V</b></code></div>
<p><b>Adım 5 — istenen akım.</b> B'den referansa, 4 Ω üzerinden:</p>
<div class="eq"><code>I = V<sub>B</sub>/4 = 9.6/4 = <b>2.4 A</b></code></div>
<div class="reflex"><b>Doğrulama (her zaman yap):</b> Kaynaktan gelen akım <code>(12−11.2)/2 = 0.4 A</code>. A→B akımı <code>(11.2−9.6)/4 = 0.4 A</code> ✅ (A'da başka kol yok, girenle çıkan eşit). B'ye giren: 0.4 + 2 = 2.4 A, B'den çıkan: 2.4 A ✅ KCL sağlandı.</div>
<h2>9. Sonucun işareti ne söylüyor?</h2>
<div class="see">Düğüm gerilimi <b>negatif</b> çıkarsa hata yok — o düğüm referanstan <b>daha düşük</b> potansiyeldedir. Kol akımı negatif çıkarsa, akım senin (V<sub>baş</sub>−V<sub>son</sub>) sırasıyla varsaydığın yönün <b>tersine</b> akıyordur. İkisi de bilgidir, hata sinyali değil.</div>
<h2>10. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Upstream akımı kola tekrar eklemek.</b> <span class="nd">A</span>'ya yukarıdan 5 A geliyor ve aşağıda iki kola bölünüyorsa, alt koldaki direnç için denklem yazarken 5 A'yı <b>ayrıca terim olarak ekleme</b>. KCL zaten “giren 5 A = çıkanların toplamı” diyerek o bölünmeyi anlatıyor. Her kolun akımı yalnızca <b>kendi iki ucunun gerilim farkı / kendi direnci</b>.</div>
<div class="mistake"><b>2 — Süper düğümde V<sub>1</sub>=V<sub>2</sub> sanmak.</b> İki düğümü KCL <b>sınırı</b> olarak birleştiriyoruz, gerilimlerini değil. Aralarında tam olarak kaynak kadar fark var: V<sub>1</sub>−V<sub>2</sub>=V<sub>s</sub>.</div>
<div class="mistake"><b>3 — Kısıt denklemini unutmak.</b> Süper düğümde tek KCL yetmez; iki bilinmeyen için iki denklem lazım. KCL + kaynak kısıtı.</div>
<div class="mistake"><b>4 — İşaret konvansiyonunu denklem ortasında değiştirmek.</b> “Çıkanlar pozitif” seçtiysen o denklemin <b>sonuna kadar</b> öyle devam et. Akım kaynağı düğüme giriyorsa −I<sub>s</sub>, çıkıyorsa +I<sub>s</sub>.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> <span class="nd">A</span> düğümüne 3 Ω ile 18 V kaynak, ayrıca referansa 6 Ω bağlı. V<sub>A</sub> kaçtır?</p>
<p><b>b)</b> İki bilinmeyen düğüm arasında 6 V'luk ideal kaynak var (+ ucu <span class="nd">1</span>'de). Süper düğümün kısıt denklemi nedir?</p>
<p><b>c)</b> Bir düğüm denkleminde V<sub>C</sub>=−4 V bulundu. Hata mı yaptın?</p>
<hr>
<p><b>a)</b> KCL: (V<sub>A</sub>−18)/3 + V<sub>A</sub>/6 = 0 → 2(V<sub>A</sub>−18)+V<sub>A</sub>=0 → 3V<sub>A</sub>=36 → <b>V<sub>A</sub>=12 V</b>. (Gerilim bölücüyle kontrol: 18·6/9=12 ✅)</p>
<p><b>b)</b> <code>V<sub>1</sub> − V<sub>2</sub> = 6</code>. Artı ucun bulunduğu düğüm denklemde önce yazılır.</p>
<p><b>c)</b> Hayır. <span class="nd">C</span> düğümü referanstan 4 V <b>daha düşük</b> potansiyelde demektir. Devrede akım kaynağı veya ters polariteli kaynak varsa gayet normaldir.</p>
</details>`);
