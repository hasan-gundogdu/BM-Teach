const fs=require('fs');
const {ins,NAV}=require('./_ins.js');
const svg=fs.readFileSync('_svgrl.txt','utf8').replace(/\n/g,'')
  .replace(/FOTOGRAF/g,'FOTOĞRAF').replace(/kararli/g,'kararlı').replace(/ACILDI/g,'AÇILDI')
  .replace(/acik/g,'açık').replace(/kisa devre/g,'kısa devre').replace(/akim/g,'akım')
  .replace(/SICRAYAMAZ/g,'SIÇRAYAMAZ').replace(/soner/g,'söner').replace(/bitti/g,'bitti')
  .replace(/>2</g,'>2Ω<').replace(/>4</g,'>4Ω<');
const cap='<div class="cap">Aynı devrenin üç anı. <b>Fotoğraf 1</b>: bobin tel olduğu için 4Ω kısa devre — akımın tamamı bobinden. <b>Fotoğraf 2</b>: anahtar açıldı, kaynak koptu ama <b>bobin akımı sıçrayamaz</b>, 6 A aynen devam eder ve artık 4Ω üzerinden kapanır. <b>Fotoğraf 3</b>: kaynak olmadığı için depolanan enerji 4Ω&rsquo;da ısıya dönüşür, akım sıfıra iner.</div>';
ins('0012-rl-devreleri.html',NAV,`<h2>11. Üç fotoğrafı devre üzerinde gör</h2>
<div class="see"><b>Devrede ne görüyorum?</b> 12 V kaynak, 2 Ω ile <span class="nd">A</span> düğümüne bağlı. <span class="nd">A</span>&rsquo;dan referansa 4 Ω, ona <b>paralel</b> olarak bobin L. Anahtar uzun süredir kapalı, t=0&rsquo;da açılıyor. Aranan: t&gt;0 için i<sub>L</sub>(t).</div>
${svg.replace('</svg></div>','</svg>'+cap+'</div>')}
<div class="why"><b>Fotoğraf 2&rsquo;de topoloji neden tamamen değişti?</b> Anahtar açılınca kaynak kolu <b>koptu</b> — 12 V ve 2 Ω artık devrenin parçası değil. Geriye yalnızca bobin ve 4 Ω&rsquo;luk kapalı bir halka kaldı. Bobin, üzerindeki akımı sürdürmek için gereken gerilimi kendi üretir ve akımı 4 Ω üzerinden döndürür. <b>Zaman sabitini bu yeni devre belirler</b>, eski devre değil.</div>
<div class="eq"><code>τ = L/R<sub>TH</sub> = L/4</code> &nbsp;·&nbsp; <code>i<sub>L</sub>(t) = 0 + (6 − 0)e<sup>−t/τ</sup> = 6e<sup>−4t/L</sup> A</code></div>
<div class="mistake"><b>Burada en sık yapılan hata:</b> τ hesabında <b>2 Ω&rsquo;u da işin içine katmak</b>. Anahtar açıldıktan sonra 2 Ω devrede <b>yok</b>; bobinin gördüğü tek direnç 4 Ω. Zaman sabitini her zaman <b>t&gt;0 devresinden</b> hesapla.</div>
<h2>12. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — RC ile RL&rsquo;yi ters karıştırmak.</b> DC kararlı durumda <b>kapasitör açık</b> devre, <b>bobin kısa</b> devredir. Süreklilik ise: kapasitörde <b>gerilim</b>, bobinde <b>akım</b> sıçrayamaz. Bu dört bilgiyi ters yazmak tüm çözümü götürür.</div>
<div class="mistake"><b>2 — Bobin gerilimini de sürekli sanmak.</b> Bobin <b>akımı</b> süreklidir; gerilimi <b>anında sıçrayabilir</b> ve genelde sıçrar. Anahtar açıldığı anda bobin uçlarında büyük bir ters gerilim oluşur (endüktif kick) — bu normaldir.</div>
<div class="mistake"><b>3 — Zaman sabitini eski devreden hesaplamak.</b> τ her zaman <b>anahtar sonrası</b> devrede, bobinin uçlarından görülen R<sub>TH</sub> ile bulunur.</div>
<div class="mistake"><b>4 — τ = R/L yazmak.</b> Doğrusu <b>τ = L/R</b>. Birim kontrolüyle doğrula: H/Ω = saniye. (RC&rsquo;de ise τ=RC, yani Ω·F = saniye.) İkisi <b>ters</b> yapıdadır; RC&rsquo;de direnç çarpar, RL&rsquo;de böler.</div>
<h2>13. Sınav refleksi</h2>
<div class="reflex"><b>Her RL sorusunda aynı 7 adım:</b> (1) t=0⁻ devresini çiz, bobini <b>tel</b> yap, i<sub>L</sub>(0⁻) bul. (2) i<sub>L</sub>(0⁺)=i<sub>L</sub>(0⁻). (3) t→∞ devresini çiz, bobin yine <b>tel</b>, i<sub>L</sub>(∞) bul. (4) t&gt;0 devresinde bobinin gördüğü R<sub>TH</sub>. (5) τ=L/R<sub>TH</sub>. (6) <code>i<sub>L</sub>(t)=i<sub>L</sub>(∞)+[i<sub>L</sub>(0⁺)−i<sub>L</sub>(∞)]e<sup>−t/τ</sup></code>. (7) t=0 ve t→∞ koyup kontrol et.</div>
<div class="reflex"><b>Formülü yanlış yazdığını 5 saniyede anlarsın:</b> t=0 koy → başlangıç değeri çıkmalı. t→∞ koy → son değer çıkmalı. İkisinden biri tutmuyorsa formülü ters yazmışsındır.</div>
<details class="check"><summary>Mini kontrol — 3 soru (cevaplamadan açma)</summary>
<p><b>a)</b> Yukarıdaki devrede L=2 H olsun. τ kaçtır ve i<sub>L</sub>(t) ifadesi nedir? t=0.5 s&rsquo;de akım kaç A?</p>
<p><b>b)</b> Bir RL devresinde i<sub>L</sub>(0⁺)=0 ve i<sub>L</sub>(∞)=4 A, τ=0.２ s. i<sub>L</sub>(t) nedir?</p>
<p><b>c)</b> DC kararlı durumda bobin kısa devre ise, bobinin bulunduğu kolda gerilim düşümü var mıdır?</p>
<hr>
<p><b>a)</b> <code>τ = L/R = 2/4 = <b>0.5 s</b></code>. Başlangıç 6 A, son değer 0 → <code>i<sub>L</sub>(t) = 6e<sup>−t/0.5</sup> = <b>6e<sup>−2t</sup> A</b></code>.<br>
t=0.5 s → <code>6e<sup>−1</sup> = 6×0.368 = <b>2.21 A</b></code>. (Bir τ sonra başlangıcın ~%37&rsquo;si kalır ✅)</p>
<p><b>b)</b> <code>i<sub>L</sub>(t) = 4 + (0−4)e<sup>−t/0.2</sup> = <b>4(1 − e<sup>−5t</sup>) A</b></code>. Kontrol: t=0 → 0 ✅, t→∞ → 4 A ✅</p>
<p><b>c)</b> <b>Hayır, ideal bobinde yoktur.</b> Kararlı durumda di/dt=0 olduğu için v<sub>L</sub>=L·(di/dt)=0. Bu yüzden bobin telle aynı davranır ve <b>kendisine paralel olan her şeyi kısa devre eder</b> — yukarıdaki Fotoğraf 1&rsquo;de 4 Ω&rsquo;un devre dışı kalmasının sebebi tam olarak budur.</p>
</details>`);
