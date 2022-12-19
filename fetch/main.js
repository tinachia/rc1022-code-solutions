fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(array => console.log(array))
  .catch(err => console.log('fetch failed', err));

fetch('https://pokeapi.co/api/v2/pokemon/lapras')
  .then(res => res.json())
  .then(pokemon => console.log(pokemon))
  .catch(err => console.log('fetch failed', err));
