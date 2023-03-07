const logo = document.querySelector('img');

const onDoubleClick = () =>{
 
  document.body.style.color='orange'
  

};
const onClick = () => console.log('clicked!');
//logo.addEventListener('click',onClick)
//logo.addEventListener('dblclick',onDoubleClick)
//logo.addEventListener('mouseover',onClick)
//logo.addEventListener('mouseout',onClick)
//logo.addEventListener('mouseup',onClick)
logo.addEventListener('dragstart',onClick)