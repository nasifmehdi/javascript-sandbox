const form = document.querySelector('#item-form')
const formInput= document.querySelector('#item-input')
const ul=document.getElementById('item-list')
const filter=document.getElementById('filter')
const clearAllButton= document.getElementById('clear')
//const li=document.querySelector('li')
function addItem(e){
    e.preventDefault()
    const textInput=formInput.value;
 if(formInput.value==''){
 alert('form is empty')
 return
 }
 
 //create li,textNode,button,icon
 const li=document.createElement('li')
 const textNode= document.createTextNode(formInput.value)
 const button= document.createElement('button')


//fill in the button,icon
 button.className= "remove-item btn-link text-red"
 const icon=document.createElement('i')
 icon.className= "fa-solid fa-xmark"

 //append ul(li(button(icon),textNode))
 button.appendChild(icon)
 li.appendChild(textNode)
 li.appendChild(button)
 ul.appendChild(li)
 formInput.value=''
 console.log(ul);
}

function removeItem(e){
if(e.target.parentElement.classList.contains('remove-item'))
 e.target.parentElement.parentElement.remove();
;


}
function clearAll(e){
while(ul.firstChild){
    ul.removeChild(ul.firstChild)
}


clearUI()

}
function clearUI(){
const li=document.querySelectorAll('li')

if(li.length==0){
clearAllButton.style.display='none'
filterItems.style.display='none'
}
else{
    clearAllButton.style.display='flex'
    filterItems.style.display='flex'
 
    }   
}

function filterItems(e){
const filter=document.getElementById('filter')
const li=document.querySelectorAll('li')
const inputText=e.target.value.toLowerCase()
li.forEach((item,index) =>{
   const liText=item.firstChild.textContent.toLowerCase()
   if(liText.indexOf(inputText)!=-1)
  item.style.display='flex'
  else
  item.style.display='none'

})
//console.log(filter.value);

}


form.addEventListener('submit',addItem)
ul.addEventListener('click',removeItem)
clearAllButton.addEventListener('click', clearAll)
filter.addEventListener('input',filterItems)