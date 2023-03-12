const global = {
  currentPage: window.location.pathname,
}

async function displayPopularMovies(){
//const results= await fetchAPIData('/movie/popular')
//destructed {results}
const {results}= await fetchAPIData('/movie/popular')
console.log(results);
results.forEach(movie =>{
  const div= document.createElement('div')
  div.className='card-body card'
  div.innerHTML=`<a href="movie-details.html?id=${movie.id}">
  ${
    movie.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w300${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />`
      : `<img
    src="../images/no-image.jpg"
    class="card-img-top"
    alt="${movie.title}"
/>`
  }
</a>
<div class="card-body">
  <h5 class="card-title">${movie.title}</h5>
  <p class="card-text">
    <small class="text-muted">Release: ${movie.release_date}</small>
  </p>
</div>`

document.querySelector('#popular-movies').appendChild(div)
})
}
async function displayPouplarTVShows(){
  const {results}= await fetchAPIData('/tv/popular')
console.log(results);
results.forEach(tv =>{
  const div= document.createElement('div')
  div.className='card-body card'
  div.innerHTML=`<a href="tv-details.html?id=${tv.id}">
  ${
    tv.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w300${tv.poster_path}"
    class="card-img-top"
    alt="${tv.name}"
  />`
      : `<img
    src="../images/no-image.jpg"
    class="card-img-top"
    alt="${tv.name}"
/>`
  }
</a>
<div class="card-body">
  <h5 class="card-title">${tv.name}</h5>
  <p class="card-text">
    <small class="text-muted">Release: ${tv.first_air_date}</small>
    
  </p>
  <p><small class="text-muted">Country: ${tv.origin_country}</small></p>
</div>`

document.querySelector('#popular-shows').appendChild(div)
})
}

async function fetchAPIData(endpoint){

  const API_key='6e24d641b14f53e559c6bc6710b05362'
  const API_url='https://api.themoviedb.org/3/'
  showSpinner()
  const response=await fetch(`${API_url}${endpoint}?api_key=${API_key}&language=en-US`)
  const data=await response.json()
  hideSpinner()
  return data;
}

function showSpinner(){
document.querySelector('.spinner').classList.add('show')
 
}
function hideSpinner(id){
  document.querySelector('.spinner').classList.remove('show')
  
}




function init(){

  switch(global.currentPage){
    case '/':
    case '/index.html':
    displayPopularMovies()
    //console.log('home');
    break;
    case '/movie-details.html':  
    console.log('movie details');
    break;
    case '/search.html':
    console.log('search');
    break;
    case '/tv-details.html':
    console.log('tv details');
    
    break;
    case '/shows.html':
    //console.log('shows');
    displayPouplarTVShows()
    break;


  }

highlightPageLinks()
}

function highlightPageLinks(){

const pageLinks= document.querySelectorAll('.nav-link')
pageLinks.forEach(link=>{
  if(link.getAttribute('href')==global.currentPage)
   link.classList.add('active')
   
})

}

document.addEventListener('DOMContentLoaded',init)