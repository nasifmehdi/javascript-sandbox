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
function createPost(post,cb){
  setTimeout(()=>{posts.push(post)
    cb()},3000)
  
}
createPost({title:'post three',body:'this is post three'},getPosts)
//getPosts()