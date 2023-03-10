function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviePromise=getData('./movies.json')
const actorPromise=getData('./actors.json')
const directorPromise=getData('./directors.json')

 Promise.all([moviePromise,actorPromise,directorPromise]).then(
  function(data){
    console.log(data.forEach(array=>console.log(array)));
  })
  
