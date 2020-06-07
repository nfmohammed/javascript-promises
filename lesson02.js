//Lesson2: promise has 3 states: [pending, fulfilled, reject]
//Once the status updates, pending ->fullfilled or pending -> rejected, it can be changed again.

const prom = new Promise((res, rej) => {
    setTimeout(() => {
      res('success');
    }, 1000);
  });

const prom2 = prom.then(() => {
  throw new Error('error');
});
  
console.log('prom', prom);
console.log('prom2', prom2);

setTimeout(() => {
  console.log('prom', prom);
  console.log('prom2', prom2);
}, 2000);

  
//Output:
//   prom Promise { <pending> }
//   prom2 Promise { <pending> }
//   prom Promise { 'success' }
//   prom2 Promise {
//     <rejected> Error: error
//         at prom.then (/Users/nmohammed/Documents/Workspace/javascript-promises/lesson2.js:10:11) }
//   (node:59496) UnhandledPromiseRejectionWarning: Error: error
//       at prom.then (/Users/nmohammed/Documents/Workspace/javascript-promises/lesson2.js:10:11)
//   (node:59496) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
//   (node:59496) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.