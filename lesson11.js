//node-fetch is npm module
const fetch = require("node-fetch");

//execute fetch over the network.
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

//then, catch execution will wait for the promise to resolve. 
//then blocks can be chained
promise
    .then(res => res.json())
    .then(user => console.log('user.title = ', user.title ))
    .catch(err => console.error(err));

//this is executed first in the same event loop
console.log("Synchronous...");
