const {ins,NAV}=require('./_ins.js');
ins('0002-devre-elemanlari-kaynak-donusumu.html',NAV,`<h2>7. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Telle ayrılmış iki noktayı ayrı düğüm sanmak.</b> Aralarında <b>sadece tel</b> olan noktalar <b>tek bir düğümdür</b>. Şemada uzak çizilmiş olmaları hiçbir şey değiştirmez. Düğüm sayarken önce “hangi noktalar telle birbirine bağlı?” diye grupla, sonra say.</div>
<div class="mistake"><b>2 — Kısa devrede akımı sıfır sanmak.</b> Kısa devrede <b>gerilim</b> sıfırdır, akım değil — genelde tam tersine büyüktür. Açık devrede ise <b>akım</b> sıfırdır, gerilim değil. Bu ikisi sürekli karıştırılır; kâğıda “kısa→V=0, açık→I=0” diye yaz.</div>
<div class="mistake"><b>3 — Kaynak dönüşümünde direnci yanlış yere koymak.</b> Gerilim kaynağında R <b>seri</b>, akım kaynağında R <b>paralel</b>. Değeri aynı kalır, sadece yeri değişir. Ayrıca <b>ideal</b> (seri direnci olmayan) bir gerilim kaynağı dönüştürülemez.</div>
<div class="mistake"><b>4 — Bağımlı kaynağı bağımsız gibi işlemek.</b> Bağımlı kaynağın değeri bir <b>formüldür</b> (ör. 2I<sub>x</sub>), sabit sayı değil. Süperpozisyonda veya R<sub>TH</sub> bulurken <b>asla söndürülmez</b>.</div>
<h2>8. Sınav refleksi</h2>
<div class="reflex"><b>Devreye ilk baktığında 4 şeyi işaretle:</b> (1) düğümleri harflendir <span class="nd">A</span> <span class="nd">B</span> <span class="nd">C</span>, (2) referans/toprak nerede, (3) kaç bağımsız kaynak var, (4) bağımlı kaynak var mı. Bu 20 saniye, sonraki 20 dakikayı kurtarır.</div>
<div class="reflex"><b>Kaynak dönüşümü ne zaman işine yarar?</b> Devrede hem gerilim hem akım kaynağı varsa ve <b>hepsini aynı türe çevirirsen</b> devre çoğu zaman tek bir seri veya paralel zincire iner. Thevenin/Norton sorularında bu kısayolu ara.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> Bir devrede 7 kol ve 5 düğüm var. Kaç bağımsız çevre vardır?</p>
<p><b>b)</b> 24 V'luk kaynak 8 Ω ile seri. Norton (akım kaynaklı) eşdeğerine çevir.</p>
<p><b>c)</b> İdeal bir gerilim kaynağının uçları kısa devre edilirse ne olur? Peki ideal akım kaynağının uçları açık bırakılırsa?</p>
<hr>
<p><b>a)</b> b=l+n−1 → 7=l+5−1 → <b>l=3</b> bağımsız çevre.</p>
<p><b>b)</b> I<sub>s</sub>=V<sub>s</sub>/R=24/8=<b>3 A</b>, direnç <b>8 Ω paralel</b> olarak kalır.</p>
<p><b>c)</b> İdeal gerilim kaynağı kısa devre edilirse <b>fiziksel çelişki</b> doğar (V=0 dayatılırken kaynak V=24 dayatıyor); teoride sonsuz akım, pratikte kaynak yanar. İdeal akım kaynağı açık bırakılırsa yine çelişki: akımın gidecek yolu yok, uçlarda teorik olarak sonsuz gerilim oluşur. Sınavda bu iki durum “tuzak” olarak sorulabilir.</p>
</details>`);
