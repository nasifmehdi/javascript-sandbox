const text = document.querySelector('p')
const listItems = document.querySelector('.item-list')
const list=document.querySelector('li')
//console.log(listItems);

function run(){

//text.className='dark card'
text.classList.add('dark')
//text.classList.remove('card')
//text.classList.toggle('dark')
//text.classList.toggle('hidden')
text.classList.replace('dark','card')


//console.log(listItems.className)

listItems.style.lineHeight=2
listItems.classList.forEach(c => console.log(c,'className'))
}
document.querySelector('button').onclick=run;