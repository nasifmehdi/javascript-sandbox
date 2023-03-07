const input=document.querySelector('#item-input')

function onkeyup(){
console.log('key up');
}

function onkeydown(){
console.log('key down');
}

function onkeypress(e){
console.log('key pressed');
}
input.addEventListener('keypress',onkeypress)
input.addEventListener('keyup',onkeyup)
input.addEventListener('keydown',onkeydown)