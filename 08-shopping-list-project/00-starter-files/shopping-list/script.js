const form = document.querySelector('#item-form')
const formInput= document.querySelector('#item-input')
const ul=document.getElementById('item-list')
const formBtn=document.querySelector('.btn')
//not const li=document.querySelector('li')
const filter=document.getElementById('filter')
const clearAllButton= document.getElementById('clear')

function displayItems(){
    let itemsFromStorage = getItemsFromStorage();
    
    itemsFromStorage.forEach(item => addItemToDOM(item))
}
function addItem(e){
    e.preventDefault()
    const textInput=formInput.value;
    if(formInput.value==''){
    alert('form is empty')
    return
 }
 if(isEditMode){
    const itemToEdit=document.querySelector('.edit-mode')
    removeItemFromStorage(itemToEdit.innerText)
    //remove color from item
    itemToEdit.classList.remove('edit-mode')
    //remove item
    itemToEdit.remove()
    isEditMode=false;
    console.log(itemToEdit.classList);
    //change button back to default
    formInput.value=''
    formBtn.innerHTML='<i class="fa-solid fa-plus"></i> Add Item'
    formBtn.style.backgroundColor='#333'
 }
 addItemToDOM(textInput)

 //console.log(ul);
 addItemToStorage(textInput)
}

function addItemToDOM(item){
     //create li,textNode,button,icon
 const li=document.createElement('li')
 const textNode= document.createTextNode(item)
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
 item=''
}
function removeItem(e){
    const item=e.target.parentElement.parentElement
    if(e.target.parentElement.classList.contains('remove-item')){
        if(window.confirm('Are you sure you want to remove item?'))
        item.remove();
        //!item ==item.innerText
        removeItemFromStorage(item.innerText)
        console.log(item.innerText);
    }
        
    else{
        setItemToEdit(e.target)
    }
    
}
let isEditMode=false;

function setItemToEdit(item){

isEditMode=true;

document.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'))
item.classList.add('edit-mode')
formBtn.innerHTML='<i class="fa-solid fa-xmark"></i> Update item'
formBtn.style.backgroundColor='rgb(220,100,100)'
formInput.value=item.innerText
}

function clearAll(){
while(ul.firstChild){
    ul.removeChild(ul.firstChild)
}
clearUI()

}
function clearUI(){
    const li=document.querySelectorAll('li')

    if(li.length==0){
    clearAllButton.style.display='none'
    filter.style.display='none'
    }
    else{
        clearAllButton.style.display='flex'
        filter.style.display='flex'
     
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
function addItemToStorage(item){
 let itemsFromStorage= getItemsFromStorage();
 
 itemsFromStorage.push(item)
 localStorage.setItem('items',JSON.stringify(itemsFromStorage))

}

function getItemsFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items')==null){
       itemsFromStorage=[]
    }
    else{
       itemsFromStorage=JSON.parse(localStorage.getItem('items'))
    }
    return itemsFromStorage
}
function removeItemFromStorage(item){
  let itemsFromStorage=getItemsFromStorage()
  
  itemsFromStorage = itemsFromStorage.filter(i => i!=item)
  localStorage.setItem('items',JSON.stringify(itemsFromStorage));

}

function init(){
form.addEventListener('submit',addItem)
ul.addEventListener('click',removeItem)
clearAllButton.addEventListener('click', clearAll)
filter.addEventListener('input',filterItems)
document.addEventListener('DOMContentLoaded',displayItems)
}
init()