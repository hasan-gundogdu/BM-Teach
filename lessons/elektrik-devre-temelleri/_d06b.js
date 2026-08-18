const {ins,NAV}=require('./_ins.js');
const b=`<h2>11. Bağımsız doğrulama — sonucu başka yöntemle sına</h2>
<div class="reflex">Süperpozisyonla <code>I = 4 A</code> bulduk. Şimdi aynı sonucu <b>tek bir düğüm denklemiyle</b> üretelim. Sınavda vaktin varsa bu kontrolü mutlaka yap: iki farklı yöntem aynı sayıyı veriyorsa çözüm neredeyse kesin doğrudur.</div>
<p><span class="nd">M</span> düğümüne KCL (çıkanlar pozitif). 12 V kaynak R<sub>1</sub> üzerinden bağlı, 3 A doğrudan giriyor:</p>
<div class="eq"><code>(V<sub>M</sub> − 12)/4 − 3 + V<sub>M</sub>/2 = 0</code></div>
<p>4 ile çarp: <code>(V<sub>M</sub> − 12) − 12 + 2V<sub>M</sub> = 0</code> → <code>3V<sub>M</sub> = 24</code> → <code>V<sub>M</sub> = 8 V</code></p>
<div class="eq"><code>I = V<sub>M</sub>/R<sub>2</sub> = 8/2 = <b>4 A</b></code> ✅ süperpozisyonla birebir aynı</div>
<h2>12. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Katkıları mutlak değerle toplamak.</b> Katkılar <b>cebirsel</b> toplanır. Bir katkı, seçtiğin referans okun tersineyse <b>eksi</b> yazılır. +3 ile −1 katkısı 4 değil <b>2</b> eder.</div>
<div class="mistake"><b>2 — Söndürme kurallarını ters uygulamak.</b> Doğrusu: <b>gerilim kaynağı → kısa devre (tel)</b>, <b>akım kaynağı → açık devre (kesik)</b>. Ezberlemek yerine mantığını tut: V=0 olan eleman telle aynı davranır; I=0 olan kol kopukla aynı davranır.</div>
<div class="mistake"><b>3 — Bağımlı kaynağı söndürmek.</b> Bağımlı kaynak <b>hiçbir adımda</b> söndürülmez; her alt devrede formülüyle birlikte durur. Değeri devrenin çözümüne bağlı olduğu için sıfırlanamaz.</div>
<div class="mistake"><b>4 — Güçleri süperpoze etmek.</b> Güç katkılarını toplamak <b>yanlıştır</b>, çünkü güç akımın karesiyle orantılıdır. Önce toplam I veya V'yi bul, gücü <b>en sonda tek seferde</b> hesapla.</div>
<h2>13. Sınav refleksi</h2>
<div class="reflex"><b>Süperpozisyon zorunlu mu?</b> Hayır. Soru açıkça &ldquo;süperpozisyon ile çözünüz&rdquo; demiyorsa, iki kaynaklı bir devrede düğüm analizi genellikle <b>daha hızlıdır</b>. Süperpozisyonu soru istediğinde ya da kaynakların katkısını ayrı ayrı görmen gerektiğinde kullan.</div>
<div class="reflex"><b>Kaç alt devre çizeceksin?</b> Bağımsız kaynak sayısı kadar. Üç kaynak varsa üç alt devre — her birinde <b>bir</b> kaynak aktif, diğerleri sönük. Her alt devrede aynı referans oku koru.</div>
<details class="check"><summary>Mini kontrol — 3 soru (cevaplamadan açma)</summary>
<p><b>a)</b> 18 V kaynak 6 Ω üzerinden <span class="nd">N</span> düğümüne bağlı; 2 A kaynak doğrudan <span class="nd">N</span>'ye giriyor; <span class="nd">N</span>'den referansa 3 Ω var. Süperpozisyonla 3 Ω'un akımını bul.</p>
<p><b>b)</b> Bir alt devrede katkı +5 A, diğerinde referans okun tersine 2 A çıktı. Toplam akım nedir?</p>
<p><b>c)</b> Süperpozisyonla bir dirençte I&prime;=2 A ve I&Prime;=3 A bulundu, R=4 Ω. Direncin gücü kaç W?</p>
<hr>
<p><b>a) Katkı 1</b> (yalnız 18 V; akım kaynağı <b>açık devre</b>): geriye seri devre kalır → <code>I&prime; = 18/(6+3) = <b>2 A</b></code>.<br>
<b>Katkı 2</b> (yalnız 2 A; gerilim kaynağı <b>tel</b> → 6 Ω ile 3 Ω artık aynı iki düğüm arasında, <b>paralel</b>): akım bölücü, paya <b>karşı</b> direnç → <code>I&Prime; = 2 × 6/(6+3) = <b>1.33 A</b></code>.<br>
<b>Toplam:</b> <code>I = 2 + 1.33 = <b>3.33 A</b></code>.<br>
<i>Doğrulama (düğüm):</i> (V−18)/6 − 2 + V/3 = 0 → V−18−12+2V=0 → V=10 V → I=10/3=3.33 ✅</p>
<p><b>b)</b> Ters yöndeki katkı negatif alınır: <code>5 + (−2) = <b>3 A</b></code>.</p>
<p><b>c)</b> Önce akımları topla: <code>I = 2+3 = 5 A</code>. Sonra güç: <code>P = I²R = 25×4 = <b>100 W</b></code>.<br>
<b>Yanlış olan yol:</b> 2²·4 + 3²·4 = 16+36 = 52 W. Aradaki 48 W'lık fark çapraz terimden (2·I&prime;·I&Prime;·R) gelir — güç lineer olmadığı için kaybolur.</p>
</details>`;
ins('0006-superpozisyon-teoremi.html',NAV,b);
