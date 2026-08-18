const {ins,NAV}=require('./_ins.js');
ins('0011-rc-devreleri.html',NAV,`<h2>13. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Kapasitör gerilimi yerine akımını sürekli sanmak.</b> Sıçrayamayan şey <b>v<sub>C</sub></b>&rsquo;dir. Kapasitör <b>akımı</b> anahtar anında pekâlâ sıçrar — hatta genelde en büyük değerini tam o anda alır. (RL&rsquo;de tam tersi: akım sürekli, gerilim sıçrayabilir.)</div>
<div class="mistake"><b>2 — τ&rsquo;yu anahtar öncesi devreden hesaplamak.</b> Geçici rejimi <b>t&gt;0 devresi</b> yönetir. Kapasitörü geçici olarak söküp, bağımsız kaynakları söndürüp, <b>onun uçlarından</b> bakarak R<sub>TH</sub> bul.</div>
<div class="mistake"><b>3 — &ldquo;Açık devre&rdquo;yi &ldquo;gerilim yok&rdquo; sanmak.</b> DC kararlı durumda kapasitörün <b>akımı</b> sıfırdır ama uçlarında <b>büyük bir gerilim olabilir</b>. Zaten aradığımız v<sub>C</sub>(∞) çoğu zaman tam olarak budur.</div>
<div class="mistake"><b>4 — Genel formülü ters yazmak.</b> Doğru sıra: <code>v<sub>C</sub>(t) = v<sub>C</sub>(∞) + [v<sub>C</sub>(0⁺) − v<sub>C</sub>(∞)]e<sup>−t/τ</sup></code>. Yani <b>son değer + (başlangıç − son) × üstel</b>. Ters yazarsan t=0 kontrolünde hemen yakalarsın.</div>
<h2>14. Sınav refleksi</h2>
<div class="reflex"><b>Formülü ezberleme, mantığını tut:</b> Üstel geçiş her zaman &ldquo;<b>şu an neredeyim</b>&rdquo; ile &ldquo;<b>nereye gidiyorum</b>&rdquo; arasındadır. Son değerden başla, aradaki farkı ekle, farkı zamanla erit. Bu yapı RC, RL, hatta ısınma/soğuma gibi tüm birinci derece sistemlerde aynıdır.</div>
<div class="reflex"><b>İki saniyelik kontrol:</b> t=0 koy → v<sub>C</sub>(0⁺) çıkmalı. t→∞ koy → v<sub>C</sub>(∞) çıkmalı. Bu iki kontrolü yapmadan soruyu bitirme.</div>
<div class="reflex"><b>Enerji sorulursa:</b> <code>w<sub>C</sub> = ½Cv<sub>C</sub>²</code>. Dikkat: <b>gerilimin karesi</b> — akım değil. (Bobinde ise <code>w<sub>L</sub>=½Li<sub>L</sub>²</code>, akımın karesi.)</div>
<details class="check"><summary>Mini kontrol — 3 soru (cevaplamadan açma)</summary>
<p><b>a)</b> 24 V kaynak, 6 Ω ile bir kapasitöre bağlı; ona paralel 12 Ω var. Anahtar uzun süre kapalı kaldıktan sonra açılıyor ve kapasitör yalnız 12 Ω üzerinden boşalıyor. C=100 µF. v<sub>C</sub>(0⁺), τ ve v<sub>C</sub>(t)?</p>
<p><b>b)</b> Yukarıdaki kapasitörde başlangıçta depolanan enerji kaç J?</p>
<p><b>c)</b> Bir kapasitör 5τ süre sonra pratikte ne durumdadır?</p>
<hr>
<p><b>a)</b> <b>t=0⁻:</b> kararlı hal, C açık devre → akım 6 Ω ve 12 Ω üzerinden akar → gerilim bölücü: <code>v<sub>C</sub>(0⁻)=24×12/(6+12)=<b>16 V</b></code>. Süreklilik → <code>v<sub>C</sub>(0⁺)=<b>16 V</b></code>.<br>
<b>t&gt;0:</b> kaynak koptu, C yalnız 12 Ω görüyor → <code>τ=12×100µF=<b>1.2 ms</b></code>.<br>
<b>Son değer</b> v<sub>C</sub>(∞)=0 (kaynak yok) → <code>v<sub>C</sub>(t)=<b>16e<sup>−t/0.0012</sup> V</b></code>.</p>
<p><b>b)</b> <code>w=½Cv²=½×100×10⁻⁶×16²=½×100×10⁻⁶×256=<b>0.0128 J</b></code> (12.8 mJ).</p>
<p><b>c)</b> Geçişin <b>%99.3</b>&rsquo;ü tamamlanmıştır; pratikte yeni kararlı durumda kabul edilir. Sınavda &ldquo;uzun süre sonra&rdquo; ifadesi gördüğünde doğrudan t→∞ fotoğrafını çiz.</p>
</details>`);
