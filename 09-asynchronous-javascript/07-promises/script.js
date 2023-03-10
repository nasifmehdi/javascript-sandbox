const promise = new Promise((resolve,reject)=>{
   setTimeout(() =>{
    console.log('async task complete');
    resolve()
   },1000)
})
new Promise((resolve,reject)=>{
  setTimeout(() =>{
    let error=false;
    if(!error){
      resolve({name:'john',age:30})
    }
    else
    reject('something went wrong')
   console.log('async task complete');
   
  },1000)
}).then((user)=>{console.log(user);})
.catch(error=>console.log(error))
.finally(()=>console.log('promised consumed or rejected'))
promise.then(()=>{
  console.log('promise consumed');
})
//promise(function(resolve,reject){},time)