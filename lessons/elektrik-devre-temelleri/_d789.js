const fs=require('fs');
const {ins,NAV}=require('./_ins.js');

// --- 0007 Thevenin ---
ins('0007-thevenin-teoremi.html',NAV,`<h2>9. Sınav refleksi</h2>
<div class="reflex"><b>Thevenin'i sezgisel tut:</b> Yük, arkasındaki devrenin ne kadar karmaşık olduğunu <b>bilmez</b>. Onun tek gördüğü şey iki uçtan gelen bir gerilim ve bir iç direnç. Thevenin tam olarak bunu yazar: <i>&ldquo;yükün gördüğü devre&rdquo;</i>. Bu yüzden yükü değiştirdiğinde V<sub>TH</sub> ve R<sub>TH</sub> <b>değişmez</b> — sadece yük akımı değişir.</div>
<div class="reflex"><b>Çözüm sırası hiç şaşmaz:</b> (1) yükü çıkar, (2) a-b <b>açık</b> gerilimini bul → V<sub>TH</sub>, (3) bağımsız kaynakları söndür, a-b'den içeri bak → R<sub>TH</sub>, (4) yükü geri bağla, basit seri devrede hesapla. Kaynak söndürdükten sonra <b>devreyi mutlaka yeniden çiz</b> — seri/paralel ilişkileri değişmiştir.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> 24 V kaynak, R<sub>1</sub>=6 Ω ile <span class="nd">A</span>'ya; <span class="nd">A</span>'dan referansa R<sub>2</sub>=12 Ω; <span class="nd">A</span>'dan R<sub>3</sub>=4 Ω ile a ucuna; b ucu referans. V<sub>TH</sub> ve R<sub>TH</sub>?</p>
<p><b>b)</b> a-b açıkken R<sub>3</sub>'ten neden akım geçmiyor?</p>
<p><b>c)</b> R<sub>TH</sub> bulurken 24 V kaynağı açık devre yapsaydın ne olurdu?</p>
<hr>
<p><b>a)</b> a-b açık → R<sub>3</sub>'ten akım yok → V<sub>a</sub>=V<sub>A</sub>. Gerilim bölücü: <code>V<sub>TH</sub> = 24×12/(6+12) = <b>16 V</b></code>.<br>
R<sub>TH</sub>: kaynak kısa devre → R<sub>1</sub> ∥ R<sub>2</sub> = (6×12)/18 = 4 Ω, buna R<sub>3</sub> seri → <code>R<sub>TH</sub> = 4+4 = <b>8 Ω</b></code>.</p>
<p><b>b)</b> Akımın <b>kapalı bir yola</b> ihtiyacı var. a-b açıkken R<sub>3</sub>'ün ucu havada; devre tamamlanmadığı için akım geçemez. Akım 0 olunca <code>V=I·R=0</code> → R<sub>3</sub> üzerinde düşüm yok, bu yüzden a ucu A düğümüyle <b>aynı gerilimde</b>.</p>
<p><b>c)</b> Yanlış olurdu. Gerilim kaynağı söndürülürken <b>kısa devre (tel)</b> yapılır. Açık devre yapsaydın R<sub>1</sub> kolu tamamen kopardı ve R<sub>TH</sub>=R<sub>3</sub>+R<sub>2</sub>=16 Ω gibi hatalı bir sonuç çıkardı.</p>
</details>`);

