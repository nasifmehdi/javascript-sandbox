let intervalID;

function startChange(){
 if(!intervalID){
  //intervalID=setInterval(changeColor,500)
  intervalID=setInterval(changeRandomColor,500)
 }
}

function stopChange(){

  clearInterval(intervalID)
}
function changeColor(){
  if(document.body.style.backgroundColor!='black'){
  document.body.style.backgroundColor='black'
  document.body.style.color='white'
  }
  else{
  document.body.style.backgroundColor='white'
  document.body.style.color='black'
  }

}
function changeRandomColor(){
const randomColor=Math.floor(Math.random()*16785.).toString(16);
const randomColor2=Math.floor(Math.random()*10000.).toString(16);
document.body.style.color=`#${randomColor}`
document.body.style.backgroundColor=`#${randomColor2}`

}

document.getElementById('start').addEventListener('click',startChange)
document.getElementById('stop').addEventListener('click',stopChange)

