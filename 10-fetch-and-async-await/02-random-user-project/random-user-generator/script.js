
document.querySelector('button').addEventListener('click',()=>{

  fetch('https://randomuser.me/api/')
.then(response=> {
     if(!response.ok)
      throw new Error('Something went wrong! :( Let me know about this')
     return response.json()})
.then(data => {return (data.results[0]) })
.then(randomUser =>{
  document.body.style.color='black'
  if(randomUser.gender=='female')
  document.body.style.backgroundColor='pink'
  else
  document.body.style.backgroundColor='rgb(2, 124, 255)'
  const userInfo = document.querySelector('#user')
  let age =randomUser.dob.age
  if(randomUser.dob.age==69){
    age= '69 nice'
  }
  userInfo.innerHTML=` <div class="flex justify-between">
  <div class="flex"> 
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${randomUser.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${randomUser.name.first} ${randomUser.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${randomUser.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${randomUser.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${randomUser.location.city} ${randomUser.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${age}</p>
    </div>
  </div>
</div>`
})
.catch(error =>{
  hideSpinner();
  document.querySelector('#user').innerHTML = `
  <p class="text-xl text-center text-red-500 mb-5">
  ${error}</p>`;
})


})


