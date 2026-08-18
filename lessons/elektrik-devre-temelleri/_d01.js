const {ins,NAV}=require('./_ins.js');
ins('0001-akim-voltaj-guc-enerji.html',NAV,`<h2>8. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Gerilimi tek bir noktaya yapıştırmak.</b> “A noktasının gerilimi 5 V” cümlesi tek başına eksiktir. Gerilim <b>iki nokta arasındadır</b>. Devrede bir referans (toprak) seçtiysen “V<sub>A</sub>=5 V” demek aslında “V<sub>A</sub>−V<sub>ref</sub>=5 V” demektir. Referans yoksa bu ifade anlamsızdır.</div>
<div class="mistake"><b>2 — Negatif sonucu hata sanıp geri dönmek.</b> I=−2 A “akım yok” ya da “yanlış çözdüm” demek değil; <b>2 A, seçtiğin okun tersine</b> demektir. Büyüklük doğrudur, sadece yön bilgisi eklenmiştir.</div>
<div class="mistake"><b>3 — Güç hesabında farklı elemanların değerlerini karıştırmak.</b> Bir elemanın gücü için <b>o elemanın kendi gerilimi</b> ve <b>o elemandan geçen kendi akımı</b> gerekir. Kaynağın gerilimini alıp başka bir direncin akımıyla çarpmak en sık görülen puan kaybıdır.</div>
<div class="mistake"><b>4 — Ön ekleri yarı yolda bırakmak.</b> <code>4.7 kΩ × 20 mA</code> doğrudan <b>94 V</b> verir (k ve m birbirini götürür). Ama <code>kΩ × A</code> gibi eşleşmeyen bir çarpımda sonuç <b>kV</b> çıkar; buradaki k'yı unutmak 1000 kat hata demektir.</div>
<h2>9. Sınav refleksi</h2>
<div class="reflex"><b>Soruyu okurken:</b> “Ne isteniyor?” — akım mı, gerilim mi, güç mü? Güç isteniyorsa <b>hangi elemanın</b> gücü? Bu üç kelimeyi soru kâğıdının kenarına yaz; yanlış elemanın gücünü hesaplamak çok yaygın.</div>
<div class="reflex"><b>Çözümü bitirince 3 saniyelik kontrol:</b><br>
1) <b>Birim tuttu mu?</b> V/Ω bölümünden A çıkmalı, V×A çarpımından W.<br>
2) <b>İşaret ne diyor?</b> Direncin gücü negatif çıktıysa <b>kesin hata</b> var — direnç enerji üretemez.<br>
3) <b>Güç sorusuysa toplam:</b> devredeki tüm güçleri işaretleriyle topla, <b>0</b> çıkmalı (üretilen = tüketilen).</div>
<details class="check"><summary>Mini kontrol — 3 soru (cevaplamadan açma)</summary>
<p><b>a)</b> V<sub>A</sub>=12 V, V<sub>B</sub>=3 V. V<sub>AB</sub> ve V<sub>BA</sub> kaçtır?</p>
<p><b>b)</b> Bir pilin gerilimi 9 V; akım pilin içinden <b>−</b> ucundan girip <b>+</b> ucundan çıkıyor ve 0.5 A. Pilin gücü kaç W, işareti ne anlama gelir?</p>
<p><b>c)</b> 2.2 kΩ dirençten 15 mA geçiyor. Direncin gerilimi ve gücü?</p>
<hr>
<p><b>a)</b> V<sub>AB</sub>=12−3=<b>9 V</b>, V<sub>BA</sub>=3−12=<b>−9 V</b>. Aynı fiziksel durum, ters okuma.</p>
<p><b>b)</b> Akım kuralın tersi yönde girdiği için negatif alınır: P=9×(−0.5)=<b>−4.5 W</b>. İşaret negatif → pil <b>güç üretiyor</b> (beklenen davranış).</p>
<p><b>c)</b> V=2.2×15=<b>33 V</b> (kΩ×mA=V). Güç: P=V·I=33×0.015=<b>0.495 W</b> ≈ 495 mW. Alternatif: P=I²R=(0.015)²×2200=0.495 W ✅ aynı.</p>
</details>`);
