const img= document.querySelector('img')
let start,elapsed;
function step(timestamp){
 if(start==undefined)
 start=timestamp

 let done=false;


 if(elapsed>=10000){
 done=true 
 }

 if(done==true){
 return;
 }

 elapsed=timestamp-start


 img.style.transform=`translateX(${elapsed/50}px) rotate(${elapsed/6}deg)`
requestAnimationFrame(step)
  //console.log(elapsed);
}
requestAnimationFrame(step)