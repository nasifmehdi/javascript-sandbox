function createPosts(post){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
      body: JSON.stringify(post)
       /* body: JSON.stringify({
            title: post.title,
            body:  post.body
             
        })*/,
        headers:{
         'Content-Type' : 'application/json',
         'token': 'nasifapi'
        }    
    }).then(response => {return response.json()})
      .then(data=> console.log(data))
}

createPosts({title:'my title',body:'my body'})