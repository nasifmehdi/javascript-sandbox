const xhr= new XMLHttpRequest();

//xhr.open('GET','./movies.json')
xhr.open('GET','https://api.github.com/users/nasifmehdi/repos')

xhr.onreadystatechange = function(){
  if(this.readyState==4 && this.status==200){
    const data=JSON.parse(this.responseText)
    data.forEach(repo => {
      const ul=document.querySelector('ul')
      const li=document.createElement('li')
      li.innerHTML=`<strong>${repo.name} : ${repo.description}</strong>`
      ul.appendChild(li)
    })
    };
  }
   //console.log(JSON.parse(this.responseText));

xhr.send()

//this.readyState
//this.status
//this.responseText

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

