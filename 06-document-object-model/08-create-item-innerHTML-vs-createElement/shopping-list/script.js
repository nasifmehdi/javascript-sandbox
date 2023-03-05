//quick
function createListItem(item){

const list= document.createElement('li')
list.innerHTML=`
${item}
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
`
document.querySelector('.items').appendChild(list)
console.log(list.outerHTML);

}

createListItem('eggs')
