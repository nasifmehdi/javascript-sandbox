const logo = document.querySelector('img')
const link=document.querySelector('a')
function onClick(event){
  event.target.style.backgroundColor='red'
  console.log(event.clientX,' ',event.clientY);
  event.preventDefault()
  alert('link blocked')
}
logo.addEventListener('click',onClick)
link.addEventListener('click',onClick)