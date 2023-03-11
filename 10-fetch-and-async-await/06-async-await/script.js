const promise = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    resolve({name:'john',age:69})
  },1000)
})

const getPromise = async () =>{
  const promise1 = await promise
  console.log(promise1)
}
async function getPosts(){
 const response = await fetch('https://api.github.com/users')
 const data=await response.json()
  console.log(data);
 
}
getPosts()
getPromise()