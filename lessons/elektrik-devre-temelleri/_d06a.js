const fs=require('fs');
const {ins}=require('./_ins.js');
const svg=fs.readFileSync('_svg6.txt','utf8').replace(/\n/g,'');
const cap='<div class="cap">Gerilim kaynagi telle degisince <b>R<sub>1</sub> sol ucu G dugumune tasindi</b>. Artik R<sub>1</sub> ve R<sub>2</sub> ikisinin de uclari M ve G arasinda - paralellik taniminin ta kendisi.</div>';
const block='<h2>6b. Sondurme sonrasi topolojiyi dugum mantigiyla oku</h2>'
+'<div class="see"><b>Kaynak sondurunce ne degisti?</b> Sondurmeden once 12 V kaynagi, R<sub>1</sub> sol ucunu <b>ayri bir potansiyelde</b> tutuyordu. Kaynak telle degistirilince o uc dogrudan <span class="nd">G</span> (referans) dugumune baglandi. <b>Bir dugum yok oldu; iki nokta tek dugum haline geldi.</b></div>'
+svg.replace('</svg></div>','</svg>'+cap+'</div>')
+'<div class="why"><b>Neden simdi paralel?</b> Ezber degil, tanim geregi: <b>R<sub>1</sub> uclari</b> &rarr; <span class="nd">M</span> ve <span class="nd">G</span>. <b>R<sub>2</sub> uclari</b> &rarr; <span class="nd">M</span> ve <span class="nd">G</span>. Ikisinin de iki ucu <b>ayni iki dugumde</b> oldugu icin paraleldirler. Sondurmeden once bu dogru degildi - R<sub>1</sub> sol ucu kaynagin + ucundaydi, G degildi.</div>'
+'<div class="mistake"><b>Buradaki en kritik hata:</b> Kaynagi sondurdukten sonra devreyi <b>eski haliyle</b> dusunmeye devam etmek. &ldquo;R<sub>1</sub> zaten seriydi&rdquo; diye devam edersen 3 A akimi yanlis bolersin. Her sondurmeden sonra devre <b>yeni bir devredir</b>; dugumlerini sifirdan oku.</div>'
+'<div class="note"><b>Akim kaynagi sondurulseydi tam tersi olurdu:</b> Kol <b>acilir</b>, o daldan akim gecmez, ama dugumler <b>birlesmez</b>. Gerilim kaynagi sondurme dugum <b>birlestirir</b>; akim kaynagi sondurme kol <b>koparir</b>. Iki islemin topolojiye etkisi taban tabana zittir.</div>';
ins('0006-superpozisyon-teoremi.html','<h2>7. Katkıları topla</h2>',block);
