const fs=require('fs');
function ins(file,marker,html,after){
  let s=fs.readFileSync(file,'utf8');
  const i=s.indexOf(marker);
  if(i<0){console.log('  !! MARKER YOK: '+file+' :: '+marker.slice(0,50));return false;}
  const at=after? i+marker.length : i;
  fs.writeFileSync(file,s.slice(0,at)+html+s.slice(at));
  console.log('  ok: '+file);
  return true;
}
module.exports={ins,NAV:'<div class="nav">'};
