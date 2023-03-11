fetch('https://httpstat.us/300')
.then(response =>{

  if(response.status==404)
   throw new Error('Ooops something went else....')
  else if(response.status==500)
  throw new Error('Sever error. Come back later')
  else if (response.status != 200)
  throw new Error('something happened idk..')

  return response

}).then(data => console.log('success'))
.catch(error => console.log(error))