// --- 0008 Norton ---
const svg=fs.readFileSync('_svg8.txt','utf8').replace(/\n/g,'');
const cap='<div class="cap">Aynı a-b portundan bakılan <b>iki farklı yazım</b>. Port <b>açık</b> bırakılınca ölçülen gerilim V<sub>TH</sub>, port <b>kısa</b> devre edilince geçen akım I<sub>N</sub>. Direnç ikisinde de aynı, sadece yeri seri↔paralel değişir.</div>';
ins('0008-norton-teoremi.html',NAV,`<h2>8. Thevenin ve Norton yan yana</h2>
<div class="see"><b>İki devre de aynı şeyi anlatır:</b> yükün gördüğü kaynak ve iç direnç. Fark sadece <b>yazım biçimi</b>: biri gerilim kaynağı + seri direnç, diğeri akım kaynağı + paralel direnç.</div>
${svg.replace('</svg></div>','</svg>'+cap+'</div>')}
<div class="why"><b>Neden aynı port iki farklı ölçüm veriyor?</b> Çünkü ikisi devrenin <b>iki uç durumunu</b> ölçer. Portu açık bırakırsan akım sıfırdır ve iç dirençte düşüm olmaz — dışarıdan ölçtüğün gerilim doğrudan V<sub>TH</sub>'dir. Portu kısa devre edersen gerilim sıfıra iner ve kaynağın verebileceği <b>en büyük akım</b> akar; bu da I<sub>N</sub>'dir. İkisinin oranı zaten iç direnci verir: <code>R = V<sub>TH</sub>/I<sub>N</sub></code>.</div>
<h2>9. Sınav refleksi</h2>
<div class="reflex"><b>Hangisini seçeceksin?</b> Yük <b>seri</b> bir zincire giriyorsa Thevenin daha rahat; yük <b>paralel</b> kollardan biriyse Norton daha rahat. Ama hangisini bulursan bul, <b>tek satırda</b> diğerine geçebilirsin: <code>I<sub>N</sub>=V<sub>TH</sub>/R<sub>TH</sub></code>. Sınavda &ldquo;Norton isteniyor&rdquo; diyorsa ve Thevenin'i bulmak daha kolaysa — önce Thevenin bul, sonra çevir. Bu tamamen geçerli bir çözümdür.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> Bir devrenin V<sub>TH</sub>=16 V, R<sub>TH</sub>=8 Ω. Norton eşdeğeri nedir?</p>
<p><b>b)</b> Bu Norton eşdeğerine R<sub>L</sub>=24 Ω bağlanırsa yük akımı kaç A? İki yöntemle bul.</p>
<p><b>c)</b> a-b kısa devre edildiğinde R<sub>N</sub> üzerinden akım geçer mi?</p>
<hr>
<p><b>a)</b> <code>R<sub>N</sub>=R<sub>TH</sub>=<b>8 Ω</b></code>, <code>I<sub>N</sub>=16/8=<b>2 A</b></code>.</p>
<p><b>b) Norton (akım bölücü, paya karşı direnç):</b> <code>I<sub>L</sub>=2×8/(8+24)=2×8/32=<b>0.5 A</b></code>.<br>
<b>Thevenin (seri devre):</b> <code>I<sub>L</sub>=16/(8+24)=16/32=<b>0.5 A</b></code> ✅ aynı.</p>
<p><b>c)</b> <b>Hayır.</b> Kısa devre teli R<sub>N</sub>'ye paralel olur ve direnci 0'dır; tüm akım telden geçer. Bu yüzden kısa devre akımı tam olarak <b>I<sub>N</sub></b>'dir — kaynağın verdiği akımın tamamı. R<sub>N</sub> baypas edilmiş olur.</p>
</details>`);

// --- 0009 Maks guc ---
ins('0009-maksimum-guc-transferi.html',NAV,`<h2>10. Sınav refleksi</h2>
<div class="reflex"><b>Soru &ldquo;maksimum güç&rdquo; diyorsa refleks üç adım:</b> (1) Yükü çıkar, <b>Thevenin</b> bul. (2) <code>R<sub>L</sub>=R<sub>TH</sub></code> yaz. (3) <code>P<sub>max</sub>=V<sub>TH</sub>²/(4R<sub>TH</sub>)</code>. Devre ne kadar karmaşık olursa olsun bu üç adım değişmez — zor kısım her zaman 1. adımdır.</div>
<div class="reflex"><b>Formülü unutursan türet:</b> <code>I=V<sub>TH</sub>/(R<sub>TH</sub>+R<sub>L</sub>)</code>, <code>P=I²R<sub>L</sub></code>. R<sub>L</sub>=R<sub>TH</sub> koyarsan <code>I=V<sub>TH</sub>/2R<sub>TH</sub></code> ve <code>P=(V<sub>TH</sub>²/4R<sub>TH</sub>²)·R<sub>TH</sub>=V<sub>TH</sub>²/4R<sub>TH</sub></code>. Ezber gerekmez.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> V<sub>TH</sub>=16 V, R<sub>TH</sub>=8 Ω. Maksimum güç için R<sub>L</sub> kaç olmalı, P<sub>max</sub> kaç W?</p>
<p><b>b)</b> Aynı devrede R<sub>L</sub>=24 Ω bağlanırsa güç kaç W? Maksimumdan ne kadar az?</p>
<p><b>c)</b> Maksimum güç anında verim neden %50'dir, bu iyi bir şey mi?</p>
<hr>
<p><b>a)</b> <code>R<sub>L</sub>=R<sub>TH</sub>=<b>8 Ω</b></code>, <code>P<sub>max</sub>=16²/(4×8)=256/32=<b>8 W</b></code>.</p>
<p><b>b)</b> <code>I=16/(8+24)=0.5 A</code> → <code>P=I²R<sub>L</sub>=0.25×24=<b>6 W</b></code>. Maksimumun %75'i. Yük 3 kat büyük ama güç <b>azaldı</b> — çünkü akım düştü.</p>
<p><b>c)</b> R<sub>L</sub>=R<sub>TH</sub> iken ikisinden <b>aynı akım</b> geçer ve dirençleri eşittir, dolayısıyla harcanan güç de eşit bölünür: yarısı yükte, yarısı iç dirençte. <b>Her zaman iyi değildir:</b> enerji dağıtımında verim önceliklidir (R<sub>L</sub>≫R<sub>TH</sub> seçilir, verim %90+); anten/ses gibi <b>sinyal</b> devrelerinde ise kaynağın gücü zaten küçüktür, amaç o küçük gücün en çoğunu aktarmaktır — orada %50 verim kabul edilir.</p>
</details>`);
