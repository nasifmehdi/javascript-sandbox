console.log(document.querySelector('li:nth-child(2').innerText);


let listItems=document.querySelectorAll('li')
listItems = document.querySelectorAll('.item')
listItems[0].style.color='orange'

console.log(listItems[0].innerHTML
);
listItems.forEach((element,index) => {
  if(index == 2)
   element.remove();
   //innerText might delete other code
  if(index ==0){
    element.innerHTML=`
    Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`
  } 
 })