const {ins,NAV}=require('./_ins.js');
ins('0003-ohm-kirchhoff-seri-paralel.html',NAV,`<h2>10. Seri mi paralel mi? — düğüm testi</h2>
<div class="see"><b>Şekle değil, düğüme bak.</b> İki elemanın yan yana ya da alt alta çizilmiş olması hiçbir şey söylemez. Karar için tek soru sor: <b>uçları hangi düğümlere bağlı?</b></div>
<table>
<tr><th>İlişki</th><th>Kesin test</th><th>Sonuç</th></tr>
<tr><td><b>Paralel</b></td><td>Her iki elemanın <b>iki ucu da aynı iki düğüme</b> bağlı (biri <span class="nd">A</span>, diğeri <span class="nd">B</span>)</td><td>Üzerlerindeki <b>gerilim aynı</b>, akım bölünür</td></tr>
<tr><td><b>Seri</b></td><td>İki elemanın paylaştığı ortak düğümden <b>başka hiçbir kol çıkmıyor</b></td><td>İçlerinden <b>aynı akım</b> geçer, gerilim bölünür</td></tr>
</table>
<div class="why"><b>Neden ortak düğümden kol çıkmamalı?</b> Çıksaydı akımın bir kısmı oraya kaçardı ve iki elemandan <b>farklı</b> akımlar geçerdi — serilik tanımı bozulurdu. Serilik “aynı akım” demektir; bunu garanti eden şey de o düğümde başka çıkış olmamasıdır.</div>
<div class="mistake"><b>Klasik tuzak:</b> Ortada bir düğüm var, oradan üçüncü bir dal çıkıyor ama şemada ince bir çizgi olduğu için gözden kaçıyor. Sen iki direnci seri sanıp topluyorsun — sonuç baştan yanlış. <b>Sadeleştirmeden önce her ortak düğüme bak: kaç kol çıkıyor?</b></div>
<h2>11. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Aynı akımı iki kez saymak.</b> Üstteki düğümden gelen 8 A aşağıda 3 A ve 5 A olarak bölündüyse, 5 A'lık direnç için V=I·R yazarken <b>sadece 5 A</b> kullanılır. 8 A'yı da eklemek aynı akımı iki kez saymaktır. <b>V=IR her zaman o direncin kendi akımıyla yazılır.</b></div>
<div class="mistake"><b>2 — Paralel eşdeğerde tersini almayı unutmak.</b> 1/R<sub>eş</sub>=1/6+1/12=3/12 bulup <b>R<sub>eş</sub>=0.25</b> demek yaygın hata; doğrusu tersini almak: <b>R<sub>eş</sub>=4 Ω</b>. Kontrol: paralel eşdeğer <b>her zaman en küçük dirençten küçüktür</b>.</div>
<div class="mistake"><b>3 — Akım bölücüde payı şaşırmak.</b> R<sub>1</sub>'in akımını bulurken paya <b>R<sub>2</sub></b> gelir (karşı direnç). Gerilim bölücünün tam tersi. Karıştırıyorsan ezberleme: önce paralel gerilimi bul, sonra I=V/R yap — hiç risk yok.</div>
<div class="mistake"><b>4 — Gereksiz yere tüm devreyi sadeleştirmek.</b> Soru tek bir direncin gerilimini istiyorsa bütün eşdeğer direnci bulmak zaman kaybı olabilir; bazen tek bir KVL turu yeter.</div>
<h2>12. Sınav refleksi</h2>
<div class="reflex"><b>Sadeleştirme sırası:</b> Yükten/aranan elemandan <b>en uzaktaki</b> ilişkiden başla, içten dışa gel. Her adımdan sonra <b>devreyi yeniden çiz</b> — bir önceki adımda görünmeyen yeni bir seri/paralel ilişki ortaya çıkar.</div>
<div class="reflex"><b>Bitince mantık süzgeci:</b> Paralel eşdeğer en küçük dirençten küçük mü? Gerilim bölücüde büyük direnç büyük payı mı aldı? Akım bölücüde küçük direnç çok akımı mı çekti? Üçü de tutuyorsa sonuç büyük ihtimalle doğru.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> 6 Ω ve 3 Ω paralel, bu grup 8 Ω ile seri. 36 V kaynağa bağlı. Toplam akım ve 6 Ω'dan geçen akım?</p>
<p><b>b)</b> Bir düğüme 10 A giriyor, iki koldan çıkıyor. Kollar 4 Ω ve 6 Ω. Her koldan kaç A geçer?</p>
<p><b>c)</b> İki direnç ortak bir düğümde birleşiyor ve o düğümden üçüncü bir dal daha çıkıyor. Bu iki direnç seri midir?</p>
<hr>
<p><b>a)</b> 6∥3=(6·3)/9=2 Ω. Toplam R=8+2=10 Ω. I<sub>toplam</sub>=36/10=<b>3.6 A</b>. Paralel grubun gerilimi: 3.6×2=7.2 V → I<sub>6Ω</sub>=7.2/6=<b>1.2 A</b>. (Kontrol: I<sub>3Ω</sub>=7.2/3=2.4 A, toplam 3.6 ✅)</p>
<p><b>b)</b> Akım bölücü, paya karşı direnç: I<sub>4Ω</sub>=10×6/10=<b>6 A</b>, I<sub>6Ω</sub>=10×4/10=<b>4 A</b>. Küçük direnç çok akım çekti ✅ Toplam 10 ✅</p>
<p><b>c)</b> <b>Hayır.</b> Ortak düğümden başka kol çıktığı için akımın bir kısmı oraya kaçar; iki dirençten farklı akımlar geçer. Serilik bozulur — toplayamazsın.</p>
</details>`);
