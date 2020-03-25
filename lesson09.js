//Lesson9: .then can accept two parameters, the first is a function that handles success, and the second is a function that handles errors.
//.catch is a convenient way to write the second parameter of .then, but there is one thing to pay attention to in usage: .then the second error-handling function cannot catch the error thrown by the first successful function and subsequent ones .catch catches previous errors.

Promise.resolve()
  .then(
    function success(res) {
      throw new Error('Error after success');
    },
    function fail1(e) {
      console.error('fail1: ', e);
    }
  )
  .catch(function fail2(e) {
    console.error('fail2: ', e);
  });

//Output:
// fail2:  Error: Error after success
//     at success (/Users/nmohammed/Documents/Workspace/javascript-promises/lesson9.js:7:13)
//     at process._tickCallback (internal/process/next_tick.js:68:7)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:744:11)
//     at startup (internal/bootstrap/node.js:285:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)

console.log("-----------------")
Promise.resolve()
  .then(function success1 (res) {
    throw new Error('success1 error')
  }, function fail1 (e) {
    console.error('fail1: ', e)
  })
  .then(function success2 (res) {
  }, function fail2 (e) {
    console.error('fail2: ', e)
  })

//Output:
//   fail2:  Error: success1 error
//     at success1 (/Users/nmohammed/Documents/Workspace/javascript-promises/lesson9.js:24:11)
//     at process._tickCallback (internal/process/next_tick.js:68:7)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:744:11)
//     at startup (internal/bootstrap/node.js:285:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)