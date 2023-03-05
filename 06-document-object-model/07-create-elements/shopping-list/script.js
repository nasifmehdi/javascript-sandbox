const div = document.createElement('div')

div.className = 'my class'
div.id = 'my id'
div.title='my title'
div.setAttribute('title','my-other-title')

const text= document.createTextNode('this is a text node')
div.appendChild(text)

document.body.appendChild(div)
document.querySelector('ul').appendChild(div)

console.log(div);