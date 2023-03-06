const clearButtton=document.querySelector('.btn-clear')

function onClear(){
  alert('clearing all items')
  waitAndDelete()
}

//javascript eventListener
//clearButtton.onclick = () => onClear()

//addEventListener()

clearButtton.addEventListener('click',onClear)
//setTimeout

//setTimeout(function ( )
//{ 
//  clearButtton.removeEventListener('click',onClear)
//}, 3000)

function waitAndDelete(){

  const list=document.querySelectorAll('li')
  list.forEach(element => element.remove())
 
}


setTimeout(

function (){waitAndDelete()}
, 5000)
