const {ins,NAV}=require('./_ins.js');
ins('0010-ideal-opamp.html',NAV,`<h2>9. Kazanç formülleri nereden geliyor? — KCL ile türet</h2>
<div class="why"><b>Formülü ezberleme, iki kuraldan üret.</b> Elinde sadece şunlar var: <code>i₊=i₋=0</code> (girişlerden akım geçmez) ve <code>v₊=v₋</code> (negatif geri besleme varsa). Geri kalan tamamen KCL.</div>
<p><b>Eviren yükselteç.</b> Giriş V<sub>i</sub> → R<sub>1</sub> → (−) ucu; R<sub>2</sub> çıkıştan (−) ucuna geri besleme; (+) ucu toprakta.</p>
<div class="steps"><ol>
<li>(+) toprakta olduğu için <code>v₊=0</code>. Sanal kısa devre → <code>v₋=0</code>. <i>(Buna &ldquo;sanal toprak&rdquo; denir: gerçekten toprağa bağlı değil, ama 0 V&rsquo;ta duruyor.)</i></li>
<li>(−) düğümüne KCL yaz. Bu düğüme üç yol bağlı: R<sub>1</sub>, R<sub>2</sub> ve op-amp girişi. Ama <b>girişten akım geçmiyor</b>, o dal denklemde yok.</li>
<li>Kalan iki dal birbirine eşit olmak zorunda: R<sub>1</sub>&rsquo;den gelen akımın <b>tamamı</b> R<sub>2</sub>&rsquo;ye gider.</li>
</ol></div>
<div class="eq"><code>(V<sub>i</sub> − 0)/R<sub>1</sub> = (0 − V<sub>out</sub>)/R<sub>2</sub></code> &nbsp;→&nbsp; <code>A<sub>v</sub> = V<sub>out</sub>/V<sub>i</sub> = −R<sub>2</sub>/R<sub>1</sub></code></div>
<p><b>Evirmeyen yükselteç.</b> V<sub>i</sub> doğrudan (+) ucuna; (−) ucu R<sub>1</sub> ile toprağa ve R<sub>2</sub> ile çıkışa bağlı.</p>
<div class="steps"><ol>
<li><code>v₊=V<sub>i</sub></code> → sanal kısa devre → <code>v₋=V<sub>i</sub></code>. <i>Bu sefer sanal toprak yok; (−) ucu V<sub>i</sub>&rsquo;de duruyor.</i></li>
<li>(−) düğümüne KCL: R<sub>1</sub> üzerinden toprağa giden akım = R<sub>2</sub> üzerinden çıkıştan gelen akım.</li>
</ol></div>
<div class="eq"><code>(V<sub>i</sub> − 0)/R<sub>1</sub> = (V<sub>out</sub> − V<sub>i</sub>)/R<sub>2</sub></code> &nbsp;→&nbsp; <code>A<sub>v</sub> = 1 + R<sub>2</sub>/R<sub>1</sub></code></div>
<div class="see"><b>İki formülü nasıl ayırt edersin?</b> Girişin <b>hangi uca</b> bağlandığına bak. Giriş <b>(−)</b> ucuna direnç üzerinden geliyorsa <b>eviren</b> (sonuç negatif, &ldquo;1+&rdquo; yok). Giriş <b>(+)</b> ucuna doğrudan geliyorsa <b>evirmeyen</b> (sonuç pozitif, &ldquo;1+&rdquo; var). Evirmeyen kazanç hiçbir zaman 1&rsquo;in altına inemez.</div>
<h2>10. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — İki formülü karıştırmak.</b> Eviren <code>−R<sub>2</sub>/R<sub>1</sub></code>, evirmeyen <code>1+R<sub>2</sub>/R<sub>1</sub></code>. &ldquo;1+&rdquo; yalnızca evirmeyende vardır. Karıştırdığını anlamanın yolu: evirmeyen devrede kazanç <b>1&rsquo;den küçük çıkıyorsa</b> kesin hata var.</div>
<div class="mistake"><b>2 — Sanal kısa devreyi gerçek kısa devre sanmak.</b> v₊ ile v₋ <b>eşittir</b> ama aralarında tel <b>yoktur</b>. Bu yüzden o iki uç arasından akım akmaz. Eşitliği sağlayan şey tel değil, <b>negatif geri beslemenin</b> çıkışı sürekli ayarlamasıdır.</div>
<div class="mistake"><b>3 — Giriş uçlarından akım geçirmek.</b> <code>i₊=i₋=0</code>. Bu yüzden (−) düğümündeki KCL&rsquo;de yalnızca <b>dirençlerin</b> akımları vardır. Op-amp girişine giden bir akım terimi yazarsan denklem baştan yanlıştır.</div>
<div class="mistake"><b>4 — Doyumu unutmak.</b> Çıkış, besleme gerilimlerini (ör. ±15 V) <b>aşamaz</b>. Hesap −20 V veriyorsa gerçek çıkış <b>−15 V</b>&rsquo;te takılır. Soruda besleme değeri veriliyorsa bu bir uyarıdır: mutlaka kontrol et.</div>
<h2>11. Sınav refleksi</h2>
<div class="reflex"><b>Her op-amp sorusunda ilk üç hamle:</b> (1) Geri besleme <b>(−)</b> uca mı gidiyor? (Evetse sanal kısa devre geçerli.) (2) <code>v₊</code> kaç volt? (Toprak mı, V<sub>i</sub> mi?) (3) <code>v₋=v₊</code> yaz, sonra <b>(−) düğümüne KCL</b>. Bu üç adım tüm temel devreleri çözer, formül ezberine gerek kalmaz.</div>
<details class="check"><summary>Mini kontrol — 3 soru (cevaplamadan açma)</summary>
<p><b>a)</b> Eviren devrede R<sub>1</sub>=5 kΩ, R<sub>2</sub>=25 kΩ, V<sub>i</sub>=1.2 V. Kazanç, çıkış ve R<sub>1</sub>&rsquo;den geçen akım?</p>
<p><b>b)</b> Evirmeyen devrede R<sub>1</sub>=3 kΩ, R<sub>2</sub>=9 kΩ, V<sub>i</sub>=2 V, besleme ±15 V. Çıkış?</p>
<p><b>c)</b> Aynı evirmeyen devrede V<sub>i</sub>=5 V olsaydı çıkış ne olurdu?</p>
<hr>
<p><b>a)</b> <code>A<sub>v</sub>=−25/5=<b>−5</b></code> → <code>V<sub>out</sub>=−5×1.2=<b>−6 V</b></code>.<br>
Akım: v₋=0 (sanal toprak) olduğu için R<sub>1</sub>&rsquo;in uçları arasındaki fark tam V<sub>i</sub>: <code>I=1.2/5000=<b>0.24 mA</b></code>. Bu akımın tamamı R<sub>2</sub>&rsquo;den geçer.</p>
<p><b>b)</b> <code>A<sub>v</sub>=1+9/3=<b>4</b></code> → <code>V<sub>out</sub>=4×2=<b>8 V</b></code>. 8 V &lt; 15 V olduğu için doyum yok, geçerli.</p>
<p><b>c)</b> Hesap <code>4×5=20 V</code> verir, ama besleme <b>+15 V</b>. Op-amp bunu üretemez → <b>V<sub>out</sub>=+15 V</b>&rsquo;te <b>doyuma girer</b>. Devre artık doğrusal çalışmıyordur ve <code>v₊=v₋</code> varsayımı da bu durumda geçersizdir.</p>
</details>`);
