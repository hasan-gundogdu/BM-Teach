const {ins,NAV}=require('./_ins.js');
ins('0005-cevre-akimlari-yontemi.html',NAV,`<h2>9. Baştan sona sayısal örnek — süper çevre</h2>
<div class="see"><b>Devrede ne görüyorum?</b> İki göz var. Sol gözde 20 V kaynak ve 2 Ω; sağ gözde 6 Ω. <b>İki gözün ortak kolunda 3 A'lik akım kaynağı</b> var (yukarı yönlü). Dış çevrede ayrıca 4 Ω bulunuyor. Her iki mesh akımı da saat yönünde: I<sub>1</sub> (sol), I<sub>2</sub> (sağ).</div>
<div class="why"><b>Normal yöntem nerede tıkanıyor?</b> Sol göze KVL yazmaya kalkarsan ortak koldaki <b>akım kaynağının üzerindeki gerilimi</b> yazman gerekir — ama ideal akım kaynağının uç gerilimi <b>bilinmiyor</b>, devrenin geri kalanı belirliyor. Bilinmeyen bir terim daha girer, denklem çözülemez.<br><br><b>Süper çevre neden çözer?</b> Akım kaynağının olduğu <b>iç koldan hiç geçmeyen</b> bir tur seçeriz — dış sınır turu. Böylece o bilinmeyen gerilimi denkleme hiç sokmayız. Kaybettiğimiz denklemi de kaynağın kendi kısıtından geri alırız.</div>
<div class="note"><b>Önemli:</b> Akım kaynağı kolu <b>fiziksel olarak devrede duruyor</b>, silmiyoruz. Sadece KVL turunu oradan geçirmiyoruz. Kaynak akımı devrede etkisini kısıt denklemi üzerinden gösteriyor.</div>
<p><b>Adım 1 — dış tur KVL'si.</b> Akım kaynağı kolunu atlayarak dış sınırı saat yönünde dolaş:</p>
<div class="eq"><code>−20 + 2·I<sub>1</sub> + 6·I<sub>2</sub> + 4·I<sub>2</sub> = 0</code></div>
<p>Düzenle: <code>2I<sub>1</sub> + 10I<sub>2</sub> = 20</code> → <code>I<sub>1</sub> + 5I<sub>2</sub> = 10</code> &nbsp;<b>(1)</b></p>
<p><b>Adım 2 — akım kaynağı kısıtı.</b> Ortak kolda gerçek akım, iki mesh akımının farkıdır. Kaynak oku I<sub>1</sub> yönüyle aynıysa:</p>
<div class="eq"><code>I<sub>1</sub> − I<sub>2</sub> = 3</code> &nbsp;<b>(2)</b></div>
<p><b>Adım 3 — çöz.</b> (2)'den I<sub>1</sub>=I<sub>2</sub>+3, (1)'e koy:</p>
<div class="eq"><code>(I<sub>2</sub>+3) + 5I<sub>2</sub> = 10 → 6I<sub>2</sub> = 7 → I<sub>2</sub> = 1.1667 A</code></div>
<div class="eq"><code>I<sub>1</sub> = 1.1667 + 3 = <b>4.1667 A</b></code></div>
<div class="reflex"><b>Doğrulama:</b> Dış tura geri koy: −20 + 2(4.1667) + 10(1.1667) = −20 + 8.333 + 11.667 = 0 ✅ Ortak koldaki gerçek akım: 4.1667 − 1.1667 = 3 A = kaynak akımı ✅</div>
<h2>10. Ortak kolda “neden fark?” — okları takip et</h2>
<div class="see">Ortak kola <b>iki mesh de kendi okunu</b> gönderiyor. Her iki mesh saat yönündeyse, ortak dikey kolda sol mesh'in oku <b>aşağı</b>, sağ mesh'in oku <b>yukarı</b> bakar — yani <b>zıt</b>. Zıt yönlü iki katkı üst üste binince gerçek akım <b>farkları</b> olur: I<sub>1</sub>−I<sub>2</sub>.</div>
<div class="why"><b>Neden hep aynı yönü seçiyoruz?</b> Bütün meshleri saat yönü seçersen ortak kolda oklar <b>her zaman</b> zıt olur, dolayısıyla katsayı <b>her zaman</b> negatif çıkar (−R<sub>ortak</sub>). Matris köşegen-dışı elemanları hep negatif olur; işaret hatası yapma ihtimalin ciddi şekilde düşer. Farklı yönler seçmek yanlış değil ama her seferinde yeniden düşünmeyi gerektirir.</div>
<h2>11. Sık yapılan hatalar</h2>
<div class="mistake"><b>1 — Mesh akımını kol akımı sanmak.</b> I<sub>1</sub>=5 A ve I<sub>2</sub>=2 A ise, ortak kolda “5 A da geçiyor 2 A da geçiyor” <b>değil</b>; o kolda tek bir gerçek akım var: 3 A. Mesh akımları hesap aracıdır, tek başına ölçülebilir kol akımı değildir. Ancak <b>yalnız tek mesh'e ait</b> bir kolda mesh akımı = kol akımıdır.</div>
<div class="mistake"><b>2 — Süper çevrede kaynak kolundan geçmek.</b> Süper çevrenin bütün amacı o koldan <b>geçmemek</b>. Turu çizerken kalemin akım kaynağının üstünden geçiyorsa turu yanlış seçmişsin.</div>
<div class="mistake"><b>3 — Kısıt denkleminin işaretini şaşırmak.</b> I<sub>1</sub>−I<sub>2</sub>=I<sub>s</sub> mi, I<sub>2</sub>−I<sub>1</sub>=I<sub>s</sub> mi? Kararı <b>kaynağın okuna</b> bak vererek al: kaynak oku hangi mesh'in ortak koldaki yönüyle aynıysa o mesh önce yazılır.</div>
<div class="mistake"><b>4 — Kenardaki akım kaynağı için gereksiz süper çevre kurmak.</b> Akım kaynağı <b>yalnız bir mesh'in</b> kenarındaysa süper çevreye gerek yok; o mesh akımı doğrudan bilinir: I<sub>1</sub>=±I<sub>s</sub>. Bir bilinmeyen bedavaya çözülmüş olur.</div>
<h2>12. Sınav refleksi</h2>
<div class="reflex"><b>Yöntem seçimi 10 saniyede:</b> Devrede çok sayıda <b>akım kaynağı</b> ve az düğüm varsa → <b>düğüm analizi</b>. Çok sayıda <b>gerilim kaynağı</b> ve az göz varsa → <b>çevre analizi</b>. İkisi de olur; hangisi <b>daha az bilinmeyen</b> veriyorsa onu seç. Bilinmeyen sayısını baştan say: düğüm için (n−1), çevre için göz sayısı.</div>
<div class="reflex"><b>2×2 sistemi Kramer ile çöz</b> — BM213'teki determinant bilgisi burada birebir işine yarar: D=ad−bc, I<sub>1</sub>=(ed−bf)/D, I<sub>2</sub>=(af−ec)/D. 3×3'te Sarrus.</div>
<details class="check"><summary>Mini kontrol — 3 soru</summary>
<p><b>a)</b> İki mesh saat yönünde. I<sub>1</sub>=6 A, I<sub>2</sub>=−2 A. Ortak 5 Ω dirençteki gerçek akım ve gerilim düşümü (1. mesh yönünde)?</p>
<p><b>b)</b> Bir akım kaynağı sadece sağ mesh'in dış kenarında ve oku mesh yönüyle aynı, değeri 4 A. I<sub>2</sub> nedir?</p>
<p><b>c)</b> Ne zaman süper çevre kurarsın, ne zaman kurmazsın?</p>
<hr>
<p><b>a)</b> I<sub>ortak</sub>=I<sub>1</sub>−I<sub>2</sub>=6−(−2)=<b>8 A</b>. Düşüm: 5×8=<b>40 V</b>. Dikkat: I<sub>2</sub>'nin eksisi ihmal edilirse 4 A çıkar — tamamen yanlış.</p>
<p><b>b)</b> <b>I<sub>2</sub>=4 A</b>, doğrudan. Süper çevre gerekmez, denklem kurmadan bir bilinmeyen çözüldü.</p>
<p><b>c)</b> Akım kaynağı <b>iki mesh'in ortak kolundaysa</b> süper çevre kurarsın (uç gerilimi bilinmiyor). <b>Tek mesh'in dış kenarındaysa</b> kurmazsın — mesh akımı doğrudan kaynak akımına eşittir.</p>
</details>`);
