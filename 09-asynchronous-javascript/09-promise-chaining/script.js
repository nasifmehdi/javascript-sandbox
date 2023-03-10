const promise= new Promise((resolve,reject)=>{
   let error=false;
   if(!error){
    resolve({name:'john', age:30})
   }
   else{
    reject('something went wrong')
   }


})


promise.then((user)  => {

  console.log(user);
  return user.name
})
.then(function(name){
  console.log(name);
  return name.length
})
.then((length)=>{
  console.log(length)
 
})
.catch((error) =>{
  console.log(error);
})