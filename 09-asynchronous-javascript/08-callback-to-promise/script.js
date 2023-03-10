const posts=[{
  title:'post one',
  body:'this is post one'
},{
  title:'post two',
   body:'this is post two'
}]
function getPosts(){
  //not setInterval
  setTimeout(() => { posts.forEach(post => {
    const div=document.createElement('div')
    div.innerHTML=`<strong>${post.title} : ${post.body}</strong>`
    document.querySelector('#posts').appendChild(div)
})},1000)
}
function createPost(post, cb){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      let error=true;
      if(!error){
        posts.push(post)
      resolve()
      }
      else
      reject('something went else')
    }, 2000)
  })

  }
  function showError(error){
    const h3=document.createElement('h3')
    h3.innerHTML=`<strong>${error}</strong>`
    document.querySelector('#posts').appendChild(h3)
    
  }
  createPost({title:'post three',body:'this is post three'})
  .then(getPosts)
  .catch(showError)