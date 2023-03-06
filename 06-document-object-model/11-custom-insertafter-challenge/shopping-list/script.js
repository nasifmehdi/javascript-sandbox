function insertAfter(element,existingElement){
 
existingElement.parentElement.insertBefore(element,existingElement.nextElementSibling)


}




const ul =  document.querySelector('ul')
const li = document.createElement('li')
li.textContent="insert BEFORE"

const secondElement= document.querySelector('li:nth-child(2)')
ul.insertBefore(li,secondElement)


const li2 = document.createElement('li')
li2.textContent="insert AFTER"
insertAfter(li2,secondElement)


const output=document.querySelectorAll('li')
console.log(output.forEach(element =>console.log(element.innerHTML)));
