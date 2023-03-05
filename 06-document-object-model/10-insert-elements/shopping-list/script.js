//insertAdjacentElement

function insertElement(){
 const filter = document.querySelector('.filter');

 let h3= document.createElement('h3')
 h3.textContent='insertAdjacentElement'
//instead of appendChild we are using insertAdjacentElement
filter.insertAdjacentElement('beforebegin',h3)

}
//insertAdjancentText
function insertText(){
  const text=document.querySelector('li:nth-child(1)')

  text.insertAdjacentText('afterend','insertAdjacentText')

}
//insertAdjacentHTML

function insertHTML(){
  const html=document.querySelector('#clear')
  html.insertAdjacentHTML('afterend','<p>insert adjacent html</p>')

   
}

//insertBefore

function insertBeforeElement(){
  
  const list=document.querySelector('li')
  list.textContent = 'insertBefore'
  const Seconditem=document.querySelector('li:nth-child(3)')
  const ul=document.querySelector('ul')
  ul.insertBefore(list,Seconditem)  

}
insertElement()
insertText()
insertHTML()
insertBeforeElement()
