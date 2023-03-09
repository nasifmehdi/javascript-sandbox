const timerId= setTimeout(changeHeader,3000)
function changeHeader(){
  document.querySelector('h1').textContent='hello from callback'
}
const button =document.querySelector('#cancel')
button.addEventListener('click',() =>{
  console.log('timer cancelled');
  clearTimeout(timerId)
})
