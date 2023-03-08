const form = document.querySelector('#item-form')
const formInput= document.querySelector('#item-input')
const ul=document.getElementById('item-list')


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
 const icon=document.createElement('i')

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


form.addEventListener('submit',addItem)