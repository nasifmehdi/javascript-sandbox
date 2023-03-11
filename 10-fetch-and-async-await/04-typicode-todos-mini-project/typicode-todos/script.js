const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () =>{
  fetch(apiUrl +'?_limit=5')
  .then( response => response.json())
  .then(data=>data.forEach(todo => addToDoToDOM(todo)))
}
function addToDoToDOM(todo){
  const div= document.createElement('div')
    div.appendChild(document.createTextNode(todo.title))
    
    div.setAttribute('data-id',todo.id)
    div.classList.add('todo')
    if(todo.completed){
      div.classList.add('done')
    }
    document.getElementById('todo-list').appendChild(div)
}

function createToDos(e){
e.preventDefault()
console.log();
const newTodo ={
  title: e.target.firstElementChild.value,
  completed:false
 }
 fetch(apiUrl,{
  method:'POST',
  body:JSON.stringify(newTodo),
  headers:{
    'Content-Type':'application/json'
  }
 }).then(response => response.json())
    .then(data => addToDoToDOM(data))
}
function toggleCompleted(e){
  if(e.target.classList.contains('todo'))
   e.target.classList.toggle('done');
   updateToDo(e.target.dataset.id,e.target.classList.contains('done'))
}
function updateToDo(id,completed){
  fetch(`${apiUrl}/${id}`,{
    method:'PUT',
    body: JSON.stringify({completed}),
    headers:{
      'Content-Type':'appilcation/json' 
    }
  }).then(response => response.json())
  .then(data => console.log(data))
}
function deleteToDo(e){
 if(e.target.classList.contains('todo')){
  const id=e.target.dataset.id
   fetch(`${apiUrl}/${id}`,{
    method:"DELETE"
   }).then(res=>res.json())
   .then(()=> e.target.remove())
 }

}
function init(){
document.addEventListener('DOMContentLoaded',getTodos)
document.querySelector('#todo-form').addEventListener('submit',createToDos)
document.querySelector('#todo-list').addEventListener('click',toggleCompleted)
document.querySelector('#todo-list').addEventListener('dblclick',deleteToDo)
}
init()
