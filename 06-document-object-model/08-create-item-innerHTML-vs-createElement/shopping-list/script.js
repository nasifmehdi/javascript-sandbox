//quick
function createListItem(item){
  const list=document.querySelector('li');
  list.innerHTML=`${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`
 document.querySelector('.items').appendChild(list)
console.log(list.innerHTML);
}

//createListItem('Eggs')

//better

function createListItem2 (item){
   const list = document.createElement('li')
   const text = document.createTextNode(item)
   const button = document.createElement('button')
   button.className="remove-item btn-link text-red";

   const icon = document.createElement('i')
   icon.className="fa-solid fa-xmark";
   list.appendChild(text)
   button.appendChild(icon)
   list.appendChild(button)
  
   document.querySelector('.items').appendChild(list)
   console.log(list);

                                           

}
createListItem2('Bacon')