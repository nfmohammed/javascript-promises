//node-fetch is npm module
const fetch = require("node-fetch");

//execute fetch over the network.
const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

//then, catch execution will wait for the promise to resolve. 
//then blocks can be chained
promise1
    .then(res => res.json())
    .then(user => console.log('promise1 user.title = ', user.title ))
    .catch(err => console.error(err));

//this is executed first in the same event loop
console.log("promise1 scheduled...");


const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/-1');

promise2
    .then(res => res.json())
    .then(user => {
        if(user.title === undefined) {
            //note: throw the error, do not return the error
            throw new Error("promise2 user undefined");
        }
        return user;
    })
    .catch(err => console.error(err));

console.log("promise2 scheduled...");