

const div=document.querySelector('#joke')
const button=document.querySelector('#joke-btn')


button.addEventListener('click',showJoke)
document.addEventListener('DOMContentLoaded',showJoke)

function showJoke(){
  const xhr = new XMLHttpRequest()

xhr.open('GET','https://api.chucknorris.io/jokes/random')
//xhr.open('GET','https://icanhazdadjoke.com/')
  xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      const data=JSON.parse(this.responseText)
      div.innerHTML=`${data.value}`
     
    }
  }
  xhr.send()
}


