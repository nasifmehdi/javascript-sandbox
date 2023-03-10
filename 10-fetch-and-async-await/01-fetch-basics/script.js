// Fetching a JSON file
fetch('./movies.json')
.then(response=> {return response.json()})
.then(data => {console.log(data)})

fetch('https://api.github.com/users')
.then(response=> {return response.json()})
.then(data => data.forEach(element => console.log(element.login)))

